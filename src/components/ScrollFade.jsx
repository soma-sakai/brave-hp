"use client";

import { useRef, useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

export default function ScrollFade({ 
  children, 
  className = "", 
  delay = 0,
  duration = 0.7,
  distance = 50,
  threshold = 0.1,
  direction = "up",  // up, down, left, right, or none for just fade
  once = true,       // Whether to trigger the animation only once
  staggerChildren = 0.1, // For staggered animations of children
  easing = [0.22, 1, 0.36, 1], // Cubic bezier easing
}) {
  const controls = useAnimation();
  const ref = useRef();
  const [isInView, setIsInView] = useState(false);

  // Create variants based on direction
  const getVariants = () => {
    let initialProps = { opacity: 0 };
    
    // Add directional movement based on the direction prop
    if (direction === "up") initialProps.y = distance;
    else if (direction === "down") initialProps.y = -distance;
    else if (direction === "left") initialProps.x = -distance;
    else if (direction === "right") initialProps.x = distance;
    
    return {
      hidden: initialProps,
      visible: { 
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
          duration: duration,
          delay: delay,
          ease: easing,
          staggerChildren: staggerChildren,
          delayChildren: delay
        }
      }
    };
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsInView(true);
          controls.start("visible");
          if (once) {
            observer.unobserve(entry.target);
          }
        } else if (!once) {
          setIsInView(false);
          controls.start("hidden");
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: threshold,
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [controls, once, threshold]);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={controls}
      variants={getVariants()}
    >
      {children}
    </motion.div>
  );
} 