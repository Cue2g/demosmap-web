"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { useRouter } from "next/navigation";

function SelectorLang({ mobile = false }: { mobile?: boolean }) {
  const t = useTranslations("Nav");
  const router = useRouter();
  const locale = useLocale();

  const toggleLocale = () => {
    const newLocale = locale === "es" ? "ca" : "es";
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/`;
    router.refresh();
    window.location.reload();
  };

  return (
    <div className={`flex flex-col ${mobile ? "gap-4" : "flex-row gap-2"}`}>
      <button
        onClick={toggleLocale}
        className="w-[97px] h-auto px-4 py-2 bg-transparent border-blue-500 border rounded-[10px] text-blue-500"
      >
        {locale === "es" ? t("langCat") : t("langEsp")}
      </button>
      <a
        className="w-[97px] h-auto px-4 py-2 bg-blue-500 text-white text-center rounded-[10px]"
        href="https://app.demosmap.com/"
      >
        Login
      </a>
    </div>
  );
}

export default function Nav() {
  const t = useTranslations("Nav");
  const [open, setOpen] = useState(false);

  return (
    <nav className="absolute z-50 flex justify-between items-center w-full px-6 md:px-16 py-6 bg-transparent">
      {/* Logo */}
      <div id="logo" className="flex items-center space-x-2">
        <Image width={48} height={51} src="demosmapLogo.svg" alt="Logo" />
        <Image width={145} height={24} src="Wordmark.svg" alt="Wordmark" />
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-8 items-center">
        <div className="flex gap-8 font-bold text-white">
          <a href="#about">{t("demosmap")}</a>
          <a href="#diagram-container">{t("features")}</a>
          <a href="#contact">{t("requestDemo")}</a>
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
        <div className="absolute top-[80px] left-0 w-full bg-white/80 px-6 py-6 flex flex-col gap-6 font-bold md:hidden
             transition-all duration-300 ease-out transform animate-slideDown">
          <a href="#about" onClick={() => setOpen(false)}>
            {t("demosmap")}
          </a>
          <a href="#diagram-container" onClick={() => setOpen(false)}>
            {t("features")}
          </a>
          <a href="#contact" onClick={() => setOpen(false)}>
            {t("requestDemo")}
          </a>
          <SelectorLang mobile />
        </div>
      )}
    </nav>
  );
}
