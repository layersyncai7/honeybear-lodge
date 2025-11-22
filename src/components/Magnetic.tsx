"use client";
import React, { useRef } from "react";
export default function Magnetic({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement | null>(null);
  function onEnter() { document.documentElement.setAttribute("data-cursor", "hover"); }
  function onLeave() { document.documentElement.removeAttribute("data-cursor"); }
  return <div ref={ref} onMouseEnter={onEnter} onMouseLeave={onLeave}>{children}</div>;
}
