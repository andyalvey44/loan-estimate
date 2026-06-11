import type { Section } from "./types";

export const section1: Section = {
  id: "header",
  navLabel: "1. The Header",
  eyebrow: "Section 1",
  title: "The Header — Foundational Loan Information",
  lead: "The top of Page 1 contains critical identifying information that sets the foundation for everything else in the document.",
  estMinutes: 10,
  objectives: [
    "**Locate** the Date Issued and **count** the deadlines it triggers (intent-to-proceed and earliest closing)",
    "**Verify** that applicant names and the property address are complete and exactly correct",
    "**Calculate** loan-to-value (LTV) from sale price and loan amount, and **explain** why the 80% threshold matters",
    "**Flag** header-level errors that can delay or derail a closing",
  ],
  topics: [
    {
      id: "date-issued",
      title: "Date Issued",
      blocks: [
        {
          kind: "layer",
          level: "101",
          tag: "WHAT",
          md: "The date the lender generated and provided this specific Loan Estimate.",
        },
        {
          kind: "layer",
          level: "201",
          tag: "WHY",
          md: [
            "Under **12 CFR §1026.37(a)(3)**, the date issued is crucial because it:",
            "- Starts the 10-business-day intent-to-proceed clock",
            "- Determines which fees can be locked at application",
            "- Establishes when rate-lock periods begin (if applicable)",
            "- Creates the baseline for measuring changed circumstances",
          ].join("\n"),
        },
        { kind: "layer", level: "301", tag: "HOW" },
        {
          kind: "callout",
          variant: "red-flag",
          md: "If you applied on Monday and the LE is dated the following Monday (7+ calendar days later), the lender may have violated the 3-business-day delivery requirement. Business days for LE delivery are all calendar days except Sundays and federal holidays.",
        },
        {
          kind: "callout",
          variant: "best-practice",
          md: [
            "Note the date immediately and count forward:",
            "- Date issued **+ 10 business days** = deadline for you to indicate intent to proceed",
            "- Date issued **+ 7 business days** = earliest you can close (in most cases)",
          ].join("\n"),
        },
        {
          kind: "callout",
          variant: "example",
          md: [
            "- Application: Monday, January 8",
            "- LE must be delivered by: Thursday, January 11 (3 business days)",
            "- Earliest closing date: Thursday, January 18 (7 business days after receipt)",
            "- Intent-to-proceed deadline: generally Monday, January 22 (10 business days)",
          ].join("\n"),
        },
        {
          kind: "check",
          question:
            "Why does the Date Issued matter beyond simply being a timestamp?",
          options: [
            {
              text: "It starts the intent-to-proceed and earliest-closing deadlines and sets the baseline for measuring changed circumstances",
              correct: true,
            },
            { text: "It determines your interest rate", correct: false },
            { text: "It's the date your first mortgage payment is due", correct: false },
            { text: "It has no practical effect on the transaction", correct: false },
          ],
          explanation:
            "The Date Issued is the clock-starter: it begins the 10-business-day window to indicate intent to proceed, anchors the earliest-closing math, and establishes the baseline lenders measure **changed circumstances** against. A timestamp with teeth.",
        },
      ],
    },
    {
      id: "applicants-property",
      title: "Applicants and Property Address",
      blocks: [
        {
          kind: "layer",
          level: "101",
          tag: "WHAT",
          md: "Lists all borrowers applying for the loan and the property being purchased or refinanced.",
        },
        {
          kind: "layer",
          level: "201",
          tag: "WHY",
          md: [
            "Required under **12 CFR §1026.37(a)(6) and (7)**.",
            "- Legal identification of parties to the transaction",
            "- Ensures the correct borrowers are disclosed on credit reports",
            "- Property address is tied to appraisal and title work",
            "- Creates a legal chain of accountability",
          ].join("\n"),
        },
        {
          kind: "layer",
          level: "301",
          tag: "HOW",
          md: [
            "**Critical Checks:**",
            "1. **Spelling matters** — names must match government IDs exactly. \"Bob Smith\" vs. \"Robert Smith\" can cause title issues.",
            "2. **All borrowers listed** — if you're applying jointly, both names must appear.",
            "3. **Property address accuracy** — wrong address = wrong appraisal, wrong title search, wrong insurance.",
          ].join("\n"),
        },
        {
          kind: "callout",
          variant: "real-world",
          md: "A borrower's LE showed \"123 Main St.\" but the actual property was \"123 Main St., Unit B.\" At closing, the title company had searched the wrong property, causing a 3-week delay and expiration of the rate lock.",
        },
        {
          kind: "callout",
          variant: "pro-tip",
          md: "If you're buying new construction and there's no assigned address yet (listed as \"Lot 47, Subdivision Name\"), make sure you get an updated LE when the official address is assigned.",
        },
      ],
    },
    {
      id: "sale-price-loan-amount",
      title: "Sale Price and Loan Amount",
      blocks: [
        {
          kind: "layer",
          level: "101",
          tag: "WHAT",
          md: [
            "- **Sale Price** (for purchases): the agreed-upon price you're paying for the property",
            "- **Loan Amount**: the actual amount you're borrowing from the lender",
          ].join("\n"),
        },
        {
          kind: "layer",
          level: "201",
          tag: "WHY",
          md: [
            "These figures drive virtually every calculation in the LE. Under **12 CFR §1026.37(a)(7) and (b)(1)**:",
            "- Loan amount determines interest charges and payment calculations",
            "- Sale price is used to calculate the loan-to-value (LTV) ratio, which affects:",
            "    - PMI requirements (typically required if LTV > 80%)",
            "    - Interest-rate pricing (higher LTV = higher risk = higher rate)",
            "    - Loan-program eligibility",
            "",
            "**Formula to understand:**",
            "~~~",
            "Loan-to-Value (LTV) = (Loan Amount ÷ Sale Price) × 100",
            "~~~",
          ].join("\n"),
        },
        {
          kind: "layer",
          level: "301",
          tag: "HOW",
          md: [
            "**What to verify:**",
            "1. **For purchases:**",
            "    - Sale price matches your purchase contract exactly",
            "    - Loan amount reflects your intended down payment",
            "    - Calculate: Sale Price − Loan Amount = your down payment (plus closing costs)",
            "2. **For refinances:**",
            "    - Loan amount should be your current balance plus any costs being rolled in",
            "    - Verify whether it's a cash-out refinance (borrowing more than you owe) or a rate-and-term refinance",
          ].join("\n"),
        },
        {
          kind: "callout",
          variant: "example",
          title: "Example Scenario",
          md: [
            "~~~",
            "Sale Price:    $400,000",
            "Loan Amount:   $320,000",
            "Down Payment:   $80,000",
            "LTV:                 80%",
            "~~~",
            "This borrower is at exactly 80% LTV — right at the threshold for avoiding PMI. If the loan amount were even $1 higher, PMI would be required, adding $100–200+ to the monthly payment.",
          ].join("\n"),
        },
        {
          kind: "callout",
          variant: "red-flag",
          title: "Red Flag (Advanced)",
          md: "If your loan amount seems higher than expected, the lender may have included estimated closing costs in the loan amount without clearly explaining this. It's legal if you agreed to it — but you should understand it explicitly.",
        },
        {
          kind: "callout",
          variant: "pro-tip",
          md: "For purchases, if you're close to the 80% LTV threshold, consider whether you can bring slightly more cash to closing to avoid PMI. The monthly savings often justify the extra upfront cash.",
        },
        {
          kind: "check",
          question:
            "A buyer is purchasing a $400,000 home with a $360,000 loan. What is the LTV — and does it require PMI?",
          options: [
            { text: "90% — PMI required", correct: true },
            { text: "80% — no PMI", correct: false },
            { text: "90% — no PMI", correct: false },
            { text: "111% — PMI required", correct: false },
          ],
          explanation:
            "LTV = loan ÷ price × 100 = $360,000 ÷ $400,000 = **90%**. Anything above 80% LTV generally triggers PMI on a conventional loan, so this borrower would pay it. Increasing the down payment to bring the loan to $320,000 (80%) would avoid PMI entirely.",
        },
      ],
    },
  ],
  keyTakeaways: [
    "The **Date Issued** starts the clock — it triggers the intent-to-proceed and earliest-closing deadlines and is the baseline for any later changes.",
    "Names must match government IDs exactly and every borrower must be listed; the property address must be precise — header errors stall closings.",
    "**LTV = loan ÷ price.** It drives PMI, your rate, and program eligibility — and 80% is the line that decides whether you pay PMI.",
    "Treat the header as the foundation: if these numbers are wrong, everything downstream on the form is wrong too.",
  ],
};
