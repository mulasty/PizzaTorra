const phone = "788779853";
const website = "https://www.pizzatorra.pl";
const googleCid = "04361763573940380613";
const street = "Generała Ignacego Prądzyńskiego 6 lokal B18";
const city = "Ostrołęka";
const postalCode = "07-410";
const country = "PL";
const venue = "Feniks Hala Targowa";
const fullAddress = `${street}, ${postalCode} ${city}`;
const mapsSearchQuery = encodeURIComponent(
  `TORRA pizza caffè musica ${street} ${postalCode} ${city}`,
);
const googleProfileUrl =
  `https://www.google.com/maps/search/?api=1&query=${mapsSearchQuery}`;
const googleReviewUrl = "https://g.page/r/CSEw5-wt7EG-EBM/review";
const googleMapsUrl = googleProfileUrl;
const googleReviewsUrl = googleProfileUrl;

export const siteConfig = {
  name: "TORRA pizza \u2022 caff\u00e8 \u2022 musica",
  legalName: "TORRA pizza \u2022 caff\u00e8 \u2022 musica",
  shortName: "TORRA",
  seoTitle: "Pizzeria TORRA Ostro\u0142\u0119ka \u2013 w\u0142oska pizza, caff\u00e8, zam\u00f3w teraz",
  description:
    "TORRA w Ostro\u0142\u0119ce to premium pizzeria przy Feniks Hala Targowa z pizz\u0105 w\u0142osk\u0105, pizz\u0105 sycylijsk\u0105, kaw\u0105, cateringiem i ofert\u0105 eventow\u0105.",
  seoDescription:
    "Pizzeria TORRA w Ostro\u0142\u0119ce przy Feniks Hala Targowa. W\u0142oska pizza i caff\u00e8 - zadzwo\u0144 788 779 853 i zam\u00f3w teraz.",
  shortDescription: "Pizza, caff\u00e8, catering i eventy w klimacie TORRA w Ostro\u0142\u0119ce.",
  website,
  url: website,
  canonicalUrl: website,
  phone,
  phoneDisplay: "788 779 853",
  phoneHref: `tel:${phone}`,
  email: "info@pizzatorra.pl",
  priceRange: "6-55 PLN",
  address: {
    street,
    city,
    postalCode,
    country,
    venue,
    streetAddress: street,
    addressLocality: city,
    addressCountry: country,
  },
  openingHours: {
    status: "confirmed",
    value: [
      {
        days: "Poniedzia\u0142ek-Pi\u0105tek",
        hours: "11:00-21:00",
        label: "Poniedzia\u0142ek-Pi\u0105tek: 11:00-21:00",
        schema: "Mo-Fr 11:00-21:00",
      },
      {
        days: "Sobota-Niedziela",
        hours: "12:00-24:00",
        label: "Sobota-Niedziela: 12:00-24:00",
        schema: "Sa-Su 12:00-24:00",
      },
    ],
  },
  google: {
    status: "active",
    googleCid,
    googleMapsUrl,
    googleProfileUrl,
    googleReviewsUrl,
    googleReviewUrl,
  },
  analytics: {
    googleAnalyticsId: "G-7PHN5DFMHN",
  },
  social: {
    instagram: null,
    facebook: null,
    tiktok: null,
    status: "pending",
  },
  legal: {
    privacyPolicy: "pending",
  },
  coordinates: {
    latitude: "",
    longitude: "",
  },
  mapQuery: mapsSearchQuery,
  ogImage: "/og-torra.jpg",
  ogImageAlt: "TORRA pizza caff\u00e8 musica w Ostro\u0142\u0119ce",
  logo: "/logo_2.png",
  heroVideo: "/hero_pizza_optimized.mp4",
  cuisines: ["Pizza", "Pizza sycylijska", "Kuchnia w\u0142oska", "Kawa"],
  keywords: [
    "pizzeria Ostro\u0142\u0119ka",
    "pizza Ostro\u0142\u0119ka",
    "w\u0142oska pizza Ostro\u0142\u0119ka",
    "pizza sycylijska Ostro\u0142\u0119ka",
    "kawa w\u0142oska Ostro\u0142\u0119ka",
    "catering Ostro\u0142\u0119ka",
    "eventy Ostro\u0142\u0119ka",
    "Feniks Hala Targowa",
    "TORRA pizza caffee musica",
    "pizza Pr\u0105dzy\u0144skiego Ostro\u0142\u0119ka",
  ],
} as const;

export const mapLink = siteConfig.google.googleMapsUrl;
export const mapEmbed = `https://www.google.com/maps?q=${siteConfig.mapQuery}&z=17&output=embed`;
export { fullAddress };
