"use client";

import React, { useEffect, useState, useRef } from "react";

const steps = [
  { label: "01", text: "El Client vol saber l’opinió ciutadana sobre un assumpte.", angle: -90, align: "top-[-90px] left-1/2 -translate-x-1/2 text-center" },
  { label: "02", text: "Elabora un microqüestionari", angle: -30, align: "top-[-20px] left-[120%]" },
  { label: "03", text: "Mitjançant un enllaç personalitzat, el fa arribar als seus públics objectius", angle: 30, align: "bottom-[-20px] left-[120%]" },
  { label: "04", text: "La ciutadania comparteix la seva opinió.", angle: 90, align: "top-[115%] left-1/2 -translate-x-1/2 text-center" },
  { label: "05", text: "El client pot analitzar resultats en temps real.", angle: 150, align: "bottom-[-20px] right-[120%] text-right" },
  { label: "06", text: "Generar campanyes segmentades per WhatsApp adreçades a cada públic d’interès.", angle: 210, align: "top-[-20px] right-[120%] text-right" },
];

export default function Diagram() {
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
      setRadius(s / 3.5);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && visibleSteps === 0) {
          steps.forEach((_, i) => {
            setTimeout(() => setVisibleSteps((prev) => prev + 1), i * 600); 
          });
        }
      },
      { threshold: 0.3 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [visibleSteps]);

  const waveSizes = [0.6, 0.8, 1.1, 1.4, 2, 2.5].map((scale) => scale * size);

  if (isMobile) {
    return (
      <div className="w-full min-h-screen bg-[#0A0B37] text-white flex flex-col items-center justify-center gap-6 py-10 px-4">
        <div className="text-center font-semibold">
          <p className="text-lg">Cómo funciona</p>
          <div className="w-12 h-[2px] bg-white mx-auto my-2" />
        </div>
        {steps.map(({ label, text }, i) => (
          <div key={i} className="flex items-start gap-4 max-w-[90%] text-sm">
            <div className="w-8 h-8 rounded-full bg-[#3090FF] text-white text-xs font-bold flex items-center justify-center shadow-md">
              {label}
            </div>
            <p>{text}</p>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full min-h-screen flex items-center justify-center bg-[#0A0B37] overflow-hidden px-4"
    >
      <div
        className="relative mx-auto"
        style={{ width: size, height: size, maxWidth: "100%" }}
      >
        {waveSizes.map((circleSize, i) => (
          <div
            key={i}
            className={`absolute rounded-full border z-0 ${ i > 0 ? 'border-[#1D1E60]' : 'border-[#3A80EB]'}`}
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
          <p className="text-lg border-b border-blue-400">Cómo funciona</p>
    
        </div>

        {steps.map(({ label, text, angle, align }, i) => {
          const rad = (angle * Math.PI) / 180;
          const x = radius * Math.cos(rad);
          const y = radius * Math.sin(rad);
          const isVisible = i < visibleSteps;

          return (
            <div
              key={i}
              className={`absolute z-10 transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{
                left: `calc(50% + ${x}px)`,
                top: `calc(50% + ${y}px)`,
                transform: `translate(-50%, -50%)`,
                maxWidth: "100%",
              }}
            >
              <div className="relative flex items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-[#3090FF] text-white text-xs font-bold flex items-center justify-center shadow-md z-10">
                  {label}
                </div>
                <div className={`absolute text-white text-sm w-[200px] ${align}`}>
                  {text}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
