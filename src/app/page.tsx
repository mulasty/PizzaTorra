"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { fullAddress, mapEmbed, mapLink, siteConfig } from "@/content/site";
import styles from "./page.module.css";

type MenuItem = {
  name: string;
  details: string;
  price: string;
  badge?: string;
};

type MenuCategory = {
  id: string;
  title: string;
  description: string;
  items: MenuItem[];
};

type StatusCard = {
  title: string;
  text: string;
};

type MusicTrack = {
  title: string;
  src: string;
};

const phoneDisplay = siteConfig.phoneDisplay;
const phoneHref = siteConfig.phoneHref;
const address = fullAddress;
const heroVideoSrc = siteConfig.heroVideo;
const priceSoon = "Cena wkrótce";
const pizzaPriceSoon = "33 cm / 45 cm — cena wkrótce";
const sicilianPriceSoon = "60 x 60 cm / kawałek — cena wkrótce";
const hours = ["Godziny otwarcia — do uzupełnienia przed publikacją."];

const quickActions = [
  { icon: "🍕", label: "Menu", note: "Pełna karta TORRA", href: "#full-menu" },
  { icon: "☎", label: "Zadzwoń", note: "Szybki kontakt", href: phoneHref },
  { icon: "📍", label: "Trasa", note: "Google Maps", href: mapLink },
  { icon: "🕒", label: "Godziny", note: "Aktualizacja wkrótce", href: "#kontakt" },
];

const brandPillars = [
  {
    title: "Pizza",
    text: "Autorskie kompozycje, klasyki i duże formaty do dzielenia przy wspólnym stole.",
  },
  {
    title: "Caffè",
    text: "Włoska kawa jako codzienny rytuał i naturalne dopełnienie każdej wizyty.",
  },
  {
    title: "Musica",
    text: "Atmosfera spotkań, rytm miejsca i klimat, przez który chce się zostać dłużej.",
  },
];
const hits = [
  {
    name: "Ragazzi della Torra",
    description: "Bakłażan, cukinia, mozzarella, parmezan, oregano",
    price: pizzaPriceSoon,
    badge: "Signature",
    image: "/pizzatorra/pizza-1.jpeg",
  },
  {
    name: "Margherita Classica",
    description: "Sos pomidorowy, ser, oregano",
    price: pizzaPriceSoon,
    badge: "Classic",
    image: "/pizzatorra/pizza-2.jpeg",
  },
  {
    name: "Diavola Torra",
    description: "Szynka, papryka, jalapeño, boczek, cebula, tabasco",
    price: pizzaPriceSoon,
    badge: "Hot",
    image: "/pizzatorra/pizza-3.jpg",
  },
  {
    name: "Quattro Formaggi Classica",
    description: "Mozzarella, feta, ser pleśniowy, parmezan",
    price: pizzaPriceSoon,
    badge: "Premium",
    image: "/pizzatorra/gallery-1.jpeg",
  },
  {
    name: "Pizza Sycylijska Capricciosa",
    description: "Duży format do dzielenia się przy stole",
    price: sicilianPriceSoon,
    badge: "Big Format",
    image: "/pizzatorra/gallery-3.jpeg",
  },
  {
    name: "Panuozzo Caprese",
    description: "Pesto, burrata, sałata, parmezan, pomidorki koktajlowe",
    price: priceSoon,
    badge: "Street Favorite",
    image: "/pizzatorra/gallery-4.jpeg",
  },
];

const menuCategories: MenuCategory[] = [
  {
    id: "pizza",
    title: "Pizza 33/45 cm",
    description: "Klasyczne kompozycje i sygnaturowe pozycje TORRA w dwóch formatach.",
    items: [
      {
        name: "Margherita Classica",
        details: "sos pomidorowy, ser, oregano",
        price: pizzaPriceSoon,
      },
      {
        name: "Salame Italiano",
        details: "sos pomidorowy, ser, salami, oregano",
        price: pizzaPriceSoon,
      },
      {
        name: "Ragazzi della Torra",
        details: "bakłażan, cukinia, mozzarella, parmezan, oregano",
        price: pizzaPriceSoon,
        badge: "Signature",
      },
      {
        name: "Diavola Torra",
        details: "szynka, papryka, jalapeño, boczek, cebula, tabasco",
        price: pizzaPriceSoon,
      },
    ],
  },
  {
    id: "sicylijska",
    title: "Sycylijska",
    description: "Duży format 60x60 cm stworzony do wspólnego stołu i dzielenia się.",
    items: [
      {
        name: "Margherita Sicilia",
        details: "klasyka w dużym formacie 60x60 cm",
        price: sicilianPriceSoon,
      },
      {
        name: "Caprese Sicilia",
        details: "świeży profil caprese w formacie do dzielenia",
        price: sicilianPriceSoon,
      },
      {
        name: "Capricciosa Sicilia",
        details: "pełniejsza kompozycja w sycylijskim wydaniu",
        price: sicilianPriceSoon,
      },
    ],
  },
  {
    id: "insalate",
    title: "Insalate",
    description: "Lżejsze kompozycje z warzywami, białkiem i włoskimi akcentami.",
    items: [
      {
        name: "Tropicana Mediterranea",
        details: "mix sałat, awokado, grillowany ananas, granat, pomidorki, nachosy",
        price: priceSoon,
      },
      {
        name: "Cobb della Torra",
        details: "mix sałat, sos cesarski, awokado, kurczak, bekon, jajko, oliwki",
        price: priceSoon,
      },
      {
        name: "Cesare Classico",
        details: "mix sałat, kurczak grillowany, grana padano, sos cesarski",
        price: priceSoon,
      },
    ],
  },
  {
    id: "quesadilla",
    title: "Quesadilla",
    description: "Szybsza, bardziej streetowa część karty z mocniejszym profilem smaku.",
    items: [
      {
        name: "Pollo alla Griglia",
        details: "grillowany kurczak, mix warzyw, mozzarella, sos salsa",
        price: priceSoon,
      },
      {
        name: "Pulled Pork Italiano",
        details: "długo pieczona wieprzowina, mozzarella, rukola, cebula, pomidor",
        price: priceSoon,
      },
      {
        name: "Con Carne Piccante",
        details: "wołowina, fasola, kukurydza, mozzarella, jalapeño, nachosy, kolendra",
        price: priceSoon,
      },
    ],
  },
  {
    id: "panuozzo",
    title: "Panuozzo",
    description: "Włoskie pieczywo w wersji lunchowej, wygodnej na miejscu i na wynos.",
    items: [
      {
        name: "Tonno Fresco",
        details: "tuńczyk, pomidory, cebula, sałata, oliwki",
        price: priceSoon,
      },
      {
        name: "Pollo Philadelphia",
        details: "kurczak, ser, cebula, pomidor",
        price: priceSoon,
      },
      {
        name: "Caprese",
        details: "pesto, burrata, sałata, parmezan, pomidorki koktajlowe",
        price: priceSoon,
      },
    ],
  },
  {
    id: "caffe",
    title: "Caffè",
    description: "Krótka karta kawowa inspirowana włoskim rytmem dnia i spotkań.",
    items: [
      { name: "Espresso", details: "włoski rytuał dnia", price: priceSoon },
      { name: "Cappuccino", details: "klasyka poranka i spotkań", price: priceSoon },
      { name: "Latte", details: "łagodniejsze i kremowe", price: priceSoon },
      { name: "Americano", details: "czysta kawa na dłużej", price: priceSoon },
      { name: "Kawa sezonowa", details: "rotujące smaki i dodatki", price: priceSoon },
    ],
  },
  {
    id: "napoje",
    title: "Napoje",
    description: "Klasyczne dodatki do pizzy, lunchu i spokojniejszej wizyty przy stoliku.",
    items: [
      { name: "Woda", details: "gazowana lub niegazowana", price: priceSoon },
      { name: "Lemoniada dnia", details: "lekka i świeża", price: priceSoon },
      { name: "Cola / Cola Zero", details: "do pizzy lub na wynos", price: priceSoon },
      { name: "Sok pomarańczowy", details: "klasyczne dopełnienie lunchu", price: priceSoon },
      { name: "Iced tea", details: "wersja chłodząca na cieplejsze dni", price: priceSoon },
    ],
  },
];

const coffeeHighlights = [
  { name: "Espresso", note: "Krótko, intensywnie, po włosku.", price: priceSoon },
  { name: "Cappuccino", note: "Miękka pianka i codzienny rytuał.", price: priceSoon },
  { name: "Latte", note: "Delikatniejsze i bardziej kremowe.", price: priceSoon },
  { name: "Americano", note: "Czysty smak na dłuższą chwilę.", price: priceSoon },
  { name: "Kawa sezonowa", note: "Rotujące smaki inspirowane sezonem.", price: priceSoon },
  { name: "Deser dnia / tiramisu", note: "Słodkie domknięcie spotkania.", price: priceSoon },
];

const galleryItems = [
  { src: "/pizzatorra/gallery-2.jpeg", alt: "Wnętrze TORRA", label: "Wnętrze" },
  { src: "/pizzatorra/pizza-1.jpeg", alt: "Pizza TORRA", label: "Pizza" },
  { src: "/pizzatorra/gallery-1.jpeg", alt: "Kawa w TORRA", label: "Kawa" },
  { src: "/pizzatorra/gallery-3.jpeg", alt: "Wieczór w TORRA", label: "Wieczór" },
  { src: "/pizzatorra/gallery-4.jpeg", alt: "Detal TORRA", label: "Detal" },
];

const differentiators = [
  {
    title: "Na miejscu i na wynos",
    text: "Wygodnie — szybka wizyta, lunch albo wieczór ze znajomymi.",
  },
  {
    title: "Duże formaty pizzy",
    text: "Pizza 33/45 cm oraz sycylijska 60x60 cm do dzielenia przy stole.",
  },
  {
    title: "Włoski klimat",
    text: "Pizza, kawa i muzyka spotykają się w jednym miejscu.",
  },
  {
    title: "Lokalizacja w Ostrołęce",
    text: "Łatwy dojazd, szybki kontakt telefoniczny i wygodna trasa.",
  },
];

const businessProfileCards: StatusCard[] = [
  {
    title: "Opinie Google",
    text: "Sekcja opinii zostanie uzupełniona po aktywacji i weryfikacji profilu Google Business Profile.",
  },
  {
    title: "Menu i godziny",
    text: "Po zatwierdzeniu finalnych cen i godzin dane strony trzeba zsynchronizować z wizytówką Google.",
  },
  {
    title: "Materiały wizualne",
    text: "Do profilu firmy warto dodać aktualne zdjęcia pizzy, kawy, wnętrza, wejścia do lokalu i zespołu.",
  },
];

const socialLabels = ["Instagram — wkrótce", "Facebook — wkrótce", "TikTok — wkrótce"];

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
  servesCuisine: siteConfig.cuisines,
  areaServed: siteConfig.address.addressLocality,
  hasMap: mapLink,
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
  const [activeMenuTab, setActiveMenuTab] = useState(menuCategories[0].id);
  const [openAccordion, setOpenAccordion] = useState(menuCategories[0].id);
  const [musicPlayerOpen, setMusicPlayerOpen] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [musicPlaying, setMusicPlaying] = useState(false);

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

  const activeCategory =
    menuCategories.find((category) => category.id === activeMenuTab) ?? menuCategories[0];

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
          <a href="#full-menu" onClick={closeMobileMenu}>
            Menu
          </a>
          <a href="#klimat" onClick={closeMobileMenu}>
            Klimat
          </a>
          <a href="#kontakt" onClick={closeMobileMenu}>
            Kontakt
          </a>
          <a href={phoneHref} onClick={closeMobileMenu}>
            Zadzwoń
          </a>
          <a href={mapLink} onClick={closeMobileMenu}>
            Google Maps
          </a>
        </div>
      </div>

      <section id="top" className={styles.hero}>
        <div className={styles.heroGrid}>
          <div className={styles.heroCopy}>
            <p className={styles.heroLabel}>Pizza • Caffè • Musica</p>
            <h1 className={styles.heroTitle}>
              <span>TORRA</span>
              <span>włoski smak</span>
              <span>w Ostrołęce</span>
            </h1>
            <p className={styles.heroText}>
              Pizza, caffè i wieczorny klimat inspirowany Italią.
            </p>

            <div className={styles.heroActions}>
              <a href="#full-menu" className={styles.primaryButton} aria-label="Zobacz menu TORRA">
                Zobacz menu
              </a>
              <a href={phoneHref} className={styles.secondaryButton} aria-label="Zadzwoń do TORRA">
                Zadzwoń teraz
              </a>
              <a
                href={mapLink}
                className={styles.ghostButton}
                aria-label="Otwórz dojazd do TORRA w Google Maps"
              >
                Jak dojechać
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
              <div className={styles.heroSeal}>
                <Image
                  src={siteConfig.logo}
                  alt="Logo TORRA"
                  width={500}
                  height={500}
                  sizes="(max-width: 700px) 104px, 148px"
                  className={styles.heroSealImage}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.quickActionsSection}>
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

        <div className={styles.sectionAction}>
          <a href="#hity" className={styles.secondaryButtonLight}>
            Zobacz nasze hity
          </a>
        </div>
      </section>

      <section id="hity" className={styles.hitsSection}>
        <div className={styles.sectionIntro}>
          <p className={styles.sectionEyebrow}>Hity TORRA</p>
          <h2 className={styles.sectionTitle}>Najczęściej wybierane</h2>
        </div>

        <div className={styles.hitsGrid}>
          {hits.map((item) => (
            <article key={item.name} className={styles.hitCard}>
              <div className={styles.hitImageWrap}>
                <Image
                  src={item.image}
                  alt={`${item.name} - pizza TORRA w Ostrołęce`}
                  width={1280}
                  height={960}
                  sizes="(max-width: 900px) 100vw, 33vw"
                  className={styles.hitImage}
                />
                <span className={styles.hitBadge}>{item.badge}</span>
              </div>
              <div className={styles.hitBody}>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <strong>{item.price}</strong>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="full-menu" className={styles.menuSection}>
        <div className={styles.sectionIntro}>
          <p className={styles.sectionEyebrow}>Pełne menu</p>
          <h2 className={styles.sectionTitle}>Karta menu TORRA</h2>
          <p className={styles.sectionText}>
            Aktualna karta pokazuje układ sekcji i przykładowe pozycje. Finalne ceny
            oraz pełna wersja PDF zostaną uzupełnione po akceptacji właściciela.
          </p>
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

          <div className={styles.menuPanel} role="tabpanel">
            <div className={styles.menuPanelHeader}>
              <div className={styles.menuPanelTitleBlock}>
                <span className={styles.menuPanelLabel}>Wybrana kategoria</span>
                <h3>{activeCategory.title}</h3>
              </div>
              <p>{activeCategory.description}</p>
            </div>
            <div className={styles.menuCategoryGrid}>
              {activeCategory.items.map((item) => (
                <article key={item.name} className={styles.menuItemCard}>
                  {item.badge ? <span className={styles.menuItemBadge}>{item.badge}</span> : null}
                  <h3>{item.name}</h3>
                  <p>{item.details}</p>
                  <strong>{item.price}</strong>
                </article>
              ))}
            </div>
          </div>

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
                    {category.items.map((item) => (
                      <article key={item.name} className={styles.menuAccordionCard}>
                        <h3>{item.name}</h3>
                        <p>{item.details}</p>
                        <strong>{item.price}</strong>
                      </article>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className={styles.pdfRow}>
          <button type="button" className={styles.pdfButton} disabled>
            Pobierz menu PDF
          </button>
          <span className={styles.pdfHint}>PDF w przygotowaniu — podmienimy po finalizacji cen.</span>
        </div>
      </section>

      <section className={styles.coffeeSection}>
        <div className={styles.sectionIntro}>
          <p className={styles.sectionEyebrow}>Caffè</p>
          <h2 className={styles.sectionTitle}>Caffè — włoski rytuał dnia</h2>
          <p className={styles.sectionText}>
            Wpadnij na espresso, cappuccino albo kawę po pizzy. TORRA to także miejsce
            na krótkie spotkanie przy dobrej kawie.
          </p>
        </div>

        <div className={styles.coffeeGrid}>
          {coffeeHighlights.map((coffee) => (
            <article key={coffee.name} className={styles.coffeeCard}>
              <span className={styles.coffeeAccent} />
              <h3>{coffee.name}</h3>
              <p>{coffee.note}</p>
              <strong>{coffee.price}</strong>
            </article>
          ))}
        </div>

        <div className={styles.sectionAction}>
          <a href="#full-menu" className={styles.secondaryButton}>
            Zobacz kawy i desery
          </a>
        </div>
      </section>

      <section
        id="klimat"
        className={`${styles.gallerySection} ${styles.parallaxSection}`}
        data-parallax-section
        data-parallax-speed="0.2"
      >
        <div className={`${styles.parallaxBackground} ${styles.galleryBackground}`} aria-hidden="true" />
        <div className={styles.sectionIntro}>
          <p className={styles.sectionEyebrow}>Klimat TORRA</p>
          <h2 className={styles.sectionTitle}>Miejsce, do którego chce się wracać</h2>
          <p className={styles.sectionText}>
            Pizza to początek. Klimat, światło, muzyka i detale robią resztę.
          </p>
        </div>

        <div className={styles.galleryLayout}>
          <figure className={styles.galleryMain}>
              <Image
                src={galleryItems[0].src}
                alt={galleryItems[0].alt}
                width={1500}
                height={1100}
                sizes="(max-width: 1180px) 100vw, 60vw"
                className={styles.galleryImage}
              />
            <figcaption>{galleryItems[0].label}</figcaption>
          </figure>

          <div className={styles.galleryAside}>
            {galleryItems.slice(1).map((item) => (
              <figure key={item.label} className={styles.gallerySmall}>
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={900}
                  height={700}
                  sizes="(max-width: 700px) 72vw, 30vw"
                  className={styles.galleryImage}
                />
                <figcaption>{item.label}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.reasonsSection}>
        <div className={styles.sectionIntro}>
          <p className={styles.sectionEyebrow}>Wyróżniki</p>
          <h2 className={styles.sectionTitle}>Dlaczego warto wpaść do TORRA?</h2>
        </div>

        <div className={styles.reasonsGrid}>
          {differentiators.map((item) => (
            <article key={item.title} className={styles.reasonCard}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="opinie" className={styles.reviewsSection}>
        <div className={styles.sectionIntro}>
          <p className={styles.sectionEyebrow}>Google Business Profile</p>
          <h2 className={styles.sectionTitle}>Przygotowanie pod wizytówkę Google</h2>
          <p className={styles.sectionText}>
            Finalne opinie, zdjęcia i zsynchronizowane godziny powinny pojawić się po
            aktywacji profilu firmy. Na tym etapie sekcja pokazuje status wdrożenia,
            a nie realne recenzje.
          </p>
        </div>

        <div className={styles.reviewsGrid}>
          {businessProfileCards.map((card) => (
            <article key={card.title} className={styles.reviewCard}>
              <p className={styles.reviewStars}>Status</p>
              <h3 className={styles.reviewCardTitle}>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>

        <div className={styles.sectionAction}>
          <a href={mapLink} className={styles.secondaryButton}>
            Otwórz lokalizację w Google Maps
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
            TORRA działa przy ul. Prądzyńskiego w Ostrołęce. Finalne godziny, profile
            społecznościowe i polityka prywatności są przygotowane do uzupełnienia
            przed publikacją produkcyjną.
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
            </address>

            <div className={styles.hoursList}>
              {hours.map((item) => (
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
            </div>

            <div className={styles.socialsRow}>
              {socialLabels.map((label) => (
                <span key={label} className={styles.socialChip}>
                  {label}
                </span>
              ))}
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

      <footer className={styles.footer}>
        <div className={styles.footerBrand}>
          <Image
            src={siteConfig.logo}
            alt="Logo TORRA pizza caffè musica"
            width={500}
            height={500}
            sizes="96px"
            className={styles.footerLogo}
          />
          <p className={styles.footerTagline}>Pizza. Caffè. Musica.</p>
        </div>

        <div className={styles.footerLinks}>
          <a href="#full-menu">Menu</a>
          <a href="#klimat">Klimat</a>
          <a href="#kontakt">Kontakt</a>
          <a href={mapLink}>Google Maps</a>
          <span>Polityka prywatności — TODO</span>
        </div>

        <p className={styles.footerMeta}>TORRA | Ostrołęka | tel. {phoneDisplay}</p>
      </footer>

      <aside
        className={`${styles.musicPlayer} ${musicPlayerOpen ? styles.musicPlayerOpen : ""}`}
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

      <div className={styles.stickyMobileBar}>
        <a href={phoneHref} aria-label="Zadzwoń do TORRA">
          ☎ Zadzwoń
        </a>
        <a href="#full-menu" aria-label="Przejdź do menu TORRA">
          🍕 Menu
        </a>
        <a href={mapLink} aria-label="Otwórz trasę do TORRA">
          📍 Trasa
        </a>
      </div>
    </main>
  );
}

