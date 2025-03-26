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
    <section
      className="flex items-center justify-center"
      style={{ minHeight: "calc(100vh - 6rem)" }}
    >
      <div className="container flex items-center justify-center">
        <Card className="w-full max-w-6xl overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="relative h-64 w-full md:h-auto md:w-1/3">
              <Image
                src={images.about}
                alt="Profilbild"
                fill
                className="object-cover"
              />
            </div>

            <div className="w-full p-6 md:w-2/3">
              <CardHeader className="p-0">
                <CardTitle className="text-3xl font-bold">
                  Kristina Collén
                </CardTitle>
				<CardDescription>
				<div className="mt-2 flex flex-wrap gap-2">
					<Badge variant="outline" className="border-gray-600 text-gray-600">
					Socionom
					</Badge>
					<Badge variant="outline" className="border-gray-600 text-gray-600">
					Lärare
					</Badge>
					<Badge variant="outline" className="border-gray-600 text-gray-600">
					Forskare
					</Badge>
					<Badge variant="outline" className="border-gray-600 text-gray-600">
					Författare
					</Badge>
				</div>
			  </CardDescription>
              </CardHeader>

              <Separator className="my-4" />

              <div>
                <h2 className="text-lg font-medium">Om mig</h2>
                <p className="mt-2 text-muted-foreground">
                  Jag är socionom, lärare och forskare i socialt arbete på
                  Örebro universitet. Innan jag kom till universitetsvärlden
                  arbetade jag i över 20 år som kurator på Barn- och
                  ungdomshabiliteringen samt inom elevhälsan.
                </p>
                <p className="mt-2 text-muted-foreground">
                  Jag föreläser främst för personal inom förskola, skola och
                  vuxenutbildning kring teman som funktionsnedsättningar,
                  psykisk hälsa och stöd i situationer av kris och trauma.
                </p>
                <p className="mt-2 text-muted-foreground">
                  År 2018 debuterade jag som författare med boken Alma och
                  papegojmysteriet. Sedan dess har det blivit flera böcker för
                  barn i olika åldrar samt en deckare i genren mysdeckare.
                </p>
              </div>

              <CardFooter className="mt-6 p-0">
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
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
