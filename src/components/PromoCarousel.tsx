"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./PromoCarousel.module.css";

type GallerySlide = {
  title: string;
  note: string;
  src: string;
  alt: string;
  accent: string;
};

const slides: GallerySlide[] = [
  {
    title: "Benvenuti da TORRA",
    note: "Pierwszy kadr kolekcji: ciasto, skórka i światło o zmierzchu.",
    src: "/images/gallery/pizza-crust-olives.webp",
    alt: "Chrupiąca krawędź pizzy z oliwkami",
    accent: "Pizza / Detail",
  },
  {
    title: "Pizza al Sole",
    note: "Mocny kolor, świeża bazylia i premium kontrast na stole.",
    src: "/images/gallery/pizza-pepperoni-basil.webp",
    alt: "Pizza pepperoni ze świeżą bazylią",
    accent: "Hero / Food",
  },
  {
    title: "Panino in Frame",
    note: "Szybki lunch, ale z editorialnym światłem i detalem.",
    src: "/images/gallery/panino-salami-ricotta.webp",
    alt: "Włoska kanapka z salami i rukolą",
    accent: "Lunch / Close-up",
  },
  {
    title: "TORRA by Night",
    note: "Wnętrze i klimat lokalu w bardziej filmowym ujęciu.",
    src: "/images/gallery/pizza-interior-street-view.webp",
    alt: "Pizza w przytulnym wnętrzu Torra",
    accent: "Interior / Mood",
  },
  {
    title: "Menu Mood",
    note: "Warstwowy set dla apetytu i dobrego pierwszego wrażenia.",
    src: "/images/gallery/promo-sandwich-subscription.webp",
    alt: "Włoska kanapka na abonament",
    accent: "Offer / Story",
  },
  {
    title: "Board Selection",
    note: "Kompozycja z wielu elementów wygląda jak zdjęcie z magazynu.",
    src: "/images/gallery/panini-board-assortment.webp",
    alt: "Asortyment świeżych kanapek",
    accent: "Selection / Board",
  },
  {
    title: "Loaded & Glossy",
    note: "Przekąska jako mocny akcent między głównymi kadrami.",
    src: "/images/gallery/loaded-fries-bowl.webp",
    alt: "Frytki z sosem i posypką",
    accent: "Snack / Texture",
  },
  {
    title: "Panino Plate",
    note: "Lekka, ciepła plansza dla równowagi całego setu.",
    src: "/images/gallery/panino-plate-interior.webp",
    alt: "Kanapka podana w lokalu",
    accent: "Plate / Warmth",
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
          <span className={styles.galleryEyebrow}>Photo story</span>
          <h3 className={styles.galleryTitle}>{activeSlide.title}</h3>
          <p className={styles.galleryNote}>{activeSlide.note}</p>
          <div className={styles.galleryMeta}>
            <span>{activeSlide.accent}</span>
            <span>Tap / hover to switch</span>
          </div>
        </figcaption>
      </figure>

      <aside className={styles.galleryRail}>
        <div className={styles.galleryIntro}>
          <p className={styles.galleryRailEyebrow}>Galeria TORRA</p>
          <h2 className={styles.galleryRailTitle}>Editorial look zamiast zwykłego slidera</h2>
          <p className={styles.galleryRailText}>
            Mocniejsza typografia, selekcja najlepszych kadrów i szybki przełącznik
            obrazów. To wygląda bardziej jak premium lookbook niż prosta galeria.
          </p>
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
                <small>{slide.accent}</small>
              </span>
            </button>
          ))}
        </div>
      </aside>
    </div>
  );
}
