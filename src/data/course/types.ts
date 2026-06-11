// Content model for the "How to Read the Loan Estimate" course.
// Content is authored as ordered blocks. Most prose is plain Markdown
// (so tables, lists, and worked-calculation code blocks render cleanly);
// the pedagogical 101/201/301 layers and the highlighted callouts get
// their own block kinds so they can be styled distinctly.

export type CalloutVariant =
  | "pro-tip"
  | "red-flag"
  | "best-practice"
  | "real-world"
  | "example"
  | "note";

export type LayerLevel = "101" | "201" | "301";
export type LayerTag = "WHAT" | "WHY" | "HOW";

/** One choice in a knowledge-check question. */
export interface CheckOption {
  /** The answer text (Markdown allowed). */
  text: string;
  correct: boolean;
}

export type Block =
  | { kind: "md"; md: string }
  | { kind: "layer"; level: LayerLevel; tag: LayerTag; md?: string }
  | { kind: "callout"; variant: CalloutVariant; title?: string; md: string }
  // An interactive retrieval question. Renders selectable options and, once
  // answered, reveals which was correct plus an explanation (the feedback loop).
  | {
      kind: "check";
      question: string;
      options: CheckOption[];
      /** Shown after the learner answers — explain *why*, don't just grade. */
      explanation: string;
    };

export interface Topic {
  id: string;
  title: string;
  blocks: Block[];
}

export interface Section {
  id: string;
  /** Short label shown in the sidebar nav. */
  navLabel: string;
  /** Small overline, e.g. "Introduction" or "Section 1". */
  eyebrow: string;
  title: string;
  /** Optional Markdown lead paragraph shown under the section title. */
  lead?: string;
  /** Estimated time to complete this module, in minutes. */
  estMinutes?: number;
  /** Measurable learning outcomes, shown in a box at the top of the section. */
  objectives?: string[];
  /** Key-takeaway recap (Markdown lines), shown at the end of the section. */
  keyTakeaways?: string[];
  topics: Topic[];
}

/** A single glossary entry. */
export interface GlossaryTerm {
  term: string;
  /** Definition (Markdown allowed). */
  definition: string;
}

/** Orientation metadata used to build the "Start Here" panel. */
export interface CourseMeta {
  audience: string;
  prerequisites: string;
  /** Markdown lines describing how to use the course. */
  howToUse: string[];
  /** High-level outcomes for the whole course. */
  outcomes: string[];
}

export interface Course {
  title: string;
  subtitle: string;
  meta?: CourseMeta;
  sections: Section[];
  glossary?: GlossaryTerm[];
}
