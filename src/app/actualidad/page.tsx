import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";
import Nav from "@/components/Nav";
import { Card } from "@/components/Card";
import Footer from "@/components/Footer";

const POSTS_QUERY = `*[
  _type == "template-1"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{...}`;

const options = { next: { revalidate: 30 } };

export default async function Page() {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);

  return (
    <main className="relative min-h-screen">
      <Nav bg sticky />
      <div className=" p-6 md:px-12 space-y-4">
        <h2 className="text-4xl font-bold">Últimas Noticias y Artículos</h2>
        <h4>
          Mantente informado con las noticias más relevantes y artículos de
          actualidad{" "}
        </h4>

        <div className="flex gap-4">
          <section className="flex-[3]">
            <ul className="grid grid-cols-2 gap-4">
              {posts.length > 0 ? (
                posts.map((post, index) => (
                  <li key={index}>
                    <Card post={post} />
                  </li>
                ))
              ) : (
                <li className="col-span-2 w-full text-center bg-red-500">
                  No hay noticias disponibles
                </li>
              )}
            </ul>
          </section>

          <section className="w-1/4" id="sidebar">
            <div className=" bg-[#0A0726] p-4 rounded-lg text-white">
              <h3 className="text-xl font-bold mb-4">Categorías</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:underline">
                    Noticias
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Artículos
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Opinión
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Tutoriales
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Eventos
                  </a>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}
