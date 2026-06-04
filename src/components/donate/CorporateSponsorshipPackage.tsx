import Image from "next/image";
import { Newsreader, Plus_Jakarta_Sans } from "next/font/google";
import { LOGO } from "@/constants/logo";
import {
  SPONSORSHIP_INQUIRY_MAILTO,
  sponsorshipAddons,
  sponsorshipPledgeMailto,
  sponsorshipRecognition,
  sponsorshipTiers,
} from "@/data/sponsorshipTiers";
import "@/app/donate/donate-sponsorship.css";

const sponsorSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--sponsor-font-body",
  display: "swap",
});

const sponsorSerif = Newsreader({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--sponsor-font-display",
  display: "swap",
});

export default function CorporateSponsorshipPackage() {
  return (
    <div
      id="corporate-sponsorship"
      className={`yppSponsorship ${sponsorSans.variable} ${sponsorSerif.variable}`}
      style={{
        fontFamily: "var(--sponsor-font-body), Plus Jakarta Sans, sans-serif",
      }}
    >
      <header className="hero">
        <div className="stars" aria-hidden="true" />
        <div className="container hero-content">
          <p className="hero-package-label">Corporate Sponsorship Package</p>
          <div className="brand-row">
            <Image
              src={LOGO.src}
              alt={LOGO.alt}
              width={LOGO.width}
              height={LOGO.height}
              priority
              sizes="(max-width: 639px) 68px, 76px"
              unoptimized
              className="sponsor-brand-logo h-10 w-auto max-w-[4.25rem] shrink-0 object-contain sm:h-11 sm:max-w-[4.75rem]"
            />
            <div className="sponsor-brand-text min-w-0 flex-1 leading-tight">
              <span className="sponsor-brand-name line-clamp-2 sm:line-clamp-none">
                Youth Passion Project
              </span>
              <span className="sponsor-brand-tagline line-clamp-1">Guiding the stars of tomorrow.</span>
            </div>
          </div>

          <p className="lead">
            Free classes taught by passionate students—designed to help learners grow, explore, and succeed
            together. Corporate partners help us keep every class free for families.
          </p>

          <div className="stats" aria-label="Organization impact snapshot">
            <div className="stat-card">
              <p className="stat-value">3,400+</p>
              <p className="stat-label">Student sign-ups</p>
            </div>
            <div className="stat-card">
              <p className="stat-value">400+</p>
              <p className="stat-label">Class sections</p>
            </div>
            <div className="stat-card">
              <p className="stat-value">30+</p>
              <p className="stat-label">Countries represented</p>
            </div>
          </div>

          <div className="hero-tags" aria-label="YPP focus areas">
            <span>Free classes</span>
            <span>Elementary &amp; middle school learners</span>
            <span>Student-led leadership</span>
            <span>Global learning community</span>
          </div>
        </div>
      </header>

      <section className="section container visual-section">
        <div className="impact-panel">
          <div className="impact-copy">
            <p className="eyebrow">Sponsor Impact</p>
            <h2>Give students room to explore interests, build skills, and lead.</h2>
          </div>
          <div className="impact-icons" aria-label="Sponsorship impact areas">
            <div>
              <span>Free</span>
              <strong>Courses</strong>
            </div>
            <div>
              <span>Peer</span>
              <strong>Mentors</strong>
            </div>
            <div>
              <span>Global</span>
              <strong>Access</strong>
            </div>
            <div>
              <span>Student</span>
              <strong>Leaders</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="section container detail-section">
        <div className="section-heading">
          <h2>What Your Sponsorship Supports</h2>
        </div>

        <div className="detail-grid">
          <article className="detail-card">
            <span className="shape badge-ring" aria-hidden="true" />
            <p className="detail-label">Classes</p>
            <h3>Subjects students choose because they are curious.</h3>
            <div className="mini-tags">
              <span>Coding</span>
              <span>Chess</span>
              <span>Creative Writing</span>
              <span>Art</span>
            </div>
          </article>
          <article className="detail-card">
            <span className="shape badge-arc" aria-hidden="true" />
            <p className="detail-label">Instructors</p>
            <h3>High school mentors who teach what they love.</h3>
            <div className="mini-tags">
              <span>Training</span>
              <span>Curriculum</span>
              <span>Small groups</span>
            </div>
          </article>
          <article className="detail-card">
            <span className="shape badge-star" aria-hidden="true" />
            <p className="detail-label">Leadership</p>
            <h3>Room for students to build skills beyond the classroom.</h3>
            <div className="mini-tags">
              <span>Chapters</span>
              <span>Tech</span>
              <span>Operations</span>
            </div>
          </article>
        </div>
      </section>

      <section className="section section-alt" id="sponsorship-tiers">
        <div className="container">
          <div className="section-heading">
            <h2>Sponsorship Tiers</h2>
            <p>Click an amount to email your pledge.</p>
          </div>

          <div className="tier-grid">
            {sponsorshipTiers.map((tier) => (
              <article
                key={tier.id}
                className={[
                  "tier-card",
                  tier.orbitClass,
                  tier.highlight && "highlight",
                  tier.visionary && "visionary",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                {tier.popular ? <p className="popular">Most Selected</p> : null}
                <div className={`tier-planet ${tier.planetClass}`} aria-hidden="true" />
                <p className="tier-kicker">{tier.kicker}</p>
                <h3>{tier.name}</h3>
                <p className="tier-detail">{tier.detail}</p>
                <a
                  className="price-button"
                  href={sponsorshipPledgeMailto(tier.name, tier.amount)}
                >
                  ${tier.amount.toLocaleString()}
                </a>
                <div className="benefit-chips">
                  {tier.benefits.map((benefit) => (
                    <span key={benefit}>{benefit}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section container addon-section">
        <h2>Optional Add-Ons</h2>
        <div className="addons">
          {sponsorshipAddons.map((addon) => (
            <span key={addon}>{addon}</span>
          ))}
        </div>
      </section>

      <section className="section container recognition-section">
        <div className="recognition-board">
          <div className="recognition-copy">
            <p className="eyebrow">Sponsor Recognition</p>
            <h2>Digital-first benefits, no event requirements.</h2>
          </div>
          <div className="recognition-list">
            {sponsorshipRecognition.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta">
        <div className="container cta-content">
          <h2>Become a YPP Sponsor</h2>
          <p>Support accessible learning led by students who are passionate about what they teach.</p>
          <a className="button" href={SPONSORSHIP_INQUIRY_MAILTO}>
            Request Sponsorship Details
          </a>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <p>Youth Passion Project (YPP) • Delaware Nonprofit Corporation • 501(c)(3)</p>
          <p className="fineprint">
            This sponsorship package intentionally excludes event-based activations.
          </p>
        </div>
      </footer>
    </div>
  );
}
