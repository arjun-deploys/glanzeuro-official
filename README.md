# Glanzeuro Lingo website

Learn. Speak. Succeed. The website for Glanzeuro Lingo: language courses, French exam
preparation, career services and study-abroad guidance.

Built with React 19, TypeScript, Vite and wouter. Fonts (DM Serif Display and Manrope) are
self-hosted, so the site makes no requests to Google Fonts.

## Run and build

```bash
npm install
npm run dev      # local development at http://localhost:5173
npm run build    # production build into dist/
npm run preview  # serve the production build locally
npm run lint
```

A ready-to-upload production build is already included in `dist/`.

## Deploying

This is a single-page app, so the host must serve `index.html` for every route and should
permanently redirect the old URLs. Rules for the common hosts are included:

| Host | File | Notes |
| --- | --- | --- |
| Apache, cPanel, Hostinger | `public/.htaccess` | Copied into `dist/` by the build. Upload the contents of `dist/`. |
| Netlify | `public/_redirects` | Copied into `dist/` by the build. |
| Vercel | `vercel.json` | At the project root. |

The old URLs `/french`, `/dutch`, `/french/a1` and so on redirect to the new `/courses/...`
pages (Dutch B1 and B2 go to the Dutch page, as those levels are not currently offered).
The app also redirects them itself, in case the host rules are not applied.

## Enquiry forms: one-time activation

Every page with a form sends enquiries to **enquiry@glanzeurolingo.com** through
[FormSubmit](https://formsubmit.co), which needs no server.

1. After deploying, submit one test enquiry from the live site.
2. FormSubmit emails an activation link to enquiry@glanzeurolingo.com. Click it once.
3. Submit another test from desktop and from a phone and confirm both arrive.

Until step 2 is done, the form shows an error and offers WhatsApp, phone and email instead.
After activation FormSubmit can give you a random alias so the email address is not in the
page code; paste it into `enquiryEndpoint` in `src/lib/siteData.ts`. To use a different form
service, change `enquiryEndpoint` and the response check in `src/components/EnquiryForm.tsx`.

## Where to edit content

| What | File |
| --- | --- |
| Phone, email, WhatsApp message, enrolment form link, navigation | `src/lib/siteData.ts` |
| Testimonials and home-page stats | `src/lib/siteData.ts` |
| Language courses, TEF and TCF, career services, study abroad, Why Choose Us, learning journey | `src/data/services.ts` |
| Level-by-level syllabus for French A1 to B2 and Dutch A1 to A2 | `src/data/courses.ts` |
| Colours, typography, layout | `src/index.css` |
| Line-art illustrations | `src/components/Illustrations.tsx` |

## Before publishing: details to confirm

The brief asks that nothing unconfirmed is published. Search the code for `CONFIRM` to find
each of these.

- **Fees, course durations and batch timings.** Not shown anywhere; pages say they are shared
  on enquiry.
- **German levels** (`levels: []` in `services.ts`). The page says "Levels and batches
  confirmed on enquiry". Add levels like `["A1", "A2"]` and they appear on the card and page.
- **Spoken English** level, duration and format.
- **TEF and TCF versions and modules.** The pages describe the common versions (TEF Canada,
  TEF Québec, TCF Canada, TCF Tout Public) and state that the exact version is confirmed
  with the learner.
- **Cover letter support** and an anonymised sample resume for the Resume page.
- **Placement Assistance** scope, eligibility and terms. It is worded as support, never as
  guaranteed employment.
- **Study-abroad scope.** Check each of the six listed services is actually offered.
- **Format details for French and Dutch** (live classes, materials, weekly tests, one-to-one
  speaking, flexible timings, certificate). These were already on the previous site; please
  re-confirm.
- **Testimonials.** The previous site's quotes were placeholders, so they are hidden. Add real
  quotes (with the learner's permission) and set `verified: true`.
- **Stats** ("500+ learners trained", "4.8/5 satisfaction"). Hidden until verified; set
  `verified: true` in `stats` to show them.
- **Dutch B1 and B2.** The syllabus is kept in `courses.ts` with `offered: false`. Remove that
  line to publish them again.
- **Photography.** French and Dutch use the existing photos. German, Spoken English, exams,
  career and study abroad use brand line-art illustrations until licensed photos are chosen.

## Sitemap

```
/                                   Home
/about                              About Us
/courses                            Language Courses (all)
  /courses/french                   French A1 to B2
    /courses/french/a1 … /b2        Level syllabus pages
  /courses/dutch                    Dutch A1 to A2
    /courses/dutch/a1, /a2          Level syllabus pages
  /courses/german                   German
  /courses/spoken-english           Spoken English
/exam-preparation                   TEF and TCF overview and comparison
  /exam-preparation/tef             TEF Preparation
  /exam-preparation/tcf             TCF Preparation
/career-services                    Career Services (all)
  /career-services/resume-building
  /career-services/interview-preparation
  /career-services/placement-assistance
/study-abroad                       Study Abroad
/our-approach                       Our Approach
/testimonials                       Testimonials
/contact                            Contact Us
/glaf                               GLAF audio library (footer link)
```

`public/sitemap.xml` lists these for search engines and `public/robots.txt` points to it.
Each page sets its own title, meta description, canonical URL and social tags.

## Tested

- Production build, TypeScript and ESLint pass with no errors or warnings.
- Desktop (1440px), tablet (1024px) and phone (390px): no horizontal scrolling and no console errors.
- All internal links resolve; old URLs redirect correctly.
- Enquiry form: required-field validation, success confirmation, error fallback, and preselection
  from "Book a Free Demo" links and `/contact?topic=...`.
- Mobile menu, desktop dropdowns (mouse and keyboard, Escape to close).
- Live delivery to the inbox still needs testing after the FormSubmit activation above.
