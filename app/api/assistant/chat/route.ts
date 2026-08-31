import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const operationsUrl = process.env.OPERATIONS_ASSISTANT_CHAT_URL;
  const secret = process.env.OPERATIONS_ASSISTANT_SECRET;
  const leadId = new URL(request.url).searchParams.get("lead_id")?.trim();
  if (!operationsUrl || !secret || !leadId) return NextResponse.json({ error: "Assistant chat is not configured." }, { status: 503 });
  try {
    const response = await fetch(`${operationsUrl}?lead_id=${encodeURIComponent(leadId)}`, { headers: { "x-assistant-secret": secret }, cache: "no-store" });
    const body = await response.text();
    return new NextResponse(body, { status: response.status, headers: { "Content-Type": "application/json" } });
  } catch (error) {
    console.error("Assistant proxy GET failed", error);
    return NextResponse.json({ error: "Assistant is temporarily unavailable." }, { status: 502 });
  }
}

export async function POST(request: Request) {
  const operationsUrl = process.env.OPERATIONS_ASSISTANT_CHAT_URL;
  const secret = process.env.OPERATIONS_ASSISTANT_SECRET;
  if (!operationsUrl || !secret) return NextResponse.json({ error: "Assistant chat is not configured." }, { status: 503 });
  try {
    const body = await request.json();
    const response = await fetch(operationsUrl, { method: "POST", headers: { "Content-Type": "application/json", "x-assistant-secret": secret }, body: JSON.stringify(body), cache: "no-store" });
    const raw = await response.text();
    return new NextResponse(raw, { status: response.status, headers: { "Content-Type": "application/json" } });
  } catch (error) {
    console.error("Assistant proxy POST failed", error);
    return NextResponse.json({ error: "Assistant is temporarily unavailable." }, { status: 502 });
  }
}
