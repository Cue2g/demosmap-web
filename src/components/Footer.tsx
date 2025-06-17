"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="py-16 px-6 md:px-12 lg:px-24 flex flex-col items-stretch bg-[#0A0726] text-white">
      {/* Top section */}
      <div className="flex flex-col md:flex-row w-full gap-12">
        {/* Left: logo + contact */}
        <div className="flex flex-col gap-6 flex-1">
          <Image alt="Demosmap" width={223} height={35} src="Demosmap.svg" />
          <div className="flex flex-col text-sm md:text-base">
            <span>+34 613 320 670</span>
            <span>info@demosmap.com</span>
          </div>
        </div>

        {/* Right: links */}
        <div className="flex flex-col sm:flex-row gap-8 flex-1 justify-between">
          {/* Legal links */}
          <div className="flex flex-col gap-2 text-sm md:text-base">
            <a href="#" target="_blank" rel="noopener noreferrer">
              {t("faqs")}
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              {t("cookiePolicy")}
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              {t("privacyPolicy")}
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              {t("termsConditions")}
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              {t("accessibilityStatement")}
            </a>
          </div>

          {/* Social links */}
          <div className="flex flex-col gap-2 text-sm md:text-base">
            <a href="#" target="_blank" rel="noopener noreferrer">
              {t("whatsapp")}
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              {t("linkedin")}
            </a>

            <a href="#" target="_blank" rel="noopener noreferrer">
              {t("x")}
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-white my-10" />

      {/* Bottom section */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <Image
          src="Financiado.svg"
          alt="Financiado"
          width={200}
          height={80}
          className="w-auto h-auto max-w-full"
        />
        <div className="text-sm md:text-right">
          <div>{t("fundedByEU")}</div>
          <div className="font-light">{t("copyright")}</div>
        </div>
      </div>
    </footer>
  );
}
