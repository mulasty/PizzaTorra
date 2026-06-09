"use client";

import { useEffect } from "react";

export function ParallaxEffect() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (prefersReducedMotion.matches) {
      return;
    }

    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("[data-parallax-section]"),
    );

    if (!sections.length) {
      return;
    }

    let frame = 0;

    const updateParallax = () => {
      const viewportHeight = window.innerHeight;

      for (const section of sections) {
        const rect = section.getBoundingClientRect();
        const speed = Number(section.dataset.parallaxSpeed ?? 0.18);
        const distanceFromCenter = rect.top + rect.height / 2 - viewportHeight / 2;
        const shift = Math.max(-88, Math.min(88, distanceFromCenter * -speed));
        section.style.setProperty("--parallax-shift", `${shift.toFixed(2)}px`);
      }

      frame = 0;
    };

    const requestUpdate = () => {
      if (!frame) {
        frame = window.requestAnimationFrame(updateParallax);
      }
    };

    updateParallax();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      if (frame) {
        window.cancelAnimationFrame(frame);
      }
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, []);

  return null;
}
