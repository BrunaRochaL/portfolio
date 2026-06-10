"use client";

import Link from "next/link";
import { Button } from "./ui/button";

// components
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

const Header = () => {
  const { t } = useLanguage();

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-primary/70 py-6 text-white backdrop-blur-md xl:py-8">
      <div className="container mx-auto flex items-center justify-between">
        {/* logo */}
        <Link href="/">
          <h1 className="font-mono text-4xl font-extrabold tracking-tighter">
            <span className="text-accent">&lt;</span>
            <span className="text-metal">br</span>
            <span className="text-accent">/&gt;</span>
          </h1>
        </Link>

        {/* desktop nav & actions */}
        <div className="hidden items-center gap-8 xl:flex">
          <Nav />
          <LanguageSwitcher />
          <Link href="/contact">
            <Button variant="y2k">{t.nav.hire}</Button>
          </Link>
        </div>

        {/* mobile actions */}
        <div className="flex items-center gap-4 xl:hidden">
          <LanguageSwitcher />
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
