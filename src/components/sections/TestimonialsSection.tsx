"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";
import AnimatedSection from "@/components/animations/AnimatedSection";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatarUrl?: string;
  rating: number;
}

interface TestimonialsSectionProps {
  title: string;
  subtitle: string;
  description: string;
  testimonials: Testimonial[];
}

export default function TestimonialsSection({
  title,
  subtitle,
  description,
  testimonials,
}: TestimonialsSectionProps) {
  return (
    <section className="section-padding bg-muted/20">
      <div className="container-wide">
        <AnimatedSection type="fade" className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-accent font-medium mb-2">{subtitle}</p>
          <h2 className="mb-4">{title}</h2>
          <p className="text-muted-foreground">{description}</p>
        </AnimatedSection>

        <AnimatedSection type="slide-up">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem
                  key={testimonial.id}
                  className="md:basis-1/2 lg:basis-1/3 pl-4"
                >
                  <Card className="h-full border bg-card">
                    <CardContent className="p-6">
                      <div className="flex gap-1 mb-4 text-yellow-400">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={`star-${testimonial.id}-${star}`}
                            size={16}
                            fill={star <= testimonial.rating ? "currentColor" : "none"}
                            className={star <= testimonial.rating ? "text-yellow-400" : "text-muted"}
                          />
                        ))}
                      </div>
                      <p className="mb-6 text-muted-foreground">"{testimonial.content}"</p>
                      <div className="flex items-center gap-3">
                        <Avatar>
                          {testimonial.avatarUrl ? (
                            <AvatarImage src={testimonial.avatarUrl} alt={testimonial.name} />
                          ) : null}
                          <AvatarFallback>
                            {testimonial.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.role}, {testimonial.company}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center md:justify-end gap-2 mt-8">
              <CarouselPrevious className="static md:absolute" />
              <CarouselNext className="static md:absolute" />
            </div>
          </Carousel>
        </AnimatedSection>

        <AnimatedSection type="fade" className="text-center mt-16">
          <Link href="/testimonials">
            <Button size="lg" variant="outline">
              Read More Testimonials
            </Button>
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
