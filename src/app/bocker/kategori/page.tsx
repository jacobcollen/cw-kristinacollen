import BookGrid from "../../components/BookGrid";

const books = [
  {
    id: 1,
    title: "Alma och flyghunden Otto",
    imgUrl:
      "https://yeuzbow9sg.ufs.sh/f/bBvqbGlWGkJTVyLG3zS93eiWu6pqHgQlMNB4vjXJOdC85L0Y",
    category: "barn",
  },
  // ... andra böcker
];

export default function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const filteredBooks = books.filter(
    (book) => book.category === params.category,
  );

  return (
    <div className="container mx-auto p-4">
      <h1 className="mb-4 text-3xl font-bold">
        {params.category === "vuxna" ? "Böcker för vuxna" : "Böcker för barn"}
      </h1>
      <BookGrid books={filteredBooks} />
    </div>
  );
}
