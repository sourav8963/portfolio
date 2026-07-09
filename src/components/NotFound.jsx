import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  const containerRef = useRef(null);
  const [videoLayout, setVideoLayout] = useState({
    width: 0,
    height: 0,
    left: 0,
    top: 0,
  });

  const updateLayout = () => {
    if (!containerRef.current) return;
    const Wc = window.innerWidth;
    const Hc = window.innerHeight;

    // Intrinsic video dimensions: 1280x720 (16:9 ratio)
    const Rv = 1280 / 720;
    const Rc = Wc / Hc;

    let Wr, Hr, Lr, Tr;

    if (Rc > Rv) {
      // Viewport is wider than 16:9 - video is cropped top/bottom
      Wr = Wc;
      Hr = Wc / Rv;
      Lr = 0;
      Tr = (Hc - Hr) / 2;
    } else {
      // Viewport is taller than 16:9 - video is cropped left/right
      Wr = Hc * Rv;
      Hr = Hc;
      Lr = (Wc - Wr) / 2;
      Tr = 0;
    }

    setVideoLayout({ width: Wr, height: Hr, left: Lr, top: Tr });
  };

  useEffect(() => {
    updateLayout();
    window.addEventListener("resize", updateLayout);
    // Trigger update on video loadedmetadata to be safe
    const video = containerRef.current?.querySelector("video");
    if (video) {
      video.addEventListener("loadedmetadata", updateLayout);
    }
    return () => {
      window.removeEventListener("resize", updateLayout);
      if (video) {
        video.removeEventListener("loadedmetadata", updateLayout);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-screen h-screen overflow-hidden bg-black relative"
    >
      <video
        autoPlay
        muted
        playsInline
        onLoadedMetadata={updateLayout}
        onEnded={(e) => {
          // Keep the video paused on the final static frame containing the buttons
          e.target.currentTime = e.target.duration - 0.05;
          e.target.pause();
        }}
        className="w-full h-full object-cover"
      >
        <source src="/404%20video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 
        Interactive Glass Overlay for 'Log in' (top right).
        Anchored dynamically to the video content pixels.
        Transparent when idle, fades in a crisp glass border and light background on hover.
      */}
      <Link
        to="/login"
        className="absolute rounded-[8px] border border-transparent hover:border-white/30 bg-transparent hover:bg-white/15 active:bg-white/25 hover:scale-[1.02] transition-all cursor-pointer hover:backdrop-blur-[1px] shadow-[0_4px_12px_rgba(255,255,255,0)] hover:shadow-[0_4px_12px_rgba(255,255,255,0.15)] z-20"
        style={{
          left: "1176px",
          top: "5px",
          width: "55px",
          height: "32px",
        }}

      />

      {/* 
        Interactive Glass Overlay for 'Back Home' (bottom center).
        Anchored dynamically to the video content pixels.
        Transparent when idle, fades in a crisp glass border and light background on hover.
      */}
      <Link
        to="/"
        className="absolute rounded-full border border-transparent hover:border-white/30 bg-transparent hover:bg-white/15 active:bg-white/25 hover:scale-[1.02] transition-all cursor-pointer hover:backdrop-blur-[1px] shadow-[0_4px_12px_rgba(255,255,255,0)] hover:shadow-[0_4px_12px_rgba(255,255,255,0.15)] z-20"
        style={{
          left: `${videoLayout.left + 0.45234 * videoLayout.width}px`,
          top: `${videoLayout.top + 0.88333 * videoLayout.height}px`,
          width: `${0.09531 * videoLayout.width}px`,
          height: `${0.05 * videoLayout.height}px`,
        }}
      />

      {/* 
        Watermark Cover: Large solid white block that sits precisely over 
        the "jitter.video" logo at the bottom right corner of the video.
      */}
      <div
        className="absolute bg-white z-10 pointer-events-none rounded-sm"
        style={{
          left: `${videoLayout.left + 0.845 * videoLayout.width}px`,
          top: `${videoLayout.top + 0.900 * videoLayout.height}px`,
          width: `${0.15 * videoLayout.width}px`,
          height: `${0.09 * videoLayout.height}px`,
        }}
      />
    </div>
  );
}
