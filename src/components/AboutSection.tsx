"use client";
import { useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
export default function AboutSection() {
  const locale = useLocale();
  const t = useTranslations("AboutSection");
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const videoEl = videoRef.current;
    if (!videoEl) return;

    // Opciones del observer: activamos cuando al menos 50% del video está visible
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoEl.play().catch(() => {
              console.log("error reproduciendo video");
            });
          } else {
            videoEl.pause();
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(videoEl);

    return () => {
      observer.unobserve(videoEl);
    };
  }, []);

  return (
    <section id="about" className="bg-white py-16 px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <div className="flex justify-center">
          <h2 className="relative w-fit text-3xl font-bold text-gray-900 p-2 border-b-2 border-b-blue-600">
            {t("title")}
          </h2>
        </div>
        <p className="text-lg text-gray-700 leading-relaxed">
          {t("description")}
        </p>

        <div className="mt-6">
          <video
            ref={videoRef}
            controls
            className="mx-auto w-full max-w-xxl rounded shadow-lg"
            muted
            playsInline
          >
            <source src={`/${t("video")}.webm`} type="video/webm" />
            {locale === "en" && (
              <track
                src="en.vtt"
                kind="subtitles"
                srcLang="en"
                label="English"
                default
              />
            )}
          </video>
        </div>
      </div>
    </section>
  );
}
