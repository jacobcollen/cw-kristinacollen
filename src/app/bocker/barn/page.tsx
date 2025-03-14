import BookGrid from "../../components/BookGrid";
import BookNavbar from "../../components/BookNavbar";
import books from "~/app/data/books";

export default function BooksForChildren() {
  // Filtrera böcker för barn baserat på kategori
  const childrenBooks = books.filter(
    (book) => book.category === "Böcker för barn",
  );

  return (
    <div className="container mx-auto max-w-6xl content-center p-6">
      <BookNavbar title="Böcker för barn" />
      <BookGrid books={childrenBooks} />
    </div>
  );
}
