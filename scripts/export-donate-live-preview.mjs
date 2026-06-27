/**
 * Captures the live /donate page from localhost and writes a standalone
 * folder + zip that matches the site exactly (header, footer, styles, assets).
 *
 * Usage: npm run dev   (in another terminal)
 *        node scripts/export-donate-live-preview.mjs
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const outDir = path.join(root, "export", "ypp-donate-preview");
const baseUrl = process.env.PREVIEW_BASE_URL ?? "http://localhost:3000";
const donateUrl = `${baseUrl}/donate`;

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function localAssetPath(url) {
  try {
    const parsed = new URL(url);
    if (parsed.origin !== new URL(baseUrl).origin) return null;
    const pathname = decodeURIComponent(parsed.pathname);
    if (!pathname.startsWith("/")) return null;
    return pathname.slice(1);
  } catch {
    return null;
  }
}

function safeAssetFilename(assetPath) {
  const withoutQuery = assetPath.split("?")[0];
  const normalized = withoutQuery.replace(/^\/+/, "").replace(/\//g, "_");
  return normalized || "asset";
}

async function downloadAsset(page, url, destPath) {
  ensureDir(path.dirname(destPath));
  if (fs.existsSync(destPath)) return;

  const response = await page.request.get(url);
  if (!response.ok()) {
    console.warn(`Skipped asset (${response.status()}): ${url}`);
    return;
  }
  const buffer = await response.body();
  fs.writeFileSync(destPath, buffer);
}

function rewriteHtmlPaths(html, assetMap) {
  let out = html;
  for (const [from, to] of assetMap) {
    out = out.split(from).join(to);
  }
  return out;
}

async function main() {
  ensureDir(outDir);

  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

  let response;
  try {
    response = await page.goto(donateUrl, { waitUntil: "networkidle", timeout: 120_000 });
  } catch (error) {
    await browser.close();
    console.error(
      `\nCould not load ${donateUrl}\nStart the dev server first: npm run dev\n\n${error}`
    );
    process.exit(1);
  }

  if (!response?.ok()) {
    await browser.close();
    console.error(`Page returned ${response?.status() ?? "unknown"} for ${donateUrl}`);
    process.exit(1);
  }

  await page.waitForSelector("header.nav-bar", { timeout: 30_000 });
  await page.waitForSelector(".donate-sponsorship", { timeout: 30_000 });

  const tierIds = ["bronze", "silver", "gold", "platinum", "diamond"];
  const capturedModals = [];

  for (let i = 0; i < tierIds.length; i++) {
    const button = page.locator("button.tier-more-button").nth(i);
    await button.click();
    await page.waitForSelector("dialog.tier-modal", { state: "visible", timeout: 10_000 });
    const modalHtml = await page.locator("dialog.tier-modal").evaluate((el) => el.outerHTML);
    capturedModals.push(modalHtml);
    await page.locator("dialog.tier-modal .modal-close").click();
    await page.waitForSelector("dialog.tier-modal", { state: "detached", timeout: 10_000 });
  }

  const { html, title, styles, assetUrls } = await page.evaluate(() => {
    const assetUrls = new Set();

    document.querySelectorAll("img[src], source[srcset], link[rel='icon'], link[rel='apple-touch-icon']").forEach((el) => {
      const src = el.getAttribute("src");
      const href = el.getAttribute("href");
      if (src?.startsWith("/")) assetUrls.add(src);
      if (href?.startsWith("/")) assetUrls.add(href);
      const srcset = el.getAttribute("srcset");
      if (srcset) {
        srcset.split(",").forEach((part) => {
          const url = part.trim().split(/\s+/)[0];
          if (url?.startsWith("/")) assetUrls.add(url);
        });
      }
    });

    const styles = Array.from(document.querySelectorAll("style"))
      .map((node) => node.textContent ?? "")
      .join("\n");

    const clone = document.documentElement.cloneNode(true);
    clone.querySelectorAll("script").forEach((node) => node.remove());
    clone.querySelectorAll("nextjs-portal, next-route-announcer").forEach((node) => node.remove());

    return {
      title: document.title,
      html: clone.outerHTML,
      styles,
      assetUrls: Array.from(assetUrls),
    };
  });

  const stylesheetHrefs = await page.evaluate(() =>
    Array.from(document.querySelectorAll('link[rel="stylesheet"]'))
      .map((link) => link.getAttribute("href"))
      .filter(Boolean)
  );

  const cssChunks = [styles];
  for (const href of stylesheetHrefs) {
    const absolute = new URL(href, donateUrl).toString();
    const res = await page.request.get(absolute);
    if (res.ok()) {
      cssChunks.push(await res.text());
    }
  }

  const assetMap = new Map();
  for (const assetPath of assetUrls) {
    const absolute = new URL(assetPath, donateUrl).toString();
    const relative = `assets/${safeAssetFilename(assetPath)}`;
    assetMap.set(assetPath, relative);
    await downloadAsset(page, absolute, path.join(outDir, relative));
  }

  // Next/Image may use encoded paths — also pull logo from public
  const logoSrc = "/logo.png";
  if (!assetMap.has(logoSrc)) {
    const relative = "assets/logo.png";
    assetMap.set(logoSrc, relative);
    await downloadAsset(page, new URL(logoSrc, donateUrl).toString(), path.join(outDir, relative));
  }

  let finalHtml = rewriteHtmlPaths(html, assetMap);

  // Replace external stylesheet links with our bundled file
  finalHtml = finalHtml.replace(/<link[^>]+rel=["']stylesheet["'][^>]*>/gi, "");
  finalHtml = finalHtml.replace(/<link[^>]+rel=["']preload["'][^>]*>/gi, "");
  finalHtml = finalHtml.replace(/<meta name="next-size-adjust"[^>]*>/gi, "");

  // Inject bundled CSS before </head>
  const bundledCss = cssChunks.join("\n\n");
  fs.writeFileSync(path.join(outDir, "styles.css"), bundledCss);

  finalHtml = finalHtml.replace(
    "</head>",
    '  <link rel="stylesheet" href="styles.css" />\n</head>'
  );

  // Strip Next.js hydration attributes for cleaner static file
  finalHtml = finalHtml.replace(/\sdata-nimg="[^"]*"/g, "");
  finalHtml = finalHtml.replace(/\sdata-reactroot=""/g, "");

  tierIds.forEach((tierId, index) => {
    finalHtml = finalHtml.replace(
      '<button class="tier-more-button" type="button">',
      `<button class="tier-more-button" type="button" data-modal-target="${tierId}-modal">`
    );
  });

  const modalsBlock = capturedModals
    .map((modalHtml, index) =>
      modalHtml
        .replace(/<dialog class="tier-modal"/, `<dialog class="tier-modal" id="${tierIds[index]}-modal"`)
        .replace(/\sopen(?:="")?/, "")
    )
    .join("\n");

  finalHtml = finalHtml.replace(
    /(<footer class="donate-footer">[\s\S]*?<\/footer>)/,
    (match) => `${match}\n${modalsBlock}`
  );

  // Re-enable tier modal interactions (scripts removed above)
  const modalScript = `
  <script>
    document.querySelectorAll("[data-modal-target]").forEach((button) => {
      button.addEventListener("click", () => {
        document.getElementById(button.dataset.modalTarget)?.showModal();
      });
    });
    document.querySelectorAll("dialog.tier-modal").forEach((modal) => {
      modal.querySelector(".modal-close")?.addEventListener("click", () => modal.close());
      modal.addEventListener("click", (event) => {
        if (event.target === modal) modal.close();
      });
    });
  </script>`;

  finalHtml = finalHtml.replace("</body>", `${modalScript}\n</body>`);

  fs.writeFileSync(path.join(outDir, "index.html"), `<!DOCTYPE html>\n${finalHtml.replace(/^<html/i, "<html")}`);

  const readme = `YOUTH PASSION PROJECT — DONATE / SPONSORSHIP PAGE (LIVE PREVIEW)
================================================================

This folder is an exact static snapshot of:
  ${donateUrl}

HOW TO VIEW
-----------
1. Extract this entire folder from the zip.
2. Double-click:  index.html
3. The page opens in your web browser with the same design as the live site.

FILES
-----
- index.html   ← OPEN THIS FILE
- styles.css   all page styles (from the real site)
- assets/      images used on the page
- README.txt   these instructions

Note: Site navigation links point to other pages on youthpassionproject.org
paths and will not work offline. The donate/sponsorship content is fully viewable.

Generated: ${new Date().toISOString()}
`;

  fs.writeFileSync(path.join(outDir, "README.txt"), readme);

  await browser.close();

  console.log(`\nExported live /donate preview to:\n${outDir}`);
  console.log(`Title: ${title}`);
  console.log(`Assets: ${assetMap.size}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
