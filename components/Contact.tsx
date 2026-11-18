import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";
import { profile } from "@/data/profile";

export default function Contact() {
  const rows = [
    { Icon: Mail, text: profile.email, href: `mailto:${profile.email}` },
    { Icon: Phone, text: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
    { Icon: Linkedin, text: "LinkedIn", href: profile.linkedin },
    { Icon: Github, text: "GitHub", href: profile.github },
    { Icon: MapPin, text: profile.location },
  ];
  return (
    <section id="contact" className="bg-brand text-white px-5 md:px-12 py-16 md:py-24">
      <p className="font-mono text-[11px] underline underline-offset-4" data-reveal>Contact</p>
      <a data-reveal href={`mailto:${profile.email}`} className="mt-6 block font-display font-extrabold tracking-[-0.04em] leading-[0.95] text-[clamp(1.9rem,6vw,5rem)] break-all md:break-normal hover:text-black transition-colors">{profile.email}</a>
      <ul className="mt-10 grid sm:grid-cols-2 gap-x-10 gap-y-4 max-w-[680px] text-[15px]">
        {rows.map(({ Icon, text, href }) => (
          <li key={text} className="flex items-center gap-3">
            <Icon size={16} />
            {href ? <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="underline underline-offset-4 hover:text-black">{text}</a> : <span>{text}</span>}
          </li>
        ))}
      </ul>
    </section>
  );
}
