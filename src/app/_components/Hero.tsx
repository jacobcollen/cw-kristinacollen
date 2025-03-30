import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const imgUrl =
  "https://yeuzbow9sg.ufs.sh/f/bBvqbGlWGkJTmvnXl5hw3uhJyItiYaz8xQ5dsLPMVjw2S9Ce";

export default function Hero() {
  return (
    <section className="flex min-h-[calc(100vh-5rem)] items-center justify-center">
      <div className="container max-w-7xl">
        <Card className="border-0 bg-transparent shadow-none">
          <div className="flex flex-1 flex-col p-2 md:p-4">
            <CardContent className="flex flex-col items-center gap-12 p-0 md:flex-row md:gap-8">
              <div className="order-2 flex-1 space-y-4 md:order-1">
                <h1 className="font-bold tracking-tight text-gray-700 dark:text-gray-200">
                  Rosenträdgården
                </h1>
                <p className="mt-2 leading-7 text-muted-foreground">
                  <span className="mr-2 text-5xl font-extrabold text-purple-600 md:text-7xl">
                    “
                  </span>
                  Vill du ha en stunds trevlig lättläst läsning med en klurig
                  och spännande historia är det här boken för dej! Boken
                  påminner om Damernas detektivbyrå och engelsk feelgood.
                  Historien ringlar sig fram till en oväntad upplösning. Ser
                  fram emot en fortsättning!"
                </p>
                <div className="mt-4">
                  <Link href="/bocker/rosentradgarden">
                    <Button>Läs mer</Button>
                  </Link>
                </div>
              </div>
              <div className="order-1 flex w-48 justify-center md:order-2 md:w-80">
                <img
                  src={imgUrl}
                  alt="Rosenträdgården"
                  className="w-full rounded-sm object-cover shadow-[4.0px_8.0px_35.0px_rgba(0,0,0,0.1)] drop-shadow-2xl"
                />
              </div>
            </CardContent>
          </div>
        </Card>
      </div>
    </section>
  );
}
