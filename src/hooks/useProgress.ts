import { useCallback, useEffect, useState } from "react";

// Lightweight per-browser progress tracking. Completed module ids are stored
// in localStorage so the learner can leave and resume. No backend required —
// swap the load/persist pair for an API later if you want cross-device sync.
const STORAGE_KEY = "loan-estimate-course-progress";

function load(): string[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as string[]) : [];
  } catch {
    return [];
  }
}

export function useProgress() {
  const [completed, setCompleted] = useState<string[]>([]);

  // Read once on mount (avoids SSR/hydration issues with localStorage).
  useEffect(() => {
    setCompleted(load());
  }, []);

  const persist = useCallback((next: string[]) => {
    setCompleted(next);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      // Ignore storage failures (private mode, quota, etc.).
    }
  }, []);

  const toggle = useCallback(
    (id: string) => {
      setCompleted((prev) => {
        const next = prev.includes(id)
          ? prev.filter((x) => x !== id)
          : [...prev, id];
        try {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
        } catch {
          // Ignore storage failures.
        }
        return next;
      });
    },
    []
  );

  const isComplete = useCallback(
    (id: string) => completed.includes(id),
    [completed]
  );

  return { completed, toggle, isComplete, persist };
}
