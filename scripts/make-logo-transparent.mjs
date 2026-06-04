import fs from "fs";
import path from "path";
import sharp from "sharp";

const root = path.resolve(import.meta.dirname, "..");
const input =
  process.argv[2] ??
  (fs.existsSync(path.join(root, "public", "logo.png"))
    ? path.join(root, "public", "logo.png")
    : path.join(root, "public", "logo-source.jpg"));
const outputs = [
  path.join(root, "public", "logo.png"),
  path.join(root, "src", "app", "icon.png"),
  path.join(root, "src", "app", "apple-icon.png"),
];

/** Turn near-black background pixels transparent while keeping the purple artwork. */
function keyOutBlackBackground(data, width, height, channels) {
  for (let i = 0; i < width * height; i++) {
    const o = i * channels;
    const r = data[o];
    const g = data[o + 1];
    const b = data[o + 2];
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const lum = 0.2126 * r + 0.7152 * g + 0.0722 * b;

    // Pure/near-black background (not dark purple in the logo).
    const isFlatBlack = max < 42 && max - min < 18;
    const isVeryDark = lum < 28 && max < 55;

    if (isFlatBlack || isVeryDark) {
      data[o + 3] = 0;
      continue;
    }

    // Soft edge on dark fringe so halos don't show on white UI.
    if (lum < 52 && max < 72) {
      const alpha = Math.round(((lum - 28) / 24) * 255);
      data[o + 3] = Math.min(data[o + 3], Math.max(0, Math.min(255, alpha)));
    }
  }
}

const { data, info } = await sharp(input)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

const rgba = Buffer.from(data);
keyOutBlackBackground(rgba, info.width, info.height, info.channels);

const png = await sharp(rgba, {
  raw: { width: info.width, height: info.height, channels: info.channels },
})
  .png({ compressionLevel: 9, adaptiveFiltering: true })
  .toBuffer();

const temp = path.join(root, "public", "logo-transparent.tmp.png");
fs.writeFileSync(temp, png);
for (const out of outputs) {
  fs.copyFileSync(temp, out);
}
fs.unlinkSync(temp);

const meta = await sharp(png).metadata();
console.log(`Wrote transparent PNG ${info.width}x${info.height}, hasAlpha=${meta.hasAlpha}, bytes=${png.length}`);
