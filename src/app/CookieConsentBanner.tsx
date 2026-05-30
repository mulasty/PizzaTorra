"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import { siteConfig } from "@/content/site";
import styles from "./CookieConsentBanner.module.css";

const CONSENT_STORAGE_KEY = "torra-cookie-consent-v1";
const GA_ID = siteConfig.analytics.googleAnalyticsId;

type ConsentChoice = {
  analytics: boolean;
  decidedAt: string;
};

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function ensureConsentDefaults() {
  window.dataLayer = window.dataLayer ?? [];
  window.gtag =
    window.gtag ??
    function gtag(...args: unknown[]) {
      window.dataLayer?.push(args);
    };

  window.gtag("consent", "default", {
    analytics_storage: "denied",
  });
}

function updateAnalyticsConsent(analyticsAllowed: boolean) {
  window.gtag?.("consent", "update", {
    analytics_storage: analyticsAllowed ? "granted" : "denied",
  });
}

function readStoredConsent(): ConsentChoice | null {
  try {
    const rawConsent = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!rawConsent) {
      return null;
    }

    const parsed = JSON.parse(rawConsent) as Partial<ConsentChoice>;
    if (typeof parsed.analytics !== "boolean" || typeof parsed.decidedAt !== "string") {
      return null;
    }

    return parsed as ConsentChoice;
  } catch {
    return null;
  }
}

function saveConsent(analytics: boolean) {
  const consent: ConsentChoice = {
    analytics,
    decidedAt: new Date().toISOString(),
  };

  window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(consent));
}

export function CookieConsentBanner() {
  const [bannerVisible, setBannerVisible] = useState(false);
  const [settingsVisible, setSettingsVisible] = useState(false);
  const [analyticsSelected, setAnalyticsSelected] = useState(true);
  const [analyticsAllowed, setAnalyticsAllowed] = useState(false);

  useEffect(() => {
    ensureConsentDefaults();

    const timeoutId = window.setTimeout(() => {
      const storedConsent = readStoredConsent();
      if (!storedConsent) {
        setBannerVisible(true);
        return;
      }

      updateAnalyticsConsent(storedConsent.analytics);
      setAnalyticsAllowed(storedConsent.analytics);
    }, 0);

    return () => window.clearTimeout(timeoutId);
  }, []);

  const chooseConsent = (analytics: boolean) => {
    saveConsent(analytics);
    updateAnalyticsConsent(analytics);
    setAnalyticsAllowed(analytics);
    setBannerVisible(false);
  };

  return (
    <>
      {analyticsAllowed ? (
        <>
          <Script
            id="torra-google-analytics"
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="torra-google-analytics-config" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}', { anonymize_ip: true });
            `}
          </Script>
        </>
      ) : null}

      {bannerVisible ? (
        <aside
          className={styles.banner}
          aria-label="Zgoda na cookies i analitykę"
          data-testid="cookie-consent-banner"
        >
          <div className={styles.copy}>
            <span className={styles.eyebrow}>Cookies</span>
            <h2 className={styles.title}>Pomóż nam ulepszać stronę TORRA</h2>
            <p className={styles.text}>
              Używamy tylko niezbędnego działania strony oraz opcjonalnej analityki Google.
              Analityka włączy się dopiero po Twojej zgodzie.
            </p>
            <p className={styles.privacy}>
              Polityka prywatności i cookies jest w przygotowaniu. Do tego czasu możesz
              zaakceptować lub odrzucić analitykę.
            </p>

            {settingsVisible ? (
              <div className={styles.settings}>
                <label className={styles.toggle}>
                  <input
                    type="checkbox"
                    checked={analyticsSelected}
                    onChange={(event) => setAnalyticsSelected(event.target.checked)}
                  />
                  <span>Analityka Google Analytics</span>
                </label>
              </div>
            ) : null}
          </div>

          <div className={styles.actions}>
            <button
              type="button"
              className={styles.button}
              data-testid="cookie-consent-reject"
              onClick={() => chooseConsent(false)}
            >
              Odrzucam
            </button>
            <button
              type="button"
              className={`${styles.button} ${styles.buttonGhost}`}
              data-testid="cookie-consent-settings"
              onClick={() => {
                if (settingsVisible) {
                  chooseConsent(analyticsSelected);
                  return;
                }

                setSettingsVisible(true);
              }}
            >
              {settingsVisible ? "Zapisz wybór" : "Ustawienia"}
            </button>
            <button
              type="button"
              className={`${styles.button} ${styles.buttonPrimary}`}
              data-testid="cookie-consent-accept"
              onClick={() => chooseConsent(true)}
            >
              Akceptuję
            </button>
          </div>
        </aside>
      ) : null}
    </>
  );
}
