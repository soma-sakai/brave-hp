"use client";

import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

export default function ParallaxElement({
  children,
  speed = 0.5, // Parallax speed factor (negative values move in opposite direction)
  className = "",
  direction = "y", // "x" or "y" for horizontal or vertical parallax
  springConfig = { stiffness: 100, damping: 30 }, // Spring physics configuration
  ease = true, // Whether to apply spring physics for smoother motion
}) {
  const ref = useRef(null);
  const [elementTop, setElementTop] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);
  const { scrollY } = useScroll();

  // Calculate the range of the parallax effect
  const initial = elementTop - clientHeight;
  const final = elementTop + clientHeight;

  // Transform the scroll position into a parallax position
  const yRange = useTransform(scrollY, [initial, final], [speed * 100, -speed * 100]);
  const xRange = useTransform(scrollY, [initial, final], [speed * 100, -speed * 100]);
  
  // Optional spring physics for smoother motion
  const springY = useSpring(yRange, springConfig);
  const springX = useSpring(xRange, springConfig);

  // Update element position on resize and initial load
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const updatePosition = () => {
      const { top } = element.getBoundingClientRect();
      setElementTop(top + window.scrollY || window.pageYOffset);
      setClientHeight(window.innerHeight);
    };

    updatePosition();
    window.addEventListener('resize', updatePosition);
    return () => window.removeEventListener('resize', updatePosition);
  }, []);

  return (
    <motion.div
      ref={ref}
      style={{ 
        [direction === 'y' ? 'y' : 'x']: ease 
          ? direction === 'y' ? springY : springX 
          : direction === 'y' ? yRange : xRange
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
} 