import React from "react";

export const Card: React.FC<React.PropsWithChildren<{ className?: string }>> = ({
  className,
  children,
}) => (
  <div
    className={[
      "rounded-2xl bg-white/80 backdrop-blur border border-white/70",
      "shadow-[0_12px_40px_rgba(15,23,42,0.08)]",
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
        ? "bg-blue-600 text-white shadow"
        : "bg-white/80 backdrop-blur border border-white/70 hover:bg-white",
      className || "",
    ].join(" ")}
  >
    {children}
  </button>
);
