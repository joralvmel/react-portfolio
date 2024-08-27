import { createContext, useContext, useEffect, useState } from "react";

const MobileContext = createContext();

function MobileProvider({ children }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <MobileContext.Provider value={{ isMobile }}>
      {children}
    </MobileContext.Provider>
  );
}

function useMobile() {
  const context = useContext(MobileContext);
  if (context === undefined)
    throw new Error("MobileContext was used outside of MobileProvider");
  return context;
}

export { MobileProvider, useMobile };
