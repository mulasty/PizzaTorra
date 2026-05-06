"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  eventOffer,
  menuCategories,
  menuDownload,
} from "@/content/menu";
import type { MenuCategory, MenuItem, MenuSection } from "@/content/menu";
import { fullAddress, mapEmbed, mapLink, siteConfig } from "@/content/site";
import styles from "./page.module.css";

type MusicTrack = {
  title: string;
  src: string;
};

type PromotionSlide = {
  src: string;
  alt: string;
  title: string;
};

const phoneDisplay = siteConfig.phoneDisplay;
const phoneHref = siteConfig.phoneHref;
const emailHref = `mailto:${siteConfig.email}`;
const address = fullAddress;
const heroVideoSrc = siteConfig.heroVideo;
const googleMapsUrl = siteConfig.google.googleMapsUrl;
const googleReviewUrl = siteConfig.google.googleReviewUrl;
const heroHoursDisplay = siteConfig.openingHours.value.map((item) => item.label);
const contactNotes = [
  siteConfig.address.venue,
  ...siteConfig.openingHours.value.map((item) => item.label),
];

const trustFacts = [
  { label: "Oficjalny adres", value: fullAddress },
  { label: "Telefon", value: phoneDisplay, href: phoneHref },
  { label: "Godziny", value: siteConfig.openingHours.value.map((item) => item.label).join(" • ") },
  { label: "Google Maps", value: "Zobacz trasę i wizytówkę", href: googleMapsUrl },
  { label: "Zamówienia", value: "Zamów telefonicznie przed odbiorem" },
  { label: "Eventy / catering", value: "Zapytaj o spotkanie, lunch lub catering", href: "#eventy" },
];

const quickActions = [
  { icon: "☎", label: phoneDisplay, note: "Zadzwoń i zamów", href: phoneHref },
  { icon: "🍕", label: "Menu", note: "Pizza 31,5 / 45 cm", href: "#full-menu" },
  { icon: "📍", label: "Trasa", note: "Feniks Hala Targowa", href: googleMapsUrl },
  { icon: "⏱", label: "Godziny", note: "pn-pt 11-21 • sob-nd 12-24", href: "#kontakt" },
];

const brandPillars = [
  {
    title: "Pizza",
    text: "Klasyki, premium dodatki i pizza sycylijska zgodna z aktualnym menu TORRA.",
  },
  {
    title: "Caffè",
    text: "Kawa, herbata i napoje dobrane do lunchu, spotkań i spokojnego wieczoru.",
  },
  {
    title: "Musica",
    text: "Spotkania, catering i eventy w miejscu, które łączy włoski smak z dobrą atmosferą.",
  },
];

const promotionSlides: PromotionSlide[] = [
  {
    src: "/promo-maj-light.png",
    alt: "Promocja TORRA: do końca maja przy zakupie dużej pizzy mała pizza -50%",
    title: "Majowa promocja",
  },
  {
    src: "/promo-maj-dark.png",
    alt: "Promocja TORRA w ciemnej odsłonie: do końca maja przy zakupie dużej pizzy mała pizza -50%",
    title: "Majowa promocja nocą",
  },
  {
    src: "/promo-monday-light.png",
    alt: "Promocja TORRA: każdy poniedziałek druga duża pizza -50%",
    title: "Poniedziałkowa promocja",
  },
  {
    src: "/promo-monday-dark.png",
    alt: "Promocja TORRA w ciemnej odsłonie: każdy poniedziałek druga duża pizza -50%",
    title: "Poniedziałkowa promocja nocą",
  },
];

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

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: siteConfig.name,
  alternateName: siteConfig.legalName,
  url: siteConfig.url,
  image: `${siteConfig.url}${siteConfig.ogImage}`,
  logo: `${siteConfig.url}${siteConfig.logo}`,
  telephone: siteConfig.phoneDisplay,
  email: siteConfig.email,
  servesCuisine: siteConfig.cuisines,
  areaServed: siteConfig.address.addressLocality,
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
  const [activeMenuTab, setActiveMenuTab] = useState(menuCategories[0]?.id ?? "");
  const [openAccordion, setOpenAccordion] = useState(menuCategories[0]?.id ?? "");
  const [musicPlayerOpen, setMusicPlayerOpen] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [musicPlaying, setMusicPlaying] = useState(false);
  const [activePromoSlide, setActivePromoSlide] = useState(0);

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

    const intervalId = window.setInterval(() => {
      setActivePromoSlide((current) => (current + 1) % promotionSlides.length);
    }, 5200);

    return () => {
      window.clearInterval(intervalId);
    };
  }, []);

  const activeCategory = menuCategories.find((category) => category.id === activeMenuTab);

  const renderMenuItems = (items: MenuItem[], compact = false) =>
    items.map((item) => (
      <article key={item.name} className={compact ? styles.menuAccordionCard : styles.menuItemCard}>
        {item.badge ? <span className={styles.menuItemBadge}>{item.badge}</span> : null}
        <div className={styles.menuItemTopRow}>
          <h3>{item.name}</h3>
          <strong>{item.price}</strong>
        </div>
        {item.details ? <p>{item.details}</p> : null}
      </article>
    ));

  const renderMenuSections = (sections: MenuSection[], compact = false) =>
    sections.map((section) => (
      <section key={section.title} className={compact ? styles.menuSubsectionCompact : styles.menuSubsection}>
        <div className={styles.menuSubsectionHeader}>
          <h4>{section.title}</h4>
          {section.description ? <p>{section.description}</p> : null}
        </div>
        <div className={compact ? styles.menuSubsectionCompactList : styles.menuCategoryGrid}>
          {renderMenuItems(section.items, compact)}
        </div>
      </section>
    ));

  const renderCategoryContent = (category: MenuCategory, compact = false) => {
    if (category.sections) {
      return renderMenuSections(category.sections, compact);
    }

    return renderMenuItems(category.items ?? [], compact);
  };

  const toggleAccordion = (id: string) => {
    setOpenAccordion((current) => (current === id ? "" : id));
  };

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

  const skipPromotionSlide = (direction: 1 | -1) => {
    setActivePromoSlide((current) =>
      (current + direction + promotionSlides.length) % promotionSlides.length,
    );
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
          </div>

          <div className={styles.heroVisual}>
            <div className={styles.heroMediaFrame}>
              <video
                className={styles.heroMedia}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster="/pizzatorra/pizza-1.jpeg"
              >
                <source src={heroVideoSrc} type="video/mp4" />
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
            >
              <source src={currentTrack.src} type="audio/mpeg" />
            </audio>

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
            {promotionSlides.map((slide, index) => (
              <figure
                key={slide.src}
                className={`${styles.promoSlide} ${
                  index === activePromoSlide ? styles.promoSlideActive : ""
                }`}
                aria-hidden={index === activePromoSlide ? undefined : true}
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  width={1536}
                  height={1024}
                  sizes="100vw"
                  className={styles.promoVisualImage}
                />
              </figure>
            ))}
          </div>

          <div className={styles.promoSliderFooter}>
            <div className={styles.promoSliderControls}>
              <button
                type="button"
                className={styles.promoSliderButton}
                onClick={() => skipPromotionSlide(-1)}
                aria-label="Poprzednia promocja"
              >
                ‹
              </button>

              <div className={styles.promoSliderDots} aria-label="Wybór slajdu promocji">
                {promotionSlides.map((slide, index) => (
                  <button
                    key={slide.src}
                    type="button"
                    className={`${styles.promoSliderDot} ${
                      index === activePromoSlide ? styles.promoSliderDotActive : ""
                    }`}
                    onClick={() => setActivePromoSlide(index)}
                    aria-label={`Przejdź do slajdu: ${slide.title}`}
                    aria-pressed={index === activePromoSlide}
                  />
                ))}
              </div>

              <button
                type="button"
                className={styles.promoSliderButton}
                onClick={() => skipPromotionSlide(1)}
                aria-label="Następna promocja"
              >
                ›
              </button>
            </div>
          </div>
        </div>
      </section>

      <section
        id="marka"
        className={`${styles.whySection} ${styles.parallaxSection}`}
        data-parallax-section
        data-parallax-speed="0.14"
      >
        <div className={`${styles.parallaxBackground} ${styles.brandBackground}`} aria-hidden="true" />
        <div className={styles.sectionIntro}>
          <p className={styles.sectionEyebrow}>Dlaczego TORRA</p>
          <h2 className={styles.sectionTitle}>Nie tylko pizzeria. Miejsce z klimatem.</h2>
        </div>

        <div className={styles.whyGrid}>
          {brandPillars.map((pillar) => (
            <article key={pillar.title} className={styles.featureCard}>
              <p className={styles.featureIcon}>{pillar.title}</p>
              <h3>{pillar.title}</h3>
              <p>{pillar.text}</p>
            </article>
          ))}
        </div>

        <div className={styles.musicShowcase}>
          <article className={styles.musicStoryCard}>
            <p className={styles.musicStoryBadge}>TORRA Musica</p>
            <h3 className={styles.musicStoryTitle}>Autorska muzyka TORRA</h3>
            <p className={styles.musicStoryText}>
              To nasza autorska muzyka, stworzona po to, aby dopełnić smak pizzy,
              caffè i atmosferę spotkań w TORRA. Włącz playlistę i poczuj spokojny,
              prawdziwie włoski klimat jeszcze przed wizytą w lokalu.
            </p>
          </article>

          <div className={styles.musicEmbedCard}>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/videoseries?si=f1tC8WxL5p4jmb--&list=OLAK5uy_msxfccVc1l6j74VnRFwaqNjCIFWskszBA"
              title="TORRA Musica playlista YouTube"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className={styles.musicEmbed}
            />
          </div>
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
          <div className={styles.menuSalesActions}>
            <a href={phoneHref} className={styles.primaryButton} aria-label="Zadzwoń do TORRA i złóż zamówienie">
              Zadzwoń i zamów
            </a>
            <a href="#eventy" className={styles.secondaryButton} aria-label="Zapytaj TORRA o event lub catering">
              Zapytaj o event / catering
            </a>
          </div>
        </div>

        <div className={styles.menuShell}>
          <div className={styles.menuTabs} role="tablist" aria-label="Kategorie menu">
            {menuCategories.map((category) => (
              <button
                key={category.id}
                type="button"
                role="tab"
                aria-selected={activeMenuTab === category.id}
                className={`${styles.menuTab} ${
                  activeMenuTab === category.id ? styles.menuTabActive : ""
                }`}
                onClick={() => setActiveMenuTab(category.id)}
              >
                {category.title}
              </button>
            ))}
          </div>

          {activeCategory ? (
            <div className={styles.menuPanel} role="tabpanel">
              <div className={styles.menuPanelHeader}>
                <div className={styles.menuPanelTitleBlock}>
                  <span className={styles.menuPanelLabel}>Wybrana kategoria</span>
                  <h3>{activeCategory.title}</h3>
                  {activeCategory.badge ? (
                    <span className={styles.menuCategoryBadge}>{activeCategory.badge}</span>
                  ) : null}
                </div>
                <p>{activeCategory.description}</p>
              </div>
              <div className={styles.menuPanelContent}>{renderCategoryContent(activeCategory)}</div>
            </div>
          ) : (
            <div className={styles.menuPlaceholder}>
              <Image
                src="/menu-placeholder.png"
                alt="Menu TORRA z podziałem na pizzę, pizzę sycylijską, insalate, panuozzo, desery oraz napoje i caffè"
                width={1684}
                height={947}
                sizes="(max-width: 900px) 100vw, 1100px"
                className={styles.menuPlaceholderImage}
              />
            </div>
          )}

          <div className={styles.menuAccordionList}>
            {menuCategories.map((category) => {
              const isOpen = openAccordion === category.id;
              return (
                <div key={category.id} className={styles.menuAccordionItem}>
                  <button
                    type="button"
                    className={styles.menuAccordionButton}
                    onClick={() => toggleAccordion(category.id)}
                    aria-expanded={isOpen}
                  >
                    <span>{category.title}</span>
                    <span>{isOpen ? "−" : "+"}</span>
                  </button>
                  <div
                    className={`${styles.menuAccordionPanel} ${
                      isOpen ? styles.menuAccordionPanelOpen : ""
                    }`}
                  >
                    <div className={styles.menuAccordionContent}>
                      {category.badge ? (
                        <span className={styles.menuCategoryBadge}>{category.badge}</span>
                      ) : null}
                      <p className={styles.menuAccordionDescription}>{category.description}</p>
                      {renderCategoryContent(category, true)}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className={styles.pdfRow}>
          <a href={menuDownload.href} className={styles.pdfButton} target="_blank" rel="noreferrer">
            {menuDownload.label}
          </a>
          <span className={styles.pdfHint}>
            Źródłowa ulotka menu dostępna do pobrania bezpośrednio ze strony.
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
        </div>
      </section>

      <section
        id="kontakt"
        className={`${styles.contactSection} ${styles.parallaxSection}`}
        data-parallax-section
        data-parallax-speed="0.16"
      >
        <div className={`${styles.parallaxBackground} ${styles.contactBackground}`} aria-hidden="true" />
        <div className={styles.sectionIntro}>
          <p className={styles.sectionEyebrow}>Kontakt + mapa</p>
          <h2 className={styles.sectionTitle}>Przyjdź do TORRA</h2>
          <p className={styles.sectionText}>
            Pizzeria Ostrołęka TORRA działa przy Prądzyńskiego 6, Feniks Hala Targowa,
            lokal B18. Tu zamówisz pizzę, kawę, catering i rezerwacje eventowe.
          </p>
        </div>

        <div className={styles.contactGrid}>
          <div className={styles.contactCard}>
            <h3>TORRA Ostrołęka</h3>
            <address className={styles.addressBlock}>
              <p>{address}</p>
              <p>
                Telefon: <a href={phoneHref}>{phoneDisplay}</a>
              </p>
              <p>
                E-mail: <a href={emailHref}>{siteConfig.email}</a>
              </p>
            </address>

            <div className={styles.hoursList}>
              {contactNotes.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>

            <div className={styles.contactButtons}>
              <a href={phoneHref} className={styles.primaryButton}>
                Zadzwoń
              </a>
              <a href={mapLink} className={styles.ghostButtonLight}>
                Otwórz trasę
              </a>
              <a href={menuDownload.href} className={styles.secondaryButton} target="_blank" rel="noreferrer">
                Menu PDF
              </a>
              <a href={googleMapsUrl} className={styles.ghostButtonLight} target="_blank" rel="noreferrer">
                Zobacz nas w Google Maps
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
        </div>
      </section>

      <section className={styles.reviewBannerSection}>
        <div className={styles.trustGrid}>
          <div className={styles.trustCopy}>
            <p className={styles.sectionEyebrow}>Google Reviews</p>
            <h2 className={styles.sectionTitle}>Opinie klientów TORRA</h2>
            <p className={styles.sectionText}>
              Aktualne opinie gości są dostępne w oficjalnej wizytówce Google TORRA.
              Nie pokazujemy zmyślonych cytatów ani ocen. Najlepiej sprawdzić je bezpośrednio u źródła.
            </p>
            <p className={styles.trustSource}>
              Opinie pochodzą z oficjalnej wizytówki Google TORRA. CID: {siteConfig.google.googleCid}
            </p>
            <div className={styles.reviewActions}>
              <a href={googleMapsUrl} className={styles.primaryButton} target="_blank" rel="noreferrer">
                Zobacz opinie w Google
              </a>
              <a href={googleReviewUrl} className={styles.secondaryButton} target="_blank" rel="noreferrer">
                Dodaj opinię
              </a>
            </div>
          </div>

          <div className={styles.trustFacts} aria-label="Potwierdzone informacje o TORRA">
            {trustFacts.map((fact) => (
              <article key={fact.label} className={styles.trustFactCard}>
                <span>{fact.label}</span>
                {fact.href ? (
                  <a href={fact.href} target={fact.href.startsWith("http") ? "_blank" : undefined} rel={fact.href.startsWith("http") ? "noreferrer" : undefined}>
                    {fact.value}
                  </a>
                ) : (
                  <strong>{fact.value}</strong>
                )}
              </article>
            ))}
          </div>
        </div>

        <figure className={styles.reviewBannerCard}>
          <Image
            src="/opinie-banner.png"
            alt="Grafika TORRA z prośbą o opinię Google i kodem QR"
            width={1448}
            height={1086}
            sizes="(max-width: 700px) 100vw, (max-width: 1180px) 92vw, 1400px"
            className={styles.reviewBannerImage}
          />
        </figure>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerBrand}>
          <Image
            src={siteConfig.logo}
            alt="Logo TORRA pizza caffè musica"
            width={500}
            height={500}
            sizes="(max-width: 700px) 72vw, 310px"
            className={styles.footerLogo}
          />
          <p className={styles.footerTagline}>Pizza. Caffè. Musica.</p>
        </div>

        <div className={styles.footerLinks}>
          <a href="#top">TORRA</a>
          <a href="#promocje">PROMOCJE</a>
          <a href="#full-menu">MENU</a>
          <a href="#eventy">EVENTY</a>
          <a href="#kontakt">KONTAKT</a>
          <span>Polityka prywatności w przygotowaniu</span>
        </div>

        <p className={styles.footerMeta}>TORRA | Ostrołęka | tel. {phoneDisplay}</p>
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

