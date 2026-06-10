import { JetBrains_Mono, Lora } from "next/font/google";
import "./globals.css";

// components
import Header from "@/components/Header";
import { LanguageProvider } from "@/lib/i18n/LanguageProvider";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-lora",
});

export const metadata = {
  title: "Bruna Rocha — Full Stack Software Engineer",
  description:
    "Portfólio de Bruna Rocha, engenheira de software full stack especializada em React, TypeScript, Node.js e Python.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body className={`${lora.variable} ${jetbrainsMono.variable}`}>
        <LanguageProvider>
          <Header />
          <main>{children}</main>
        </LanguageProvider>
      </body>
    </html>
  );
}
