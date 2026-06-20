"use client";

import { useState, useEffect } from "react";
import styles from "./MaintenanceModal.module.css";

export function MaintenanceModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} role="dialog" aria-modal="true">
      <div className={styles.modal}>
        <div className={styles.icon}>🍕</div>
        <h2 className={styles.title}>WRACAMY 23.06.2026</h2>
        <p className={styles.subtitle}>Trwa przerwa techniczna</p>

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
