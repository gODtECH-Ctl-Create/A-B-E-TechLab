import { NextResponse } from 'next/server';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_MESSAGE_LENGTH = 5000;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = String(body.name ?? '').trim();
    const email = String(body.email ?? '').trim();
    const company = String(body.company ?? '').trim();
    const need = String(body.need ?? '').trim();
    const timeline = String(body.timeline ?? '').trim();
    const message = String(body.message ?? '').trim();

    if (!name || !EMAIL_RE.test(email) || !need || !message || message.length > MAX_MESSAGE_LENGTH) {
      return NextResponse.json({ error: 'Please complete the required fields correctly.' }, { status: 400 });
    }

    const scriptUrl = process.env.GOOGLE_APPS_SCRIPT_URL;
    if (!scriptUrl) {
      console.error('GOOGLE_APPS_SCRIPT_URL is not configured.');
      return NextResponse.json({ error: 'Email delivery is not configured yet.' }, { status: 503 });
    }

    const response = await fetch(scriptUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, company, need, timeline, message }),
      cache: 'no-store',
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Google Apps Script delivery failed:', errorText);
      return NextResponse.json({ error: 'Unable to send the enquiry right now.' }, { status: 502 });
    }

    let result: { ok?: boolean; error?: string } = {};
    try {
      result = await response.json();
    } catch {
      // Google Apps Script may return a non-JSON response depending on deployment settings.
    }

    if (result.ok === false) {
      console.error('Google Apps Script rejected submission:', result.error);
      return NextResponse.json({ error: 'Unable to send the enquiry right now.' }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Contact submission failed:', error);
    return NextResponse.json({ error: 'Unable to process the enquiry.' }, { status: 500 });
  }
}
