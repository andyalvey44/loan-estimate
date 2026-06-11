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
  sections: [intro, section1, section2, section3, section4, section5],
};

export type { Course } from "./types";
