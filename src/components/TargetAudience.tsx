"use client";

import { useTranslations } from "next-intl";

export default function TargetAudience() {
  const t = useTranslations("TargetAudience");

  return (
    <section className="bg-[#0A0726] w-full text-white py-16 px-6 md:px-12 lg:px-24 flex flex-col md:flex-row gap-12 md:gap-8 z-50">
      {/* Título */}
      <div className="md:basis-[40%] flex justify-center md:justify-start items-center">
        <p
          className="font-semibold text-3xl sm:text-4xl text-center md:text-left"
          dangerouslySetInnerHTML={{ __html: t("title") }}
        />
      </div>

      {/* Listas */}
      <div className="md:basis-[60%] flex flex-col sm:flex-row justify-center gap-10">
        {/* Instituciones públicas */}
        <div>
          <span className="text-blue-600 block mb-2 font-semibold">
            {t("publicInstitutions.title")}
          </span>
          <ul className="list-disc list-inside space-y-1 text-sm sm:text-base">
            <li>{t("publicInstitutions.item1")}</li>
            <li>{t("publicInstitutions.item2")}</li>
            <li>{t("publicInstitutions.item3")}</li>
          </ul>
        </div>

        {/* Sector privado */}
        <div>
          <span className="text-blue-600 block mb-2 font-semibold">
            {t("privateSector.title")}
          </span>
          <ul className="list-disc list-inside space-y-1 text-sm sm:text-base">
            <li>{t("privateSector.item1")}</li>
            <li>{t("privateSector.item2")}</li>
            <li>{t("privateSector.item3")}</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
