import { PortableText, type SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "@/sanity/client";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const POST_QUERY = `*[_type == "template-1" && slug.current == $slug][0]`;

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

const options = { next: { revalidate: 30 } };

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const post = await client.fetch<SanityDocument>(
    POST_QUERY,
    await params,
    options,
  );
  const postImageUrl = post?.image
    ? urlFor(post.image)?.url() // quitamos width/height para usar responsive
    : null;

  return (
    <main>
      <Nav bg sticky />
      <div className="mx-auto min-h-screen p-8 flex flex-col gap-4">
        {postImageUrl && (
          <div className="relative w-full h-80 md:h-96 lg:h-[500px] rounded-xl overflow-hidden">
            <Image
              src={postImageUrl}
              alt={"url"}
              fill
              className="object-cover object-center"
              priority
            />
          </div>
        )}

        <h1 className="text-4xl font-bold mb-8">{post?.title}</h1>

        <div className="prose">
          {Array.isArray(post?.body) && <PortableText value={post.body} />}
        </div>
      </div>
      
      
      <Footer />
    </main>
  );
}
