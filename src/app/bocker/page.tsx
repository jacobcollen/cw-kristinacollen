import Link from "next/link";
import BookGrid from "../components/BookGrid";

const books = [
  {
    id: 1,
    title: "Alma och flyghunden Otto",
    imgUrl:
      "https://yeuzbow9sg.ufs.sh/f/bBvqbGlWGkJTVyLG3zS93eiWu6pqHgQlMNB4vjXJOdC85L0Y",
    category: "barn",
  },
  {
    id: 2,
    title: "Alma och Spökeriet på Slottet",
    imgUrl:
      "https://yeuzbow9sg.ufs.sh/f/bBvqbGlWGkJTkkzH5CQ6wu3YtfRPBLKdUIEO9C5xqMae08jo",
    category: "barn",
  },
  {
    id: 3,
    title: "Alma och papegojmysteriet",
    imgUrl:
      "https://yeuzbow9sg.ufs.sh/f/bBvqbGlWGkJTJtqa6M9jD8dSAOxuUZB5wQgEm6V9RTaCfLeW",
    category: "barn",
  },
  {
    id: 4,
    title: "Min mamma bor under en sten",
    imgUrl:
      "https://yeuzbow9sg.ufs.sh/f/bBvqbGlWGkJTzTLHC3I4WIisHx4PZ7O1TEjahz5Ndec09tFA",
    category: "barn",
  },
  {
    id: 5,
    title: "Pojken i tornet",
    imgUrl:
      "https://yeuzbow9sg.ufs.sh/f/bBvqbGlWGkJTtCuIREzjL7qHI06VxSvasBd2Q4DRFf5oJG89",
    category: "barn",
  },
  {
    id: 6,
    title: "Mika och Mille",
    imgUrl:
      "https://yeuzbow9sg.ufs.sh/f/bBvqbGlWGkJTk7D9ovQ6wu3YtfRPBLKdUIEO9C5xqMae08jo",
    category: "barn",
  },
  {
    id: 7,
    title: "Rima och Ordfjärilarna",
    imgUrl:
      "https://yeuzbow9sg.ufs.sh/f/bBvqbGlWGkJTjhT4sBMSNioes19dTMGurRUApDCvKc6P8qB0",
    category: "barn",
  },
  {
    id: 8,
    title: "Rosenträdgården",
    imgUrl:
      "https://yeuzbow9sg.ufs.sh/f/bBvqbGlWGkJTmvnXl5hw3uhJyItiYaz8xQ5dsLPMVjw2S9Ce",
    category: "vuxna",
  },
  {
    id: 9,
    title: "Relationer i socialt arbete",
    imgUrl:
      "https://yeuzbow9sg.ufs.sh/f/bBvqbGlWGkJTVvA0rHS93eiWu6pqHgQlMNB4vjXJOdC85L0Y",
    category: "vuxna",
  },
];

export default function BooksPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="mb-4 text-3xl font-bold">Alla Böcker</h1>
      <div className="mb-4 flex gap-4">
        <Link href="/bocker" className="text-blue-500 hover:underline">
          Alla Böcker
        </Link>
        <Link href="/bocker/vuxna" className="text-blue-500 hover:underline">
          Böcker för vuxna
        </Link>
        <Link href="/bocker/barn" className="text-blue-500 hover:underline">
          Böcker för barn
        </Link>
      </div>
      <BookGrid books={books} />
    </div>
  );
}
