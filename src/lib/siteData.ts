export type Language = "french" | "dutch";

export type Course = {
  language: Language;
  level: "A1" | "A2" | "B1" | "B2";
  title: string;
  descriptor: string;
  href: string;
  sections: string[];
  special?: string;
};

export const phone = "9345881643";
export const whatsappHref = `https://wa.me/91${phone}`;

export const whatWeDo = [
  { number: "01", title: "Speaking", copy: "Build confidence through regular speaking practice." },
  { number: "02", title: "Listening", copy: "Train your ear for everyday language and rhythm." },
  { number: "03", title: "Reading", copy: "Make meaning from real words, signs and stories." },
  { number: "04", title: "Writing", copy: "Shape clear messages for study, work and life." },
  { number: "05", title: "Grammar & Vocabulary", copy: "Build strong fundamentals you can actually use." },
  { number: "06", title: "Practical Conversation", copy: "Move from the lesson into confident conversations." },
];

export const frenchLevels = [
  { level: "A1", name: "Beginner", copy: "French A1 — Beginner", href: "/french/a1" },
  { level: "A2", name: "Elementary", copy: "French A2 — Elementary", href: "/french/a2" },
  { level: "B1", name: "Intermediate", copy: "French B1 — Intermediate", href: "/french/b1" },
  { level: "B2", name: "Upper Intermediate", copy: "French B2 — Upper Intermediate", href: "/french/b2" },
];

export const dutchLevels = [
  { level: "A1", name: "Beginner", copy: "Dutch A1 — Beginner", href: "/dutch/a1" },
  { level: "A2", name: "Elementary", copy: "Dutch A2 — Elementary", href: "/dutch/a2" },
  { level: "B1", name: "Intermediate", copy: "Dutch B1 — Intermediate", href: "/dutch/b1" },
  { level: "B2", name: "Upper Intermediate", copy: "Dutch B2 — Upper Intermediate", href: "/dutch/b2" },
];

export const principles = [
  "Live Online Classes",
  "Speaking-Focused Training",
  "Interactive Learning",
  "Study Materials Included",
  "Weekly Tests & Assignments",
  "One-to-One Speaking Practice",
  "Flexible Batch Timings",
  "Certificate Upon Completion",
];

export const audiences = [
  { title: "Students", copy: "" },
  { title: "Professionals", copy: "" },
  { title: "Relocation Aspirants", copy: "" },
  { title: "Travellers", copy: "" },
  { title: "Beginners", copy: "" },
  { title: "Anyone Who Wants to Communicate Better", copy: "" },
];

const commonSections = [
  "Speaking Skills",
  "Listening Skills",
  "Reading Skills",
  "Writing Skills",
  "Grammar & Vocabulary",
  "Assessment",
  "Certificate",
];

export const courses: Course[] = [
  ...frenchLevels.map((item) => ({
    language: "french" as const,
    level: item.level as Course["level"],
    title: item.copy,
    descriptor: item.name,
    href: item.href,
    sections: [
      ...commonSections.slice(0, 5),
      ...(item.level === "B1" || item.level === "B2" ? ["Practical Communication"] : []),
      ...commonSections.slice(5),
    ],
  })),
  ...dutchLevels.map((item) => ({
    language: "dutch" as const,
    level: item.level as Course["level"],
    title: item.copy,
    descriptor: item.name,
    href: item.href,
    sections: [
      ...commonSections.slice(0, 5),
      ...(item.level !== "A1" ? ["Practical Communication"] : []),
      ...(item.level === "A2" ? ["Additional Preparation"] : []),
      ...commonSections.slice(5),
    ],
    special: item.level === "A2" ? "Dutch A2 Inburgering Exam Preparation, where applicable." : undefined,
  })),
];

export const getCourse = (language: Language, level: string) =>
  courses.find((course) => course.language === language && course.level.toLowerCase() === level.toLowerCase());

export const seo = {
  title: "Online French & Dutch Training | French A1–B2 | Glanzeuro Lingo",
  description:
    "Learn French and Dutch online with Glanzeuro Lingo. Live, interactive language training from A1 to B2 with speaking practice, study materials, assessments and certificate on completion.",
};

export const images = {
  hero: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=85",
  french: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=85",
  dutch: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=85",
  travel: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=85",
  mentorPlaceholder: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1000&q=85",
  about: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1600&q=85",
};

export const testimonials = [
  { quote: "The speaking practice made me stop translating every sentence in my head. I finally feel comfortable starting a conversation.", name: "Aarav S.", course: "French A1 · dummy review" },
  { quote: "The classes are structured, warm and very practical. I could use what I learnt immediately at work.", name: "Maya R.", course: "Dutch A2 · dummy review" },
  { quote: "I started as a complete beginner and now I can introduce myself, ask questions and keep going when I make a mistake.", name: "Nisha K.", course: "French A1 · dummy review" },
  { quote: "The lessons give you a clear rhythm. Listening, speaking, vocabulary — everything connects and feels manageable.", name: "Daniel P.", course: "Dutch B1 · dummy review" },
  { quote: "What I value most is the confidence. It feels less like memorising a language and more like finding your voice.", name: "Sara M.", course: "French B1 · dummy review" },
]; 
