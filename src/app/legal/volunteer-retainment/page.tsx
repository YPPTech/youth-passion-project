import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Volunteer Retainment Agreement | Youth Passion Project",
  description:
    "Volunteer retainment agreement and related agreements for Youth Passion Project volunteers.",
};

type Section = { id: string; title: string; paragraphs: string[] };

const sections: Section[] = [
  {
    id: "volunteer-retainment",
    title: "Volunteer Retainment Agreement",
    paragraphs: [
      "1. The purpose of this volunteer retainment agreement (hereafter \"Agreement\") is to set forth mutual understanding and agreement between the Youth Passion Project Inc. (hereafter \"The Project\"), a Delaware Nonprofit Corporation exempt by the Internal Revenue Service under 26 US Code Section 501(c)(3), and a volunteer (hereafter \"Volunteer\") on the retention of Volunteer by The Project and the terms of Volunteer's service.",
      "2. Volunteer shall be retained by The Project as only a volunteer and shall have a title stipulated by The Project's Corporate Secretary. Volunteer agrees to the Volunteer Compensation Agreement (found herein below).",
      "3. Volunteer may be given access to The Project's resources and Volunteer agrees to the Electronic Resource Use Agreement (found herein below).",
      "4. Under some circumstances Volunteer may have access to The Project's monetary resources and agrees to the Volunteer Monetary Management Agreement (found herein below) and the Volunteer Confidentiality Agreement (found herein below).",
      "5. Volunteer is expected to abide by The Project's conduct policy and agrees to the Volunteer Conduct Agreement (found herein below).",
      "6. Volunteer shall release The Project from liabilities which may arise from Volunteer's service, as such Volunteer agrees to the Volunteer Waiver Agreement (found herein below).",
      "7. Volunteer agrees that their role as a volunteer of The Project is not a form of employment and may be terminated at any time, for any reason by The Project. Volunteer may be removed from their role as a volunteer for any reason, including violation of this Agreement or any other agreement between The Project and Volunteer and if Volunteer's use of social media is deemed by The Project to be contrary to the values of The Project. Volunteer agrees and understands that conduct outside their role which reflects poorly on their judgement or the image of The Project may be grounds for removal. Volunteer agrees that their retainment is premised upon the provision of service which is of an adequate standard, and should the service Volunteer provides fail to meet an adequate standard (as decided by an internal investigation in accordance with the By-Laws of The Project), The Project may temporarily or permanently terminate Volunteer's retainment, thereby nullifying this Agreement.",
      "8. Volunteer expressly agrees that this Agreement is intended to be as broad and inclusive as permitted by the laws of Delaware and that the laws of Delaware shall govern, and the Courts of Delaware shall interpret this Agreement such that if one part of this Agreement is found to be unlawful, said clause shall cease to apply to parties, yet the remaining sections of the agreement shall still be valid. Signatories shall sign to indicate being of sound mind and body, having read and understood the Agreement, and if volunteer is not emancipated and is under the age of eighteen (18), their legal parent or guardian has agreed to this Agreement on their behalf. This Agreement shall be consistent with the by-laws of The Project at the date of the signing of this Agreement. A change to the by-laws of The Project after the signing of this Agreement shall not affect this Agreement.",
    ],
  },
  {
    id: "compensation",
    title: "Volunteer Compensation Agreement",
    paragraphs: [
      "1. The purpose of this volunteer compensation agreement is to set forth mutual understanding and agreement between The Project and any volunteer of The Project on issues of compensation or remuneration, membership fees, and reimbursement.",
      "2. Volunteer freely chooses to donate their time to The Project and shall receive no compensation, remuneration, or stipend of any kind. As such, Volunteer shall receive zero dollars and zero cents ($0.00) in compensation. In acknowledgement of Volunteer's service, The Project shall, from time to time, at the request of Volunteer, provide a written acknowledgement of Volunteer's service, stipulating the estimated hours Volunteer has spent in their role as a volunteer with The Project, to service-hour tracking organizations such as schools, clubs, and other incorporated or unincorporated organizations.",
      "3. Volunteer may, under certain circumstances, apply with the Chief Financial Officer of The Project to be reimbursed for expenses incurred in completion of Volunteer's duties. If approved, The Project may pay Volunteer a sum of monies to reimburse Volunteer for expenses incurred on behalf of The Project. Such a payment shall never be considered a compensation or remuneration of or for Volunteer's service on behalf of The Project.",
      "4. Volunteer shall not be considered, by default, or merely by virtue of their position a member of The Project and thus will not, by virtue of their position, incur any membership fees. The Project may invite Volunteer to become a member of The Project which may require a payment of some membership fees (which may be waived by The Project at its sole discretion), but no such membership is implied by this Agreement or by any other Agreement between The Project and Volunteer unless expressly noted as such.",
      "5. Volunteer may, in recognition of their outstanding service to The Project, be nominated by The Project to receive awards issued by organizations which recognize The Project as a certifying organization. No such award shall ever be considered reimbursement, remuneration, or compensation of Volunteer by The Project.",
    ],
  },
  {
    id: "electronic-resources",
    title: "Volunteer Electronic Resource Use Agreement",
    paragraphs: [
      "1. The purpose of this volunteer electronic resource use agreement is to set forth mutual understanding and agreement between The Project and any volunteer of The Project on issues of acceptable use of The Project's electronic resources.",
      "2. Volunteer, by virtue of their position may, from time to time, be given access to accounts, files, subscriptions, fora, computers, telephones, or other devices or access points either owned by The Project or operated using a network, subscription service, or other access-point owned by The Project (hereafter \"Project Electronic Resources\").",
      "3. Volunteer acknowledges that any and all activity done using Project Electronic Resources may be viewed and audited by The Project. No true privacy should be expected related to data stored or passed through Project Electronic Resources.",
      "4. Volunteer agrees not to ever use Project Electronic Resources to conduct business unrelated to The Project.",
      "5. Volunteer agrees not to ever delete permanently or make inaccessible any Project Electronic Resources or to share Project Electronic Resources with anyone who is not a volunteer or member of The Project.",
      "6. Volunteer agrees, when applicable, to only use Project Electronic Resources to conduct business on behalf of The Project. If Volunteer requires access to Project Electronic Resources in order to conduct business on behalf of The Project, they shall apply with either the President or Corporate Secretary of The Project to obtain access to relevant Project Electronic Resources.",
      "7. Volunteer agrees to never, unless expressly authorized by the President of The Project, unduly remove access to Project Electronic Resources from any volunteer or member of The Project.",
      "8. If found to have violated this Agreement in a manner which causes material harm to The Project, Volunteer agrees to indemnify The Project for all harms caused. If Volunteer is found to have violated this Agreement, they may be liable for discipline up to and including termination.",
    ],
  },
  {
    id: "monetary",
    title: "Volunteer Monetary Management Agreement",
    paragraphs: [
      "1. The purpose of this volunteer monetary management agreement is to set forth mutual understanding and agreement between The Project and any volunteer of The Project on issues of the management of monies owned by The Project relevant to their service with The Project.",
      "2. Volunteer may, under certain rare, potentially erroneous, circumstances, be given access to accounts which manage The Project's assets or records thereof. Volunteer acknowledges that they have no authority to represent The Project on any legal documents or any legal fashion. Volunteer understands they are not an officer or director of The Project and thus has no authority to make payments, take loans, accept debts, or otherwise transfer any funds owned by The Project.",
    ],
  },
  {
    id: "confidentiality",
    title: "Volunteer Confidentiality Agreement",
    paragraphs: [
      "1. The purpose of this volunteer confidentiality agreement is to set forth mutual understanding and agreement between The Project and any volunteer of The Project on the utilization and disclosure of confidential information learned in their service with The Project.",
      "2. Volunteer may be made privy to information in their service with The Project, some of which may not be accessible to the general public. Information may be considered \"public information\" only if expressly marked as such or if it can be found either publicly on The Project's website or through Federal or Delaware state public records. All information which is not public information shall be considered \"internal information\" and shall only be shared with volunteers of The Project. Information may be further restricted or labelled as \"Confidential.\" Volunteer agrees to never share such information with anyone within or without The Project who is not expressly authorized to have access to such information.",
      "3. Volunteer agrees never to utilize any internal information for tasks unrelated to their role as a Volunteer with The Project. If Volunteer violates this Agreement in a manner which causes material harms to The Project, Volunteer agrees to indemnify The Project for such losses.",
      "4. All information Volunteer either is given access to or has produced in their capacity as a volunteer of The Project shall be made accessible to any member of the Oversight Committee of the Board of Directors. Volunteer shall never withhold any information owned by or relevant to The Project from any member of the Oversight Committee of the Board of Directors.",
      "5. Volunteer understands and agrees to uphold this Agreement even in the event and while they are no longer retained by The Project as a volunteer.",
    ],
  },
  {
    id: "conduct",
    title: "Volunteer Conduct Agreement",
    paragraphs: [
      "1. The purpose of this volunteer conduct agreement is to set forth mutual understanding and agreement between The Project and any volunteer of The Project on issues of discrimination, harassment, and acceptable conduct related to their service with The Project.",
      "2. Volunteer, by virtue of their position may, from time to time, be connected with students to teach a proposed course whose curriculum has been approved by The Project's leadership. Volunteer agrees not to deviate from the approved curriculum or to add or remove students from a course. Volunteer further agrees never to engage in any behavior which is deemed to be improper in accordance with the standards set by the By-Laws of The Project. Improper behavior includes, but is not limited to, theft, forgery or fraudulent filing of documents, professional or personal misrepresentation, fraudulent or undocumented financial dealings or reporting, improper access or use of confidential information, violations of any of The Project's by-laws, or abuse, discrimination, or retaliation against any individual within The Project or through any program service initiative of The Project.",
      "3. Volunteer agrees they shall never engage in unacceptable behavior when teaching or in any capacity as a volunteer of The Project including, but not limited to, harassment, any form of discrimination, any display of vulgar, profane, obscene, or sexual language or behavior, any attempt to contact students or parents for reasons other than related to the course, or any attempt to divulge, including through posts on social media, any information learned about students.",
      "4. Volunteer agrees they shall, if teaching a course, make their students aware of ground rules for behavior they set at the beginning of the course. Volunteer shall make sure students are expected to engage in productive and respectful behavior.",
      "5. If a student begins to engage in unacceptable behavior, Volunteer shall try to firmly but respectfully make clear that the behavior is not acceptable. If this attempt to de-escalate does not work, Volunteer shall attempt ending the course session and reconvening at another time.",
      "6. If students break ground rules or engage in harassment or inappropriate behavior which creates an environment not conducive to learning and does not stop after being told such behavior is unacceptable, Volunteer must always report such an incident to The Project's leadership immediately. Volunteer shall never attempt to speak directly with a student's parents or guardians about such an issue, nor shall Volunteer inform students that they will be reporting the incident.",
      "7. If a student is threatening harm to self or others, is planning to engage in criminal activity, or informs Volunteer that they are in an unsafe or abusive home environment, Volunteer must report this information to the President or Corporate Secretary of The Project. Volunteers shall never disclose this information with any individual other than the President or Corporate Secretary of The Project.",
      "8. Volunteer understands that in their role, they are expected to be responsive to communication. Volunteer agrees to be active and to respond to communication within 48 hours of receipt. If Volunteer is ever unable to teach a course at a pre-agreed-upon time or attend a meeting which has been previously scheduled, they must inform their direct supervisor. If Volunteer is temporarily unable to complete their duties, Volunteer agrees to file for a leave of absence with their direct supervisor and the Corporate Secretary of The Project.",
      "9. If found to have violated this Agreement in a manner which causes material harm to The Project, Volunteer agrees to indemnify The Project for all harms caused. If Volunteer is found to have violated this Agreement, they may be liable for discipline up to and including termination.",
    ],
  },
  {
    id: "waiver",
    title: "Volunteer Waiver Agreement",
    paragraphs: [
      "1. The purpose of this volunteer waiver agreement is to set forth mutual understanding and agreement between The Project and any volunteer of The Project on issues of liability relevant to their service with The Project.",
      "2. Volunteer agrees to release and forever discharge and hold harmless The Project and its successors and assigns from any and all liability, claims, and demands of whatever kind of nature either in law or in equity, which arise or may hereafter arise from the services volunteer provides to The Project. Volunteer understands and acknowledges that this Agreement discharges The Project from any liability or claim volunteer may have against The Project with respect to bodily injury, personal injury, illness, death, or property damage that may result from the services volunteer provides to The Project or occurring while volunteer is providing volunteer services.",
      "3. Volunteer further understands that The Project does not assume any responsibility for or obligation to provide financial or other assistance, including, but not limited to, medical, health, or disability benefits or insurance. Volunteer expressly waives any such claim for compensation or liability on the part of the Project beyond what may be offered freely by The Project in the event that injury or medical expenses are incurred by volunteer.",
      "4. Volunteer hereby releases and forever discharges The Project from any claim whatsoever which arises or may hereafter arise on account of any first-aid treatment or other medical services rendered in connection with an emergency with The Project.",
      "5. Volunteer grants and conveys to The Project all rights, titles, and interests anywhere in the world in any and all product produced through their service with The Project, made in connection with Volunteer's provision of services to The Project, or while using The Project's resources (whether electronic or otherwise). If The Project releases, grants, or conveys any such rights back to Volunteer or any volunteer of The Project, it shall not be construed as a nullification of this Agreement. Volunteer understands and agrees to uphold this Agreement even in the event and while they are no longer retained by The Project as a volunteer.",
    ],
  },
];

export default function VolunteerRetainmentPage() {
  return (
    <div>
      <section className="border-b border-[var(--ypp-border)] bg-[var(--ypp-white)] px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/legal"
            className="font-body mb-6 inline-flex items-center gap-2 text-sm font-medium text-[var(--ypp-primary)] transition-colors hover:text-[var(--ypp-deep)]"
          >
            <span aria-hidden>←</span>
            Back to Legal
          </Link>
          <div className="text-center">
            <span className="font-label mx-auto mb-4 block text-xs text-[var(--ypp-primary)]">
              Legal
            </span>
            <h1 className="font-display text-4xl font-bold tracking-tight text-[var(--ypp-ink)] sm:text-5xl">
              Volunteer Retainment Agreement
            </h1>
            <p className="mt-4 text-lg text-[var(--ypp-muted)]">
              Terms and related agreements for YPP volunteers.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="flex flex-col gap-14">
            {sections.map((section) => (
              <article key={section.id} id={section.id} className="scroll-mt-24">
                <h2 className="font-heading text-xl font-bold text-[var(--ypp-ink)] sm:text-2xl">
                  {section.title}
                </h2>
                <div className="mt-4 flex flex-col gap-4 font-body text-[var(--ypp-muted)] leading-relaxed">
                  {section.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
