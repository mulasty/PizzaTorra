# TORRA SALES KILLER — MASTERPLAN WDROŻENIOWY

## Cel
Przekształcić www.pizzatorra.pl z ładnej wizytówki w stronę sprzedażową, która maksymalizuje telefony, wejścia do lokalu, zamówienia, eventy i lokalne SEO.

## Pozycjonowanie marki
TORRA = pizza • caffè • musica. Marka ma wyglądać jak premium lokal z włoskim klimatem, ale działać jak szybki system sprzedażowy: klient w 5 sekund wie, że może zjeść, zadzwonić, sprawdzić menu albo dojechać.

## Najważniejsze KPI
- kliknięcia telefonu
- kliknięcia trasy Google Maps
- scroll do menu
- wejścia w PDF menu
- kliknięcia social media
- zapytania eventowe
- konwersja z mobile
- szybkość pierwszego renderu

## Faza 1 — Domknięcie produkcji
1. Uzupełnij finalne godziny otwarcia.
2. Uzupełnij finalne ceny menu.
3. Usuń wszystkie placeholdery: TODO, wkrótce, cena wkrótce.
4. Dodaj realną politykę prywatności.
5. Dodaj realny link Google Business Profile.
6. Dodaj realne social media albo ukryj sekcję do czasu publikacji.
7. Dodaj PDF menu do pobrania.

## Faza 2 — Przebudowa sprzedażowa HERO
Hero musi odpowiadać na 4 pytania:
- Co to jest? TORRA — włoska pizza, caffè i musica w Ostrołęce.
- Dlaczego mam zamówić? Chrupiące ciasto według włoskiej receptury, szybkie zamówienia telefoniczne, lokal w Feniks Hala Targowa.
- Co mam zrobić teraz? Zadzwoń, zobacz menu, wyznacz trasę.
- Czy mogę ufać? Opinie Google, zdjęcia pizzy, realny adres, realny telefon.

Proponowany hero copy:
"Włoska pizza w Ostrołęce — chrupiące ciasto, caffè i klimat TORRA"
"Zamów telefonicznie, wpadnij na lunch albo zaplanuj rodzinne spotkanie w Feniks Hala Targowa."
CTA główne: "Zadzwoń i zamów"
CTA drugie: "Zobacz menu"
CTA trzecie: "Wyznacz trasę"

## Faza 3 — Menu jako silnik sprzedaży
Menu nie może być tylko listą. Ma prowadzić do decyzji.
Sekcje:
- Najczęściej wybierane
- Pizza klasyczna 31,5 cm / 45 cm
- Pizza sycylijska
- Panuozzo
- Insalate
- Kawa i napoje
- Eventy i catering

Dodaj badge przy wybranych pozycjach:
- Bestseller
- Dla fanów ostrego
- Wege
- Na lunch
- Premium

## Faza 4 — Mobile-first conversion
Na mobile dolny sticky bar:
- Zadzwoń
- Menu
- Trasa

Warunki:
- wysokość min. 64 px
- nie zasłania treści
- dodany padding-bottom w main/footer
- player muzyki nie może nachodzić na sticky bar
- touch target min. 44 px

## Faza 5 — Social proof
Do czasu realnych opinii Google:
- nie dodawać fikcyjnych opinii
- dodać neutralny moduł: "Pierwsze opinie naszych gości pojawią się tutaj po uruchomieniu wizytówki Google"
Po uruchomieniu GBP:
- dodać link "Zobacz opinie Google"
- dodać QR do opinii
- dodać CTA: "Oceń TORRA po wizycie"

## Faza 6 — Eventy i catering
To osobny kanał sprzedaży. Sekcja powinna mieć jasny lead:
"Planujesz event? Zróbmy to razem."
Oferta:
- spotkania integracyjne i rodzinne
- lunch biznesowy
- catering dopasowany do potrzeb
- opcja wege
- urodziny z pizzą-niespodzianką od szefa kuchni
- warsztaty kulinarne dla dzieci i młodzieży
CTA: "Zapytaj o event"

## Faza 7 — Performance
Priorytety:
- hero video nie może blokować LCP
- obrazy w AVIF/WebP
- lazy loading galerii
- font-display swap
- preconnect do fontów, jeśli używane zewnętrznie
- audio player ładowany po interakcji albo lazy
- brak ciężkich animacji na mobile

## Faza 8 — SEO Local
Dane NAP muszą być identyczne na stronie, GBP i socialach:
Nazwa: TORRA pizza • caffè • musica
Adres: Generała Ignacego Prądzyńskiego 6 lokal B18, 07-410 Ostrołęka
Telefon: 788 779 853
Email: info@pizzatorra.pl
WWW: https://www.pizzatorra.pl

Frazy lokalne:
- pizza Ostrołęka
- pizzeria Ostrołęka
- pizza Feniks Hala Targowa
- pizza Prądzyńskiego Ostrołęka
- catering pizza Ostrołęka
- lunch Ostrołęka

## Faza 9 — Architektura kodu
Wydziel komponenty:
- HeroSalesSection.tsx
- QuickActions.tsx
- MenuSalesSection.tsx
- BestsellerSection.tsx
- EventCateringSection.tsx
- GoogleReviewsSection.tsx
- ContactLocationSection.tsx
- StickyMobileActions.tsx
- MusicPlayer.tsx
- Footer.tsx

Wydziel dane:
- src/content/site.ts
- src/content/menu.ts
- src/content/seo.ts
- src/content/events.ts

## Definition of Done
Strona jest gotowa, gdy:
- nie ma placeholderów
- ceny i godziny są finalne
- tel działa
- mapa działa
- PDF działa
- social linki działają albo są ukryte
- Lighthouse mobile nie pokazuje krytycznych problemów
- brak poziomego scrolla 320–430 px
- schema Restaurant przechodzi walidację
- sitemap i robots działają
- build/lint/typecheck przechodzą
