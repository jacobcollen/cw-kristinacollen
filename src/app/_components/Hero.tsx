import Image from "next/image";
import Link from "next/link";
import type { HeroProps } from "@/app/_types/hero";
import { Button } from "@/components/ui/button";

export function Hero({ hero, title, description }: HeroProps) {
  return (
    <section className="flex items-center justify-center bg-transparent py-16">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-[1fr_auto]">
          {/* Textinnehåll */}
          <div className="flex flex-col justify-center text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-200 leading-tight break-words">
              {title}
            </h1>
            <p className="mt-4 text-base sm:text-lg lg:text-xl text-gray-300 break-words max-w-2xl">
              {description}
            </p>
            <div className="mt-6">
              <Button asChild>
                <Link href="/bocker/rosentradgarden">Läs mer</Link>
              </Button>
            </div>
          </div>

          {/* Bild */}
          <div className="flex justify-center md:justify-end">
            <Image
              src={hero}
              alt={title}
              width={500}
              height={750}
              className="rounded-md object-cover w-full max-w-xs sm:max-w-sm md:max-w-[280px] lg:max-w-[350px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
