"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";
function SelectorLang() {
  const t = useTranslations("Nav");

  const router = useRouter();
  const locale = useLocale();

  const toggleLocale = () => {
    const newLocale = locale === "es" ? "ca" : "es";
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/`;
    router.refresh();
  };

  return (
    <div className="flex gap-2">
      <button
        onClick={toggleLocale}
        className="w-[97px] h-auto px-4 py-2 bg-transparent border-blue-500 border rounded-[10px] text-blue-500 z-50"
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

  return (
    <nav className="absolute z-50 flex justify-between items-center w-full px-16 py-6">
      <div id="logo" className="flex justify-center items-center space-x-2">
        <Image
          width={48}
          height={51}
          src="demosmapLogo.svg"
          alt="demosmapLogo.svg"
        />
        <Image width={145} height={24} src="Wordmark.svg" alt="Wordmark.svg" />
      </div>
      <div className="flex gap-8">
        <div className="flex gap-8 font-bold text-white">
          <a href="#about">{t("demosmap")}</a>
          <a href="#diagram-container">{t("features")}</a>
          <a href="#contact">{t("requestDemo")}</a>
        </div>
        <SelectorLang />
      </div>
    </nav>
  );
}
