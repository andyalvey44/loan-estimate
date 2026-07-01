// Discriminated-union model for the slide deck. Every slide carries a stable
// `id` (used to key answers + transitions) and a `kind` that selects a renderer.

export type Choice = { key: string; text: string };

export type Tone = "paper" | "ink" | "accent";

interface Base {
  id: string;
}

export interface TitleSlide extends Base {
  kind: "title";
  eyebrow: string;
  title: string;
  subtitle: string;
  author?: string;
}

export interface SurveyQuestion {
  id: string;
  prompt: string;
  options: string[];
}
export interface SurveySlide extends Base {
  kind: "survey";
  eyebrow: string;
  label: string;
  intro: string;
  questions: SurveyQuestion[];
}

export interface ModuleIntroSlide extends Base {
  kind: "moduleIntro";
  eyebrow: string;
  module: string;
  title: string;
  minutes: number;
  objectives: string[];
  footnote?: string;
}

export interface Bullet {
  title?: string;
  text: string;
}
export interface ContentSlide extends Base {
  kind: "content";
  eyebrow: string;
  label: string;
  lead?: string;
  bullets?: Bullet[];
  note?: string;
}

export interface ComparisonColumn {
  title: string;
  tone: Tone;
  items: string[];
}
export interface ComparisonSlide extends Base {
  kind: "comparison";
  eyebrow: string;
  label: string;
  lead?: string;
  left: ComparisonColumn;
  right: ComparisonColumn;
  note?: string;
}

export interface LadderStep {
  label: string;
  value: string;
  sub?: string;
}
export interface LadderSlide extends Base {
  kind: "ladder";
  eyebrow: string;
  label: string;
  lead?: string;
  steps: LadderStep[];
  note?: string;
}

export interface KnowledgeCheckSlide extends Base {
  kind: "check";
  eyebrow: string;
  question: string;
  choices: Choice[];
  answer: string;
  explanation: string;
}

export interface ExamQuestion {
  id: string;
  prompt: string;
  choices: Choice[];
  answer: string;
}
export interface ExamSlide extends Base {
  kind: "exam";
  eyebrow: string;
  title: string;
  intro: string;
  passScore: number;
  questions: ExamQuestion[];
}

export interface CompletionSlide extends Base {
  kind: "completion";
  eyebrow: string;
  title: string;
  subtitle: string;
  lines: string[];
  author?: string;
}

export type Slide =
  | TitleSlide
  | SurveySlide
  | ModuleIntroSlide
  | ContentSlide
  | ComparisonSlide
  | LadderSlide
  | KnowledgeCheckSlide
  | ExamSlide
  | CompletionSlide;

/** Map of questionId -> selected option key. */
export type Answers = Record<string, string>;

/** Whether the deck may advance past this slide (interactive gates). */
export function isReady(slide: Slide, answers: Answers): boolean {
  switch (slide.kind) {
    case "survey":
      return slide.questions.every((q) => Boolean(answers[q.id]));
    case "check":
      return Boolean(answers[slide.id]);
    case "exam":
      return answers[`${slide.id}::submitted`] === "1";
    default:
      return true;
  }
}
