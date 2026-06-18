import { JetBrains_Mono, Outfit, Space_Grotesk } from "next/font/google";
import "./globals.css";

// components
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import VisitTracker from "@/components/VisitTracker";
import { LanguageProvider } from "@/lib/i18n/LanguageProvider";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-outfit",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space",
});

export const metadata = {
  // When you deploy, set this to your real domain so social previews and
  // canonical URLs resolve correctly, e.g. new URL("https://brunarocha.dev").
  // metadataBase: new URL("https://your-domain.com"),
  title: {
    default: "Bruna Rocha — Full Stack Software Engineer",
    template: "%s · Bruna Rocha",
  },
  description:
    "Engenheira de software full stack especializada em React, TypeScript, Node.js e Python. Do front-end ao back-end, com foco em código limpo, testes e boas experiências de uso.",
  keywords: [
    "Bruna Rocha",
    "Full Stack Developer",
    "Software Engineer",
    "Engenheira de Software",
    "React",
    "TypeScript",
    "Next.js",
    "Node.js",
    "Python",
    "Django",
    "Tailwind CSS",
    "Front-end",
    "Back-end",
    "UI/UX",
    "Portugal",
  ],
  authors: [{ name: "Bruna Rocha Lourenço" }],
  creator: "Bruna Rocha Lourenço",
  openGraph: {
    title: "Bruna Rocha — Full Stack Software Engineer",
    description:
      "Do front-end ao back-end com React, TypeScript, Node.js e Python. Veja projetos, experiência e habilidades.",
    type: "website",
    locale: "pt_BR",
    alternateLocale: ["en_US", "es_ES"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body className={`${outfit.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
        <LanguageProvider>
          <VisitTracker />
          <ScrollProgress />
          <Header />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
