import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { images } from "@/app/_data/images";

export default function AboutMe() {
  return (
    <section className="container mx-auto px-6 pb-12 pt-6">
      <Card className="flex flex-col md:flex-row items-start">
        <div className="w-full md:w-1/3">
          <Image
            src={images.about}
            alt="Profilbild"
            width={400}
            height={600}
            className="h-auto w-full rounded-md object-cover"
          />
        </div>

        <CardContent className="w-full md:w-2/3 p-6">
          <CardHeader className="p-0">
            <CardTitle className="text-3xl font-bold">Kristina Collén</CardTitle>
            <CardDescription>
              <div className="flex flex-wrap gap-2 mt-2">
                <Badge variant="outline">Socionom</Badge>
                <Badge variant="outline">Lärare</Badge>
                <Badge variant="outline">Forskare</Badge>
                <Badge variant="outline">Författare</Badge>
              </div>
            </CardDescription>
          </CardHeader>

          <Separator className="my-4" />

          <div>
            <h2 className="text-lg font-medium">Om mig</h2>
            <p className="mt-2 text-muted-foreground">
              Jag är socionom, lärare och forskare i socialt arbete på Örebro universitet. 
              Innan jag kom till universitetsvärlden arbetade jag i över 20 år som kurator 
              på Barn- och ungdomshabiliteringen samt inom elevhälsan.
            </p>
            <p className="mt-2 text-muted-foreground">
              Jag föreläser främst för personal inom förskola, skola och vuxenutbildning 
              kring teman som funktionsnedsättningar, psykisk hälsa och stöd i situationer 
              av kris och trauma.
            </p>
            <p className="mt-2 text-muted-foreground">
              År 2018 debuterade jag som författare med boken Alma och papegojmysteriet. 
              Sedan dess har det blivit flera böcker för barn i olika åldrar samt en deckare i genren mysdeckare.
            </p>
          </div>

          <CardFooter className="p-0 mt-6">
            <Button asChild>
              <a
                href="https://forfattarformedling.se/forfattare/kristina-collen/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Besök mig på Författarcentrum Öst
              </a>
            </Button>
          </CardFooter>
        </CardContent>
      </Card>
    </section>
  );
}
