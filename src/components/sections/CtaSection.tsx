"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import AnimatedSection from "@/components/animations/AnimatedSection";

interface CtaSectionProps {
  title: string;
  description: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  backgroundStyle?: "gradient" | "solid" | "light";
}

export default function CtaSection({
  title,
  description,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
  backgroundStyle = "gradient",
}: CtaSectionProps) {
  const backgroundClasses = {
    gradient: "bg-gradient-to-r from-primary to-accent text-white",
    solid: "bg-primary text-white",
    light: "bg-muted/20",
  };

  return (
    <section className={`section-padding ${backgroundClasses[backgroundStyle]}`}>
      <div className="container-wide">
        <AnimatedSection type="fade" className="text-center max-w-3xl mx-auto">
          <h2 className="mb-4 text-inherit">{title}</h2>
          <p className={`mb-8 ${backgroundStyle !== "light" ? "text-white/80" : "text-muted-foreground"}`}>
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={primaryButtonLink}>
              <Button
                size="lg"
                variant={backgroundStyle !== "light" ? "secondary" : "default"}
                className={backgroundStyle !== "light" ? "bg-white text-primary hover:bg-white/90" : ""}
              >
                {primaryButtonText}
              </Button>
            </Link>

            {secondaryButtonText && secondaryButtonLink && (
              <Link href={secondaryButtonLink}>
                <Button
                  size="lg"
                  variant={backgroundStyle !== "light" ? "outline" : "outline"}
                  className={backgroundStyle !== "light" ? "border-white text-white hover:bg-white/10" : ""}
                >
                  {secondaryButtonText}
                </Button>
              </Link>
            )}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
