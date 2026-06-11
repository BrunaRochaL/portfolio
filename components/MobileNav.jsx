"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import Logo from "./Logo";

const navItems = [
  { key: "home", path: "/" },
  { key: "services", path: "/services" },
  { key: "resume", path: "/resume" },
  { key: "work", path: "/work" },
  { key: "contact", path: "/contact" },
];

const MobileNav = () => {
  const pathname = usePathname();
  const { t } = useLanguage();

  return (
    <Sheet>
      <SheetTrigger className="flex items-center justify-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col border-white/10 bg-secondary">
        {/* logo */}
        <div className="mb-32 mt-20 flex justify-center">
          <Link href="/" aria-label="Bruna Rocha — início">
            <Logo />
          </Link>
        </div>
        {/* nav */}
        <nav className="flex flex-col items-center justify-center gap-8">
          {navItems.map((item, index) => {
            const isActive = item.path === pathname;
            return (
              <Link
                href={item.path}
                key={index}
                className={`${
                  isActive ? "border-b-2 border-accent text-accent" : "text-white/80"
                } text-xl transition-colors hover:text-accent`}
              >
                {t.nav[item.key]}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
