"use client";

import React, { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

export default function StaggerContainer({
  children,
  className = "",
  delay = 0,
  staggerDelay = 0.1,
  duration = 0.5,
  direction = "up", // up, down, left, right
  distance = 40,
  threshold = 0.1,
  once = true,
}) {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once, threshold });

  // Set up animation variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay,
      },
    },
  };

  const childVariants = {
    hidden: { 
      opacity: 0,
      y: direction === "up" ? distance : direction === "down" ? -distance : 0,
      x: direction === "right" ? -distance : direction === "left" ? distance : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: duration,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else if (!once) {
      controls.start("hidden");
    }
  }, [controls, inView, once]);

  // Clone children to add animation properties
  const animatedChildren = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return (
        <motion.div variants={childVariants}>
          {child}
        </motion.div>
      );
    }
    return child;
  });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      {animatedChildren}
    </motion.div>
  );
} 