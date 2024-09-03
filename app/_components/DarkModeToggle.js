"use client";

import { useDarkMode } from "@/app/_context/DarkModeContext";
import { useLanguage } from "@/app/_context/LanguageContext";
import ButtonToggle from "@/app/_components/ButtonToggle";

function DarkModeToggle() {
  const { config } = useLanguage();
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const { sun, moon } = config.icons;

  return (
    <ButtonToggle onClick={toggleDarkMode} isDarkMode={isDarkMode}>
      {isDarkMode ? moon : sun}
    </ButtonToggle>
  );
}

export default DarkModeToggle;
