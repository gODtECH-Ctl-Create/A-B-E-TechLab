'use client';

import { FormEvent, useState } from 'react';
import { ArrowLeft, ArrowUpRight, Check } from 'lucide-react';

const needs = ['New product idea','Website or web application','Product research / strategy','Product marketing / positioning','Product design','Development','Product management','Education / teaching technology','Existing product improvement','Something else'];
const timelines = ['As soon as possible','Within 1–3 months','Within 3–6 months','Exploring / no fixed timeline'];

export default function MobileContactForm() {
  const [step, setStep] = useState(1);
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<'idle'|'success'|'error'>('idle');
  const [need, setNeed] = useState('');
  const [timeline, setTimeline] = useState('');

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    setStatus('idle');
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const response = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
      if (!response.ok) throw new Error('Request failed');
      setStatus('success');
      setStep(4);
    } catch {
      setStatus('error');
    } finally {
      setSending(false);
    }
  }

  return (
    <form onSubmit={submit} className="mobile-contact-form">
      <input type="hidden" name="need" value={need} />
      <input type="hidden" name="timeline" value={timeline} />
      <div className="mb-6 flex items-center justify-between text-[10px] font-semibold uppercase tracking-[.18em] text-black/40">
        <span>{step < 4 ? `Step ${step} of 3` : 'Sent'}</span>
        {step > 1 && step < 4 && <button type="button" onClick={() => setStep(step - 1)} className="inline-flex min-h-11 items-center gap-2 text-black/60"><ArrowLeft size={15}/> Back</button>}
      </div>

      {step === 1 && (
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[.18em] text-black/40">Start here</p>
          <h2 className="font-display mt-3 text-3xl font-semibold leading-tight tracking-[-.045em]">What can we help you with?</h2>
          <div className="mt-7 grid gap-2">
            {needs.map((item) => (
              <button key={item} type="button" onClick={() => { setNeed(item); setStep(2); }} className={`mobile-choice ${need === item ? 'is-selected' : ''}`}>
                <span>{item}</span><span className="text-black/30">→</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 2 && (
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[.18em] text-black/40">A little context</p>
          <h2 className="font-display mt-3 text-3xl font-semibold leading-tight tracking-[-.045em]">Tell us about the project.</h2>
          <p className="mt-3 text-sm leading-6 text-black/55">A rough idea is enough. You do not need a finished brief.</p>
          <div className="mt-7 grid gap-5">
            <label className="block"><span className="mobile-field-label">Name</span><input required name="name" className="mobile-field" autoComplete="name" /></label>
            <label className="block"><span className="mobile-field-label">Email</span><input required name="email" type="email" className="mobile-field" autoComplete="email" /></label>
            <label className="block"><span className="mobile-field-label">Company / Organization</span><input name="company" className="mobile-field" autoComplete="organization" /></label>
            <label className="block"><span className="mobile-field-label">Project description</span><textarea required name="message" rows={5} placeholder="What are you trying to build, research or improve?" className="mobile-field resize-none" /></label>
          </div>
          <button type="button" onClick={() => setStep(3)} className="mt-7 btn-primary w-full px-5 py-4 text-sm font-semibold">Continue <ArrowUpRight size={16}/></button>
        </div>
      )}

      {step === 3 && (
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[.18em] text-black/40">Timing</p>
          <h2 className="font-display mt-3 text-3xl font-semibold leading-tight tracking-[-.045em]">When are you looking to start?</h2>
          <div className="mt-7 grid gap-2">
            {timelines.map((item) => <button key={item} type="button" onClick={() => setTimeline(item)} className={`mobile-choice ${timeline === item ? 'is-selected' : ''}`}><span>{item}</span>{timeline === item ? <Check size={17}/> : <span className="text-black/30">→</span>}</button>)}
          </div>
          <button type="submit" disabled={!timeline || sending} className="mt-7 btn-primary w-full px-5 py-4 text-sm font-semibold disabled:cursor-not-allowed disabled:opacity-50">{sending ? 'Sending…' : 'Send enquiry'} <ArrowUpRight size={16}/></button>
          {status === 'error' && <p className="mt-4 text-sm leading-6 text-black/55">We couldn't send the enquiry right now. Please try again shortly.</p>}
        </div>
      )}

      {step === 4 && (
        <div className="py-8 text-center">
          <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-black text-white"><Check size={24}/></div>
          <h2 className="font-display mt-6 text-3xl font-semibold tracking-[-.045em]">Thanks. We have it.</h2>
          <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-black/55">Your enquiry has been sent. We’ll get back to you soon.</p>
          {status === 'success' && <span className="sr-only">Success</span>}
        </div>
      )}
    </form>
  );
}
