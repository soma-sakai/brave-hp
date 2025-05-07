"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}

export default function AnimatedSection({ 
  children, 
  className = "", 
  delay = 0,
  direction = "up" 
}: AnimatedSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const getVariants = () => {
    const baseVariants = {
      hidden: {
        opacity: 0,
      },
      visible: {
        opacity: 1,
        transition: {
          duration: 0.7,
          delay: delay,
          ease: [0.22, 1, 0.36, 1],
        },
      },
    };

    switch (direction) {
      case "up":
        return {
          ...baseVariants,
          hidden: { ...baseVariants.hidden, y: 40 },
          visible: { ...baseVariants.visible, y: 0 },
        };
      case "down":
        return {
          ...baseVariants,
          hidden: { ...baseVariants.hidden, y: -40 },
          visible: { ...baseVariants.visible, y: 0 },
        };
      case "left":
        return {
          ...baseVariants,
          hidden: { ...baseVariants.hidden, x: 40 },
          visible: { ...baseVariants.visible, x: 0 },
        };
      case "right":
        return {
          ...baseVariants,
          hidden: { ...baseVariants.hidden, x: -40 },
          visible: { ...baseVariants.visible, x: 0 },
        };
      default:
        return baseVariants;
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={getVariants()}
      className={className}
    >
      {children}
    </motion.div>
  );
} 