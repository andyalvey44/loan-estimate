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

export type Block =
  | { kind: "md"; md: string }
  | { kind: "layer"; level: LayerLevel; tag: LayerTag; md?: string }
  | { kind: "callout"; variant: CalloutVariant; title?: string; md: string };

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
  topics: Topic[];
}

export interface Course {
  title: string;
  subtitle: string;
  sections: Section[];
}
