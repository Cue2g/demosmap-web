import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";
import Nav from "@/components/Nav";
import { Card } from "@/components/Card";

const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{...}`;

const options = { next: { revalidate: 30 } };

export default async function Page() {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);

  return (
    <main className="relative min-h-screen">
      <Nav bg sticky />
      <div className="py-16 px-6 md:px-12">
        <h2 className="text-4xl font-bold">Posts</h2>
      </div>
      <section className="px-6 md:px-12">
        <ul className="flex gap-4">
          {posts.map((post, index) => (
            <li key={index + "Card"}>
              <Card post={post} />
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
