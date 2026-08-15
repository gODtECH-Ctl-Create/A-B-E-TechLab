import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://a-b-e-tech-lab.vercel.app"),
  title: {
    default: "ABE TechLab | Product, Design & Technology",
    template: "%s | ABE TechLab",
  },
  description: "ABE TechLab is a product and technology studio helping founders, businesses and organizations design, build and move digital products forward.",
  applicationName: "ABE TechLab",
  keywords: ["product development", "product design", "product strategy", "software development", "technology studio"],
  openGraph: {
    title: "ABE TechLab | Product, Design & Technology",
    description: "We turn ideas into products that work.",
    type: "website",
    siteName: "ABE TechLab",
    url: "https://a-b-e-tech-lab.vercel.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "ABE TechLab | Product, Design & Technology",
    description: "We turn ideas into products that work.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
