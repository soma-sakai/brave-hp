"use client";

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import ParallaxElement from './ParallaxElement';

interface ParallaxHeroProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
  className?: string;
}

export default function ParallaxHero({ 
  title, 
  subtitle, 
  children, 
  className = "" 
}: ParallaxHeroProps) {
  return (
    <section className={`relative pt-32 pb-20 overflow-hidden ${className}`}>
      {/* Base wave background */}
      <div className="absolute inset-0">
        {/* Gradient background */}
        <div 
          className="absolute inset-0 opacity-100"
          style={{
            backgroundImage: `
              radial-gradient(circle at 70% 60%, rgba(37, 99, 235, 0.4) 0%, transparent 70%),
              radial-gradient(circle at 30% 70%, rgba(59, 130, 246, 0.4) 0%, transparent 60%)
            `
          }}
        />
        
        {/* Smooth waves with parallax */}
        <div className="absolute inset-0 overflow-hidden">
          <ParallaxElement 
            speed={-0.1}
            className="absolute bottom-0 left-0 right-0 h-[45%]"
            style={{
              backgroundImage: `
                linear-gradient(to bottom right, 
                rgba(59, 130, 246, 0.2) 0%, 
                rgba(37, 99, 235, 0.3) 40%, 
                rgba(30, 64, 175, 0.4) 80%)
              `,
              borderRadius: '100% 100% 0 0 / 80% 80% 0 0',
              transform: 'scaleX(1.5)',
            }}
          />
          
          <ParallaxElement 
            speed={-0.2}
            className="absolute bottom-0 left-0 right-0 h-[35%]"
            style={{
              backgroundImage: `
                linear-gradient(to bottom right, 
                rgba(59, 130, 246, 0.15) 0%, 
                rgba(37, 99, 235, 0.25) 40%, 
                rgba(30, 64, 175, 0.35) 80%)
              `,
              borderRadius: '100% 100% 0 0 / 90% 90% 0 0',
              transform: 'scaleX(1.8)',
            }}
          />
        </div>
      </div>
      
      {/* Parallax decorative elements */}
      <ParallaxElement 
        speed={0.2}
        className="absolute top-[20%] left-[10%] w-[150px] h-[150px] rounded-full bg-blue-400/10 blur-[60px]"
      />
      
      <ParallaxElement 
        speed={-0.25}
        className="absolute bottom-[30%] right-[15%] w-[200px] h-[200px] rounded-full bg-indigo-500/15 blur-[80px]"
      />
      
      <ParallaxElement 
        speed={0.15}
        direction="x"
        className="absolute top-[60%] left-[30%] w-[2px] h-[100px] bg-blue-300/40 transform rotate-[30deg]"
      />
      
      <ParallaxElement 
        speed={-0.15}
        direction="x"
        className="absolute top-[40%] right-[25%] w-[2px] h-[80px] bg-blue-300/30 transform -rotate-[20deg]"
      />
      
      {/* Content with subtle parallax effect */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <ParallaxElement speed={-0.05}>
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl font-bold mb-4 text-white"
          >
            {title}
          </motion.h1>
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "6rem" }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="h-1 bg-blue-400 mx-auto"
          />
          
          {subtitle && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              className="mt-6 text-xl text-blue-100"
            >
              {subtitle}
            </motion.p>
          )}
          
          {children}
        </ParallaxElement>
      </div>
    </section>
  );
} 