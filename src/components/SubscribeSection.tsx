"use client";

import { useState } from "react";

export default function SubscribeSection() {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState<"success" | "error" | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email.includes("@")) return setStatus("error");

        setLoading(true);
        setStatus(null);

        try {
            const res = await fetch("/api/subscribe", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
            });

            if (res.ok) {
                setStatus("success");
                setEmail("");
            } else {
                setStatus("error");
            }
        } catch {
            setStatus("error");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="relative w-full py-16 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
            {/* Fondo decorativo sutil */}
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.2),transparent_60%)] pointer-events-none" />

            <div className="relative max-w-3xl mx-auto text-center px-6">
                {/* Título */}
                <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3">
                    ¿Quieres estar al día de toda nuestra actualidad?
                </h3>

                {/* Subtítulo */}
                <p className="text-gray-600 mb-8 text-sm md:text-base leading-relaxed">
                    Suscríbete y recibe comunicaciones por parte de{" "}
                    <span className="font-semibold text-blue-600">
                        Demosmap
                    </span>
                    .
                </p>

                {/* Formulario */}
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col sm:flex-row items-center justify-center gap-3"
                >
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Ingresa tu correo electrónico"
                        className="w-full sm:w-96 px-5 py-3 rounded-full border border-gray-300 bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm transition-all disabled:opacity-50"
                        disabled={loading}
                    />
                    <button
                        type="submit"
                        disabled={loading}
                        className="px-6 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 active:scale-[0.98] transition-all disabled:opacity-60"
                    >
                        {loading ? "Enviando..." : "Suscribirme"}
                    </button>
                </form>

                {/* Mensajes de estado */}
                {status === "success" && (
                    <p className="text-green-600 mt-4 text-sm animate-fade-in">
                        ¡Gracias por suscribirte! 🎉
                    </p>
                )}
                {status === "error" && (
                    <p className="text-red-600 mt-4 text-sm animate-fade-in">
                        Hubo un problema. Verifica tu correo e inténtalo
                        nuevamente.
                    </p>
                )}
            </div>
        </section>
    );
}
