# TORRA pizza • caffè • musica

[![Live](https://img.shields.io/badge/www-pizzatorra.pl-blue)](https://www.pizzatorra.pl)
[![Stack](https://img.shields.io/badge/Next.js-16-black)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org)

Strona internetowa pizzerii **TORRA** w Ostrołęce — włoska pizza, caffè i musica.

**Live:** [www.pizzatorra.pl](https://www.pizzatorra.pl)

---

## Stack

- **Next.js 16** (App Router)
- **React 19** + TypeScript
- **CSS Modules**
- **Vercel** (hosting + deploy)

## Struktura katalogów

```
src/
├── app/
│   ├── page.tsx          — główna strona
│   ├── layout.tsx        — metadata, OG, favicony
│   ├── globals.css       — style globalne
│   ├── page.module.css   — style strony głównej
│   ├── robots.ts         — robots.txt
│   ├── sitemap.ts        — sitemap.xml
│   ├── manifest.ts       — PWA manifest
│   └── CookieConsentBanner.tsx
├── content/
│   ├── site.ts           — dane marki, SEO, social media
│   └── menu.ts           — menu, ceny, eventy
docs/                     — dokumentacja, audyty, checklisty
public/                   — obrazy, ikony, muzyka, video
```

## Uruchomienie lokalne

```bash
npm install
npm run dev
```

http://localhost:3000

## Komendy

| Komenda | Opis |
|---------|------|
| `npm run dev` | Serwer deweloperski |
| `npm run build` | Build produkcyjny |
| `npm run lint` | ESLint |
| `npm run typecheck` | TypeScript check |
| `npm run preview` | Podgląd builda |

## Wdrożone funkcje

- Własny odtwarzacz muzyki (TORRA Musica, 10 utworów)
- Full menu online z kategoriami i cenami
- Integracja z Google Maps i Google Reviews
- Sticky mobile bar (telefon, menu, trasa, Pyszne.pl)
- Linki social media (Facebook, Instagram)
- Schema.org Restaurant (JSON-LD)
- Promocja poniedziałkowa
- Sekcja eventowa i catering
- PWA (manifest, ikony)
- SEO: Open Graph, Twitter Cards, canonical, sitemap, robots

## Rozwój

Kolejne etapy:
- Zamówienia online
- Panel zarządzania treścią / CMS
- Moduł promocji i wydarzeń
