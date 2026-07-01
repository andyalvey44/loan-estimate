import type { Slide } from "./types";

// A tight, curated "essentials" pass over the CT Abusive Home Loan Lending
// Practices Act (§36a-746 et seq.) — the highest-value, most testable points,
// one idea per full-screen slide. Sourced from the CT Module 1/2 material.

export const courseTitle = "Connecticut Mortgage Compliance";

export const slides: Slide[] = [
  {
    id: "title",
    kind: "title",
    eyebrow: "CONTINUING EDUCATION",
    title: "Connecticut Mortgage Compliance",
    subtitle: "A 10-minute essentials course for licensed loan originators",
    author: "CT Abusive Home Loan Lending Practices Act",
  },
  {
    id: "survey",
    kind: "survey",
    eyebrow: "INTRODUCTION",
    label: "BEFORE WE START",
    intro:
      "Two quick questions. No right or wrong answers — they just set your frame for what follows.",
    questions: [
      {
        id: "survey-experience",
        prompt: "How would you describe your experience with Connecticut lending law?",
        options: [
          "New to it",
          "Some exposure through my work",
          "I originate in Connecticut regularly",
          "I handle compliance directly",
        ],
      },
      {
        id: "survey-confidence",
        prompt:
          "When you hear “high-cost home loan,” how confident are you in the exact thresholds?",
        options: [
          "Not at all",
          "I know the concept, not the numbers",
          "I know the numbers",
          "I could teach it",
        ],
      },
    ],
  },
  {
    id: "module-intro",
    kind: "moduleIntro",
    eyebrow: "CONNECTICUT MORTGAGE COMPLIANCE",
    module: "THE ESSENTIALS",
    title: "High-Cost Loans & Fair Lending",
    minutes: 10,
    objectives: [
      "Identify what makes a home loan “high-cost” under Connecticut law",
      "Recognize the loan features prohibited on high-cost loans",
      "Apply the prepayment-penalty limits and disclosure timing",
      "Spot loan flipping and the tangible-net-benefit test",
    ],
    footnote: "Based on the CT Abusive Home Loan Lending Practices Act (§36a-746).",
  },
  {
    id: "triggers",
    kind: "comparison",
    eyebrow: "THE ESSENTIALS",
    label: "WHAT MAKES A LOAN HIGH-COST",
    lead: "A loan is “high-cost” if it crosses EITHER threshold at consummation.",
    left: {
      title: "Rate trigger",
      tone: "paper",
      items: [
        "APR exceeds the comparable Treasury yield by…",
        "8 points — first-lien loans",
        "9 points — subordinate-lien loans",
      ],
    },
    right: {
      title: "Points & fees trigger",
      tone: "ink",
      items: [
        "Loans ≥ $40,000: more than 5% of the loan amount",
        "Loans < $40,000: more than 8%, or $1,000 — whichever is less",
      ],
    },
    note: "Cross one line and the loan is high-cost — and a stricter rulebook applies.",
  },
  {
    id: "prohibited-features",
    kind: "content",
    eyebrow: "THE ESSENTIALS",
    label: "PROHIBITED FEATURES",
    lead: "High-cost loans cannot be structured with any of these:",
    bullets: [
      { title: "Call provisions", text: "no acceleration at the lender's sole discretion (except default or fraud)" },
      { title: "Balloon payments", text: "none on terms under seven years (bridge loans excepted)" },
      { title: "Negative amortization", text: "the balance can never grow while the borrower pays" },
      { title: "Rate increase on default", text: "no penalty interest rate after a missed payment" },
      { title: "Advance payments", text: "no more than two periodic payments taken up front" },
      { title: "Modification fees", text: "no charge to modify, renew, or extend the loan" },
    ],
    note: "These map to the predatory-lending playbook the Act was written to stop.",
  },
  {
    id: "penalty-ladder",
    kind: "ladder",
    eyebrow: "THE ESSENTIALS",
    label: "PREPAYMENT PENALTIES",
    lead: "If a high-cost loan carries a prepayment penalty, it decays fast — and dies at 36 months.",
    steps: [
      { label: "Year 1", value: "3%", sub: "of balance" },
      { label: "Year 2", value: "2%", sub: "of balance" },
      { label: "Year 3", value: "1%", sub: "of balance" },
      { label: "36+ months", value: "0%", sub: "none allowed" },
    ],
    note: "And no penalty at all if the borrower's debt-to-income exceeds 50% at closing.",
  },
  {
    id: "check-threshold",
    kind: "check",
    eyebrow: "KNOWLEDGE CHECK",
    question:
      "A $50,000 first-lien loan carries $2,700 in points and fees. Is it high-cost on the points-and-fees trigger?",
    choices: [
      { key: "A", text: "Yes — it exceeds 5% of the loan amount ($2,500)" },
      { key: "B", text: "No — points and fees under $4,000 are always fine" },
      { key: "C", text: "Only if the APR trigger is also met" },
      { key: "D", text: "No — the 5% test only applies over $100,000" },
    ],
    answer: "A",
    explanation:
      "For loans of $40,000 or more, the threshold is 5% of the loan amount. 5% of $50,000 is $2,500 — $2,700 crosses it, so the loan is high-cost. Either trigger alone is enough.",
  },
  {
    id: "disclosures",
    kind: "content",
    eyebrow: "THE ESSENTIALS",
    label: "THE THREE-DAY RULE",
    lead: "For every high-cost loan, these reach the borrower at least three business days before closing:",
    bullets: [
      { title: "The right-to-walk notice", text: "“you are not required to complete this loan…”" },
      { title: "A housing-counseling notice", text: "with a list of approved agencies near the borrower" },
      { title: "Prepayment-penalty terms", text: "clearly stated, if the loan has one" },
    ],
    note: "The borrower signs an acknowledgment — and you keep it for at least three years.",
  },
  {
    id: "flipping",
    kind: "content",
    eyebrow: "THE ESSENTIALS",
    label: "NOT JUST HIGH-COST LOANS",
    lead: "Some rules apply to ALL home loans, high-cost or not. The big one is flipping.",
    bullets: [
      { title: "Flipping", text: "repeat refinancing with no reasonable, tangible net benefit" },
      { title: "Encouraging default", text: "steering a borrower to default before a refinance" },
      { title: "Financing single-premium credit insurance", text: "rolled into the loan" },
    ],
    note: "Every refinance needs a documented tangible-net-benefit analysis in the file.",
  },
  {
    id: "net-benefit",
    kind: "comparison",
    eyebrow: "THE ESSENTIALS",
    label: "TANGIBLE NET BENEFIT",
    lead: "Same paperwork. Completely different for the borrower.",
    left: {
      title: "A flip",
      tone: "ink",
      items: [
        "New fees, little else changes",
        "Rate and payment roughly the same",
        "The benefit runs mainly to the originator",
      ],
    },
    right: {
      title: "A real refinance",
      tone: "accent",
      items: [
        "Lower rate or payment, or a shorter term",
        "Debt consolidation or a more stable product",
        "Eliminates a balloon or prepayment penalty",
      ],
    },
    note: "If you can't name the benefit, you can't originate the loan.",
  },
  {
    id: "check-all-loans",
    kind: "check",
    eyebrow: "KNOWLEDGE CHECK",
    question:
      "Which practice is prohibited on ALL Connecticut home loans — not just high-cost ones?",
    choices: [
      { key: "A", text: "Repeatedly refinancing with no tangible net benefit (flipping)" },
      { key: "B", text: "Charging a rate above the prime rate" },
      { key: "C", text: "Requiring private mortgage insurance" },
      { key: "D", text: "Offering a 30-year fixed mortgage" },
    ],
    answer: "A",
    explanation:
      "Loan flipping is barred for every home loan under §36a-746e. The other three are ordinary, lawful features when properly disclosed.",
  },
  {
    id: "consequences",
    kind: "content",
    eyebrow: "THE ESSENTIALS",
    label: "CONSEQUENCES & YOUR ROLE",
    lead: "The Act has teeth — and puts the originator on the front line.",
    bullets: [
      { title: "Civil liability", text: "actual, statutory, and punitive damages, plus attorney's fees" },
      { title: "Defense to foreclosure", text: "a violation can be raised by the borrower" },
      { title: "Regulatory action", text: "the Banking Commissioner can fine, suspend, or revoke licenses" },
      { title: "Three-year window", text: "statute of limitations runs from closing" },
    ],
    note: "Your job: identify high-cost loans, disclose on time, avoid prohibited terms, document everything.",
  },
  {
    id: "check-penalty",
    kind: "check",
    eyebrow: "KNOWLEDGE CHECK",
    question:
      "What is the maximum prepayment penalty in the SECOND year of a high-cost loan?",
    choices: [
      { key: "A", text: "2% of the outstanding balance" },
      { key: "B", text: "3% of the outstanding balance" },
      { key: "C", text: "5% of the outstanding balance" },
      { key: "D", text: "Prepayment penalties are always banned" },
    ],
    answer: "A",
    explanation:
      "The ladder is 3% / 2% / 1% across years one, two, and three — then nothing after 36 months.",
  },
  {
    id: "final-exam",
    kind: "exam",
    eyebrow: "FINAL EXAM",
    title: "Five questions",
    intro: "One best answer each. Score 4 of 5 to pass.",
    passScore: 4,
    questions: [
      {
        id: "q1",
        prompt: "The APR trigger for a FIRST-lien high-cost loan is the comparable Treasury yield plus…",
        choices: [
          { key: "A", text: "8 percentage points" },
          { key: "B", text: "5 percentage points" },
          { key: "C", text: "9 percentage points" },
          { key: "D", text: "3 percentage points" },
        ],
        answer: "A",
      },
      {
        id: "q2",
        prompt: "Required high-cost disclosures must be delivered…",
        choices: [
          { key: "A", text: "At least three business days before closing" },
          { key: "B", text: "At application" },
          { key: "C", text: "At the closing table" },
          { key: "D", text: "Within 24 hours of application" },
        ],
        answer: "A",
      },
      {
        id: "q3",
        prompt: "Which feature is prohibited on a high-cost loan?",
        choices: [
          { key: "A", text: "Negative amortization" },
          { key: "B", text: "A fixed interest rate" },
          { key: "C", text: "An escrow account" },
          { key: "D", text: "A monthly payment schedule" },
        ],
        answer: "A",
      },
      {
        id: "q4",
        prompt: "The statute of limitations for an action under the Act is…",
        choices: [
          { key: "A", text: "Three years from closing" },
          { key: "B", text: "One year from closing" },
          { key: "C", text: "Five years from closing" },
          { key: "D", text: "Two years from discovery" },
        ],
        answer: "A",
      },
      {
        id: "q5",
        prompt: "A tangible-net-benefit analysis is required…",
        choices: [
          { key: "A", text: "For every refinance" },
          { key: "B", text: "Only for high-cost loans" },
          { key: "C", text: "Only when the borrower asks" },
          { key: "D", text: "Only above $417,000" },
        ],
        answer: "A",
      },
    ],
  },
  {
    id: "completion",
    kind: "completion",
    eyebrow: "COURSE COMPLETE",
    title: "You've got the essentials.",
    subtitle: "Spot it. Disclose it. Document it.",
    lines: [
      "You can identify a high-cost loan on either trigger.",
      "You know the prohibited terms and the penalty ladder.",
      "You can name the benefit behind every refinance.",
    ],
    author: "Connecticut Mortgage Compliance — Essentials",
  },
];
