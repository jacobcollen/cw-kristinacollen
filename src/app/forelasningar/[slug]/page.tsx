import Image from "next/image";
import { notFound } from "next/navigation";
import lectures from "@/app/_data/lectures";
import { BreadcrumbNav } from "@/app/_components/BreadcrumbNav";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import FormDrawer from "@/app/_components/FormDrawer";

export default async function LecturePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const lecture = lectures.find((lecture) => lecture.slug === slug);

  if (!lecture) return notFound();

  const breadcrumbItems = [
    { label: "Hem", href: "/" },
    { label: "Föreläsningar", href: "/forelasningar" },
    { label: lecture.title, href: `/forelasningar/${lecture.slug}` },
  ];

  return (
    <div className="container mx-auto max-w-5xl p-4 sm:p-6">
      <BreadcrumbNav items={breadcrumbItems} />
      <Card className="border-0 bg-transparent shadow-none">
        <CardContent className="p-0">
          <div className="relative w-full h-64 sm:h-80 md:h-96 overflow-hidden rounded-md">
            <Image
              src={lecture.imgUrl}
              alt={lecture.title}
              layout="fill"
              objectFit="cover"
              className="rounded-md"
              priority
            />
          </div>

          <div className="p-6 space-y-6">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {lecture.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4">
              <Badge variant="secondary">{lecture.forWho}</Badge>
              <Badge variant="outline">{lecture.length}</Badge>
              <div className="ml-auto">
                <FormDrawer
                  title={`Boka ${lecture.title}`}
                  description="Fyll i formuläret så återkommer vi till dig."
                  triggerText="Bokningsförfrågan"
                />
              </div>
            </div>

            <Separator />

            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Om föreläsningen</h2>
              <p className="text-muted-foreground">{lecture.description}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
