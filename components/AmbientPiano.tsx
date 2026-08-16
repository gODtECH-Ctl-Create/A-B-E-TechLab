'use client';

import { useEffect, useRef, useState } from "react";

const PREF_KEY = "abe-techlab-sound-enabled";

export default function AmbientPiano() {
  const [enabled, setEnabled] = useState(false);
  const [showPrompt, setShowPrompt] = useState(false);
  const audioRef = useRef<AudioContext | null>(null);
  const timerRef = useRef<number | null>(null);
  const stepRef = useRef(0);

  useEffect(() => {
    const saved = window.localStorage.getItem(PREF_KEY);
    if (saved === "on") {
      setEnabled(true);
      start();
    } else if (saved !== "off") {
      setShowPrompt(true);
      start();
    }
    return () => stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function getContext() {
    if (!audioRef.current) {
      const AudioCtx = window.AudioContext || (window as typeof window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return null;
      audioRef.current = new AudioCtx();
    }
    return audioRef.current;
  }

  function playNote(ctx: AudioContext, frequency: number, when: number, duration = 2.4) {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const filter = ctx.createBiquadFilter();
    osc.type = "triangle";
    osc.frequency.value = frequency;
    filter.type = "lowpass";
    filter.frequency.value = 2200;
    filter.Q.value = 0.5;
    gain.gain.setValueAtTime(0, when);
    gain.gain.linearRampToValueAtTime(0.055, when + 0.04);
    gain.gain.exponentialRampToValueAtTime(0.018, when + 0.45);
    gain.gain.exponentialRampToValueAtTime(0.0001, when + duration);
    osc.connect(filter).connect(gain).connect(ctx.destination);
    osc.start(when);
    osc.stop(when + duration + 0.05);
  }

  function scheduleLoop(ctx: AudioContext) {
    const progression = [261.63, 329.63, 392.0, 523.25, 392.0, 329.63, 293.66, 349.23, 440.0, 523.25, 440.0, 349.23];
    let offset = 0;
    let idx = stepRef.current;
    while (offset < 10) {
      const note = progression[idx % progression.length];
      playNote(ctx, note, ctx.currentTime + 0.15 + offset, 2.8);
      if (idx % 3 === 0) playNote(ctx, note / 2, ctx.currentTime + 0.15 + offset, 3.4);
      idx += 1;
      offset += 1.8;
    }
    stepRef.current = idx % progression.length;
    timerRef.current = window.setTimeout(() => {
      if (window.localStorage.getItem(PREF_KEY) !== "off") scheduleLoop(ctx);
    }, 9000);
  }

  function start() {
    const ctx = getContext();
    if (!ctx) return;
    ctx.resume().then(() => scheduleLoop(ctx)).catch(() => setShowPrompt(true));
  }

  function stop() {
    if (timerRef.current !== null) {
      window.clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    if (audioRef.current) audioRef.current.suspend().catch(() => undefined);
  }

  function toggle() {
    if (enabled) {
      window.localStorage.setItem(PREF_KEY, "off");
      setEnabled(false);
      setShowPrompt(false);
      stop();
      return;
    }
    window.localStorage.setItem(PREF_KEY, "on");
    setEnabled(true);
    setShowPrompt(false);
    start();
  }

  return (
    <>
      <button
        type="button"
        onClick={toggle}
        aria-label={enabled ? "Turn ambient piano off" : "Turn ambient piano on"}
        className="fixed bottom-5 right-5 z-[60] inline-flex items-center gap-2 border border-black/15 bg-white/85 px-4 py-3 text-xs font-semibold text-black/70 shadow-[0_12px_30px_rgba(0,0,0,.08)] backdrop-blur-md transition hover:border-black/30 hover:text-black"
      >
        <span aria-hidden="true">{enabled ? "♪" : "◦"}</span>
        {enabled ? "Sound on" : "Sound off"}
      </button>
      {showPrompt && (
        <div className="fixed bottom-20 right-5 z-[60] max-w-[280px] border border-black/10 bg-[#11110f] px-4 py-4 text-white shadow-[0_18px_45px_rgba(0,0,0,.18)]">
          <p className="text-sm font-semibold">Ambient piano</p>
          <p className="mt-1 text-xs leading-5 text-white/60">A very soft piano loop is ready. You can turn it off anytime.</p>
          <button type="button" onClick={toggle} className="mt-3 text-xs font-semibold text-[#b7ff3c] underline underline-offset-4">Turn sound on</button>
        </div>
      )}
    </>
  );
}
