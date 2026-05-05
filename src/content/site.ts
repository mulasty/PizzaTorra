export const siteConfig = {
  name: "TORRA",
  legalName: "TORRA pizza \u2022 caff\u00e8 \u2022 musica",
  description:
    "TORRA w Ostro\u0142\u0119ce to nowoczesna pizzeria z w\u0142oskim klimatem, autorsk\u0105 pizz\u0105, sa\u0142atkami, kaw\u0105 prosto z W\u0142och i muzyczn\u0105 atmosfer\u0105 spotka\u0144.",
  shortDescription: "Pizza, caff\u00e8 i musica w klimacie TORRA.",
  url: "https://www.pizzatorra.pl",
  phoneDisplay: "788 779 853",
  phoneHref: "tel:788779853",
  email: "",
  address: {
    streetAddress: "Genera\u0142a Ignacego Pr\u0105dzy\u0144skiego 6 lokal B18",
    addressLocality: "Ostro\u0142\u0119ka",
    postalCode: "07-410",
    addressCountry: "PL",
  },
  coordinates: {
    latitude: "",
    longitude: "",
  },
  mapQuery:
    "Genera%C5%82a%20Ignacego%20Pr%C4%85dzy%C5%84skiego%206%20lokal%20B18%2C%20Ostro%C5%82%C4%99ka",
  ogImage: "/og-torra.jpg",
  logo: "/logo_2.png",
  heroVideo: "/hero_pizza_optimized.mp4",
  cuisines: ["Pizza", "Kuchnia w\u0142oska", "Kawa"],
  keywords: [
    "pizzeria Ostro\u0142\u0119ka",
    "pizza Ostro\u0142\u0119ka",
    "w\u0142oska pizza Ostro\u0142\u0119ka",
    "kawa w\u0142oska Ostro\u0142\u0119ka",
    "TORRA pizza caffee musica",
    "pizza Pr\u0105dzy\u0144skiego Ostro\u0142\u0119ka",
  ],
} as const;

export const mapLink = `https://www.google.com/maps/search/?api=1&query=${siteConfig.mapQuery}`;
export const mapEmbed = `https://www.google.com/maps?q=${siteConfig.mapQuery}&output=embed`;

export const fullAddress = `${siteConfig.address.streetAddress}, ${siteConfig.address.postalCode} ${siteConfig.address.addressLocality}`;
