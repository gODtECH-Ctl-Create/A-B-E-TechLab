'use client';

import { FormEvent, useState } from 'react';
import { ArrowLeft, ArrowUpRight, Check, LoaderCircle } from 'lucide-react';

const needs = ['New product idea','Website or web application','Product research / strategy','Product marketing / positioning','Product design','Development','Product management','Education / teaching technology','Existing product improvement','Something else'];
const timelines = ['As soon as possible','Within 1–3 months','Within 3–6 months','Exploring / no fixed timeline'];

type ContactDetails = { name: string; email: string; company: string; message: string };

export default function MobileContactForm() {
  const [step, setStep] = useState(1);
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<'idle'|'success'|'error'>('idle');
  const [need, setNeed] = useState('');
  const [timeline, setTimeline] = useState('');
  const [details, setDetails] = useState<ContactDetails>({ name: '', email: '', company: '', message: '' });
  const [detailsError, setDetailsError] = useState('');

  function continueToTiming() {
    setDetailsError('');
    if (!details.name.trim() || !details.email.trim() || !details.message.trim()) {
      setDetailsError('Please complete your name, email and project description before continuing.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(details.email.trim())) {
      setDetailsError('Please enter a valid email address before continuing.');
      return;
    }
    setStep(3);
  }

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (sending || !need || !timeline || !details.name.trim() || !details.email.trim() || !details.message.trim()) return;
    setSending(true);
    setStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...details, need, timeline }),
      });
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
    <form onSubmit={submit} className="mobile-contact-form" noValidate aria-busy={sending}>
      <div className="mb-6 flex items-center justify-between text-[10px] font-semibold uppercase tracking-[.18em] text-black/40" aria-label="Contact form progress">
        <span aria-live="polite">{step < 4 ? `Step ${step} of 3` : 'Sent'}</span>
        {step > 1 && step < 4 && (
          <button type="button" disabled={sending} onClick={() => setStep(step - 1)} className="inline-flex min-h-11 items-center gap-2 text-black/60 transition hover:text-black disabled:cursor-not-allowed disabled:opacity-40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b7ff3c]">
            <ArrowLeft size={15} aria-hidden="true"/> Back
          </button>
        )}
      </div>

      {step === 1 && (
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[.18em] text-black/40">Start here</p>
          <h2 className="font-display mt-3 text-3xl font-semibold leading-tight tracking-[-.045em]">What can we help you with?</h2>
          <div className="mt-7 grid gap-2">
            {needs.map((item) => (
              <button key={item} type="button" disabled={sending} onClick={() => { setNeed(item); setStep(2); }} className={`mobile-choice focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b7ff3c] ${need === item ? 'is-selected' : ''}`}>
                <span>{item}</span><span aria-hidden="true" className="text-black/30">→</span>
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
            <label className="block"><span className="mobile-field-label">Name</span><input required name="name" value={details.name} onChange={(e) => setDetails((current) => ({ ...current, name: e.target.value }))} autoComplete="name" className="mobile-field focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b7ff3c]" /></label>
            <label className="block"><span className="mobile-field-label">Email</span><input required name="email" value={details.email} onChange={(e) => setDetails((current) => ({ ...current, email: e.target.value }))} type="email" inputMode="email" autoComplete="email" className="mobile-field focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b7ff3c]" /></label>
            <label className="block"><span className="mobile-field-label">Company / Organization</span><input name="company" value={details.company} onChange={(e) => setDetails((current) => ({ ...current, company: e.target.value }))} autoComplete="organization" className="mobile-field focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b7ff3c]" /></label>
            <label className="block"><span className="mobile-field-label">Project description</span><textarea required name="message" value={details.message} onChange={(e) => setDetails((current) => ({ ...current, message: e.target.value }))} rows={5} placeholder="What are you trying to build, research or improve?" className="mobile-field resize-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b7ff3c]" /></label>
          </div>
          {detailsError && <p className="mt-4 text-sm leading-6 text-black/55" role="alert">{detailsError}</p>}
          <button type="button" onClick={continueToTiming} className="mt-7 btn-primary w-full px-5 py-4 text-sm font-semibold focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-[#b7ff3c]">Continue <ArrowUpRight size={16} aria-hidden="true"/></button>
        </div>
      )}

      {step === 3 && (
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[.18em] text-black/40">Timing</p>
          <h2 className="font-display mt-3 text-3xl font-semibold leading-tight tracking-[-.045em]">When are you looking to start?</h2>
          <div className="mt-7 grid gap-2">
            {timelines.map((item) => <button key={item} type="button" disabled={sending} onClick={() => setTimeline(item)} aria-pressed={timeline === item} className={`mobile-choice focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b7ff3c] ${timeline === item ? 'is-selected' : ''}`}><span>{item}</span>{timeline === item ? <Check size={17} aria-hidden="true"/> : <span aria-hidden="true" className="text-black/30">→</span>}</button>)}
          </div>
          <button type="submit" disabled={!timeline || sending} aria-disabled={!timeline || sending} className="mt-7 btn-primary inline-flex min-h-14 w-full items-center justify-center gap-2 px-5 py-4 text-sm font-semibold focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-[#b7ff3c] disabled:cursor-not-allowed disabled:opacity-50">
            {sending ? <><LoaderCircle size={17} className="animate-spin" aria-hidden="true"/> Sending…</> : <>Send enquiry <ArrowUpRight size={16} aria-hidden="true"/></>}
          </button>
          {status === 'error' && <p className="mt-4 text-sm leading-6 text-black/55" role="alert">We couldn't send the enquiry right now. Please try again shortly.</p>}
        </div>
      )}

      {step === 4 && (
        <div className="py-8 text-center" role="status" aria-live="polite">
          <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-black text-white"><Check size={24} aria-hidden="true"/></div>
          <h2 className="font-display mt-6 text-3xl font-semibold tracking-[-.045em]">Thanks. We have it.</h2>
          <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-black/55">Your enquiry has been sent. We’ll get back to you in a jiffy.</p>
          <p className="mx-auto mt-2 max-w-sm text-xs leading-5 text-black/40">A confirmation email is on its way to your inbox.</p>
        </div>
      )}
    </form>
  );
}
