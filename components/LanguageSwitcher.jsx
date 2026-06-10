"use client";

import { useEffect, useRef, useState } from "react";
import { HiOutlineGlobeAlt } from "react-icons/hi2";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { LOCALES, LOCALE_LABELS } from "@/lib/i18n/translations";

const LOCALE_NAMES = {
  pt: "Português",
  en: "English",
  es: "Español",
};

const LanguageSwitcher = ({ className = "" }) => {
  const { locale, setLocale } = useLanguage();
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-label="Change language"
        className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-sm font-semibold text-white/90 transition-colors hover:border-accent hover:text-accent"
      >
        <HiOutlineGlobeAlt className="text-lg" />
        {LOCALE_LABELS[locale]}
      </button>

      {open && (
        <ul className="absolute right-0 z-50 mt-2 w-40 overflow-hidden rounded-xl border border-white/10 bg-secondary/95 shadow-xl backdrop-blur">
          {LOCALES.map((code) => (
            <li key={code}>
              <button
                type="button"
                onClick={() => {
                  setLocale(code);
                  setOpen(false);
                }}
                className={`flex w-full items-center justify-between px-4 py-2.5 text-sm transition-colors hover:bg-white/5 ${
                  code === locale ? "text-accent" : "text-white/80"
                }`}
              >
                <span>{LOCALE_NAMES[code]}</span>
                <span className="text-xs font-semibold opacity-70">
                  {LOCALE_LABELS[code]}
                </span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageSwitcher;
