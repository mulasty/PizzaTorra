﻿"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  eventOffer,
  menuCategories,
  menuDownload,
} from "@/content/menu";
import type { MenuCategory, MenuItem } from "@/content/menu";
import { mapEmbed, mapLink, siteConfig } from "@/content/site";
import styles from "./page.module.css";

type MusicTrack = {
  title: string;
  src: string;
};

const phoneDisplay = siteConfig.phoneDisplay;
const phoneHref = siteConfig.phoneHref;
const emailDisplay = siteConfig.email;
const emailHref = `mailto:${siteConfig.email}`;
const heroVideoSrc = siteConfig.heroVideo;
const googleMapsUrl = siteConfig.google.googleMapsUrl;
const googleReviewsUrl = siteConfig.google.googleReviewsUrl;
const googleReviewUrl = siteConfig.google.googleReviewUrl;
const heroHoursDisplay = siteConfig.openingHours.value.map((item) => item.label);

const quickActions = [
  { icon: "☎", label: phoneDisplay, note: "Zadzwoń i zamów", href: phoneHref },
  { icon: "🍕", label: "Menu", note: "Pizza 31,5 / 45 cm", href: "#full-menu" },
  { icon: "📍", label: "Trasa", note: "Feniks Hala Targowa", href: googleMapsUrl },
  { icon: "⏱", label: "Godziny", note: "pn-pt 11-21 • sob-nd 12-24", href: "#kontakt" },
];

const promotionBanner = {
  src: "/promo-monday-light.webp",
  alt: "Promocja TORRA: każdy poniedziałek druga duża pizza -50%",
};

const torraTracks: MusicTrack[] = [
  { title: "Benvenuti da TORRA", src: "/musica/track-01.mp3" },
  { title: "Pizza al Sole", src: "/musica/track-02.mp3" },
  { title: "Caffè di Ostrołęka", src: "/musica/track-03.mp3" },
  { title: "Forno e Cuore", src: "/musica/track-04.mp3" },
  { title: "Passeggiata Italiana", src: "/musica/track-05.mp3" },
  { title: "Mozzarella & Vino", src: "/musica/track-06.mp3" },
  { title: "La Piazza delle Stelle", src: "/musica/track-07.mp3" },
  { title: "Dolce Tiramisu", src: "/musica/track-08.mp3" },
  { title: "Notte al Forno", src: "/musica/track-09.mp3" },
  { title: "Arrivederci TORRA", src: "/musica/track-10.mp3" },
];

const menuColumnIds = [
  ["pizza", "desery", "kawa"],
  ["insalate", "panuozzo", "zapiekanka", "dodatki", "napoje"],
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "@id": siteConfig.url,
  name: siteConfig.name,
  alternateName: siteConfig.legalName,
  url: siteConfig.url,
  image: `${siteConfig.url}${siteConfig.ogImage}`,
  logo: `${siteConfig.url}${siteConfig.logo}`,
  telephone: siteConfig.phoneDisplay,
  email: siteConfig.email,
  priceRange: siteConfig.priceRange,
  servesCuisine: siteConfig.cuisines,
  areaServed: siteConfig.address.addressLocality,
  menu: `${siteConfig.url}#full-menu`,
  hasMenu: `${siteConfig.url}#full-menu`,
  hasMap: mapLink,
  sameAs: [googleMapsUrl],
  openingHours: siteConfig.openingHours.value.map((item) => item.schema),
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address.streetAddress,
    addressLocality: siteConfig.address.addressLocality,
    postalCode: siteConfig.address.postalCode,
    addressCountry: siteConfig.address.addressCountry,
  },
};

export default function Page() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [musicPlayerOpen, setMusicPlayerOpen] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [musicPlaying, setMusicPlaying] = useState(false);
  const [heroVideoEnabled, setHeroVideoEnabled] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (prefersReducedMotion.matches) {
      return;
    }

    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("[data-parallax-section]"),
    );

    if (!sections.length) {
      return;
    }

    let frame = 0;

    const updateParallax = () => {
      const viewportHeight = window.innerHeight;

      for (const section of sections) {
        const rect = section.getBoundingClientRect();
        const speed = Number(section.dataset.parallaxSpeed ?? 0.18);
        const distanceFromCenter = rect.top + rect.height / 2 - viewportHeight / 2;
        const shift = Math.max(-88, Math.min(88, distanceFromCenter * -speed));
        section.style.setProperty("--parallax-shift", `${shift.toFixed(2)}px`);
      }

      frame = 0;
    };

    const requestUpdate = () => {
      if (!frame) {
        frame = window.requestAnimationFrame(updateParallax);
      }
    };

    updateParallax();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      if (frame) {
        window.cancelAnimationFrame(frame);
      }
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (prefersReducedMotion.matches) {
      return;
    }

    const isMobileViewport = window.matchMedia("(max-width: 700px)").matches;
    const timeoutId = window.setTimeout(
      () => setHeroVideoEnabled(true),
      isMobileViewport ? 1800 : 900,
    );

    return () => window.clearTimeout(timeoutId);
  }, []);

  const menuColumns = menuColumnIds.map((column) =>
    column
      .map((id) => menuCategories.find((category) => category.id === id))
      .filter((category): category is MenuCategory => Boolean(category)),
  );

  const renderMenuItems = (items: MenuItem[]) =>
    items.map((item) => (
      <article key={item.name} className={styles.menuItemCard}>
        {item.badge ? <span className={styles.menuItemBadge}>{item.badge}</span> : null}
        <div className={styles.menuItemLead}>
          <h4>{item.name}</h4>
          <span className={styles.menuItemDots} aria-hidden="true" />
          <strong>{item.price}</strong>
        </div>
        {item.details ? <p>{item.details}</p> : null}
      </article>
    ));

  const renderMenuSections = (category: MenuCategory) => {
    if (category.sections) {
      return category.sections.map((section) => (
        <section key={section.title} className={styles.menuSubsection}>
          <div className={styles.menuSubsectionHeader}>
            <h4>{section.title}</h4>
            {section.description ? <p>{section.description}</p> : null}
          </div>
          <div className={styles.menuSubsectionList}>{renderMenuItems(section.items)}</div>
        </section>
      ));
    }

    return <div className={styles.menuSubsectionList}>{renderMenuItems(category.items ?? [])}</div>;
  };

  const renderMenuCategory = (category: MenuCategory) => (
    <section key={category.id} className={styles.menuCategoryCard}>
      <div className={styles.menuCategoryHeading}>
        <div className={styles.menuCategoryHeadingLine} aria-hidden="true" />
        <div>
          <h3>{category.title}</h3>
          {category.badge ? <span className={styles.menuCategoryBadge}>{category.badge}</span> : null}
        </div>
        <div className={styles.menuCategoryHeadingLine} aria-hidden="true" />
      </div>
      <p className={styles.menuCategoryDescription}>{category.description}</p>
      <div className={styles.menuCategoryBody}>{renderMenuSections(category)}</div>
    </section>
  );

  const closeMobileMenu = () => setMobileMenuOpen(false);
  const currentTrack = torraTracks[currentTrackIndex];

  const playTrack = async (trackIndex = currentTrackIndex) => {
    const audio = audioRef.current;
    if (!audio) {
      return;
    }

    setCurrentTrackIndex(trackIndex);

    if (audio.src !== new URL(torraTracks[trackIndex].src, window.location.href).href) {
      audio.src = torraTracks[trackIndex].src;
    }

    try {
      await audio.play();
      setMusicPlaying(true);
    } catch {
      setMusicPlaying(false);
    }
  };

  const toggleMusic = async () => {
    const audio = audioRef.current;
    if (!audio) {
      return;
    }

    if (musicPlaying) {
      audio.pause();
      setMusicPlaying(false);
      return;
    }

    await playTrack();
  };

  const selectTrack = async (trackIndex: number) => {
    await playTrack(trackIndex);
  };

  const skipTrack = async (direction: 1 | -1) => {
    const nextTrackIndex =
      (currentTrackIndex + direction + torraTracks.length) % torraTracks.length;
    await playTrack(nextTrackIndex);
  };

  return (
    <main className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
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
            {mobileMenuOpen ? "×" : "☰"}
          </button>
        </div>
      </header>

      <div
        id="mobile-menu"
        className={`${styles.mobileMenu} ${mobileMenuOpen ? styles.mobileMenuOpen : ""}`}
      >
        <div className={styles.mobileMenuPanel}>
          <a href="#top" onClick={closeMobileMenu}>
            TORRA
          </a>
          <a href="#promocje" onClick={closeMobileMenu}>
            PROMOCJE
          </a>
          <a href="#full-menu" onClick={closeMobileMenu}>
            MENU
          </a>
          <a href="#eventy" onClick={closeMobileMenu}>
            EVENTY
          </a>
          <a href="#kontakt" onClick={closeMobileMenu}>
            KONTAKT
          </a>
        </div>
      </div>

      <section id="top" className={styles.hero}>
        <div className={styles.heroGrid}>
          <div className={styles.heroCopy}>
            <Image
              src={siteConfig.logo}
              alt="TORRA"
              width={220}
              height={220}
              className={styles.heroLogo}
              preload
            />
            <div className={styles.heroIntro}>
              <p className={styles.heroLabel}>Pizza • Caffè • Musica</p>
              <span className={styles.heroFlag} aria-hidden="true">
                <span className={styles.heroFlagStripeGreen} />
                <span className={styles.heroFlagStripeWhite} />
                <span className={styles.heroFlagStripeRed} />
              </span>
            </div>
            <h1 className={styles.heroTitle}>
              <span>Włoska pizza</span>
              <span>w Ostrołęce</span>
            </h1>
            <p className={styles.heroText}>
              Chrupiące ciasto według włoskiej receptury, caffè i klimat TORRA
              w Feniks Hala Targowa. Zamów telefonicznie albo wpadnij po włoski
              smak w samym sercu Ostrołęki.
            </p>

            <a href={phoneHref} className={styles.heroPhoneLink} aria-label={`Zadzwoń do TORRA: ${phoneDisplay}`}>
              <span>Zadzwoń i zamów</span>
              <strong>{phoneDisplay}</strong>
            </a>

            <div className={styles.heroInfoStrip} aria-label="Lokalizacja i godziny otwarcia TORRA">
              <span>Ostrołęka • Feniks Hala Targowa</span>
              {heroHoursDisplay.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>

            <div className={styles.heroActions}>
              <a href={phoneHref} className={styles.primaryButton} aria-label="Zadzwoń do TORRA i złóż zamówienie">
                Zadzwoń teraz
              </a>
              <a href="#full-menu" className={styles.secondaryButton} aria-label="Zobacz menu TORRA">
                Zobacz menu
              </a>
              <a
                href={mapLink}
                className={styles.ghostButton}
                aria-label="Otwórz dojazd do TORRA w Google Maps"
              >
                Wyznacz trasę
              </a>
            </div>

            <p className={styles.contactEmailLine}>
              Kontakt e-mail: <a href={emailHref}>{emailDisplay}</a>
            </p>
          </div>

          <div className={styles.heroVisual}>
            <div className={styles.heroMediaFrame}>
              <video
                className={styles.heroMedia}
                autoPlay
                muted
                loop
                playsInline
                preload="none"
                poster="/pizzatorra/pizza-1.jpeg"
              >
                {heroVideoEnabled ? <source src={heroVideoSrc} type="video/mp4" /> : null}
              </video>
              <div className={styles.heroMediaOverlay} />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.quickActionsSection}>
        <div className={styles.quickActionsWrap}>
          <div className={styles.quickActionsTrack}>
            {quickActions.map((action) => (
              <a
                key={action.label}
                href={action.href}
                className={styles.quickActionCard}
                aria-label={`${action.label} — ${action.note}`}
              >
                <span className={styles.quickActionIcon}>{action.icon}</span>
                <span className={styles.quickActionLabel}>{action.label}</span>
                <span className={styles.quickActionNote}>{action.note}</span>
              </a>
            ))}
          </div>

          <aside
            className={`${styles.musicPlayer} ${styles.quickActionPlayer} ${
              musicPlayerOpen ? styles.musicPlayerOpen : ""
            }`}
            aria-label="TORRA Musica"
          >
            <audio
              ref={audioRef}
              preload="none"
              onEnded={() => skipTrack(1)}
              onPause={() => setMusicPlaying(false)}
              onPlay={() => setMusicPlaying(true)}
            />

            <div className={styles.musicFlag} aria-hidden="true" />

            <button
              type="button"
              className={styles.musicToggle}
              aria-expanded={musicPlayerOpen}
              aria-label={musicPlayerOpen ? "Zwiń odtwarzacz TORRA Musica" : "Rozwiń odtwarzacz TORRA Musica"}
              onClick={() => setMusicPlayerOpen((open) => !open)}
            >
              <span className={styles.musicDisc}>
                <Image
                  src="/musica/torra-musica.webp"
                  alt=""
                  width={96}
                  height={96}
                  className={styles.musicDiscImage}
                  loading="lazy"
                  fetchPriority="low"
                />
              </span>
              <span className={styles.musicToggleText}>
                <span>TORRA Musica</span>
                <strong>{musicPlaying ? "Gra teraz" : "Sera Italiana"}</strong>
              </span>
              <span className={styles.musicToggleIcon}>{musicPlayerOpen ? "×" : "♪"}</span>
            </button>

            <div className={styles.musicPanel}>
              <div className={styles.musicPanelHeader}>
                <Image
                  src="/musica/torra-musica.webp"
                  alt="TORRA Musica Sera Italiana"
                  width={160}
                  height={160}
                  className={styles.musicCover}
                  loading="lazy"
                  fetchPriority="low"
                />
                <div>
                  <p>Playlist</p>
                  <h2>TORRA Musica</h2>
                  <span>Sera Italiana • 10 utworów</span>
                </div>
              </div>

              <div className={styles.musicNow}>
                <span>Teraz</span>
                <strong>{currentTrack.title}</strong>
              </div>

              <div className={styles.musicControls} aria-label="Sterowanie muzyką">
                <button type="button" onClick={() => skipTrack(-1)} aria-label="Poprzedni utwór">
                  ‹
                </button>
                <button
                  type="button"
                  className={styles.musicPlayButton}
                  onClick={toggleMusic}
                  aria-label={musicPlaying ? "Pauza" : "Odtwórz"}
                >
                  {musicPlaying ? "Pauza" : "Play"}
                </button>
                <button type="button" onClick={() => skipTrack(1)} aria-label="Następny utwór">
                  ›
                </button>
              </div>

              <div className={styles.musicTrackList}>
                {torraTracks.map((track, index) => (
                  <button
                    key={track.src}
                    type="button"
                    className={`${styles.musicTrackButton} ${
                      index === currentTrackIndex ? styles.musicTrackButtonActive : ""
                    }`}
                    onClick={() => selectTrack(index)}
                  >
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <strong>{track.title}</strong>
                  </button>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section id="promocje" className={styles.promoSection}>
        <div className={styles.sectionIntro}>
          <p className={styles.sectionEyebrow}>Promocje</p>
        </div>

        <div className={styles.promoSlider}>
          <div className={styles.promoSliderViewport}>
            <figure className={`${styles.promoSlide} ${styles.promoSlideActive}`}>
              <Image
                src={promotionBanner.src}
                alt={promotionBanner.alt}
                width={1536}
                height={1024}
                sizes="(max-width: 700px) calc(100vw - 56px), (max-width: 1180px) 92vw, 1200px"
                className={styles.promoVisualImage}
                loading="lazy"
                fetchPriority="low"
              />
            </figure>
          </div>
        </div>
      </section>

      <section
        id="marka"
        className={styles.whySection}
      >
        <div className={styles.sectionIntro}>
          <p className={styles.sectionEyebrow}>Dlaczego TORRA</p>
          <h2 className={styles.sectionTitle}>Dlaczego warto wybrać TORRA?</h2>
        </div>

        <div className={styles.brandDescriptionBlock}>
          <p>
            Zapach świeżo pieczonej pizzy, chrupiące ciasto i smaki, które naprawdę
            robią różnicę. W TORRA wszystko kręci się wokół tego, co najważniejsze:
            dobrej pizzy, prawdziwej włoskiej kawy i muzyki, która buduje klimat miejsca.
          </p>
          <p>
            Wchodzisz, zamawiasz i po prostu jesz - bez pośpiechu, bez zbędnych
            dodatków. Albo dzwonisz pod {phoneDisplay} i odbierasz pizzę wtedy,
            kiedy masz ochotę.
          </p>
          <p>
            TORRA to smak, który zostaje w głowie, i atmosfera, do której wraca się
            naturalnie.
          </p>
        </div>

      </section>

      <section id="full-menu" className={styles.menuSection}>
        <div className={styles.sectionIntro}>
          <p className={styles.sectionEyebrow}>Menu TORRA</p>
          <h2 className={styles.sectionTitle}>Wybierz smak i zamów telefonicznie</h2>
          <p className={styles.sectionText}>
            Pizza 31,5 cm i 45 cm, pizza sycylijska, panuozzo, insalate,
            desery, kawa i napoje. Ceny widzisz od razu, więc decyzja ma być szybka.
          </p>
          <p className={styles.contactEmailLine}>
            Zamówienia grupowe i pytania: <a href={emailHref}>{emailDisplay}</a>
          </p>
          <div className={styles.menuSalesActions}>
            <a href={phoneHref} className={styles.primaryButton} aria-label="Zadzwoń do TORRA i złóż zamówienie">
              Zadzwoń i zamów
            </a>
            <a
              href={menuDownload.href}
              className={styles.secondaryButton}
              target="_blank"
              rel="noreferrer"
              download
              aria-label="Pobierz pełne menu TORRA w PDF"
            >
              {menuDownload.label}
            </a>
          </div>
        </div>

          <div className={styles.menuShell}>
          <div className={styles.menuBoard}>
            <div className={styles.menuBoardHeader}>
              <div className={styles.menuBoardBrand}>
                <span className={styles.menuBoardAccent} aria-hidden="true" />
                <p>Pizza • Caffè • Musica</p>
                <h3>TORRA</h3>
                <span className={styles.menuBoardAccent} aria-hidden="true" />
              </div>
              <div className={styles.menuBoardDownload}>
                <p>Pełna karta do pobrania</p>
                <a href={menuDownload.href} target="_blank" rel="noreferrer" download>
                  {menuDownload.label}
                </a>
              </div>
            </div>

            <div className={styles.menuBoardColumns}>
              {menuColumns.map((column, columnIndex) => (
                <div key={`menu-column-${columnIndex}`} className={styles.menuBoardColumn}>
                  {column.map((category) => renderMenuCategory(category))}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.pdfRow}>
          <a
            href={menuDownload.href}
            className={styles.pdfButton}
            target="_blank"
            rel="noreferrer"
            download
          >
            {menuDownload.label}
          </a>
          <span className={styles.pdfHint}>
            Menu jest dostępne bezpośrednio na stronie i jako plik PDF do pobrania.
          </span>
        </div>
      </section>

      <section id="eventy" className={styles.eventSection}>
        <div className={styles.sectionIntro}>
          <p className={styles.sectionEyebrow}>Oferta eventowa</p>
          <h2 className={styles.sectionTitle}>{eventOffer.title}</h2>
          <p className={styles.sectionText}>
            Organizujemy eventy, spotkania i catering w klimacie TORRA, bez utraty
            premium charakteru miejsca.
          </p>
        </div>

        <div className={styles.eventGrid}>
          {eventOffer.items.map((item) => (
            <article key={item} className={styles.eventCard}>
              <h3>{item}</h3>
            </article>
          ))}
        </div>

        <div className={styles.sectionAction}>
          <a href={phoneHref} className={styles.secondaryButton}>
            Zarezerwuj telefonicznie
          </a>
          <a href={emailHref} className={styles.ghostButton}>
            {emailDisplay}
          </a>
        </div>
      </section>

      <section
        id="kontakt"
        className={`${styles.contactSection} ${styles.parallaxSection}`}
        data-parallax-section
        data-parallax-speed="0.16"
      >
        <div className={`${styles.parallaxBackground} ${styles.contactBackground}`} aria-hidden="true" />
        <div className={`${styles.sectionIntro} ${styles.contactIntro}`}>
          <p className={styles.sectionEyebrow}>Kontakt + mapa</p>
          <h2 className={styles.sectionTitle}>Kontakt i dojazd do TORRA</h2>
          <p className={styles.sectionText}>
            TORRA pizza • caffè • musica działa w Ostrołęce przy Generała Ignacego
            Prądzyńskiego 6 lokal B18, w Feniks Hala Targowa. Jeśli chcesz zamówić
            włoską pizzę, sprawdzić dojazd albo zapytać o catering i event, zadzwoń
            pod {phoneDisplay} lub otwórz trasę w Google Maps.
          </p>
          <p className={styles.contactEmailLine}>
            Napisz do nas: <a href={emailHref}>{emailDisplay}</a>
          </p>
          <div className={styles.contactButtons}>
            <a href={phoneHref} className={styles.primaryButton}>
              Zadzwoń
            </a>
            <a href={mapLink} className={styles.ghostButtonLight} target="_blank" rel="noreferrer">
              Otwórz trasę
            </a>
          </div>
        </div>

        <div className={styles.mapCard}>
          <iframe
            title="Mapa TORRA Ostrołęka"
            src={mapEmbed}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className={styles.mapEmbed}
          />
        </div>
      </section>

      <section className={styles.reviewBannerSection}>
        <div className={styles.reviewContent}>
          <div className={styles.reviewCopy}>
            <p className={styles.sectionEyebrow}>Google Reviews</p>
            <h2 className={styles.sectionTitle}>Opinie klientów TORRA</h2>
            <p className={styles.sectionText}>
              Sprawdź, co goście mówią o TORRA w Google. Byłeś u nas? Zostaw swoją
              opinię - to bardzo pomaga naszej pizzerii.
            </p>
            <div className={styles.reviewActions}>
              <a href={googleReviewsUrl} className={styles.primaryButton} target="_blank" rel="noreferrer">
                Zobacz opinie
              </a>
              <a href={googleReviewUrl} className={styles.secondaryButton} target="_blank" rel="noreferrer">
                Dodaj opinię
              </a>
            </div>
          </div>
        </div>

        <figure className={styles.reviewBannerCard}>
          <Image
            src="/opinie-banner.webp"
            alt="Grafika TORRA z prośbą o opinię Google i kodem QR"
            width={1448}
            height={1086}
            sizes="(max-width: 700px) 100vw, (max-width: 1180px) 92vw, 1400px"
            className={styles.reviewBannerImage}
            loading="lazy"
            fetchPriority="low"
          />
        </figure>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerOverlay} aria-hidden="true" />
        <div className={styles.footerContent}>
          <p className={styles.footerWordmark}>TORRA</p>
          <p className={styles.footerTagline}>pizza • caffè • musica</p>
          <div className={styles.footerLinks}>
            <a href={phoneHref}>{phoneDisplay}</a>
            <a href={emailHref}>{emailDisplay}</a>
          </div>
          <p className={styles.footerMeta}>© 2026 TORRA. Wszystkie prawa zastrzeżone.</p>
          <p className={styles.footerCredit}>Realizacja strony: Mula Group</p>
        </div>
      </footer>

      <div className={styles.stickyMobileBar}>
        <a href={phoneHref} aria-label="Zadzwoń do TORRA">
          ☎ Zadzwoń
        </a>
        <a href="#full-menu" aria-label="Przejdź do menu TORRA">
          🍕 Menu
        </a>
        <a href={googleMapsUrl} aria-label="Otwórz trasę do TORRA" target="_blank" rel="noreferrer">
          📍 Trasa
        </a>
      </div>
    </main>
  );
}

