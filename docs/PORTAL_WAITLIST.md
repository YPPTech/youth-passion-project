# Portal waitlist (notify me when the portal is ready)

When the student portal is not yet ready, the site can collect emails so you can notify people when it’s live.

## How it works

- **Env var:** `NEXT_PUBLIC_PORTAL_WAITLIST_FORM_URL`
- **When set:** All “Student Portal” and “Join the Portal” CTAs become “Get notified when the portal is ready” and link to `/notify`. The `/notify` page sends users to your waitlist form to submit their email.
- **When not set (or empty):** Normal behavior: CTAs link to the portal.

## 1. Create a Google Form to collect emails

1. Go to [Google Forms](https://forms.google.com) and create a new form.
2. Add at least one question:
   - **Email** (Short answer) — required.
   - Optional: “I’m interested as” (Multiple choice: Student / Parent / Instructor / Other).
3. Turn on “Collect email addresses” in form settings if you want Google to record them in addition to the Short answer.
4. Send the form, then use **Send** → **Link** and copy the **viewform** URL (e.g. `https://docs.google.com/forms/d/e/.../viewform`).

## 2. Turn on the waitlist on the site

1. In your deployment (e.g. Vercel) or in `.env.local`, set:
   ```bash
   NEXT_PUBLIC_PORTAL_WAITLIST_FORM_URL=https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform
   ```
2. Redeploy or restart the dev server. The header, footer, Programs page, Apply page, homepage, Calendar, and FAQs will now show “Get notified when the portal is ready” (or similar) instead of linking to the portal.

## 3. When the portal is ready: get emails and send the mass email

1. **Export emails from the form**
   - Open the form in Google Forms → **Responses** → **Link to Sheets** (create a new sheet or use existing).
   - In the sheet, you’ll have one column with email addresses (and any other columns you added). Copy the email column (no need for headers in the BCC list).

2. **Send the mass email**
   - Use your usual email (e.g. Gmail, Mailchimp, or your org’s mailer).
   - **To:** yourself or a no-reply address (so the thread is valid).
   - **BCC:** paste all the waitlist emails (BCC keeps addresses private).
   - **Subject / body:** e.g. “The YPP student portal is ready — create your account” and include the portal signup/login URL. Tell them they can now create an account and sign up for classes.

3. **Switch the site back to the portal**
   - Remove `NEXT_PUBLIC_PORTAL_WAITLIST_FORM_URL` from your environment (or set it to empty), then redeploy.
   - All CTAs will again point to the student portal.

## Summary

| Step | Action |
|------|--------|
| Now | Create Google Form (email + optional “interested as”), set `NEXT_PUBLIC_PORTAL_WAITLIST_FORM_URL`, deploy. |
| Later | Export emails from the form (Google Sheets), send one BCC email: “Portal is ready — create your account” with the portal link. |
| After that | Remove the env var and redeploy so the site links to the portal again. |
