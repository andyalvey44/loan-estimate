import { useEffect, useMemo, useState } from "react";
import { Check, CircleCheckBig, Clock } from "lucide-react";
import { LogoBar } from "@/components/BrandLogo";
import { BlockView } from "@/components/course/Block";
import { Markdown } from "@/components/course/Markdown";
import { Objectives } from "@/components/course/Objectives";
import { KeyTakeaways } from "@/components/course/KeyTakeaways";
import { StartHere } from "@/components/course/StartHere";
import { Glossary } from "@/components/course/Glossary";
import { useProgress } from "@/hooks/useProgress";
import { course } from "@/data/course";
import { cn } from "@/lib/utils";

export default function Course() {
  const { toggle, isComplete } = useProgress();

  // The sidebar/scroll-spy nav = Start Here + each section + Glossary.
  const navItems = useMemo(() => {
    const items: { id: string; label: string; completable: boolean }[] = [];
    if (course.meta) items.push({ id: "start-here", label: "Start Here", completable: false });
    for (const s of course.sections) {
      items.push({ id: s.id, label: s.navLabel, completable: true });
    }
    if (course.glossary?.length) items.push({ id: "glossary", label: "Glossary", completable: false });
    return items;
  }, []);

  const totalMinutes = useMemo(
    () => course.sections.reduce((sum, s) => sum + (s.estMinutes ?? 0), 0),
    []
  );

  const [activeId, setActiveId] = useState(navItems[0]?.id ?? "");

  // Scroll-spy: highlight the nav entry for whatever section is in view.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-80px 0px -70% 0px", threshold: 0 }
    );
    for (const item of navItems) {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, [navItems]);

  const sectionCount = course.sections.length;
  const doneCount = course.sections.filter((s) => isComplete(s.id)).length;
  const pct = sectionCount ? Math.round((doneCount / sectionCount) * 100) : 0;

  return (
    <main className="min-h-screen bg-background text-foreground">
      <LogoBar />

      {/* Course hero */}
      <div className="border-b border-border bg-card/30">
        <div className="container mx-auto px-6 py-14">
          <div className="max-w-3xl">
            <div className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
              Training Course
            </div>
            <h1 className="mb-4 text-4xl font-bold tracking-tight">{course.title}</h1>
            <p className="text-lg leading-relaxed text-muted-foreground">
              {course.subtitle}
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-4 gap-8">
          {/* Sidebar navigation + progress */}
          <aside className="col-span-1">
            <nav className="sticky top-20 text-sm">
              <div className="mb-5">
                <div className="mb-2 flex items-center justify-between text-xs text-muted-foreground">
                  <span className="font-semibold uppercase tracking-widest">
                    Your Progress
                  </span>
                  <span className="tabular-nums">
                    {doneCount}/{sectionCount}
                  </span>
                </div>
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
                  <div
                    className="h-full rounded-full bg-primary transition-all duration-300"
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </div>

              <div className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Course Contents
              </div>
              <div className="space-y-1">
                {navItems.map((item) => {
                  const done = item.completable && isComplete(item.id);
                  return (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className={cn(
                        "flex items-center gap-2 rounded-md px-3 py-2 transition-colors",
                        activeId === item.id
                          ? "bg-primary/10 font-medium text-primary"
                          : "text-muted-foreground hover:bg-white/5 hover:text-foreground"
                      )}
                    >
                      {item.completable ? (
                        done ? (
                          <CircleCheckBig className="h-3.5 w-3.5 shrink-0 text-emerald-400" />
                        ) : (
                          <span className="inline-block h-3.5 w-3.5 shrink-0 rounded-full border border-muted-foreground/40" />
                        )
                      ) : null}
                      <span>{item.label}</span>
                    </a>
                  );
                })}
              </div>
            </nav>
          </aside>

          {/* Course content */}
          <div className="col-span-3 max-w-3xl space-y-20">
            {course.meta ? (
              <StartHere
                meta={course.meta}
                totalMinutes={totalMinutes}
                sectionCount={sectionCount}
              />
            ) : null}

            {course.sections.map((section) => (
              <section key={section.id} id={section.id} className="scroll-mt-20">
                <div className="mb-2 flex items-center gap-3">
                  <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                    {section.eyebrow}
                  </span>
                  {section.estMinutes ? (
                    <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />~{section.estMinutes} min
                    </span>
                  ) : null}
                </div>
                <h2 className="mb-4 text-3xl font-bold">{section.title}</h2>
                {section.lead ? (
                  <div className="mb-8 [&_p]:text-lg [&_p]:leading-relaxed">
                    <Markdown>{section.lead}</Markdown>
                  </div>
                ) : null}
                {section.objectives?.length ? (
                  <Objectives items={section.objectives} />
                ) : null}

                <div className="space-y-14">
                  {section.topics.map((topic) => (
                    <article key={topic.id} id={topic.id} className="scroll-mt-20">
                      <h3 className="mb-5 border-b border-border pb-2 text-xl font-semibold">
                        {topic.title}
                      </h3>
                      <div className="space-y-4">
                        {topic.blocks.map((block, i) => (
                          <BlockView key={i} block={block} />
                        ))}
                      </div>
                    </article>
                  ))}
                </div>

                {section.keyTakeaways?.length ? (
                  <KeyTakeaways items={section.keyTakeaways} />
                ) : null}

                {/* Module completion control */}
                <div className="mt-10 border-t border-border pt-6">
                  <button
                    type="button"
                    onClick={() => toggle(section.id)}
                    className={cn(
                      "inline-flex items-center gap-2 rounded-md border px-4 py-2 text-sm font-medium transition-colors",
                      isComplete(section.id)
                        ? "border-emerald-500/40 bg-emerald-500/10 text-emerald-300"
                        : "border-border bg-card/50 text-muted-foreground hover:border-primary/40 hover:text-foreground"
                    )}
                  >
                    {isComplete(section.id) ? (
                      <>
                        <CircleCheckBig className="h-4 w-4" />
                        Module complete
                      </>
                    ) : (
                      <>
                        <Check className="h-4 w-4" />
                        Mark module complete
                      </>
                    )}
                  </button>
                </div>
              </section>
            ))}

            {course.glossary?.length ? (
              <Glossary terms={course.glossary} />
            ) : null}
          </div>
        </div>
      </div>
    </main>
  );
}
