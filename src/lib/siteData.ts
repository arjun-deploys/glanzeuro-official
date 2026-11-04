/**
 * Glanzeuro Lingo: business details and shared site settings.
 *
 * Everything a non-developer may need to update lives in this file or in
 * src/data/services.ts. Items marked CONFIRM must be checked with the
 * business before publishing (see the brief, section 11).
 */

export const business = {
  name: "Glanzeuro Lingo",
  tagline: "Learn. Speak. Succeed.",
  siteUrl: "https://glanzeurolingo.com",
  /** Digits only, without the country code. */
  phone: "9345881643",
  phoneDisplay: "+91 93458 81643",
  countryCode: "91",
  email: "enquiry@glanzeurolingo.com",
  location: "Chennai, Tamil Nadu, India",
  founder: "Praveena Naresh",
}

/** Kept for older imports. */
export const phone = business.phone

/** Google Form used for course enrolment on the existing site. */
export const enrolFormUrl = "https://forms.gle/tP1GzgJZM8DoViFw6"

/**
 * Where enquiry forms are delivered.
 *
 * Uses FormSubmit (https://formsubmit.co), which forwards each submission to
 * the business email with no server needed. The FIRST submission triggers an
 * activation email to enquiry@glanzeurolingo.com: click the link in it once and
 * every later enquiry arrives normally. After activation FormSubmit also offers
 * a random alias you can paste here instead of the email address.
 */
export const enquiryEndpoint = `https://formsubmit.co/ajax/${business.email}`

export const defaultWhatsappMessage =
  "Hello Glanzeuro Lingo, I would like to know more about your courses."

export function whatsappLink(message: string = defaultWhatsappMessage) {
  return `https://wa.me/${business.countryCode}${business.phone}?text=${encodeURIComponent(message)}`
}

export const whatsappHref = whatsappLink()
export const telHref = `tel:+${business.countryCode}${business.phone}`
export const mailHref = `mailto:${business.email}`

export type NavLink = { label: string; href: string; note?: string }
export type NavItem = NavLink & { children?: NavLink[] }

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "Courses",
    href: "/courses",
    children: [
      { label: "French", href: "/courses/french", note: "A1 to B2" },
      { label: "Dutch", href: "/courses/dutch", note: "A1 to A2" },
      { label: "German", href: "/courses/german", note: "Levels on enquiry" },
      {
        label: "Spoken English",
        href: "/courses/spoken-english",
        note: "Fluency and confidence",
      },
    ],
  },
  {
    label: "Exam Preparation",
    href: "/exam-preparation",
    children: [
      {
        label: "TEF Preparation",
        href: "/exam-preparation/tef",
        note: "Test d’évaluation de français",
      },
      {
        label: "TCF Preparation",
        href: "/exam-preparation/tcf",
        note: "Test de connaissance du français",
      },
    ],
  },
  {
    label: "Career Services",
    href: "/career-services",
    children: [
      {
        label: "Resume / CV Building",
        href: "/career-services/resume-building",
      },
      {
        label: "Interview Preparation",
        href: "/career-services/interview-preparation",
      },
      {
        label: "Placement Assistance",
        href: "/career-services/placement-assistance",
      },
    ],
  },
  { label: "Study Abroad", href: "/study-abroad" },
  { label: "Our Approach", href: "/our-approach" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact Us", href: "/contact" },
]

/**
 * Learner testimonials.
 *
 * Only entries with `verified: true` are shown on the website. The quotes
 * below were placeholders on the previous site and have NOT been approved,
 * so they stay hidden. Replace them with genuine learner feedback (with the
 * learner’s permission) and set `verified: true`.
 */
export type Testimonial = {
  quote: string
  name: string
  course: string
  verified: boolean
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "The speaking practice made me stop translating every sentence in my head. I finally feel comfortable starting a conversation.",
    name: "Aarav S.",
    course: "French A1",
    verified: false,
  },
  {
    quote:
      "The classes are structured, warm and very practical. I could use what I learnt immediately at work.",
    name: "Maya R.",
    course: "Dutch A2",
    verified: false,
  },
  {
    quote:
      "I started as a complete beginner and now I can introduce myself, ask questions and keep going when I make a mistake.",
    name: "Nisha K.",
    course: "French A1",
    verified: false,
  },
]

export const publishedTestimonials = testimonials.filter((t) => t.verified)

/**
 * Figures for the stats bar under the home page. CONFIRM each figure with
 * records before setting `verified: true`; unverified figures are hidden.
 * (The previous site showed "500+ learners trained" and "4.8/5 satisfaction".)
 */
export const stats = [
  { value: "500+", label: "Learners trained", verified: false },
  { value: "4.8/5", label: "Learner satisfaction", verified: false },
]
