import { FaMoon, FaSun } from "react-icons/fa6";
import { useDarkMode } from "../_context/DarkModeContext";
import Button from "./Button";

function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <Button onClick={toggleDarkMode}>
      {isDarkMode ? <FaMoon /> : <FaSun />}
    </Button>
  );
}

export default DarkModeToggle;
