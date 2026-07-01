import { useCallback, useEffect, useMemo, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { palette } from "./theme";
import { SlideView } from "./slides";
import { isReady, type Answers, type Slide } from "./types";

function gateHint(slide: Slide): string | null {
  switch (slide.kind) {
    case "survey":
      return "Answer both questions to continue";
    case "check":
      return "Select an answer to continue";
    case "exam":
      return "Submit the exam to continue";
    default:
      return null;
  }
}

export function SlideDeck({ slides }: { slides: Slide[] }) {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);
  const [answers, setAnswers] = useState<Answers>({});

  const total = slides.length;
  const slide = slides[index];
  const ready = isReady(slide, answers);
  const atFirst = index === 0;
  const atLast = index === total - 1;

  const setAnswer = useCallback((id: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [id]: value }));
  }, []);

  const go = useCallback(
    (delta: number) => {
      setIndex((i) => {
        const next = i + delta;
        if (next < 0 || next >= total) return i;
        setDir(delta);
        return next;
      });
    },
    [total]
  );

  const restart = useCallback(() => {
    setAnswers({});
    setDir(-1);
    setIndex(0);
  }, []);

  // Keyboard navigation.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement)?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA") return;
      if (e.key === "ArrowRight" || e.key === "Enter") {
        if (ready && !atLast) go(1);
      } else if (e.key === "ArrowLeft") {
        if (!atFirst) go(-1);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [ready, atFirst, atLast, go]);

  const progress = useMemo(
    () => (total > 1 ? (index / (total - 1)) * 100 : 0),
    [index, total]
  );

  const nextLabel = slide.kind === "title" ? "Begin course" : "Next";
  const hint = ready ? null : gateHint(slide);

  return (
    <div className="fixed inset-0 overflow-hidden" style={{ background: palette.ink }}>
      {/* progress bar */}
      <div className="absolute inset-x-0 top-0 z-20 h-1.5" style={{ background: "#000" }}>
        <div
          className="h-full transition-[width] duration-500 ease-out"
          style={{ width: `${progress}%`, background: palette.accent }}
        />
      </div>

      {/* slide */}
      <div
        key={index}
        className={cn(
          "h-full",
          dir >= 0
            ? "animate-in fade-in-0 slide-in-from-right-8 duration-300"
            : "animate-in fade-in-0 slide-in-from-left-8 duration-300"
        )}
      >
        <SlideView slide={slide} answers={answers} setAnswer={setAnswer} />
      </div>

      {/* back */}
      {!atFirst ? (
        <button
          type="button"
          onClick={() => go(-1)}
          className="absolute bottom-6 left-6 z-20 inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold shadow-sm transition-transform hover:-translate-y-0.5"
          style={{ background: palette.paper, color: palette.ink }}
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </button>
      ) : null}

      {/* right side: hint + next / restart */}
      <div className="absolute bottom-6 right-6 z-20 flex items-center gap-4">
        {hint ? (
          <span className="hidden text-xs sm:inline" style={{ color: "#8b9bb0" }}>
            {hint}
          </span>
        ) : null}
        {atLast ? (
          <button
            type="button"
            onClick={restart}
            className="inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold shadow-sm transition-transform hover:-translate-y-0.5"
            style={{ background: palette.paper, color: palette.ink }}
          >
            Start over
          </button>
        ) : (
          <button
            type="button"
            onClick={() => go(1)}
            disabled={!ready}
            className="inline-flex items-center gap-2 rounded-lg px-6 py-2.5 text-sm font-semibold shadow-sm transition-transform enabled:hover:-translate-y-0.5"
            style={{
              background: palette.accent,
              color: palette.paper,
              opacity: ready ? 1 : 0.4,
              cursor: ready ? "pointer" : "not-allowed",
            }}
          >
            {nextLabel}
            <ArrowRight className="h-4 w-4" />
          </button>
        )}
      </div>
    </div>
  );
}
