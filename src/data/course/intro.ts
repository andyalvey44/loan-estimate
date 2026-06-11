import type { Section } from "./types";

export const intro: Section = {
  id: "intro",
  navLabel: "Introduction",
  eyebrow: "Introduction",
  title: "Understanding the Loan Estimate in the Mortgage Ecosystem",
  lead: "The Loan Estimate is your mortgage's \"nutrition label.\" Before you can compare offers or spot a bad deal, you need to know what the form is, why it exists, and how to approach reading it.",
  topics: [
    {
      id: "what-is-an-le",
      title: "Understanding the Loan Estimate",
      blocks: [
        {
          kind: "layer",
          level: "101",
          tag: "WHAT",
          md: "The **Loan Estimate (LE)** is a standardized, three-page document that every mortgage lender must provide to borrowers within three business days of receiving a loan application. Think of it as your mortgage \"nutrition label\" — it breaks down exactly what you're getting, what it costs, and what could change before closing.",
        },
        {
          kind: "callout",
          variant: "real-world",
          title: "Real-World Context",
          md: "Before 2015, borrowers received two separate forms (the Good Faith Estimate and the initial Truth in Lending disclosure) that were confusing and used different formats. Comparing offers from different lenders was like comparing apples to oranges. The Loan Estimate solved this problem.",
        },
        {
          kind: "layer",
          level: "201",
          tag: "WHY",
          md: "The Loan Estimate is mandated by the **TILA-RESPA Integrated Disclosure (TRID) rule**, which became effective October 3, 2015. This rule is codified in **Regulation Z (12 CFR §1026.37)** and was created by the Consumer Financial Protection Bureau (CFPB) under the Dodd-Frank Act.",
        },
        {
          kind: "md",
          md: [
            "**Regulatory Purpose:**",
            "- **Consumer Protection:** Prevents predatory lending by requiring transparent disclosure",
            "- **Comparability:** Standardized format lets borrowers shop and compare lenders",
            "- **Timing Protection:** Must be provided early enough to make informed decisions",
            "- **Change Documentation:** Establishes a baseline for what can change and by how much",
            "",
            "**Key Regulatory Timeline:**",
            "- Application received → 3 business days → LE must be delivered",
            "- LE received → 7 business days → borrower must wait before closing (cooling-off period)",
            "- This gives borrowers at least 7 days to review before being legally bound",
          ].join("\n"),
        },
        {
          kind: "layer",
          level: "301",
          tag: "HOW",
          md: [
            "**Professional Best Practices:**",
            "1. **Read it immediately** — don't wait until closing to discover problems",
            "2. **Compare side-by-side** — get LEs from at least 3 lenders within the same 2–3 day window",
            "3. **Focus on total cost** — don't just look at the interest rate",
            "4. **Identify what can change** — some numbers are locked, others aren't",
            "5. **Ask questions in writing** — create a paper trail for all clarifications",
          ].join("\n"),
        },
        {
          kind: "callout",
          variant: "pro-tip",
          md: "The most expensive loan isn't always the worst deal, and the lowest rate isn't always the best. You need to analyze the complete picture — including how long you plan to keep the loan.",
        },
      ],
    },
  ],
};
