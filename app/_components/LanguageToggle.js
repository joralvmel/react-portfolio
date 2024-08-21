import ButtonToggle from "./ButtonToggle";
import { useLanguage } from "../_context/LanguageContext";

function LanguageToggle() {
  const { config, toggleLanguage } = useLanguage();
  const { language } = config.icons;

  return <ButtonToggle onClick={toggleLanguage}>{language}</ButtonToggle>;
}

export default LanguageToggle;
