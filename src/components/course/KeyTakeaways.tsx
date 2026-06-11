import { ListChecks } from "lucide-react";
import { Markdown } from "./Markdown";

// End-of-module recap (Gagné event #9: "enhance retention and transfer").
// Closes the loop on the objectives and doubles as a quick review tool.
export function KeyTakeaways({ items }: { items: string[] }) {
  return (
    <div className="mt-12 rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-5">
      <div className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-emerald-300">
        <ListChecks className="h-4 w-4" />
        Key Takeaways
      </div>
      <ul className="ml-5 list-disc space-y-1.5 marker:text-emerald-400/70">
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
