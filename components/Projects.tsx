"use client";
import { useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { projects, type Project } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import ProjectGallery from "./ProjectGallery";

export default function Projects() {
  const track = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<Project | null>(null);
  const scroll = (d: number) => track.current?.scrollBy({ left: d * (track.current.clientWidth * 0.5), behavior: "smooth" });
  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="px-5 md:px-12">
        <p className="label" data-reveal>Projects I have done</p>
        <p data-reveal className="mt-5 text-lg md:text-xl max-w-[520px] leading-snug">A selection of applications I have built, from payroll engines to e-commerce.</p>
      </div>
      <div ref={track} data-lenis-prevent-wheel className="no-scrollbar mt-10 flex gap-5 md:gap-7 overflow-x-auto snap-x snap-mandatory px-5 md:px-12 scroll-px-5 md:scroll-px-12">
        {projects.map((p) => <ProjectCard key={p.id} project={p} onOpen={() => setActive(p)} />)}
      </div>
      <div className="mt-8 px-5 md:px-12 flex justify-end gap-2">
        <button aria-label="Scroll projects left" onClick={() => scroll(-1)} className="size-8 grid place-items-center bg-brand/30 text-brand hover:bg-brand hover:text-white transition-colors"><ArrowLeft size={14} /></button>
        <button aria-label="Scroll projects right" onClick={() => scroll(1)} className="size-8 grid place-items-center bg-brand text-white hover:bg-black transition-colors"><ArrowRight size={14} /></button>
      </div>
      {active && <ProjectGallery project={active} onClose={() => setActive(null)} />}
    </section>
  );
}
