import Image from "next/image";
import Link from "next/link";
import type { HeroProps } from "@/app/_types/hero";
import { Button } from "@/components/ui/button";

export function Hero({ hero, title, description }: HeroProps) {
  return (
    <section
      className="flex items-center justify-center bg-transparent min-h-screen"
    >
      <div className="container grid max-w-6xl grid-cols-1 items-center gap-8 px-6 py-16 md:grid-cols-2">

        <div className="flex justify-center">
          <Image
            src={hero}
            alt={title}
            width={500}
            height={750}
            className="rounded-md object-cover max-h-[60vh] w-auto"
          />
        </div>

        <div className="flex flex-col justify-center">
          <h1 className="text-7xl font-bold tracking-tight text-gray-200">
            {title}
          </h1>
          <p className="mt-4 text-gray-300 max-w-prose">
            {description}
          </p>
          <div className="mt-6">
            <Button asChild>
              <Link href="/bocker/rosentradgarden">Läs mer</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
