import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface BookCardProps {
  book: {
    id: number;
    title: string;
    imgUrl: string;
    slug: string;
  };
}

export function BookCard({ book }: BookCardProps) {
  return (
    <Card className="flex h-full flex-col overflow-hidden">
      <div className="relative w-full pt-[133%]">
        <Image
          src={book.imgUrl}
          alt={book.title}
          fill
          className="object-cover"
          priority={false}
        />
      </div>
      <CardHeader className="px-4 pb-0 pt-4">
        <CardTitle className="line-clamp-2 text-xl">{book.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow px-4 py-2">
        {/* Du kan lägga till beskrivning här om det behövs */}
      </CardContent>
      <CardFooter className="px-4 pb-4">
        <Button className="w-full bg-purple-900 hover:bg-purple-950" asChild>
          <Link href={`/bocker/${book.slug}`}>Läs mer</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
