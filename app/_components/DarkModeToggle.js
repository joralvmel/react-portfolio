import { useDarkMode } from "../_context/DarkModeContext";
import { config } from "@/app/config";
import ButtonToggle from "./ButtonToggle";

function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const { sun, moon } = config.icons;

  return (
    <ButtonToggle onClick={toggleDarkMode} isDarkMode={isDarkMode}>
      {isDarkMode ? moon : sun}
    </ButtonToggle>
  );
}

export default DarkModeToggle;
