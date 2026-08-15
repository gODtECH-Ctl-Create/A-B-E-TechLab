import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://a-b-e-tech-lab.vercel.app"),
  title: {
    default: "ABE TechLab | Product, Education & Technology",
    template: "%s | ABE TechLab",
  },
  description: "ABE TechLab is a product and technology studio building digital products, education technology, teaching tools and practical technology systems.",
  applicationName: "ABE TechLab",
  keywords: [
    "ABE TechLab",
    "product strategy",
    "product design",
    "product development",
    "education technology",
    "teaching technology",
    "learning platforms",
    "construction technology",
    "digital products",
    "technology studio",
  ],
  openGraph: {
    title: "ABE TechLab | Product, Education & Technology",
    description: "We turn ideas into products that work, including the technology people use to learn, teach and work.",
    type: "website",
    siteName: "ABE TechLab",
    url: "https://a-b-e-tech-lab.vercel.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "ABE TechLab | Product, Education & Technology",
    description: "We turn ideas into products that work, including education and teaching technology.",
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
