import type { ComponentType } from "react";
import {
  Lightbulb,
  TriangleAlert,
  CircleCheckBig,
  Globe,
  FileText,
  Info,
} from "lucide-react";
import { cn } from "@/lib/utils";
import type { CalloutVariant } from "@/data/course/types";

type VariantConfig = {
  label: string;
  icon: ComponentType<{ className?: string }>;
  box: string;
  accent: string;
};

const VARIANTS: Record<CalloutVariant, VariantConfig> = {
  "pro-tip": {
    label: "Pro Tip",
    icon: Lightbulb,
    box: "border-sky-500/30 bg-sky-500/10",
    accent: "text-sky-400",
  },
  "red-flag": {
    label: "Red Flag",
    icon: TriangleAlert,
    box: "border-red-500/30 bg-red-500/10",
    accent: "text-red-400",
  },
  "best-practice": {
    label: "Best Practice",
    icon: CircleCheckBig,
    box: "border-emerald-500/30 bg-emerald-500/10",
    accent: "text-emerald-400",
  },
  "real-world": {
    label: "Real-World Example",
    icon: Globe,
    box: "border-violet-500/30 bg-violet-500/10",
    accent: "text-violet-300",
  },
  example: {
    label: "Example",
    icon: FileText,
    box: "border-border bg-muted/40",
    accent: "text-muted-foreground",
  },
  note: {
    label: "Note",
    icon: Info,
    box: "border-amber-500/30 bg-amber-500/10",
    accent: "text-amber-300",
  },
};

export function Callout({
  variant,
  title,
  children,
}: {
  variant: CalloutVariant;
  title?: string;
  children: React.ReactNode;
}) {
  const cfg = VARIANTS[variant];
  const Icon = cfg.icon;
  return (
    <div className={cn("my-4 rounded-lg border p-4", cfg.box)}>
      <div className="mb-2 flex items-center gap-2">
        <Icon className={cn("h-4 w-4 shrink-0", cfg.accent)} />
        <span
          className={cn(
            "text-xs font-semibold uppercase tracking-wide",
            cfg.accent
          )}
        >
          {title ?? cfg.label}
        </span>
      </div>
      <div className="text-sm">{children}</div>
    </div>
  );
}
