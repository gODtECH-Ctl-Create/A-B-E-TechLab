import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const operationsBase = process.env.OPERATIONS_ASSISTANT_CHAT_URL;
  const secret = process.env.OPERATIONS_ASSISTANT_SECRET;
  const leadId = new URL(request.url).searchParams.get("lead_id")?.trim();
  if (!operationsBase || !secret || !leadId) return NextResponse.json({ error: "Assistant channels are not configured." }, { status: 503 });
  try {
    const base = new URL(operationsBase);
    base.pathname = base.pathname.replace(/\/chat\/?$/, "/channel-links");
    base.search = `?lead_id=${encodeURIComponent(leadId)}`;
    const response = await fetch(base.toString(), { headers: { "x-assistant-secret": secret }, cache: "no-store" });
    const body = await response.text();
    return new NextResponse(body, { status: response.status, headers: { "Content-Type": "application/json" } });
  } catch (error) {
    console.error("Assistant channel links proxy failed", error);
    return NextResponse.json({ error: "Assistant channels are temporarily unavailable." }, { status: 502 });
  }
}
