"use client";

import { useEffect, useRef } from "react";
import { animateValue } from "@/shared/lib/counterAnimation";

export const useCounterAnimation = (finalValue: number) => {
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add("count-animated");
          animateValue(element, 0, finalValue, 600);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [finalValue]);

  return ref;
};
