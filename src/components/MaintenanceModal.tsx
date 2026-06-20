"use client";

import { useState, useEffect } from "react";
import styles from "./MaintenanceModal.module.css";

function getTimeLeft() {
  const target = new Date(2026, 5, 23, 0, 0, 0).getTime();
  const now = Date.now();
  const diff = target - now;

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export function MaintenanceModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    setIsOpen(true);
    document.body.style.overflow = "hidden";

    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => {
      document.body.style.overflow = "";
      clearInterval(timer);
    };
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    document.body.style.overflow = "";
  };

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} role="dialog" aria-modal="true">
      <div className={styles.modal}>
        <button
          className={styles.closeButton}
          onClick={handleClose}
          aria-label="Zamknij"
          type="button"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <div className={styles.icon}>🍕</div>
        <h2 className={styles.title}>WRACAMY 23.06.2026</h2>
        <p className={styles.subtitle}>Trwa przerwa techniczna</p>

        <div className={styles.countdown}>
          <div className={styles.countdownItem}>
            <span className={styles.countdownValue}>{timeLeft.days}</span>
            <span className={styles.countdownLabel}>dni</span>
          </div>
          <div className={styles.countdownItem}>
            <span className={styles.countdownValue}>{String(timeLeft.hours).padStart(2, "0")}</span>
            <span className={styles.countdownLabel}>godz.</span>
          </div>
          <div className={styles.countdownItem}>
            <span className={styles.countdownValue}>{String(timeLeft.minutes).padStart(2, "0")}</span>
            <span className={styles.countdownLabel}>min</span>
          </div>
          <div className={styles.countdownItem}>
            <span className={styles.countdownValue}>{String(timeLeft.seconds).padStart(2, "0")}</span>
            <span className={styles.countdownLabel}>sek</span>
          </div>
        </div>

        <div className={styles.body}>
          <p>
            Przygotowujemy dla Was nową odsłonę Torry.
          </p>
          <p>
            Odświeżamy menu, rozwijamy ofertę i pracujemy nad wyjątkowymi
            produktami, które już wkrótce pojawią się w naszej pizzerii.
          </p>

          <ul className={styles.highlights}>
            <li>✨ Nowe smaki</li>
            <li>✨ Nowe produkty</li>
            <li>✨ Jeszcze lepsza jakość</li>
          </ul>

          <p>
            Dziękujemy za cierpliwość i zaufanie.
          </p>
          <p>
            Do zobaczenia już <strong>23 czerwca 2026</strong>!
          </p>
        </div>

        <p className={styles.footer}>
          Zespół Torra <span className={styles.heart}>❤️</span> <span className={styles.pizza}>🍕</span>
        </p>
      </div>
    </div>
  );
}
