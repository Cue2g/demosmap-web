import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Header() {
  const t = useTranslations("Header");

  return (
    <section id="Header" className="relative w-full min-h-screen bg-gray-900">
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/headerVideo.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 flex justify-center items-center flex-col space-y-12 z-10">
        <h2 className="text-[50.82px] font-semibold text-white">
          {t("title")} <br /> {t("title2")}
        </h2>

        <button className="px-6 py-2 w-[216px] h-12 bg-blue-500 text-white rounded-[10px]">
          {t("button")}
        </button>
      </div>
      <div className="absolute bottom-0 left-0 right-0 z-40 flex justify-center items-center pb-10">
        <Image src="arrowF.svg" width={16} height={20} alt="arrowF.svg" />
      </div>
    </section>
  );
}
