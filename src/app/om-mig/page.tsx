import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { images } from "@/app/_data/images";

export default function AboutMe() {
  return (
    <section className="container mx-auto max-w-6xl px-6 py-16">
      <Card className="flex flex-col items-start gap-8 border-none bg-transparent p-8 shadow-none md:flex-row">
        <div className="w-full flex-shrink-0 md:w-1/3">
          <Image
            src={images.about}
            alt="Profilbild"
            width={400}
            height={600}
            className="h-auto w-full rounded-lg object-cover"
          />
        </div>
        <CardContent className="w-full md:w-2/3">
          <CardHeader>
            <CardTitle className="text-3xl font-bold">Om mig</CardTitle>
          </CardHeader>
          <div className="mb-6 flex flex-wrap gap-2">
            <Badge variant="outline">Socionom</Badge>
            <Badge variant="outline">Lärare</Badge>
            <Badge variant="outline">Forskare</Badge>
            <Badge variant="outline">Författare</Badge>
          </div>
          <p className="mb-4 leading-relaxed">
            Jag är socionom, lärare och forskare i socialt arbete på Örebro
            universitet. Innan jag kom till universitetsvärlden arbetade jag i
            över 20 år som kurator på Barn- och ungdomshabiliteringen samt inom
            elevhälsan.
          </p>
          <p className="mb-4 leading-relaxed">
            Jag föreläser främst för personal inom förskola, skola och
            vuxenutbildning kring teman som funktionsnedsättningar, psykisk
            hälsa och stöd i situationer av kris och trauma.
          </p>
          <p className="mb-6 leading-relaxed">
            År 2018 debuterade jag som författare med boken Alma och
            papegojmysteriet. Sedan dess har det blivit flera böcker för barn i
            olika åldrar samt en deckare i genren mysdeckare.
          </p>
          <Button asChild>
            <a
              href="https://forfattarformedling.se/forfattare/kristina-collen/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Besök mig på Författarcentrum Öst
            </a>
          </Button>
        </CardContent>
      </Card>
    </section>
  );
}
