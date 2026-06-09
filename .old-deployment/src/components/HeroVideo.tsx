"use client";

import { useEffect, useRef } from "react";
import styles from "../app/page.module.css";

type HeroVideoProps = {
  src: string;
};

export function HeroVideo({ src }: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (prefersReducedMotion.matches) {
      video.pause();
      video.removeAttribute("autoplay");
      return;
    }

    // iOS Safari wymaga explicit .play() i muted jako właściwości JS
    video.muted = true;
    video.playsInline = true;
    video.autoplay = true;

    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Autoplay zablokowane — fallback na poster
      });
    }
  }, []);

  return (
    <div className={styles.heroMediaFrame}>
      <video
        ref={videoRef}
        className={styles.heroMedia}
        muted
        loop
        playsInline
        preload="auto"
        poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1'%3E%3Crect fill='%23140e0a' width='1' height='1'/%3E%3C/svg%3E"
      >
        <source src={src} type="video/mp4" />
      </video>
      <div className={styles.heroMediaOverlay} />
    </div>
  );
}
