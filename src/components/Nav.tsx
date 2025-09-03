"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import logo from "../../public/demosmapLogo.svg";
import workmark from "../../public/Wordmark.svg";

interface NavProps {
  sticky?: boolean;
  bg?: boolean;
}

function SelectorLang({ mobile = false }: { mobile?: boolean }) {
  const router = useRouter();
  const locale = useLocale();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/`;
    router.refresh();
    window.location.reload();
  };

  return (
    <div className={`flex flex-col ${mobile ? "gap-4" : "flex-row gap-2"}`}>
      <select
        value={locale}
        onChange={handleChange}
        className="px-4 py-2 border border-blue-500 rounded-[10px] bg-transparent text-blue-500 font-bold cursor-pointer"
      >
        <option value="es">ESP</option>
        <option value="ca">CAT</option>
        <option value="en">ENG</option>
      </select>
      <a
        className="w-[97px] h-auto px-4 py-2 bg-blue-500 text-white text-center font-bold rounded-[10px]"
        href="https://app.demosmap.com/"
      >
        Login
      </a>
    </div>
  );
}

export default function Nav({ sticky = false, bg = false }: NavProps) {
  const t = useTranslations("Nav");
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const handleNavigation = (id: string) => {
    if (pathname === "/") {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      router.push(`/#${id}`);
    }
    setOpen(false);
  };

  return (
    <nav
      className={`absolute ${sticky ? "relative" : "absolute"} ${bg ? "bg-blue-600" : "bg-transparent"} z-50 flex justify-between items-center w-full px-6 md:px-16 py-6 `}
    >
      {/* Logo */}
      <Link href={"/"} id="logo" className="flex items-center space-x-2">
        <Image width={48} height={51} src={logo} alt="Logo" />
        <div className="hidden xl:block">
          <Image width={145} height={24} src={workmark} alt="Wordmark" />
        </div>
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex z-60 gap-8 items-center">
        <div className="flex gap-8 font-bold text-white">
          <button
            className="cursor-pointer"
            onClick={() => handleNavigation("about")}
          >
            {t("demosmap")}
          </button>
          <button
            className="cursor-pointer"
            onClick={() => handleNavigation("diagram")}
          >
            {t("features")}
          </button>
          <button
            className="cursor-pointer"
            onClick={() => handleNavigation("contact")}
          >
            {t("requestDemo")}
          </button>

          {/*<Link className="cursor-pointer" href="/actualidad">
            Actualidad
          </Link>*/}
        </div>
        <SelectorLang />
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden">
        <button onClick={() => setOpen(!open)} className="text-white">
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {open && (
        <div
          className="absolute top-[80px] left-0 w-full bg-white/80 px-6 py-6 flex flex-col gap-6 font-bold md:hidden
             transition-all duration-300 ease-out transform animate-slideDown z-50"
        >
          <button onClick={() => handleNavigation("about")}>
            {t("demosmap")}
          </button>

          <button onClick={() => handleNavigation("contact")}>
            {t("requestDemo")}
          </button>
          <button onClick={() => handleNavigation("diagram")}>
            {t("features")}
          </button>
          <SelectorLang mobile />
        </div>
      )}
    </nav>
  );
}
