import type { Metadata } from "next";
import DonateSponsorshipPage from "./DonateSponsorshipPage";

export const metadata: Metadata = {
  title: "Sponsorship | Youth Passion Project",
  description:
    "Support Youth Passion Project through tiered sponsorships that help keep free, student-taught classes available to learners worldwide.",
};

export default function DonatePage() {
  return <DonateSponsorshipPage />;
}
