// src/app/ClientBody.tsx
"use client";

import { ReactNode, useEffect } from "react";

export default function ClientBody({ children }: { children?: ReactNode }) {
  // Optional: run client-side body adjustments on mount
  useEffect(() => {
    // Example: ensure body has antialiased class
    if (typeof document !== "undefined") {
      document.body.classList.add("antialiased");
    }
  }, []);

  // If children present, render them; otherwise render nothing (or a fragment)
  return <>{children ?? null}</>;
}
