import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

export const prefersReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/** Hero entrance: name lines rise from a mask, orange panel wipes up, portrait follows. */
export function heroIntro(root: HTMLElement) {
  if (prefersReducedMotion()) return () => {};
  const ctx = gsap.context(() => {
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
    tl.from("[data-panel]", { scaleY: 0, transformOrigin: "bottom", duration: 1 })
      .from("[data-photo]", { yPercent: 12, opacity: 0, duration: 1.1 }, "-=0.55")
      .from("[data-line]", { yPercent: 110, duration: 0.9, stagger: 0.1 }, "-=1.1")
      .from("[data-fade]", { opacity: 0, y: 16, duration: 0.7, stagger: 0.08 }, "-=0.5");
  }, root);
  return () => ctx.revert();
}

/** Light scroll reveal for section headings and blocks tagged with data-reveal. */
export function revealOnScroll(root: HTMLElement) {
  if (prefersReducedMotion()) return () => {};
  const ctx = gsap.context(() => {
    gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
      gsap.from(el, { opacity: 0, y: 28, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 88%", once: true } });
    });
  }, root);
  return () => ctx.revert();
}
