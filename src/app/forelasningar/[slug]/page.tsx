import Image from "next/image";
import { notFound } from "next/navigation";
import lectures from "@/app/_data/lectures";
import { BreadcrumbNav } from "@/app/_components/BreadcrumbNav";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
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

  const breadcrumbItems = [
    { label: "Hem", href: "/" },
    { label: "Föreläsningar", href: "/forelasningar" },
    { label: lecture.title, href: `/forelasningar/${lecture.slug}` },
  ];

  return (
    <div className="container mx-auto max-w-4xl p-6">
      <BreadcrumbNav items={breadcrumbItems} />
      <Card>
        <CardHeader>
          <CardTitle>{lecture.title}</CardTitle>
          <CardDescription>{lecture.description}</CardDescription>
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

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <Badge>{lecture.forWho}</Badge>
            <Badge variant="outline">{lecture.length}</Badge>
            <Button className="ml-auto" asChild>
              <ContactForm
                title={`Intresseanmälan ${lecture.title}`}
                description="Fyll i formuläret så återkommer jag till dig."
                triggerText="Intresseanmälan"
              />
            </Button>
          </div>

          <Separator className="my-6" />

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Om föreläsningen</h2>
            <p className="text-muted-foreground">{lecture.description}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
