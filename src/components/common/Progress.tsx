// components/Progress.tsx
"use client";

import { useEffect, useState } from "react";

const Progress = () => {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      const percent = (scrollTop / (docHeight - winHeight)) * 100;
      setScrollPercent(percent);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="fixed bottom-0 left-0 h-1 bg-gradient-to-r from-primary to-secondary z-50"
      style={{ width: `${scrollPercent}%` }}
    ></div>
  );
};

export default Progress;
