const phone = "788779853";
const website = "https://www.pizzatorra.pl";
const googleCid = "04361763573940380613";
const googleMapsUrl = `https://www.google.com/maps?cid=${googleCid}`;
const googleReviewUrl = "https://g.page/r/CSEw5-wt7EG-EBM/review";

export const siteConfig = {
  name: "TORRA pizza \u2022 caff\u00e8 \u2022 musica",
  legalName: "TORRA pizza \u2022 caff\u00e8 \u2022 musica",
  shortName: "TORRA",
  description:
    "TORRA w Ostro\u0142\u0119ce to premium pizzeria przy Feniks Hala Targowa z pizz\u0105 w\u0142osk\u0105, pizz\u0105 sycylijsk\u0105, kaw\u0105, cateringiem i ofert\u0105 eventow\u0105.",
  shortDescription: "Pizza, caff\u00e8, catering i eventy w klimacie TORRA w Ostro\u0142\u0119ce.",
  website,
  url: website,
  phone,
  phoneDisplay: "788 779 853",
  phoneHref: `tel:${phone}`,
  email: "info@pizzatorra.pl",
  address: {
    street: "Genera\u0142a Ignacego Pr\u0105dzy\u0144skiego 6 lokal B18",
    city: "Ostro\u0142\u0119ka",
    postalCode: "07-410",
    country: "PL",
    venue: "Feniks Hala Targowa",
    streetAddress: "Genera\u0142a Ignacego Pr\u0105dzy\u0144skiego 6 lokal B18",
    addressLocality: "Ostro\u0142\u0119ka",
    addressCountry: "PL",
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
  mapQuery: "53.08104369454033%2C21.572176677220913",
  ogImage: "/og-torra.jpg",
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
export const mapEmbed =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2396.6230924536508!2d21.572176677220913!3d53.08104369454033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471e416612f5184d%3A0xbe41ec2dece73021!2sTorra%20%7C%20Pizzeria%20Ostro%C5%82%C4%99ka!5e0!3m2!1spl!2spl!4v1778002579340!5m2!1spl!2spl";

export const fullAddress = `${siteConfig.address.street}, ${siteConfig.address.postalCode} ${siteConfig.address.city}`;
