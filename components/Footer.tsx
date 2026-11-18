import { Github, Linkedin } from "lucide-react";
import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="bg-black text-white px-5 md:px-12 py-12 text-[11px]">
      <div className="flex flex-col md:flex-row md:justify-between gap-6">
        <p className="opacity-80">© 2026 {profile.name}. All Rights Reserved.</p>
        <nav aria-label="Footer" className="flex gap-6 opacity-90">
          {["Home", "Skills", "Experience", "Projects", "Contact"].map((l) => <a key={l} href={`#${l.toLowerCase()}`} className="hover:text-brand">{l}</a>)}
        </nav>
      </div>
      <div className="mt-6 border-t border-brand pt-6 flex md:justify-end gap-5">
        <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-brand"><Github size={16} /></a>
        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-brand"><Linkedin size={16} /></a>
      </div>
    </footer>
  );
}
