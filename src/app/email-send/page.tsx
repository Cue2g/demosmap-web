"use client";

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Page() {
  const t = useTranslations("Thanks");

  return (
    <div className="relative min-h-screen bg-[#0A0726] text-white">
      <div className="h-26 w-full">
        <Nav />
      </div>

      <div className="flex flex-col items-center justify-center px-6 py-24 md:py-40 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-blue-400">
          {t("title")}
        </h1>
        <p className="max-w-2xl text-lg md:text-xl text-gray-300 mb-10">
          {t("message")}
        </p>
        <Link
          href="/"
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl transition-colors font-semibold"
        >
          {t("button")}
        </Link>
      </div>

      <Footer />
    </div>
  );
}
