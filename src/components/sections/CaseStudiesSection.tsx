"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, TrendingUp, Users, Target, DollarSign } from "lucide-react";
import AnimatedSection from "@/components/animations/AnimatedSection";

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  imageUrl: string;
  results: {
    metric: string;
    value: string;
    improvement: string;
    icon: React.ReactNode;
  }[];
  link: string;
  duration: string;
}

interface CaseStudiesSectionProps {
  title: string;
  subtitle: string;
  description: string;
  caseStudies?: CaseStudy[]; // Made optional so we can use defaults
}

// Default case studies matching our specialized services
export const defaultCaseStudies: CaseStudy[] = [
  {
    id: "ecommerce-brand-transformation",
    title: "E-commerce Brand Transformation",
    client: "Urban Style Co.",
    industry: "Fashion E-commerce",
    challenge: "Generic brand identity and low customer retention despite quality products",
    solution: "Complete brand overhaul, customer journey optimization, and loyalty program implementation",
    imageUrl: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
    results: [
      {
        metric: "Brand Recognition",
        value: "340%",
        improvement: "+340%",
        icon: <TrendingUp className="h-5 w-5" />
      },
      {
        metric: "Customer Retention",
        value: "85%",
        improvement: "+220%",
        icon: <Users className="h-5 w-5" />
      },
      {
        metric: "Revenue Growth",
        value: "195%",
        improvement: "+195%",
        icon: <DollarSign className="h-5 w-5" />
      }
    ],
    link: "/case-studies/ecommerce-brand-transformation",
    duration: "5 months"
  },
  {
    id: "amazon-ppc-domination",
    title: "Amazon PPC Campaign Success",
    client: "TechGear Pro",
    industry: "Electronics",
    challenge: "High advertising costs with poor visibility and low conversion rates on Amazon",
    solution: "Strategic keyword optimization, competitor analysis, and automated bid management",
    imageUrl: "https://images.unsplash.com/photo-1556742212-5b321f3c261b?w=600&h=400&fit=crop",
    results: [
      {
        metric: "ROAS",
        value: "8.2x",
        improvement: "+420%",
        icon: <TrendingUp className="h-5 w-5" />
      },
      {
        metric: "Sales Volume",
        value: "275%",
        improvement: "+275%",
        icon: <DollarSign className="h-5 w-5" />
      },
      {
        metric: "Ad Spend Efficiency",
        value: "65%",
        improvement: "+165%",
        icon: <Target className="h-5 w-5" />
      }
    ],
    link: "/case-studies/amazon-ppc-domination",
    duration: "3 months"
  },
  {
    id: "real-estate-lead-generation",
    title: "Real Estate Lead Generation",
    client: "Prime Realty Group",
    industry: "Real Estate",
    challenge: "Struggling to generate qualified leads in a competitive market with high client expectations",
    solution: "Multi-channel lead generation strategy with targeted ads, landing page optimization, and CRM integration",
    imageUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
    results: [
      {
        metric: "Qualified Leads",
        value: "450%",
        improvement: "+450%",
        icon: <Users className="h-5 w-5" />
      },
      {
        metric: "Closing Rate",
        value: "28%",
        improvement: "+180%",
        icon: <Target className="h-5 w-5" />
      },
      {
        metric: "Commission Growth",
        value: "$2.1M",
        improvement: "+312%",
        icon: <DollarSign className="h-5 w-5" />
      }
    ],
    link: "/case-studies/real-estate-lead-generation",
    duration: "6 months"
  }
];

export default function CaseStudiesSection({
  title,
  subtitle,
  description,
  caseStudies = defaultCaseStudies, // Use default case studies if none provided
}: CaseStudiesSectionProps) {
  return (
    <section className="section-padding relative overflow-hidden bg-gradient-to-b from-muted/10 to-background">
      {/* Background elements */}
      <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-20 left-10 w-80 h-80 rounded-full bg-accent/5 blur-3xl" />
      
      <div className="container-wide relative z-10">
        <AnimatedSection type="fade" className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary font-medium px-4 py-2 rounded-full mb-4">
            <TrendingUp className="h-4 w-4" />
            <span>{subtitle}</span>
          </div>
          <h2 className="mb-6 text-3xl md:text-4xl lg:text-5xl font-bold gradient-text">{title}</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">{description}</p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <AnimatedSection
              key={study.id}
              type="slide-up"
              delay={index * 0.1}
              className="h-full"
            >
              <Card className="group h-full transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2 bg-background/80 backdrop-blur-sm border-2 hover:border-primary/30">
                <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                  <Image
                    src={study.imageUrl}
                    alt={study.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-sm font-medium text-primary-foreground/80">{study.industry}</p>
                    <p className="text-lg font-bold">{study.client}</p>
                  </div>
                  <div className="absolute top-4 right-4 bg-primary/90 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {study.duration}
                  </div>
                </div>

                <CardHeader className="pb-3">
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors mb-2">
                    {study.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {study.challenge}
                  </p>
                </CardHeader>

                <CardContent className="pt-0">
                  {/* Results Grid */}
                  <div className="grid grid-cols-3 gap-3 mb-6">
                    {study.results.map((result, idx) => (
                      <div key={idx} className="text-center p-3 bg-muted/30 rounded-lg">
                        <div className="flex justify-center mb-2 text-primary">
                          {result.icon}
                        </div>
                        <p className="text-lg font-bold text-primary">{result.value}</p>
                        <p className="text-xs text-muted-foreground">{result.metric}</p>
                        <p className="text-xs font-semibold text-green-600">{result.improvement}</p>
                      </div>
                    ))}
                  </div>


                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection type="fade" className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 gradient-text">Ready to Become Our Next Success Story?</h3>
            <p className="text-muted-foreground mb-6">Let's discuss how we can achieve similar results for your business</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/case-studies">
                <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-semibold px-8">
                  View All Case Studies
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold px-8">
                  Start Your Success Story
                </Button>
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}