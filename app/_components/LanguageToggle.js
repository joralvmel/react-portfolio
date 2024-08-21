import { config } from "@/app/config";
import ButtonToggle from "./ButtonToggle";

function LanguageToggle() {
  const { language } = config.icons;

  return <ButtonToggle>{language}</ButtonToggle>;
}

export default LanguageToggle;
