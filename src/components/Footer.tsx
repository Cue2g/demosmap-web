"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="py-24 px-24 flex-col md:px-16 flex items-stretch bg-[#0A0B37] ">
      <div className="flex w-full">
        <div className="flex flex-col gap-6 p-4 flex-1/2">
          <Image alt="Demosmap" width={223} height={35} src="Demosmap.svg" />
          <div className="flex flex-col text-white">
            <span>+34 613 320 670</span>
            <span>info@demosmap.com</span>
          </div>
        </div>

        <div className="flex flex-1/2 justify-end">
          <div className="flex flex-col gap-2 p-4 text-white">
            <a
              href="#"
              className="text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("faqs")}
            </a>
            <a
              href="#"
              className="text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("cookiePolicy")}
            </a>
            <a
              href="#"
              className="text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("privacyPolicy")}
            </a>
            <a
              href="#"
              className="text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("termsConditions")}
            </a>
            <a
              href="#"
              className="text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("accessibilityStatement")}
            </a>
          </div>

          <div className="flex flex-col gap-2 p-4 text-white">
            <a
              href="#"
              className="text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("instagram")}
            </a>
            <a
              href="#"
              className="text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("whatsapp")}
            </a>
            <a
              href="#"
              className="text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("x")}
            </a>
          </div>
        </div>
      </div>

      <div>
        <div className="w-full h-[1px] bg-white my-10" />
      </div>

      <div className="flex">
        <Image
          src="Financiado.svg"
          className="flex-1/2"
          alt="Financiado"
          width={500}
          height={500}
        />
        <div className="flex-1/2 text-white flex flex-col justify-items-end items-end">
          <span className="font-normal">{t("fundedByEU")}</span>
          <span className="font-light">{t("copyright")}</span>
        </div>
      </div>
    </footer>
  );
}
