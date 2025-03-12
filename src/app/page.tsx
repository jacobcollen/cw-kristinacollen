import Link from "next/link";
import { db } from "~/server/db";

type Post = {
  id: string;
  title: string;
  content: string;
  imageUrl?: string;
  link?: string;
};

const imgUrl =
  "https://yeuzbow9sg.ufs.sh/f/bBvqbGlWGkJT0YcWu7ZCy734n05dR6P2EptfIzBFHAlLseXZ";

export default async function HomePage() {
	const posts = await db.query.posts.findMany();
	console.log(posts);

  return (
    <main className="bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      {/* Hero */}
      <section className="flex min-h-screen items-center justify-center">
        <div className="container grid max-w-5xl grid-cols-1 items-center gap-8 px-6 py-16 md:grid-cols-2">
          {/* Text */}
          <div className="flex flex-col justify-center">
            <h1 className="text-6xl font-bold tracking-tight">
              Kristina <span className="text-[hsl(280,100%,70%)]">Collén</span>
            </h1>
            <p className="mt-4 text-lg">
              Kristina Collén är en passionerad författare och föreläsare som
              brinner för att inspirera och dela kunskap.
            </p>
          </div>

          {/* Bild */}
          <div className="flex justify-center">
            <img
              src={imgUrl}
              alt="Kristina Collén"
              className="w-70 rounded-sm object-cover"
            />
          </div>
        </div>
      </section>

      {/* Nyhetssektion */}
      <section className="container mx-auto max-w-5xl px-6 py-16">
        <h2 className="mb-8 text-left text-4xl font-bold">Nyheter</h2>
        {/* Nyheter */}
        {posts.length > 0 ? (
          posts.map((post, index) => (
            <article
              key={post.id}
              className={`mb-8 flex items-center gap-8 rounded-md bg-white p-6 shadow-lg ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
            >
              {/* Bild */}
              <div className="w-1/2 flex-shrink-0">
                <img
                  src={post.imageUrl || "/placeholder.jpg"}
                  alt={post.title}
                  className="h-auto w-full rounded-md object-cover"
                />
              </div>

              {/* Text */}
              <div className="flex w-1/2 flex-col">
                <h3 className="text-2xl font-semibold">{post.title}</h3>
                <p className="mt-2 text-gray-700">
                  {post.content
                    ? post.content.substring(0, 100) + "..."
                    : "Ingen beskrivning tillgänglig."}
                </p>
                {post.link && (
                  <a
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 text-blue-600 hover:underline"
                  >
                    Läs mer →
                  </a>
                )}
              </div>
            </article>
          ))
        ) : (
          <p className="text-center text-gray-300">Inga nyheter ännu.</p>
        )}
      </section>
    </main>
  );
}
