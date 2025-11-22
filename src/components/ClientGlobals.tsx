// src/components/ClientGlobals.tsx
"use client";

import { useEffect } from "react";

/**
 * ClientGlobals
 *
 * Run one-off client-only initialization or global scripts.
 * Used as <ClientGlobals /> in src/app/layout.tsx (self-closing).
 *
 * Returns null (no rendered DOM) because it's only used for side-effects.
 */
export default function ClientGlobals() {
  useEffect(() => {
    // Example: restore antialiased class after hydration
    // (your original code set body.className = "antialiased")
    // Keep this simple and safe:
    if (typeof document !== "undefined") {
      document.body.classList.add("antialiased");
    }

    // If you need cleanup logic, return it here:
    return () => {
      // (optional) cleanup if you added global listeners
    };
  }, []);

  // No DOM output required
  return null;
}
