import BookGrid from "../../_components/BookGrid";
import BookNavbar from "../../_components/BookNavbar";
import books from "~/app/data/books";

export default function BooksForAdults() {
  const adultBooks = books.filter(
    (book) => book.category === "Böcker för vuxna",
  );

  return (
    <div className="container mx-auto max-w-6xl content-center p-6">
      <BookNavbar title="Böcker för vuxna" />
      <BookGrid books={adultBooks} />
    </div>
  );
}
