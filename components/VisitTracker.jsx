"use client";

import { useEffect } from "react";

const SESSION_KEY = "portfolio_visit_tracked";

export default function VisitTracker() {
  useEffect(() => {
    const apiUrl = process.env.NEXT_PUBLIC_VISIT_API_URL;
    if (!apiUrl || typeof window === "undefined") return;

    if (sessionStorage.getItem(SESSION_KEY)) return;
    sessionStorage.setItem(SESSION_KEY, "1");

    fetch(`${apiUrl.replace(/\/$/, "")}/api/track`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        path: window.location.pathname,
        referrer: document.referrer,
        language: navigator.language,
      }),
      keepalive: true,
    }).catch(() => {});
  }, []);

  return null;
}
