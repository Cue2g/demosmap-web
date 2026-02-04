"use client";

import React, { useEffect, useState, useRef } from "react";
import { useTranslations } from "next-intl";

const stepsData = [
  {
    label: "01",
    textKey: "step1",
    angle: -90,
    align: "top-[-120px] left-1/2 -translate-x-1/2 text-center",
  },
  {
    label: "02",
    textKey: "step2",
    angle: -18,
    align: "top-[-40px] left-[130%]",
  },
  {
    label: "03",
    textKey: "step3",
    angle: 54,
    align: "bottom-[-40px] left-[130%]",
  },
  {
    label: "04",
    textKey: "step4",
    angle: 126,
    align: "bottom-[-40px] right-[130%] text-right",
  },
  {
    label: "05",
    textKey: "step5",
    angle: 198,
    align: "top-[-40px] right-[130%] text-right",
  },
];

export default function Diagram() {
  const t = useTranslations("Diagram");

  const [radius, setRadius] = useState(150);
  const [size, setSize] = useState(500);
  const [isMobile, setIsMobile] = useState(false);
  const [visibleSteps, setVisibleSteps] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      const vw = window.innerWidth;
      setIsMobile(vw < 640);
      const s = vw < 640 ? 280 : vw < 768 ? 400 : vw < 1024 ? 500 : 600;
      setSize(s);
      setRadius(s / 3.4);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && visibleSteps === 0) {
          stepsData.forEach((_, i) => {
            setTimeout(() => setVisibleSteps((prev) => prev + 1), i * 600);
          });
        }
      },
      { threshold: 0.3 },
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [visibleSteps]);

  const waveSizes = [0.6, 0.8, 1.1, 1.4, 2, 2.5].map((scale) => scale * size);

  if (isMobile) {
    return (
      <div className="w-full min-h-screen bg-[#0A0B37] text-white flex flex-col items-center justify-start gap-10 py-16 px-6">
        <div className="text-center font-semibold max-w-[90%] mx-auto mb-4">
          <p className="text-2xl sm:text-3xl">{t("title")}</p>
          <div className="w-16 h-[3px] bg-blue-400 mx-auto my-3 rounded" />
        </div>

        <div className="gap-8 flex flex-col">
          {stepsData.map(({ label, textKey }, i) => (
            <div
              key={i}
              className="flex items-start gap-5 max-w-[95%] text-base sm:text-lg"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#3090FF] text-white text-md font-bold flex items-center justify-center shadow-md select-none mt-1">
                {label}
              </div>
              <div className="space-y-1">
                <p className="font-bold text-blue-400">{t(`${textKey}.title`)}</p>
                <p className="leading-relaxed text-sm opacity-90">{t(`${textKey}.description`)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      id="diagram"
      className="relative w-full min-h-[120vh] flex items-center justify-center bg-[#0A0B37] overflow-hidden px-4"
    >
      <div
        className="relative mx-auto mt-20"
        style={{ width: size, height: size, maxWidth: "100%" }}
      >
        {waveSizes.map((circleSize, i) => (
          <div
            key={i}
            className={`absolute rounded-full border z-0 ${i > 0 ? "border-[#1D1E60]" : "border-[#3A80EB]"
              }`}
            style={{
              width: `${circleSize}px`,
              height: `${circleSize}px`,
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
        ))}

        <div className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 text-white text-center font-semibold">
          <p className="text-xl sm:text-2xl border-b-2 border-blue-400 pb-1">{t("title")}</p>
        </div>

        {stepsData.map(({ label, textKey, angle, align }, i) => {
          const rad = (angle * Math.PI) / 180;
          const x = radius * Math.cos(rad);
          const y = radius * Math.sin(rad);
          const isVisible = i < visibleSteps;

          return (
            <div
              key={i}
              className={`absolute z-10 transition-all duration-500 ${isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
                }`}
              style={{
                left: `calc(50% + ${x}px)`,
                top: `calc(50% + ${y}px)`,
                transform: "translate(-50%, -50%)",
                maxWidth: "100%",
              }}
            >
              <div className="relative flex items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-[#3090FF] text-white text-sm font-bold flex items-center justify-center shadow-md z-10 select-none">
                  {label}
                </div>
                <div
                  className={`absolute text-white w-[250px] space-y-1 ${align}`}
                >
                  <p className="text-sm font-bold text-blue-400 uppercase tracking-wider">
                    {t(`${textKey}.title`)}
                  </p>
                  <p className="text-xs leading-relaxed opacity-80">
                    {t(`${textKey}.description`)}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
