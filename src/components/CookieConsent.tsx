"use client";

import { useState, useEffect, useSyncExternalStore } from "react";
import Script from "next/script";
import Link from "next/link";
import { Cookie } from "lucide-react";

const CONSENT_KEY = "kulana_cookie_consent";

type Consent = "accepted" | "declined" | null;

// localStorage throws when site data is blocked; treat that as "no choice yet"
function readConsent(): Consent {
  try {
    const v = localStorage.getItem(CONSENT_KEY);
    return v === "accepted" || v === "declined" ? v : null;
  } catch {
    return null;
  }
}

function saveConsent(v: "accepted" | "declined") {
  try {
    localStorage.setItem(CONSENT_KEY, v);
  } catch {
    // Choice still applies for this page view
  }
}

const subscribe = (cb: () => void) => {
  window.addEventListener("storage", cb);
  return () => window.removeEventListener("storage", cb);
};

export default function CookieConsent() {
  // undefined on the server, so nothing renders until the stored choice is known
  const stored = useSyncExternalStore<Consent | undefined>(subscribe, readConsent, () => undefined);
  const [choice, setChoice] = useState<Consent>(null);
  const [visible, setVisible] = useState(false);
  const consent = choice ?? stored;

  useEffect(() => {
    if (consent !== null) return;
    const t = setTimeout(() => setVisible(true), 800);
    return () => clearTimeout(t);
  }, [consent]);

  const accept = () => {
    saveConsent("accepted");
    setChoice("accepted");
    setVisible(false);
  };

  const decline = () => {
    saveConsent("declined");
    setChoice("declined");
    setVisible(false);
  };

  return (
    <>
      {consent === "accepted" && (
        <Script
          id="hs-script-loader"
          src="https://js.hs-scripts.com/9031498.js"
          strategy="lazyOnload"
        />
      )}

      {visible && (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 animate-in slide-in-from-bottom-2 duration-300">
          <div className="max-w-4xl mx-auto bg-gray-950 text-white rounded-2xl shadow-2xl border border-gray-800 p-5 md:p-6 flex flex-col md:flex-row items-start md:items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center flex-shrink-0">
              <Cookie className="w-5 h-5 text-cyan-400" strokeWidth={1.75} />
            </div>
            <p className="text-sm text-gray-300 leading-relaxed flex-1">
              We use analytics cookies to understand how our site is used and to improve your experience.
              Your data is handled in accordance with our{" "}
              <Link href="/privacy-policy" className="text-cyan-400 underline underline-offset-2 hover:text-cyan-300 transition-colors">
                Privacy Policy
              </Link>{" "}
              and{" "}
              <Link href="/cookies-policy" className="text-cyan-400 underline underline-offset-2 hover:text-cyan-300 transition-colors">
                Cookies Policy
              </Link>.
            </p>
            <div className="flex items-center gap-3 flex-shrink-0 w-full md:w-auto">
              <button
                onClick={decline}
                className="flex-1 md:flex-none px-4 py-2.5 text-sm font-medium text-gray-400 hover:text-white border border-gray-700 rounded-xl hover:border-gray-500 transition-colors"
              >
                Decline
              </button>
              <button
                onClick={accept}
                className="flex-1 md:flex-none px-6 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-colors shadow-lg shadow-blue-900/30"
              >
                Accept Analytics
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
