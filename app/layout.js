"use client";

import StyledComponentsRegistry from "@/app/_lib/registry";
import { DarkModeProvider } from "@/app/_context/DarkModeContext";
import { LanguageProvider } from "@/app/_context/LanguageContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark-mode">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>React Portfolio</title>
      </head>
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
