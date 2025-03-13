import Link from "next/link";
import BookGrid from "../../components/BookGrid";
import BookNavbar from "../../components/BookNavbar";

const books = [
  {
    id: 8,
    title: "Rosenträdgården",
    imgUrl:
      "https://yeuzbow9sg.ufs.sh/f/bBvqbGlWGkJTmvnXl5hw3uhJyItiYaz8xQ5dsLPMVjw2S9Ce",
  },
  {
    id: 9,
    title: "Relationer i socialt arbete",
    imgUrl:
      "https://yeuzbow9sg.ufs.sh/f/bBvqbGlWGkJTVvA0rHS93eiWu6pqHgQlMNB4vjXJOdC85L0Y",
  },
];

export default function BooksForAdults() {
  return (
    <div className="container mx-auto max-w-6xl content-center p-6">
      <BookNavbar title="Böcker för vuxna" />
      <BookGrid books={books} />
    </div>
  );
}
