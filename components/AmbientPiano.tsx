'use client';

import { useEffect, useRef, useState } from "react";

const PREF_KEY = "abe-techlab-sound-enabled";
const VIDEO_ID = "OKiDwD9kToQ";

type YouTubePlayer = {
  playVideo: () => void;
  pauseVideo: () => void;
  setVolume: (volume: number) => void;
  destroy: () => void;
};

type YouTubeApi = {
  Player: new (
    element: HTMLElement,
    options: {
      videoId: string;
      playerVars?: Record<string, string | number>;
      events?: { onReady?: () => void; onError?: () => void };
    }
  ) => YouTubePlayer;
};

type YouTubeWindow = Window & {
  YT?: YouTubeApi;
  onYouTubeIframeAPIReady?: () => void;
};

export default function AmbientPiano() {
  const [enabled, setEnabled] = useState(false);
  const [showPrompt, setShowPrompt] = useState(false);
  const [blocked, setBlocked] = useState(false);
  const hostRef = useRef<HTMLDivElement | null>(null);
  const playerRef = useRef<YouTubePlayer | null>(null);

  useEffect(() => {
    const saved = window.localStorage.getItem(PREF_KEY);
    if (saved === "off") return;
    setShowPrompt(true);

    const w = window as YouTubeWindow;
    const startPlayer = () => {
      if (!w.YT || !hostRef.current || playerRef.current) return;

      playerRef.current = new w.YT.Player(hostRef.current, {
        videoId: VIDEO_ID,
        playerVars: {
          autoplay: 0,
          controls: 0,
          loop: 1,
          playlist: VIDEO_ID,
          playsinline: 1,
          rel: 0,
        },
        events: {
          onReady: () => playerRef.current?.setVolume(18),
          onError: () => {
            setBlocked(true);
            setShowPrompt(true);
          },
        },
      });
    };

    let script = document.getElementById("youtube-iframe-api") as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement("script");
      script.id = "youtube-iframe-api";
      script.src = "https://www.youtube.com/iframe_api";
      script.async = true;
      document.body.appendChild(script);
    }

    const previousReady = w.onYouTubeIframeAPIReady;
    w.onYouTubeIframeAPIReady = () => {
      previousReady?.();
      startPlayer();
    };

    if (w.YT) startPlayer();

    const onFirstInteraction = () => {
      if (window.localStorage.getItem(PREF_KEY) === "off") return;
      setEnabled(true);
      setShowPrompt(false);
      setBlocked(false);
      window.localStorage.setItem(PREF_KEY, "on");
      playerRef.current?.playVideo();
    };

    window.addEventListener("pointerdown", onFirstInteraction, { once: true });

    return () => {
      window.removeEventListener("pointerdown", onFirstInteraction);
      if (playerRef.current) {
        playerRef.current.pauseVideo();
        playerRef.current.destroy();
        playerRef.current = null;
      }
      if (w.onYouTubeIframeAPIReady) w.onYouTubeIframeAPIReady = previousReady;
    };
  }, []);

  function toggle() {
    if (enabled) {
      setEnabled(false);
      setShowPrompt(false);
      window.localStorage.setItem(PREF_KEY, "off");
      playerRef.current?.pauseVideo();
      return;
    }
    setEnabled(true);
    setShowPrompt(false);
    setBlocked(false);
    window.localStorage.setItem(PREF_KEY, "on");
    playerRef.current?.playVideo();
  }

  return (
    <>
      <div ref={hostRef} aria-hidden="true" className="pointer-events-none fixed -left-[9999px] -top-[9999px] h-px w-px opacity-0" />
      <button
        type="button"
        onClick={toggle}
        aria-label={enabled ? "Turn ambient music off" : "Turn ambient music on"}
        className="fixed bottom-5 right-5 z-[60] inline-flex items-center gap-2 border border-black/15 bg-white/85 px-4 py-3 text-xs font-semibold text-black/70 shadow-[0_12px_30px_rgba(0,0,0,.08)] backdrop-blur-md transition hover:border-black/30 hover:text-black"
      >
        <span aria-hidden="true">{enabled ? "♪" : "◦"}</span>
        {enabled ? "Sound on" : "Sound off"}
      </button>
      {showPrompt && (
        <div className="fixed bottom-20 right-5 z-[60] max-w-[300px] border border-black/10 bg-[#11110f] px-4 py-4 text-white shadow-[0_18px_45px_rgba(0,0,0,.18)]">
          <p className="text-sm font-semibold">Ambient piano</p>
          <p className="mt-1 text-xs leading-5 text-white/60">The ABE TechLab soundtrack is ready. You can turn it off anytime.</p>
          <button type="button" onClick={toggle} className="mt-3 text-xs font-semibold text-[#b7ff3c] underline underline-offset-4">
            {blocked ? "Play sound" : "Turn sound off"}
          </button>
        </div>
      )}
    </>
  );
}
