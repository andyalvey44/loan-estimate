import { useEffect, useState } from "react";
import { LogoBar } from "@/components/BrandLogo";
import { BlockView } from "@/components/course/Block";
import { Markdown } from "@/components/course/Markdown";
import { course } from "@/data/course";

export default function Course() {
  const [activeId, setActiveId] = useState(course.sections[0]?.id ?? "");

  // Scroll-spy: highlight the sidebar entry for the section currently in view.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top
          );
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-80px 0px -70% 0px", threshold: 0 }
    );

    for (const section of course.sections) {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

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
            <h1 className="mb-4 text-4xl font-bold tracking-tight">
              {course.title}
            </h1>
            <p className="text-lg leading-relaxed text-muted-foreground">
              {course.subtitle}
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-4 gap-8">
          {/* Sidebar navigation */}
          <aside className="col-span-1">
            <nav className="sticky top-20 space-y-1 text-sm">
              <div className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Course Contents
              </div>
              {course.sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className={`block rounded-md px-3 py-2 transition-colors ${
                    activeId === section.id
                      ? "bg-primary/10 font-medium text-primary"
                      : "text-muted-foreground hover:bg-white/5 hover:text-foreground"
                  }`}
                >
                  {section.navLabel}
                </a>
              ))}
            </nav>
          </aside>

          {/* Course content */}
          <div className="col-span-3 max-w-3xl space-y-20">
            {course.sections.map((section) => (
              <section
                key={section.id}
                id={section.id}
                className="scroll-mt-20"
              >
                <div className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary">
                  {section.eyebrow}
                </div>
                <h2 className="mb-4 text-3xl font-bold">{section.title}</h2>
                {section.lead ? (
                  <div className="mb-10 [&_p]:text-lg [&_p]:leading-relaxed">
                    <Markdown>{section.lead}</Markdown>
                  </div>
                ) : null}

                <div className="space-y-14">
                  {section.topics.map((topic) => (
                    <article
                      key={topic.id}
                      id={topic.id}
                      className="scroll-mt-20"
                    >
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
              </section>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
