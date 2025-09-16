// app/components/LatestNews.tsx
import { client } from "@/sanity/client";
import { type SanityDocument } from "next-sanity";

import LatestNewsClient from "@/components/LatestNewsClient";

export default async function LatestNews() {
  const POSTS_QUERY = `*[
    _type == "template-1"
    && defined(slug.current)
  ]|order(publishedAt desc)[0...3]{title, slug, publishedAt, ...}`;
  const options = { next: { revalidate: 30 } };
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);
  return <LatestNewsClient posts={posts} />;
}
