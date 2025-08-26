import React from "react";

type Props = { src: string; alt: string; caption?: string };

export default function HeroPhoto({ src, alt, caption }: Props) {
  return (
    <div className="relative">
      <div className="absolute inset-[-10px] rounded-[26px] gradient-ring animate-glow -z-10" />
      <div className="relative overflow-hidden rounded-3xl">
        <img src={src} alt={alt} className="w-full h-[420px] object-cover rounded-3xl border border-white/70" />
      </div>
      {caption && (
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2">
          <div className="rounded-full px-3 py-1 text-xs font-semibold bg-white/90 backdrop-blur border border-white/70 shadow">
            {caption}
          </div>
        </div>
      )}
    </div>
  );
}
