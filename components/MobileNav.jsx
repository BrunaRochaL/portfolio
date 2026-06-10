"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

const navItems = [
  { key: "home", path: "/" },
  { key: "services", path: "/services" },
  { key: "resume", path: "/resume" },
  { key: "work", path: "/work" },
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
        <div className="mb-32 mt-20 text-center text-2xl">
          <Link href="/">
            <h1 className="font-mono text-4xl font-extrabold tracking-tighter">
              <span className="text-accent">&lt;</span>
              <span className="text-metal">br</span>
              <span className="text-accent">/&gt;</span>
            </h1>
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
