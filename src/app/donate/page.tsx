import type { Metadata } from "next";
import DonateSponsorshipPage from "./DonateSponsorshipPage";

export const metadata: Metadata = {
  title: "Donate & Sponsorship | Youth Passion Project",
  description:
    "Support Youth Passion Project with a tax-deductible donation or a sponsorship that helps keep free, student-taught classes available to learners worldwide.",
};

export default function DonatePage() {
  return <DonateSponsorshipPage />;
}
