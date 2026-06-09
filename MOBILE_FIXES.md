# Mobile Fixes — TORRA

Data wdrożenia: 27.04.2026

## Zakres wdrożonych zmian

## 1. Hero section

- uporządkowano H1 przez kontrolowane łamanie na osobne linie,
- dodano pełny zestaw głównych CTA:
  - `Zobacz menu`
  - `Zadzwoń teraz`
  - `Jak dojechać`
- zmniejszono logo/pieczęć w prawym górnym rogu na mobile,
- zmniejszono dolny zapas hero, aby pierwszy ekran był ciaśniejszy i bardziej premium,
- dodano `poster` do hero video dla lepszego pierwszego renderu.

## 2. Mobile CTA i szybkie akcje

- sekcję szybkich akcji pod hero zmieniono z poziomego przewijanego toru na czytelny mobilny układ 2x2,
- zachowano szybki dostęp do menu, telefonu, mapy i godzin,
- dodano precyzyjniejsze `aria-label` do najważniejszych linków.

## 3. Sticky bottom UX

- odchudzono sticky bottom bar na mobile,
- zmniejszono zamknięty odtwarzacz `TORRA Musica`, aby mniej konkurował z hero i dolną nawigacją,
- poprawiono proporcje playera na małych ekranach.

## 4. Typografia mobile

- zmniejszono skalę H1 na telefonach,
- uspokojono rozmiary tytułów kart i sekcji,
- poprawiono line-height i proporcje tekstów pomocniczych,
- zachowano czytelność polskich znaków i styl premium.

## 5. Galeria i sekcje

- uproszczono układ galerii na mobile do statycznej siatki,
- poprawiono wysokości obrazów i proporcje kart,
- dopracowano sekcję kontaktu, aby przyciski mieściły się wygodnie obok siebie na małych ekranach.

## 6. SEO i dostępność mobile

- numer telefonu ustawiono jako `tel:788779853`,
- najważniejsze akcje otrzymały czytelniejsze etykiety dostępności,
- utrzymano jeden czytelny H1 widoczny od razu na telefonie.

## Breakpointy objęte poprawkami

- `max-width: 900px`
- `max-width: 700px`
- `max-width: 430px`

## Zmienione pliki

- [src/app/page.tsx](</c:/Users/xxx/Desktop/Pizzeria TORRA/torra3-standalone/src/app/page.tsx>)
- [src/app/page.module.css](</c:/Users/xxx/Desktop/Pizzeria TORRA/torra3-standalone/src/app/page.module.css>)
- [src/content/site.ts](</c:/Users/xxx/Desktop/Pizzeria TORRA/torra3-standalone/src/content/site.ts>)
- [eslint.config.mjs](</c:/Users/xxx/Desktop/Pizzeria TORRA/torra3-standalone/eslint.config.mjs>)

## Co jeszcze warto dopracować

- uzupełnić finalne godziny otwarcia,
- podmienić placeholder `Polityka prywatności — TODO`,
- po otrzymaniu finalnych zdjęć zrobić jeszcze jeden pass stricte pod selekcję najlepszych kadrów mobilnych,
- rozważyć, czy `TORRA Musica` ma być aktywnym elementem produkcyjnym już przy pierwszej publikacji.
