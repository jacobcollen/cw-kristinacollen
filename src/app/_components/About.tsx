const imgUrl =
  "https://yeuzbow9sg.ufs.sh/f/bBvqbGlWGkJT0YcWu7ZCy734n05dR6P2EptfIzBFHAlLseXZ";

export default function About() {
  return (
    <section className="flex h-svh items-center justify-center">
      <div className="container grid max-w-6xl grid-cols-1 items-center gap-8 px-6 py-16 md:grid-cols-2">
        {/* Text */}
        <div className="flex flex-col justify-center">
          <h1 className="text-6xl font-bold tracking-tight">
            Kristina <span className="text-[hsl(280,100%,70%)]">Collén</span>
          </h1>
          <p className="mt-4 text-lg">
            Kristina Collén är en passionerad författare och föreläsare som
            brinner för att inspirera och dela kunskap.
          </p>
        </div>

        {/* Bild */}
        <div className="flex justify-center">
          <img
            src={imgUrl}
            alt="Kristina Collén"
            className="w-70 rounded-sm object-cover"
          />
        </div>
      </div>
    </section>
  );
}

