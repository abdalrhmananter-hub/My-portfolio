import Image from "next/image";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project, onOpen }: { project: Project; onOpen: () => void }) {
  return (
    <button onClick={onOpen} aria-label={`View details for ${project.title}`}
      className="group snap-start shrink-0 w-[86%] sm:w-[62%] lg:w-[46%] text-left">
      <div className="relative aspect-[16/10] overflow-hidden bg-black">
        {project.thumbnail ? (
          <Image src={project.thumbnail} alt={`${project.title} screenshot`} fill sizes="(min-width:1024px) 46vw, 86vw"
            className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]" />
        ) : (
          <div className="absolute inset-0 grid place-items-center bg-brand p-8 text-center">
            <span className="font-display font-extrabold text-black text-3xl md:text-4xl leading-none tracking-tight">{project.title.split(" – ")[0]}</span>
          </div>
        )}
      </div>
      <h3 className="mt-3 font-display text-2xl md:text-[28px] font-medium tracking-tight group-hover:text-brand transition-colors">{project.title}</h3>
      <p className="mt-1 text-[12px] text-black/60 line-clamp-2 max-w-[520px]">{project.category} · {project.description}</p>
    </button>
  );
}
