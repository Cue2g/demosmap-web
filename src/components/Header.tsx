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
      <div className="absolute inset-0 flex flex-col justify-center items-center space-y-8 px-4 text-center z-10">
        <h2 className="font-semibold text-white leading-tight space-y-4">
          <span className="text-4xl sm:text-5xl lg:text-6xl block font-">
            {t("title")}
          </span>
          <span className="text-4xl sm:text-5xl lg:text-6xl block italic">
            {t("title2")}
          </span>
          <span className="text-4xl sm:text-5xl lg:text-6xl block">
            {t("title3")}
          </span>
        </h2>

        <div>
          <a
            href="#contact"
            className=" font-bold w-full p-6 h-12 bg-blue-500 text-white rounded-[10px] flex items-center justify-center text-center overflow-hidden text-ellipsis whitespace-nowrap"
          >
            {t("button")}
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-40 flex justify-center items-center pb-10">
        <Image src="arrowF.svg" width={16} height={20} alt="arrowF.svg" />
      </div>
    </section>
  );
}
