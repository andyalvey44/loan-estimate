import { cn } from "@/lib/utils";
import type { LayerLevel, LayerTag } from "@/data/course/types";

const LEVEL_STYLES: Record<LayerLevel, string> = {
  "101": "bg-sky-500/15 text-sky-300 ring-1 ring-inset ring-sky-500/30",
  "201": "bg-violet-500/15 text-violet-300 ring-1 ring-inset ring-violet-500/30",
  "301": "bg-emerald-500/15 text-emerald-300 ring-1 ring-inset ring-emerald-500/30",
};

const TAG_CAPTION: Record<LayerTag, string> = {
  WHAT: "What it is",
  WHY: "Why it exists",
  HOW: "How to use it",
};

// A pedagogical "layer" header (the 101 / 201 / 301 WHAT/WHY/HOW progression
// the course is built around). Renders a labelled badge row; the content that
// belongs to the layer follows as sibling blocks.
export function Layer({
  level,
  tag,
  children,
}: {
  level: LayerLevel;
  tag: LayerTag;
  children?: React.ReactNode;
}) {
  return (
    <div className="mt-6 mb-3 first:mt-0">
      <div className="flex items-center gap-2.5">
        <span
          className={cn(
            "inline-flex items-center rounded-full px-2 py-0.5 text-xs font-bold tabular-nums",
            LEVEL_STYLES[level]
          )}
        >
          {level}
        </span>
        <span className="text-sm font-semibold uppercase tracking-wide text-foreground">
          {tag}
        </span>
        <span className="text-xs text-muted-foreground">{TAG_CAPTION[tag]}</span>
      </div>
      {children ? <div className="mt-2">{children}</div> : null}
    </div>
  );
}
