"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";

import { useForm } from '@formspree/react';

export default function Contact() {
  const t = useTranslations("Contact");

const [state, handleSubmit] = useForm("mblykgrj");
   if (state.succeeded) {
      window.location.href = "/email-send";
  }

  return (
    <section id="contact" className="relative w-full min-h-screen bg-gray-900">
      <Image
        src="/contact.png"
        alt={t("imageAlt")}
        className="absolute inset-0 object-cover z-0"
        fill
      />

      <div className="absolute inset-0 flex-col flex justify-center items-center px-4">
        <h3 className="text-2xl font-bold text-white">{t("title")}</h3>
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md space-y-8  p-6 z-10"
        >
          {/* Input genérico */}
          {[
            {
              name: "full_name",
              type: "text",
              icon: "User.svg",
              label: t("labels.full_name"),
              alt: t("labels.full_nameIconAlt"),
            },
            {
              name: "phone",
              type: "tel",
              icon: "TFL.svg",
              label: t("labels.phone"),
              alt: t("labels.phoneIconAlt"),
            },
            {
              name: "email",
              type: "email",
              icon: "Mail.svg",
              label: t("labels.email"),
              alt: t("labels.emailIconAlt"),
            },
            {
              name: "company",
              type: "text",
              icon: "Home.svg",
              label: t("labels.company"),
              alt: t("labels.companyIconAlt"),
            },
          ].map(({ name, type, icon, label, alt }) => (
            <div key={name} className="relative z-0 group">
              <input
                type={type}
                name={name}
                id={name}
                className="pt-4 block py-2.5 pl-10 w-full text-md text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 peer"
                placeholder=" "
                required
                autoComplete="off"
              />
              <label
                htmlFor={name}
                className="flex peer-focus:font-medium absolute text-lg text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                <Image
                  src={icon}
                  alt={alt}
                  width={20}
                  height={20}
                  className="mr-4"
                />
                {label} *
              </label>
            </div>
          ))}

          <div className="flex justify-center">
            <button type="submit" disabled={state.submitting} className="w-[120px] px-4 py-2 bg-blue-500 hover:bg-blue-600 transition-colors text-white text-center rounded-[10px] font-medium">
              {t("button")}
            </button>
          </div>

        </form>
      </div>
    </section>
  );
}
