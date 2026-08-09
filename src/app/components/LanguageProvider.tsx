"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { LANGUAGES } from "../lib/i18n";
import type { LangCode } from "../lib/i18n";

type LangContextValue = {
  lang: LangCode;
  setLang: (l: LangCode) => void;
};

const LangContext = createContext<LangContextValue | null>(null);

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}

const VALID_CODES = new Set<string>(LANGUAGES.map((l) => l.code));

export default function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<LangCode>("en");

  // Load saved preference
  useEffect(() => {
    const saved = localStorage.getItem("cropimageart-lang");
    if (saved && VALID_CODES.has(saved)) {
      setLangState(saved as LangCode);
    }
  }, []);

  const setLang = useCallback((l: LangCode) => {
    setLangState(l);
    localStorage.setItem("cropimageart-lang", l);
  }, []);

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
}
