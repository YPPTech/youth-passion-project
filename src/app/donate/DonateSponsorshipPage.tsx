"use client";

import { useEffect, useRef, useState } from "react";
import PageHeader from "@/components/PageHeader";
import {
  pledgeMailto,
  SPONSORSHIP_INQUIRY_MAILTO,
  sponsorshipTiers,
  type SponsorshipTier,
} from "./sponsorship-data";
import "./donate-sponsorship.css";

function TierModal({
  tier,
  onClose,
}: {
  tier: SponsorshipTier | null;
  onClose: () => void;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (tier) {
      if (!dialog.open) dialog.showModal();
    } else if (dialog.open) {
      dialog.close();
    }
  }, [tier]);

  if (!tier) return null;

  return (
    <dialog
      ref={dialogRef}
      className="tier-modal"
      onClose={onClose}
      onClick={(event) => {
        if (event.target === dialogRef.current) onClose();
      }}
    >
      <div className="modal-content">
        <button className="modal-close" type="button" aria-label="Close popup" onClick={onClose}>
          Close
        </button>
        <p className="eyebrow">{tier.modalEyebrow}</p>
        <h2>{tier.modalTitle}</h2>
        <div className="modal-grid">
          {tier.modalSections.map((section) => (
            <div key={section.title}>
              <h3>{section.title}</h3>
              {section.items ? (
                <ul>
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}
              {section.paragraphs?.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          ))}
        </div>
        <p className="modal-impact-note">
          All sponsors receive the same Session Impact Report when the sponsored session ends.
        </p>
      </div>
    </dialog>
  );
}

export default function DonateSponsorshipPage() {
  const [activeTierId, setActiveTierId] = useState<string | null>(null);
  const activeTier = sponsorshipTiers.find((tier) => tier.id === activeTierId) ?? null;

  return (
    <div className="min-w-0 w-full">
      <PageHeader
        label="501(c)(3) · Tax-Deductible"
        title="Sponsorship"
        subtitle="Support free, student-taught classes for elementary and middle school students around the world."
        action={
          <a href={SPONSORSHIP_INQUIRY_MAILTO} className="btn-primary inline-flex items-center rounded-full px-6 py-3 text-base">
            Request sponsorship details
          </a>
        }
      />

      <div className="donate-sponsorship min-w-0 w-full">
      <header className="hero">
        <div className="stars" aria-hidden="true" />
        <div className="container hero-content">
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
            <span>Free student-taught classes</span>
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
            <h2>Invest in accessible education, youth leadership, and global student connection.</h2>
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
          <h2>What Sponsorship Supports</h2>
        </div>

        <div className="detail-grid">
          <article className="detail-card">
            <span className="shape badge-ring" aria-hidden="true" />
            <p className="detail-label">Accessible Programs</p>
            <h3>Free, student-taught classes that help younger students explore new interests in person.</h3>
            <div className="mini-tags">
              <span>Coding</span>
              <span>Chess</span>
              <span>Creative Writing</span>
              <span>Art</span>
            </div>
          </article>
          <article className="detail-card">
            <span className="shape badge-arc" aria-hidden="true" />
            <p className="detail-label">Qualified Student Instructors</p>
            <h3>Selected high school mentors who prepare, teach, and support younger learners.</h3>
            <div className="mini-tags">
              <span>Training</span>
              <span>Curriculum</span>
              <span>Small groups</span>
            </div>
          </article>
          <article className="detail-card">
            <span className="shape badge-star" aria-hidden="true" />
            <p className="detail-label">Youth Leadership</p>
            <h3>Opportunities for officers to build communication, operations, and service skills.</h3>
            <div className="mini-tags">
              <span>Chapters</span>
              <span>Tech</span>
              <span>Operations</span>
            </div>
          </article>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-heading">
            <h2>Sponsorship Tiers</h2>
            <p>
              Select a sponsorship level to draft a pledge email to the YPP leadership team. Every sponsor
              receives a Session Impact Report when the sponsored session ends.
            </p>
          </div>

          <div className="tier-grid">
            {sponsorshipTiers.map((tier) => (
              <article
                key={tier.id}
                className={[
                  "tier-card",
                  tier.orbitClass,
                  tier.highlight ? "highlight" : "",
                  tier.visionary ? "visionary" : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                {tier.popular ? <p className="popular">Most Selected</p> : null}
                <div className="tier-badge" aria-hidden="true">
                  {tier.badge}
                </div>
                <p className="tier-kicker">{tier.kicker}</p>
                <h3>{tier.name}</h3>
                <p className="tier-detail">{tier.detail}</p>
                <a className="price-button" href={pledgeMailto(tier.name, tier.amount)}>
                  ${tier.amount.toLocaleString()}
                </a>
                <ul className="tier-benefits">
                  {tier.benefits.map((benefit) => (
                    <li key={benefit}>{benefit}</li>
                  ))}
                </ul>
                <button
                  className="tier-more-button"
                  type="button"
                  onClick={() => setActiveTierId(tier.id)}
                >
                  Learn more
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta">
        <div className="container cta-content">
          <h2>Become a YPP Sponsor</h2>
          <p>Support accessible, student-taught education through a tax-exempt nonprofit organization.</p>
          <a className="button" href={SPONSORSHIP_INQUIRY_MAILTO}>
            Request Sponsorship Details
          </a>
        </div>
      </section>

      <footer className="donate-footer">
        <div className="container">
          <p>Youth Passion Project (YPP) • Delaware Nonprofit Corporation • 501(c)(3)</p>
          <p className="fineprint">
            All sponsors receive the same Session Impact Report. This package excludes event-based activations.
          </p>
        </div>
      </footer>

      <TierModal tier={activeTier} onClose={() => setActiveTierId(null)} />
      </div>
    </div>
  );
}
