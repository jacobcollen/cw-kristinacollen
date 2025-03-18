import { notFound } from "next/navigation";
import lectures from "@/data/leacures";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

export default function ForelasningPage({ params }: { params: { slug: string } }) {
  const forelasning = lectures.find((forelasning) => forelasning.slug === params.slug);

  if (!forelasning) {
    return notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <img
            src={forelasning.imgUrl}
            alt={forelasning.title}
            className="w-full h-64 object-cover rounded-t-lg"
          />
        </CardHeader>
        <CardContent className="p-6">
          <CardTitle className="text-2xl mb-4">{forelasning.title}</CardTitle>
          <CardDescription className="text-lg">
            {forelasning.description}
          </CardDescription>
          <Button className="mt-6">Boka föreläsning</Button>
        </CardContent>
      </Card>
    </div>
  );
}
