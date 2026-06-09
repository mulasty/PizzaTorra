"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import styles from "./PromoCarousel.module.css";

const slides = [
  {
    src: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=1200&q=85",
    alt: "Włoska pizza na stole w restauracji",
  },
  {
    src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&q=85",
    alt: "Pięknie podane danie kuchni włoskiej",
  },
  {
    src: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1200&q=85",
    alt: "Pizza z rukolą i parmezanem",
  },
  {
    src: "https://images.unsplash.com/photo-1579751626657-72bc17010498?w=1200&q=85",
    alt: "Kawa espresso w filiżance",
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
              <Image
                src={slide.src}
                alt={slide.alt}
                width={1200}
                height={800}
                sizes="(max-width: 700px) calc(100vw - 56px), (max-width: 1180px) 92vw, 1200px"
                className={styles.image}
                priority={i === 0}
                loading={i === 0 ? undefined : "lazy"}
              />
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
            ‹
          </button>

          <div className={styles.dots}>
            {scrollSnaps.map((_, i) => (
              <button
                key={i}
                type="button"
                className={`${styles.dot} ${i === selectedIndex ? styles.dotActive : ""}`}
                onClick={() => scrollTo(i)}
                aria-label={`Przejdź do slajdu ${i + 1}`}
              />
            ))}
          </div>

          <button
            type="button"
            className={styles.button}
            onClick={scrollNext}
            aria-label="Następne"
          >
            ›
          </button>
        </div>
      </div>
    </div>
  );
}
