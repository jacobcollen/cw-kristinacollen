import Link from "next/link";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

const imgUrl =
  "https://yeuzbow9sg.ufs.sh/f/bBvqbGlWGkJT0YcWu7ZCy734n05dR6P2EptfIzBFHAlLseXZ";

export default async function HomePage() {
	const news = await db.query.news.findMany();

  return (
    <main className="bg-gradient-to-b from-[#2e026d] to-[#2e026d] text-white">
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
        {news.length > 0 ? (
          news.map((news, index) => (
            <article
              key={news.id}
              className={`mb-8 flex items-center gap-8 rounded-md bg-white p-6 shadow-lg ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
            >
              {/* Bild (visas bara om den finns) */}
              {news.imageUrl && (
                <div className="w-1/2 flex-shrink-0">
                  <img
                    src={news.imageUrl}
                    alt={news.title}
                    className="h-auto w-full rounded-md object-cover"
                  />
                </div>
              )}

              {/* Text */}
              <div
                className={`flex flex-col ${news.imageUrl ? "w-1/2" : "w-full"}`}
              >
                <h3 className="text-2xl font-semibold text-gray-700">
                  {news.title}
                </h3>
                <p className="mt-2 text-gray-700">{news.text}</p>

                {/* Länk (visas bara om den finns) */}
                {news.link && (
                  <a
                    href={news.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block rounded bg-[hsl(280,100%,70%)] px-4 py-2 text-white hover:bg-blue-700"
                  >
                    Läs hela artikeln här
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
