import { useEffect, useState } from "react";
import logo from "../assets/adhyayx-logo.jpg";

const TIP_TEXT = "AdhyayX is Live Now!";

export default function AdhyayXFloating() {
  const [showTip, setShowTip] = useState(true);
  const [typed, setTyped] = useState("");

  // Typewriter effect
  useEffect(() => {
    if (!showTip) return;
    let i = 0;
    setTyped("");
    const interval = setInterval(() => {
      i++;
      setTyped(TIP_TEXT.slice(0, i));
      if (i >= TIP_TEXT.length) clearInterval(interval);
    }, 70);
    return () => clearInterval(interval);
  }, [showTip]);

  // Auto-dismiss after longer duration
  useEffect(() => {
    const t = setTimeout(() => setShowTip(false), 18000);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="fixed bottom-24 right-4 z-[60] flex items-end gap-2 sm:bottom-28 sm:right-6">
      {showTip && (
        <button
          onClick={() => setShowTip(false)}
          className="mb-2 max-w-[200px] rounded-2xl rounded-br-sm border bg-card px-3 py-2 text-left text-xs font-bold text-foreground shadow-card animate-in fade-in slide-in-from-right-2"
          aria-label="Dismiss"
        >
          <span className="block text-[10px] font-black uppercase tracking-wider text-primary">
            New
          </span>
          <span>
            {typed}
            {typed.length < TIP_TEXT.length && (
              <span className="ml-0.5 inline-block w-[1px] animate-pulse">|</span>
            )}
          </span>
        </button>
      )}
      <a
        href="https://AdhyayX.site"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => setShowTip(false)}
        aria-label="Visit AdhyayX"
        className="block h-14 w-14 overflow-hidden rounded-full border-2 border-white bg-white shadow-lg ring-1 ring-black/10 transition-transform hover:scale-105 sm:h-16 sm:w-16"
      >
        <img
          src={logo.url}
          alt="AdhyayX"
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </a>
    </div>
  );
}
