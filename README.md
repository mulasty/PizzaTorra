# TORRA — strona www

Strona marki gastronomicznej **TORRA** przygotowana w Next.js pod:
- prezentację klientowi
- wdrożenie produkcyjne na Vercel
- lokalne SEO i Google Business Profile
- przyszłą rozbudowę o menu online, promocje i zamówienia

## Stack

- Next.js 16 App Router
- React 19
- TypeScript
- CSS Modules
- Vercel

## Najważniejsze pliki

- `src/app/page.tsx` — główna strona
- `src/app/layout.tsx` — metadata, OG, favicony
- `src/content/site.ts` — wspólne dane marki i SEO
- `src/app/robots.ts` — robots.txt
- `src/app/sitemap.ts` — sitemap.xml
- `src/app/manifest.ts` — web app manifest
- `middleware.ts` — noindex dla domen `vercel.app`
- `AUDIT_REPORT.md` — audyt i priorytety
- `TODO_PRODUCTION.md` — dane do uzupełnienia przed publikacją
- `SEO_CHECKLIST.md` — checklista SEO/local SEO
- `DEPLOYMENT.md` — instrukcja wdrożenia

## Uruchomienie lokalne

```bash
npm install
npm run dev
```

Domyślny adres lokalny:

`http://localhost:3000`

## Komendy

```bash
npm run dev
npm run lint
npm run typecheck
npm run build
npm run preview
```

`preview` uruchamia produkcyjny serwer Next po zbudowaniu aplikacji.

## Status projektu

Projekt jest technicznie gotowy do dalszego wdrożenia i build przechodzi poprawnie, ale przed finalną publikacją trzeba jeszcze uzupełnić dane właścicielskie:

- finalne ceny
- finalne godziny otwarcia
- linki social media
- politykę prywatności
- realny link do Google Business Profile

## SEO i produkcja

W projekcie wdrożono:
- canonical
- Open Graph
- Twitter/X cards
- favicon pack
- `robots.txt`
- `sitemap.xml`
- `schema.org` dla lokalu gastronomicznego
- noindex dla domen `*.vercel.app`

## Dalszy rozwój

Rekomendowane kolejne etapy:
- wydzielenie sekcji do komponentów
- przeniesienie treści menu do osobnego źródła danych
- CMS / panel zarządzania treścią
- moduł promocji i wydarzeń
- zamówienia online
