import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const inter = localFont({ src: "../../node_modules/@fontsource-variable/inter/files/inter-latin-wght-normal.woff2", variable: "--font-inter", display: "swap", weight: "100 900" });
const jakarta = localFont({ src: "../../node_modules/@fontsource-variable/plus-jakarta-sans/files/plus-jakarta-sans-latin-wght-normal.woff2", variable: "--font-jakarta", display: "swap", weight: "200 800" });

export const metadata: Metadata = {
  title: { default: "IMOV — Build what's next.", template: "%s | IMOV" },
  description: "Discover the IMOV vision for digital products, development services, and future AI-assisted building. Currently in early development.",
  openGraph: { type: "website", siteName: "IMOV", title: "IMOV — Build what's next.", description: "Products, people, possibility. Explore an ecosystem in development." },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" data-scroll-behavior="smooth"><body className={`${inter.variable} ${jakarta.variable}`}><a className="skip-link" href="#main">Skip to content</a>{children}</body></html>;
}
