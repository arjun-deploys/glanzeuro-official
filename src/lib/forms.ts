/** Hash used by "Book a Demo Class" style links to preselect the request type. */
export const DEMO_HASH = "book-demo"

export const interestGroups: { label: string; options: string[] }[] = [
  {
    label: "Language courses",
    options: ["French", "Dutch", "German", "Spoken English"],
  },
  {
    label: "Exam preparation",
    options: ["TEF Preparation", "TCF Preparation"],
  },
  {
    label: "Career services",
    options: [
      "Resume / CV Building",
      "Interview Preparation",
      "Placement Assistance",
    ],
  },
  { label: "Other", options: ["Study Abroad", "Not sure yet"] },
]
