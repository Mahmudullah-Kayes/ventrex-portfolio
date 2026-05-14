import PageTransition from "@/components/animations/PageTransition";
import AnimatedSection from "@/components/animations/AnimatedSection";
import Image from "next/image";
import CtaSection from "@/components/sections/CtaSection";
import StatsSection from "@/components/sections/StatsSection";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User2, Clock, Target, Award, Sparkles } from "lucide-react";

// Team members data
const teamMembers = [
  {
    name: "Alex Rahman",
    role: "Founder & CEO",
    bio: "With extensive experience in digital marketing and lead generation, Alex founded Ventrex with a vision to help businesses grow through specialized marketing strategies.",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
  },
  {
    name: "Sarah Ahmed",
    role: "PPC Campaign Manager",
    bio: "Sarah leads our Amazon & eBay PPC campaigns with expertise in marketplace advertising and a track record of maximizing ROI for e-commerce clients.",
    imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop",
  },
  {
    name: "David Khan",
    role: "Lead Generation Specialist",
    bio: "David specializes in real estate and high-value lead generation, using advanced targeting strategies to connect clients with qualified prospects.",
    imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop",
  },
  {
    name: "Maria Hassan",
    role: "Brand Strategy Director",
    bio: "Maria transforms e-commerce businesses into powerful brands, creating compelling identities that drive customer loyalty and long-term growth.",
    imageUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1974&auto=format&fit=crop",
  },
];

// Values data
const values = [
  {
    icon: <Target className="w-8 h-8 text-primary" />,
    title: "Strategic Vision",
    description: "We approach every project with a clear strategic vision, focusing on both short-term wins and long-term success.",
  },
  {
    icon: <Award className="w-8 h-8 text-primary" />,
    title: "Excellence",
    description: "We are committed to excellence in everything we do, from our communication to our deliverables.",
  },
  {
    icon: <Sparkles className="w-8 h-8 text-primary" />,
    title: "Innovation",
    description: "We constantly explore new ideas and technologies to bring innovative solutions to our clients' challenges.",
  },
  {
    icon: <User2 className="w-8 h-8 text-primary" />,
    title: "Client-Centric",
    description: "Our clients' success is our success. We listen carefully to understand their unique needs and goals.",
  },
];

// Timeline data
const timeline = [
  {
    year: "2022",
    title: "Ventrex Founded",
    description: "Ventrex was founded with a mission to provide specialized digital marketing solutions focused on lead generation and e-commerce growth.",
  },
  {
    year: "2022",
    title: "First Clients",
    description: "Successfully launched our first e-commerce branding campaigns and established our core service offerings.",
  },
  {
    year: "2023",
    title: "Marketplace Expertise",
    description: "Developed specialized expertise in Amazon & eBay PPC advertising, helping clients dominate marketplace search results.",
  },
  {
    year: "2023",
    title: "Real Estate Focus",
    description: "Expanded into real estate lead generation, helping agents and brokers attract qualified prospects in their local markets.",
  },
  {
    year: "2024",
    title: "High-Value Leads",
    description: "Launched our premium lead generation service, connecting businesses with high-value prospects across multiple industries.",
  },
  {
    year: "2024",
    title: "Growing Success",
    description: "Achieved significant growth milestones with clients seeing measurable ROI from our specialized marketing strategies.",
  },
];

// Stats data
const stats = [
  {
    id: "1",
    value: "100+",
    label: "Campaigns Launched",
  },
  {
    id: "2",
    value: "50+",
    label: "Happy Clients",
  },
  {
    id: "3",
    value: "2+",
    label: "Years Experience",
  },
  {
    id: "4",
    value: "12",
    label: "Team Members",
  },
];

export default function AboutPage() {
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-muted/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background/0" />
        <div className="container-wide relative z-10">
          <AnimatedSection type="fade" className="text-center max-w-3xl mx-auto">
            <h1 className="gradient-text mb-6">About Ventrex</h1>
            <p className="text-xl text-muted-foreground mb-0">
              We're a passionate team of experts dedicated to helping businesses thrive in today's competitive landscape.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection type="slide-right">
              <p className="text-accent font-medium mb-2">OUR STORY</p>
              <h2 className="mb-6">Specialized Marketing Excellence</h2>
              <p className="text-muted-foreground mb-6">
                Founded in 2022, Ventrex has quickly established itself as a specialized digital marketing agency focused on driving growth for businesses across various industries. Our journey has been defined by a commitment to data-driven marketing strategies, innovative lead generation techniques, and a deep understanding of the challenges businesses face in today's competitive digital landscape.
              </p>
              <p className="text-muted-foreground mb-6">
                We believe that successful businesses are built on strategic digital marketing, targeted lead generation, and measurable results. Our team combines these elements to deliver marketing solutions that not only generate immediate leads but build sustainable growth for long-term success.
              </p>
              <p>
                Today, we're proud to be trusted by e-commerce brands, real estate professionals, and businesses seeking high-value leads to help them navigate the digital marketing landscape, maximize their ROI, and achieve their growth goals.
              </p>
            </AnimatedSection>

            <AnimatedSection type="slide-left">
              <div className="relative">
                <div className="relative overflow-hidden rounded-lg shadow-xl">
                  <Image
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop"
                    alt="Our team collaborating"
                    width={800}
                    height={600}
                    className="object-cover"
                  />
                </div>
                <div className="absolute -left-3 -bottom-3 w-32 h-32 bg-accent rounded-lg -z-10"></div>
                <div className="absolute -right-3 -top-3 w-32 h-32 bg-primary rounded-lg -z-10"></div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-muted/20">
        <div className="container-wide">
          <AnimatedSection type="fade" className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-accent font-medium mb-2">OUR VALUES</p>
            <h2 className="mb-4">The Principles That Guide Us</h2>
            <p className="text-muted-foreground">
              Our values shape everything we do, from how we work with clients to how we develop our team.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <AnimatedSection
                key={value.title}
                type="slide-up"
                delay={index * 0.1}
              >
                <Card className="h-full border-0 shadow-sm">
                  <CardContent className="p-6 flex gap-4">
                    <div className="mt-1">
                      {value.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                      <p className="text-muted-foreground">{value.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection stats={stats} showBackground={false} />

      {/* Our Team */}
      <section className="section-padding">
        <div className="container-wide">
          <AnimatedSection type="fade" className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-accent font-medium mb-2">OUR TEAM</p>
            <h2 className="mb-4">Meet the Experts</h2>
            <p className="text-muted-foreground">
              Our talented team brings together expertise across business strategy, design, technology, and marketing to deliver exceptional results.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <AnimatedSection
                key={member.name}
                type="scale"
                delay={index * 0.1}
              >
                <Card className="h-full border-0 shadow-sm">
                  <CardContent className="p-6 text-center">
                    <Avatar className="w-24 h-24 mx-auto mb-4">
                      <AvatarImage src={member.imageUrl} alt={member.name} />
                      <AvatarFallback>{member.name.split(" ").map(n => n[0]).join("")}</AvatarFallback>
                    </Avatar>
                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                    <p className="text-accent mb-3">{member.role}</p>
                    <p className="text-muted-foreground text-sm">{member.bio}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey Timeline */}
      <section className="section-padding bg-muted/20">
        <div className="container-wide">
          <AnimatedSection type="fade" className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-accent font-medium mb-2">OUR JOURNEY</p>
            <h2 className="mb-4">The Ventrex Journey</h2>
            <p className="text-muted-foreground">
              From our founding in 2022 to where we are today, here's a look at our key milestones and growth in specialized digital marketing.
            </p>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <AnimatedSection
                key={`timeline-${index}`}
                type="slide-right"
                delay={index * 0.1}
                className="mb-12 last:mb-0"
              >
                <div className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg">
                      {item.year}
                    </div>
                    {index < timeline.length - 1 && (
                      <div className="w-0.5 h-16 bg-primary/20 mt-2"></div>
                    )}
                  </div>
                  <div className="pt-3">
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CtaSection
        title="Ready to Work With Us?"
        description="Let's discuss how we can help your business reach its full potential."
        primaryButtonText="Contact Us Today"
        primaryButtonLink="/contact"
        backgroundStyle="gradient"
      />
    </PageTransition>
  );
}
