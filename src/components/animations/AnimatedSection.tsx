"use client";

import type { ReactNode } from "react";
import { motion, useInView, Variant } from "framer-motion";
import { useRef } from "react";

type AnimationType = "fade" | "slide-up" | "slide-left" | "slide-right" | "scale";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  type?: AnimationType;
  delay?: number;
  duration?: number;
  threshold?: number;
  once?: boolean;
}

export default function AnimatedSection({
  children,
  className = "",
  type = "fade",
  delay = 0,
  duration = 0.5,
  threshold = 0.2,
  once = true,
}: AnimatedSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: once, 
    amount: threshold 
  });

  const fadeVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const slideUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const slideLeftVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  const slideRightVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const scaleVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  const variants = {
    fade: fadeVariants,
    "slide-up": slideUpVariants,
    "slide-left": slideLeftVariants,
    "slide-right": slideRightVariants,
    scale: scaleVariants,
  }[type];

  const transition = {
    duration,
    delay,
    ease: [0.25, 0.1, 0.25, 1.0], // Ease out cubic
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={transition}
      className={className}
    >
      {children}
    </motion.div>
  );
}
