import { useEffect, useId, useState } from "react"
import { CheckCircle2, Mail, Phone } from "lucide-react"
import { business, mailHref, telHref, whatsappLink } from "@/lib/siteData"
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

type Status = "idle" | "sent"

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
  const [sentLink, setSentLink] = useState("")
  const [sentName, setSentName] = useState("")
  // "#book-demo" or "?topic=demo" preselects the second request type;
  // "?topic=French" (any listed option) preselects the course or service.
  // Read after mount so the pre-rendered HTML and the first render match.
  const [request, setRequest] = useState(requestTypes[0])
  const [chosenInterest, setChosenInterest] = useState(
    interest || (isStudy ? "Study Abroad" : "")
  )
  useEffect(() => {
    const topic = new URLSearchParams(window.location.search).get("topic") || ""
    const demo = window.location.hash === `#${DEMO_HASH}` || topic === "demo"
    const match = interestGroups
      .flatMap((g) => g.options)
      .find((o) => o.toLowerCase() === topic.toLowerCase())
    /* eslint-disable react-hooks/set-state-in-effect -- one-off sync from the URL after the pre-rendered page loads */
    if (demo) setRequest(requestTypes[1])
    if (match) setChosenInterest(match)
    /* eslint-enable react-hooks/set-state-in-effect */
    // eslint-disable-next-line react-hooks/exhaustive-deps -- run once on mount
  }, [])

  // In-page "Book a Demo Class" links change the hash without remounting.
  useEffect(() => {
    const onHash = () => {
      if (window.location.hash === `#${DEMO_HASH}`) setRequest(requestTypes[1])
    }
    window.addEventListener("hashchange", onHash)
    return () => window.removeEventListener("hashchange", onHash)
  }, [requestTypes])

  /**
   * Turns the filled-in form into a WhatsApp message and opens WhatsApp
   * (the app on phones, WhatsApp Web or Desktop on computers) with the
   * message ready to send to the Glanzeuro Lingo number.
   */
  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = Object.fromEntries(new FormData(form).entries()) as Record<
      string,
      string
    >
    if (data._honey) return // bot

    const lines = [
      "Hello Glanzeuro Lingo, I would like to make an enquiry.",
      "",
      `*Request:* ${request}`,
    ]
    for (const [key, value] of Object.entries(data)) {
      const text = String(value).trim()
      // Skip the internal radio name, the spam trap and empty optional fields.
      if (key.endsWith("-request") || key === "_honey" || !text) continue
      lines.push(
        key === "Message" ? `\n*Message:*\n${text}` : `*${key}:* ${text}`
      )
    }
    lines.push(
      "",
      `(Sent from ${window.location.origin}${window.location.pathname})`
    )

    const link = whatsappLink(lines.join("\n"))
    // Open straight away (inside the click) so browsers don't block it.
    const opened = window.open(link, "_blank", "noopener,noreferrer")
    if (!opened) window.location.href = link

    setSentLink(link)
    setSentName((data["Full name"] || "").trim().split(/\s+/)[0])
    setStatus("sent")
    form.reset()
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
            Thank you{sentName ? `, ${sentName}` : ""}. WhatsApp has opened with
            your enquiry.
          </h3>
          <p>
            Your details are filled in. Tap <strong>Send</strong> in WhatsApp to
            send them to us, and we will reply there. If WhatsApp did not open,
            use the button below.
          </p>
          <a
            href={sentLink}
            className="btn btn--primary btn--md btn--whatsapp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Open WhatsApp</span>
            <WhatsAppIcon size={18} />
          </a>
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

          <div className="enquiry__submit">
            <button type="submit" className="btn btn--primary btn--md">
              <span>{submitLabel}</span>
              <WhatsAppIcon size={18} />
            </button>
            <p className="privacy">
              This opens WhatsApp with your details filled in, ready to send. We
              use them only to reply to your enquiry.
            </p>
          </div>
        </form>
      )}
    </div>
  )
}
