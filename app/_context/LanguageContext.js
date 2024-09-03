"use client";

import { createContext, useContext, useState } from "react";
import { configEs } from "@/app/configEs";
import { configEn } from "@/app/configEn";

const LanguageContext = createContext();

function LanguageProvider({ children }) {
  const [config, setConfig] = useState(configEn);

  function toggleLanguage() {
    setConfig((lang) => (lang === configEn ? configEs : configEn));
  }

  return (
    <LanguageContext.Provider value={{ config, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined)
    throw new Error("LanguageContext was used outside of LanguageProvider");
  return context;
}

export { LanguageProvider, useLanguage };
