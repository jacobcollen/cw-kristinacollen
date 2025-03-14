import BookGrid from "../../components/BookGrid";
import BookNavbar from "../../components/BookNavbar";
import books from "~/app/data/books";

export default function BooksForAdults() {
  // Filtrera böcker för vuxna baserat på kategori
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
