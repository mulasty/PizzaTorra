import Image from "next/image";
import {
  eventOffer,
  menuCategories,
  menuDownload,
} from "@/content/menu";
import type { MenuItem, MenuCategory } from "@/content/menu";
import { mapEmbed, mapLink, siteConfig } from "@/content/site";
import { MobileNavigation } from "@/components/MobileNavigation";
import { HeroVideo } from "@/components/HeroVideo";
import { MusicPlayer } from "@/components/MusicPlayer";
import { ParallaxEffect } from "@/components/ParallaxEffect";
import styles from "./page.module.css";

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
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
    label: phoneDisplay,
    note: "Zadzwoń i zamów",
    href: phoneHref,
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
    label: "Menu",
    note: "Pizza 31,5 / 45 cm",
    href: "#full-menu",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    label: "Trasa",
    note: "Feniks Hala Targowa",
    href: googleMapsUrl,
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    label: "Godziny",
    note: "pn-pt 11-21 • sob-nd 12-24",
    href: "#kontakt",
  },
];

const promotionBanner = {
  src: "/promo-monday-light.webp",
  alt: "Promocja TORRA: każdy poniedziałek druga duża pizza -50%",
};

const torraTracks = [
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

const menuColumns = menuColumnIds.map((column) =>
  column
    .map((id) => menuCategories.find((category) => category.id === id))
    .filter((category): category is MenuCategory => Boolean(category)),
);

export default function Page() {
  return (
    <main className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <ParallaxEffect />

      <MobileNavigation />

      <section id="top" className={styles.hero}>
        <div className={styles.heroGrid}>
          <div className={styles.heroCopy}>
            <Image
              src={siteConfig.logo}
              alt="TORRA"
              width={220}
              height={220}
              className={styles.heroLogo}
              priority
              fetchPriority="high"
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
            <HeroVideo src={heroVideoSrc} />
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

            <MusicPlayer tracks={torraTracks} />
          </div>
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

      <section id="marka" className={styles.whySection}>
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
          <h2 className={styles.sectionTitle}>Wybierz smak i zamo\u0301w telefonicznie</h2>
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
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
          </svg>
          Zadzwoń
        </a>
        <a href="#full-menu" aria-label="Przejdź do menu TORRA">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          </svg>
          Menu
        </a>
        <a href={googleMapsUrl} aria-label="Otwórz trasę do TORRA" target="_blank" rel="noreferrer">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
            <circle cx="12" cy="10" r="3"/>
          </svg>
          Trasa
        </a>
      </div>
    </main>
  );
}
