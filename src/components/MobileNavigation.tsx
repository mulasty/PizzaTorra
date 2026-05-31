"use client";

import { useEffect, useState } from "react";
import styles from "../app/page.module.css";

export function MobileNavigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerActions}>
          <button
            type="button"
            className={styles.mobileMenuButton}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={mobileMenuOpen ? "Zamknij menu" : "Otwórz menu"}
            onClick={() => setMobileMenuOpen((open) => !open)}
          >
            {mobileMenuOpen ? "\u00D7" : "\u2630"}
          </button>
        </div>
      </header>

      <div
        id="mobile-menu"
        className={`${styles.mobileMenu} ${mobileMenuOpen ? styles.mobileMenuOpen : ""}`}
      >
        <div className={styles.mobileMenuPanel}>
          <a href="#top" onClick={closeMobileMenu}>TORRA</a>
          <a href="#promocje" onClick={closeMobileMenu}>PROMOCJE</a>
          <a href="#full-menu" onClick={closeMobileMenu}>MENU</a>
          <a href="#eventy" onClick={closeMobileMenu}>EVENTY</a>
          <a href="#kontakt" onClick={closeMobileMenu}>KONTAKT</a>
        </div>
      </div>
    </>
  );
}
