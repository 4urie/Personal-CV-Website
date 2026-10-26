import type { Metadata, Viewport } from "next";
import { DM_Mono, DM_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-body", display: "swap" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const dmMono = DM_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-mono", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://4urie.me"),
  title: "Aurie D. Nellas — Full-Stack Developer & BSIT Student",
  description: "The portfolio and CV of Aurie D. Nellas, a fourth-year BSIT student exploring full-stack development, mobile applications, databases, and IoT.",
  openGraph: { title: "Aurie D. Nellas — Developer Portfolio", description: "Building thoughtful digital experiences through web, mobile, and connected technology.", url: "https://4urie.me", siteName: "Aurie Nellas", type: "website" },
  twitter: { card: "summary", title: "Aurie D. Nellas — Developer Portfolio", description: "Full-Stack Developer | BSIT Student" },
  icons: { icon: "/favicon.svg" },
};

export const viewport: Viewport = { themeColor: "#101210", colorScheme: "dark" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${dmSans.variable} ${spaceGrotesk.variable} ${dmMono.variable}`}>{children}</body></html>;
}
