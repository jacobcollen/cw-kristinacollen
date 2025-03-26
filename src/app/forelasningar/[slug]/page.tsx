import Image from "next/image";
import { notFound } from "next/navigation";
import lectures from "@/app/_data/lectures";
import { BreadcrumbNav } from "@/app/_components/BreadcrumbNav";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import ContactForm from "@/app/_components/ContactForm";

export default async function LecturePage({
  params,
}: {
  params: { slug: string };
}) {
  const lecture = lectures.find((l) => l.slug === params.slug);
  if (!lecture) return notFound();

  // Breadcrumbs utan "Hem"
  const breadcrumbItems = [
    { label: "Föreläsningar", href: "/forelasningar" },
    { label: lecture.title, href: `/forelasningar/${lecture.slug}` },
  ];

  return (
    <>
      <BreadcrumbNav items={breadcrumbItems} />
      <div
        className="container mx-auto mb-8 min-h-screen max-w-5xl"
        style={{ minHeight: "calc(100vh - 12rem)" }}
      >
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold">
              {lecture.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative h-64 w-full overflow-hidden rounded-md">
              <Image
                src={lecture.imgUrl}
                alt={lecture.title}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="mt-6 flex flex-wrap justify-between gap-y-8">
              <div className="flex flex-wrap gap-2">
                {lecture.forWho.map((audience, index) => (
                  <Badge key={index} variant="secondary">
                    {audience}
                  </Badge>
                ))}
                <Badge variant="outline">{lecture.length}</Badge>
              </div>
              <div className="w-full sm:w-auto">
                <Button className="ml-auto" asChild>
                  <ContactForm
                    title={`Intresseanmälan ${lecture.title}`}
                    description="Fyll i formuläret så återkommer jag till dig."
                    triggerText="Intresseanmälan"
                  />
                </Button>
              </div>
            </div>
            <Separator className="my-6" />
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold">Om föreläsningen</h2>
                <p className="text-muted-foreground">
                  {lecture.description.join(" ")}
                </p>
              </div>
              <div>
                <h2 className="text-xl font-semibold">För vem?</h2>
                <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
                  {lecture.bulletPoints.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
