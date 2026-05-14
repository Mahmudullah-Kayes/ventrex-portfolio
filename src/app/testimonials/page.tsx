import PageTransition from "@/components/animations/PageTransition";
import AnimatedSection from "@/components/animations/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import CtaSection from "@/components/sections/CtaSection";
import { Star, Quote } from "lucide-react";

// Categories for filtering (static in this implementation)
const categories = [
  "All",
  "Web Development",
  "Branding",
  "Marketing",
  "Strategy",
  "UI/UX Design",
];

// Testimonials data
const testimonials = [
  {
    id: "1",
    name: "Sarah Johnson",
    role: "CEO",
    company: "TechCorp",
    category: "Strategy",
    content: "Ventrex completely transformed our digital presence. Their team understood our vision perfectly and delivered beyond our expectations. The results have been incredible - our brand engagement has increased by 150% and our conversion rates have doubled since implementing their strategy.",
    rating: 5,
    avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop"
  },
  {
    id: "2",
    name: "Michael Brown",
    role: "Marketing Director",
    company: "Global Solutions",
    category: "Marketing",
    content: "Working with Ventrex was a game-changer for our marketing efforts. Their strategic approach and attention to detail helped us reach new customers and increase conversions. They understood our target audience better than we did, and created campaigns that resonated deeply with them.",
    rating: 5,
    avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop"
  },
  {
    id: "3",
    name: "Jennifer Lee",
    role: "Founder",
    company: "Innovative Startup",
    category: "Branding",
    content: "As a startup, we needed a partner who could help us establish our brand. Ventrex not only created a beautiful identity but also provided strategic guidance for our growth. Their branding work has been pivotal in helping us secure partnerships and funding.",
    rating: 4,
    avatarUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1974&auto=format&fit=crop"
  },
  {
    id: "4",
    name: "David Wilson",
    role: "Operations Manager",
    company: "Enterprise Solutions",
    category: "Web Development",
    content: "The analytics platform Ventrex built for us has dramatically improved our decision-making process. We now have real-time insights that drive our business forward. Their development team was professional, communicative, and delivered exactly what we needed on time and within budget.",
    rating: 5,
    avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1970&auto=format&fit=crop"
  },
  {
    id: "5",
    name: "Emily Chen",
    role: "Product Manager",
    company: "Tech Innovations",
    category: "UI/UX Design",
    content: "Ventrex completely redesigned our product interface, making it more intuitive and user-friendly. We've seen a significant decrease in support tickets and a 40% increase in user engagement. Their design thinking process was thorough and yielded amazing results.",
    rating: 5,
    avatarUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop"
  },
  {
    id: "6",
    name: "Robert Taylor",
    role: "CEO",
    company: "Healthcare Solutions",
    category: "Strategy",
    content: "Ventrex helped us navigate a complex market expansion with their comprehensive business strategy. Their insights were invaluable and their execution flawless. Two years later, we're still implementing their roadmap with great success.",
    rating: 5,
    avatarUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop"
  },
  {
    id: "7",
    name: "Alexandra Kim",
    role: "Brand Director",
    company: "Lifestyle Brand",
    category: "Branding",
    content: "The brand refresh that Ventrex created for us perfectly captured our evolution as a company while maintaining our core identity. The new visual elements and messaging have resonated strongly with both our existing customers and new audiences.",
    rating: 4,
    avatarUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "8",
    name: "Marcus Johnson",
    role: "E-commerce Manager",
    company: "Retail Giant",
    category: "Web Development",
    content: "Our e-commerce platform developed by Ventrex has transformed our online sales. The site is fast, secure, and provides an exceptional shopping experience. Since launch, our online revenue has increased by 75% and cart abandonment has decreased significantly.",
    rating: 5,
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
  },
  {
    id: "9",
    name: "Sophia Martinez",
    role: "CMO",
    company: "Startup Accelerator",
    category: "Marketing",
    content: "Ventrex digital marketing strategy helped us reach our ideal audience with precision. Their data-driven approach and creative execution resulted in the most successful campaign in our company's history. We continue to work with them for all our marketing needs.",
    rating: 5,
    avatarUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop"
  },
];

// Stats data with IDs
const statsData = [
  { id: "stat-1", value: "97%", label: "Client Satisfaction" },
  { id: "stat-2", value: "85+", label: "Long-term Clients" },
  { id: "stat-3", value: "92%", label: "Would Recommend Us" },
  { id: "stat-4", value: "4.9/5", label: "Average Rating" },
];

export default function TestimonialsPage() {
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-muted/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background/0" />
        <div className="container-wide relative z-10">
          <AnimatedSection type="fade" className="text-center max-w-3xl mx-auto">
            <h1 className="gradient-text mb-6">Client Testimonials</h1>
            <p className="text-xl text-muted-foreground mb-0">
              Hear what our clients have to say about working with us on their projects.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="section-padding bg-primary/5">
        <div className="container-wide">
          <AnimatedSection type="fade">
            <Card className="border-0 shadow-lg overflow-hidden">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <Quote className="h-12 w-12 text-primary/20 mb-6" />
                    <p className="text-lg md:text-xl italic mb-8">
                      "Working with Ventrex has been the best business decision we've made in years. Their strategic insights, exceptional creativity, and dedication to our success have helped us achieve growth beyond our expectations. They're true partners in every sense."
                    </p>
                    <div className="flex items-center gap-4">
                      <Avatar className="h-16 w-16 border-2 border-primary/20">
                        <AvatarImage src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop" alt="James Williams" />
                        <AvatarFallback>JW</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="text-xl font-semibold">James Williams</h3>
                        <p className="text-accent">CEO, Quantum Enterprises</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-primary/10 p-8 md:p-12 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold mb-6">Project Results</h3>
                    <div className="space-y-4">
                      <div>
                        <p className="font-medium">Revenue Growth</p>
                        <div className="w-full bg-white/30 rounded-full h-4 mt-1">
                          <div className="bg-primary h-4 rounded-full" style={{ width: "85%" }} />
                        </div>
                        <p className="text-sm mt-1 text-right">85% increase</p>
                      </div>
                      <div>
                        <p className="font-medium">Customer Acquisition</p>
                        <div className="w-full bg-white/30 rounded-full h-4 mt-1">
                          <div className="bg-primary h-4 rounded-full" style={{ width: "65%" }} />
                        </div>
                        <p className="text-sm mt-1 text-right">65% increase</p>
                      </div>
                      <div>
                        <p className="font-medium">Brand Awareness</p>
                        <div className="w-full bg-white/30 rounded-full h-4 mt-1">
                          <div className="bg-primary h-4 rounded-full" style={{ width: "90%" }} />
                        </div>
                        <p className="text-sm mt-1 text-right">90% increase</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="section-padding">
        <div className="container-wide">
          <AnimatedSection type="fade" className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="mb-4">What Our Clients Say</h2>
            <p className="text-muted-foreground">
              We've had the privilege of working with amazing clients across various industries.
              Here's what they have to say about their experience with us.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <AnimatedSection
                key={testimonial.id}
                type="fade"
                delay={0.1}
              >
                <Card className="h-full">
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
                        <AvatarImage src={testimonial.avatarUrl} alt={testimonial.name} />
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
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* By the Numbers */}
      <section className="section-padding bg-muted/20">
        <div className="container-wide">
          <AnimatedSection type="fade" className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="mb-4">Client Satisfaction by the Numbers</h2>
            <p className="text-muted-foreground">
              We're proud of the results we deliver and the relationships we build with our clients.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {statsData.map((stat) => (
              <AnimatedSection key={stat.id} type="scale" delay={0.1}>
                <Card className="border-0 shadow-sm">
                  <CardContent className="p-6 text-center">
                    <h3 className="text-4xl font-bold mb-2 gradient-text">{stat.value}</h3>
                    <p className="text-muted-foreground">{stat.label}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CtaSection
        title="Ready to Be Our Next Success Story?"
        description="Contact us today to discuss how we can help your business achieve its goals."
        primaryButtonText="Get Started"
        primaryButtonLink="/contact"
        backgroundStyle="gradient"
      />
    </PageTransition>
  );
}
