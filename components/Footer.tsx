import { Logo } from "./Header";
import Link from "next/link";

const exploreLinks = [["Home","/"],["About","/about"],["Products","/products"],["Programs","/programs"],["Insights","/insights"]] as const;
const workLinks = [["Services","/services"],["Selected Work","/services#selected-work"]] as const;
const connectLinks = [["Contact","/contact"]] as const;
const legalLinks = [["Privacy Policy","/privacy"],["Terms of Use","/terms"],["Cookie Policy","/cookies"]] as const;

function FooterLinks({ links }: { links: readonly (readonly [string,string])[] }) {
  return <ul className="mt-4 space-y-1 text-sm text-black/60">{links.map(([label, href]) => <li key={href}><Link href={href} className="inline-flex min-h-10 items-center py-2 transition hover:text-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">{label}</Link></li>)}</ul>;
}

export function Footer(){
  return <footer className="border-t border-black/10 bg-[#f5f5f2]">
    <div className="container py-14 md:py-16">
      <div className="grid gap-12 md:grid-cols-[1.5fr_repeat(4,1fr)] md:gap-8 lg:gap-12">
        <div><Logo/><p className="mt-5 max-w-xs text-sm leading-6 text-black/55">Research · Strategy · Design · Marketing · Development · Delivery</p></div>
        <div><p className="text-[10px] font-semibold uppercase tracking-[.18em] text-black/40">Explore</p><FooterLinks links={exploreLinks}/></div>
        <div><p className="text-[10px] font-semibold uppercase tracking-[.18em] text-black/40">Work</p><FooterLinks links={workLinks}/></div>
        <div><p className="text-[10px] font-semibold uppercase tracking-[.18em] text-black/40">Connect</p><FooterLinks links={connectLinks}/><a href="mailto:abeayo6@gmail.com" className="mt-3 inline-flex min-h-10 items-center py-2 text-sm text-black/60 transition hover:text-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">Email</a><span className="mt-2 block text-xs text-black/35">Socials coming soon</span></div>
        <div><p className="text-[10px] font-semibold uppercase tracking-[.18em] text-black/40">Legal</p><FooterLinks links={legalLinks}/></div>
      </div>
      <div className="mt-14 border-t border-black/10 pt-5 text-xs text-black/45"><div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between"><span>© 2026 ABE TechLab. All rights reserved.</span><span>ABE TechLab · Nigeria</span></div></div>
    </div>
  </footer>
}
