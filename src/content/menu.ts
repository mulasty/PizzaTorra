export type MenuItem = {
  name: string;
  details?: string;
  price: string;
  badge?: string;
};

export type MenuSection = {
  title: string;
  description?: string;
  items: MenuItem[];
};

export type MenuCategory = {
  id: string;
  title: string;
  description: string;
  badge?: string;
  items?: MenuItem[];
  sections?: MenuSection[];
};

export type FeaturedMenuItem = {
  name: string;
  description: string;
  price: string;
  badge: string;
  image: string;
};

export const featuredMenuItems: FeaturedMenuItem[] = [
  {
    name: "Ragazzi della Torra",
    description: "Bakłażan, cukinia, mozzarella, parmezan, oregano",
    price: "33 zł / 46 zł",
    badge: "Pizza",
    image: "/pizzatorra/pizza-1.jpeg",
  },
  {
    name: "Parma Italiano",
    description: "Szynka parmeńska, rukola, pomidorki koktajlowe, parmezan",
    price: "38 zł / 55 zł",
    badge: "Premium",
    image: "/pizzatorra/pizza-3.jpg",
  },
  {
    name: "Quattro Formaggi Classica",
    description: "Mozzarella, feta, ser pleśniowy, parmezan",
    price: "33 zł / 48 zł",
    badge: "Classica",
    image: "/pizzatorra/gallery-1.jpeg",
  },
  {
    name: "Capricciosa Sicilia",
    description: "Pizza sycylijska 60 × 60 cm lub kawałki 15 × 15 cm",
    price: "12 zł",
    badge: "Sycylijska",
    image: "/pizzatorra/gallery-3.jpeg",
  },
  {
    name: "Cobb della Torra",
    description: "Sałata, awokado, bekon grillowany, jajko, oliwki, parmezan",
    price: "39 zł",
    badge: "Insalate",
    image: "/pizzatorra/gallery-2.jpeg",
  },
  {
    name: "Caprese Vega",
    description: "Pesto, burrata, sałata, parmezan, pomidorki koktajlowe",
    price: "39 zł",
    badge: "Panuozzo",
    image: "/pizzatorra/gallery-4.jpeg",
  },
];

export const menuCategories: MenuCategory[] = [
  {
    id: "pizza",
    title: "Pizza 31,5 cm / 45 cm",
    description:
      "Włoskie ciasto według receptury TORRA. Każdą pizzę zamówisz w dwóch rozmiarach.",
    badge: "31,5 cm / 45 cm",
    items: [
      { name: "Margherita", details: "sos pomidorowy, ser, oregano", price: "24 zł / 33 zł", badge: "Wege" },
      { name: "Salame Italiano", details: "sos pomidorowy, ser, salami, oregano", price: "33 zł / 46 zł" },
      {
        name: "Ragazzi della Torra",
        details: "sos pomidorowy, ser, bakłażan, cukinia, mozzarella, parmezan, oregano",
        price: "33 zł / 46 zł",
        badge: "Polecamy",
      },
      { name: "Tonno del Mare", details: "sos pomidorowy, ser, tuńczyk, oregano", price: "33 zł / 45 zł" },
      { name: "Vesuvio", details: "sos pomidorowy, ser, szynka, oregano", price: "34 zł / 44 zł" },
      { name: "Funghi Tradizione", details: "sos pomidorowy, ser, pieczarki, oregano", price: "30 zł / 40 zł" },
      { name: "Capricciosa", details: "sos pomidorowy, ser, szynka, pieczarki", price: "35 zł / 47 zł" },
      {
        name: "Caprese",
        details: "sos pomidorowy, ser, pomidorki koktajlowe, mozzarella w plastrach, parmezan, bazylia, oregano",
        price: "31 zł / 42 zł",
        badge: "Wege",
      },
      {
        name: "Rustica della Nonna",
        details: "sos pomidorowy, ser, szynka, boczek, papryka, kabanos, kukurydza, cebula, oregano",
        price: "37 zł / 54 zł",
      },
      { name: "Spinaci", details: "sos pomidorowy, ser, szpinak, ser feta, oregano", price: "34 zł / 46 zł", badge: "Wege" },
      { name: "Hawaii", details: "sos pomidorowy, ser, szynka, ananas, oregano", price: "34 zł / 45 zł" },
      {
        name: "Vegetariana Libera",
        details: "sos pomidorowy, ser, 5 składników do wyboru",
        price: "33 zł / 46 zł",
        badge: "Wege",
      },
      {
        name: "Toscana",
        details: "sos pomidorowy, ser, salami, ser pleśniowy, pomidor, oregano",
        price: "33 zł / 52 zł",
      },
      {
        name: "Quattro Torra",
        details: "sos pomidorowy, ser, szynka, pieczarki, kukurydza, boczek, cebula",
        price: "35 zł / 52 zł",
      },
      {
        name: "Quattro Formaggi Classica",
        details: "sos pomidorowy, ser, mozzarella, feta, ser pleśniowy, parmezan",
        price: "33 zł / 48 zł",
        badge: "Wege",
      },
      {
        name: "Calzone Forno",
        details: "pizza składana, sos pomidorowy, ser, szynka, pieczarki, pieprz",
        price: "28 zł / 40 zł",
      },
      {
        name: "Greca",
        details: "sos pomidorowy, ser, oliwki, papryka, feta, bazylia, pomidor, oliwa, oregano",
        price: "34 zł / 45 zł",
        badge: "Wege",
      },
      {
        name: "Diavola Torra",
        details: "sos pomidorowy, ser, szynka, jalapeño, boczek, cebula, tabasco",
        price: "36 zł / 52 zł",
      },
      {
        name: "Parma Italiano",
        details: "sos pomidorowy, ser, szynka parmeńska, parmezan, rukola, pomidorki koktajlowe, mozzarella w plastrach, oregano",
        price: "38 zł / 55 zł",
        badge: "Polecamy",
      },
    ],
  },
  {
    id: "pizza-sycylijska",
    title: "Pizza Sycylijska",
    description:
      "Chrupiące ciasto w dużym formacie do dzielenia lub na kawałki do szybkiego lunchu.",
    badge: "60 × 60 cm / kawałki 15 × 15 cm",
    items: [
      { name: "Margherita Sicilia", price: "7 zł", badge: "Wege" },
      { name: "Caprese Sicilia", price: "10 zł", badge: "Wege" },
      { name: "Salame Sicilia", price: "10 zł" },
      { name: "Capricciosa Sicilia", price: "12 zł", badge: "Polecamy" },
      { name: "Prosciutto Parma Sicilia", price: "14 zł" },
    ],
  },
  {
    id: "insalate",
    title: "Insalate",
    description: "Lżejsze kompozycje z dodatkiem pizza brot, gotowe na lunch lub kolację.",
    items: [
      {
        name: "Cobb della Torra",
        details: "mix sałat, sos cesarski, awokado, bekon grillowany, jajko gotowane, cebula czerwona, oliwki zielone, pomidorki koktajlowe, parmezan, pizza brot",
        price: "39 zł",
      },
      {
        name: "Greca",
        details: "mix sałat, oliwki czarne, pomidorki koktajlowe, ser feta, pizza brot",
        price: "39 zł",
        badge: "Wege",
      },
      {
        name: "Tonno Misto",
        details: "tuńczyk, jajko, ser, salami, pomidor, ogórki, sałata lodowa, sos koktajlowy lub czosnkowy, pizza brot",
        price: "39 zł",
      },
    ],
  },
  {
    id: "panuozzo",
    title: "Panuozzo",
    description: "Kanapki na cieście pizzy, przygotowane zgodnie z materiałami źródłowymi TORRA.",
    items: [
      {
        name: "Bacon",
        details: "bekon, ser, jajko, sos",
        price: "39 zł",
      },
      {
        name: "Tonno Fresco",
        details: "tuńczyk, pomidory, cebula, sałata",
        price: "39 zł",
      },
      {
        name: "Caprese Vega",
        details: "pesto, burrata, sałata, parmezan, pomidorki koktajlowe",
        price: "39 zł",
        badge: "Wege",
      },
      {
        name: "Philadelphia",
        details: "ser Philadelphia, pomidory, salami, rukola",
        price: "39 zł",
      },
    ],
  },
  {
    id: "desery",
    title: "Desery",
    description: "Krótka karta deserów zgodna z menu źródłowym.",
    items: [
      {
        name: "Deser dnia / specjalność szefa kuchni",
        details: "O deser zapytaj szefa kuchni.",
        price: "28 zł",
      },
    ],
  },
  {
    id: "kawa",
    title: "Kawa",
    description: "Caffè do pizzy, deseru albo spokojnego spotkania w TORRA.",
    items: [
      { name: "Kawa czarna americano", price: "8 zł" },
      { name: "Kawa Latte", price: "9 zł", badge: "Polecamy" },
      { name: "Espresso", price: "8 zł" },
      { name: "Espresso doppio", price: "10 zł" },
      { name: "Cappuccino", price: "9 zł" },
    ],
  },
  {
    id: "napoje",
    title: "Napoje",
    description: "Herbaty, zimne napoje, woda i lemoniady do lunchu, pizzy i spotkań.",
    sections: [
      {
        title: "Herbaty",
        items: [
          { name: "Herbata do wyboru", details: "czarna, owocowa, zielona", price: "12 zł" },
          { name: "Herbata szefa kuchni", price: "18 zł", badge: "Polecamy" },
        ],
      },
      {
        title: "Napoje zimne",
        items: [
          { name: "Woda niegazowana / gazowana 0,33 l", price: "7 zł" },
          { name: "Dzbanek wody 1 l", price: "15 zł" },
          { name: "Cola / Fanta / Sprite 0,33 / 0,5 / 1 l", price: "6 / 9 / 18 zł" },
          { name: "Herbaty zimne 0,33 / 0,5 / 1 l", price: "6 / 9 / 18 zł" },
          { name: "Soki 0,33 / 0,5 / 1 l", price: "6 / 12 / 22 zł" },
          { name: "Lemoniada cytrynowa / arbuzowa / truskawkowa 0,33 / 0,5 l", price: "12 / 18 zł" },
        ],
      },
    ],
  },
];

export const mondayPromotion = {
  title: "Każdy poniedziałek",
  highlight: "Druga duża pizza -50%",
  note: "Szczegóły promocji dostępne w lokalu lub telefonicznie.",
};

export const orderingInfo = {
  title: "Zamówienia telefoniczne",
  phoneLabel: "Tel. 788 779 853",
  deliveryText: "Szybka dostawa do Twojego domu",
};

export const eventOffer = {
  title: "Planujesz event? Zróbmy to razem",
  items: [
    "spotkania integracyjne i rodzinne",
    "lunch biznesowy",
    "catering dopasowany do potrzeb, również opcja wege",
    "przy rezerwacjach urodzinowych pizza niespodzianka od szefa kuchni",
    "warsztaty kulinarne dla dzieci i młodzieży",
  ],
};

export const menuDownload = {
  href: "/torra-menu-ulotka.pdf",
  label: "Pobierz menu PDF",
};
