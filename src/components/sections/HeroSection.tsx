"use client";

import { ArrowRight, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  description: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
}

export default function HeroSection({
  title,
  subtitle,
  description,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
}: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden pt-24 md:pt-32 pb-16 md:pb-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-background/5 z-0" />

      {/* Marketing-themed animated shapes */}
      <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-primary/10 blur-3xl animate-pulse" />
      <div className="absolute bottom-10 left-10 w-72 h-72 rounded-full bg-accent/10 blur-3xl" />
      <div className="absolute top-1/2 left-1/4 w-32 h-32 rounded-full bg-gradient-to-r from-primary/5 to-accent/5 blur-2xl" />
      


      <div className="container-wide relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary font-medium px-4 py-2 rounded-full mb-6">
              <TrendingUp className="h-4 w-4" />
              <span>{subtitle}</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h1 className="gradient-text mb-6 text-4xl md:text-6xl lg:text-7xl font-bold leading-relaxed pb-2">
              {title}
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-muted-foreground text-lg mb-8 md:text-xl max-w-2xl mx-auto leading-relaxed">
              {description}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Link href={primaryButtonLink}>
              <Button size="lg" className="group bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-semibold px-8 py-3">
                {primaryButtonText}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>


          </motion.div>

          {/* Marketing agency trust indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <span className="font-semibold text-primary">500+</span>
              <span>Campaigns Launched</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-muted-foreground rounded-full" />
            <div className="flex items-center gap-2">
              <span className="font-semibold text-primary">95%</span>
              <span>Client Retention</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-muted-foreground rounded-full" />
            <div className="flex items-center gap-2">
              <span className="font-semibold text-primary">$10M+</span>
              <span>Revenue Generated</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
