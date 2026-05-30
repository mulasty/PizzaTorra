# TORRA — NEXT.JS CODE SNIPPETS

## src/content/site.ts
```ts
export const siteConfig = {
  name: 'TORRA pizza • caffè • musica',
  shortName: 'TORRA',
  url: 'https://www.pizzatorra.pl',
  phoneDisplay: '788 779 853',
  phoneHref: 'tel:788779853',
  email: 'info@pizzatorra.pl',
  address: {
    street: 'Generała Ignacego Prądzyńskiego 6 lok. B18',
    postalCode: '07-410',
    city: 'Ostrołęka',
    country: 'PL',
  },
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Genera%C5%82a%20Ignacego%20Pr%C4%85dzy%C5%84skiego%206%20B18%2007-410%20Ostro%C5%82%C4%99ka',
  menuPdfUrl: '/menu-torra.pdf',
  social: {
    facebook: '',
    instagram: '',
    tiktok: '',
  },
} as const;
```

## StickyMobileActions.tsx
```tsx
import { siteConfig } from '@/content/site';

export function StickyMobileActions() {
  return (
    <nav className="stickyMobileActions" aria-label="Szybkie akcje TORRA">
      <a href={siteConfig.phoneHref} aria-label="Zadzwoń do TORRA i złóż zamówienie">
        Zadzwoń
      </a>
      <a href="#menu" aria-label="Przejdź do menu TORRA">
        Menu
      </a>
      <a href={siteConfig.mapsUrl} target="_blank" rel="noopener noreferrer" aria-label="Wyznacz trasę do TORRA">
        Trasa
      </a>
    </nav>
  );
}
```

## CSS dla sticky mobile
```css
.stickyMobileActions {
  position: fixed;
  left: 12px;
  right: 12px;
  bottom: calc(12px + env(safe-area-inset-bottom));
  z-index: 50;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  padding: 8px;
  border-radius: 999px;
  background: rgba(18, 12, 9, 0.92);
  backdrop-filter: blur(16px);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.28);
}

.stickyMobileActions a {
  min-height: 44px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  font-weight: 700;
  text-decoration: none;
}

@media (min-width: 769px) {
  .stickyMobileActions {
    display: none;
  }
}

body {
  padding-bottom: calc(88px + env(safe-area-inset-bottom));
}

@media (min-width: 769px) {
  body {
    padding-bottom: 0;
  }
}
```

## Restaurant JSON-LD
```tsx
import { siteConfig } from '@/content/site';

export function RestaurantJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: siteConfig.name,
    url: siteConfig.url,
    telephone: siteConfig.phoneDisplay,
    email: siteConfig.email,
    servesCuisine: ['Pizza', 'Italian', 'Coffee'],
    priceRange: 'złzł',
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address.street,
      postalCode: siteConfig.address.postalCode,
      addressLocality: siteConfig.address.city,
      addressCountry: siteConfig.address.country,
    },
    hasMenu: `${siteConfig.url}/#menu`,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
```
