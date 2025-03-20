import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { motion } from "framer-motion";

interface AboutCardProps {
  imageUrl: string;
  title: string;
  description: string;
}

export function AboutCard({ imageUrl, title, description }: AboutCardProps) {
  return (
      <Card className="overflow-hidden">
        <div className="relative h-64 w-full">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <CardHeader>
          <CardTitle className="text-2xl">{title}</CardTitle>
          <CardDescription className="text-lg">{description}</CardDescription>
        </CardHeader>
      </Card>
  );
}
