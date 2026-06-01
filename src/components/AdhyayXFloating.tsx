import { useEffect, useState } from "react";
import logo from "../assets/adhyayx-logo.jpg.asset.json";

export default function AdhyayXFloating() {
  const [showTip, setShowTip] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShowTip(false), 8000);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-[60] flex items-end gap-2 sm:bottom-6 sm:right-6">
      {showTip && (
        <button
          onClick={() => setShowTip(false)}
          className="mb-2 max-w-[180px] rounded-2xl rounded-br-sm border bg-card px-3 py-2 text-left text-xs font-bold text-foreground shadow-card animate-in fade-in slide-in-from-right-2"
          aria-label="Dismiss"
        >
          <span className="block text-[10px] font-black uppercase tracking-wider text-primary">
            New
          </span>
          AdhyayX is Live Now!
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
