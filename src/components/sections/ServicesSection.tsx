"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { 
  ArrowRight, 
  TrendingUp, 
  Zap,
  ShoppingCart,
  MousePointer,
  Home,
  Users,
  Target
} from "lucide-react";
import AnimatedSection from "@/components/animations/AnimatedSection";

export interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface ServicesSectionProps {
  title: string;
  subtitle: string;
  description: string;
  services?: Service[]; // Made optional so we can use defaults
  showAll?: boolean; // Control whether to show all services or just first 3
  maxServices?: number; // Control how many services to show
}

// Specialized marketing services for business growth
export const defaultMarketingServices: Service[] = [
  {
    icon: <ShoppingCart className="h-6 w-6" />,
    title: "E-commerce Brand Building",
    description: "Transform your online store into a powerhouse brand. We create compelling brand identities, optimize product listings, and build customer loyalty that drives repeat sales and long-term growth."
  },
  {
    icon: <MousePointer className="h-6 w-6" />,
    title: "Amazon & eBay PPC Ads",
    description: "Dominate marketplace search results with our expert PPC management. We optimize your Amazon and eBay advertising campaigns for maximum visibility, sales, and profitable ROAS."
  },
  {
    icon: <Home className="h-6 w-6" />,
    title: "Real Estate Lead Generation",
    description: "Generate qualified leads for your real estate business through targeted digital campaigns. We help agents and brokers attract serious buyers and sellers in their local markets."
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "High-Value Lead Generation",
    description: "Connect with premium prospects who are ready to invest. Our sophisticated targeting and nurturing strategies help you attract and convert high-value clients across industries."
  }
];

export default function ServicesSection({
  title,
  subtitle,
  description,
  services = defaultMarketingServices, // Use default marketing services if none provided
  showAll = false, // By default, show only first 3 services
  maxServices = 3, // By default, limit to 3 services
}: ServicesSectionProps) {
  // Limit services based on showAll prop
  const displayedServices = showAll ? services : services.slice(0, maxServices);
  return (
    <section className="section-padding relative overflow-hidden bg-gradient-to-b from-background to-muted/20">
      {/* Marketing-themed background elements */}
      <div className="absolute top-10 right-10 w-32 h-32 rounded-full bg-primary/5 blur-2xl" />
      <div className="absolute bottom-10 left-10 w-40 h-40 rounded-full bg-accent/5 blur-2xl" />
      
      <div className="container-wide relative z-10">
        <AnimatedSection type="fade" className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary font-medium px-4 py-2 rounded-full mb-4">
            <Zap className="h-4 w-4" />
            <span>{subtitle}</span>
          </div>
          <h2 className="mb-6 text-3xl md:text-4xl lg:text-5xl font-bold gradient-text">{title}</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">{description}</p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {displayedServices.map((service, index) => (
            <AnimatedSection
              key={service.title}
              type="slide-up"
              delay={index * 0.1}
              className="h-full"
            >
              <div className="group relative h-full">
                {/* Card with compact design */}
                <div className="relative h-full bg-background border border-border rounded-xl p-6 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 overflow-hidden">
                  {/* Background gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col">
                    {/* Icon and title section - now inline */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="relative flex-shrink-0">
                        <div className="w-14 h-14 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl flex items-center justify-center text-primary transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                          <div className="scale-125">
                            {service.icon}
                          </div>
                        </div>
                        {/* Floating indicator */}
                        <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-0 group-hover:scale-100">
                          <TrendingUp className="h-3 w-3 text-white" />
                        </div>
                      </div>
                      
                      {/* Title */}
                      <div className="flex-grow min-w-0">
                        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 leading-tight">
                          {service.title}
                        </h3>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="flex-grow">
                      <p className="text-muted-foreground leading-relaxed text-sm mb-4">
                        {service.description}
                      </p>
                    </div>

                    {/* Professional Contact CTA section */}
                    <div className="mt-auto">
                      <button 
                        onClick={() => {
                          const message = `Hi! I'm interested in learning more about your ${service.title} service. Can we discuss how you can help my business?`;
                          const encodedMessage = encodeURIComponent(message);
                          const whatsappUrl = `https://wa.me/8801737282427?text=${encodedMessage}`;
                          window.open(whatsappUrl, '_blank');
                        }}
                        className="block w-full"
                      >
                        <div className="group/cta flex items-center justify-between p-3 rounded-lg bg-gradient-to-r from-primary/5 to-accent/5 hover:from-primary/10 hover:to-accent/10 transition-all duration-300 border border-border hover:border-primary/30 hover:shadow-md">
                          <span className="font-semibold text-sm text-foreground group-hover/cta:text-primary transition-colors">
                            Get Started
                          </span>
                          <div className="flex items-center justify-center w-7 h-7 rounded-full bg-primary/10 group-hover/cta:bg-primary transition-all duration-300 group-hover/cta:shadow-lg">
                            <ArrowRight className="h-3.5 w-3.5 text-primary group-hover/cta:text-white group-hover/cta:translate-x-0.5 transition-all duration-300" />
                          </div>
                        </div>
                      </button>
                    </div>
                  </div>

                  {/* Subtle decorative elements - smaller */}
                  <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gradient-to-br from-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-4 left-4 w-6 h-6 rounded-full bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection type="fade" className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 gradient-text">Ready to Accelerate Your Growth?</h3>
            <p className="text-muted-foreground mb-6">
              {showAll 
                ? "Explore our comprehensive marketing services designed to accelerate your business growth" 
                : "Discover all our marketing services and find the perfect solution for your business"
              }
            </p>
            {/* Show "View All Services" button only when not showing all services */}
            {!showAll && (
              <div className="flex justify-center">
                <Link href="/services">
                  <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-semibold px-8">
                    View All Services
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
