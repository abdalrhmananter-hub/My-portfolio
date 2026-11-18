import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: { extend: {
    colors: { cream: "#FDF8EE", brand: "#E23A0A", ink: "#000000", peach: "#FFF1D6" },
    fontFamily: { display: ["'Inter Tight Variable'", "Inter", "sans-serif"], sans: ["'Inter Variable'", "Inter", "sans-serif"], mono: ["'JetBrains Mono'", "ui-monospace", "monospace"] },
  } },
  plugins: [],
};
export default config;
