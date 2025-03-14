import Link from "next/link";
import Image from "next/image";

interface Book {
  id: number;
  title: string;
  imgUrl: string;
  slug: string;
}

interface BookGridProps {
  books: Book[];
}

export default function BookGrid({ books }: BookGridProps) {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
      {books.map((book) => (
        <div
          key={book.id}
          className="flex flex-col overflow-hidden rounded-lg border shadow-lg"
        >
          <Image
            src={book.imgUrl}
            alt={book.title}
            width={300}
            height={400}
            className="aspect-[3/4] w-full object-cover"
          />
          <div className="flex flex-grow flex-col p-4">
            <h2 className="pb-4 text-xl font-semibold">{book.title}</h2>
            <Link
              href={`/bocker/${book.slug}`}
              className="mt-auto inline-block rounded bg-purple-900 px-4 py-2 text-white hover:bg-purple-950"
            >
              Läs mer
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
