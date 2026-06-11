import { Target } from "lucide-react";
import { Markdown } from "./Markdown";

// Learning objectives box, rendered at the top of a module (Gagné event #2:
// "inform learners of objectives"). Frames what the learner should be able to
// do and gives the module's assessments something concrete to measure against.
export function Objectives({ items }: { items: string[] }) {
  return (
    <div className="mb-10 rounded-lg border border-primary/30 bg-primary/5 p-5">
      <div className="mb-2 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-primary">
        <Target className="h-4 w-4" />
        Learning Objectives
      </div>
      <p className="mb-3 text-sm text-muted-foreground">
        By the end of this module you will be able to:
      </p>
      <ul className="ml-5 list-disc space-y-1.5 marker:text-primary/70">
        {items.map((item, i) => (
          <li
            key={i}
            className="pl-1 text-sm leading-relaxed text-muted-foreground [&_p]:mb-0"
          >
            <Markdown>{item}</Markdown>
          </li>
        ))}
      </ul>
    </div>
  );
}
