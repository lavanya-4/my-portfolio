// src/components/UI.tsx
import React from "react";

export const Card: React.FC<React.PropsWithChildren<{ className?: string }>> = ({
  className,
  children,
}) => (
  <div
    className={[
      "rounded-3xl border border-white/10 bg-white/10 backdrop-blur",
      "shadow-[0_8px_30px_rgba(0,0,0,0.08)]",
      className || "",
    ].join(" ")}
  >
    {children}
  </div>
);

export const Chip: React.FC<
  React.PropsWithChildren<{ active?: boolean; onClick?: () => void; className?: string }>
> = ({ active, onClick, className, children }) => (
  <button
    onClick={onClick}
    className={[
      "px-3 py-1 rounded-full text-sm transition",
      active
        ? "bg-emerald-500 text-slate-900"
        : "bg-white/10 text-slate-200 hover:bg-white/20",
      className || "",
    ].join(" ")}
  >
    {children}
  </button>
);
