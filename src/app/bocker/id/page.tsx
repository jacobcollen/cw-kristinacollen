const books = [
  {
    id: 1,
    title: "Alma och flyghunden Otto",
    imgUrl:
      "https://yeuzbow9sg.ufs.sh/f/bBvqbGlWGkJTVyLG3zS93eiWu6pqHgQlMNB4vjXJOdC85L0Y",
    category: "barn",
    description: "Beskrivning av boken...",
  },
  // ... andra böcker
];

export default function BookDetailPage({ params }: { params: { id: string } }) {
  const book = books.find((book) => book.id === parseInt(params.id));

  if (!book) {
    return <div>Boken hittades inte</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="mb-4 text-3xl font-bold">{book.title}</h1>
      <img
        src={book.imgUrl}
        alt={book.title}
        className="mb-4 h-96 w-full object-cover"
      />
      <p className="text-lg">{book.description}</p>
    </div>
  );
}
