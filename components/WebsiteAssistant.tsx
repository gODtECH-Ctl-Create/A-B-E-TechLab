"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { MessageCircle, Send, X } from "lucide-react";
import "./website-assistant.css";

type ChatMessage = { id: string; sender_type: "client" | "assistant" | "human" | "system"; content: string; created_at?: string };
const STORAGE_KEY = "abe_assistant_lead_id";
const WA_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_ASSISTANT_NUMBER || "";

function whatsappHref(leadId: string | null) {
  if (!WA_NUMBER) return "";
  const digits = WA_NUMBER.replace(/\D/g, "");
  return `https://wa.me/${digits}?text=${encodeURIComponent(`Hi ABE TechLab Assistant. I'd like to continue my enquiry.${leadId ? ` Lead: ${leadId}` : ""}`)}`;
}

export default function WebsiteAssistant() {
  const [open, setOpen] = useState(false);
  const [leadId, setLeadId] = useState<string | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const load = () => setLeadId(window.localStorage.getItem(STORAGE_KEY));
    const onContext = () => load();
    const onOpen = () => { load(); setOpen(true); };
    load();
    window.addEventListener("storage", onContext);
    window.addEventListener("abe-assistant-context", onContext);
    window.addEventListener("abe-assistant-open", onOpen);
    return () => { window.removeEventListener("storage", onContext); window.removeEventListener("abe-assistant-context", onContext); window.removeEventListener("abe-assistant-open", onOpen); };
  }, []);

  useEffect(() => {
    if (!open || !leadId) return;
    setError("");
    fetch(`/api/assistant/chat?lead_id=${encodeURIComponent(leadId)}`, { cache: "no-store" })
      .then(async (response) => { const body = await response.json(); if (!response.ok) throw new Error(body.error || "Assistant unavailable"); return body; })
      .then(async (body) => {
        const existing = (body.messages ?? []) as ChatMessage[];
        if (existing.length) { setMessages(existing); return; }
        const response = await fetch("/api/assistant/chat", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ lead_id: leadId, channel: "website_chat" }) });
        const first = await response.json();
        if (!response.ok) throw new Error(first.error || "Assistant unavailable");
        if (first.message) setMessages([first.message]);
      })
      .catch((err) => setError(err instanceof Error ? err.message : "Assistant unavailable"));
  }, [open, leadId]);

  useEffect(() => { endRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages, busy]);

  async function send(event: FormEvent) {
    event.preventDefault();
    const text = input.trim();
    if (!leadId || !text || busy) return;
    setBusy(true); setError(""); setInput("");
    setMessages((current) => [...current, { id: `local-${Date.now()}`, sender_type: "client", content: text, created_at: new Date().toISOString() }]);
    try {
      const response = await fetch("/api/assistant/chat", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ lead_id: leadId, channel: "website_chat", message: text }) });
      const body = await response.json();
      if (!response.ok) throw new Error(body.error || "Assistant unavailable");
      if (body.message) setMessages((current) => [...current, body.message]);
    } catch (err) { setError(err instanceof Error ? err.message : "Assistant unavailable"); }
    finally { setBusy(false); }
  }

  const whatsapp = whatsappHref(leadId);
  return <>
    <button type="button" className={`website-assistant-launcher ${open ? "is-open" : ""}`} onClick={() => setOpen(true)} aria-label="Open ABE TechLab assistant"><MessageCircle size={20}/><span>Assistant</span></button>
    {open && <div className="website-assistant-shell" role="dialog" aria-label="ABE TechLab Assistant">
      <div className="website-assistant-head"><div><span>ABE TECHLAB</span><strong>Client Assistant</strong></div><button type="button" onClick={() => setOpen(false)} aria-label="Close assistant"><X size={18}/></button></div>
      {!leadId ? <div className="website-assistant-empty"><div className="website-assistant-mark">✦</div><strong>Let's start with your project enquiry.</strong><p>Complete the short enquiry form first. Once it is submitted, I can continue with you here and keep the conversation connected to Operations.</p><a href="/contact" onClick={() => setOpen(false)}>Start an enquiry →</a></div> : <>
        <div className="website-assistant-context"><span>Connected enquiry</span><strong>{leadId.slice(0, 8)}…</strong></div>
        <div className="website-assistant-messages" aria-live="polite">{messages.map((message) => <div key={message.id} className={`website-assistant-message ${message.sender_type === "client" ? "from-client" : "from-assistant"}`}><span>{message.sender_type === "client" ? "You" : "ABE Assistant"}</span><p>{message.content}</p></div>)}{busy && <div className="website-assistant-message from-assistant"><span>ABE Assistant</span><p className="assistant-typing">Thinking…</p></div>}<div ref={endRef}/></div>
        {whatsapp && <a className="website-assistant-whatsapp" href={whatsapp} target="_blank" rel="noreferrer">Continue on WhatsApp</a>}
        {error && <p className="website-assistant-error" role="alert">{error}</p>}
        <form className="website-assistant-composer" onSubmit={send}><input value={input} onChange={(event) => setInput(event.target.value)} placeholder="Type your message…" aria-label="Message" disabled={busy}/><button type="submit" aria-label="Send message" disabled={busy || !input.trim()}><Send size={17}/></button></form>
      </>}
    </div>}
  </>;
}
