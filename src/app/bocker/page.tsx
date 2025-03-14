import Link from "next/link";
import BookGrid from "../components/BookGrid";
import BookNavbar from "../components/BookNavbar";
import books from "../data/books";

export default function BooksPage() {
  return (
    <div className="container mx-auto max-w-6xl content-center p-6">
      <BookNavbar title="Alla Böcker" />
      <BookGrid books={books} />
    </div>
  );
}
