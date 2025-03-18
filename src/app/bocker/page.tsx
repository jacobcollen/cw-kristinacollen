import BookNavbar from "../_components/BookNavbar";
import BookGrid from "../_components/BookGrid";
import books from "@/data/books";
import { BreadcrumbNav } from "../_components/ui/BreadcrumbNav";

export default async function BooksPage({
  searchParams,
}: {
  searchParams: { category?: string };
}) {
  const category = searchParams.category;

  const filteredBooks = category
    ? books.filter((book) => book.category === category)
    : books;

  const title = category || "Alla Böcker";

  const breadcrumbItems = [
    { label: "Hem", href: "/" },
    { label: "Böcker", href: "/bocker" },
    category
      ? {
          label: category,
          href: `/bocker?category=${encodeURIComponent(category)}`,
        }
      : null,
  ].filter(Boolean);

  return (
    <div className="container mx-auto max-w-6xl content-center p-6">
      <BreadcrumbNav items={breadcrumbItems} />
      <BookNavbar title={title} />
      <BookGrid books={filteredBooks} />
    </div>
  );
}
