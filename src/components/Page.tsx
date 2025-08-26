import React from "react";
import { Card } from "./UI";

type Props = {
  title: string;
  subtitle?: string;
  right?: React.ReactNode;
  children: React.ReactNode;
};

export default function Page({ title, subtitle, right, children }: Props) {
  return (
    <div className="animate-fadeup">
      {/* page hero band (use Card to inherit theme) */}
      <Card className="relative -mx-6">
        <div className="mx-auto max-w-screen-2xl px-6 py-10 grid xl:grid-cols-[1.2fr,1fr] gap-10 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">{title}</h1>
            {subtitle && <p className="mt-3 text-slate-700 max-w-2xl">{subtitle}</p>}
          </div>
          {right ? <div>{right}</div> : null}
        </div>
      </Card>

      {/* body */}
      <section className="mt-10">{children}</section>
    </div>
  );
}
