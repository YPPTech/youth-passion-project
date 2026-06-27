import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const outDir = path.join(root, "export", "ypp-donate-preview");

const SPONSOR_EMAIL =
  "leadership@youthpassionproject.org,registrar@youthpassionproject.org,sanvi.mehta@youthpassionproject.org";

function mailto(subject, body = "") {
  return `mailto:${SPONSOR_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function pledgeMailto(tier, amount) {
  return mailto(
    `YPP ${tier} Tier Pledge - $${amount}`,
    `Hello YPP Team,\n\nI would like to support Youth Passion Project at the ${tier} Tier ($${amount}).\n\nOrganization Name:\nPoint of Contact:\nEmail:\n\nThank you.`
  );
}

const INQUIRY_MAILTO = mailto("YPP Sponsorship Inquiry");

const tiers = [
  {
    id: "bronze",
    badge: "B",
    kicker: "Entry Sponsorship",
    name: "Bronze",
    amount: 250,
    detail:
      "A meaningful starting point for businesses and individuals who want to help keep YPP classes free.",
    benefits: [
      "Logo displayed on the YPP Sponsor Page for 3 months",
      "Name listed in one monthly newsletter",
      "Sponsor appreciation social media mention",
    ],
    orbitClass: "orbit-1",
    modalEyebrow: "Bronze Tier · $250",
    modalTitle:
      "Entry-level sponsorship recognition for supporters who want their gift visibly tied to YPP's mission.",
    modalSections: [
      {
        title: "What You Receive",
        items: [
          "Website recognition: Your logo and website link are added to the Sponsor Page on the YPP website for 3 months.",
          "Newsletter recognition: Your organization is listed in our monthly newsletter, distributed to families, volunteers, instructors, and supporters.",
          "Social media recognition: Your organization is tagged (where applicable) in a sponsor appreciation post on one official YPP social media platform.",
          "Digital certificate: A Digital Certificate of Appreciation recognizing your support.",
          "Session Impact Report: The same one-page report all sponsors receive when the sponsored session ends.",
        ],
      },
      {
        title: "Why It Matters",
        paragraphs: [
          "At this level, your sponsorship supports educational materials and operational costs for approximately 10 students.",
        ],
      },
    ],
  },
  {
    id: "silver",
    badge: "S",
    kicker: "Community Sponsorship",
    name: "Silver",
    amount: 500,
    detail: "Designed for organizations seeking expanded visibility and stronger newsletter placement.",
    benefits: [
      "Includes all Bronze benefits, plus 6-month logo placement",
      "Dedicated sponsor spotlight social media post",
      "Enhanced newsletter placement in one parent newsletter issue",
    ],
    orbitClass: "orbit-2",
    modalEyebrow: "Silver Tier · $500",
    modalTitle:
      "Community sponsorship with stronger public recognition and all Bronze tier benefits included.",
    modalSections: [
      {
        title: "Included From Bronze",
        items: [
          "Website, newsletter, and social media recognition.",
          "Digital Certificate of Appreciation.",
        ],
      },
      {
        title: "Silver Additions",
        items: [
          "Extended logo placement: Your logo is displayed on the YPP Sponsor Page for 6 months instead of 3.",
          "Dedicated sponsor spotlight: A social media post highlighting your organization's support of student education and community impact.",
          "Enhanced newsletter placement: Your logo is featured prominently within one parent newsletter issue, rather than listed among other sponsors.",
        ],
        paragraphs: [
          "Supports programming, outreach, and educational resources for approximately 20 students.",
        ],
      },
    ],
  },
  {
    id: "gold",
    badge: "G",
    kicker: "Impact Sponsorship",
    name: "Gold",
    amount: 1000,
    detail:
      "A strong option for organizations that want sponsor visibility across newsletters and program materials.",
    benefits: [
      "Includes all Silver benefits, plus 12-month logo placement",
      "Featured Sponsor section in one newsletter and program materials",
      "Optional sponsor message (up to 150 words) in a newsletter",
    ],
    orbitClass: "orbit-3",
    highlight: true,
    popular: true,
    modalEyebrow: "Gold Tier · $1,000",
    modalTitle:
      "Impact sponsorship for organizations that want meaningful visibility and a clearer connection to student outcomes.",
    modalSections: [
      {
        title: "Included From Silver",
        items: [
          "All Bronze and Silver recognition, including 6-month logo placement and a dedicated sponsor spotlight post.",
        ],
      },
      {
        title: "Gold Additions",
        items: [
          "Extended logo placement: Your logo is displayed on the YPP Sponsor Page for a full 12 months.",
          "Featured Sponsor section: A dedicated section in one newsletter describing your organization and commitment to youth education.",
          "Program material recognition: Your logo may appear on volunteer orientation presentations, program handbooks, and selected chapter materials.",
          "Sponsor message: Provide a brief written message (up to 150 words) included in a newsletter.",
        ],
        paragraphs: ["Supports free educational programming for approximately 40 students."],
      },
    ],
  },
  {
    id: "platinum",
    badge: "P",
    kicker: "Premier Sponsorship",
    name: "Platinum",
    amount: 2500,
    detail:
      "For organizations seeking high-visibility recognition while supporting expansion into new communities.",
    benefits: [
      "Includes all Gold benefits, plus Official Program Sponsor designation",
      "Dedicated sponsor profile page on the YPP website",
      "Priority logo placement on sponsor materials",
    ],
    orbitClass: "orbit-4",
    modalEyebrow: "Platinum Tier · $2,500",
    modalTitle: "Premier sponsorship with high-visibility placement across YPP's core sponsor materials.",
    modalSections: [
      {
        title: "Included From Gold",
        items: [
          "All Bronze, Silver, and Gold recognition, including 12-month logo placement, a Featured Sponsor newsletter section, and program materials.",
        ],
      },
      {
        title: "Platinum Additions",
        items: [
          "Program Sponsor designation: Your organization is recognized as the primary supporter of a specific initiative, session, chapter launch, workshop series, or educational campaign.",
          "Dedicated website profile: A sponsor profile page including your company logo, organization description, website link, and partnership announcement.",
          "Expanded social recognition: Recognition across multiple social media posts.",
          "Priority branding: Logo placement above lower sponsorship tiers on applicable materials.",
        ],
        paragraphs: [
          "Supports expansion into new communities and programming for approximately 100 students.",
        ],
      },
    ],
  },
  {
    id: "diamond",
    badge: "D",
    kicker: "Lead Sponsorship",
    name: "Diamond",
    amount: 5000,
    detail:
      "Top-level sponsorship for partners seeking the strongest recognition and deepest mission connection.",
    benefits: [
      "Includes all Platinum benefits, plus Premier Sponsor designation",
      "Featured homepage placement and executive meeting with leadership",
      "Year-round recognition across YPP communications",
    ],
    orbitClass: "orbit-5",
    visionary: true,
    modalEyebrow: "Diamond Tier · $5,000",
    modalTitle:
      "Lead sponsorship for partners seeking the strongest recognition and deepest mission connection.",
    modalSections: [
      {
        title: "Included From Platinum",
        items: [
          "All Bronze, Silver, Gold, and Platinum recognition, including a dedicated website profile and priority branding.",
        ],
      },
      {
        title: "Diamond Additions",
        items: [
          "Premier Sponsor designation: Your organization is recognized as a Premier Sponsor wherever top-level sponsors are listed.",
          "Homepage placement: Your logo is featured prominently on the YPP website homepage.",
          "Exclusive annual recognition: Recognition as an exclusive annual partner across YPP communications.",
          "Customized partnership: Work directly with YPP leadership to support a major initiative, such as chapter expansion, instructor training, scholarship support, technology infrastructure, or new program development.",
          "Executive meeting: An annual strategy conversation with YPP leadership regarding organizational growth, impact, and future collaboration.",
        ],
        paragraphs: [
          "Helps fund chapter expansion, technology infrastructure, instructor development, and free educational access for hundreds of students.",
        ],
      },
    ],
  },
];

function esc(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function renderModalSections(sections) {
  return sections
    .map((section) => {
      const items = section.items
        ? `<ul>${section.items.map((item) => `<li>${esc(item)}</li>`).join("")}</ul>`
        : "";
      const paragraphs = section.paragraphs
        ? section.paragraphs.map((p) => `<p>${esc(p)}</p>`).join("")
        : "";
      return `<div><h3>${esc(section.title)}</h3>${items}${paragraphs}</div>`;
    })
    .join("");
}

function renderTierCard(tier) {
  const classes = [
    "tier-card",
    tier.orbitClass,
    tier.highlight ? "highlight" : "",
    tier.visionary ? "visionary" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return `<article class="${classes}">
    ${tier.popular ? '<p class="popular">Most Selected</p>' : ""}
    <div class="tier-badge" aria-hidden="true">${esc(tier.badge)}</div>
    <p class="tier-kicker">${esc(tier.kicker)}</p>
    <h3>${esc(tier.name)}</h3>
    <p class="tier-detail">${esc(tier.detail)}</p>
    <a class="price-button" href="${pledgeMailto(tier.name, tier.amount)}">$${tier.amount.toLocaleString()}</a>
    <ul class="tier-benefits">${tier.benefits.map((b) => `<li>${esc(b)}</li>`).join("")}</ul>
    <button class="tier-more-button" type="button" data-modal-target="${tier.id}-modal">Learn more</button>
  </article>`;
}

function renderModal(tier) {
  return `<dialog class="tier-modal" id="${tier.id}-modal">
    <div class="modal-content">
      <button class="modal-close" type="button" aria-label="Close popup">Close</button>
      <p class="eyebrow">${esc(tier.modalEyebrow)}</p>
      <h2>${esc(tier.modalTitle)}</h2>
      <div class="modal-grid">${renderModalSections(tier.modalSections)}</div>
      <p class="modal-impact-note">All sponsors receive the same Session Impact Report when the sponsored session ends.</p>
    </div>
  </dialog>`;
}

const donateCss = fs.readFileSync(path.join(root, "src/app/donate/donate-sponsorship.css"), "utf8");
const css = `/* Standalone preview — Youth Passion Project donate/sponsorship page */
@import url("https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;500;600;700&family=Playfair+Display:wght@400;700&family=Nunito:wght@600;700;800&display=swap");

:root {
  --ypp-deep: #3b0f6e;
  --ypp-primary: #6b21c8;
  --ypp-mid: #8b3fe8;
  --ypp-white: #ffffff;
  --ypp-ink: #1a0533;
  --ypp-muted: #6b5f7a;
  --ypp-border: rgba(107, 33, 200, 0.15);
  --r-full: 999px;
  --font-dm-sans: "DM Sans", system-ui, sans-serif;
  --font-playfair: "Playfair Display", Georgia, serif;
  --font-nunito: "Nunito", system-ui, sans-serif;
}

* { box-sizing: border-box; }

html, body {
  margin: 0;
  padding: 0;
}

body {
  font-family: var(--font-dm-sans);
  color: var(--ypp-ink);
  background: #f3ecff;
  line-height: 1.6;
}

.page-header {
  border-bottom: 1px solid var(--ypp-border);
  background: var(--ypp-white);
  padding: 3rem 1rem;
}

.page-header-inner {
  max-width: 48rem;
  margin: 0 auto;
  text-align: center;
}

.page-header-label {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.page-header-label span.line {
  width: 2rem;
  height: 1px;
  background: rgba(107, 33, 200, 0.6);
}

.page-header-label p {
  margin: 0;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--ypp-primary);
  text-decoration: underline;
  text-underline-offset: 2px;
}

.page-header h1 {
  margin: 0;
  font-family: var(--font-playfair);
  font-size: clamp(2.25rem, 5vw, 3rem);
  font-weight: 700;
  line-height: 1.15;
  color: var(--ypp-ink);
}

.page-header .subtitle {
  margin: 1rem 0 0;
  font-size: 1.05rem;
  color: var(--ypp-muted);
}

.btn-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  background: linear-gradient(135deg, var(--ypp-primary), var(--ypp-mid));
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: var(--r-full);
  box-shadow: 0 4px 20px rgba(107, 33, 200, 0.4);
  font-weight: 600;
  font-size: 1rem;
  text-decoration: none;
  transition: transform 0.18s, box-shadow 0.18s;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 28px rgba(107, 33, 200, 0.5);
}

${donateCss.replace(/var\(--font-dm-sans\), system-ui, sans-serif/g, "var(--font-dm-sans)").replace(/var\(--font-playfair\), Georgia, serif/g, "var(--font-playfair)").replace(/var\(--font-nunito\), system-ui, sans-serif/g, "var(--font-nunito)")}
`;

const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Sponsorship | Youth Passion Project</title>
  <meta name="description" content="Support Youth Passion Project through tiered sponsorships that help keep free, student-taught classes available to learners worldwide." />
  <link rel="stylesheet" href="styles.css" />
</head>
<body>
  <section class="page-header">
    <div class="page-header-inner">
      <div class="page-header-label">
        <span class="line" aria-hidden="true"></span>
        <p>501(c)(3) · Tax-Deductible</p>
        <span class="line" aria-hidden="true"></span>
      </div>
      <h1>Sponsorship</h1>
      <p class="subtitle">Support free, student-taught classes for elementary and middle school students around the world.</p>
      <a class="btn-primary" href="${INQUIRY_MAILTO}">Request sponsorship details</a>
    </div>
  </section>

  <div class="donate-sponsorship">
    <header class="hero">
      <div class="stars" aria-hidden="true"></div>
      <div class="container hero-content">
        <div class="stats" aria-label="Organization impact snapshot">
          <div class="stat-card">
            <p class="stat-value">3,400+</p>
            <p class="stat-label">Student sign-ups</p>
          </div>
          <div class="stat-card">
            <p class="stat-value">400+</p>
            <p class="stat-label">Class sections</p>
          </div>
          <div class="stat-card">
            <p class="stat-value">30+</p>
            <p class="stat-label">Countries represented</p>
          </div>
        </div>
        <div class="hero-tags" aria-label="YPP focus areas">
          <span>Free student-taught classes</span>
          <span>Elementary &amp; middle school learners</span>
          <span>Student-led leadership</span>
          <span>Global learning community</span>
        </div>
      </div>
    </header>

    <section class="section container visual-section">
      <div class="impact-panel">
        <div class="impact-copy">
          <p class="eyebrow">Sponsor Impact</p>
          <h2>Invest in accessible education, youth leadership, and global student connection.</h2>
        </div>
        <div class="impact-icons" aria-label="Sponsorship impact areas">
          <div><span>Free</span><strong>Courses</strong></div>
          <div><span>Peer</span><strong>Mentors</strong></div>
          <div><span>Global</span><strong>Access</strong></div>
          <div><span>Student</span><strong>Leaders</strong></div>
        </div>
      </div>
    </section>

    <section class="section container detail-section">
      <div class="section-heading"><h2>What Sponsorship Supports</h2></div>
      <div class="detail-grid">
        <article class="detail-card">
          <span class="shape badge-ring" aria-hidden="true"></span>
          <p class="detail-label">Accessible Programs</p>
          <h3>Free, student-taught classes that help younger students explore new interests in person.</h3>
          <div class="mini-tags"><span>Coding</span><span>Chess</span><span>Creative Writing</span><span>Art</span></div>
        </article>
        <article class="detail-card">
          <span class="shape badge-arc" aria-hidden="true"></span>
          <p class="detail-label">Qualified Student Instructors</p>
          <h3>Selected high school mentors who prepare, teach, and support younger learners.</h3>
          <div class="mini-tags"><span>Training</span><span>Curriculum</span><span>Small groups</span></div>
        </article>
        <article class="detail-card">
          <span class="shape badge-star" aria-hidden="true"></span>
          <p class="detail-label">Youth Leadership</p>
          <h3>Opportunities for officers to build communication, operations, and service skills.</h3>
          <div class="mini-tags"><span>Chapters</span><span>Tech</span><span>Operations</span></div>
        </article>
      </div>
    </section>

    <section class="section section-alt">
      <div class="container">
        <div class="section-heading">
          <h2>Sponsorship Tiers</h2>
          <p>Select a sponsorship level to draft a pledge email to the YPP leadership team. Every sponsor receives a Session Impact Report when the sponsored session ends.</p>
        </div>
        <div class="tier-grid">
          ${tiers.map(renderTierCard).join("\n          ")}
        </div>
      </div>
    </section>

    <section class="section cta">
      <div class="container cta-content">
        <h2>Become a YPP Sponsor</h2>
        <p>Support accessible, student-taught education through a tax-exempt nonprofit organization.</p>
        <a class="button" href="${INQUIRY_MAILTO}">Request Sponsorship Details</a>
      </div>
    </section>

    <footer class="donate-footer">
      <div class="container">
        <p>Youth Passion Project (YPP) • Delaware Nonprofit Corporation • 501(c)(3)</p>
        <p class="fineprint">All sponsors receive the same Session Impact Report. This package excludes event-based activations.</p>
      </div>
    </footer>

    ${tiers.map(renderModal).join("\n    ")}
  </div>

  <script>
    document.querySelectorAll("[data-modal-target]").forEach((button) => {
      button.addEventListener("click", () => {
        document.getElementById(button.dataset.modalTarget)?.showModal();
      });
    });

    document.querySelectorAll(".tier-modal").forEach((modal) => {
      modal.querySelector(".modal-close")?.addEventListener("click", () => modal.close());
      modal.addEventListener("click", (event) => {
        if (event.target === modal) modal.close();
      });
    });
  </script>
</body>
</html>
`;

const readme = `YOUTH PASSION PROJECT — SPONSORSHIP PAGE PREVIEW
================================================

HOW TO VIEW THIS PAGE
---------------------
1. Extract this entire folder from the zip file.
2. Double-click:  index.html
3. The sponsorship page will open in your web browser.

No internet connection is required after the first load (fonts may load from Google if online).

FILES
-----
- index.html   ← open this file
- styles.css     page styling
- README.txt     these instructions

This is a static preview of the YPP /donate sponsorship page.
Email links will open your default mail app when clicked.

Generated from the Youth Passion Project website codebase.
`;

fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "index.html"), html);
fs.writeFileSync(path.join(outDir, "styles.css"), css);
fs.writeFileSync(path.join(outDir, "README.txt"), readme);

console.log(`Exported standalone preview to:\n${outDir}`);
