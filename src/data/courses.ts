export type Language = "french" | "dutch"
export type Level = "A1" | "A2" | "B1" | "B2"

export interface CourseSection {
  title: string
  bullets: string[]
}

export interface Course {
  language: Language
  level: Level
  title: string
  descriptor: string
  /** Optional standout line shown in the hero (falls back to default copy) */
  special?: string
  intro: string
  sections: CourseSection[]
  assessment: string
  certificate: string
}

const ASSESSMENT =
  "Grammar & vocabulary, speaking, listening, reading, writing and practical communication activities."
const CERTIFICATE =
  "Issued upon successful completion of the prescribed training requirements and assessment."

export const courses: Course[] = [
  // ---------------- FRENCH ----------------
  {
    language: "french",
    level: "A1",
    title: "French A1 – Beginner",
    descriptor: "Beginner",
    intro:
      "Beginner-level French designed to build a strong foundation in basic communication and everyday French.",
    sections: [
      {
        title: "Speaking Skills",
        bullets: [
          "Greetings and introductions.",
          "Introducing yourself and others.",
          "Asking and answering simple questions.",
          "Talking about family, hobbies and daily routine.",
          "Common everyday communication.",
        ],
      },
      {
        title: "Listening Skills",
        bullets: [
          "Understanding basic greetings and everyday conversations.",
          "Following simple instructions spoken clearly and slowly.",
          "Recognising commonly used words and expressions.",
        ],
      },
      {
        title: "Reading Skills",
        bullets: [
          "Reading short conversations and simple texts.",
          "Understanding signs, notices, menus and basic emails.",
          "Understanding personal information and everyday vocabulary.",
        ],
      },
      {
        title: "Writing Skills",
        bullets: [
          "Completing simple forms.",
          "Writing short messages and emails.",
          "Introducing yourself in writing.",
          "Describing family and daily routine using simple sentences.",
        ],
      },
      {
        title: "Grammar & Vocabulary",
        bullets: [
          "Alphabet and pronunciation.",
          "Articles and gender.",
          "Subject pronouns.",
          "Present tense of common verbs.",
          "Numbers, dates and time.",
          "Question forms and negation.",
          "Basic sentence structure.",
          "Common adjectives and prepositions.",
          "Greetings, family, school, food, shopping, travel, directions, daily routine and nationalities.",
        ],
      },
    ],
    assessment: ASSESSMENT,
    certificate: CERTIFICATE,
  },
  {
    language: "french",
    level: "A2",
    title: "French A2 – Elementary",
    descriptor: "Elementary",
    intro:
      "Elementary-level French designed to develop practical communication skills beyond the beginner level.",
    sections: [
      {
        title: "Speaking Skills",
        bullets: [
          "Communicating in familiar everyday situations.",
          "Talking about personal experiences and daily activities.",
          "Participating in simple conversations.",
          "Improving pronunciation and speaking confidence.",
        ],
      },
      {
        title: "Listening Skills",
        bullets: [
          "Understanding everyday conversations.",
          "Identifying important information in spoken French.",
          "Following instructions and familiar announcements.",
        ],
      },
      {
        title: "Reading Skills",
        bullets: [
          "Understanding short everyday texts.",
          "Reading messages, notices, emails and practical information.",
          "Identifying key information.",
        ],
      },
      {
        title: "Writing Skills",
        bullets: [
          "Writing simple messages and emails.",
          "Describing experiences and everyday activities.",
          "Writing short structured texts.",
          "Communicating personal information clearly.",
        ],
      },
      {
        title: "Grammar & Vocabulary",
        bullets: [
          "Development of sentence structures.",
          "Everyday verbs and verb forms.",
          "Common grammatical structures.",
          "Practical vocabulary for daily life, travel, shopping, work and social situations.",
        ],
      },
    ],
    assessment: ASSESSMENT,
    certificate: CERTIFICATE,
  },
  {
    language: "french",
    level: "B1",
    title: "French B1 – Intermediate",
    descriptor: "Intermediate",
    intro:
      "Intermediate French focused on independent and confident communication in everyday, social and professional situations.",
    sections: [
      {
        title: "Speaking Skills",
        bullets: [
          "Communicating independently in familiar situations.",
          "Expressing opinions, ideas and experiences.",
          "Participating in conversations and discussions.",
          "Describing events and situations.",
          "Developing fluency and speaking confidence.",
        ],
      },
      {
        title: "Listening Skills",
        bullets: [
          "Understanding main points of clear everyday speech.",
          "Following conversations on familiar topics.",
          "Understanding important information in longer spoken content.",
        ],
      },
      {
        title: "Reading Skills",
        bullets: [
          "Understanding main ideas of everyday and practical texts.",
          "Reading emails, articles and informational content.",
          "Identifying important details and opinions.",
        ],
      },
      {
        title: "Writing Skills",
        bullets: [
          "Writing structured messages and emails.",
          "Describing experiences and events.",
          "Expressing opinions and giving explanations.",
          "Developing organised written communication.",
        ],
      },
      {
        title: "Grammar & Vocabulary",
        bullets: [
          "Intermediate grammar structures.",
          "Expanded vocabulary.",
          "Verb forms and tense usage.",
          "Sentence formation.",
          "Connectors and expressions.",
          "Everyday, social and professional vocabulary.",
        ],
      },
      {
        title: "Practical Communication",
        bullets: [
          "Discussions.",
          "Role plays.",
          "Real-life situations.",
          "Speaking activities.",
          "Listening and comprehension exercises.",
        ],
      },
    ],
    assessment: ASSESSMENT,
    certificate: CERTIFICATE,
  },
  {
    language: "french",
    level: "B2",
    title: "French B2 – Upper Intermediate",
    descriptor: "Upper Intermediate",
    intro:
      "Upper-intermediate French focused on fluent, detailed and confident communication for real-world, academic and professional situations.",
    sections: [
      {
        title: "Speaking Skills",
        bullets: [
          "Communicating with greater fluency.",
          "Expressing and explaining opinions.",
          "Participating in detailed discussions.",
          "Presenting ideas clearly.",
          "Handling a wider range of social and professional situations.",
        ],
      },
      {
        title: "Listening Skills",
        bullets: [
          "Understanding longer and more detailed spoken content.",
          "Following conversations and discussions.",
          "Identifying main ideas and supporting information.",
          "Understanding practical and professional contexts.",
        ],
      },
      {
        title: "Reading Skills",
        bullets: [
          "Understanding more complex texts.",
          "Identifying main ideas, details and opinions.",
          "Reading authentic and semi-authentic materials.",
          "Interpreting information from different written content.",
        ],
      },
      {
        title: "Writing Skills",
        bullets: [
          "Writing structured and detailed texts.",
          "Expressing opinions and arguments.",
          "Writing professional and formal communication.",
          "Organising ideas clearly and logically.",
        ],
      },
      {
        title: "Grammar & Vocabulary",
        bullets: [
          "Upper-intermediate grammar structures.",
          "Expanded vocabulary and expressions.",
          "Complex sentence structures.",
          "Connectors and discourse expressions.",
          "Professional and real-world vocabulary.",
        ],
      },
      {
        title: "Practical Communication",
        bullets: [
          "Discussions and debates.",
          "Presentations.",
          "Role plays.",
          "Professional communication.",
          "Real-life communication activities.",
        ],
      },
    ],
    assessment: ASSESSMENT,
    certificate: CERTIFICATE,
  },

  // ---------------- DUTCH ----------------
  {
    language: "dutch",
    level: "A1",
    title: "Dutch A1 – Beginner",
    descriptor: "Beginner",
    intro:
      "Beginner-level Dutch focused on building basic vocabulary, grammar and everyday communication skills.",
    sections: [
      {
        title: "Speaking Skills",
        bullets: [
          "Greetings and introductions.",
          "Basic personal information.",
          "Simple questions and answers.",
          "Everyday conversations.",
          "Basic practical communication.",
        ],
      },
      {
        title: "Listening Skills",
        bullets: [
          "Understanding familiar words and expressions.",
          "Following simple instructions.",
          "Understanding basic everyday conversations.",
        ],
      },
      {
        title: "Reading Skills",
        bullets: [
          "Reading simple words, sentences and short texts.",
          "Understanding everyday information.",
          "Reading basic notices and messages.",
        ],
      },
      {
        title: "Writing Skills",
        bullets: [
          "Writing simple sentences.",
          "Completing basic personal information.",
          "Writing short messages.",
          "Building simple written communication.",
        ],
      },
      {
        title: "Grammar & Vocabulary",
        bullets: [
          "Basic sentence structure.",
          "Common verbs.",
          "Pronouns and articles.",
          "Everyday vocabulary.",
          "Numbers, time and dates.",
          "Family, food, shopping, transport and daily activities.",
        ],
      },
    ],
    assessment: ASSESSMENT,
    certificate: CERTIFICATE,
  },
  {
    language: "dutch",
    level: "A2",
    title: "Dutch A2 – Elementary",
    descriptor: "Elementary",
    intro:
      "Elementary Dutch designed to develop stronger speaking, listening, reading and writing skills through practical communication.",
    special: "Includes Dutch A2 Inburgering Exam Preparation, where applicable.",
    sections: [
      {
        title: "Speaking Skills",
        bullets: [
          "Everyday conversations.",
          "Talking about familiar situations.",
          "Making appointments and requests.",
          "Communicating about work, family and daily activities.",
          "Improving confidence and pronunciation.",
        ],
      },
      {
        title: "Listening Skills",
        bullets: [
          "Understanding everyday conversations.",
          "Identifying important information.",
          "Following spoken instructions.",
          "Understanding familiar announcements and situations.",
        ],
      },
      {
        title: "Reading Skills",
        bullets: [
          "Understanding practical everyday texts.",
          "Reading messages, notices and short texts.",
          "Finding important information.",
          "Understanding familiar written communication.",
        ],
      },
      {
        title: "Writing Skills",
        bullets: [
          "Writing messages and emails.",
          "Describing everyday activities.",
          "Giving personal information.",
          "Writing simple structured texts.",
        ],
      },
      {
        title: "Grammar & Vocabulary",
        bullets: [
          "A2-level grammar structures.",
          "Verb forms.",
          "Sentence construction.",
          "Everyday vocabulary.",
          "Work and daily life.",
          "Travel and transport.",
          "Shopping.",
          "Appointments.",
          "Family and social situations.",
        ],
      },
      {
        title: "Practical Communication",
        bullets: [
          "Real-life conversations.",
          "Speaking practice.",
          "Listening activities.",
          "Reading exercises.",
          "Writing activities.",
          "Assignments.",
          "Mock assessments.",
          "Personal guidance.",
        ],
      },
      {
        title: "Additional Preparation",
        bullets: ["Dutch A2 Inburgering Exam Preparation, where applicable."],
      },
    ],
    assessment: ASSESSMENT,
    certificate: CERTIFICATE,
  },
  {
    language: "dutch",
    level: "B1",
    title: "Dutch B1 – Intermediate",
    descriptor: "Intermediate",
    intro:
      "Intermediate-level Dutch focused on developing independent communication and greater confidence in everyday, social and work-related situations.",
    sections: [
      {
        title: "Speaking Skills",
        bullets: [
          "Participating in familiar conversations with greater independence.",
          "Describing experiences, plans and situations.",
          "Expressing opinions and giving simple explanations.",
          "Handling common social and workplace conversations.",
          "Developing fluency and pronunciation.",
        ],
      },
      {
        title: "Listening Skills",
        bullets: [
          "Understanding the main points of clear standard Dutch on familiar topics.",
          "Following everyday conversations and instructions.",
          "Identifying important details in spoken information.",
          "Understanding common workplace and social situations.",
        ],
      },
      {
        title: "Reading Skills",
        bullets: [
          "Understanding the main ideas of everyday texts.",
          "Reading emails, messages, notices and practical information.",
          "Finding specific details.",
          "Understanding texts related to daily life, work and social situations.",
        ],
      },
      {
        title: "Writing Skills",
        bullets: [
          "Writing clear messages and emails.",
          "Describing experiences, plans and events.",
          "Giving opinions and explanations.",
          "Producing structured everyday and workplace communication.",
        ],
      },
      {
        title: "Grammar & Vocabulary",
        bullets: [
          "Intermediate sentence structures.",
          "Verb forms and tense usage.",
          "Word order and connectors.",
          "Expanded everyday and workplace vocabulary.",
          "Common expressions and functional language.",
        ],
      },
      {
        title: "Practical Communication",
        bullets: [
          "Role plays.",
          "Discussions.",
          "Appointments and requests.",
          "Workplace situations.",
          "Real-life communication tasks.",
        ],
      },
    ],
    assessment: ASSESSMENT,
    certificate: CERTIFICATE,
  },
  {
    language: "dutch",
    level: "B2",
    title: "Dutch B2 – Upper Intermediate",
    descriptor: "Upper Intermediate",
    intro:
      "Upper-intermediate Dutch focused on more fluent, detailed and confident communication in social, academic and professional contexts.",
    sections: [
      {
        title: "Speaking Skills",
        bullets: [
          "Communicating fluently on a wider range of topics.",
          "Expressing and supporting opinions.",
          "Participating in discussions and presentations.",
          "Explaining ideas, experiences and viewpoints in detail.",
          "Handling more complex social and professional situations.",
        ],
      },
      {
        title: "Listening Skills",
        bullets: [
          "Understanding extended speech and discussions on familiar and professional topics.",
          "Following detailed explanations and conversations.",
          "Identifying main ideas, supporting details and viewpoints.",
          "Understanding a broader range of spoken Dutch in practical contexts.",
        ],
      },
      {
        title: "Reading Skills",
        bullets: [
          "Understanding more complex written texts.",
          "Identifying main ideas, arguments and relevant details.",
          "Reading articles, professional texts and detailed information.",
          "Interpreting information and viewpoints.",
        ],
      },
      {
        title: "Writing Skills",
        bullets: [
          "Writing clear, detailed and structured texts.",
          "Writing formal and professional emails.",
          "Expressing and supporting opinions.",
          "Explaining ideas and arguments logically.",
          "Adapting written communication to different situations.",
        ],
      },
      {
        title: "Grammar & Vocabulary",
        bullets: [
          "Upper-intermediate grammar structures.",
          "Complex sentence construction.",
          "Connectors and discourse expressions.",
          "Expanded vocabulary and idiomatic expressions.",
          "Professional, academic and social vocabulary.",
        ],
      },
      {
        title: "Practical Communication",
        bullets: [
          "Discussions and debates.",
          "Presentations.",
          "Role plays.",
          "Professional communication.",
          "Real-life problem-solving and communication tasks.",
        ],
      },
    ],
    assessment: ASSESSMENT,
    certificate: CERTIFICATE,
  },
]

export function getCourse(language: Language, level: string): Course | undefined {
  return courses.find(
    (c) => c.language === language && c.level.toLowerCase() === level.toLowerCase()
  )
}