# AUDIT REPORT — TORRA

Data audytu: 2026-04-27  
Projekt: `torra3-standalone`  
Framework: Next.js 16 App Router + React 19 + TypeScript + CSS Modules  
Środowisko wdrożeniowe: Vercel

## 1. Zakres audytu

Przeanalizowano:
- strukturę repozytorium i konfigurację builda
- routing i metadata App Router
- zawartość `src/app/page.tsx`, `layout.tsx`, `globals.css`, `page.module.css`
- assety w `public`
- konfigurację Vercel i skrypty `package.json`
- obecny stan UX/UI, SEO, performance i accessibility

## 2. Stan obecny — skrót

Projekt działa, build i lint przechodzą, deployment na Vercel jest gotowy.  
Największy problem nie dotyczy działania aplikacji, tylko jej gotowości produkcyjnej:

- zbyt dużo placeholderów i treści tymczasowych
- brak kompletnego local SEO
- brak robots/sitemap/schema
- fikcyjne opinie i niegotowe dane operacyjne
- zbyt duża odpowiedzialność jednego pliku `page.tsx`
- część interakcji i semantyki wymaga dopracowania pod accessibility i mobile UX

## 3. Najważniejsze problemy

### P0 — krytyczne przed publikacją

1. **Niegotowe dane biznesowe w treści**
   - wiele pozycji ma `XX zł`
   - godziny otwarcia są placeholderami
   - sekcja PDF jest placeholderem
   - część CTA i komunikatów sugeruje gotowość funkcji, których jeszcze nie ma

2. **Fikcyjne / redakcyjne opinie**
   - sekcja opinii zawiera przykładowe cytaty, niepotwierdzone realnymi recenzjami
   - przed publikacją należy je usunąć albo oznaczyć jako sekcję do uzupełnienia

3. **Brak podstawowych plików SEO technicznego**
   - brak `robots.txt`
   - brak `sitemap.xml` lub route-based sitemap
   - brak strukturalnych danych `schema.org` dla lokalu gastronomicznego

4. **Manifest z problemem kodowania znaków**
   - `public/site.webmanifest` zawiera rozsypane polskie znaki

### P1 — wysoki priorytet

1. **Zbyt duży, monolityczny `page.tsx`**
   - treść, dane, interakcje, audio player, menu, galerie i kontakt są w jednym pliku
   - utrudnia utrzymanie i dalszą rozbudowę

2. **Strona jest w całości klientowa**
   - `page.tsx` ma `"use client"`
   - interaktywność dotyczy tylko części widoku
   - można docelowo wydzielić interaktywne elementy do osobnych komponentów klientowych

3. **SEO lokalne jest tylko częściowo wdrożone**
   - `title`, `description`, `canonical`, OG i Twitter są obecne
   - brakuje wzmacniających treści lokalnych, schema, robots, sitemap i lepszych komunikatów NAP

4. **Braki accessibility**
   - brak widocznych stylów `:focus-visible`
   - hamburger nie ma czytelnego `aria-label`
   - część elementów dekoracyjnych i nawigacyjnych wymaga dopracowania semantyki

5. **Sekcja kontaktu i social media nie są gotowe produkcyjnie**
   - social media są tylko labelami, bez linków
   - polityka prywatności nie istnieje

### P2 — średni priorytet

1. **Nieużywane lub słabo uporządkowane assety**
   - są pliki, które wyglądają na niewykorzystane albo pomocnicze
   - repo zawiera ciężkie assety audio, które nie szkodzą runtime, ale zwiększają ciężar projektu

2. **Treść wymaga redakcyjnego dopracowania**
   - część copy jest dobra kierunkowo, ale nie zawsze spójna stylistycznie
   - warto uprościć komunikaty i wzmocnić lokalność

3. **Brak dokumentacji produkcyjnej**
   - obecny `README.md` jest zbyt krótki
   - brak dokumentów deployment / SEO / TODO produkcyjnego

## 4. Audyt struktury projektu

## Mocne strony

- nowoczesny stack: Next.js 16 + TS
- prosty routing App Router
- sensowny katalog `public`
- działający deployment Vercel
- brak nadmiarowych zależności w `package.json`

## Problemy strukturalne

- `src/app/page.tsx` jest za duży i łączy:
  - dane biznesowe
  - treści marketingowe
  - logikę menu
  - logikę playera audio
  - sekcję kontaktu
  - sekcję opinii
- `src/app/page.module.css` jest duży i obsługuje cały layout
- brak podziału na:
  - komponenty sekcyjne
  - dane treściowe / konfiguracyjne
  - pliki SEO / schema / utilities

## Docelowa struktura rekomendowana

```text
src/
  app/
    layout.tsx
    page.tsx
    globals.css
    robots.ts
    sitemap.ts
  components/
    sections/
    ui/
    music/
  content/
    site.ts
    menu.ts
    seo.ts
  lib/
    schema.ts
```

Na tym etapie nie jest konieczny pełny refactor, ale warto zacząć od wydzielenia danych i SEO.

## 5. Audyt UX/UI

## Plusy

- hero ma lepszą jakość niż wcześniej i robi mocniejsze pierwsze wrażenie
- branding TORRA jest czytelny
- ogólny kierunek premium / włoski / nastrojowy jest spójny
- mobile CTA bar pomaga w kontakcie

## Problemy

- sekcje po hero nadal wymagają dopieszczenia typografii i hierarchii
- karta menu jest czytelna, ale wymaga produkcyjnych danych i lżejszej komunikacji TODO
- część sekcji jest bardziej “makietą contentową” niż stroną gotową dla klienta
- player muzyczny jest ciekawy brandingowo, ale trzeba uważać, by nie dominował mobile UX

## 6. Audyt treści

## Główne problemy

- placeholderowe ceny i godziny
- zbyt ogólne lub tymczasowe teksty w niektórych sekcjach
- fikcyjne opinie
- brak realnych linków społecznościowych
- drobne niespójności w nazewnictwie `caffee / caffè / caffe`

## Kierunek redakcyjny

- uprościć język
- podbić lokalny kontekst: Ostrołęka, ul. Prądzyńskiego, włoski klimat
- utrzymać ton premium, ale bez pustych obietnic
- tam, gdzie brakuje danych, pokazać uczciwe `TODO` / `wkrótce`

## 7. Audyt SEO / Local SEO

## Co już jest

- `title`
- `meta description`
- `canonical`
- Open Graph
- Twitter/X
- favicon pack

## Czego brakuje

- `robots.txt`
- `sitemap.xml` / `sitemap.ts`
- `schema.org` typu `Restaurant` / `FoodEstablishment`
- wzmocnione NAP i treści lokalne
- zabezpieczenie przed indeksacją domeny `vercel.app`

## Frazy lokalne do obsłużenia

- pizzeria Ostrołęka
- pizza Ostrołęka
- włoska pizza Ostrołęka
- kawa włoska Ostrołęka
- TORRA pizza caffee musica
- pizza Prądzyńskiego Ostrołęka

## 8. Audyt performance

## Co działa dobrze

- `build` jest szybki
- hero video zostało już mocno skompresowane
- obrazy w większości są w rozsądnych rozmiarach
- audio nie jest preloadowane agresywnie

## Ryzyka

- cała strona jako client component
- dość dużo interakcji i efektów na jednej stronie
- duży wolumen assetów audio w repo
- brak dalszego rozdziału logicznego pod lazy hydration / mniejszy JS

## 9. Audyt accessibility

Najważniejsze braki:
- brak spójnych focus states
- hamburger bez opisowego `aria-label`
- niektóre elementy sterujące i statusowe wymagają lepszych etykiet
- sekcja opinii i sociale wymagają semantycznego uproszczenia

## 10. Priorytety wdrożeniowe

### Etap 1
- naprawa SEO technicznego
- usunięcie fikcyjnych treści
- poprawa danych placeholderowych do formy produkcyjnie uczciwej
- accessibility basics

### Etap 2
- dokumentacja i checklisty
- porządki w treści
- przygotowanie pod przyszłe rozbudowy

### Etap 3
- większa refaktoryzacja komponentowa
- CMS / zamówienia / wydarzenia / rezerwacje

## 11. Zmiany do wdrożenia w tej iteracji

1. Dodać `robots.ts`
2. Dodać `sitemap.ts`
3. Dodać `schema.org Restaurant`
4. Poprawić `site.webmanifest`
5. Dodać noindex dla hosta `vercel.app`
6. Urealnić treści placeholderowe:
   - ceny → `Cena wkrótce`
   - godziny → `do uzupełnienia`
   - opinie → sekcja do uzupełnienia po aktywacji GBP
7. Poprawić accessibility:
   - `aria-label`
   - `focus-visible`
8. Uzupełnić dokumentację:
   - `README.md`
   - `DEPLOYMENT.md`
   - `TODO_PRODUCTION.md`
   - `SEO_CHECKLIST.md`

## 12. Ocena gotowości

### Stan przed poprawkami z tej iteracji

Projekt:
- **nadaje się do prezentacji roboczej**
- **nie nadaje się jeszcze do finalnej publikacji bez korekt treściowych i SEO**

### Warunek publikacji produkcyjnej

Przed pełną publikacją muszą być uzupełnione:
- realne ceny
- realne godziny otwarcia
- finalne linki social media
- polityka prywatności
- docelowy profil Google Business Profile

## 13. Status po tej iteracji wdrożeniowej

W tej iteracji wdrożono:
- route-based `robots.txt`
- route-based `sitemap.xml`
- route-based manifest
- `schema.org` typu `Restaurant`
- noindex dla hostów `*.vercel.app`
- zamianę placeholderów `XX zł` na uczciwe `Cena wkrótce`
- usunięcie fikcyjnych opinii i zastąpienie ich sekcją statusową GBP
- poprawki accessibility (`aria-label`, focus states)
- rozszerzoną dokumentację produkcyjną

Do decyzji właściciela nadal pozostają:
- finalne ceny
- finalne godziny otwarcia
- polityka prywatności
- link do Google Business Profile
- linki do social media
