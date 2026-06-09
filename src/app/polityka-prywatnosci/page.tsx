import type { Metadata } from "next";
import { siteConfig } from "@/content/site";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Polityka prywatności",
  description: `Polityka prywatności i cookies pizzerii ${siteConfig.name} w ${siteConfig.address.city}.`,
  alternates: {
    canonical: `${siteConfig.url}/polityka-prywatnosci`,
  },
};

const companyData = {
  name: "GASTRO-RES Sp. z o.o.",
  address: "ul. Macieja Rataja 8A, 35-116 Rzeszów",
  nip: "8133714576",
  regon: "363595727",
  krs: "0001171949",
  email: siteConfig.email,
  phone: siteConfig.phoneDisplay,
  website: siteConfig.url,
};

export default function PrivacyPolicyPage() {
  return (
    <main className={styles.page}>
      <article className={styles.article}>
        <h1 className={styles.title}>Polityka prywatności i cookies</h1>
        <p className={styles.lastUpdate}>Ostatnia aktualizacja: 9 czerwca 2026</p>

        <section>
          <h2>1. Administrator danych osobowych</h2>
          <p>
            Administratorem Twoich danych osobowych jest{" "}
            <strong>{companyData.name}</strong> z siedzibą w Rzeszowie
            ({companyData.address}), NIP: {companyData.nip}, REGON:{" "}
            {companyData.regon}, KRS: {companyData.krs}, prowadząca działalność
            gastronomiczną pod marką <strong>{siteConfig.shortName}</strong> przy
            ul. {siteConfig.address.street} w {siteConfig.address.city}.
          </p>
          <p>
            We wszystkich sprawach związanych z ochroną danych osobowych możesz
            skontaktować się z nami mailowo:{" "}
            <a href={`mailto:${companyData.email}`}>{companyData.email}</a> lub
            telefonicznie: <a href={`tel:${siteConfig.phone}`}>{companyData.phone}</a>.
          </p>
        </section>

        <section>
          <h2>2. Zakres zbieranych danych</h2>
          <p>
            Podczas korzystania ze strony <a href={companyData.website}>{companyData.website}</a>{" "}
            możemy gromadzić następujące dane:
          </p>
          <ul>
            <li>
              <strong>Dane podawane dobrowolnie</strong> — adres e-mail oraz numer
              telefonu, które przekazujesz nam w trakcie kontaktu (formularz e-mail,
              zamówienie telefoniczne).
            </li>
            <li>
              <strong>Dane techniczne</strong> — adres IP, typ przeglądarki, wersja
              systemu operacyjnego, ustawienia języka, adres URL strony odsyłającej,
              czas wizyty na stronie.
            </li>
            <li>
              <strong>Dane o aktywności</strong> — sposób interakcji z naszą stroną
              (odsłony, kliknięcia, czas spędzony na podstronach).
            </li>
          </ul>
        </section>

        <section>
          <h2>3. Cele i podstawa prawna przetwarzania</h2>
          <p>Twoje dane osobowe przetwarzamy w następujących celach:</p>
          <table>
            <thead>
              <tr>
                <th>Cel</th>
                <th>Podstawa prawna</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Kontakt i obsługa zamówień</td>
                <td>Art. 6 ust. 1 lit. b RODO (niezbędność do wykonania umowy)</td>
              </tr>
              <tr>
                <td>Marketing własny</td>
                <td>Art. 6 ust. 1 lit. f RODO (prawnie uzasadniony interes)</td>
              </tr>
              <tr>
                <td>Analityka i statystyka ruchu</td>
                <td>Art. 6 ust. 1 lit. a RODO (zgoda)</td>
              </tr>
              <tr>
                <td>Obsługa płatności i rozliczenia</td>
                <td>Art. 6 ust. 1 lit. c RODO (obowiązek prawny)</td>
              </tr>
              <tr>
                <td>Ustalenie, dochodzenie lub obrona roszczeń</td>
                <td>Art. 6 ust. 1 lit. f RODO (prawnie uzasadniony interes)</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>4. Pliki cookies i podobne technologie</h2>
          <p>
            Nasza strona wykorzystuje pliki cookies (ciasteczka) oraz podobne
            technologie w celu zapewnienia prawidłowego działania strony oraz —
            za Twoją zgodą — w celach analitycznych i reklamowych.
          </p>

          <h3>Rodzaje cookies</h3>
          <table>
            <thead>
              <tr>
                <th>Rodzaj</th>
                <th>Cel</th>
                <th>Okres przechowywania</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Niezbędne (session)</td>
                <td>Zapewnienie prawidłowego działania strony</td>
                <td>Do zamknięcia sesji</td>
              </tr>
              <tr>
                <td>Analityczne (Google Analytics)</td>
                <td>Badanie ruchu na stronie, źródła odwiedzin</td>
                <td>Do 2 lat</td>
              </tr>
              <tr>
                <td>Reklamowe (Google Ads)</td>
                <td>Wyświetlanie spersonalizowanych reklam</td>
                <td>Do 2 lat</td>
              </tr>
              <tr>
                <td>Preferencji (localStorage)</td>
                <td>Zapamiętanie Twoich ustawień zgód</td>
                <td>Do odwołania</td>
              </tr>
            </tbody>
          </table>

          <p>
            Zgodę na pliki analityczne i reklamowe wyrażasz dobrowolnie za
            pomocą banera cookies wyświetlanego przy pierwszej wizycie. Możesz
            w każdej chwili wycofać zgodę, usuwając pliki cookies w ustawieniach
            swojej przeglądarki.
          </p>
        </section>

        <section>
          <h2>5. Google Analytics i Google Ads</h2>
          <p>
            Na naszej stronie korzystamy z narzędzi Google Analytics{" "}
            {siteConfig.analytics.googleAnalyticsId && (
              <>({siteConfig.analytics.googleAnalyticsId})</>
            )}{" "}
            oraz Google Ads (AW-11452429976) dostarczanych przez Google Ireland
            Limited (Gordon House, Barrow Street, Dublin 4, Irlandia).
          </p>
          <p>
            Google Analytics wykorzystuje pliki cookies do analizy sposobu, w
            jaki korzystasz z naszej strony. Informacje o Twojej aktywności są
            przesyłane do serwerów Google. Korzystamy z opcji{" "}
            <strong>anonymize_ip</strong>, która skraca Twój adres IP przed jego
            zapisaniem.
          </p>
          <p>
            Google Ads pozwala nam wyświetlać reklamy osobom, które odwiedziły
            naszą stronę (remarketing). Więcej informacji znajdziesz w{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
            >
              polityce prywatności Google
            </a>
            .
          </p>
        </section>

        <section>
          <h2>6. Google Fonts</h2>
          <p>
            Strona korzysta z czcionek Google Fonts (Cormorant Garamond oraz
            Manrope). Przy ładowaniu czcionek Twoja przeglądarka łączy się z
            serwerami Google w celu pobrania plików czcionek. Szczegóły
            znajdziesz w{" "}
            <a
              href="https://developers.google.com/fonts/faq/privacy"
              target="_blank"
              rel="noopener noreferrer"
            >
              FAQ Google Fonts
            </a>
            .
          </p>
        </section>

        <section>
          <h2>7. Google Maps</h2>
          <p>
            Na stronie osadziliśmy mapę Google Maps, która pokazuje naszą
            lokalizację. Po załadowaniu mapy Google może gromadzić dane o Twojej
            aktywności (w tym adres IP). Nie mamy wpływu na zakres danych
            zbieranych przez Google w tym procesie.
          </p>
        </section>

        <section>
          <h2>8. Vercel — hosting</h2>
          <p>
            Nasza strona jest hostowana na platformie{" "}
            <a
              href="https://vercel.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vercel Inc.
            </a>{" "}
            (3401 Hillview Ave, Palo Alto, CA 94304, USA). Vercel może
            gromadzić adresy IP i dane techniczne w ramach świadczenia usług
            hostingowych. Dane są przetwarzane na serwerach w regionie USA na
            podstawie standardowych klauzul umownych (SCC).
          </p>
        </section>

        <section>
          <h2>9. Odbiorcy danych</h2>
          <p>
            Twoje dane możemy przekazywać następującym podmiotom:
          </p>
          <ul>
            <li>Google LLC (Analityka, Ads, Maps, Fonts) — USA</li>
            <li>Vercel Inc. (hosting) — USA</li>
            <li>
              Operator płatności (jeśli dotyczy zamówień online w przyszłości)
            </li>
            <li>
              Organy państwowe na podstawie przepisów prawa (na żądanie)
            </li>
          </ul>
        </section>

        <section>
          <h2>10. Przechowywanie danych</h2>
          <p>
            Dane osobowe przechowujemy przez okres niezbędny do realizacji celów
            wskazanych w pkt 3, a po tym czasie przez okres wymagany przepisami
            prawa (m.in. przepisy podatkowe i rachunkowe).
          </p>
          <p>
            Dane analityczne w Google Analytics są przechowywane przez okres do
            24 miesięcy. Po tym czasie są automatycznie usuwane lub
            anonimizowane.
          </p>
        </section>

        <section>
          <h2>11. Twoje prawa</h2>
          <p>Przysługuje Ci prawo do:</p>
          <ol>
            <li>Dostępu do swoich danych osobowych</li>
            <li>Sprostowania (poprawy) danych</li>
            <li>Usunięcia danych („prawo do bycia zapomnianym”)</li>
            <li>Ograniczenia przetwarzania</li>
            <li>Przenoszenia danych</li>
            <li>Wniesienia sprzeciwu wobec przetwarzania</li>
            <li>
              Cofnięcia zgody w dowolnym momencie (jeśli przetwarzanie opiera
              się na zgodzie)
            </li>
          </ol>
          <p>
            Aby skorzystać ze swoich praw, skontaktuj się z nami mailowo:{" "}
            <a href={`mailto:${companyData.email}`}>{companyData.email}</a>{" "}
            lub pisemnie na adres siedziby administratora.
          </p>
          <p>
            Masz także prawo wniesienia skargi do Prezesa Urzędu Ochrony Danych
            Osobowych (PUODO), ul. Stawki 2, 00-193 Warszawa.
          </p>
        </section>

        <section>
          <h2>12. Profilowanie</h2>
          <p>
            Twoje dane nie są wykorzystywane do zautomatyzowanego podejmowania
            decyzji ani profilowania w rozumieniu art. 22 RODO.
          </p>
        </section>

        <section>
          <h2>13. Bezpieczeństwo danych</h2>
          <p>
            Stosujemy odpowiednie środki techniczne i organizacyjne
            zabezpieczające dane osobowe przed ich przypadkowym lub umyślnym
            zniszczeniem, utratą, modyfikacją, nieuprawnionym ujawnieniem lub
            dostępem. Nasza strona korzysta z szyfrowania SSL/TLS.
          </p>
        </section>

        <section>
          <h2>14. Zmiany w polityce prywatności</h2>
          <p>
            Zastrzegamy sobie prawo do wprowadzania zmian w niniejszej polityce
            prywatności. O wszelkich zmianach poinformujemy na tej stronie. W
            przypadku istotnych zmian możemy również poinformować Cię mailowo
            lub za pomocą banera na stronie.
          </p>
        </section>

        <section>
          <h2>15. Kontakt</h2>
          <p>
            We wszystkich sprawach związanych z ochroną danych osobowych zapraszamy
            do kontaktu:
          </p>
          <address className={styles.address}>
            <strong>{companyData.name}</strong>
            <br />
            {companyData.address}
            <br />
            NIP: {companyData.nip} | REGON: {companyData.regon} | KRS: {companyData.krs}
            <br />
            E-mail: <a href={`mailto:${companyData.email}`}>{companyData.email}</a>
            <br />
            Telefon: <a href={`tel:${siteConfig.phone}`}>{companyData.phone}</a>
          </address>
        </section>
      </article>
    </main>
  );
}
