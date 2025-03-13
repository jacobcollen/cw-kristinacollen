import Link from "next/link";
import BookGrid from "../../components/BookGrid";
import BookNavbar from "../../components/BookNavbar";

const books = [
  {
    id: 1,
    title: "Alma och flyghunden Otto",
    imgUrl:
      "https://yeuzbow9sg.ufs.sh/f/bBvqbGlWGkJTVyLG3zS93eiWu6pqHgQlMNB4vjXJOdC85L0Y",
  },
  {
    id: 2,
    title: "Alma och Spökeriet på Slottet",
    imgUrl:
      "https://yeuzbow9sg.ufs.sh/f/bBvqbGlWGkJTkkzH5CQ6wu3YtfRPBLKdUIEO9C5xqMae08jo",
  },
  {
    id: 3,
    title: "Alma och papegojmysteriet",
    imgUrl:
      "https://yeuzbow9sg.ufs.sh/f/bBvqbGlWGkJTJtqa6M9jD8dSAOxuUZB5wQgEm6V9RTaCfLeW",
  },
  {
    id: 4,
    title: "Min mamma bor under en sten",
    imgUrl:
      "https://yeuzbow9sg.ufs.sh/f/bBvqbGlWGkJTzTLHC3I4WIisHx4PZ7O1TEjahz5Ndec09tFA",
  },
  {
    id: 5,
    title: "Pojken i tornet",
    imgUrl:
      "https://yeuzbow9sg.ufs.sh/f/bBvqbGlWGkJTtCuIREzjL7qHI06VxSvasBd2Q4DRFf5oJG89",
  },
  {
    id: 6,
    title: "Mika och Mille",
    imgUrl:
      "https://yeuzbow9sg.ufs.sh/f/bBvqbGlWGkJTk7D9ovQ6wu3YtfRPBLKdUIEO9C5xqMae08jo",
  },
  {
    id: 7,
    title: "Rima och Ordfjärilarna",
    imgUrl:
      "https://yeuzbow9sg.ufs.sh/f/bBvqbGlWGkJTjhT4sBMSNioes19dTMGurRUApDCvKc6P8qB0",
  },
];

export default function BooksForChildren() {
  return (
    <div className="container mx-auto max-w-6xl content-center p-6">
	  <BookNavbar title="Böcker för barn" />
      <BookGrid books={books} />
    </div>
  );
}
