import ButtonToggle from "./ButtonToggle";
import { useDarkMode } from "../_context/DarkModeContext";
import { useLanguage } from "../_context/LanguageContext";

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
