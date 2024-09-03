"use client";

import ButtonToggle from "@/app/_components/ButtonToggle";
import { useLanguage } from "@/app/_context/LanguageContext";

function LanguageToggle() {
  const { config, toggleLanguage } = useLanguage();
  const { language } = config.icons;

  return <ButtonToggle onClick={toggleLanguage}>{language}</ButtonToggle>;
}

export default LanguageToggle;
