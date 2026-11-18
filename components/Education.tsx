import { education, certifications } from "@/data/profile";

const Card = ({ heading, items, tint }: { heading: string; items: { title: string; meta: string }[]; tint?: boolean }) => (
  <div data-reveal className={`border p-6 md:p-8 ${tint ? "bg-peach border-brand/60" : "bg-white/40 border-black/60"}`}>
    <h3 className="font-display text-xl font-semibold">{heading}</h3>
    <ul className="mt-6 space-y-6">
      {items.map((it) => (
        <li key={it.title} className="flex gap-3">
          <span className="text-brand text-sm mt-[3px]">✓</span>
          <div><p className="font-display text-lg font-medium leading-snug">{it.title}</p><p className="mt-1 text-[12px] text-black/65">{it.meta}</p></div>
        </li>
      ))}
    </ul>
  </div>
);

export default function Education() {
  return (
    <section id="education" className="px-5 md:px-12 pb-16 md:pb-24">
      <p className="label" data-reveal>Education & Certifications</p>
      <div className="mt-8 grid md:grid-cols-2 gap-5 max-w-[980px]">
        <Card heading="Education" items={education} />
        <Card heading="Certifications" items={certifications} tint />
      </div>
    </section>
  );
}
