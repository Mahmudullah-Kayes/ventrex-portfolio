"use client";

import PageTransition from "@/components/animations/PageTransition";
import ServicesSection from "@/components/sections/ServicesSection";
import CtaSection from "@/components/sections/CtaSection";
import AnimatedSection from "@/components/animations/AnimatedSection";

export default function ServicesPage() {
  return (
    <PageTransition>


      {/* Services Section - Show all services */}
      <ServicesSection
        title="Expert Marketing Solutions Tailored to Your Business"
        subtitle="SPECIALIZED SERVICES"
        description="Our focused approach delivers exceptional results in these four critical areas. Each service is backed by proven strategies and industry expertise."
        showAll={true}
      />

      {/* CTA Section */}
      <CtaSection
        title="Ready to Transform Your Marketing Results?"
        description="Let's create a custom marketing strategy that drives real growth for your business. Contact us today to get started."
        primaryButtonText="Start Your Project"
        primaryButtonLink="/contact"
        backgroundStyle="gradient"
      />
    </PageTransition>
  );
}