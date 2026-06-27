export const SPONSOR_EMAIL =
  "leadership@youthpassionproject.org,registrar@youthpassionproject.org,sanvi.mehta@youthpassionproject.org";

export function sponsorshipMailto(subject: string, body: string) {
  return `mailto:${SPONSOR_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function pledgeMailto(tier: string, amount: number) {
  return sponsorshipMailto(
    `YPP ${tier} Tier Pledge - $${amount}`,
    `Hello YPP Team,\n\nI would like to support Youth Passion Project at the ${tier} Tier ($${amount}).\n\nOrganization Name:\nPoint of Contact:\nEmail:\n\nThank you.`
  );
}

export const SPONSORSHIP_INQUIRY_MAILTO = sponsorshipMailto(
  "YPP Sponsorship Inquiry",
  ""
);

export type SponsorshipTier = {
  id: string;
  badge: string;
  kicker: string;
  name: string;
  amount: number;
  detail: string;
  benefits: string[];
  orbitClass: string;
  highlight?: boolean;
  popular?: boolean;
  visionary?: boolean;
  modalEyebrow: string;
  modalTitle: string;
  modalSections: {
    title: string;
    items?: string[];
    paragraphs?: string[];
  }[];
};

export const sponsorshipTiers: SponsorshipTier[] = [
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
    detail:
      "Designed for organizations seeking expanded visibility and stronger newsletter placement.",
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
    modalTitle:
      "Premier sponsorship with high-visibility placement across YPP's core sponsor materials.",
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
