"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import AnimatedSection from "@/components/animations/AnimatedSection";

interface AboutSectionProps {
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  features: string[];
  buttonText: string;
  buttonLink: string;
}

export default function AboutSection({
  title,
  subtitle,
  description,
  imageUrl,
  features,
  buttonText,
  buttonLink,
}: AboutSectionProps) {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection type="slide-right" className="order-2 lg:order-1">
            <p className="text-accent font-medium mb-2">{subtitle}</p>
            <h2 className="mb-6">{title}</h2>
            <p className="text-muted-foreground mb-8">{description}</p>

            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={`feature-${index}`} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                  <p>{feature}</p>
                </div>
              ))}
            </div>

            <Link href={buttonLink}>
              <Button size="lg">{buttonText}</Button>
            </Link>
          </AnimatedSection>

          <AnimatedSection type="slide-left" className="order-1 lg:order-2">
            <div className="relative aspect-square w-full max-w-md mx-auto lg:max-w-full rounded-lg overflow-hidden shadow-lg">
              <Image
                src={imageUrl}
                alt="About our company"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute -left-3 -bottom-3 w-24 h-24 bg-accent rounded-lg -z-10" />
              <div className="absolute -right-3 -top-3 w-24 h-24 bg-primary rounded-lg -z-10" />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
