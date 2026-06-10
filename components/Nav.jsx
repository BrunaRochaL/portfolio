"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

const navItems = [
  { key: "home", path: "/" },
  { key: "services", path: "/services" },
  { key: "resume", path: "/resume" },
  { key: "work", path: "/work" },
];

const Nav = () => {
  const pathname = usePathname();
  const { t } = useLanguage();

  return (
    <nav className="flex gap-8">
      {navItems.map((item, index) => {
        const isActive = item.path === pathname;
        return (
          <Link
            href={item.path}
            key={index}
            className={`${
              isActive ? "text-accent" : "text-white/80"
            } relative font-medium transition-colors hover:text-accent after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:rounded-full after:bg-accent-gradient after:transition-all after:duration-300 after:content-[''] ${
              isActive ? "after:w-full" : "after:w-0 hover:after:w-full"
            }`}
          >
            {t.nav[item.key]}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
