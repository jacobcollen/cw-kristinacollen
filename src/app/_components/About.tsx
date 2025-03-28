import { Card, CardContent } from "@/components/ui/card";

const imgUrl =
  "https://yeuzbow9sg.ufs.sh/f/bBvqbGlWGkJT0YcWu7ZCy734n05dR6P2EptfIzBFHAlLseXZ";

export default function About() {
  return (
    <section className="flex min-h-[calc(100vh-5rem)] items-center justify-center">
      <div className="container max-w-7xl">
        <Card className="border-0 bg-transparent shadow-none">
          <div className="flex flex-1 flex-col p-2 md:p-4">
            <CardContent className="flex flex-col items-center gap-12 p-0 md:flex-row md:gap-8">
              <div className="flex-1">
                <h1 className="text-6xl font-bold tracking-tight text-gray-900 dark:text-gray-200">
                  Kristina{" "}
                  <span className="text-[hsl(280,100%,70%)]">Collén</span>
                </h1>
                <p className="mt-2 text-muted-foreground">
                  Kristina Collén är en passionerad författare och föreläsare
                  som brinner för att inspirera och dela kunskap.
                </p>
              </div>
              <div className="flex flex-1 justify-center">
                <img
                  src={imgUrl}
                  alt="Kristina Collén"
                  className="w-70 rounded-sm object-cover"
                />
              </div>
            </CardContent>
          </div>
        </Card>
      </div>
    </section>
  );
}
