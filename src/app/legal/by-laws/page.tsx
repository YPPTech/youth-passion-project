import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "By-Laws | Youth Passion Project",
  description:
    "Official governances and by-laws of Youth Passion Project Inc., a Delaware nonprofit corporation.",
};

type Section = { id: string; title: string; paragraphs: string[] };

const sections: Section[] = [
  {
    id: "section-1",
    title: "Section 1: Certificate of Incorporation",
    paragraphs: [
      "The undersigned Incorporator hereby certifies as follows:",
      "1. The name of the Corporation is Youth Passion Project Inc.",
      "2. The Registered Office of the corporation in the State of Delaware is located at 8 The Green, Suite A, in the City of Dover, County of Kent, Zip Code 19901. The name of the Registered Agent at such address upon whom process against this corporation may be served is A Registered Agent Inc.",
      "3. The purpose of the corporation is to engage in any lawful act or activity for which corporations may be organized under the General Corporation Law of Delaware. (If the Corporation is to be a nonprofit corporation, please add: \"This Corporation shall be a nonprofit corporation.\") This Corporation shall be a nonprofit corporation.",
      "Youth Passion Project Inc. is organized exclusively for charitable, religious, and educational purposes including, for such purposes, the making of distributions to organizations that qualify as exempt organizations under section 501(c)(3) of the Internal Revenue Code, or corresponding section of any future federal tax code. No part of the net earnings of Youth Passion Project Inc. shall inure to the benefit of, or be distributable to its members, trustees, officers, or other private persons, except that the corporation shall be authorized and empowered to pay reasonable compensation for services rendered and to make payments and distributions in furtherance of the purposes set forth in the purpose clause hereof.",
      "Notwithstanding any other provision of this document, the corporation shall not carry on any other activities not permitted to be carried on (a) by any organization exempt from federal income tax under section 501(c)(3) of the Internal Revenue Code, corresponding section of any future federal tax code, or (b) by an organization, contributions to which are deductible under section 170(c)(2) of the Internal Revenue Code, or corresponding section of any future federal tax code.",
      "Youth Passion Project Inc. is not organized and shall not be operated for the private gain of any person. The property of the corporation is irrevocably dedicated to its educational and charitable purposes. No part of the assets, receipts, or net earnings of the corporation shall inure to the benefit of, or be distributed to any individual. The corporation may, however, pay reasonable compensation for services rendered, and make other payments and distributions consistent with these Articles.",
      "Upon termination or dissolution of the Youth Passion Project Inc., any assets lawfully available for distribution shall be distributed to one (1) or more qualifying organizations described in Section 501(c)(3) of the Internal Revenue Code of 1986 (or described in any corresponding provision of any successor statute) which organization or organizations have a charitable purpose which, at least generally, includes a purpose similar to the terminating or dissolving corporation.",
      "The organization to receive the assets of the Youth Passion Project Inc. hereunder shall be selected by the discretion of a majority of the managing body of the Youth Passion Project Inc. and if its members cannot so agree, then the recipient organization shall be selected pursuant to a verified petition in equity filed in a court of proper jurisdiction against the Youth Passion Project Inc. by one (1) or more of its managing body which verified petition shall contain such statements as reasonably indicate the applicability of this section. The court upon a finding that this section is applicable shall select the qualifying organization or organizations to receive the assets to be distributed, giving preference if practicable to organizations located within the State of Delaware.",
      "In the event that the court shall find that this section is applicable but that there is no qualifying organization known to it which has a charitable purpose, which, at least generally, includes a purpose similar to this corporation, then the court shall direct the distribution of its assets lawfully available for distribution to the Treasurer of the State of Delaware to be added to the general fund.",
      "4. The corporation shall not have any capital stock.",
      "5. The conditions of membership are none.",
      "6. The name and mailing address of the incorporator are as follows:",
    ],
  },
  {
    id: "section-2",
    title: "Section 2: Initial Decree by the Incorporator",
    paragraphs: [
      "A. Youth Passion Project Inc. (hereafter \"The Project\") is a non-profit corporation organized in the State of Delaware for lawful purposes that include, but are not limited to providing an educational platform for young learners to explore and develop their interests and to aid in the provision of equal and equitable educational opportunities for all students.",
      "B. The purposes for which The Project is formed are as follows:",
      "1. The Project is formed as a non-profit within the meaning of Section 501(c)(3) of the United States Internal Revenue Code as it is written at the time of incorporation, and Section 1902(b)(3) of Title 30 of the Delaware Code.",
      "2. The Project may exercise all of the rights and powers conferred upon Nonprofit non-stock corporations under the laws of the State of Delaware.",
      "3. Notwithstanding any of the above statements of purposes and powers, The Project shall not engage in any activities or exercise any powers, whether express or implied so as to disqualify it from exemption from federal income tax under Section 501(a) of the United States Internal Revenue Code and from Delaware income tax by reason of being an organization described in Section 1902(b)(3) of Title 30 of the Delaware Code and corresponding provisions of any future United States federal tax code or Delaware code.",
      "C. The Project's principal office shall be recognized as written in its certificate of incorporation as filed with the Delaware Division of Corporations. Any change to the principal office of The Project may only be made by amending The Project's certificate of incorporation as filed with the Delaware Division of Corporations.",
      "1. The Project may hold multiple offices at places other than the principal office both within and outside of the State of Delaware, where it is qualified to do business. Secondary offices may be established without amendment to The Project's certificate of incorporation.",
      "D. A Board of Directors or Board of Trustees (hereafter \"Board of Directors\" or \"Board\") shall be constructed and shall henceforth be considered the governing body of The Project. The Board of Directors may make any governance, regulation, policy, or order for and/or of The Project.",
      "1. The Board shall be made of Zachary S. Siegel who will occupy the role of Chairman of the Board of Directors. The Chairman of the Board of Directors may represent The Project and shall be considered a responsible party for The Project. The Chairman of the Board of Directors shall have the authority to break a tie if the Board of Directors is split.",
      "a. The Chairman of the Board of Directors must appoint at minimum two (2) other individuals to the Board of Directors within two (2) months of this signing who are above the age of eighteen (18) at the time of their appointment as members of the Board of Directors.",
      "2. The Board of Directors shall have the authority to govern itself, setting regulations and policies which affect the actions and operations of the Board of Directors.",
      "3. The Board may vest its authority to oversee quotidian operations of The Project to a specifically designated office within The Project.",
      "a. The Board of Directors may not vest any of its powers of ensuring compliance with laws and governances with any external office or entity within The Project, yet it may designate a sub-committee as its proxy to interpret laws and governances of The Project and to ensure compliance with laws and governances both internal and external (including, but not limited to, federal, state and municipal laws, regulations, and orders).",
      "i. An entity designated as the proxy of the Board of Directors to interpret laws and governances of The Project and to ensure compliance with laws and governances may not also be vested with the authority to conduct quotidian operations of The Project, but it may make recommendations to ensure best practices be upheld in order to minimize risk of noncompliance.",
      "ii. A (sub)committee of the Board of Directors designated as a proxy of the Board of Directors may act on behalf of the Board of Directors, and all of its decisions shall hold the force of the Board of Directors.",
      "4. Terms for members of the Board of Directors shall be at minimum one (1) year long.",
      "5. The Board of Directors has the authority to remove members of the Board of Directors from their service on the Board of Directors.",
      "6. The Chairman of the Board of Directors or the Board of Directors have the authority to elect new members to the Board of Directors, demote, or promote members of the Board of Directors to other positions on the Board of Directors or within The Project.",
      "E. By-laws of The Project shall derive their authority from The Initial Decree by the Incorporator located in the by-laws of the Youth Passion Project Inc. and may not contradict the certificate of incorporation or in any way.",
      "1. By-laws shall be added to the record of The Project's official governances.",
      "a. An office with the powers to oversee quotidian operations of The Project may make orders or issue memoranda with policies and procedures.",
      "b. An entity acting as a proxy of the Board of Directors to interpret and ensure compliance with laws and governances of The Project may issue opinions, interpretations, orders, and memoranda which shall be included in the Board By-Laws.",
      "2. By-laws shall be constructed by the Board of Directors or a committee thereof vested with powers of the Board of Directors.",
      "3. An amendment to any governance of The Project made by an incorporator, the Board of Directors, or any office or committee of The Project may be issued by the same or a higher body which constructed the governance in question. Amendments shall not be listed separately, instead shall always nullify a previous governance and instate a new governance. Such amended governances must have some demarcation of revision with the original issuing date and the latest date of revision.",
      "F. This Initial Decree by the Incorporator may only be amended by the Board of Directors (as a function of its powers of governance) and by the Incorporator.",
      "1. Within the first three years after the incorporation of The Project, the Board of Directors may only amend the Initial Decree by the Incorporator with a unanimous vote.",
      "2. Once three years have elapsed from the day The Project incorporated, the Board may amend the Initial Decree by the Incorporator with a vote of all members with the exception of one (1) member of the Board (hereafter, \"N-1 Vote\").",
    ],
  },
  {
    id: "section-3",
    title: "Section 3: Members of the Board of Directors",
    paragraphs: [
      "A. As authorized by Section 2(D)(2) of the by-laws of the Youth Passion Project Inc. as a decree by the Incorporator, the Board of Directors shall be formed as the highest governing body of The Project.",
      "B. In accordance and compliance with Section 2(D)(1)(a) of the by-laws of the Youth Passion Project Inc., the Chairman of the Board of Directors has appointed, within the provided timeframe, at least two (2) members to the Board of Directors who are at least eighteen (18) years of age at the time of their appointment to the Board of Directors.",
      "C. In accordance and compliance with Section 2(D)(6) of the by-laws of the Youth Passion Project Inc., the Chairman of the Board of Directors shall make appointments of individuals to the Board of Directors in one of the following capacities:",
      "1. As Independent Directors, who shall be considered 'independent' by the standards set forth by the Internal Revenue Code, and who have full voting rights on the Board of Directors and who may be given further titles such as Principal Officers of the Board of Directors. Independent Directors shall attend each Board meeting and shall be obligated to vote on all matters unless exempt pursuant to a conflict of interest.",
      "2. As Honorary Directors, who shall serve as advisors to the Project and may serve on committees of the Board of Directors with full voting rights but shall never be given further titles as Principal Officers of The Project. Honorary Directors shall never be obligated to attend meeting of the Board of Directors, nor shall Honorary Directors vote on matters brought before the full Board of Directors.",
      "3. As Executive Directors, who, by serving as an Executive of the Youth Passion Project, hold the authority to make decisions on behalf of the Youth Passion Project, but shall have voting rights neither on the Board of Directors nor on any committees of the Board of Directors.",
      "D. The following individuals are members of the Board of Directors.",
      "1. Zachary Siegel, Incorporator of the Youth Passion Project shall serve as Chairman of the Board of Directors, a voting member of the Oversight Committee, and a voting member of the Executive Committee.",
      "2. Arjun K. Chopra, Treasurer of the Youth Passion Project shall serve as an Independent Director of the Board of Directors, Chairman of the Oversight Committee, and a voting member of the Executive Committee.",
      "3. Arshia Shaik, Chief Executive Officer and President, shall serve as an Executive Director of the Board of Directors, a non-voting member of the Oversight Committee, and a non-voting member of the Executive Committee.",
      "4. Yuchuan Gan, Chief Financial Officer and Deputy Treasurer (as appointed by the Oversight Committee of the Board of Directors), shall serve as an Executive Director of the Board of Directors and a non-voting member of the Oversight Committee.",
      "5. Ashlee Tan, Chief of Staff and Corporate Secretary (as appointed by the current Chief Executive Officer, who shall serve, from time to time, as proxy for the Chief Executive Officer and may speak on behalf of the Chief Executive Officer with all powers bestowed upon them at the discretion of the Chief Executive Officer) shall serve as an Executive Director of the Board of Directors, a non-voting member of the Oversight Committee, and a non-voting member of the Executive Committee.",
      "6. Samuel Singer shall serve as an Independent Director of the Board of Directors and a voting member of the Executive Committee.",
      "7. Aanya Schoetz shall serve as an Independent Director of the Board of Directors.",
      "8. Teckhua Chiang shall serve as an Independent Director of the Board of Directors.",
      "9. Karen Lee shall serve as an Honorary Director of the Board of Directors.",
      "10. Zachary Wolf Cukier shall serve as an Honorary Director of the Board of Directors.",
      "11. Maggie Favretti shall serve as an Honorary Director of the Board of Directors.",
      "E. This Section shall serve as a reference, and as roles are changed or the individuals or names of individuals in certain roles change, this Section may be updated, revised, or amended by the Chief Executive Officer, the Chairman of the Board of Directors, or the Chairman of the Oversight Committee. Changes to this section shall not and do not convey changes to any other Section or clause of the by-laws of the Youth Passion Project Inc. This Section may serve as a reference to verify the correct number, positions, and names of members of the Board of Directors of The Project.",
    ],
  },
  {
    id: "section-4",
    title: "Section 4: Internal Board Procedure",
    paragraphs: [
      "A. As authorized by Section 2(D)(2) of the by-laws of the Youth Passion Project Inc. as a decree by the Incorporator, the Board of Directors shall have the authority to govern itself, setting regulations and policies which effect the actions and operations of the Board of Directors. This following document shall outline all regulations regarding meetings and actions taken by the Board.",
      "B. All decisions made by the Board of Directors must be made at an official meeting of the Board of Directors or a designated Board Committee.",
      "1. Meetings of the Board may only be called by either emergency request of the Chairman of the Board of Directors or by a quorum (defined by the presence of at least two-thirds (2/3) of the voting members of the Board of Directors).",
      "a. Should voting members of the Board of Directors be absent for a vote, their vote shall not be counted either yea or nay, and proceedings shall continue as normal. If the missing Board member's vote would change the final decision of the Board, then the matter shall be halted until the non-present member is contacted and has voted on the matter.",
      "2. Meetings of the Board of Directors must be called at minimum one (1) time per year.",
      "3. Records of all Board meetings must be kept with notes on the matters discussed and all decisions clearly laid out in writing.",
      "a. Such records may be made by any member of the Board, as decided by the Chairman of the Board of Directors, excepting at sessions closed to non-voting members of the Board, where records may only be made by a voting Member of the Board.",
      "4. Emergency meetings or special meetings of the Board to decide or approve pressing matters may be called by the Chairman of the Board of Directors pursuant to Section 4(B)(1) with a semi-quorum (defined by the presence of at least one-half (1/2) of the voting members of the Board of Directors). Non-voting members of the Board may only attend emergency or special meetings of the Board if requested by the Chairman of the Board of Directors.",
      "5. Only those individuals named as members of the Board of Directors may attend meetings of the Board of Directors, all others must be invited by an Officer of The Project.",
      "C. All decisions made by the Board of Directors shall be made by a vote by the voting members of the Board of Directors wherein each member shall cast one (1) vote. Should the vote be tied, the Chairman of the Board of Directors shall cast an additional vote to break the tie. Types of votes are outlined below:",
      "1. Decisions of the utmost importance may be made only by a unanimous vote defined as when all voting members of the Board of Directors vote yea on an issue.",
      "2. Decisions of great importance may be made by an N-1 vote of the Board of Directors (defined in Section 2(F)(2) of the by-laws of the Youth Passion Project Inc.), N-1 votes shall never be called if one or more voting members of the Board are not in attendance for a meeting.",
      "3. Important decisions may be made by a supermajority vote of the Board of Directors (defined as two-thirds (2/3) of the members voting yea on an issue).",
      "4. Normal decisions may be made by a simple majority vote of the Board of Directors (defined as greater than one-half (1/2) of the members of the Board voting yea on an issue).",
      "D. Decisions made by the Board of Directors shall be broken into many categories of importance, which will influence their positions on the agenda of Board meetings and how the relevant votes may be cast.",
      "1. The decision to vest or divest power or bestow proxy power of the Board with another entity within The Project or to overturn an opinion made by a proxy of the Board shall be made by a supermajority vote.",
      "2. The decision to amend a Board By-Law shall be made by a supermajority vote.",
      "3. The decision to amend a Decree by the Incorporator shall be made by a unanimous vote within the first three (3) years after incorporation, after which it shall be made with an N-1 vote (as is in accordance with Section 2(F) of the by-laws of the Youth Passion Project Inc.).",
      "4. The decision to amend the organizing document of The Project shall be made by a unanimous vote.",
      "5. The decision to remove or expel a Member from the Board of Directors or to remove a Member of the Board of Directors from a committee appointment shall be made by a supermajority vote.",
      "6. The decision to retain members of the Board of Directors shall be made by a simple majority vote.",
      "7. The decision to terminate the President of The Project shall be made by a supermajority vote.",
      "8. Any and all decisions not mentioned shall be made by a supermajority vote.",
    ],
  },
  {
    id: "section-5",
    title: "Section 5: Vesting of Powers",
    paragraphs: [
      "A. As authorized by Section 2(D)(3) of the by-laws of the Youth Passion Project Inc., the Board shall vest its authority to oversee and make decisions related to the quotidian operations of The Project to an office designated by the Board of Directors.",
      "B. The Board shall create an Office of the Chief Executive (hereafter \"Office of the Chief Executive\" or \"OCE\") which shall oversee all quotidian operations. The Office of the Chief Executive shall be headed by a President of The Project, holding the title of Chief Executive Officer (hereafter \"Chief Executive Officer\" or \"CEO\"). The President shall have the authority to make decisions on behalf of The Project.",
      "1. In compliance with Section 2(D)(3)(a) of the by-laws of the Youth Passion Project Inc., the Office of the Chief Executive shall not hold any powers of ensuring compliance with laws and governances.",
      "2. The Office of the Chief Executive may be staffed with additional volunteers, but all authority and decision-making power of the Office of the Chief Executive shall rest absolutely with the CEO or a proxy of the CEO confirmed by the Board of Directors.",
      "3. The Office of the Chief Executive may not vest power to any other person or entity within The Project, but may retain volunteers to aid the Chief Executive Officer in their duties. Only Executive Directors of the Board of Directors and Officers of the Board may serve as Principal Officers of The Project.",
      "C. The Board shall create a committee on oversight (hereafter \"Oversight Committee\") which shall act on behalf of the Board in overseeing The Project to ensure the compliance of The Project with all governances both internal and external, the upholding of ethical practices, the audit of financial transactions, and the oversight of The Project's quotidian operations. In compliance with Section 2(D)(3)(a)(i) of the by-laws of the Youth Passion Project Inc., the Oversight Committee shall never hold any powers or authority to conduct or manage the quotidian operations of The Project.",
      "1. The Oversight Committee shall be composed of members of the Board of Directors all and shall be headed by a Chairman of the Oversight Committee, Arjun K. Chopra who shall serve additionally as Treasurer of the Board of Directors.",
      "2. The Oversight Committee shall have the authority to retain volunteers to aid itself in its decisions.",
      "3. The Oversight Committee has the authority to interpret the governances of the Board of Directors, decrees by the Incorporator, and organizing documents of The Project on behalf of the Board of Directors. All such interpretations shall be made in writing and shall hold the authority of the Board with them. The Oversight Committee shall also have the authority to add sections to the by-laws in order to ensure the compliance of The Project with laws and regulations.",
      "4. The Oversight Committee shall appoint Officers of The Project who shall serve in the Office of the Chief Executive to represent the Oversight Committee in quotidian matters.",
      "5. The Oversight Committee Chairman shall issue a memorandum naming the individuals holding positions on the committee and shall produce its own governances.",
      "6. The Oversight Committee shall have the authority to request funding to ensure the proper operation of its function, such requests shall be submitted to the Chairman of the Board of Directors and shall be cosigned by a majority of the voting members of the Oversight Committee.",
      "7. The Oversight Committee shall have the authority to designate Independent Directors as Principal Officers of The Project, and may appoint a Corporate Secretary who shall serve as Assistant Secretary of The Project and may appoint an Assistant Treasurer of The Project.",
      "D. The Board shall create an executive committee (hereafter \"Executive Committee\") which shall act on behalf of the Board in intervals between Board meetings. The Executive Committee shall additionally be tasked with advising the Chief Executive Officer of The Project.",
      "1. The Executive Committee shall be composed of members of the Board of Directors as appointed by the Chairman of the Board of Directors.",
      "2. The Executive Committee shall hold no authority over financial matters. All powers vested to the Oversight Committee shall not be held by the Executive Committee.",
      "3. The Executive Committee shall have the authority to make any decision on behalf of the Board of Directors which requires a simple majority or supermajority vote excepting a vote to overturn an opinion made by a proxy of the Board of Directors or a vote to vest or divest power or bestow proxy power of any kind.",
      "a. All decisions which, if made by the Board of Directors, would require a supermajority vote, if made by the Executive Committee, shall be made by a supermajority vote of the voting members of the Executive Committee. All decisions which, if made by the Board of Directors, would require a simple majority vote, if made by the Executive Committee, shall be made by a simple majority vote of the voting members of the Executive Committee.",
      "4. The Executive Committee shall issue a memorandum naming the individuals holding positions on the Executive Committee and may produce its own governances.",
      "5. The Executive Committee, as an entity of The Project, shall have the authority to request funding to ensure the proper operation of its function, such requests shall be directed to the Chairman of the Board of Directors and shall be cosigned by a majority of the voting members of the Executive Committee.",
    ],
  },
  {
    id: "section-6",
    title: "Section 6: Oversight Committee By-Laws",
    paragraphs: [
      "A. The Oversight Committee, as vested with the powers in Section 5(C) of the by-laws of the Youth Passion Project Inc., herein shall outline its internal organizing structure and procedure of decision-making.",
      "B. All decisions of the Oversight Committee shall be made either in an official meeting of the Oversight Committee or by the Chairman of the Oversight Committee acting on behalf of the Oversight Committee or in their own right as a Principal Officer of The Project.",
      "1. A meeting of the Oversight Committee shall, by virtue of its position as a committee of the Board of Directors of The Project, be conducted at minimum one (1) time each year in advance of the meeting of the full Board of Directors.",
      "2. A meeting of the Oversight Committee shall be held either by a quorum of its members (wherein at least two-thirds (2/3) of all voting members of the Oversight Committee are present) with the Chairman of the Oversight Committee or the Chairman of the Board of Directors presiding.",
      "C. Members of the Oversight Committee shall be appointed as follows:",
      "1. Any member of the Board of Directors may make a formal request to the Oversight Committee, which may accept or deny the request at its own discretion. If accepted, Executive Directors shall be appointed members of the Oversight Committee of the Board of Directors without voting rights. If accepted, the Oversight Committee may grant Independent or Honorary Directors voting rights, or may withhold voting rights with or without conditions.",
      "2. The Chairman of the Board of Directors shall be indefinitely considered a member of the Oversight Committee of the Board of Directors and shall be granted full voting rights.",
      "a. The Chairman of the Board may additionally appoint one (1) volunteer of The Project to attend meetings of the Oversight Committee as their proxy if the Chairman of the Board is not to be present at a meeting of the Oversight Committee.",
      "b. The Chairman of the Board may additionally appoint no more than three (3) volunteers of The Project who are not members of the Board of Directors to serve as non-voting members of the Oversight Committee.",
      "3. The President of The Project, as an Executive Director of the Board of Directors, shall always be considered a non-voting member of the Oversight Committee. The President of The Project shall be granted the authority to invite individuals to attend meetings of the Oversight Committee as guests of the President. These non-participating guests may be dismissed by the Chairman of the Oversight Committee at any time.",
      "4. The Chief Financial Officer of The Project appointed by the Oversight Committee, as an Executive Director of the Board of Directors, shall be considered a non-voting member of the Oversight Committee.",
      "5. The Corporate Secretary of The Project appointed by the Oversight Committee, as an Executive Director of the Board of Directors, shall be considered a non-voting member of the Oversight Committee.",
      "D. When meeting, decisions made by the Oversight Committee shall be made by vote, as designated on an agenda set by the Chairman of the Oversight Committee.",
      "1. All decisions shall be made by a supermajority vote, wherein a motion shall pass if more than two-thirds (2/3) of the voting members of the Oversight Committee vote aye or if at least two-thirds (2/3) of the voting members of the Oversight Committee vote aye and the Chairman of the Oversight Committee also votes aye.",
      "E. Voting members of the Oversight Committee, non-voting Executive Directors who are members of the Oversight Committee, and other Independent Directors specially appointed by the Chairman of the Oversight Committee shall be considered compliance officers of The Project and thus shall hold authority over immediate issues of compliance within The Project.",
      "1. Compliance officers of The Project shall hold the authority to adjudicate the compliance of volunteers of The Project with governances, both internal and external. If a compliance officer finds some person or process to be non-compliant with existing governances, they may order it to cease its non-compliant actions.",
      "a. Compliance officers of The Project may, from time to time, conduct investigations into potential cases of non-compliance and shall be given a broad purview to investigate any occurrences which may indicate non-compliance. Investigations may not be ceased by any individual other than the investigating compliance officer, the Chairman of the Oversight Committee, or by a process of appeal.",
      "2. Individuals ordered to cease operations deemed by a compliance officer as non-compliant with existing governances may request a review of such an order by the Chief Executive Officer, if not applicable, by another compliance officer. If a review finds the original order to be inapplicable or inappropriate, an appeal request may be made.",
      "3. If appeal is granted of an order by a compliance officer of The Project, a panel of three (3) compliance officers shall convene to determine whether the original order may be overturned. At any point an appeal of a decision of a compliance officer or panel of compliance officers may be requested to the Chairman of the Oversight Committee. If granted, the Oversight Committee may hear such an appeal at an official meeting of the Oversight Committee.",
    ],
  },
  {
    id: "section-7",
    title: "Section 7: Financial and Organizational By-Laws",
    paragraphs: [
      "A. The Board, as the highest governing body of The Project, shall, in this section, outline any and all information relating to financial and organizational By-Laws.",
      "B. The Project shall use a tax year incongruous with the calendar year, with the beginning date being the first (1st) day of the ninth (9th) month of the year, September, and ending on the thirty-first (31st) day of the eighth (8th) month of the year, August.",
      "1. The Project was formed on the seventeenth (17th) day of the eighth (8th) month, August, of the year two-thousand twenty (2020).",
      "C. The Project's sensitive financial information shall be shared exclusively with members of the Oversight Committee (including all non-voting and voting members).",
      "1. No transactions may be made on behalf of The Project by any person or entity without the signature or co-signature of the Chairman of the Board of Directors or the Chairman of the Oversight Committee.",
      "2. Transactions made with the co-signature of the Chairman of the Oversight Committee shall be approved by the Oversight Committee and must be proposed by the Chief Financial Officer of The Project or by the Chief Executive Officer of The Project. Such proposal must be dated and addressed to the Oversight Committee of the Board of Directors of the Youth Passion Project for the attention of the Chairman of the Oversight Committee. The proposal must contain a summary of the transaction proposed including the full amount of the proposed transaction, the payor and payee, the proposed method of the transaction, and the purpose of the transaction (if the purpose of the proposed transaction falls outside of regularly approved transactions and outside of the financial or executive functions, the proposal must include a justification for such a transaction from the head of the relevant function, submitted and cosigned by the Chief Executive Officer).",
      "a. Transaction requests may be submitted by any volunteer of The Project to the Chief Financial Officer or the Chief Executive Officer through the Corporate Secretary.",
      "3. Transactions made with the co-signature of the Chairman of the Board of Directors shall be approved by the Board of Directors at a meeting of the full Board of Directors and shall not be made by the Executive Committee and must be a proposal or request submitted by the Oversight Committee or the Executive Committee. A request for funding submitted to the Chairman of the Board of Directors must contain a summary of the transaction proposed including the full amount of the proposed transaction, the payor and payee, the proposed method of the transaction, and the purpose of the transaction. Once approved, the Chairman of the Oversight Committee and the Chief Financial Officer must be notified.",
      "4. Once transactions have been approved, funds shall be allocated as approved and receipts verifying receipt of funds by payee and receipt of goods or services (if applicable) by payor shall be attached to all correspondence related to the transaction and shall be directed to the Corporate Secretary and the Chairman of the Oversight Committee for accounting, audit, and compliance purposes.",
      "D. The Project's confidential and highly confidential information, including any and all governmental identification numbers and secure financial information, shall be stored securely.",
      "1. The Project's Delaware File Number is 3465679.",
      "2. The Project's Employer Identification Number is 85-2677424.",
    ],
  },
  {
    id: "section-8",
    title: "Section 8: Internal Organizing Structure",
    paragraphs: [
      "A. As authorized by Section 5(B) of the by-laws of the Youth Passion Project Inc., the Office of the Chief Executive shall, by virtue of its power to organize and oversee the quotidian operations of The Project, construct an internal structure of organization as follows:",
      "B. A system of organizing all volunteers of The Project by virtue of their position via a set of bands shall be constructed as follows:",
      "1. Global Executives shall be given the band of 1.",
      "a. Executive Directors of the Board of Directors shall hold the band of 1A.",
      "b. Executives who are given the title of Vice-President shall hold the band of 1B.",
      "2. Global Executives may create positions with a band of 2 who serve in some global executive capacity, but are not global executives who shall have the title of 'Director.'",
      "a. Global or Regional Directors shall hold the band of 2A.",
      "b. Special advisors who shall aid The Project, but are not given any other title herein mentioned shall be given the band of 2B.",
      "3. Global Executives or Global or Regional Directors may create positions with a band of 3 who shall hold the title of 'Manager.'",
      "a. All Global Managers shall hold the band of 3A.",
      "b. Regional 'Chapters' may be created which are headed by 'Chapter Presidents' who perform some executive duties at a regional level and shall be considered Regional Managers who shall hold the band of 3B.",
      "4. All volunteers of the Project who shall hold the title of Instructor shall be given the band of 4.",
      "a. Senior Instructors shall hold the band of 4A.",
      "b. Instructors shall hold the band of 4B.",
      "5. All voting members of the Board of Directors shall hold the band of 0.",
      "a. All Principal Officers of The Project shall hold the band of 0A.",
      "b. Individuals who are either voting members of the Executive Committee or hold voting rights on the Board of Directors shall hold the band of 0B.",
      "c. Honorary Directors of the Board shall hold the band of 0C.",
      "C. In the event of incapacitation, leadership members who are unable to attend to the duties of their role shall be temporarily replaced by the following order of precedence:",
      "1. Any individual who shares said role (ex: Office Co-head, Chapter Co-President).",
      "2. A subordinate specifically appointed as a successor-in-incapacitation.",
      "3. A direct-supervisor or an appointee at the discretion of a direct-supervisor.",
      "4. A previously appointed successor by the individual-in-question.",
      "5. Any volunteer at The Project as appointed by the next-highest governing body.",
      "D. Volunteers may be retained by order of the Office of the Chief Executive in such a capacity that they are not paid and voluntarily donate their time to The Project, all employees and paid volunteers shall be retained only by the Board of Directors.",
      "1. Individuals may be retained as volunteers of The Project by the Office of the Chief Executive. Such retention shall be formalized only once the volunteer has signed a Volunteer Retainment Agreement as approved by the Board Oversight Committee. Individuals who are retained as volunteers of The Project shall be listed in a public memorandum approved by the Chief Executive Officer and Chief Financial Officer and drafted by the Corporate Secretary with their full name, direct supervisor, date retained, title, office or chapter, and (if applicable) date terminated listed.",
      "2. Individuals which have been retained by the Office of the Chief Executive may be terminated in accordance with applicable laws and governances or placed on leave as set forth in the by-laws. A volunteer who no longer desires to continue their service with The Project may resign from their duties by sending a letter of resignation to the Corporate Secretary of The Project who shall inform the Chief Executive Officer who shall terminate the volunteer. If a volunteer is terminated or placed on leave by the CEO or Oversight Committee, a letter shall be sent to the volunteer informing them of the decision and reasons for the decision which has been signed by either the Chairman of the Oversight Committee of the Board of Directors or the Chief Executive Officer of The Project. A compliance officer shall make reasonable effort to meet with the terminated volunteer, after which the volunteer's supervisor and chapter or office leader shall be informed, all physical and electronic property of The Project shall be confiscated from the volunteer, and the Corporate Secretary shall update the public memorandum as required by Section 8(D)(1) of the by-laws of The Project.",
    ],
  },
  {
    id: "section-9",
    title: "Section 9: Ethics and Compliance Governances",
    paragraphs: [
      "A. As the designated entity responsible for ensuring The Project's compliance with laws and regulations, the Board Oversight Committee, herein sets forth policies designed to aid in ensuring The Project's compliance with regulations and laws. These governances shall hold with them the full power of the Board of Directors, and questions related to such governances shall be directed to a compliance officer. As the following governances exist for the sole purpose of ensuring compliance and mitigating legal liability or other risk related to fiduciary or other regulatory obligations, the power to amend this section shall rest exclusively with the Oversight Committee of the Board of Directors or the full Board of Directors.",
      "B. All Directors (Independent, Honorary, and Executive Directors of the Board of Directors) and Executives shall disclose in good faith any and all possible conflicts of interest they have in any proceeding or transaction as soon as they become aware of the conflicts of interest and always before the consideration of the transaction by the Board of Directors or a Committee thereof. This disclosure shall be made in writing to the Chairman of the Oversight Committee and shall include all material facts about the conflict of interest. Conflicts of interest involving the Chairman of the Oversight Committee shall be submitted to the Chairman of the Board of Directors.",
      "1. After being made aware that a Director or Executive has a conflict of interest, the Oversight Committee shall meet to determine the extent of the conflict. Directors or Executives with conflicts may request, regardless of the finding of the Oversight Committee, to abstain from discussion or voting on a particular matter to avoid impropriety or the semblance thereof.",
      "2. A conflict of interest arises when a person has an actual or potential \"Interest\" that impairs, or might appear to impair their independence or objectivity in the discharge of their responsibilities. Related Party Transactions always involve conflicts of interest, are not necessarily improper, but must be handled in accordance with proper procedure to ensure The Project only enters into transactions that are in the best interest of The Project.",
      "C. To ensure that sensitive information of The Project is carefully kept private, each document or other piece of information of The Project shall be assigned a confidentiality status which will limit its accessibility within or without The Project. All information owned by The Project shall be returned upon a volunteer's ending their term of retainment with The Project.",
      "1. Information shall be considered 'public information' only if it is expressly marked as such or is found on The Project's website or through the State or Federal records or if it is or is to be made available through a Freedom of Information Act request. Public information may be shared with any individual within or without The Project.",
      "2. Information which is not public information shall be considered 'internal information' if it is made accessible to all volunteers at The Project. Internal information shall only be shared with those who are volunteers of The Project.",
      "3. Information which is neither public information nor internal information shall be considered 'confidential' information and may be restricted to a set of individuals. Information shall only be considered confidential if an order granting a status of confidentiality is issued by a compliance officer unless the information contains personnel records of volunteers, students, or any other minor, which shall automatically be considered confidential information to be shared only as needed with the relevant volunteers. Confidential documents, if shared electronically, shall only be shared with those permitted to view the document and shall be made available to the Oversight Committee of the Board of Directors.",
      "4. Information which is or may be privileged as attorney-client information or work-product or which is highly sensitive financial or governmental documentation shall be considered 'highly confidential.' Such information shall be made available only to voting members of the Oversight Committee of the Board of Directors. Documents shall only be designated as highly confidential by the Chairman of the Oversight Committee, the Chairman of the Board of Directors, or by decision of the Oversight Committee.",
      "D. To ensure that documents owned by The Project are properly retained in accordance with federal and state regulations and to prevent mistaken destruction of documents, The Project shall adopt a policy regarding document retention. All documents which are designated as highly confidential, have been designated confidential by a compliance officer, or which may concern information related to legal, governance, compliance, risk-management, or financial matters shall be retained permanently. Confidential documents related to personnel records of volunteers, students, or any other minor shall be retained for no less than fourteen (14) years after the day when the minor has reached the age of majority and the document is no longer relevant. Any and all correspondence from or to The Project or an account owned by The Project shall be retained for no less than seven (7) years after the day such correspondence is dated. At the time at which any document or set of documents are being destroyed, a compliance officer of The Project must be informed in writing of such destruction along with a description of the documents to be destroyed.",
      "E. To ensure compliance with all laws, regulations, and internal governances, The Project requires all its volunteers to act with a high degree of business and personal ethics. The Project adopts a whistleblower policy regarding improper behavior. Improper behavior includes, but is not limited to, theft, forgery or fraudulent filing of documents, professional or personal misrepresentation, fraudulent or undocumented financial dealings or reporting, improper access or use of confidential information, violations of any of The Project's by-laws, or abuse, discrimination, or retaliation against any individual within The Project or through any program service initiative of The Project. If any volunteer suspects any volunteer of The Project of having engaged in improper behavior, they should feel comfortable and are encouraged to report such behavior by either filing a written report with the Oversight Committee of the Board of Directors for the attention of the Chairman of the Oversight Committee or by speaking with any compliance officer of The Project. If any volunteer submits a report of improper conduct in good faith, they shall not be retaliated against or intimidated in any way. Upon receipt of a report of improper behavior, an investigation shall be initiated which shall be led by a compliance officer of The Project. All content of a whistleblower complaint shall be categorized as highly confidential or confidential, shared only with compliance officers of The Project and others involved with an investigation on a need-to-know basis at the discretion of the investigation leader.",
    ],
  },
  {
    id: "adoption",
    title: "Adoption and Signature",
    paragraphs: [
      "This document shall constitute the Official Governances and By-Laws of the Youth Passion Project Inc. and were agreed to by the Board of Directors and all relevant committees of the Board of Directors as of the fifth (5th) day of the seventh (7th) month, July, of the year two-thousand twenty-one (2021).",
    ],
  },
];

export default function ByLawsPage() {
  return (
    <div className="min-w-0 w-full">
      <section className="border-b border-[var(--ypp-border)] bg-[var(--ypp-white)] px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl min-w-0">
          <Link
            href="/legal"
            className="font-body mb-6 inline-flex items-center gap-2 text-sm font-medium text-[var(--ypp-primary)] transition-colors hover:text-[var(--ypp-deep)]"
          >
            <span aria-hidden>←</span>
            Back to Legal
          </Link>
          <div className="text-center">
            <span className="font-label mx-auto mb-4 block text-xs font-semibold uppercase tracking-wider text-[var(--ypp-primary)]">
              Legal
            </span>
            <h1 className="font-heading text-4xl font-bold tracking-tight text-[var(--ypp-ink)] sm:text-5xl">
              By-Laws
            </h1>
            <p className="mt-4 text-lg text-[var(--ypp-muted)]">
              Official governances and by-laws of Youth Passion Project Inc.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl min-w-0 break-words">
          <div className="flex flex-col gap-14">
            {sections.map((section) => (
              <article
                key={section.id}
                id={section.id}
                className="scroll-mt-24"
              >
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
