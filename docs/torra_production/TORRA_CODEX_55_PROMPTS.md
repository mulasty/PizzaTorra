# TORRA — PROMPTY DLA CODEX 5.5

## Prompt 1 — Audyt repo i plan refaktoru
```txt
Wciel się w senior Next.js 16 / React 19 / TypeScript architect. Przeanalizuj repo strony TORRA i przygotuj bezpieczny plan refaktoru bez zmiany brandingu. Cel: zamienić obecną stronę w sprzedażowy killer dla pizzerii lokalnej.

Sprawdź:
- strukturę src/app/page.tsx
- layout.tsx i metadata
- content/site.ts
- menu i dane statyczne
- komponenty UI
- CSS Modules
- assety public

Zwróć:
1. listę problemów produkcyjnych
2. plan komponentyzacji
3. listę plików do utworzenia
4. listę plików do zmiany
5. kolejność wdrożenia minimalizującą ryzyko regresji
Nie koduj jeszcze. Najpierw raport.
```

## Prompt 2 — Komponentyzacja bez zmiany wyglądu
```txt
Wykonaj pierwszy etap refaktoru: rozbij aktualny page.tsx na komponenty, nie zmieniając finalnego wyglądu strony.

Utwórz:
- src/components/torra/HeroSalesSection.tsx
- src/components/torra/QuickActions.tsx
- src/components/torra/MenuSalesSection.tsx
- src/components/torra/EventCateringSection.tsx
- src/components/torra/ContactLocationSection.tsx
- src/components/torra/StickyMobileActions.tsx
- src/components/torra/Footer.tsx
- src/content/menu.ts
- src/content/site.ts, jeśli wymaga uporządkowania

Warunki:
- TypeScript strict
- brak any
- brak duplikacji danych NAP
- zachowaj SEO
- zachowaj dostępność
- po zmianach uruchom lint/typecheck/build
```

## Prompt 3 — Menu sprzedażowe
```txt
Przebuduj sekcję menu tak, aby była sprzedażowa, mobile-first i oparta o dane z src/content/menu.ts.

Wymagania:
- kategorie menu: Bestseller, Pizza 31,5/45, Pizza sycylijska, Insalate, Panuozzo, Desery, Kawa, Napoje
- ceny z danych źródłowych
- badge: Bestseller, Wege, Ostre, Premium, Lunch
- CTA przy sekcji: Zadzwoń i zamów
- brak placeholderów Cena wkrótce
- renderowanie semantyczne
- czytelność na 320 px
- brak poziomego scrolla
```

## Prompt 4 — Hero jako funnel sprzedażowy
```txt
Przebuduj hero strony TORRA pod konwersję.

Nowy cel hero:
- użytkownik w 5 sekund wie, że to pizzeria w Ostrołęce
- widzi telefon, menu i trasę
- czuje włoski klimat premium
- nie traci czasu na niejasny storytelling

Copy:
H1: Włoska pizza w Ostrołęce — chrupiące ciasto, caffè i klimat TORRA
Lead: Zamów telefonicznie, wpadnij na lunch albo zaplanuj spotkanie w Feniks Hala Targowa.
CTA primary: Zadzwoń i zamów
CTA secondary: Zobacz menu
CTA tertiary: Wyznacz trasę
Trust chips: Ostrołęka • Prądzyńskiego 6 lok. B18 • pizza 31,5 / 45 cm • eventy i catering

Wymagania:
- mobile-first
- CTA min 44 px
- hero nie może powodować CLS
- video/obraz ma fallback
- zachowaj premium klimat
```

## Prompt 5 — Sticky mobile actions
```txt
Dodaj/ulepsz sticky mobile action bar dla TORRA.

Ma zawierać:
- Zadzwoń: tel:788779853
- Menu: anchor #menu
- Trasa: Google Maps link

Warunki:
- tylko mobile/tablet do określonego breakpointu
- nie zasłania treści: dodaj safe-area i padding-bottom
- zgodność z iOS safe-area-inset-bottom
- aria-label
- focus states
- brak kolizji z playerem muzyki
```

## Prompt 6 — Performance hardening
```txt
Wykonaj performance hardening strony TORRA.

Sprawdź i popraw:
- hero video loading
- obrazy: next/image, sizes, priority tylko dla LCP
- lazy loading sekcji poniżej folda
- audio/music player lazy after interaction
- font-display swap
- preconnect tylko jeśli potrzebny
- usunięcie nieużywanych assetów/importów

Po zmianach uruchom:
- npm run lint
- npm run typecheck
- npm run build

Zwróć raport: co zmieniono, jaki wpływ na LCP/CLS/TBT.
```

## Prompt 7 — SEO i schema Restaurant
```txt
Zweryfikuj i popraw SEO strony TORRA.

Wymagania:
- title lokalny i sprzedażowy
- meta description z Ostrołęką, pizzą, telefonem/klimatem
- canonical https://www.pizzatorra.pl/
- Open Graph
- Twitter cards
- robots.txt
- sitemap.xml
- schema.org Restaurant z NAP, url, telephone, address, servesCuisine, priceRange, menu, openingHours po potwierdzeniu godzin
- noindex dla vercel.app

Nie dodawaj danych niepewnych. Jeśli brak godzin lub GBP, użyj TODO w danych wewnętrznych, ale nie pokazuj publicznie placeholderów.
```

## Prompt 8 — QA production pass
```txt
Przeprowadź finalny QA production pass dla strony TORRA.

Sprawdź:
- 320, 360, 390, 414, 430, 768, 1280, 1440, 1920 px
- tel link
- mapa
- menu anchor
- PDF menu
- social linki
- brak TODO/wkrótce/cena wkrótce na produkcji
- aria-labels
- focus states
- brak horizontal overflow
- build/lint/typecheck

Zwróć tabelę:
Priorytet | Problem | Plik | Rekomendacja | Status
```
