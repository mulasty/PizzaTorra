# Mobile Audit — TORRA

Data audytu: 27.04.2026  
Zakres testów: `320px`, `360px`, `390px`, `414px`, `430px`, `768px`

## Podsumowanie

Strona była blisko poprawnej responsywności, ale na telefonach nie prezentowała się jeszcze jak dopracowana marka premium. Największy problem nie polegał na globalnym rozsypaniu layoutu, tylko na kumulacji kilku mniejszych tarć UX:

- hero miał zbyt ciężką typografię i niekontrolowane łamanie H1,
- pierwszy ekran był zbyt zatłoczony przez sticky CTA i player muzyczny,
- szybkie akcje pod hero działały bardziej jak techniczny slider niż czytelny mobile-first układ,
- część nagłówków i kart była za duża wizualnie na małych ekranach,
- CTA w hero nie dawały od razu kompletu najważniejszych akcji.

## Największe problemy mobile

### 1. Hero na 320–390 px

- H1 łamał się mało elegancko i zajmował zbyt dużo pionowej przestrzeni.
- CTA były poprawne technicznie, ale brakowało od razu przycisku dojazdu.
- Pieczęć/logo w prawym górnym rogu było za duże względem dostępnej przestrzeni.
- Player muzyczny i sticky bottom bar wizualnie konkurowały z hero o dolną część ekranu.

### 2. Szybkie akcje pod hero

- sekcja działała jako poziomy przewijany tor kart,
- nie powodowała globalnego overflow strony, ale na mobile sprawiała wrażenie mniej dopracowanej i mniej natychmiastowej w użyciu,
- najważniejsze akcje powinny być dostępne bez dodatkowego przewijania w bok.

### 3. Typografia kart i sekcji

- część tytułów kart (`Pizza`, `Caffè`, `Musica`, karty hitów, kontakt) była zbyt duża na telefonach,
- powodowało to cięższy odbiór i zmniejszało wrażenie lekkości,
- sekcje premium lepiej działają na mobile przy ciaśniejszej, bardziej eleganckiej skali typografii.

### 4. Galeria na telefonie

- układ pomocniczych zdjęć pod galerią był oparty o poziomy przewijany pasek,
- rozwiązanie działało, ale wizualnie nie było tak uporządkowane jak statyczny układ siatki,
- na małych ekranach taki wzorzec łatwo wygląda jak tymczasowy.

### 5. Touch targets i akcje konwersyjne

- większość klikalnych elementów miała poprawną wysokość,
- brakowało jednak kilku bardziej precyzyjnych `aria-label`,
- hero potrzebował pełnego zestawu akcji: menu, telefon, mapa.

## Co sprawdzono

- brak globalnego poziomego scrolla strony,
- zachowanie pierwszego ekranu na szerokościach `320 / 360 / 390 / 414 / 430 / 768`,
- relację hero vs. sticky bottom bar vs. music player,
- czytelność H1, CTA i sekcji kart,
- działanie sekcji szybkich akcji,
- ogólną gęstość layoutu na telefonie.

## Krytyczne poprawki wymagane przed dobrą prezentacją klientowi

1. Uspokoić hero na telefonach i poprawić łamanie H1.
2. Dodać szybki dojazd jako pełne CTA w hero.
3. Ograniczyć wizualny ciężar dolnych elementów sticky na małych ekranach.
4. Zamienić szybkie akcje z poziomego slidera w czytelny układ mobilny.
5. Zmniejszyć skalę części nagłówków i kart na mobile.
6. Uporządkować mobilny układ galerii.

## Wnioski

Przed poprawkami strona była technicznie responsywna, ale nie była jeszcze w pełni gotowa do profesjonalnej prezentacji klientowi jako dopracowany produkt mobile-first. Najbardziej blokował odbiór pierwszy ekran oraz zbyt ciężka kompozycja elementów akcyjnych na małych telefonach.
