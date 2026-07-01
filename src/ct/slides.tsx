import { Check, X, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import { palette } from "./theme";
import type {
  Answers,
  Slide,
  TitleSlide,
  SurveySlide,
  ModuleIntroSlide,
  ContentSlide,
  ComparisonSlide,
  ComparisonColumn,
  LadderSlide,
  KnowledgeCheckSlide,
  ExamSlide,
  CompletionSlide,
} from "./types";

interface RenderProps<T extends Slide> {
  slide: T;
  answers: Answers;
  setAnswer: (id: string, value: string) => void;
}

const EYEBROW = "text-xs font-semibold uppercase tracking-[0.2em]";

function EyebrowRow({
  left,
  right,
  onPaper,
}: {
  left: string;
  right: string;
  onPaper: boolean;
}) {
  return (
    <div className="flex items-center justify-between">
      <span className={EYEBROW} style={{ color: onPaper ? "#7c8a99" : "#6b8bad" }}>
        {left}
      </span>
      <span className={EYEBROW} style={{ color: palette.accent }}>
        {right}
      </span>
    </div>
  );
}

/* ------------------------------------------------------------------ title */

function Title({ slide }: RenderProps<TitleSlide>) {
  return (
    <div
      className="relative flex h-full flex-col items-center justify-center px-[7vw] text-center"
      style={{ background: palette.ink, color: palette.paper }}
    >
      {/* Decorative demo masthead, dropped down from the top */}
      <div className="pointer-events-none absolute inset-x-0 top-14 flex items-center justify-center gap-4">
        <span className="h-px w-10 bg-gradient-to-r from-transparent to-white/50 sm:w-14" />
        <span className="pl-[0.45em] text-[12px] font-light uppercase tracking-[0.45em] text-white">
          Courseware Design Demo
        </span>
        <span className="h-px w-10 bg-gradient-to-l from-transparent to-white/50 sm:w-14" />
      </div>
      <img
        src="/Seal_of_Connecticut.svg"
        alt="State of Connecticut seal"
        className="mb-8 h-28 w-auto [filter:drop-shadow(0_6px_20px_rgba(0,0,0,0.45))]"
      />
      <div className={cn(EYEBROW, "mb-6")} style={{ color: palette.accentSoft }}>
        {slide.eyebrow}
      </div>
      <h1 className="max-w-4xl text-5xl font-bold tracking-tight md:text-6xl">
        {slide.title}
      </h1>
      <p className="mt-5 text-lg" style={{ color: "#c3cfdd" }}>
        {slide.subtitle}
      </p>
      <div className="my-8 h-px w-40" style={{ background: "#33465c" }} />
      {slide.author ? (
        <p className="text-base" style={{ color: "#8b9bb0" }}>
          {slide.author}
        </p>
      ) : null}
    </div>
  );
}

/* ----------------------------------------------------------------- survey */

function Survey({ slide, answers, setAnswer }: RenderProps<SurveySlide>) {
  return (
    <div
      className="h-full overflow-y-auto px-[7vw] pt-[6vh] pb-28"
      style={{ background: palette.paper, color: palette.ink }}
    >
      <EyebrowRow left={slide.eyebrow} right={slide.label} onPaper />
      <p className="mt-8 max-w-xl text-lg leading-relaxed">{slide.intro}</p>
      <div className="mt-10 max-w-2xl space-y-10">
        {slide.questions.map((q, qi) => (
          <div key={q.id}>
            <h3 className="mb-4 text-lg font-bold">
              {qi + 1}. {q.prompt}
            </h3>
            <div className="space-y-3">
              {q.options.map((opt) => {
                const selected = answers[q.id] === opt;
                return (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => setAnswer(q.id, opt)}
                    className="block w-full rounded-lg border-2 px-5 py-3 text-left text-sm transition-colors"
                    style={{
                      borderColor: selected ? palette.accent : "#1c2a26",
                      background: selected ? palette.accent : "transparent",
                      color: selected ? palette.paper : palette.ink,
                    }}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------ moduleIntro */

function ModuleIntro({ slide }: RenderProps<ModuleIntroSlide>) {
  return (
    <div className="relative h-full" style={{ background: palette.ink, color: palette.paper }}>
      {/* teal accent band on the right */}
      <div
        className="absolute inset-y-0 right-0 hidden w-[34%] md:block"
        style={{ background: palette.accent }}
      />
      <div className="relative h-full overflow-y-auto px-[7vw] py-[7vh]">
        <div className={EYEBROW} style={{ color: palette.accentSoft }}>
          {slide.eyebrow}
        </div>
        <div className={cn(EYEBROW, "mt-2")} style={{ color: "#6b8bad" }}>
          {slide.module}
        </div>
        <h1 className="mt-6 max-w-2xl text-4xl font-bold tracking-tight md:text-5xl">
          {slide.title}
        </h1>
        <div className="my-6 h-px w-full max-w-2xl" style={{ background: "#274056" }} />
        <div className="flex items-center gap-2 text-sm" style={{ color: "#c3cfdd" }}>
          <Clock className="h-4 w-4" />
          {slide.minutes} minutes
        </div>
        <div className={cn(EYEBROW, "mt-8 mb-4")} style={{ color: palette.accentSoft }}>
          In this module
        </div>
        <ul className="max-w-2xl space-y-3">
          {slide.objectives.map((o) => (
            <li key={o} className="flex gap-3 text-[15px] leading-relaxed">
              <span style={{ color: palette.accentSoft }}>—</span>
              <span>{o}</span>
            </li>
          ))}
        </ul>
        {slide.footnote ? (
          <p className="mt-10 max-w-2xl text-xs italic" style={{ color: "#8b9bb0" }}>
            {slide.footnote}
          </p>
        ) : null}
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------- content */

function Content({ slide }: RenderProps<ContentSlide>) {
  return (
    <div
      className="h-full overflow-y-auto px-[7vw] pt-[6vh] pb-28"
      style={{ background: palette.paper, color: palette.ink }}
    >
      <EyebrowRow left={slide.eyebrow} right={slide.label} onPaper />
      {slide.lead ? (
        <p className="mt-8 max-w-2xl text-xl font-medium leading-relaxed">{slide.lead}</p>
      ) : null}
      {slide.bullets?.length ? (
        <ul className="mt-8 max-w-2xl space-y-4">
          {slide.bullets.map((b, i) => (
            <li key={i} className="flex gap-3 text-[15px] leading-relaxed">
              <span className="mt-0.5 select-none" style={{ color: palette.accent }}>
                —
              </span>
              <span>
                {b.title ? <span className="font-semibold">{b.title}</span> : null}
                {b.title ? " — " : null}
                <span style={{ color: "#3a4744" }}>{b.text}</span>
              </span>
            </li>
          ))}
        </ul>
      ) : null}
      {slide.note ? (
        <p className="mt-10 max-w-2xl text-[15px] italic" style={{ color: "#5b6763" }}>
          {slide.note}
        </p>
      ) : null}
    </div>
  );
}

/* ------------------------------------------------------------- comparison */

function toneStyle(tone: ComparisonColumn["tone"]) {
  switch (tone) {
    case "ink":
      return { background: palette.ink, color: palette.paper, label: palette.accentSoft };
    case "accent":
      return { background: palette.accent, color: palette.paper, label: "#cfe4f6" };
    default:
      return { background: palette.paperPanel, color: palette.ink, label: "#6b7873" };
  }
}

function Column({ col }: { col: ComparisonColumn }) {
  const s = toneStyle(col.tone);
  return (
    <div className="flex-1 rounded-2xl p-7" style={{ background: s.background, color: s.color }}>
      <div className={cn(EYEBROW, "mb-5")} style={{ color: s.label }}>
        {col.title}
      </div>
      <ul className="space-y-3">
        {col.items.map((it, i) => (
          <li key={i} className="border-b pb-3 text-sm leading-relaxed last:border-0 last:pb-0" style={{ borderColor: "rgba(128,128,128,0.18)" }}>
            {it}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Comparison({ slide }: RenderProps<ComparisonSlide>) {
  return (
    <div
      className="h-full overflow-y-auto px-[7vw] pt-[6vh] pb-28"
      style={{ background: palette.paper, color: palette.ink }}
    >
      <EyebrowRow left={slide.eyebrow} right={slide.label} onPaper />
      {slide.lead ? (
        <p className="mt-8 max-w-2xl text-xl font-medium leading-relaxed">{slide.lead}</p>
      ) : null}
      <div className="mt-8 flex max-w-4xl flex-col gap-5 md:flex-row">
        <Column col={slide.left} />
        <Column col={slide.right} />
      </div>
      {slide.note ? (
        <p className="mt-8 max-w-2xl text-[15px] italic" style={{ color: "#5b6763" }}>
          {slide.note}
        </p>
      ) : null}
    </div>
  );
}

/* ----------------------------------------------------------------- ladder */

function Ladder({ slide }: RenderProps<LadderSlide>) {
  return (
    <div
      className="h-full overflow-y-auto px-[7vw] pt-[6vh] pb-28"
      style={{ background: palette.paper, color: palette.ink }}
    >
      <EyebrowRow left={slide.eyebrow} right={slide.label} onPaper />
      {slide.lead ? (
        <p className="mt-8 max-w-2xl text-xl font-medium leading-relaxed">{slide.lead}</p>
      ) : null}
      <div className="mt-10 grid max-w-4xl grid-cols-2 gap-4 md:grid-cols-4">
        {slide.steps.map((step, i) => {
          const isLast = i === slide.steps.length - 1;
          return (
            <div
              key={step.label}
              className="rounded-2xl p-6"
              style={{
                background: isLast ? palette.ink : palette.paperPanel,
                color: isLast ? palette.paper : palette.ink,
              }}
            >
              <div className={EYEBROW} style={{ color: isLast ? palette.accentSoft : "#6b7873" }}>
                {step.label}
              </div>
              <div
                className="mt-3 text-4xl font-bold tracking-tight"
                style={{ color: isLast ? palette.accentSoft : palette.accent }}
              >
                {step.value}
              </div>
              {step.sub ? (
                <div className="mt-1 text-xs" style={{ color: isLast ? "#9aa39e" : "#7c887f" }}>
                  {step.sub}
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
      {slide.note ? (
        <p className="mt-8 max-w-2xl text-[15px] italic" style={{ color: "#5b6763" }}>
          {slide.note}
        </p>
      ) : null}
    </div>
  );
}

/* --------------------------------------------------------- knowledge check */

function KnowledgeCheck({ slide, answers, setAnswer }: RenderProps<KnowledgeCheckSlide>) {
  const selected = answers[slide.id];
  const answered = Boolean(selected);
  const correct = selected === slide.answer;

  return (
    <div className="flex h-full flex-col" style={{ background: palette.ink }}>
      <div className="px-[7vw] pt-[6vh] pb-8" style={{ background: palette.paper }}>
        <div className={cn(EYEBROW, "mb-4")} style={{ color: palette.accent }}>
          {slide.eyebrow}
        </div>
        <h2 className="max-w-3xl text-2xl font-bold leading-snug md:text-3xl" style={{ color: palette.ink }}>
          {slide.question}
        </h2>
      </div>
      <div className="flex-1 overflow-y-auto px-[7vw] pt-10 pb-28">
        <div className="mx-auto max-w-4xl space-y-3">
          {slide.choices.map((c) => {
            const isSel = selected === c.key;
            const isAnswer = c.key === slide.answer;
            let border = "transparent";
            let bg = palette.paperPanel;
            let opacity = 1;
            if (answered) {
              if (isAnswer) border = palette.accent;
              else if (isSel) border = palette.danger;
              else opacity = 0.5;
            }
            return (
              <button
                key={c.key}
                type="button"
                disabled={answered}
                onClick={() => setAnswer(slide.id, c.key)}
                className="flex w-full items-center gap-4 rounded-xl border-2 px-6 py-4 text-left transition-all"
                style={{ borderColor: border, background: bg, opacity }}
              >
                <span className="text-sm font-bold" style={{ color: palette.accent }}>
                  {c.key}
                </span>
                <span className="flex-1 text-sm" style={{ color: palette.ink }}>
                  {c.text}
                </span>
                {answered && isAnswer ? (
                  <Check className="h-5 w-5 shrink-0" style={{ color: palette.accent }} />
                ) : null}
                {answered && isSel && !isAnswer ? (
                  <X className="h-5 w-5 shrink-0" style={{ color: palette.danger }} />
                ) : null}
              </button>
            );
          })}
          {answered ? (
            <div
              className="mt-6 rounded-xl border-l-4 p-5 text-sm leading-relaxed"
              style={{
                borderColor: correct ? palette.accent : palette.danger,
                background: palette.inkPanel,
                color: "#d7dad5",
              }}
            >
              <div
                className={cn(EYEBROW, "mb-2")}
                style={{ color: correct ? palette.accentSoft : "#e79a93" }}
              >
                {correct ? "Correct" : "Not quite"}
              </div>
              {slide.explanation}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------- exam */

function Exam({ slide, answers, setAnswer }: RenderProps<ExamSlide>) {
  const submitted = answers[`${slide.id}::submitted`] === "1";
  const allAnswered = slide.questions.every((q) => answers[q.id]);
  const score = slide.questions.filter((q) => answers[q.id] === q.answer).length;
  const passed = score >= slide.passScore;

  return (
    <div className="flex h-full flex-col" style={{ background: palette.ink }}>
      <div className="px-[7vw] pt-[6vh] pb-7" style={{ background: palette.paper }}>
        <div className={cn(EYEBROW, "mb-3")} style={{ color: palette.accent }}>
          {slide.eyebrow}
        </div>
        {submitted ? (
          <>
            <h2 className="text-3xl font-bold" style={{ color: palette.ink }}>
              {score} / {slide.questions.length} — {passed ? "Passed" : "Not yet"}
            </h2>
            <p className="mt-1 text-sm" style={{ color: "#5b6763" }}>
              {passed
                ? "Nicely done. Continue to wrap up."
                : `You need ${slide.passScore} to pass — review the marked answers and try again.`}
            </p>
          </>
        ) : (
          <>
            <h2 className="text-3xl font-bold" style={{ color: palette.ink }}>
              {slide.title}
            </h2>
            <p className="mt-1 text-sm" style={{ color: "#5b6763" }}>
              {slide.intro}
            </p>
          </>
        )}
      </div>

      <div className="flex-1 overflow-y-auto px-[7vw] pt-8 pb-28">
        <div className="mx-auto max-w-3xl space-y-8">
          {slide.questions.map((q, qi) => (
            <div key={q.id}>
              <h3 className="mb-3 text-[15px] font-semibold" style={{ color: palette.paper }}>
                {qi + 1}. {q.prompt}
              </h3>
              <div className="space-y-2">
                {q.choices.map((c) => {
                  const isSel = answers[q.id] === c.key;
                  const isAnswer = c.key === q.answer;
                  let border = "#26332e";
                  let bg: string = palette.inkPanel;
                  if (!submitted && isSel) border = palette.accent;
                  if (submitted && isAnswer) {
                    border = palette.accent;
                    bg = "rgba(18,122,107,0.16)";
                  } else if (submitted && isSel && !isAnswer) {
                    border = palette.danger;
                    bg = "rgba(194,69,59,0.14)";
                  }
                  return (
                    <button
                      key={c.key}
                      type="button"
                      disabled={submitted}
                      onClick={() => setAnswer(q.id, c.key)}
                      className="flex w-full items-center gap-3 rounded-lg border px-4 py-3 text-left text-sm transition-colors"
                      style={{ borderColor: border, background: bg, color: "#d7dad5" }}
                    >
                      <span className="font-bold" style={{ color: palette.accentSoft }}>
                        {c.key}
                      </span>
                      <span className="flex-1">{c.text}</span>
                      {submitted && isAnswer ? (
                        <Check className="h-4 w-4 shrink-0" style={{ color: palette.accentSoft }} />
                      ) : null}
                      {submitted && isSel && !isAnswer ? (
                        <X className="h-4 w-4 shrink-0" style={{ color: "#e79a93" }} />
                      ) : null}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}

          {!submitted ? (
            <button
              type="button"
              disabled={!allAnswered}
              onClick={() => setAnswer(`${slide.id}::submitted`, "1")}
              className="rounded-lg px-6 py-3 text-sm font-semibold transition-opacity"
              style={{
                background: palette.accent,
                color: palette.paper,
                opacity: allAnswered ? 1 : 0.4,
              }}
            >
              {allAnswered ? "Submit exam" : "Answer all questions to submit"}
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------- completion */

function Completion({ slide }: RenderProps<CompletionSlide>) {
  return (
    <div
      className="flex h-full flex-col items-center justify-center px-[7vw] text-center"
      style={{ background: palette.ink, color: palette.paper }}
    >
      <img
        src="/Seal_of_Connecticut.svg"
        alt="State of Connecticut seal"
        className="mb-7 h-20 w-auto [filter:drop-shadow(0_6px_20px_rgba(0,0,0,0.45))]"
      />
      <div className={cn(EYEBROW, "mb-6")} style={{ color: palette.accentSoft }}>
        {slide.eyebrow}
      </div>
      <h1 className="max-w-3xl text-4xl font-bold tracking-tight md:text-5xl">{slide.title}</h1>
      <p className="mt-4 text-lg" style={{ color: "#c3cfdd" }}>
        {slide.subtitle}
      </p>
      <div className="my-8 h-px w-40" style={{ background: "#33465c" }} />
      <div className="space-y-2">
        {slide.lines.map((l) => (
          <p key={l} className="text-[15px]" style={{ color: "#cdd7e2" }}>
            {l}
          </p>
        ))}
      </div>
      {slide.author ? (
        <p className="mt-8 text-sm font-medium" style={{ color: palette.accentSoft }}>
          {slide.author}
        </p>
      ) : null}
    </div>
  );
}

/* ------------------------------------------------------------------ switch */

export function SlideView(props: RenderProps<Slide>) {
  const { slide } = props;
  switch (slide.kind) {
    case "title":
      return <Title {...props} slide={slide} />;
    case "survey":
      return <Survey {...props} slide={slide} />;
    case "moduleIntro":
      return <ModuleIntro {...props} slide={slide} />;
    case "content":
      return <Content {...props} slide={slide} />;
    case "comparison":
      return <Comparison {...props} slide={slide} />;
    case "ladder":
      return <Ladder {...props} slide={slide} />;
    case "check":
      return <KnowledgeCheck {...props} slide={slide} />;
    case "exam":
      return <Exam {...props} slide={slide} />;
    case "completion":
      return <Completion {...props} slide={slide} />;
  }
}
