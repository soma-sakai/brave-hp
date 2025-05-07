"use client";

import { useRef } from 'react';
import ParallaxElement from './ParallaxElement';

export default function ParallaxBackground({ className = "" }) {
  const containerRef = useRef(null);

  return (
    <div ref={containerRef} className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Blurred circles with different parallax speeds */}
      <ParallaxElement
        speed={-0.2}
        className="absolute top-[10%] left-[15%] w-[300px] h-[300px] rounded-full bg-blue-400/20 blur-[80px]"
      />
      
      <ParallaxElement
        speed={0.3}
        className="absolute bottom-[20%] right-[10%] w-[250px] h-[250px] rounded-full bg-blue-500/15 blur-[70px]"
      />
      
      <ParallaxElement
        speed={-0.15}
        direction="x"
        className="absolute top-[40%] left-[60%] w-[150px] h-[150px] rounded-full bg-indigo-500/25 blur-[50px]"
      />
      
      {/* Light beams with x-direction parallax */}
      <ParallaxElement
        speed={0.4}
        direction="x"
        className="absolute top-[15%] left-0 w-[40%] h-[60px] bg-gradient-to-r from-blue-400/10 to-transparent blur-[30px] transform -rotate-12"
      />
      
      <ParallaxElement
        speed={-0.3}
        direction="x"
        className="absolute bottom-[25%] right-0 w-[30%] h-[40px] bg-gradient-to-l from-indigo-500/10 to-transparent blur-[20px] transform rotate-12"
      />
      
      {/* Decorative elements */}
      <ParallaxElement
        speed={0.1}
        className="absolute top-[30%] left-[25%] w-[2px] h-[150px] bg-blue-300/30"
      />
      
      <ParallaxElement
        speed={-0.25}
        className="absolute bottom-[15%] right-[20%] w-[2px] h-[180px] bg-blue-200/20 transform rotate-45"
      />
      
      {/* Particles */}
      <ParallaxElement
        speed={0.35}
        className="absolute top-[25%] right-[30%] w-[8px] h-[8px] rounded-full bg-blue-300/70"
      />
      
      <ParallaxElement
        speed={-0.4}
        className="absolute bottom-[40%] left-[15%] w-[6px] h-[6px] rounded-full bg-blue-400/60"
      />
      
      <ParallaxElement
        speed={0.2}
        className="absolute top-[60%] left-[40%] w-[10px] h-[10px] rounded-full bg-indigo-300/50"
      />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-blue-900/30" />
    </div>
  );
} 