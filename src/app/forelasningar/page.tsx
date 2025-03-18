import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import lectures from "@/data/leacures";

export default function ForelasningarPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Föreläsningar</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {lectures.map((forelasning) => (
          <Link key={forelasning.id} href={`/forelasningar/${forelasning.slug}`}>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <img
                  src={forelasning.imgUrl}
                  alt={forelasning.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-xl mb-2">{forelasning.title}</CardTitle>
                <CardDescription className="line-clamp-3">
                  {forelasning.description}
                </CardDescription>
                <Button className="mt-4 w-full">Läs mer</Button>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
