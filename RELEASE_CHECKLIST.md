# RELEASE CHECKLIST — TORRA

Data sprawdzenia: 2026-04-27  
Tryb: final production check przed publikacją dla realnego klienta

## 1. Wynik końcowy

### Status techniczny

**PASS z zastrzeżeniami biznesowymi**

Projekt jest technicznie stabilny:
- build przechodzi
- lint przechodzi
- dev server startuje
- kluczowe route'y i assety odpowiadają poprawnie

### Status publikacyjny

**NIE publikować jeszcze jako finalnej wersji klientowskiej bez uzupełnienia danych właściciela.**

Powód:
- brak finalnych cen
- brak finalnych godzin otwarcia
- brak polityki prywatności
- brak finalnych linków social media
- brak finalnego linku do Google Business Profile

To nie są już błędy kodu, ale nadal są to realne blokery publikacji produkcyjnej.

## 2. Sprawdzenia wykonane

### Build i jakość kodu

- [x] `npm install` — środowisko zgodne z lockfile
- [x] `npm run lint`
- [x] `npm run typecheck`
- [x] `npm run build`
- [x] `npm run dev`

### Route i assety lokalne

- [x] `/`
- [x] `/robots.txt`
- [x] `/sitemap.xml`
- [x] `/manifest.webmanifest`
- [x] `/og-torra.jpg`
- [x] `/logo_2.png`
- [x] `/hero_pizza_optimized.mp4`

### SEO

- [x] title
- [x] meta description
- [x] canonical
- [x] Open Graph
- [x] Twitter/X cards
- [x] favicon pack
- [x] `robots.txt`
- [x] `sitemap.xml`
- [x] `schema.org Restaurant`
- [x] noindex dla hostów `vercel.app`

### Accessibility

- [x] focus states
- [x] `aria-label` dla hamburgera
- [x] `aria-label` dla playera muzyki
- [x] semantyczny `address`

## 3. Krytyczne błędy znalezione i naprawione

- [x] Naprawiono ryzyko błędnego kodowania danych marki i SEO w `src/content/site.ts`
- [x] Naprawiono uczciwość danych placeholderowych: `XX zł` -> `Cena wkrótce`
- [x] Usunięto fikcyjne opinie, które mogły wprowadzać w błąd
- [x] Dodano brakujące elementy technicznego SEO
- [x] Dodano zabezpieczenie przed duplicate content z `vercel.app`

## 4. Błędy i ryzyka, które nadal blokują pełną publikację

### Blokery biznesowe / prawne

1. **Brak polityki prywatności**
   - w stopce jest tylko `Polityka prywatności — TODO`
   - publikacja bez finalnej treści prawnej jest ryzykowna

2. **Brak finalnych cen**
   - strona pokazuje `Cena wkrótce`
   - jest to uczciwe, ale nie jest to gotowa karta sprzedażowa

3. **Brak finalnych godzin otwarcia**
   - dane kontaktowe nie są jeszcze kompletne
   - to osłabia lokalne SEO i użyteczność

4. **Brak finalnych linków social media**
   - obecnie są tylko komunikaty `wkrótce`

5. **Brak finalnego linku do Google Business Profile**
   - sekcja GBP została przygotowana poprawnie, ale nie ma jeszcze finalnej wizytówki

## 5. Ryzyka nieblokujące, ale ważne

1. **Cała strona nadal siedzi w jednym dużym `page.tsx`**
   - nie blokuje publikacji
   - utrudnia dalszy rozwój

2. **Paczka audio jest ciężka**
   - nie blokuje publikacji
   - ale zwiększa ciężar repo i może wpływać na odczucie mobile UX

3. **Są assety wyglądające na nieużywane**
   - np. `logo_1.png`, `pizzatorra/karim.jpg`
   - warto je później uporządkować

4. **Możliwy konflikt wizualny na małych ekranach**
   - sticky mobile bar i player muzyczny mogą konkurować o dolną część viewportu
   - warto sprawdzić to ręcznie na telefonie przed finalnym publish

## 6. Gotowość publikacyjna

### Gotowe

- kod
- build
- deployment Vercel
- SEO techniczne
- favicony i OG
- podstawowa dostępność
- przygotowanie pod local SEO

### Wymaga decyzji właściciela

- ceny
- godziny
- polityka prywatności
- social media
- Google Business Profile

## 7. Final recommendation

### Można zrobić:

- publikację testową / soft launch / prezentację klientowi
- wdrożenie na domenie jako wersję roboczą

### Nie rekomenduję jeszcze:

- oficjalnego, finalnego launchu marketingowego
- zgłaszania strony jako zamkniętej, kompletnej wersji produkcyjnej

Najpierw trzeba domknąć dane właścicielskie z sekcji blokującej.
