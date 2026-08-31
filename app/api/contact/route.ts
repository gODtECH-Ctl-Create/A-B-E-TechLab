import { NextResponse } from 'next/server';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_MESSAGE_LENGTH = 5000;
const ALLOWED_CHANNELS = ['website_chat', 'whatsapp', 'voice_call', 'email'] as const;
type PreferredChannel = typeof ALLOWED_CHANNELS[number];

async function sendConfirmationEmail({ name, email, need, timeline, preferredChannel }: { name: string; email: string; need: string; timeline: string; preferredChannel: PreferredChannel }) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  if (!apiKey || !from) return;
  const labels: Record<PreferredChannel, string> = { website_chat: 'website chat', whatsapp: 'WhatsApp', voice_call: 'a phone call', email: 'email' };
  const channel = labels[preferredChannel];
  const response = await fetch('https://api.resend.com/emails', { method: 'POST', headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' }, body: JSON.stringify({ from, to: [email], subject: 'Thank you for contacting ABE TechLab', text: `Hi ${name},\n\nThank you for contacting ABE TechLab. We’ve received your enquiry and will continue the conversation through ${channel}.\n\nWhat you contacted us about: ${need}\nTimeline: ${timeline || 'Not specified'}\nPreferred follow-up: ${channel}\n\nABE TechLab` }), cache: 'no-store' });
  if (!response.ok) console.error('Visitor confirmation email failed:', await response.text());
}

async function sendOperationsIntake({ name, email, phone, company, need, timeline, message, preferredChannel }: { name: string; email: string; phone: string; company: string; need: string; timeline: string; message: string; preferredChannel: PreferredChannel }) {
  const intakeUrl = process.env.OPERATIONS_INTAKE_URL;
  const intakeSecret = process.env.OPERATIONS_INTAKE_SECRET;
  if (!intakeUrl || !intakeSecret) return { ok: false, reason: 'not_configured' as const };
  const intakeId = crypto.randomUUID();
  try {
    const response = await fetch(intakeUrl, { method: 'POST', headers: { 'Content-Type': 'application/json', 'x-website-intake-secret': intakeSecret, 'x-website-intake-id': intakeId }, body: JSON.stringify({ intake_id: intakeId, name, email, phone, company, need, timeline, message, preferred_channel: preferredChannel }), cache: 'no-store', signal: AbortSignal.timeout(10000) });
    const raw = await response.text();
    let result: { ok?: boolean; error?: string; lead_id?: string; duplicate?: boolean } = {};
    try { result = raw ? JSON.parse(raw) : {}; } catch {}
    if (!response.ok || result.ok === false) return { ok: false, reason: 'rejected' as const, status: response.status };
    return { ok: true, intakeId, leadId: result.lead_id, duplicate: result.duplicate === true, assistant: result.assistant };
  } catch (error) {
    console.error('Operations website intake request failed:', { intakeId, error: error instanceof Error ? error.message : String(error) });
    return { ok: false, reason: 'request_failed' as const };
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = String(body.name ?? '').trim();
    const email = String(body.email ?? '').trim();
    const phone = String(body.phone ?? '').trim();
    const company = String(body.company ?? '').trim();
    const need = String(body.need ?? '').trim();
    const timeline = String(body.timeline ?? '').trim();
    const message = String(body.message ?? '').trim();
    const preferredChannel = String(body.preferred_channel ?? '').trim() as PreferredChannel;
    if (!name || !EMAIL_RE.test(email) || !need || !message || message.length > MAX_MESSAGE_LENGTH || !ALLOWED_CHANNELS.includes(preferredChannel)) return NextResponse.json({ error: 'Please complete the required fields correctly.' }, { status: 400 });
    if ((preferredChannel === 'whatsapp' || preferredChannel === 'voice_call') && !phone) return NextResponse.json({ error: 'Please add a phone number for this follow-up option.' }, { status: 400 });

    const scriptUrl = process.env.GOOGLE_APPS_SCRIPT_URL;
    if (!scriptUrl) return NextResponse.json({ error: 'Email delivery is not configured yet.' }, { status: 503 });
    const response = await fetch(scriptUrl, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ name, email, phone, company, need, timeline, message, preferred_channel: preferredChannel }), cache: 'no-store' });
    if (!response.ok) return NextResponse.json({ error: 'Unable to send the enquiry right now.' }, { status: 502 });
    let result: { ok?: boolean; error?: string } = {};
    try { result = await response.json(); } catch {}
    if (result.ok === false) return NextResponse.json({ error: 'Unable to send the enquiry right now.' }, { status: 502 });

    const [operationsResult] = await Promise.all([
      sendOperationsIntake({ name, email, phone, company, need, timeline, message, preferredChannel }),
      sendConfirmationEmail({ name, email, need, timeline, preferredChannel }),
    ]);
    if (!operationsResult.ok) return NextResponse.json({ error: 'Your message reached our email system, but the Operations workspace could not record it yet. Please try again shortly.', code: 'operations_intake_failed' }, { status: 502 });

    return NextResponse.json({ ok: true, lead_id: operationsResult.leadId, operations: { recorded: true, duplicate: operationsResult.duplicate === true }, assistant: operationsResult.assistant, preferred_channel: preferredChannel });
  } catch (error) {
    console.error('Contact submission failed:', error);
    return NextResponse.json({ error: 'Unable to process the enquiry.' }, { status: 500 });
  }
}
