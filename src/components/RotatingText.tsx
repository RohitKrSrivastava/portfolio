"use client";

import { useEffect, useState } from "react";

const roles = [
  "Full Stack Engineering Lead",
  "AI & GenAI Architect",
  "Cloud Solutions Expert",
  "Technical Team Mentor",
];

export function RotatingText() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % roles.length);
        setFade(true);
      }, 300);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  return (
    <p className="rotating-text mb-6 max-w-2xl text-base md:text-lg">
      <span className="text-slate-500">I build </span>
      <span className={`rotating-text-highlight ${fade ? "opacity-100" : "opacity-0"}`}>
        {roles[index]}
      </span>
      <span className="text-slate-500"> solutions</span>
    </p>
  );
}
