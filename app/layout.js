"use client";
import StyledComponentsRegistry from "./_lib/registry";
import { DarkModeProvider } from "./_context/DarkModeContext";
import { LanguageProvider } from "./_context/LanguageContext";
import { MobileProvider } from "./_context/MobileContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark-mode">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>React Portfolio</title>
      </head>
      <body>
        <MobileProvider>
          <LanguageProvider>
            <DarkModeProvider>
              <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
            </DarkModeProvider>
          </LanguageProvider>
        </MobileProvider>
      </body>
    </html>
  );
}
