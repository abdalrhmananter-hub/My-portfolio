import { experience as e, profile } from "@/data/profile";

export default function Experience() {
  return (
    <section id="experience" className="px-5 md:px-12 py-16 md:py-24">
      <p className="label" data-reveal>Experience</p>
      <p data-reveal className="mt-5 text-lg md:text-xl max-w-[640px] leading-snug">{profile.about}</p>
      <article data-reveal className="mt-12 border border-black/60 bg-white/40 p-6 md:p-10 max-w-[980px]">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h2 className="font-display text-2xl md:text-3xl font-semibold tracking-tight">{e.role}</h2>
          <span className="font-mono text-[12px] text-brand">{e.period}</span>
        </div>
        <p className="mt-1 text-sm text-black/70">{e.org} · {e.project}</p>
        <ul className="mt-6 space-y-3 text-[14px] leading-relaxed">
          {e.bullets.map((b) => <li key={b} className="flex gap-3"><span className="text-brand mt-[2px]">✓</span>{b}</li>)}
        </ul>
        <ul className="mt-7 flex flex-wrap gap-2">{e.tech.map((t) => <li key={t} className="bg-black text-white text-[12px] px-3 py-1">{t}</li>)}</ul>
      </article>
    </section>
  );
}
