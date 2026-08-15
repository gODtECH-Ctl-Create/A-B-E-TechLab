"use client";
import { FormEvent, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

const needs = ['New product idea', 'Website or web application', 'Product design', 'Development', 'Product management', 'Existing product improvement', 'Something else'];

export default function Contact(){
  const [sent,setSent]=useState(false);
  function submit(e:FormEvent){e.preventDefault();setSent(true)}
  return <div>
    <section className="grid-bg"><div className="container py-24 md:py-32"><p className="text-xs font-semibold uppercase tracking-[.18em] text-black/45">Contact</p><h1 className="font-display mt-6 max-w-5xl text-6xl font-semibold leading-[.9] tracking-[-.07em] md:text-8xl">Let's talk about the product.</h1><p className="mt-8 max-w-xl text-base leading-7 text-black/55">Have an idea, an existing product or a problem you're trying to solve? You don't need a perfect brief to start.</p></div></section>
    <section className="container py-20 md:py-28"><div className="grid gap-16 md:grid-cols-[.7fr_1.3fr]">
      <div><p className="text-sm leading-7 text-black/55">Tell us what you know. A problem, an idea or a rough direction is enough to begin the conversation. We'll use the details to understand where we can help.</p><div className="mt-10 border-t border-black/10 pt-6"><p className="text-xs font-semibold uppercase tracking-[.16em] text-black/40">Typical starting points</p><div className="mt-4 flex flex-wrap gap-2">{['Strategy','Design','Development','Delivery'].map(x=><span key={x} className="border border-black/10 px-3 py-2 text-xs text-black/55">{x}</span>)}</div></div></div>
      <form onSubmit={submit} className="space-y-8">
        {[['name','Name','text'],['email','Email','email'],['company','Company / Organization','text']].map(([id,label,type])=><label key={id} className="block"><span className="mb-2 block text-xs font-semibold uppercase tracking-[.14em] text-black/45">{label}</span><input required id={id} name={id} type={type} className="w-full border-b border-black/20 bg-transparent px-0 py-3 outline-none transition focus:border-black" /></label>)}
        <fieldset><legend className="mb-4 text-xs font-semibold uppercase tracking-[.14em] text-black/45">What do you need help with?</legend><div className="grid gap-2 sm:grid-cols-2">{needs.map((need)=><label key={need} className="flex cursor-pointer items-center gap-3 border border-black/10 bg-white/40 px-4 py-3 text-sm text-black/60 transition hover:border-black/25 hover:bg-white"><input type="radio" name="need" value={need} required className="accent-black" />{need}</label>)}</div></fieldset>
        <label className="block"><span className="mb-2 block text-xs font-semibold uppercase tracking-[.14em] text-black/45">Expected timeline</span><select name="timeline" className="w-full border-b border-black/20 bg-transparent px-0 py-3 outline-none transition focus:border-black"><option value="">Select if you know</option><option>As soon as possible</option><option>Within 1–3 months</option><option>Within 3–6 months</option><option>Exploring / no fixed timeline</option></select></label>
        <label className="block"><span className="mb-2 block text-xs font-semibold uppercase tracking-[.14em] text-black/45">Tell us about the project</span><textarea required name="message" rows={6} placeholder="What are you trying to build or improve?" className="w-full resize-none border-b border-black/20 bg-transparent px-0 py-3 outline-none transition placeholder:text-black/25 focus:border-black" /></label>
        <button type="submit" className="flex items-center gap-3 bg-black px-6 py-4 text-sm font-semibold text-white transition hover:-translate-y-0.5">{sent?'Enquiry captured':'Send enquiry'} <ArrowUpRight size={16}/></button>
        {sent&&<p className="text-sm leading-6 text-black/55">This form is currently a frontend placeholder, so it does not send an email yet. Connect an email service before accepting live enquiries.</p>}
      </form>
    </div></section>
  </div>
}
