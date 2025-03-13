import Link from "next/link";
import Image from "next/image";

interface Book {
  id: number;
  title: string;
  imgUrl: string;
}

interface BookGridProps {
  books: Book[];
}

export default function BookGrid({ books }: BookGridProps) {
  return (
    <div className="grid grid-cols-1 gap-16 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
      {books.map((book) => (
        <div
          key={book.id}
          className="overflow-hidden rounded-lg border shadow-lg"
        >
          <Image
            src={book.imgUrl}
            alt={book.title}
            width={300}
            height={400}
            className="h-8/10 w-full object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl pb-5 font-semibold">{book.title}</h2>
            <Link
              href={`/bocker/${book.id}`}
              className="inline-block rounded bg-purple-700 px-4 py-2 text-white hover:bg-purple-800"
            >
              Läs mer
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
