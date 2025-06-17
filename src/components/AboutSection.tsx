"use client";
import { useState, useRef } from "react";
export default function AboutSection() {
  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleClick = () => {
    setShowVideo(true);
    setTimeout(() => {
      videoRef.current?.play();
    }, 0);
  };

  return (
    <section className="bg-white py-16 px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <div className="flex  justify-center">
          <h2 className=" relative w-fit  text-3xl font-bold text-gray-900 p-2 border-b-2 border-b-blue-600">
            ¿Qué es Demosmap?
          </h2>
        </div>
        <p className="text-lg text-gray-700 leading-relaxed">
          Demosmap es un software que permite realizar cuestionarios
          personalizados con capacidad de visualizar opiniones de un modo
          geolocalizado y el posterior envío de comunicaciones masivas por
          WhatsApp segmentando en función a cada subconjunto de respuestas. 
        </p>
        <button
          onClick={handleClick}
          className=" px-6 py-2 w-[216px] h-12 bg-blue-500 text-white rounded-[10px]"
        >
          Ver video explicativo
        </button>

        {showVideo && (
          <div className="mt-6">
            <video
              ref={videoRef}
              controls
              className="mx-auto w-full max-w-xl rounded shadow-lg"
            >
              <source src="/video.webm" type="video/webm" />
            </video>
          </div>
        )}
      </div>
    </section>
  );
}
