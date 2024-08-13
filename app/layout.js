import { Inter } from "next/font/google";
import StyledComponentsRegistry from "./_lib/registry";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "My Portfolio",
  description: "My web portfolio built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark-mode">
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
