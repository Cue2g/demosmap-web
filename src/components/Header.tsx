import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Header() {
  const t = useTranslations("Header");

  return (
    <section
      id="Header"
      className="relative w-full min-h-screen bg-gray-900 flex items-center justify-center"
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/headerVideo.mp4" type="video/mp4" />
      </video>

      {/* Contenido principal */}
      <div className="absolute inset-0 flex flex-col justify-center items-center space-y-8 px-4 text-center z-10">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-tight">
          {t("title")} <br className="hidden sm:block" /> {t("title2")}
        </h2>

        <a href="#contact"  className="px-6 py-3 w-full max-w-[216px] h-12 bg-blue-500 text-white rounded-[10px]">
          {t("button")}
        </a>
      </div>

      {/* Flecha inferior */}
      <div className="absolute bottom-0 left-0 right-0 z-40 flex justify-center items-center pb-10">
        <Image src="arrowF.svg" width={16} height={20} alt="arrowF.svg" />
      </div>
    </section>
  );
}
