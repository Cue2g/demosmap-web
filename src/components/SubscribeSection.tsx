"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
export default function SubscribeSection() {

    const t = useTranslations("SubscribeSection");
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState<"success" | "error" | "exist"| null>(null);

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


            if(res.status === 409) return setStatus("exist");
            if(!res.ok) return setStatus("error");

            setStatus("success");
            setEmail("");

        } catch {
            setStatus("error");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="relative w-full py-16 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.2),transparent_60%)] pointer-events-none" />
            <div className="relative max-w-3xl mx-auto text-center px-6">
                <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3">
                   {t("title")}
                </h3>
                <p className="text-gray-600 mb-8 text-sm md:text-base leading-relaxed">
                    {t("subtitle")}
                    <span className="font-semibold text-blue-600">
                        Demosmap
                    </span>
                    .
                </p>
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col sm:flex-row items-center justify-center gap-3"
                >
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder={t("placeholder")}
                        className="w-full sm:w-96 px-5 py-3 rounded-[10px] border border-gray-300 bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all disabled:opacity-50"
                        disabled={loading}
                    />
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-[120px] px-4 py-2 bg-blue-500 hover:bg-blue-600 transition-colors text-white text-center rounded-[10px] font-medium"
                    >
                        {loading ? t("button.loading") : t("button.default")}
                    </button>
                </form>

                {status === "success" && (
                    <p className="text-green-600 mt-4 text-sm animate-fade-in">
                        {t("success")}
                    </p>
                )}
                {status === "error" && (
                    <p className="text-red-600 mt-4 text-sm animate-fade-in">
                      {t("error")}
                    </p>
                )}

                {status === "exist" && (
                    <p className="text-orange-600 mt-4 text-sm animate-fade-in">
                      {t("exist")}
                    </p>
                )}
            </div>
        </section>
    );
}
