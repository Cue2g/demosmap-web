import {
  PortableText,
  type PortableTextComponents,
  type PortableTextBlock,
} from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "@/sanity/client";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Head from "next/head";

const POST_QUERY = `*[_type == "template-1" && slug.current == $slug][0]{
  _id,
  title,
  "description": coalesce(meta_description, ""),
  body,
  image
}`;

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource, width: number) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source).width(width)
    : null;

const options = { next: { revalidate: 30 } };

interface Post {
  _id: string;
  title: string;
  description: string;
  body: PortableTextBlock[];
  image?: SanityImageSource;
}

// PortableText Components
const portableTextComponents: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      const url = urlFor(value, 800)?.url();
      return url ? (
        <div className="my-6 w-full flex justify-center">
          <Image
            src={url}
            alt={(value as { alt?: string }).alt ?? "Sanity image"}
            width={800}
            height={500}
            className="rounded-lg object-cover"
          />
        </div>
      ) : null;
    },
  },
  block: {
    h1: ({ children }) => (
      <h1 className="text-3xl md:text-4xl font-bold my-6">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl md:text-3xl font-semibold my-5">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl md:text-2xl font-medium my-4">{children}</h3>
    ),
    normal: ({ children }) => (
      <p className="text-lg leading-relaxed mb-4">{children}</p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4 text-gray-600">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc ml-6 space-y-2">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal ml-6 space-y-2">{children}</ol>
    ),
  },
};

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await client.fetch<Post>(POST_QUERY, { slug }, options);
  const postImageUrl = post?.image ? urlFor(post.image, 1200)?.url() : null; // OpenGraph ideal width 1200px

  return (
    <>
      <Head>
        <title>{post?.title}</title>
        <meta name="description" content={post?.description} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={post?.title} />
        <meta property="og:description" content={post?.description} />
        {postImageUrl && <meta property="og:image" content={postImageUrl} />}
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post?.title} />
        <meta name="twitter:description" content={post?.description} />
        {postImageUrl && <meta name="twitter:image" content={postImageUrl} />}

        {/* Canonical */}
        <link
          rel="canonical"
          href={`https://demosmap.com/actualidad/${slug}`}
        />
      </Head>

      <main className="flex flex-col min-h-screen bg-white text-gray-900">
        <Nav bg sticky />

        <article className="flex-1 max-w-4xl mx-auto px-6 py-12">
          {postImageUrl && (
            <div className="relative w-full h-80 md:h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-md mb-10">
              <Image
                src={postImageUrl}
                alt={post?.title ?? "Post image"}
                fill
                className="object-cover object-center"
                priority
              />
            </div>
          )}

          <h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-gray-900 leading-tight">
            {post?.title}
          </h1>

          <div className="prose prose-lg prose-gray max-w-none">
            {Array.isArray(post?.body) && (
              <PortableText
                value={post.body}
                components={portableTextComponents}
              />
            )}
          </div>
        </article>

        <Footer />
      </main>
    </>
  );
}
