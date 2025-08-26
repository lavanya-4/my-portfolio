// Pick ONE of these exports in App.tsx (just swap the name you import)

// 1) NeoGlass (Bolt-style): colorful blobs + glass cards
export const Theme_NeoGlass = {
    appBg:
      "pointer-events-none fixed inset-0 -z-10 " +
      "[&>*]:absolute [&>*]:rounded-full [&>*]:blur-3xl " +
      "after:absolute after:inset-0 after:bg-[radial-gradient(1100px_700px_at_15%_0%,#dbeafe_0%,transparent_60%),radial-gradient(1000px_600px_at_90%_8%,#f5d0fe_0%,transparent_60%),linear-gradient(180deg,#ffffff,rgba(255,255,255,0.9))]",
    blobs: [
      { className: "-top-24 -left-24 h-80 w-80 bg-blue-200/60" },
      { className: "-top-16 right-0 h-80 w-80 bg-fuchsia-200/60" },
      { className: "bottom-[-8rem] left-1/2 -translate-x-1/2 h-96 w-[60rem] bg-purple-200/70" },
    ],
    card:
      "rounded-2xl bg-white/80 backdrop-blur border border-white/70 shadow-[0_12px_40px_rgba(15,23,42,0.08)]",
  };
  
  // 2) Minimal Pro: bright white, subtle separators, elegant typography
  export const Theme_MinimalPro = {
    appBg:
      "pointer-events-none fixed inset-0 -z-10 after:absolute after:inset-0 " +
      "after:bg-[linear-gradient(180deg,#ffffff,rgba(248,250,252,0.8))]",
    blobs: [
      { className: "top-6 left-10 h-56 w-56 bg-sky-50 blur-2xl rounded-full" },
      { className: "bottom-10 right-10 h-56 w-56 bg-violet-50 blur-2xl rounded-full" },
    ],
    card:
      "rounded-2xl bg-white border border-slate-200 shadow-sm",
  };
  
  // 3) Gradient Split: strong gradient bands + solid cards
  export const Theme_GradientSplit = {
    appBg:
      "pointer-events-none fixed inset-0 -z-10 after:absolute after:inset-0 " +
      "after:bg-[linear-gradient(180deg,#f8fafc,#ffffff)]",
    blobs: [
      { className: "top-0 left-0 h-80 w-full bg-gradient-to-r from-blue-100 to-fuchsia-100 blur-2xl" },
    ],
    card:
      "rounded-2xl bg-white border border-slate-200 shadow-[0_10px_30px_rgba(15,23,42,0.07)]",
  };
  