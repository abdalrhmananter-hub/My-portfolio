"use client";
import { useEffect, useRef } from "react";
import { revealOnScroll } from "@/lib/animations";

export default function Reveal({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => (ref.current ? revealOnScroll(ref.current) : undefined), []);
  return <div ref={ref}>{children}</div>;
}
