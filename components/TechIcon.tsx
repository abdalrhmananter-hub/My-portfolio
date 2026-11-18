import { siReact, siTypescript, siNodedotjs, siExpress, siMongodb, siPostgresql, siDocker } from "simple-icons";
import { Cloud } from "lucide-react";

const icons = [
  { name: "React", i: siReact }, { name: "TypeScript", i: siTypescript }, { name: "Node.js", i: siNodedotjs }, { name: "Express", i: siExpress },
  { name: "MongoDB", i: siMongodb }, { name: "PostgreSQL", i: siPostgresql }, { name: "Docker", i: siDocker }, { name: "AWS", i: null },
];

export default function TechIcons() {
  return (
    <ul className="grid grid-cols-4 gap-x-8 gap-y-6 w-fit" aria-label="Core technologies">
      {icons.map(({ name, i }) => (
        <li key={name} title={name} data-fade className="size-7 text-black/80">
          {i ? <svg role="img" aria-label={name} viewBox="0 0 24 24" fill="currentColor" className="size-full"><path d={i.path} /></svg>
             : <Cloud aria-label={name} className="size-full" strokeWidth={1.6} />}
        </li>
      ))}
    </ul>
  );
}
