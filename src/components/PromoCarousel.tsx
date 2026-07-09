"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./PromoCarousel.module.css";

type GallerySlide = {
  title: string;
  src: string;
  alt: string;
};

const slides: GallerySlide[] = [
  {
    title: "Benvenuti da TORRA",
    src: "/images/gallery/pizza-crust-olives.webp",
    alt: "Chrupiąca krawędź pizzy z oliwkami",
  },
  {
    title: "Pizza al Sole",
    src: "/images/gallery/pizza-pepperoni-basil.webp",
    alt: "Pizza pepperoni ze świeżą bazylią",
  },
  {
    title: "Panino in Frame",
    src: "/images/gallery/panino-salami-ricotta.webp",
    alt: "Włoska kanapka z salami i rukolą",
  },
  {
    title: "TORRA by Night",
    src: "/images/gallery/pizza-interior-street-view.webp",
    alt: "Pizza w przytulnym wnętrzu Torra",
  },
  {
    title: "Menu Mood",
    src: "/images/gallery/promo-sandwich-subscription.webp",
    alt: "Włoska kanapka na abonament",
  },
  {
    title: "Board Selection",
    src: "/images/gallery/panini-board-assortment.webp",
    alt: "Asortyment świeżych kanapek",
  },
  {
    title: "Loaded & Glossy",
    src: "/images/gallery/loaded-fries-bowl.webp",
    alt: "Frytki z sosem i posypką",
  },
  {
    title: "Panino Plate",
    src: "/images/gallery/panino-plate-interior.webp",
    alt: "Kanapka podana w lokalu",
  },
];

export function PromoCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSlide = slides[activeIndex];

  return (
    <div className={styles.galleryShell}>
      <figure className={styles.galleryStage}>
        <Image
          src={activeSlide.src}
          alt={activeSlide.alt}
          width={1600}
          height={1200}
          priority
          className={styles.galleryImage}
          sizes="(max-width: 1024px) 100vw, 62vw"
        />

        <figcaption className={styles.galleryOverlay}>
          <span className={styles.galleryEyebrow}>TORRA / gallery</span>
          <h3 className={styles.galleryTitle}>{activeSlide.title}</h3>
          <div className={styles.galleryMeta}>
            <span>{String(activeIndex + 1).padStart(2, "0")}</span>
            <span>08</span>
          </div>
        </figcaption>
      </figure>

      <aside className={styles.galleryRail}>
        <div className={styles.galleryIntro}>
          <p className={styles.galleryRailEyebrow}>Wybrane kadry</p>
          <h2 className={styles.galleryRailTitle}>Wybrane kadry</h2>
        </div>

        <div className={styles.thumbGrid}>
          {slides.map((slide, index) => (
            <button
              key={slide.src}
              type="button"
              className={`${styles.thumbCard} ${index === activeIndex ? styles.thumbCardActive : ""}`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Pokaż slajd: ${slide.title}`}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                width={520}
                height={390}
                className={styles.thumbImage}
                sizes="(max-width: 1024px) 45vw, 220px"
              />
              <span className={styles.thumbCopy}>
                <strong>{slide.title}</strong>
                <small>{String(index + 1).padStart(2, "0")}</small>
              </span>
            </button>
          ))}
        </div>
      </aside>
    </div>
  );
}
