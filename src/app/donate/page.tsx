import PageHeader from "@/components/PageHeader";
import CorporateSponsorshipPackage from "@/components/donate/CorporateSponsorshipPackage";

export default function DonatePage() {
  return (
    <div className="min-w-0 w-full">
      <PageHeader
        label="Donate"
        title="Support Youth Passion Project"
        subtitle="We are a 501(c)(3) nonprofit—corporate sponsorships help us keep programs free for students."
      />

      <CorporateSponsorshipPackage />
    </div>
  );
}
