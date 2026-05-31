"use client";

import { useEffect, useState } from "react";
import styles from "../app/page.module.css";

type HeroVideoProps = {
  src: string;
};

export function HeroVideo({ src }: HeroVideoProps) {
  const [heroVideoEnabled, setHeroVideoEnabled] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (prefersReducedMotion.matches) {
      return;
    }

    const isMobileViewport = window.matchMedia("(max-width: 700px)").matches;
    const timeoutId = window.setTimeout(
      () => setHeroVideoEnabled(true),
      isMobileViewport ? 1800 : 900,
    );

    return () => window.clearTimeout(timeoutId);
  }, []);

  return (
    <div className={styles.heroMediaFrame}>
      <video
        className={styles.heroMedia}
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        poster="/pizzatorra/pizza-1.jpeg"
      >
        {heroVideoEnabled ? <source src={src} type="video/mp4" /> : null}
      </video>
      <div className={styles.heroMediaOverlay} />
    </div>
  );
}
