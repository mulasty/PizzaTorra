"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import styles from "./PromoCarousel.module.css";

type Slide =
  | { type: "image"; src: string; alt: string }
  | { type: "video"; src: string; alt: string };

const slides: Slide[] = [
  {
    type: "image",
    src: "/images/gallery/pizza-crust-olives.webp",
    alt: "Chrupiąca krawędź pizzy z oliwkami",
  },
  {
    type: "image",
    src: "/images/gallery/pizza-pepperoni-basil.webp",
    alt: "Pizza pepperoni ze świeżą bazylią",
  },
  {
    type: "image",
    src: "/images/gallery/panino-salami-ricotta.webp",
    alt: "Włoska kanapka z salami i rukolą",
  },
  {
    type: "image",
    src: "/images/gallery/pizza-interior-street-view.webp",
    alt: "Pizza w przytulnym wnętrzu Torra",
  },
  {
    type: "image",
    src: "/images/gallery/promo-sandwich-subscription.webp",
    alt: "Włoska kanapka na abonament",
  },
  {
    type: "image",
    src: "/images/gallery/panino-plate-interior.webp",
    alt: "Kanapka podana w lokalu",
  },
  {
    type: "image",
    src: "/images/gallery/panini-board-assortment.webp",
    alt: "Asortyment świeżych kanapek",
  },
  {
    type: "image",
    src: "/images/gallery/loaded-fries-bowl.webp",
    alt: "Frytki z sosem i posypką",
  },
  {
    type: "video",
    src: "/videos/gallery/pizza-pepperoni-spin.mp4",
    alt: "Pizza pepperoni z bliska",
  },
  {
    type: "video",
    src: "/videos/gallery/pizza-pepperoni-slice-basil.mp4",
    alt: "Krojenie pizzy pepperoni",
  },
];

export function PromoCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center", skipSnaps: false },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi]
  );

  return (
    <div className={styles.carousel}>
      <div className={styles.viewport} ref={emblaRef}>
        <div className={styles.container}>
          {slides.map((slide, i) => (
            <div className={styles.slide} key={i}>
              {slide.type === "video" ? (
                <video
                  src={slide.src}
                  aria-label={slide.alt}
                  className={styles.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                />
              ) : (
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  width={1200}
                  height={900}
                  sizes="(max-width: 700px) calc(100vw - 56px), (max-width: 1180px) 92vw, 1200px"
                  className={styles.image}
                  priority={i === 0}
                  loading={i === 0 ? undefined : "lazy"}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      <div className={styles.footer}>
        <div className={styles.controls}>
          <button
            type="button"
            className={styles.button}
            onClick={scrollPrev}
            aria-label="Poprzednie"
          >
            â€ą
          </button>

          <div className={styles.dots}>
            {scrollSnaps.map((_, i) => (
              <button
                key={i}
                type="button"
                className={`${styles.dot} ${i === selectedIndex ? styles.dotActive : ""}`}
                onClick={() => scrollTo(i)}
                aria-label={`PrzejdĹş do slajdu ${i + 1}`}
              />
            ))}
          </div>

          <button
            type="button"
            className={styles.button}
            onClick={scrollNext}
            aria-label="NastÄ™pne"
          >
            â€ş
          </button>
        </div>
      </div>
    </div>
  );
}
