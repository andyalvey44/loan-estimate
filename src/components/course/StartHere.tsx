import { Compass, Clock } from "lucide-react";
import { Markdown } from "./Markdown";
import type { CourseMeta } from "@/data/course/types";

// Course orientation / syllabus panel (Gagné events #1–2: gain attention and
// set expectations). Adult learners need a map and a relevance hook before
// they'll invest — audience, prerequisites, outcomes, and how to use it.
export function StartHere({
  meta,
  totalMinutes,
  sectionCount,
}: {
  meta: CourseMeta;
  totalMinutes: number;
  sectionCount: number;
}) {
  return (
    <section id="start-here" className="scroll-mt-20">
      <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary">
        <Compass className="h-4 w-4" />
        Start Here
      </div>
      <h2 className="mb-4 text-3xl font-bold">About This Course</h2>

      <div className="mb-8">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card/50 px-3 py-1 text-sm text-muted-foreground">
          <Clock className="h-3.5 w-3.5" />~{totalMinutes} min · {sectionCount} modules
        </span>
      </div>

      <div className="space-y-7">
        <div>
          <h3 className="mb-1.5 text-sm font-semibold uppercase tracking-wide text-foreground">
            Who it's for
          </h3>
          <div className="text-muted-foreground [&_p]:mb-0">
            <Markdown>{meta.audience}</Markdown>
          </div>
        </div>

        <div>
          <h3 className="mb-1.5 text-sm font-semibold uppercase tracking-wide text-foreground">
            Prerequisites
          </h3>
          <div className="text-muted-foreground [&_p]:mb-0">
            <Markdown>{meta.prerequisites}</Markdown>
          </div>
        </div>

        <div>
          <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-foreground">
            What you'll be able to do
          </h3>
          <Markdown>{meta.outcomes.map((o) => `- ${o}`).join("\n")}</Markdown>
        </div>

        <div>
          <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-foreground">
            How to use this course
          </h3>
          <Markdown>{meta.howToUse.join("\n")}</Markdown>
        </div>
      </div>
    </section>
  );
}
