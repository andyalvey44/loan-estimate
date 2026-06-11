import { BookOpen } from "lucide-react";
import { Markdown } from "./Markdown";
import type { GlossaryTerm } from "@/data/course/types";

// Alphabetized reference glossary. Essential for a jargon-dense domain — a
// course full of acronyms (LTV, TRID, PMI, escrow) without one is a known
// retention and accessibility failure.
export function Glossary({ terms }: { terms: GlossaryTerm[] }) {
  const sorted = [...terms].sort((a, b) => a.term.localeCompare(b.term));
  return (
    <section id="glossary" className="scroll-mt-20">
      <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary">
        <BookOpen className="h-4 w-4" />
        Reference
      </div>
      <h2 className="mb-4 text-3xl font-bold">Glossary</h2>
      <dl className="divide-y divide-border overflow-hidden rounded-lg border border-border">
        {sorted.map((t) => (
          <div
            key={t.term}
            className="grid grid-cols-1 gap-1 p-4 sm:grid-cols-[180px_1fr] sm:gap-4"
          >
            <dt className="font-semibold text-foreground">{t.term}</dt>
            <dd className="text-sm text-muted-foreground [&_p]:mb-0">
              <Markdown>{t.definition}</Markdown>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
