import type { Course } from "./types";
import { intro } from "./intro";
import { section1 } from "./section1";
import { section2 } from "./section2";
import { section3 } from "./section3";
import { section4 } from "./section4";
import { section5 } from "./section5";

export const course: Course = {
  title: "How to Read the Loan Estimate",
  subtitle:
    "A field guide to every line of the standard Loan Estimate disclosure — what each number means, why the regulations require it, and how to use it to compare offers and protect yourself.",

  // Orientation panel ("Start Here"). Fill this in to frame the whole course.
  meta: {
    audience:
      "Anyone who wants to confidently read a mortgage Loan Estimate — homebuyers and homeowners reviewing their own loan, plus loan officers, processors, housing counselors, and real-estate agents who guide clients through it.",
    prerequisites:
      "None. Comfort with percentages and simple arithmetic helps but isn't required — every calculation is worked through step by step.",
    outcomes: [
      "Read every line of a standard Loan Estimate with confidence",
      "Compare competing loan offers on true total cost, not just the headline rate",
      "Calculate the numbers that matter — LTV, points break-even, cash-to-close, and tolerance thresholds",
      "Recognize red flags, junk fees, and disclosure errors before they cost you",
      "Know which costs are locked, which can change, and by how much",
    ],
    howToUse: [
      "- **Work through the modules in order** the first time — each one builds on the last.",
      "- Watch the **101 / 201 / 301** badges: *101* is *what* a field is, *201* is *why* it exists, *301* is *how* to use it.",
      "- Don't skip the **colored callouts** — they flag pro tips, red flags, and real-world traps.",
      "- Answer each **Knowledge Check** before revealing the explanation; the retrieval is what makes it stick.",
      "- Use **Mark module complete** to track progress (saved in this browser).",
      "- When you're done, keep the course open as a **reference** — jump to any section from the sidebar.",
    ],
  },

  sections: [intro, section1, section2, section3, section4, section5],

  // Reference glossary. Seeded with the core terms; extend freely.
  glossary: [
    {
      term: "Amortization",
      definition:
        "The schedule by which each monthly payment is split between interest and principal, gradually paying the loan down to zero over its term.",
    },
    {
      term: "Cash to Close",
      definition:
        "The total money you must bring to closing after accounting for your down payment, closing costs, lender/seller credits, and any deposit already paid.",
    },
    {
      term: "Changed Circumstance",
      definition:
        "A specific, documented event (defined by Regulation Z) that legally permits a lender to revise previously disclosed costs.",
    },
    {
      term: "Closing Costs",
      definition:
        "The total of all fees, prepaids, and escrow deposits paid at or before closing to complete the mortgage — separate from your down payment.",
    },
    {
      term: "Discount Points",
      definition:
        "Optional prepaid interest paid at closing to permanently lower your interest rate. One point equals 1% of the loan amount.",
    },
    {
      term: "Earnest Money",
      definition:
        "A good-faith deposit (typically 1–3% of price) paid when your offer is accepted; it is credited toward your cash to close.",
    },
    {
      term: "Escrow",
      definition:
        "An account the lender uses to collect and pay your property taxes and homeowners insurance on your behalf, spread across your monthly payment.",
    },
    {
      term: "LTV (Loan-to-Value)",
      definition:
        "The loan amount divided by the property value, as a percentage. Drives PMI requirements, rate pricing, and program eligibility. A $320,000 loan on a $400,000 home is 80% LTV.",
    },
    {
      term: "Origination Charge",
      definition:
        "What the lender charges to process and underwrite your loan. A zero-tolerance item — it cannot increase from the initial Loan Estimate.",
    },
    {
      term: "PMI (Private Mortgage Insurance)",
      definition:
        "Insurance protecting the lender if you default, generally required on conventional loans with less than 20% down (above 80% LTV).",
    },
    {
      term: "Prepaids",
      definition:
        "Upfront payments at closing for your own future expenses — homeowners insurance, property taxes, and prepaid interest — not fees to the lender.",
    },
    {
      term: "TRID",
      definition:
        "The TILA-RESPA Integrated Disclosure rule (effective 2015) that created the standardized Loan Estimate and Closing Disclosure. Codified in Regulation Z.",
    },
  ],
};

export type { Course } from "./types";
