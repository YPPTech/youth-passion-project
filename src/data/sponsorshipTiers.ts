export const SPONSORSHIP_INQUIRY_EMAILS = [
  "leadership@youthpassionproject.org",
  "registrar@youthpassionproject.org",
  "sanvi.mehta@youthpassionproject.org",
] as const;

const SPONSOR_MAILTO = SPONSORSHIP_INQUIRY_EMAILS.join(",");

export function sponsorshipPledgeMailto(tierName: string, amount: number) {
  const subject = encodeURIComponent(`YPP ${tierName} Tier Pledge - $${amount}`);
  const body = encodeURIComponent(
    `Hello YPP Team,\n\nI would like to support Youth Passion Project at the ${tierName} Tier ($${amount}).\n\nOrganization Name:\nPoint of Contact:\nEmail:\n\nThank you.`,
  );
  return `mailto:${SPONSOR_MAILTO}?subject=${subject}&body=${body}`;
}

export const SPONSORSHIP_INQUIRY_MAILTO = `mailto:${SPONSOR_MAILTO}?subject=${encodeURIComponent("YPP Sponsorship Inquiry")}`;

export type SponsorshipTier = {
  id: string;
  kicker: string;
  name: string;
  amount: number;
  detail: string;
  orbitClass: string;
  planetClass: string;
  benefits: string[];
  highlight?: boolean;
  popular?: boolean;
  visionary?: boolean;
};

export const sponsorshipTiers: SponsorshipTier[] = [
  {
    id: "supporter",
    kicker: "Launch",
    name: "Supporter",
    amount: 50,
    detail:
      "Best for families, local businesses, or first-time supporters who want to help keep YPP classes free.",
    orbitClass: "orbit-1",
    planetClass: "small",
    benefits: ["Name listing", "Social thanks", "Certificate"],
  },
  {
    id: "advocate",
    kicker: "Orbit",
    name: "Advocate",
    amount: 150,
    detail:
      "Designed for sponsors who want visible support across YPP's website, social channels, and newsletters.",
    orbitClass: "orbit-2",
    planetClass: "medium",
    benefits: ["Logo", "2 posts", "Newsletter"],
  },
  {
    id: "partner",
    kicker: "Comet",
    name: "Partner",
    amount: 300,
    detail:
      "A strong option for brands that want sponsor recognition plus direct updates on student impact.",
    orbitClass: "orbit-3",
    planetClass: "large",
    benefits: ["Spotlight", "Slides", "Updates"],
    highlight: true,
    popular: true,
  },
  {
    id: "champion",
    kicker: "Galaxy",
    name: "Champion",
    amount: 500,
    detail:
      "For organizations seeking higher visibility while backing accessible, student-led education at scale.",
    orbitClass: "orbit-4",
    planetClass: "bright",
    benefits: ["Homepage", "Materials", "Video"],
  },
  {
    id: "visionary",
    kicker: "North Star",
    name: "Visionary",
    amount: 1000,
    detail:
      "Top-level sponsorship for partners who want prominent recognition and a deeper mission connection.",
    orbitClass: "orbit-5",
    planetClass: "radiant",
    benefits: ["Official", "Briefing", "Collab"],
    visionary: true,
  },
];

export const sponsorshipAddons = [
  "Website Banner",
  "Resource Page",
  "Powered By",
  "Impact Report",
] as const;

export const sponsorshipRecognition = [
  "Website visibility",
  "Social media recognition",
  "Newsletter placement",
  "Impact updates",
  "Digital materials",
  "Mission-aligned collaboration",
] as const;
