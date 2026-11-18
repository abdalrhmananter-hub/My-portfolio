"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { Download } from "lucide-react";
import { heroIntro } from "@/lib/animations";
import { profile } from "@/data/profile";
import TechIcons from "./TechIcon";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => (ref.current ? heroIntro(ref.current) : undefined), []);
  const line = "block overflow-hidden pb-[0.08em]";
  return (
    <section id="home" ref={ref} className="relative grid md:grid-cols-2 md:min-h-[640px] md:h-[88vh] md:max-h-[820px]">
      <div className="px-5 md:px-12 pt-28 md:pt-36 pb-12 order-1">
        <h1 className="font-display font-extrabold text-brand tracking-[-0.045em] leading-[0.9] text-[clamp(2.7rem,6.4vw,6.2rem)]">
          <span className={line}><span data-line className="block">{profile.first}</span></span>
          <span className={line}><span data-line className="block">{profile.last}</span></span>
        </h1>
        <p data-fade className="mt-8 max-w-[440px] text-[13px] leading-[1.7] text-black/80 md:ml-10">{profile.intro}</p>
        <a data-fade href={profile.cv} download className="mt-7 md:ml-10 inline-flex items-center gap-2 bg-black text-white px-4 py-3 font-mono text-[12px] hover:bg-brand transition-colors">
          <Download size={14} /> Download CV
        </a>
        <div className="mt-10 md:mt-12 md:ml-10"><TechIcons /></div>
      </div>
      <div className="relative bg-transparent order-2 h-[420px] md:h-auto overflow-hidden">
        <div data-panel className="absolute inset-0 bg-brand" />
        <div data-photo className="absolute inset-x-0 bottom-0 h-[94%] md:h-[88%]">
          <Image src="/images/profile/my-photo.webp" alt={`Portrait of ${profile.name}`} fill priority sizes="(min-width:768px) 50vw, 100vw" className="object-contain object-bottom" />
        </div>
      </div>
    </section>
  );
}
