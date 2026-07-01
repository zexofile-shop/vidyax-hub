import { useEffect, useState } from "react";
import logo from "../assets/adhyayx-logo.jpg";

const TIP_TEXT = "AdhyayX is Live Now! ";

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
    <div className="fixed bottom-24 right-4 z-[60] flex flex-col items-end gap-3 sm:bottom-28 sm:right-6">
      {/* WhatsApp channel — original WA icon, sits ABOVE the VX icon */}
      <a
        href="https://whatsapp.com/channel/0029VaoeKYx3mFYErON0tj0P"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Join VidyaX WhatsApp Channel"
        className="grid h-12 w-12 place-items-center rounded-full border-2 border-white bg-[#25D366] shadow-lg ring-1 ring-black/10 transition-transform hover:scale-105 sm:h-14 sm:w-14"
      >
        <svg viewBox="0 0 32 32" className="h-6 w-6 sm:h-7 sm:w-7" aria-hidden="true">
          <path
            fill="#ffffff"
            d="M19.11 17.58c-.28-.14-1.66-.82-1.92-.91-.26-.1-.45-.14-.63.14-.19.28-.72.91-.88 1.1-.16.19-.32.21-.6.07-.28-.14-1.18-.44-2.24-1.39-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.32.42-.49.14-.16.19-.28.28-.47.09-.19.05-.35-.02-.49-.07-.14-.63-1.52-.86-2.08-.23-.55-.46-.48-.63-.49l-.54-.01c-.19 0-.49.07-.75.35-.26.28-.98.96-.98 2.34s1 2.72 1.14 2.91c.14.19 1.97 3.01 4.78 4.22.67.29 1.19.46 1.6.59.67.21 1.28.18 1.76.11.54-.08 1.66-.68 1.89-1.34.23-.66.23-1.22.16-1.34-.07-.12-.26-.19-.54-.33zM16.02 6.13h-.01c-5.46 0-9.9 4.44-9.9 9.9 0 1.75.46 3.45 1.32 4.94l-1.4 5.11 5.23-1.37c1.44.79 3.07 1.2 4.75 1.2 5.46 0 9.9-4.44 9.9-9.9 0-2.64-1.03-5.13-2.9-6.99a9.87 9.87 0 00-6.99-2.89z"
          />
        </svg>
      </a>

      <div className="flex items-end gap-2">
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
            src={logo}
            alt="AdhyayX"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </a>
      </div>
    </div>
  );
}
