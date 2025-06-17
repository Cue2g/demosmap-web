"use client";

import { useTranslations } from "next-intl";
import ColumsService from "./ColumsService";

export default function Services() {
  const t = useTranslations("Services");

  return (
    <section className="py-16 px-16 md:px-16 bg-[linear-gradient(to_right,_#94DF73_0%,_#71DEA9_30%,_#3DD8E9_65%,_#3A80EB_98%)] flex justify-center gap-8 items-stretch">
      <ColumsService
        iconSrc="/Location.svg"
        title={t("service1.title")}
        description={t("service1.description")}
      />
      <ColumsService
        iconSrc="/Estadistic.svg"
        title={t("service2.title")}
        description={t("service2.description")}
      />
      <ColumsService
        iconSrc="/Whatsapp.svg"
        title={t("service3.title")}
        description={t("service3.description")}
      />
    </section>
  );
}
