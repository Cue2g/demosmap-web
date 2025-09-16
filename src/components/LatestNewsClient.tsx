"use client";

import { Card } from "@/components/Card";
import { type SanityDocument } from "next-sanity";
import { useTranslations } from "next-intl";
interface Props {
  posts: SanityDocument[];
}

export default function LatestNewsClient({ posts }: Props) {
  const t = useTranslations("LatestNews");
  return (
    <div className="p-12 sm:p-10">
      <div>
        <h2 className="text-4xl font-bold mb-4">{t("title")}</h2>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-3">
        {posts.map((post, index) => (
          <div key={index}>
            <Card post={post} />
          </div>
        ))}
      </div>
    </div>
  );
}
