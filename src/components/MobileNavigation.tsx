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
        aria-hidden={!mobileMenuOpen}
      >
        <div className={styles.mobileMenuPanel}>
          <a href="#top" onClick={closeMobileMenu} tabIndex={mobileMenuOpen ? 0 : -1}>TORRA</a>
          <a href="#promocje" onClick={closeMobileMenu} tabIndex={mobileMenuOpen ? 0 : -1}>PROMOCJE</a>
          <a href="#full-menu" onClick={closeMobileMenu} tabIndex={mobileMenuOpen ? 0 : -1}>MENU</a>
          <a href="#eventy" onClick={closeMobileMenu} tabIndex={mobileMenuOpen ? 0 : -1}>EVENTY</a>
          <a href="#kontakt" onClick={closeMobileMenu} tabIndex={mobileMenuOpen ? 0 : -1}>KONTAKT</a>
        </div>
      </div>
    </>
  );
}
