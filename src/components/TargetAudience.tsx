"use client";

import { useTranslations } from "next-intl";

export default function TargetAudience() {
  const t = useTranslations("TargetAudience");

  return (
    <section className="bg-[#0A0726] w-full text-white py-24 px-12 md:px-26 flex gap-8 z-50">
      <div className="basis-[40%] justify-center flex">
        <p
          className="font-semibold text-4xl"
          dangerouslySetInnerHTML={{ __html: t("title") }}
        />
      </div>

      <div className="basis-[60%] flex justify-center gap-10">
        <div>
          <span className="text-blue-600 block mb-2">
            {t("publicInstitutions.title")}
          </span>
          <ul className="list-disc list-inside">
            <li>{t("publicInstitutions.item1")}</li>
            <li>{t("publicInstitutions.item2")}</li>
          </ul>
        </div>

        <div>
          <span className="text-blue-600 block mb-2">
            {t("privateSector.title")}
          </span>
          <ul className="list-disc list-inside">
            <li>{t("privateSector.item1")}</li>
            <li>{t("privateSector.item2")}</li>
            <li>{t("privateSector.item3")}</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
