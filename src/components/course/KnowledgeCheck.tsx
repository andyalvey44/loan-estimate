import { useState } from "react";
import { CircleHelp, CircleCheckBig, CircleX } from "lucide-react";
import { cn } from "@/lib/utils";
import { Markdown } from "./Markdown";
import type { CheckOption } from "@/data/course/types";

// An interactive retrieval question (Gagné events #6–7: "elicit performance"
// and "provide feedback"). The act of answering before seeing the explanation
// is what fires the testing effect — the single biggest lever on retention.
export function KnowledgeCheck({
  question,
  options,
  explanation,
}: {
  question: string;
  options: CheckOption[];
  explanation: string;
}) {
  const [selected, setSelected] = useState<number | null>(null);
  const answered = selected !== null;
  const correctIndex = options.findIndex((o) => o.correct);
  const gotItRight = selected === correctIndex;

  return (
    <div className="my-6 rounded-lg border border-sky-500/30 bg-sky-500/5 p-5">
      <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-sky-300">
        <CircleHelp className="h-4 w-4" />
        Knowledge Check
      </div>

      <div className="mb-4 text-sm font-medium text-foreground [&_p]:mb-0">
        <Markdown>{question}</Markdown>
      </div>

      <div className="space-y-2">
        {options.map((opt, i) => {
          const isSelected = selected === i;
          return (
            <button
              key={i}
              type="button"
              disabled={answered}
              onClick={() => setSelected(i)}
              className={cn(
                "flex w-full items-start gap-3 rounded-md border px-3 py-2.5 text-left text-sm transition-colors",
                !answered &&
                  "border-border bg-background/40 hover:border-sky-500/40 hover:bg-sky-500/5",
                answered && opt.correct && "border-emerald-500/50 bg-emerald-500/10",
                answered &&
                  isSelected &&
                  !opt.correct &&
                  "border-red-500/50 bg-red-500/10",
                answered && !opt.correct && !isSelected && "border-border opacity-60"
              )}
            >
              <span className="mt-0.5 shrink-0">
                {answered && opt.correct ? (
                  <CircleCheckBig className="h-4 w-4 text-emerald-400" />
                ) : answered && isSelected && !opt.correct ? (
                  <CircleX className="h-4 w-4 text-red-400" />
                ) : (
                  <span className="inline-block h-4 w-4 rounded-full border border-muted-foreground/40" />
                )}
              </span>
              <span className="text-muted-foreground [&_p]:mb-0">
                <Markdown>{opt.text}</Markdown>
              </span>
            </button>
          );
        })}
      </div>

      {answered && (
        <div className="mt-4 rounded-md border border-border bg-background/40 p-3 text-sm">
          <div
            className={cn(
              "mb-1 font-semibold",
              gotItRight ? "text-emerald-300" : "text-red-300"
            )}
          >
            {gotItRight ? "Correct" : "Not quite"}
          </div>
          <div className="text-muted-foreground [&_p]:mb-0">
            <Markdown>{explanation}</Markdown>
          </div>
          <button
            type="button"
            onClick={() => setSelected(null)}
            className="mt-3 text-xs font-medium text-sky-300 hover:underline"
          >
            Try again
          </button>
        </div>
      )}
    </div>
  );
}
