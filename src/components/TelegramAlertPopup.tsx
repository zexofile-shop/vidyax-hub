import { useEffect, useState } from "react";
import { X, Send } from "lucide-react";
import alertBanner from "../assets/vidyax-alert-banner.jpg.asset.json";

const TELEGRAM_URL = "https://t.me/+d7OQG-GmXeg0NmFl";

export default function TelegramAlertPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsOpen(true);
    const frameId = window.requestAnimationFrame(() => setIsVisible(true));
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  const closePopup = () => {
    setIsVisible(false);
    window.setTimeout(() => setIsOpen(false), 200);
  };

  const openTelegram = () => {
    window.open(TELEGRAM_URL, "_blank", "noopener,noreferrer");
  };

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closePopup();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      aria-live="polite"
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      style={{
        background: "rgba(15, 23, 60, 0.55)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        opacity: isVisible ? 1 : 0,
        transition: "opacity 200ms ease",
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) closePopup();
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Important VidyaX Notice"
        className="relative w-full max-w-[380px] overflow-hidden rounded-3xl border bg-card shadow-2xl"
        style={{
          transform: isVisible ? "translateY(0) scale(1)" : "translateY(16px) scale(0.97)",
          opacity: isVisible ? 1 : 0,
          transition: "transform 220ms cubic-bezier(0.22, 1, 0.36, 1), opacity 200ms ease",
        }}
      >
        {/* Top accent */}
        <div className="h-1 w-full bg-gradient-to-r from-primary to-primary/70" />

        {/* Close button */}
        <button
          type="button"
          onClick={closePopup}
          aria-label="Close popup"
          className="absolute right-3 top-3 z-10 grid h-9 w-9 place-items-center rounded-full border bg-background/95 text-foreground shadow-md transition hover:bg-muted"
          style={{ aspectRatio: "1 / 1" }}
        >
          <X size={18} strokeWidth={2.75} />
        </button>

        {/* Clickable banner */}
        <a
          href={TELEGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={closePopup}
          className="block w-full"
          aria-label="Join VidyaX Telegram for updates"
        >
          <img
            src={alertBanner.url}
            alt="VidyaX — App may be banned any time. Stay informed via Telegram."
            className="block h-auto w-full"
            loading="eager"
          />
        </a>

        {/* CTA */}
        <div className="p-4 sm:p-5">
          <button
            type="button"
            onClick={openTelegram}
            className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-primary px-5 py-3.5 text-sm font-black text-primary-foreground shadow-soft transition hover:-translate-y-0.5 hover:bg-primary/90 active:scale-[0.98]"
          >
            <Send size={16} strokeWidth={2.5} />
            Join Now
          </button>
          <button
            type="button"
            onClick={closePopup}
            className="mt-2 block w-full text-center text-xs font-semibold text-muted-foreground underline underline-offset-4 hover:text-foreground"
          >
            Maybe later
          </button>
        </div>
      </div>
    </div>
  );
}
