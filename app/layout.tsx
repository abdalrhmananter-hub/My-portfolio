import type { Metadata, Viewport } from "next";
import "@fontsource-variable/inter";
import "@fontsource-variable/inter-tight";
import "@fontsource/jetbrains-mono/400.css";
import "./globals.css";

const title = "Abdelrahman Mohamed Antar | Full Stack Developer";
const description = "Full Stack Developer building web applications with React, TypeScript, Node.js, MongoDB and PostgreSQL. Based in Alexandria, Egypt.";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title, description,
  openGraph: { title, description, type: "website", images: [{ url: "/images/profile/my-photo.webp", width: 1000, height: 1492, alt: "Abdelrahman Mohamed Antar" }] },
  twitter: { card: "summary", title, description },
};
export const viewport: Viewport = { themeColor: "#E23A0A", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
