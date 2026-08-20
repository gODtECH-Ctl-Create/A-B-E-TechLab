"use client";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

export function Logo(){return <Link href="/" aria-label="ABE TechLab home" className="flex min-w-0 items-center gap-2"><span className="font-display text-xl font-bold tracking-[-.06em]">ABE</span><span className="truncate text-sm font-medium tracking-[-.02em]">TechLab</span></Link>}

export function Header(){
  const [open,setOpen]=useState(false);
  const links=[['About','/about'],['Products','/products'],['Programs','/programs'],['Services','/services'],['Insights','/insights'],['Contact','/contact']];

  useEffect(()=>{
    const closeOnDesktop=()=>{ if(window.innerWidth>=1024) setOpen(false); };
    window.addEventListener('resize',closeOnDesktop);
    return ()=>window.removeEventListener('resize',closeOnDesktop);
  },[]);

  useEffect(()=>{
    document.body.style.overflow = open ? 'hidden' : '';
    return ()=>{ document.body.style.overflow=''; };
  },[open]);

  return <header className="sticky top-0 z-50 border-b border-black/10 bg-[#f5f5f2]/95 backdrop-blur-md">
    <div className="container flex h-[68px] items-center justify-between gap-3 sm:h-[72px]">
      <Logo/>
      <nav className="hidden items-center gap-6 lg:flex">{links.map(([label,href])=><Link key={href} href={href} className="text-sm text-black/65 transition hover:text-black">{label}</Link>)}</nav>
      <Link href="/contact" className="btn-primary hidden px-5 py-3 text-sm font-semibold transition lg:inline-flex">Start a project</Link>
      <button
        type="button"
        aria-label={open?'Close menu':'Open menu'}
        aria-expanded={open}
        aria-controls="mobile-navigation"
        onClick={()=>setOpen(!open)}
        className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-black/10 bg-white/60 lg:hidden"
      >{open?<X size={22}/>:<Menu size={22}/>}</button>
    </div>
    {open&&<div id="mobile-navigation" className="border-t border-black/10 bg-[#f5f5f2] lg:hidden">
      <nav className="container flex max-h-[calc(100svh-68px)] flex-col overflow-y-auto py-4 sm:max-h-[calc(100svh-72px)] sm:py-5">
        {links.map(([label,href])=><Link onClick={()=>setOpen(false)} key={href} href={href} className="border-b border-black/10 py-4 text-lg font-medium">{label}</Link>)}
        <Link onClick={()=>setOpen(false)} href="/contact" className="btn-primary mt-5 px-5 py-4 text-center font-semibold">Start a project <span aria-hidden="true">↗</span></Link>
      </nav>
    </div>}
  </header>
}
