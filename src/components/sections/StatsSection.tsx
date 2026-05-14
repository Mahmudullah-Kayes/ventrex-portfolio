"use client";

import { Card, CardContent } from "@/components/ui/card";
import AnimatedSection from "@/components/animations/AnimatedSection";

export interface Stat {
  id: string;
  value: string;
  label: string;
  icon?: React.ReactNode;
}

interface StatsSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  stats: Stat[];
  showBackground?: boolean;
}

export default function StatsSection({
  title,
  subtitle,
  description,
  stats,
  showBackground = true,
}: StatsSectionProps) {
  return (
    <section className={`${showBackground ? "bg-muted/20" : ""}`}>
      <div className="w-full">
        {(title || subtitle || description) && (
          <AnimatedSection type="fade" className="text-center max-w-3xl mx-auto mb-16 px-4">
            {subtitle && <p className="text-accent font-medium mb-2">{subtitle}</p>}
            {title && <h2 className="mb-4">{title}</h2>}
            {description && <p className="text-muted-foreground">{description}</p>}
          </AnimatedSection>
        )}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 px-4 md:px-6 lg:px-8 mx-auto max-w-7xl">
          {stats.map((stat, index) => (
            <AnimatedSection key={stat.id} type="scale" delay={index * 0.1}>
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-background/90 backdrop-blur-sm hover:scale-105 group">
                <CardContent className="p-4 md:p-6 text-center relative overflow-hidden">
                  {/* Background gradient effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {stat.icon && (
                    <div className="mx-auto mb-3 md:mb-4 w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full flex items-center justify-center text-primary group-hover:from-primary/20 group-hover:to-accent/20 transition-all duration-300">
                      {stat.icon}
                    </div>
                  )}
                  
                  <div className="relative z-10">
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-1 md:mb-2 gradient-text group-hover:scale-110 transition-transform duration-300">
                      {stat.value}
                    </h3>
                    <p className="text-muted-foreground text-xs md:text-sm lg:text-base font-medium group-hover:text-foreground/80 transition-colors duration-300">
                      {stat.label}
                    </p>
                  </div>
                  
                  {/* Subtle border accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
