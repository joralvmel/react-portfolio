"use client";
import StyledComponentsRegistry from "./_lib/registry";
import { DarkModeProvider } from "./_context/DarkModeContext";
import { LanguageProvider } from "./_context/LanguageContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark-mode">
      <body>
        <LanguageProvider>
          <DarkModeProvider>
            <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
          </DarkModeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
