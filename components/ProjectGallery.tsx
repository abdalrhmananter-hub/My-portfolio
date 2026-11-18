"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, X, Github, ExternalLink } from "lucide-react";
import type { Project } from "@/data/projects";

export default function ProjectGallery({ project, onClose }: { project: Project; onClose: () => void }) {
  const images = [project.thumbnail, ...(project.gallery ?? [])].filter(Boolean) as string[];
  const [i, setI] = useState(0);
  useEffect(() => {
    const k = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setI((n) => (n + 1) % Math.max(images.length, 1));
      if (e.key === "ArrowLeft") setI((n) => (n - 1 + images.length) % Math.max(images.length, 1));
    };
    window.addEventListener("keydown", k);
    const prev = document.body.style.overflow; document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", k); document.body.style.overflow = prev; };
  }, [images.length, onClose]);

  return (
    <div role="dialog" aria-modal="true" aria-label={project.title} className="fixed inset-0 z-50 bg-black/80 grid place-items-center p-3 md:p-8" onClick={onClose}>
      <div data-lenis-prevent onClick={(e) => e.stopPropagation()} className="relative bg-cream w-full max-w-[1000px] max-h-full overflow-y-auto">
        <button onClick={onClose} aria-label="Close" className="absolute right-3 top-3 z-10 size-9 grid place-items-center bg-black text-white hover:bg-brand"><X size={16} /></button>
        {images.length > 0 && (
          <div className="relative aspect-[16/9] bg-black">
            <Image src={images[i]} alt={`${project.title} screenshot ${i + 1}`} fill sizes="1000px" className="object-contain" />
            {images.length > 1 && (<>
              <button aria-label="Previous image" onClick={() => setI((i - 1 + images.length) % images.length)} className="absolute left-3 top-1/2 -translate-y-1/2 size-9 grid place-items-center bg-brand text-white"><ArrowLeft size={16} /></button>
              <button aria-label="Next image" onClick={() => setI((i + 1) % images.length)} className="absolute right-3 top-1/2 -translate-y-1/2 size-9 grid place-items-center bg-brand text-white"><ArrowRight size={16} /></button>
            </>)}
          </div>
        )}
        <div className="p-6 md:p-10">
          <p className="label">{project.category}</p>
          <h3 className="mt-3 font-display text-3xl md:text-4xl font-semibold tracking-tight">{project.title}</h3>
          <p className="mt-3 text-[14px] text-black/75 max-w-[640px]">{project.description}</p>
          <ul className="mt-6 space-y-2 text-[14px] leading-relaxed max-w-[720px]">
            {project.highlights.map((h) => <li key={h} className="flex gap-3"><span className="text-brand">✓</span>{h}</li>)}
          </ul>
          <ul className="mt-6 flex flex-wrap gap-2">{project.technologies.map((t) => <li key={t} className="border border-black/40 text-[12px] px-3 py-1">{t}</li>)}</ul>
          {(project.githubUrl || project.liveUrl) && (
            <div className="mt-7 flex gap-3">
              {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-black text-white px-4 py-3 font-mono text-[12px] hover:bg-brand transition-colors"><Github size={14} /> GitHub</a>}
              {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-brand text-white px-4 py-3 font-mono text-[12px]"><ExternalLink size={14} /> Live site</a>}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
