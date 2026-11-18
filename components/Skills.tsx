"use client";
import { useState } from "react";
import { ArrowDown } from "lucide-react";
import { skillGroups } from "@/data/profile";

export default function Skills() {
  const [open, setOpen] = useState(1);
  return (
    <section id="skills" className="bg-black text-white px-5 md:px-12 py-16 md:py-24">
      <div className="grid md:grid-cols-[200px_1fr] gap-8 md:gap-16">
        <p className="label h-fit">Technical Focus</p>
        <div className="max-w-[860px]">
          <p data-reveal className="text-lg md:text-xl leading-snug max-w-[520px]">I specialize in building end-to-end web applications, focusing on clean APIs, secure access control and solid data design.</p>
          <ul className="mt-12 border-t border-white/25">
            {skillGroups.map((g, idx) => {
              const isOpen = open === idx;
              return (
                <li key={g.title} className="border-b border-white/25">
                  <button onClick={() => setOpen(isOpen ? -1 : idx)} aria-expanded={isOpen} aria-controls={`sk-${idx}`}
                    className="w-full flex items-center justify-between py-6 text-left font-display text-2xl md:text-[28px] font-medium tracking-tight hover:text-brand transition-colors">
                    {g.title}
                    <ArrowDown size={20} className={`shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 text-brand" : ""}`} />
                  </button>
                  <div id={`sk-${idx}`} className={`grid transition-[grid-template-rows] duration-500 ease-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                    <ul className="overflow-hidden flex flex-wrap gap-2">
                      {g.items.map((s) => <li key={s} className="border border-white/30 px-3 py-1.5 text-[13px] mb-6 first:ml-0">{s}</li>)}
                    </ul>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
