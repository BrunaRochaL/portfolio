"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { translations, LOCALES } from "./translations";

const DEFAULT_LOCALE = "pt";
const STORAGE_KEY = "portfolio-locale";

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [locale, setLocaleState] = useState(DEFAULT_LOCALE);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored && LOCALES.includes(stored)) {
      setLocaleState(stored);
      return;
    }
    const browser = window.navigator.language?.slice(0, 2);
    if (browser && LOCALES.includes(browser)) {
      setLocaleState(browser);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = (next) => {
    if (!LOCALES.includes(next)) return;
    setLocaleState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  };

  const value = {
    locale,
    setLocale,
    t: translations[locale],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
