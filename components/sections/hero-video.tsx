"use client";

import { useEffect, useRef } from "react";

export function HeroVideo() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.muted = true;
    el.defaultMuted = true;
    el.playsInline = true;
    el.setAttribute("muted", "");
    el.setAttribute("playsinline", "true");
    el.setAttribute("webkit-playsinline", "true");
    el.setAttribute("x-webkit-airplay", "deny");

    const tryPlay = () => {
      const play = el.play();
      if (play) void play.catch(() => {});
    };

    tryPlay();
    el.addEventListener("canplay", tryPlay);
    el.addEventListener("loadeddata", tryPlay);

    const onGesture = () => tryPlay();
    document.addEventListener("touchstart", onGesture, { passive: true });
    document.addEventListener("click", onGesture);

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) tryPlay();
        else el.pause();
      },
      { threshold: 0.2 },
    );
    io.observe(el);

    const onVis = () => {
      if (document.visibilityState === "visible") tryPlay();
    };
    document.addEventListener("visibilitychange", onVis);

    return () => {
      el.removeEventListener("canplay", tryPlay);
      el.removeEventListener("loadeddata", tryPlay);
      document.removeEventListener("touchstart", onGesture);
      document.removeEventListener("click", onGesture);
      document.removeEventListener("visibilitychange", onVis);
      io.disconnect();
    };
  }, []);

  return (
    <video
      ref={ref}
      className="pointer-events-none absolute inset-0 h-full w-full object-cover"
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      aria-hidden="true"
      tabIndex={-1}
      disablePictureInPicture
      disableRemotePlayback
    >
      <source src="/videos/hero.mp4" type="video/mp4" />
    </video>
  );
}
