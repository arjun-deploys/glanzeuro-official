import { useEffect, useId, useState } from "react"
import { CheckCircle2, Loader2, Mail, Phone } from "lucide-react"
import {
  business,
  enquiryEndpoint,
  mailHref,
  telHref,
  whatsappLink,
} from "@/lib/siteData"
import { WhatsAppIcon } from "@/components/ui"
import { DEMO_HASH, interestGroups } from "@/lib/forms"

const levelOptions = ["Complete beginner", "A1", "A2", "B1", "B2", "Not sure"]
const timingOptions = [
  "Weekday mornings",
  "Weekday afternoons",
  "Weekday evenings",
  "Weekends",
  "Flexible",
]
const qualificationOptions = [
  "Class 12 / higher secondary",
  "Diploma",
  "Bachelor’s degree",
  "Master’s degree",
  "Other",
]

type Variant = "course" | "exam" | "service" | "study" | "general"

const requestTypesFor: Record<Variant, string[]> = {
  course: ["Course details", "A free demo class"],
  exam: ["Preparation details", "A consultation"],
  service: ["Service details", "A consultation"],
  study: ["Counselling session", "General information"],
  general: [
    "Course or service details",
    "A free demo class",
    "A counselling session",
  ],
}

type Status = "idle" | "sending" | "sent" | "error"

export function EnquiryForm({
  interest = "",
  variant = "general",
  title = "Send an enquiry",
  intro,
  submitLabel = "Send Enquiry",
  whatsappMessage,
}: {
  interest?: string
  variant?: Variant
  title?: string
  intro?: string
  submitLabel?: string
  whatsappMessage?: string
}) {
  const id = useId()
  const requestTypes = requestTypesFor[variant]
  const showLevel =
    variant === "course" || variant === "exam" || variant === "general"
  const showTiming =
    variant === "course" || variant === "exam" || variant === "general"
  const isStudy = variant === "study"

  const [status, setStatus] = useState<Status>("idle")
  const [error, setError] = useState("")
  const [sentName, setSentName] = useState("")
  // "#book-demo" or "?topic=demo" preselects the second request type;
  // "?topic=French" (any listed option) preselects the course or service.
  const [request, setRequest] = useState(() => {
    const topic = new URLSearchParams(window.location.search).get("topic")
    return window.location.hash === `#${DEMO_HASH}` || topic === "demo"
      ? requestTypes[1]
      : requestTypes[0]
  })
  const [chosenInterest, setChosenInterest] = useState(() => {
    const topic = (
      new URLSearchParams(window.location.search).get("topic") || ""
    ).toLowerCase()
    const match = interestGroups
      .flatMap((g) => g.options)
      .find((o) => o.toLowerCase() === topic)
    return match || interest || (isStudy ? "Study Abroad" : "")
  })

  // In-page "Book a Demo Class" links change the hash without remounting.
  useEffect(() => {
    const onHash = () => {
      if (window.location.hash === `#${DEMO_HASH}`) setRequest(requestTypes[1])
    }
    window.addEventListener("hashchange", onHash)
    return () => window.removeEventListener("hashchange", onHash)
  }, [requestTypes])

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = Object.fromEntries(new FormData(form).entries()) as Record<
      string,
      string
    >
    if (data._honey) return // bot
    // Drop the internal radio name and any empty optional fields.
    for (const key of Object.keys(data)) {
      if (
        key.endsWith("-request") ||
        (key !== "_honey" && !String(data[key]).trim())
      )
        delete data[key]
    }

    setStatus("sending")
    setError("")
    const payload = {
      ...data,
      "Request type": request,
      Page: window.location.href,
      _subject: `Website enquiry: ${data["Interested in"] || "General"} (${request})`,
      _template: "table",
      _captcha: "false",
    }

    try {
      const res = await fetch(enquiryEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      })
      const json = (await res.json().catch(() => ({}))) as {
        success?: string | boolean
        message?: string
      }
      if (!res.ok || String(json.success) !== "true") {
        throw new Error(json.message || `Request failed (${res.status})`)
      }
      setSentName((data["Full name"] || "").split(" ")[0])
      setStatus("sent")
      form.reset()
    } catch (err) {
      console.error("Enquiry form error:", err)
      setStatus("error")
      setError(
        "Your enquiry could not be sent. Check your connection and try again, or contact us on WhatsApp, by phone or by email."
      )
    }
  }

  const waMessage =
    whatsappMessage ??
    `Hello Glanzeuro Lingo, I would like to know more about ${chosenInterest || "your courses"}.`

  return (
    <div className="enquiry" id="enquire">
      <span id={DEMO_HASH} className="anchor-offset" aria-hidden="true" />
      <div className="enquiry__intro">
        <h2>{title}</h2>
        <p>
          {intro ??
            "Share a few details and we will get back to you with the information you need, including current batches, timings and fees."}
        </p>
        <ul className="enquiry__contacts">
          <li>
            <a
              href={whatsappLink(waMessage)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon size={18} />
              <span>
                <small>WhatsApp</small>
                {business.phoneDisplay}
              </span>
            </a>
          </li>
          <li>
            <a href={telHref}>
              <Phone size={18} aria-hidden="true" />
              <span>
                <small>Call</small>
                {business.phoneDisplay}
              </span>
            </a>
          </li>
          <li>
            <a href={mailHref}>
              <Mail size={18} aria-hidden="true" />
              <span>
                <small>Email</small>
                {business.email}
              </span>
            </a>
          </li>
        </ul>
      </div>

      {status === "sent" ? (
        <div className="enquiry__done" role="status" aria-live="polite">
          <CheckCircle2 size={40} aria-hidden="true" />
          <h3>
            Thank you{sentName ? `, ${sentName}` : ""}. Your enquiry has been
            sent.
          </h3>
          <p>
            We have received your details and will contact you using the phone
            number or email you shared. For a quicker reply, message us on
            WhatsApp.
          </p>
          <button
            type="button"
            className="btn btn--outline btn--sm"
            onClick={() => setStatus("idle")}
          >
            <span>Send another enquiry</span>
          </button>
        </div>
      ) : (
        <form className="enquiry__form" onSubmit={onSubmit} noValidate={false}>
          <fieldset className="segmented">
            <legend>I would like</legend>
            <div>
              {requestTypes.map((r) => (
                <label key={r} className={request === r ? "is-on" : ""}>
                  <input
                    type="radio"
                    name={`${id}-request`}
                    value={r}
                    checked={request === r}
                    onChange={() => setRequest(r)}
                  />
                  {r}
                </label>
              ))}
            </div>
          </fieldset>

          <div className="field-row">
            <label className="field">
              <span>Full name</span>
              <input name="Full name" required autoComplete="name" />
            </label>
            <label className="field">
              <span>Email</span>
              <input name="Email" type="email" required autoComplete="email" />
            </label>
          </div>

          <div className="field-row">
            <label className="field">
              <span>Phone / WhatsApp</span>
              <input
                name="Phone / WhatsApp"
                type="tel"
                required
                autoComplete="tel"
                inputMode="tel"
                pattern="[0-9+()\-\s]{7,20}"
                title="Enter a phone number using digits, spaces or +"
              />
            </label>
            {isStudy ? (
              <label className="field">
                <span>Preferred destination</span>
                <input
                  name="Preferred destination"
                  required
                  placeholder="For example, France or Canada"
                />
              </label>
            ) : (
              <label className="field">
                <span>Course or service</span>
                <select
                  name="Interested in"
                  required
                  value={chosenInterest}
                  onChange={(e) => setChosenInterest(e.target.value)}
                >
                  <option value="" disabled>
                    Choose one
                  </option>
                  {interestGroups.map((g) => (
                    <optgroup key={g.label} label={g.label}>
                      {g.options.map((o) => (
                        <option key={o}>{o}</option>
                      ))}
                    </optgroup>
                  ))}
                </select>
              </label>
            )}
          </div>

          {isStudy && (
            <>
              <input type="hidden" name="Interested in" value="Study Abroad" />
              <div className="field-row">
                <label className="field">
                  <span>Intended course or field</span>
                  <input
                    name="Intended course / field"
                    required
                    placeholder="For example, Business or Engineering"
                  />
                </label>
                <label className="field">
                  <span>Highest qualification</span>
                  <select name="Highest qualification" required defaultValue="">
                    <option value="" disabled>
                      Choose one
                    </option>
                    {qualificationOptions.map((o) => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                </label>
              </div>
              <label className="field">
                <span>
                  Preferred intake <em>(optional)</em>
                </span>
                <input
                  name="Preferred intake"
                  placeholder="For example, September 2027"
                />
              </label>
            </>
          )}

          {(showLevel || showTiming) && (
            <div className="field-row">
              {showLevel && (
                <label className="field">
                  <span>
                    Current level <em>(if known)</em>
                  </span>
                  <select name="Current level" defaultValue="">
                    <option value="">Not specified</option>
                    {levelOptions.map((o) => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                </label>
              )}
              {showTiming && (
                <label className="field">
                  <span>
                    Preferred timing <em>(optional)</em>
                  </span>
                  <select name="Preferred timing" defaultValue="">
                    <option value="">Not specified</option>
                    {timingOptions.map((o) => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                </label>
              )}
            </div>
          )}

          <label className="field">
            <span>
              Message <em>(optional)</em>
            </span>
            <textarea
              name="Message"
              rows={4}
              placeholder="Your goal, exam date or any questions"
            />
          </label>

          <input
            type="text"
            name="_honey"
            tabIndex={-1}
            autoComplete="off"
            className="hp"
            aria-hidden="true"
          />

          {status === "error" && (
            <p className="form-error" role="alert">
              {error}
            </p>
          )}

          <div className="enquiry__submit">
            <button
              type="submit"
              className="btn btn--primary btn--md"
              disabled={status === "sending"}
            >
              {status === "sending" ? (
                <>
                  <Loader2 size={17} className="spin" aria-hidden="true" />
                  <span>Sending…</span>
                </>
              ) : (
                <span>{submitLabel}</span>
              )}
            </button>
            <p className="privacy">
              We use your details only to reply to this enquiry. We do not share
              them or add you to marketing lists.
            </p>
          </div>
        </form>
      )}
    </div>
  )
}
