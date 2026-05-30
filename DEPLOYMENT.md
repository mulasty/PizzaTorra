# DEPLOYMENT — TORRA

Ten dokument przygotowuje projekt do wdrożenia na Vercel.  
Nie uruchamia automatycznego publishu — pokazuje bezpieczny proces krok po kroku.

## 1. Założenia projektu

- Framework: **Next.js**
- Package manager: **npm**
- Build command: `npm run build`
- Install command: `npm install`
- Preview / production server: `npm run preview`
- Output directory: **nie ustawiamy ręcznie**  
  Dla Next.js na Vercel należy zostawić domyślną obsługę frameworka.
- Env variables: **aktualnie brak wymaganych zmiennych środowiskowych**
- Plik pomocniczy: `.env.example`

## 2. Konfiguracja repo pod Vercel

Repo jest przygotowane pod wdrożenie:

- `next.config.ts`
  - `reactStrictMode: true`
  - `poweredByHeader: false`
- `vercel.json`
  - framework: `nextjs`
- `.vercelignore`
  - ignoruje `.next`, `.vercel/output`, `node_modules`
- `src/app/robots.ts`
  - generuje `robots.txt`
- `src/app/sitemap.ts`
  - generuje `sitemap.xml`
- `src/app/manifest.ts`
  - generuje `manifest.webmanifest`
- `middleware.ts`
  - ustawia `X-Robots-Tag: noindex` dla hostów `*.vercel.app`
- `src/app/layout.tsx`
  - canonical
  - Open Graph
  - Twitter/X cards
  - favicony

## 3. Lokalne sprawdzenie przed push

Uruchom po kolei:

```bash
npm install
npm run lint
npm run typecheck
npm run build
npm run dev
```

Opcjonalnie sprawdzenie produkcyjnego serwera lokalnie:

```bash
npm run preview
```

Co sprawdzić ręcznie:

- strona główna działa
- mobile menu działa
- hero ładuje się poprawnie
- `robots.txt` działa
- `sitemap.xml` działa
- `manifest.webmanifest` działa
- favicony są widoczne
- `og-torra.jpg` jest dostępny

## 4. Push do GitHub

Jeżeli repo Git jest już skonfigurowane:

```bash
git status
git add .
git commit -m "Prepare TORRA for Vercel deployment"
git push origin <twoj-branch>
```

Jeżeli projekt ma workflow oparty o branch produkcyjny:
- `main` lub `master` -> produkcja
- feature branch -> preview deployment

## 5. Deployment preview na Vercel

### Wariant A — przez GitHub

1. Otwórz repo w GitHub.
2. Wypchnij branch roboczy.
3. Vercel powinien utworzyć **Preview Deployment** automatycznie, jeśli repo jest podpięte.
4. Sprawdź preview URL w panelu Vercel.

### Wariant B — przez CLI

```bash
npx vercel
```

W PowerShell na Windows:

```bash
npx.cmd vercel
```

To utworzy preview deployment bez publikacji na produkcję.

Rekomendacja:
- na Windows wygodniej traktować **Preview Deployment z GitHub/Vercel** jako główny test wdrożeniowy
- lokalne `vercel build` może na niektórych konfiguracjach Windows wpadać w ograniczenia symlinków w `.vercel/output`, mimo że zdalny build na Vercel przechodzi poprawnie

## 6. Deployment production

### Wariant A — przez GitHub

Po akceptacji preview:
- merge do brancha produkcyjnego
- Vercel zrobi produkcyjny deployment automatycznie

### Wariant B — przez CLI

```bash
npx vercel --prod
```

W PowerShell na Windows:

```bash
npx.cmd vercel --prod
```

Uwaga: tej komendy używaj dopiero po przejściu checklisty lokalnej i preview.

## 7. Podpięcie domeny

Docelowy canonical:

`https://www.pizzatorra.pl`

W panelu Vercel:

1. Otwórz projekt
2. Wejdź w `Settings -> Domains`
3. Dodaj:
   - `www.pizzatorra.pl`
   - `pizzatorra.pl`
4. Ustaw `www.pizzatorra.pl` jako domenę główną, jeśli taki ma być finalny wariant

W panelu operatora domeny ustaw rekordy DNS dokładnie tak, jak pokaże Vercel.

Najczęściej:
- `A` dla domeny głównej
- `CNAME` dla `www`

Nie zgaduj rekordów na pamięć — zawsze potwierdź je w panelu Vercel.

## 8. Co sprawdzić po publikacji

### Techniczne

- `https://www.pizzatorra.pl` działa
- `https://www.pizzatorra.pl/robots.txt` działa
- `https://www.pizzatorra.pl/sitemap.xml` działa
- `https://www.pizzatorra.pl/manifest.webmanifest` działa
- favicony odświeżyły się po cache
- `og-torra.jpg` jest publicznie dostępny

### SEO

- title jest poprawny
- canonical wskazuje `https://www.pizzatorra.pl`
- OG ładuje się poprawnie
- hosty `vercel.app` nie są indeksowane
- Google Search Console może pobrać sitemap

### UX

- mobile hero wygląda poprawnie
- sticky mobile bar nie koliduje z playerem muzyki
- wszystkie CTA działają
- Google Maps otwiera właściwą lokalizację
- telefon działa po kliknięciu na telefonie

## 9. Env variables

Aktualnie projekt nie wymaga zmiennych `.env`.

Możesz zostawić w repo plik:

```bash
.env.example
```

żeby późniejsze integracje miały jedno stałe miejsce startowe.

Jeżeli później dojdą:
- system zamówień online
- CMS
- integracja z Meta
- Google APIs
- mailing

to wtedy dodaj:
- `.env.local` lokalnie
- odpowiednie env vars w panelu Vercel

## 10. Ryzyka przed finalnym launch

Repo jest przygotowane technicznie, ale przed oficjalnym startem nadal trzeba uzupełnić:

- finalne ceny
- finalne godziny otwarcia
- politykę prywatności
- linki social media
- finalny link do Google Business Profile

## 11. Minimalna komenda release check

Przed każdym wdrożeniem:

```bash
npm run lint
npm run typecheck
npm run build
```
