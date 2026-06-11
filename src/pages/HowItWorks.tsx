import { LogoBar } from "@/components/BrandLogo";
import { ChevronRight } from "lucide-react";

export default function HowItWorks() {
  const sections = [
    "overview",
    "course-modules",
    "lesson-cards",
    "lesson-flow",
    "lesson-structure",
    "reference-materials",
  ];

  const currentSection = "overview";

  return (
    <main className="min-h-screen bg-background text-foreground">
      <LogoBar />

      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-4 gap-8">

          {/* Sidebar Navigation */}
          <aside className="col-span-1">
            <nav className="sticky top-20 space-y-1 text-sm">
              <div className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-4">
                On this page
              </div>
              {sections.map((section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  className={`block py-2 px-3 rounded-md transition-colors ${
                    currentSection === section
                      ? "bg-primary/10 text-primary font-medium"
                      : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                  }`}
                >
                  {section.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")}
                </a>
              ))}
            </nav>
          </aside>

          {/* Main Content */}
          <div className="col-span-3 space-y-16 max-w-3xl">

            {/* Overview */}
            <section id="overview" className="scroll-mt-20">
              <h2 className="text-3xl font-bold mb-4">How This Course Works</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The Loan Estimate course breaks down the standard Loan Estimate disclosure into a series of focused, self-contained lessons. Instead of one long document, every concept is taught through a structured lesson built from a shared course template, so the experience is consistent from start to finish.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The core flow is simple: Modules group related topics → Each module contains lesson cards → You work through a lesson's flow → You review the key takeaways and reference materials before moving on.
              </p>
            </section>

            {/* Course Modules */}
            <section id="course-modules" className="scroll-mt-20">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                Course Modules
                <ChevronRight className="w-5 h-5 text-muted-foreground" />
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The course is organized into modules that mirror the sections of the Loan Estimate form itself. Each module focuses on one part of the form (loan terms, projected payments, costs at closing, etc.) and the concepts you need to understand it.
              </p>

              <div className="bg-card border border-border rounded-lg p-6 mb-6">
                <div className="text-sm font-medium text-muted-foreground mb-3">Example Module</div>
                <pre className="text-xs overflow-x-auto bg-black/20 p-4 rounded text-white/80">
{`Module: Projected Payments
Purpose: Explain how estimated monthly payments are calculated
Covers: Principal & interest, mortgage insurance, escrow
Format: Short lesson + worked example + quick check
Estimated Time: 10-15 minutes`}
                </pre>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                Modules are designed to be taken in order, but each one is also self-contained, so you can jump back to any module as a reference later.
              </p>
            </section>

            {/* Lesson Cards */}
            <section id="lesson-cards" className="scroll-mt-20">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                Lesson Cards
                <ChevronRight className="w-5 h-5 text-muted-foreground" />
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                A Lesson Card is the building block of every module. Each one includes:
              </p>

              <ul className="space-y-3 mb-6 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-primary font-semibold flex-shrink-0">•</span>
                  <span><strong>Title & Description:</strong> What the lesson covers</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-semibold flex-shrink-0">•</span>
                  <span><strong>Source Material:</strong> The relevant section of the Loan Estimate form</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-semibold flex-shrink-0">•</span>
                  <span><strong>Worked Example:</strong> A walkthrough using a sample Loan Estimate</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-semibold flex-shrink-0">•</span>
                  <span><strong>Tags:</strong> Topic metadata for search and review</span>
                </li>
              </ul>

              <p className="text-muted-foreground leading-relaxed">
                Lesson cards link directly to the form sections they explain, so you can always trace a concept back to where it appears on the actual disclosure.
              </p>
            </section>

            {/* Lesson Flow */}
            <section id="lesson-flow" className="scroll-mt-20">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                Lesson Flow
                <ChevronRight className="w-5 h-5 text-muted-foreground" />
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Here's what happens as you work through a lesson:
              </p>

              <div className="space-y-4">
                {[
                  { num: "1", title: "Introduction", desc: "A short explanation of the concept and why it matters on the Loan Estimate." },
                  { num: "2", title: "Form Walkthrough", desc: "The relevant section of the Loan Estimate is highlighted and explained field by field." },
                  { num: "3", title: "Worked Example", desc: "A sample scenario shows how the numbers are calculated and where they appear on the form." },
                  { num: "4", title: "Quick Check", desc: "A short question or two to confirm the concept landed before moving on." },
                  { num: "5", title: "Key Takeaways", desc: "A summary of the most important points from the lesson." },
                  { num: "6", title: "Next Lesson", desc: "You move on to the next lesson in the module, or jump to another module from the navigation." },
                ].map((step) => (
                  <div key={step.num} className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center font-semibold text-primary text-sm">
                      {step.num}
                    </div>
                    <div>
                      <div className="font-semibold text-sm mb-1">{step.title}</div>
                      <p className="text-muted-foreground text-sm">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Lesson Structure */}
            <section id="lesson-structure" className="scroll-mt-20">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                Lesson Structure
                <ChevronRight className="w-5 h-5 text-muted-foreground" />
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Every lesson follows the same structure. This consistency makes the course easy to navigate and makes it simple to track your progress across modules.
              </p>

              <div className="bg-card border border-border rounded-lg p-6 mb-6">
                <div className="text-sm font-medium text-muted-foreground mb-3">Lesson Schema</div>
                <pre className="text-xs overflow-x-auto bg-black/20 p-4 rounded text-white/80 whitespace-pre-wrap break-words">
{`{
  "title": string,
  "form_section": string,
  "key_takeaways": string[],
  "sections": [
    {
      "heading": string,
      "content": string
    }
  ],
  "tags": string[],
  "completed": boolean
}`}
                </pre>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                Because the structure is consistent, your progress can be tracked reliably across every module and lesson in the course.
              </p>
            </section>

            {/* Reference Materials */}
            <section id="reference-materials" className="scroll-mt-20">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                Reference Materials
                <ChevronRight className="w-5 h-5 text-muted-foreground" />
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Throughout the course, lessons link out to supporting documents so you can dig deeper or use them as references after you finish.
              </p>

              <ul className="space-y-3 mb-6 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-primary font-semibold flex-shrink-0">•</span>
                  <span><strong>Sample Loan Estimate Form:</strong> A blank, annotated copy of the form used throughout the course</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-semibold flex-shrink-0">•</span>
                  <span><strong>Course Content Guide:</strong> A complete outline of every module and lesson</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-semibold flex-shrink-0">•</span>
                  <span><strong>Glossary:</strong> Definitions for key terms used on the form</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-semibold flex-shrink-0">•</span>
                  <span><strong>Further Reading:</strong> Links to official guidance and regulations</span>
                </li>
              </ul>

              <p className="text-muted-foreground leading-relaxed">
                These materials are referenced from individual lessons, so you'll always have context for why a document is relevant when you open it.
              </p>
            </section>

          </div>
        </div>
      </div>
    </main>
  );
}
