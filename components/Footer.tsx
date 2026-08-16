import Link from "next/link";
import { Logo } from "./Header";

const footerLinks = [
  ["Home", "/"],
  ["About", "/about"],
  ["Products", "/products"],
  ["Programs", "/programs"],
  ["Services", "/services"],
  ["Insights", "/insights"],
  ["Contact", "/contact"],
] as const;

export function Footer() {
  return (
    <footer className="border-t border-black/10">
      <div className="container py-12">
        <div className="flex flex-col justify-between gap-10 md:flex-row">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-6 text-black/55">Product · Research · Strategy · Technology · Education</p>
            <a href="mailto:abeayo6@gmail.com" className="mt-3 inline-block text-sm text-black/60 transition hover:text-black">abeayo6@gmail.com</a>
          </div>
          <nav aria-label="Footer navigation" className="grid grid-cols-2 gap-x-12 gap-y-3 text-sm text-black/60 sm:grid-cols-3">
            {footerLinks.map(([label, href]) => <Link key={href} href={href} className="transition hover:text-black">{label}</Link>)}
          </nav>
        </div>
        <div className="mt-16 flex flex-col justify-between gap-3 border-t border-black/10 pt-5 text-xs text-black/45 sm:flex-row">
          <span>© {new Date().getFullYear()} ABE TechLab. All rights reserved.</span>
          <span>A technology studio founded by Ayo Richard ABE.</span>
        </div>
      </div>
    </footer>
  );
}
