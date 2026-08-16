import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const siteUrl = "https://a-b-e-tech-lab.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "ABE TechLab | Product, Research, Education & Technology",
    template: "%s | ABE TechLab",
  },
  description: "ABE TechLab is a product and technology studio working across product research, strategy, product marketing, design, development, education technology and teaching technology.",
  applicationName: "ABE TechLab",
  authors: [{ name: "ABE TechLab" }],
  creator: "ABE TechLab",
  publisher: "ABE TechLab",
  category: "technology",
  keywords: [
    "ABE TechLab", "product strategy", "product research", "market research", "product marketing", "product positioning", "product design", "product development", "education technology", "teaching technology", "learning platforms", "construction technology", "digital products", "technology studio"
  ],
  openGraph: {
    title: "ABE TechLab | Product, Research, Education & Technology",
    description: "We research, shape, design, build and position digital products, including technology for learning and teaching.",
    type: "website",
    siteName: "ABE TechLab",
    url: siteUrl,
    locale: "en_NG",
  },
  twitter: {
    card: "summary_large_image",
    title: "ABE TechLab | Product, Research, Education & Technology",
    description: "Product research, strategy, marketing, design, development and teaching technology.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ABE TechLab",
  url: siteUrl,
  email: "abeayo6@gmail.com",
  description: "Product and technology studio working across research, strategy, product marketing, design, development, education technology and teaching technology.",
  founder: { "@type": "Person", name: "Ayo Richard ABE" },
  areaServed: "Worldwide",
  knowsAbout: ["Product research", "Product strategy", "Product marketing", "Product design", "Software development", "Education technology", "Teaching technology"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
