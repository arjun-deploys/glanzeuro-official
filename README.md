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

`npm run build` does three things: type-checks, builds the site, then **pre-renders every page
to its own HTML file** (`scripts/prerender.mjs`). Each page therefore arrives with its real
content, title, description and canonical link already in the HTML, which is what search engines
and WhatsApp/LinkedIn link previews read. The same step regenerates `dist/sitemap.xml`, so the
sitemap never goes out of date. When you add a page, add its route to `routes` in
`src/entry-server.tsx`.

## Deploying

A ready-to-upload build is included in `dist/` (built from this exact code).

Upload the **contents** of `dist/` (not the folder itself). Pages are files such as
`dist/courses/french.html`, served at the clean address `/courses/french`; unknown addresses get
`404.html` with a real 404 status. Rules for the common hosts are included:

| Host                      | File                                   | Notes                                                             |
| ------------------------- | -------------------------------------- | ----------------------------------------------------------------- |
| Apache, cPanel, Hostinger | `public/.htaccess`                     | Copied into `dist/` by the build. Upload the contents of `dist/`. |
| Netlify                   | `public/_redirects`, `public/_headers` | Copied into `dist/` by the build.                                 |
| Vercel                    | `vercel.json`                          | At the project root. Uses `cleanUrls`.                            |

The Apache rules were tested on a real Apache server: clean URLs, trailing-slash and `.html`
redirects, old-URL redirects (also with capital letters, e.g. `/dutch/B2`), 404 status, gzip and
caching. **HTTPS:** a "force HTTPS" rule is included but commented out in `.htaccess`. Turn on
the host's "Force HTTPS" switch, or uncomment those lines once the SSL certificate is active.

The old URLs `/french`, `/dutch`, `/french/a1`, `/dutch/b1` and so on redirect permanently to
the matching new `/courses/...` page. The app also redirects them itself, in case the host rules
are not applied.

**After going live:** submit `https://glanzeurolingo.com/sitemap.xml` in Google Search Console.

## Enquiry forms: sent by WhatsApp

Every enquiry form on the site sends to WhatsApp. When a visitor presses the submit button, the
browser checks the required fields, then opens WhatsApp (the app on phones, WhatsApp Web or
Desktop on computers) with a chat to **+91 93458 81643** and all their answers already typed in:

```
Hello Glanzeuro Lingo, I would like to make an enquiry.

*Request:* A free demo class
*Full name:* Priya Kumar
*Phone / WhatsApp:* +91 98765 43210
*Interested in:* Dutch
...
(Sent from https://glanzeurolingo.com/contact)
```

The visitor then taps **Send**. The page shows a confirmation with an "Open WhatsApp" button in
case WhatsApp did not open. Nothing needs activating, and no third-party form service is used.
To change the receiving number, edit `phone` and `phoneDisplay` in `src/lib/siteData.ts`.

Note: the enquiry only reaches you if the visitor presses Send in WhatsApp, and they need
WhatsApp installed or WhatsApp Web available. Phone and email links stay on every form for
anyone who prefers them.

## Where to edit content

| What                                                                                          | File                               |
| --------------------------------------------------------------------------------------------- | ---------------------------------- |
| Phone, email, WhatsApp message, enrolment form link, navigation                               | `src/lib/siteData.ts`              |
| Testimonials and home-page stats                                                              | `src/lib/siteData.ts`              |
| Language courses, TEF and TCF, career services, study abroad, Why Choose Us, learning journey | `src/data/services.ts`             |
| Level-by-level syllabus for French and Dutch, A1 to B2                                        | `src/data/courses.ts`              |
| Course photos (large 1200px and small 640px WebP)                                             | `src/assets/course/`               |
| Colours, typography, layout                                                                   | `src/index.css`                    |
| Line-art illustrations                                                                        | `src/components/Illustrations.tsx` |

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
- **Testimonials.** Five testimonials from the previous site are shown (three on the home page,
  all five on `/testimonials`). The previous site's own code marked them as placeholder text,
  so replace them with real quotes, with the learner's permission. Set `verified: false` to hide
  one.
- **Stats** ("500+ learners trained", "4.8/5 satisfaction"). Hidden until verified; set
  `verified: true` in `stats` to show them.
- **GLAF QR codes** (`public/qr/`) open short links on me-qr.com, not this website. They keep
  working only while that me-qr.com account is active.
- **Photography.** French and Dutch use the existing photos. German, Spoken English, exams,
  career and study abroad use brand line-art illustrations until licensed photos are chosen.

## Sitemap

```
/                                   Home
/about                              About Us
/courses                            Language Courses (all)
  /courses/french                   French A1 to B2
    /courses/french/a1 … /b2        Level syllabus pages
  /courses/dutch                    Dutch A1 to B2
    /courses/dutch/a1 … /b2         Level syllabus pages
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

The build writes `dist/sitemap.xml` from these routes and `public/robots.txt` points to it. Each
page has its own title, meta description, canonical URL and social tags, plus breadcrumb and FAQ
structured data where relevant.

## Tested

- Build, TypeScript, ESLint and Prettier pass with no errors or warnings.
- All 27 pages at 360, 390, 768, 1024 and 1440px wide: no horizontal scrolling, no console or
  hydration errors, one `<h1>` each, every image has alt text.
- Mobile menu, desktop dropdowns, level tabs, client-side navigation, enquiry-form validation and
  preselection from `?topic=` and `#book-demo` links, 404 page, GLAF audio and QR files.
- All 49 resized QR codes decoded and checked against the originals: same links.
- Lighthouse (simulated mid-range phone on slow 4G): SEO 100, Best Practices 96–100,
  Accessibility 96–100, Performance 77–87, layout shift 0.
- Enquiry forms (general, course, exam, career and study-abroad versions): empty or invalid
  forms are blocked, and a filled form opens wa.me/919345881643 with every answer in the message.
  Do one real test from a phone after going live.
