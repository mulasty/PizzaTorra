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
    price: "42 zł / 60 zł",
    badge: "Pizza",
    image: "/pizzatorra/pizza-1.webp",
  },
  {
    name: "Parma Italiano",
    description: "Szynka parmeńska, rukola, pomidorki koktajlowe, parmezan",
    price: "42 zł / 62 zł",
    badge: "Premium",
    image: "/pizzatorra/pizza-3.webp",
  },
  {
    name: "Quattro Formaggi Classica",
    description: "Mozzarella, feta, ser pleśniowy, parmezan",
    price: "38 zł / 56 zł",
    badge: "Classica",
    image: "/pizzatorra/pizza-2.webp",
  },
  {
    name: "Cobb della Torra",
    description: "Awokado, bekon grillowany, jajko, oliwki, parmezan",
    price: "42 zł",
    badge: "Insalate",
    image: "/pizzatorra/pizza-1.webp",
  },
  {
    name: "Caprese Vega",
    description: "Pesto, burrata, sałata, parmezan, pomidorki koktajlowe",
    price: "39 zł",
    badge: "Panuozzo",
    image: "/pizzatorra/pizza-3.webp",
  },
  {
    name: "TORRA",
    description: "Zapiekanka na bazie ciasta na pizzę, ser, pieczarki, ser feta",
    price: "15 zł",
    badge: "Zapiekanka",
    image: "/pizzatorra/pizza-2.webp",
  },
];

export const menuCategories: MenuCategory[] = [
  {
    id: "pizza",
    title: "Pizza",
    description: "Nowa karta pizzy TORRA w rozmiarach 31,5 cm i 45 cm.",
    badge: "31,5 cm / 45 cm",
    items: [
      { name: "Margherita", details: "sos pomidorowy, ser, oregano", price: "30 zł / 46 zł" },
      { name: "Salame Italiano", details: "sos pomidorowy, ser, salami, oregano", price: "38 zł / 58 zł" },
      {
        name: "Ragazzi della Torra",
        details: "sos pomidorowy, ser, bakłażan, cukinia, mozzarella, parmezan, oregano",
        price: "42 zł / 60 zł",
      },
      { name: "Tonno del Mare", details: "sos pomidorowy, ser, tuńczyk, oregano", price: "42 zł / 62 zł" },
      { name: "Vesuvio", details: "sos pomidorowy, ser, szynka, oregano", price: "38 zł / 62 zł" },
      { name: "Funghi Tradizione", details: "sos pomidorowy, ser, pieczarki, oregano", price: "35 zł / 52 zł" },
      { name: "Capricciosa", details: "sos pomidorowy, ser, szynka, pieczarki", price: "40 zł / 60 zł" },
      {
        name: "Caprese",
        details: "sos pomidorowy, ser, pomidorki koktajlowe, mozzarella w plastrach, parmezan, bazylia, oregano",
        price: "42 zł / 62 zł",
      },
      {
        name: "Rustica della Nonna",
        details: "sos pomidorowy, ser, szynka, boczek, papryka, kabanos, kukurydza, cebula, oregano",
        price: "42 zł / 64 zł",
      },
      { name: "Spinaci", details: "sos pomidorowy, ser, szpinak, ser feta, oregano", price: "40 zł / 60 zł" },
      { name: "Hawaii", details: "sos pomidorowy, ser, szynka, ananas, oregano", price: "39 zł / 62 zł" },
      { name: "Vegetariana Libera", details: "sos pomidorowy, ser, 5 składników do wyboru", price: "40 zł / 62 zł" },
      { name: "Toscana", details: "sos pomidorowy, ser, salami, ser pleśniowy, pomidor, oregano", price: "38 zł / 60 zł" },
      { name: "Quattro Torra", details: "sos pomidorowy, ser, szynka, pieczarki, kukurydza, boczek, cebula", price: "42 zł / 60 zł" },
      {
        name: "Quattro Formaggi Classica",
        details: "sos pomidorowy, ser, mozzarella, feta, ser pleśniowy, parmezan",
        price: "38 zł / 56 zł",
      },
      { name: "Calzone Forno", details: "pizza składana, sos pomidorowy, ser, szynka, pieczarki, pieprz", price: "36 zł / 48 zł" },
      {
        name: "Greca",
        details: "sos pomidorowy, ser, oliwki, papryka, feta, bazylia, pomidor, oliwa, oregano",
        price: "38 zł / 60 zł",
      },
      { name: "Diavola Torra", details: "sos pomidorowy, ser, szynka, jalapeño, boczek, cebula, tabasco", price: "42 zł / 60 zł" },
      {
        name: "Parma Italiano",
        details: "sos pomidorowy, ser, szynka parmeńska, parmezan, rukola, pomidorki koktajlowe, mozzarella w plastrach, oregano",
        price: "42 zł / 62 zł",
      },
      { name: "Bianca", details: "ser, parmezan, pieczarki, cebula, oregano", price: "38 zł / 58 zł" },
    ],
  },
  {
    id: "insalate",
    title: "Insalate",
    description: "Sałatki z pizza brot zgodne z nową kartą.",
    items: [
      {
        name: "Cobb della Torra",
        details: "mix sałat, sos cesarski, awokado, bekon grillowany, jajko gotowane, cebula czerwona, oliwki zielone, pomidorki koktajlowe, parmezan, pizza brot",
        price: "42 zł",
      },
      {
        name: "Greca",
        details: "mix sałat, oliwki czarne, pomidorki koktajlowe, ser feta, pizza brot",
        price: "42 zł",
      },
      {
        name: "Tonno Misto",
        details: "tuńczyk, jajko, ser, salami, pomidor, ogórki, sałata lodowa, sos koktajlowy lub czosnkowy, pizza brot",
        price: "42 zł",
      },
    ],
  },
  {
    id: "panuozzo",
    title: "Panuozzo",
    description: "Kanapki na cieście pizzy.",
    items: [
      { name: "Bacon", details: "bekon, ser, jajko, sos", price: "39 zł" },
      { name: "Tonno Fresco", details: "tuńczyk, pomidory, cebula, sałata", price: "39 zł" },
      { name: "Caprese Vega", details: "pesto, burrata, sałata, parmezan, pomidorki koktajlowe", price: "39 zł" },
      { name: "Philadephia", details: "ser phliladefia, pomidory, salami, rukola", price: "39 zł" },
    ],
  },
  {
    id: "zapiekanka",
    title: "Zapiekanka",
    description: "Zapiekanka TORRA z nowej karty.",
    items: [
      { name: "TORRA", details: "na bazie ciasta na pizzę, ser, pieczarki, ser feta", price: "15 zł" },
    ],
  },
  {
    id: "dodatki",
    title: "Dodatki",
    description: "Dodatki i dopłaty zgodne z nową kartą menu.",
    sections: [
      {
        title: "Pizza na grubym cieście",
        items: [
          { name: "33 cm", price: "3,9 zł" },
          { name: "45 cm", price: "4,9 zł" },
        ],
      },
      {
        title: "Warzywa",
        items: [
          {
            name: "Pieczarki, papryka, cukinia, bakłażan, ananas, cebula, kukurydza, brokuł, oliwki, pomidor, szpinak, bazylia, rukola, jalapeño",
            price: "33 cm 2,9 zł / 45 cm 4,9 zł",
          },
        ],
      },
      {
        title: "Mięsa, sery i oliwy",
        items: [
          {
            name: "boczek, szynka, salami, kabanos, mozzarella, tuńczyk, ser, mozarella w plastrach, ser feta, ser pleśniowy",
            details: "Sosy: czosnkowy / ostry / pomidor (dopłata 3 PLN)",
            price: "",
          },
          {
            name: "Oliwa: czosnkowa / ostra / parmezanowa / zwykła",
            price: "dopłata 7 PLN",
          },
        ],
      },
    ],
  },
  {
    id: "desery",
    title: "Desery",
    description: "Deser dnia według aktualnej karty.",
    items: [
      { name: "Desery", details: "O deser zapytaj szefa kuchni, specjalność dnia", price: "28 zł" },
    ],
  },
  {
    id: "kawa",
    title: "Napoje",
    description: "Kawa, herbata i napoje gorące z nowej karty.",
    items: [
      { name: "Kawa czarna", price: "8 zł" },
      { name: "Kawa Latte", price: "9 zł" },
      { name: "Espresso", price: "8 zł" },
      { name: "Cappuccino", price: "10 zł" },
      { name: "Mokka", price: "10 zł" },
      { name: "Czekolada", price: "12 zł" },
      { name: "Herbata do wyboru", details: "czarna, owocowa, zielona", price: "12 zł" },
      { name: "Herbata szefa kuchni", price: "18 zł" },
    ],
  },
  {
    id: "napoje",
    title: "Napoje zimne",
    description: "Woda, napoje, soki i lemoniady z nowej karty.",
    items: [
      { name: "Woda niegazowana / gazowana butelka 0,33 l", price: "7 zł" },
      { name: "Dzbanek wody 1 l", price: "15 zł" },
      { name: "Cola, Fanta, Sprite 0,3 / 0,5 / 1 l", price: "6 / 9 / 18 zł" },
      { name: "Tymbark 0,25 l", price: "6 zł" },
      { name: "Herbaty zimne 0,2 / 0,5 / 1 l", price: "6 / 9 / 18 zł" },
      { name: "Soki 0,2 / 0,5 / 1 l", price: "6 / 12 / 22 zł" },
      { name: "Lemoniada cytrynowa / arbuzowa / truskawkowa 0,2 / 0,5 l", price: "9 / 18 zł" },
      { name: "Piwo bezalkoholowe Peroni – 0,33 l", price: "12 zł" },
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
  title: "Zorganizuj event z TORRA",
  items: [
    {
      iconName: "users",
      name: "Spotkania integracyjne i rodzinne",
      description:
        "Kameralne przyjęcia i większe imprezy — dopasujemy menu do Twoich gości.",
    },
    {
      iconName: "briefcase",
      name: "Lunch biznesowy",
      description:
        "Catering lunchowy z dostawą pod wskazany adres. Pizza, insalate i kawa w 60 minut.",
    },
    {
      iconName: "coffee",
      name: "Catering na każdą okazję",
      description:
        "Menu układamy indywidualnie. Opcja wegańska i bezglutenowa dostępna.",
    },
    {
      iconName: "star",
      name: "Przyjęcia urodzinowe",
      description:
        "Przy rezerwacji urodzinowej pizza niespodzianka od szefa kuchni dla solenizanta.",
    },
    {
      iconName: "chef",
      name: "Warsztaty kulinarne",
      description:
        "Pokaz robienia pizzy dla dzieci i młodzieży. Praktyczna nauka z włoskimi dodatkami.",
    },
  ],
};

export const menuDownload = {
  href: "/Pizza%20Torra%20Menu.png",
  label: "Pobierz menu",
};
