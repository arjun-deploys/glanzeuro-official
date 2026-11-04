/**
 * Content for every course, exam and service page.
 *
 * Rules from the brief (section 11): do not add fees, durations, statistics,
 * ratings, partnerships or guaranteed outcomes until they are confirmed.
 * Where a detail is not yet confirmed the page shows an enquiry prompt.
 * Search this file for "CONFIRM" to find every open item.
 */

export type Faq = { q: string; a: string }
export type Illustration =
  "eiffel" | "windmill" | "gate" | "speech" | "exam" | "career" | "globe"

export type LevelOutcome = { level: string; name: string; text: string }

export type Programme = {
  slug: "french" | "dutch" | "german" | "spoken-english"
  path: string
  name: string
  title: string
  flag: string[] // stripe colours, drawn as a round badge
  flagDirection: "vertical" | "horizontal"
  illustration: Illustration
  /** Confirmed levels. Empty = levels confirmed on enquiry. */
  levels: string[]
  levelsNote?: string
  cardSummary: string
  cardBenefits: string[]
  ctaLabel: string
  overview: string[]
  whoFor: string[]
  outcomes: LevelOutcome[]
  generalOutcomes?: string[]
  skills: { title: string; text: string }[]
  practice: { title: string; text: string }[]
  /** Level pages with a detailed syllabus (French and Dutch). */
  hasLevelPages: boolean
  extra?: { title: string; text: string; href?: string; linkLabel?: string }[]
  faqs: Faq[]
  whatsapp: string
  interest: string
  seo: { title: string; description: string }
}

/**
 * Course format, materials and certificate details that the previous
 * website already published for French and Dutch. Re-confirm before launch.
 */
export const confirmedFormat = [
  "Live, interactive online classes",
  "Speaking-focused training with one-to-one speaking practice",
  "Study materials included",
  "Weekly tests and assignments",
  "Flexible batch timings",
  "Certificate on successful completion of the training requirements and assessment",
]

// CONFIRM: course durations, fees and batch timings are not published yet.
// Course pages show "shared when you enquire" until they are confirmed.

const fourSkills = (lang: string) => [
  {
    title: "Speaking",
    text: `Speak ${lang} from the first class: introductions, questions and answers, role plays and guided conversation practice.`,
  },
  {
    title: "Listening",
    text: `Train your ear with everyday dialogues, instructions and announcements, moving from slow, clear speech to natural pace.`,
  },
  {
    title: "Reading",
    text: `Read signs, messages, emails and short texts, then longer articles and practical information as your level grows.`,
  },
  {
    title: "Writing",
    text: `Write forms, messages and emails first, then connected paragraphs where you describe, explain and give opinions.`,
  },
]

export const programmes: Programme[] = [
  {
    slug: "french",
    path: "/courses/french",
    name: "French",
    title: "French Language Training",
    flag: ["#1f3f95", "#ffffff", "#e1323b"],
    flagDirection: "vertical",
    illustration: "eiffel",
    levels: ["A1", "A2", "B1", "B2"],
    cardSummary:
      "Structured learning in grammar, vocabulary, pronunciation, reading, writing, listening and speaking.",
    cardBenefits: [
      "Structured A1 to B2 curriculum",
      "Practical speaking from the first class",
      "Grammar, vocabulary and pronunciation",
      "Pathway to TEF and TCF preparation",
    ],
    ctaLabel: "Explore French",
    overview: [
      "Our French programme takes you from your first bonjour to detailed discussions at B2. Each level builds the four skills together, so what you learn in grammar shows up in how you speak and write.",
      "Whether you are starting from zero or already have some French, we place you at the right level and move at a pace you can keep up with alongside study or work.",
    ],
    whoFor: [
      "Complete beginners starting at A1",
      "Students planning to study in a French-speaking country",
      "Professionals who use French at work",
      "Learners preparing for relocation or for TEF and TCF",
      "Travellers and anyone who wants to communicate better",
    ],
    outcomes: [
      {
        level: "A1",
        name: "Beginner",
        text: "Greetings, introductions, basic vocabulary, simple sentences and everyday expressions.",
      },
      {
        level: "A2",
        name: "Elementary",
        text: "Everyday conversations, routines, familiar messages and short texts.",
      },
      {
        level: "B1",
        name: "Intermediate",
        text: "Opinions, familiar topics, longer conversations and connected writing.",
      },
      {
        level: "B2",
        name: "Upper-Intermediate",
        text: "Detailed discussions, complex material, presentations and structured writing.",
      },
    ],
    skills: fourSkills("French"),
    practice: [
      {
        title: "Grammar",
        text: "Articles and gender, verb tenses, question forms, negation, connectors and sentence structure, taught through examples you will actually use.",
      },
      {
        title: "Vocabulary",
        text: "Themed word sets for family, food, shopping, travel, work and study, extended at each level with expressions and connectors.",
      },
      {
        title: "Pronunciation",
        text: "The French alphabet and sounds, liaison and rhythm, practised aloud in every class so you are understood with confidence.",
      },
    ],
    hasLevelPages: true,
    extra: [
      {
        title: "Preparing for a French exam?",
        text: "TEF and TCF preparation are separate programmes focused on exam format, timed practice and mock tests.",
        href: "/exam-preparation",
        linkLabel: "See TEF and TCF preparation",
      },
    ],
    faqs: [
      {
        q: "I have never studied French. Where do I start?",
        a: "You start at A1. It assumes no prior French and covers greetings, introductions, numbers, dates and simple everyday sentences.",
      },
      {
        q: "I studied some French before. Do I have to start again from A1?",
        a: "No. Tell us what you have studied when you enquire and we will help you find the right level so you neither repeat nor skip too much.",
      },
      {
        q: "Are the classes live?",
        a: "Yes. Classes are live and interactive, conducted online, with regular speaking practice.",
      },
      {
        q: "Is TEF or TCF preparation included in the French course?",
        a: "No. The French course builds your general language skills. TEF and TCF preparation are separate programmes that focus on the exam format. Many learners take them after reaching the level their exam requires.",
      },
      {
        q: "How long does each level take and what are the fees?",
        a: "Duration, fees and batch timings are shared when you enquire, so you always get the current details.",
      },
    ],
    whatsapp:
      "Hello Glanzeuro Lingo, I would like to know more about the French course.",
    interest: "French",
    seo: {
      title: "Online French Course A1 to B2 | Glanzeuro Lingo",
      description:
        "Learn French online from A1 to B2 with live interactive classes covering speaking, listening, reading, writing, grammar, vocabulary and pronunciation.",
    },
  },
  {
    slug: "dutch",
    path: "/courses/dutch",
    name: "Dutch",
    title: "Dutch Language Training",
    flag: ["#ae1c28", "#ffffff", "#21468b"],
    flagDirection: "horizontal",
    illustration: "windmill",
    levels: ["A1", "A2"],
    cardSummary:
      "Practical communication, everyday conversations, vocabulary, grammar and four-skill practice.",
    cardBenefits: [
      "Interactive, practical classes",
      "Everyday conversations from day one",
      "Grammar explained simply",
      "Inburgering preparation, where applicable",
    ],
    ctaLabel: "Explore Dutch",
    overview: [
      "Our Dutch programme focuses on the language you need for daily life: introducing yourself, shopping, appointments, travel and conversations at work.",
      "A1 builds a strong foundation and A2 develops the confidence to handle familiar situations on your own. Each class combines speaking, listening, reading and writing practice.",
    ],
    whoFor: [
      "Beginners with no prior Dutch",
      "People relocating to the Netherlands or Belgium",
      "Professionals working with Dutch-speaking teams",
      "Learners preparing for the Inburgering A2 exam",
    ],
    outcomes: [
      {
        level: "A1",
        name: "Beginner",
        text: "Greetings, personal information, numbers, dates, shopping and simple questions.",
      },
      {
        level: "A2",
        name: "Elementary",
        text: "Everyday conversations, routines, appointments, travel and short messages.",
      },
    ],
    skills: fourSkills("Dutch"),
    practice: [
      {
        title: "Grammar",
        text: "Word order, common verbs and verb forms, pronouns, articles and sentence construction, explained simply and practised in context.",
      },
      {
        title: "Vocabulary",
        text: "Family, food, shopping, transport, work, appointments and daily activities, the words you need first in a Dutch-speaking country.",
      },
      {
        title: "Pronunciation",
        text: "Dutch vowels, the g and ui sounds and sentence rhythm, practised aloud so everyday conversations feel natural.",
      },
    ],
    hasLevelPages: true,
    extra: [
      {
        title: "Inburgering A2 preparation",
        text: "Dutch A2 includes Inburgering exam preparation where applicable: mock assessments, assignments and personal guidance alongside the course. Ask us whether it fits your situation.",
      },
    ],
    faqs: [
      {
        q: "Which Dutch levels do you offer?",
        a: "We currently offer Dutch A1 (Beginner) and A2 (Elementary).",
      },
      {
        q: "Do you prepare learners for the Inburgering exam?",
        a: "Dutch A2 includes Inburgering exam preparation where applicable. Tell us about your situation when you enquire and we will advise you.",
      },
      {
        q: "Can I learn Dutch online from India?",
        a: "Yes. Classes are live and online, so you can join from anywhere with a stable internet connection.",
      },
      {
        q: "How long does each level take and what are the fees?",
        a: "Duration, fees and batch timings are shared when you enquire, so you always get the current details.",
      },
    ],
    whatsapp:
      "Hello Glanzeuro Lingo, I would like to know more about the Dutch course.",
    interest: "Dutch",
    seo: {
      title: "Online Dutch Course A1 and A2 | Glanzeuro Lingo",
      description:
        "Learn Dutch online at A1 and A2 with live classes for everyday conversation, grammar, vocabulary and four-skill practice, with Inburgering preparation where applicable.",
    },
  },
  {
    slug: "german",
    path: "/courses/german",
    name: "German",
    title: "German Language Training",
    flag: ["#111111", "#dd0000", "#ffce00"],
    flagDirection: "horizontal",
    illustration: "gate",
    // CONFIRM: add the German levels currently offered, e.g. ["A1", "A2"].
    levels: [],
    levelsNote: "Levels and batches confirmed on enquiry",
    cardSummary:
      "German pronunciation, vocabulary, grammar and practical communication, taught step by step.",
    cardBenefits: [
      "Step-by-step learning",
      "Focus on real-life communication",
      "Grammar and sentence construction",
      "For study, work and career goals",
    ],
    ctaLabel: "Explore German",
    overview: [
      "Our German programme starts with sounds, greetings and essential vocabulary, then builds the grammar and sentence construction you need to speak and write with confidence.",
      "Every class practises listening, speaking, reading and writing together, so you can use German in real situations rather than only recognise it on paper.",
    ],
    whoFor: [
      "Beginners starting German from zero",
      "Students considering study in Germany, Austria or Switzerland",
      "Professionals exploring German-speaking workplaces",
      "Anyone who wants practical, structured German",
    ],
    outcomes: [],
    generalOutcomes: [
      "Pronounce German sounds clearly and read aloud with confidence",
      "Greet people, introduce yourself and handle everyday exchanges",
      "Build correct sentences with German word order and verb forms",
      "Understand and write short practical texts and messages",
    ],
    skills: fourSkills("German"),
    practice: [
      {
        title: "Grammar and sentence construction",
        text: "Articles and cases, verb position, common verbs and question forms, built up gradually with plenty of examples.",
      },
      {
        title: "Vocabulary",
        text: "Greetings, numbers, family, food, shopping, travel and work vocabulary, the words you need first.",
      },
      {
        title: "Pronunciation",
        text: "Umlauts, the ch and r sounds and word stress, practised aloud in every class.",
      },
    ],
    hasLevelPages: false,
    faqs: [
      {
        q: "Which German levels are available?",
        a: "Available levels and batches are confirmed when you enquire. Tell us your current level and goal and we will suggest the right starting point.",
      },
      {
        q: "Do I need any prior German?",
        a: "No. Beginners are welcome and start with pronunciation, greetings and basic vocabulary.",
      },
      {
        q: "Are the classes live?",
        a: "Yes, classes are conducted live online. Ask us about current batch timings.",
      },
    ],
    whatsapp:
      "Hello Glanzeuro Lingo, I would like to know more about the German course.",
    interest: "German",
    seo: {
      title: "Online German Language Course | Glanzeuro Lingo",
      description:
        "Learn German online with structured classes in pronunciation, vocabulary, grammar, sentence construction and practical communication. Enquire for current levels and batches.",
    },
  },
  {
    slug: "spoken-english",
    path: "/courses/spoken-english",
    name: "Spoken English",
    title: "Spoken English",
    flag: [],
    flagDirection: "horizontal",
    illustration: "speech",
    // CONFIRM: levels, duration and format for Spoken English.
    levels: [],
    levelsNote: "Level and duration confirmed on enquiry",
    cardSummary:
      "Fluency, pronunciation, vocabulary and confident everyday and professional communication.",
    cardBenefits: [
      "Improve fluency and confidence",
      "Real-life conversation practice",
      "Pronunciation and vocabulary",
      "Professional communication",
    ],
    ctaLabel: "Explore Spoken English",
    overview: [
      "Spoken English is for learners who understand English but want to speak it more fluently and confidently, in everyday life and at work.",
      "Classes focus on speaking practice: forming sentences quickly, choosing the right words, pronouncing them clearly and keeping a conversation going.",
    ],
    whoFor: [
      "Students preparing for interviews, presentations or study abroad",
      "Professionals who want clearer workplace communication",
      "Learners who understand English but hesitate to speak",
    ],
    outcomes: [],
    generalOutcomes: [
      "Speak in full, well-formed sentences without long pauses",
      "Hold everyday conversations with confidence",
      "Pronounce words clearly and with natural stress",
      "Introduce yourself and communicate professionally",
    ],
    skills: [
      {
        title: "Everyday conversation",
        text: "Greetings, small talk, asking for help, giving directions and describing your day, practised as real conversations.",
      },
      {
        title: "Grammar for communication",
        text: "Tenses, questions and sentence formation taught for speaking, so correct sentences come quickly when you need them.",
      },
      {
        title: "Fluency and confidence",
        text: "Speaking drills, role plays and discussions that train you to think in English and keep talking.",
      },
      {
        title: "Professional communication",
        text: "Self-introductions, meetings, phone calls and presentations for study and work settings.",
      },
    ],
    practice: [
      {
        title: "Vocabulary",
        text: "Useful words and phrases for daily life and work, with the expressions that make speech sound natural.",
      },
      {
        title: "Pronunciation",
        text: "Clear sounds, word stress and intonation, so you are easily understood.",
      },
      {
        title: "Sentence formation",
        text: "Building questions, answers and longer explanations step by step.",
      },
    ],
    hasLevelPages: false,
    faqs: [
      {
        q: "Is this course for beginners?",
        a: "Spoken English is designed for learners who understand basic English and want to speak more fluently. Tell us your current level when you enquire.",
      },
      {
        q: "How long is the course and how are classes run?",
        a: "Duration, format and batch timings are confirmed when you enquire.",
      },
      {
        q: "Does it help with interviews?",
        a: "The course includes professional communication such as self-introductions. For focused interview practice, see our Interview Preparation service.",
      },
    ],
    whatsapp:
      "Hello Glanzeuro Lingo, I would like to know more about the Spoken English course.",
    interest: "Spoken English",
    seo: {
      title: "Spoken English Course Online | Glanzeuro Lingo",
      description:
        "Improve your spoken English fluency, pronunciation, vocabulary and confidence for everyday and professional communication with live online classes.",
    },
  },
]

export const getProgramme = (slug: string) =>
  programmes.find((p) => p.slug === slug)

// ---------------------------------------------------------------------------
// Exam preparation
// ---------------------------------------------------------------------------

export type ExamModule = {
  code: string
  name: string
  english: string
  text: string
}

export type Exam = {
  slug: "tef" | "tcf"
  path: string
  code: string
  title: string
  fullName: string
  cardSummary: string
  cardBenefits: string[]
  overview: string[]
  versions: { name: string; text: string }[]
  whoFor: string[]
  modules: ExamModule[]
  modulesNote: string
  method: { title: string; text: string }[]
  faqs: Faq[]
  whatsapp: string
  interest: string
  seo: { title: string; description: string }
}

const writtenAndOral = (exam: string): ExamModule[] => [
  {
    code: "CO",
    name: "Compréhension orale",
    english: "Listening",
    text: `Understanding recorded dialogues, announcements and interviews in the ${exam} question format.`,
  },
  {
    code: "CE",
    name: "Compréhension écrite",
    english: "Reading",
    text: "Reading notices, messages, articles and opinion texts, and answering quickly and accurately.",
  },
  {
    code: "EE",
    name: "Expression écrite",
    english: "Writing",
    text: "Planning and writing the required tasks within the time limit, with clear structure and accurate French.",
  },
  {
    code: "EO",
    name: "Expression orale",
    english: "Speaking",
    text: "Responding to examiner prompts, asking for information and presenting and defending a point of view.",
  },
]

const examMethod = [
  {
    title: "Level check",
    text: "We start by understanding your current French level, your target score and your exam date.",
  },
  {
    title: "Exam-format practice",
    text: "Practice tasks that follow the structure and timing of each module, so nothing on exam day is unfamiliar.",
  },
  {
    title: "Mock tests",
    text: "Timed mock tests under exam conditions to build stamina and show where marks are being lost.",
  },
  {
    title: "Feedback",
    text: "Personalised feedback on your writing and speaking, with clear corrections and strategies to improve.",
  },
]

export const exams: Exam[] = [
  {
    slug: "tef",
    path: "/exam-preparation/tef",
    code: "tef",
    title: "TEF Preparation",
    fullName: "Test d’évaluation de français",
    cardSummary:
      "Targeted preparation for the TEF with module-by-module practice, mock tests and personalised feedback.",
    cardBenefits: [
      "Comprehensive training",
      "Listening, reading, speaking and writing",
      "Mock tests and exam strategies",
      "Personalised guidance",
    ],
    overview: [
      "The TEF is a French proficiency test from the Paris Île-de-France Chamber of Commerce and Industry. Results are used for immigration, citizenship and study applications, so a strong score can make a real difference.",
      "Our preparation focuses on the exam itself: how each module is structured, how it is timed and scored, and the strategies that help you perform at your true level.",
    ],
    // CONFIRM: the exact TEF versions covered.
    versions: [
      {
        name: "TEF Canada",
        text: "Used for Canadian immigration and citizenship applications.",
      },
      {
        name: "TEF Québec (TEFAQ)",
        text: "Used for Québec immigration programmes.",
      },
      {
        name: "Other TEF versions",
        text: "Such as those used for French nationality or study. Ask us which version you need.",
      },
    ],
    whoFor: [
      "Applicants for Canadian or Québec immigration",
      "Learners who need a recognised French score",
      "Learners at B1 or above who want exam-focused practice",
    ],
    modules: writtenAndOral("TEF"),
    modulesNote:
      "The modules you need depend on your TEF version and the requirement you are meeting. We confirm the version and modules we cover with you before you start.",
    method: examMethod,
    faqs: [
      {
        q: "Which TEF version should I take?",
        a: "It depends on why you need the score. TEF Canada is used for Canadian immigration and citizenship, and TEF Québec for Québec programmes. Check the requirement of the organisation you are applying to, and we will help you prepare for that version.",
      },
      {
        q: "What French level do I need before starting TEF preparation?",
        a: "Exam preparation works best once you have a working level of French, usually around B1 or above. If you are not there yet, our French course can get you ready first.",
      },
      {
        q: "Do you include mock tests?",
        a: "Yes. Preparation includes timed mock tests in the exam format, with feedback on your performance.",
      },
      {
        q: "When are the batches?",
        a: "Schedules depend on your exam date and current batches. Share your exam date when you enquire.",
      },
    ],
    whatsapp:
      "Hello Glanzeuro Lingo, I would like to know more about TEF preparation.",
    interest: "TEF Preparation",
    seo: {
      title: "TEF Preparation Online | TEF Canada | Glanzeuro Lingo",
      description:
        "Online TEF preparation covering listening, reading, writing and speaking modules, with exam-format practice, timed mock tests and personalised feedback.",
    },
  },
  {
    slug: "tcf",
    path: "/exam-preparation/tcf",
    code: "tcf",
    title: "TCF Preparation",
    fullName: "Test de connaissance du français",
    cardSummary:
      "Targeted preparation for the TCF with module-by-module practice, mock tests and personalised feedback.",
    cardBenefits: [
      "Comprehensive training",
      "Listening, reading, speaking and writing",
      "Mock tests and exam strategies",
      "Personalised guidance",
    ],
    overview: [
      "The TCF is a French proficiency test from France Éducation international. Its results are used for study, immigration and citizenship applications.",
      "Our preparation shows you exactly how each module works, trains you on exam-style tasks under time pressure and gives you feedback on your speaking and writing.",
    ],
    // CONFIRM: the exact TCF versions covered.
    versions: [
      {
        name: "TCF Canada",
        text: "Used for Canadian immigration and citizenship applications.",
      },
      {
        name: "TCF Tout Public",
        text: "A general-purpose version used for study, work and personal goals.",
      },
      {
        name: "Other TCF versions",
        text: "Such as TCF Québec or the versions used for French residency and nationality. Ask us which version you need.",
      },
    ],
    whoFor: [
      "Applicants for Canadian immigration",
      "Students applying to French-speaking universities",
      "Learners at B1 or above who want exam-focused practice",
    ],
    modules: writtenAndOral("TCF"),
    modulesNote:
      "Some TCF versions also include a language-structures section, and module requirements vary by version. We confirm the version and modules we cover with you before you start.",
    method: examMethod,
    faqs: [
      {
        q: "What is the difference between TEF and TCF?",
        a: "Both measure French proficiency and both have versions accepted for Canadian immigration. They are run by different organisations and differ in task types and format. Check which test your application accepts, then prepare for that one.",
      },
      {
        q: "What French level do I need before starting TCF preparation?",
        a: "Exam preparation works best once you have a working level of French, usually around B1 or above. If you are not there yet, our French course can get you ready first.",
      },
      {
        q: "Do you include mock tests?",
        a: "Yes. Preparation includes timed mock tests in the exam format, with feedback on your performance.",
      },
      {
        q: "When are the batches?",
        a: "Schedules depend on your exam date and current batches. Share your exam date when you enquire.",
      },
    ],
    whatsapp:
      "Hello Glanzeuro Lingo, I would like to know more about TCF preparation.",
    interest: "TCF Preparation",
    seo: {
      title: "TCF Preparation Online | TCF Canada | Glanzeuro Lingo",
      description:
        "Online TCF preparation covering listening, reading, writing and speaking modules, with exam-format practice, timed mock tests and personalised feedback.",
    },
  },
]

export const getExam = (slug: string) => exams.find((e) => e.slug === slug)

// ---------------------------------------------------------------------------
// Career services
// ---------------------------------------------------------------------------

export type CareerService = {
  slug: "resume-building" | "interview-preparation" | "placement-assistance"
  path: string
  title: string
  shortTitle: string
  icon: "resume" | "interview" | "placement"
  cardSummary: string
  cardBenefits: string[]
  cardCta: string
  pageCta: string
  overview: string[]
  whoFor: string[]
  sections: { title: string; bullets: string[] }[]
  note?: string
  faqs: Faq[]
  whatsapp: string
  interest: string
  seo: { title: string; description: string }
}

export const careerServices: CareerService[] = [
  {
    slug: "resume-building",
    path: "/career-services/resume-building",
    title: "Resume / CV Building",
    shortTitle: "Resume / CV",
    icon: "resume",
    cardSummary:
      "A clear, professional resume that presents your skills and experience well.",
    cardBenefits: [
      "Professional structure and formatting",
      "Profile summary and skills",
      "ATS-friendly formatting guidance",
    ],
    cardCta: "Enquire About Resume Building",
    pageCta: "Request Resume Support",
    overview: [
      "Your resume is often the first thing an employer sees. We help you structure it clearly, write a focused profile summary and present your skills and experience so the most relevant points stand out.",
      "We also guide you on formatting that applicant tracking systems (ATS) can read, so your resume reaches the people who make decisions.",
    ],
    whoFor: [
      "Students and recent graduates writing their first resume",
      "Professionals updating their resume for a new role",
      "Learners applying for roles that use their language skills",
    ],
    sections: [
      {
        title: "Structure and formatting",
        bullets: [
          "A clean, professional layout that is easy to scan",
          "Logical section order for your stage of career",
          "Consistent headings, dates and spacing",
        ],
      },
      {
        title: "Profile summary",
        bullets: [
          "A short, focused summary of who you are and what you offer",
          "Tailored to the type of role you are applying for",
        ],
      },
      {
        title: "Skills and experience",
        bullets: [
          "Presenting responsibilities as achievements",
          "Highlighting language skills and certifications",
          "Choosing the most relevant experience to show",
        ],
      },
      {
        title: "ATS-friendly guidance",
        bullets: [
          "Formatting that applicant tracking systems can read",
          "Using the right keywords from the job description",
        ],
      },
    ],
    // CONFIRM: whether cover letter support is offered, and whether an
    // anonymised sample resume can be published on this page.
    note: "Need a cover letter too? Ask us about it when you enquire.",
    faqs: [
      {
        q: "Will you write my resume for me?",
        a: "We work with you on structure, wording and formatting so the final resume reflects your real experience. Tell us what you need when you enquire.",
      },
      {
        q: "What is an ATS-friendly resume?",
        a: "Many employers use applicant tracking systems to sort applications. An ATS-friendly resume uses simple formatting and relevant keywords so the system can read it correctly.",
      },
    ],
    whatsapp: "Hello Glanzeuro Lingo, I would like help with my resume.",
    interest: "Resume / CV Building",
    seo: {
      title: "Resume and CV Building Support | Glanzeuro Lingo",
      description:
        "Professional resume and CV support: structure and formatting, profile summary, skills and experience presentation, and ATS-friendly formatting guidance.",
    },
  },
  {
    slug: "interview-preparation",
    path: "/career-services/interview-preparation",
    title: "Interview Preparation",
    shortTitle: "Interview",
    icon: "interview",
    cardSummary:
      "Practice interviews and feedback so you walk in prepared and confident.",
    cardBenefits: [
      "Mock interviews",
      "Common questions and answers",
      "Confidence and communication",
    ],
    cardCta: "Enquire About Interview Preparation",
    pageCta: "Enquire About Interview Preparation",
    overview: [
      "Good interviews come from practice. We help you prepare a clear self-introduction, work through common questions and rehearse in realistic practice interviews.",
      "After each practice session you get specific feedback on what you said and how you said it, so you know exactly what to improve.",
    ],
    whoFor: [
      "Students preparing for placement or campus interviews",
      "Professionals preparing for a job change",
      "Learners preparing for interviews in a new language",
    ],
    sections: [
      {
        title: "Common interview questions",
        bullets: [
          "Tell me about yourself, strengths and weaknesses, and why this role",
          "Structuring answers with clear examples",
        ],
      },
      {
        title: "Professional self-introduction",
        bullets: [
          "A confident, concise introduction you can adapt to any interview",
        ],
      },
      {
        title: "Practice interviews",
        bullets: [
          "Realistic mock interviews",
          "Practice answering follow-up questions",
        ],
      },
      {
        title: "Communication and feedback",
        bullets: [
          "Clarity, pace, tone and body language",
          "Specific feedback after each session",
          "Next steps for continued improvement",
        ],
      },
    ],
    faqs: [
      {
        q: "Can I practise for an interview in French or Dutch?",
        a: "Tell us the language and type of interview when you enquire and we will let you know how we can help.",
      },
      {
        q: "How many practice sessions will I need?",
        a: "It depends on your starting point and interview date. We will suggest a plan when you enquire.",
      },
    ],
    whatsapp:
      "Hello Glanzeuro Lingo, I would like to know more about interview preparation.",
    interest: "Interview Preparation",
    seo: {
      title: "Interview Preparation and Mock Interviews | Glanzeuro Lingo",
      description:
        "Prepare for interviews with common question practice, mock interviews, a professional self-introduction, communication coaching and personalised feedback.",
    },
  },
  {
    slug: "placement-assistance",
    path: "/career-services/placement-assistance",
    title: "Placement Assistance",
    shortTitle: "Placement",
    icon: "placement",
    cardSummary:
      "Career guidance and job-search support to help you take your next step.",
    cardBenefits: [
      "Job-search guidance",
      "Resume and interview support",
      "Career guidance",
    ],
    cardCta: "Explore Placement Assistance",
    pageCta: "Enquire About Placement Assistance",
    overview: [
      "Placement Assistance brings our career services together: guidance on where and how to search for roles, help with your resume and interview preparation, and advice on presenting your language skills to employers.",
      "It is support for your job search, not a promise of employment. The final hiring decision always rests with the employer.",
    ],
    whoFor: [
      "Learners who have completed or are completing a course with us",
      "Students and professionals looking for their next role",
    ],
    // CONFIRM: the exact scope, eligibility and terms of placement assistance.
    sections: [
      {
        title: "Job-search guidance",
        bullets: [
          "Where to look for roles that match your skills",
          "How to read job descriptions and tailor applications",
        ],
      },
      {
        title: "Resume and interview support",
        bullets: [
          "Resume review and improvement",
          "Interview practice and feedback",
        ],
      },
      {
        title: "Career guidance",
        bullets: [
          "Discussing your goals and options",
          "Presenting language skills and certifications to employers",
        ],
      },
    ],
    note: "Placement Assistance does not guarantee a job. Eligibility and terms are explained when you enquire.",
    faqs: [
      {
        q: "Do you guarantee a job?",
        a: "No. We provide guidance and support for your job search. Hiring decisions are made by employers.",
      },
      {
        q: "Who is eligible?",
        a: "Eligibility and terms are explained when you enquire, based on your course and goals.",
      },
    ],
    whatsapp:
      "Hello Glanzeuro Lingo, I would like to know more about placement assistance.",
    interest: "Placement Assistance",
    seo: {
      title: "Placement Assistance and Career Guidance | Glanzeuro Lingo",
      description:
        "Job-search guidance, resume and interview support and career guidance to help you take your next step. Placement assistance, not guaranteed employment.",
    },
  },
]

export const getCareerService = (slug: string) =>
  careerServices.find((c) => c.slug === slug)

// ---------------------------------------------------------------------------
// Why choose us, approach and study abroad
// ---------------------------------------------------------------------------

export const whyChoose = [
  {
    icon: "structured",
    title: "Structured Learning",
    text: "Clear levels, each building on the last.",
  },
  {
    icon: "practical",
    title: "Practical Communication",
    text: "Speaking practice in every class.",
  },
  {
    icon: "online",
    title: "Interactive Online Training",
    text: "Live classes you can join from anywhere.",
  },
  {
    icon: "personal",
    title: "Personalised Support",
    text: "One-to-one speaking practice and feedback.",
  },
  {
    icon: "flexible",
    title: "Flexible Learning Options",
    text: "Batch timings that fit around study and work.",
  },
  {
    icon: "career",
    title: "Career-Oriented Guidance",
    text: "Resume, interview and placement support.",
  },
] as const

export const journey = [
  {
    title: "Enquire",
    text: "Tell us your goal, the language or service you need and your preferred timing.",
  },
  {
    title: "Assess",
    text: "We understand your current level and suggest the right course or level to start.",
  },
  {
    title: "Learn",
    text: "Join live, interactive classes that build speaking, listening, reading and writing.",
  },
  {
    title: "Review progress",
    text: "Weekly tests, assignments and feedback show how far you have come and what is next.",
  },
]

export const studyAbroad = {
  // CONFIRM: the actual scope of study-abroad support offered.
  services: [
    {
      title: "Destination exploration",
      text: "Understand your options across study destinations, and how language requirements differ between them.",
    },
    {
      title: "Course and university shortlisting",
      text: "Guidance on shortlisting programmes and universities that fit your background, goals and budget.",
    },
    {
      title: "Language requirements",
      text: "Find out which language level or test your chosen programme asks for, and how to prepare for it with us.",
    },
    {
      title: "Application and documentation",
      text: "Support in organising your application and the documents it needs.",
    },
    {
      title: "Visa process information",
      text: "General information on how the student visa process works. Final requirements always come from the official authorities.",
    },
    {
      title: "Pre-departure guidance",
      text: "Practical preparation for moving abroad, from everyday language to settling in.",
    },
  ],
  faqs: [
    {
      q: "Which countries can you help with?",
      a: "Tell us your preferred destination when you enquire and we will tell you how we can help.",
    },
    {
      q: "Do you process visas?",
      a: "We share general information about the visa process. Visa decisions and official requirements come from the relevant embassy or authority, and we recommend checking their official guidance.",
    },
    {
      q: "Do I need to learn the local language?",
      a: "Many programmes are taught in English, but some require French, German or Dutch, and the local language makes everyday life much easier. We can help you understand the requirement and prepare.",
    },
  ] as Faq[],
}
