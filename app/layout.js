"use client";
import StyledComponentsRegistry from "./_lib/registry";
import { DarkModeProvider } from "./_context/DarkModeContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark-mode">
      <body>
        <DarkModeProvider>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </DarkModeProvider>
      </body>
    </html>
  );
}
