"use client";

import { useEffect, useState } from "react";

export default function GlitchText() {
  const words = ["Dataviv Technologies.", "AI for Bhutan.", "The Future."];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    if (isTyping) {
      const targetWord = words[currentIndex];
      if (displayText.length < targetWord.length) {
        timeout = setTimeout(() => {
          setDisplayText(targetWord.slice(0, displayText.length + 1));
        }, 80); // Typing speed
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
          setIsGlitching(true);
        }, 2000); // Wait before glitch
      }
    } else if (isGlitching) {
      timeout = setTimeout(() => {
        setIsGlitching(false);
        setCurrentIndex((prev) => (prev + 1) % words.length);
        setDisplayText("");
        setIsTyping(true);
      }, 500); // Glitch duration
    }

    return () => clearTimeout(timeout);
  }, [displayText, isTyping, isGlitching, currentIndex]);

  return (
    <div className="relative inline-block h-[1.2em]">
      <span 
        className={`relative text-4xl md:text-6xl lg:text-8xl font-display font-bold text-white tracking-tight inline-block ${isGlitching ? 'glitch-active' : ''}`} 
        data-text={displayText}
      >
        {displayText}
        {isTyping && <span className="animate-pulse opacity-50">_</span>}
      </span>
    </div>
  );
}
