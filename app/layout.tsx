import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "ABE TechLab | Product, Design & Technology",
  description: "ABE TechLab is a product and technology studio helping founders and businesses design, build and move digital products forward.",
  openGraph: {
    title: "ABE TechLab | Product, Design & Technology",
    description: "We design, build and move digital products forward.",
    type: "website",
  },
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