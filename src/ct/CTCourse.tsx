import { useEffect } from "react";
import { SlideDeck } from "./SlideDeck";
import { slides, courseTitle } from "./content";

export default function CTCourse() {
  useEffect(() => {
    const prev = document.title;
    document.title = courseTitle;
    return () => {
      document.title = prev;
    };
  }, []);

  return <SlideDeck slides={slides} />;
}
