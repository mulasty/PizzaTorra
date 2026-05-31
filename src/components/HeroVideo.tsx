"use client";

import { useEffect, useRef } from "react";
import styles from "../app/page.module.css";

type HeroVideoProps = {
  src: string;
};

export function HeroVideo({ src }: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (prefersReducedMotion.matches) {
      const video = videoRef.current;
      if (video) {
        video.pause();
        video.removeAttribute("autoplay");
      }
    }
  }, []);

  return (
    <div className={styles.heroMediaFrame}>
      <video
        ref={videoRef}
        className={styles.heroMedia}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/pizzatorra/pizza-1.jpeg"
      >
        <source src={src} type="video/mp4" />
      </video>
      <div className={styles.heroMediaOverlay} />
    </div>
  );
}
