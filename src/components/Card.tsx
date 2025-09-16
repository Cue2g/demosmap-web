import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";

export function Card({ post }: { post: SanityDocument }) {
  const { projectId, dataset } = client.config();
  const urlFor = (source: SanityImageSource) =>
    projectId && dataset
      ? imageUrlBuilder({ projectId, dataset }).image(source)
      : null;
  const postImageUrl = post.image
    ? urlFor(post.image)?.width(550).height(310).url()
    : null;
  return (
    <div className="group bg-white border border-gray-200 rounded-lg  hover:bg-amber-100 overflow-hidden">
      <a
        href={`actualidad/${post.slug.current}`}
        className="block overflow-hidden rounded-t-lg"
      >
        {postImageUrl && (
          <div className="relative w-full aspect-video">
            <Image
              src={postImageUrl}
              alt={post.title}
              className="object-cover rounded-t-lg transform transition-transform duration-500 group-hover:scale-110"
              fill
              quality={100}
              priority
            />
          </div>
        )}
      </a>
      <div className="p-5">
        <div className="mb-3">
          <span className="rounded bg-amber-700 px-2 py-1 text-white text-sm">
            {Array.isArray(post.categories) && post.categories.length > 0
              ? post.categories.join(", ")
              : "No categories"}
          </span>
        </div>
        <a href={`actualidad/${post.slug.current}`}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-500">
            {post.title}
          </h5>
        </a>
        <div className="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-3">
          <span>{post.summary}</span>
        </div>
      </div>
    </div>
  );
}
