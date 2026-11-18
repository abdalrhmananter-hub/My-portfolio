"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { profile } from "@/data/profile";

const links = [["Home", "#home"], ["Skills", "#skills"], ["Experience", "#experience"], ["Projects", "#projects"], ["Contact", "#contact"]];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="absolute inset-x-0 top-0 z-30 grid md:grid-cols-2 items-center px-5 md:px-0 pt-5 md:pt-0 md:h-[72px]">
      <a href="#home" className="md:pl-12 font-display font-extrabold text-brand text-[13px] leading-[0.95] tracking-tight">ABDELRAHMAN<br />ANTAR</a>
      <nav aria-label="Primary" className="hidden md:flex items-center justify-end gap-7 pr-12 text-[12px] text-white">
        {links.map(([l, h]) => <a key={h} href={h} className="opacity-80 hover:opacity-100 transition-opacity first:opacity-100 first:font-semibold">{l}</a>)}
        <a href={`mailto:${profile.email}`} className="bg-black text-white px-4 py-2.5 text-[12px] font-mono hover:bg-brand transition-colors">Get in Touch</a>
      </nav>
      <button aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}
        className="md:hidden absolute right-5 top-5 z-50 size-10 grid place-items-center bg-black text-white">
        {open ? <X size={18} /> : <Menu size={18} />}
      </button>
      {open && (
        <div className="md:hidden fixed inset-0 z-40 bg-black text-white flex flex-col justify-center gap-6 px-8">
          {links.map(([l, h]) => <a key={h} href={h} onClick={() => setOpen(false)} className="font-display text-4xl font-bold">{l}</a>)}
          <a href={`mailto:${profile.email}`} className="bg-brand text-white px-5 py-3 w-fit font-mono text-sm">Get in Touch</a>
        </div>
      )}
    </header>
  );
}
