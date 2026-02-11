"use client";

import { useTranslations } from "next-intl";

export default function TargetAudience() {
  const t = useTranslations("TargetAudience");

  return (
    <section className="bg-[#0A0726] w-full text-white py-24 md:py-32 px-6 flex items-center justify-center z-50">
      <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-center max-w-6xl leading-tight">
        {t("impactStatement")}
      </h2>
    </section>
  );
}
