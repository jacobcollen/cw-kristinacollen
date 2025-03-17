import Image from "next/image";
import { notFound } from "next/navigation";
import books from "@/data/books";

// Generera statiska parametrar för alla böcker
export async function generateStaticParams() {
  return books.map((book) => ({
    slug: book.slug,
  }));
}

export default function BookDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const book = books.find((book) => book.slug === params.slug);

  if (!book) {
    return notFound();
  }

  return (
    <div className="container mx-auto max-w-6xl p-6">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Bild på boken (vänster) */}
        <div className="w-full">
          <Image
            src={book.imgUrl}
            alt={book.title}
            width={600}
            height={800}
            className="w-full rounded-lg object-cover shadow-lg"
          />
        </div>

        {/* Bokinformation (höger) */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">{book.title}</h1>
          <p className="text-lg">
            <span className="font-semibold">Förlag:</span> {book.publisher}
          </p>
          <p className="text-lg">
            <span className="font-semibold">År:</span> {book.year}
          </p>
          <p className="text-lg">{book.description}</p>
          <p className="text-lg">
            <span className="font-semibold">Recension:</span> {book.review}
          </p>
          <a
            href={book.purchaseLink || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block rounded-lg bg-purple-900 px-6 py-2 text-white transition-colors hover:bg-purple-950"
          >
            Köp boken
          </a>
        </div>
      </div>
    </div>
  );
}
