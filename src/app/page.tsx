import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import CaseStudiesSection from "@/components/sections/CaseStudiesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import StatsSection from "@/components/sections/StatsSection";
import CtaSection from "@/components/sections/CtaSection";
import PageTransition from "@/components/animations/PageTransition";
import { BarChart3, Code2, PenTool, LineChart, Target, Lightbulb } from "lucide-react";

// Marketing agency focused testimonials and stats

// Mock data for the testimonials section
const testimonials = [
  {
    id: "1",
    name: "Sarah Johnson",
    role: "CEO",
    company: "TechCorp",
    content: "Ventrex completely transformed our digital presence. Their team understood our vision perfectly and delivered beyond our expectations. The results have been incredible.",
    rating: 5,
  },
  {
    id: "2",
    name: "Michael Brown",
    role: "Marketing Director",
    company: "Global Solutions",
    content: "Working with Ventrex was a game-changer for our marketing efforts. Their strategic approach and attention to detail helped us reach new customers and increase conversions.",
    rating: 5,
  },
  {
    id: "3",
    name: "Jennifer Lee",
    role: "Founder",
    company: "Innovative Startup",
    content: "As a startup, we needed a partner who could help us establish our brand. Ventrex not only created a beautiful identity but also provided strategic guidance for our growth.",
    rating: 4,
  },
  {
    id: "4",
    name: "David Wilson",
    role: "Operations Manager",
    company: "Enterprise Solutions",
    content: "The analytics platform Ventrex built for us has dramatically improved our decision-making process. We now have real-time insights that drive our business forward.",
    rating: 5,
  },
];

// Stats data
const stats = [
  {
    id: "1",
    value: "250+",
    label: "Projects Completed",
  },
  {
    id: "2",
    value: "85+",
    label: "Happy Clients",
  },
  {
    id: "3",
    value: "15+",
    label: "Years Experience",
  },
  {
    id: "4",
    value: "23",
    label: "Team Members",
  },
];

// Custom icons
function Strategy() {
  return (
    <Target size={24} className="text-primary" />
  );
}

function Marketing() {
  return (
    <BarChart3 size={24} className="text-primary" />
  );
}

export default function Home() {
  return (
    <PageTransition>
      <HeroSection
        title="Accelerate Your Business Growth with Data-Driven Marketing"
        subtitle="DIGITAL MARKETING AGENCY"
        description="We help businesses scale faster and more profitably through strategic digital marketing campaigns, proven conversion optimization, and measurable ROI-focused solutions."
        primaryButtonText="Get Started Today"
        primaryButtonLink="/contact"
        secondaryButtonText="View Case Studies"
        secondaryButtonLink="/case-studies"
      />

      <AboutSection
        title="Who We Are"
        subtitle="ABOUT US"
        description="Ventrex is a leading business solutions company that has been helping clients achieve their goals since 2010. We combine innovative thinking with technology expertise to deliver results that drive growth and success."
        imageUrl="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop"
        features={[
          "Expert team with diverse industry experience",
          "Proven track record of successful projects",
          "Tailored solutions to meet unique business needs",
          "Committed to delivering exceptional results",
        ]}
        buttonText="Learn More About Us"
        buttonLink="/about"
      />

      <ServicesSection
        title="Specialized Marketing Solutions for Your Industry"
        subtitle="OUR CORE SERVICES"
        description="We focus on four key areas where we deliver exceptional results. Each service is designed to drive growth, generate quality leads, and maximize your return on investment."
        showAll={true}
      />

      <StatsSection stats={stats} />

      <CaseStudiesSection
        title="Proven Results That Speak for Themselves"
        subtitle="CLIENT SUCCESS STORIES"
        description="See how we've helped businesses achieve remarkable growth through our strategic digital marketing campaigns and data-driven approach."
      />

      <TestimonialsSection
        title="What Our Clients Say"
        subtitle="TESTIMONIALS"
        description="Don't just take our word for it. Hear what our clients have to say about working with us."
        testimonials={testimonials}
      />

      <CtaSection
        title="Ready to Transform Your Business?"
        description="Contact us today to discuss your project and see how we can help you achieve your goals."
        primaryButtonText="Get in Touch"
        primaryButtonLink="/contact"
        backgroundStyle="gradient"
      />
    </PageTransition>
  );
}
