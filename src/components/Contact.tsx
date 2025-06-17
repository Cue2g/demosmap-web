"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Contact() {
  const t = useTranslations("Contact");

  return (
    <section className="relative w-full min-h-screen bg-gray-900">
      <Image
        src="/contact.png"
        alt={t("imageAlt")}
        className="absolute inset-0  object-cover z-0"
        fill
      />

      <div className="absolute inset-0 flex justify-center items-center flex-col">
        <form className="w-full max-w-[400px] space-y-8">
          {/* Nombre y Apellido */}
          <div className="relative z-0 group">
            <input
              type="text"
              name="full_name"
              id="full_name"
              className="pt-4 block py-2.5 pl-10 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="full_name"
              className="flex peer-focus:font-medium absolute text-lg text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              <Image
                src="User.svg"
                alt={t("labels.full_nameIconAlt")}
                width={20}
                height={20}
                className="mr-8"
              />
              {t("labels.full_name")} *
            </label>
          </div>

          {/* Teléfono */}
          <div className="relative z-0 group">
            <input
              type="tel"
              name="phone"
              id="phone"
              className="pt-4 block py-2.5 pl-10 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="phone"
              className="flex peer-focus:font-medium absolute text-lg text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              <Image
                src="TFL.svg"
                alt={t("labels.phoneIconAlt")}
                width={20}
                height={20}
                className="mr-8"
              />
              {t("labels.phone")} *
            </label>
          </div>

          {/* Correo Electrónico */}
          <div className="relative z-0 group">
            <input
              type="email"
              name="email"
              id="email"
              className="pt-4 block py-2.5 pl-10 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="email"
              className="flex peer-focus:font-medium absolute text-lg text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              <Image
                src="Mail.svg"
                alt={t("labels.emailIconAlt")}
                width={20}
                height={20}
                className="mr-8"
              />
              {t("labels.email")} *
            </label>
          </div>

          {/* Empresa u Organización */}
          <div className="relative z-0 group">
            <input
              type="text"
              name="company"
              id="company"
              className="pt-4 block py-2.5 pl-10 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="company"
              className="flex peer-focus:font-medium absolute text-lg text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              <Image
                src="Home.svg"
                alt={t("labels.companyIconAlt")}
                width={20}
                height={20}
                className="mr-8"
              />
              {t("labels.company")} *
            </label>
          </div>

          <div className="flex justify-center">
            <button className="w-[97px] h-auto px-4 py-2 bg-blue-500 text-white text-center rounded-[10px]">
              {t("button")}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
