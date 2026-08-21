import { NextResponse } from 'next/server';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_MESSAGE_LENGTH = 5000;

async function sendConfirmationEmail({
  name,
  email,
  need,
  timeline,
}: {
  name: string;
  email: string;
  need: string;
  timeline: string;
}) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;

  if (!apiKey || !from) {
    console.warn('RESEND_API_KEY or RESEND_FROM_EMAIL is not configured; skipping visitor confirmation email.');
    return;
  }

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to: [email],
      subject: 'Thank you for contacting ABE TechLab',
      text: `Hi ${name},\n\nThank you for contacting ABE TechLab. We’ve received your enquiry and will get back to you in a jiffy.\n\nWhat you contacted us about: ${need}\nTimeline: ${timeline || 'Not specified'}\n\nWe appreciate you reaching out and look forward to learning more about what you’re building.\n\nABE TechLab`,
      html: `
        <div style="font-family:Arial,Helvetica,sans-serif;line-height:1.7;color:#15171a;max-width:600px;margin:0 auto;padding:32px 20px">
          <div style="display:inline-flex;align-items:center;background:#11110f;color:#b7ff3c;padding:10px 14px;font-weight:800;letter-spacing:.08em">ABE</div>
          <p style="margin-top:32px">Hi ${name},</p>
          <h1 style="font-size:28px;line-height:1.15;margin:0 0 16px">Thank you for contacting ABE TechLab.</h1>
          <p>We’ve received your enquiry and will get back to you in a jiffy.</p>
          <div style="margin:24px 0;padding:18px;background:#f4f5f7;border:1px solid #e1e4e8">
            <strong>Your enquiry</strong>
            <p style="margin:10px 0 0"><b>Area:</b> ${need}<br/><b>Timeline:</b> ${timeline || 'Not specified'}</p>
          </div>
          <p>We appreciate you reaching out and look forward to learning more about what you’re building.</p>
          <p style="margin-top:28px"><b>ABE TechLab</b><br/>Product · Research · Education · Technology</p>
        </div>
      `,
    }),
    cache: 'no-store',
  });

  if (!response.ok) {
    console.error('Visitor confirmation email failed:', await response.text());
  }
}

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

    await sendConfirmationEmail({ name, email, need, timeline });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Contact submission failed:', error);
    return NextResponse.json({ error: 'Unable to process the enquiry.' }, { status: 500 });
  }
}
