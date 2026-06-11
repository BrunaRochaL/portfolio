"use client";

import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import Logo from "./Logo";

const socials = [
  { icon: <FaGithub />, href: "https://github.com/BrunaRochaL", label: "GitHub" },
  { icon: <FaLinkedinIn />, href: "https://www.linkedin.com/in/brunarochal/", label: "LinkedIn" },
  { icon: <FaWhatsapp />, href: "https://wa.me/5553984798240", label: "WhatsApp" },
  { icon: <FaEnvelope />, href: "mailto:brunarochalourenco@hotmail.com", label: "E-mail" },
];

const Footer = () => {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-white/5 bg-primary/40">
      <div className="container mx-auto py-12">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          {/* brand */}
          <div className="max-w-sm">
            <Link href="/" aria-label="Bruna Rocha — início">
              <Logo />
            </Link>
            <p className="mt-3 text-sm text-white/70">Bruna Rocha Lourenço</p>
            <p className="text-sm text-white/40">{t.footer.tagline}</p>
          </div>



          {/* socials */}
          <div className="flex gap-4">
            {socials.map((s) => (
              <Link
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-accent/40 text-accent transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:border-transparent hover:bg-accent-gradient hover:text-primary"
              >
                {s.icon}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-2 border-t border-white/5 pt-6 text-xs text-white/40 sm:flex-row">
          <p>
            © {year} Bruna Rocha Lourenço. {t.footer.rights}
          </p>
          <p>{t.footer.madeWith}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
