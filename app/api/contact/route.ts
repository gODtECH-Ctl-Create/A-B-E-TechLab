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

    const apiKey = process.env.RESEND_API_KEY;
    const destination = process.env.CONTACT_EMAIL ?? 'abeayo6@gmail.com';

    if (!apiKey) {
      console.error('RESEND_API_KEY is not configured.');
      return NextResponse.json({ error: 'Email delivery is not configured yet.' }, { status: 503 });
    }

    const html = `
      <h2>New ABE TechLab enquiry</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Company / Organization:</strong> ${escapeHtml(company || 'Not provided')}</p>
      <p><strong>Need:</strong> ${escapeHtml(need)}</p>
      <p><strong>Timeline:</strong> ${escapeHtml(timeline || 'Not provided')}</p>
      <p><strong>Project:</strong></p>
      <p>${escapeHtml(message).replace(/\n/g, '<br />')}</p>
    `;

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM_EMAIL ?? 'ABE TechLab <onboarding@resend.dev>',
        to: [destination],
        reply_to: email,
        subject: `New ABE TechLab enquiry from ${name}`,
        html,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Resend delivery failed:', errorText);
      return NextResponse.json({ error: 'Unable to send the enquiry right now.' }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Contact submission failed:', error);
    return NextResponse.json({ error: 'Unable to process the enquiry.' }, { status: 500 });
  }
}

function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, (character) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    "'": '&#39;',
    '"': '&quot;',
  })[character] ?? character);
}
