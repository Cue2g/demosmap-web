"use client";

import { useTranslations } from "next-intl";
import ColumsService from "./ColumsService";

export default function Services() {
  const t = useTranslations("Services");

  return (
    <section className="py-12 px-6 md:px-16 flex flex-col items-center max-w-7xl mx-auto space-y-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
        {t("mainTitle")}
      </h2>
      <div className="h-1 w-[30%] bg-[linear-gradient(to_right,_#94DF73_0%,_#71DEA9_30%,_#3DD8E9_65%,_#3A80EB_98%)] rounded-full mx-auto" />
      <div className="flex flex-wrap justify-center items-start gap-y-12 gap-x-8 md:gap-x-12">
        <ColumsService
          title={t("service1.title")}
          description={t("service1.description")}
          index={1}
        />
        <ColumsService
          title={t("service2.title")}
          description={t("service2.description")}
          index={2}
        />
        <ColumsService
          title={t("service3.title")}
          description={t("service3.description")}
          index={3}
        />

        <ColumsService
          title={t("service4.title")}
          description={t("service4.description")}
          index={4}
        />
        <ColumsService
          title={t("service5.title")}
          description={t("service5.description")}
          index={5}
        />
      </div>
    </section>
  );
}
