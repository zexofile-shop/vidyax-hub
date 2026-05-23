import { useEffect, useState } from "react";

const TELEGRAM_URL = "https://t.me/+J_bKwBOe70czNjI1";
const STORAGE_KEY = "vidyax_telegram_popup_closed_at";
const HIDE_DURATION_MS = 24 * 60 * 60 * 1000;

export default function TelegramAlertPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      const lastClosedAt = raw ? Number(raw) : 0;
      const shouldShow =
        !lastClosedAt || Date.now() - lastClosedAt >= HIDE_DURATION_MS;

      if (shouldShow) {
        setIsOpen(true);
      }
    } catch {
      setIsOpen(true);
    }
  }, []);

  const closePopup = () => {
    try {
      window.localStorage.setItem(STORAGE_KEY, String(Date.now()));
    } catch {}

    setIsOpen(false);
  };

  const openTelegram = () => {
    window.open(TELEGRAM_URL, "_blank", "noopener,noreferrer");
  };

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "16px",
        background: "rgba(0,0,0,0.78)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="telegram-popup-title"
        style={{
          width: "100%",
          maxWidth: "390px",
          borderRadius: "26px",
          overflow: "hidden",
          background: "linear-gradient(180deg, #161616 0%, #0d0d0d 100%)",
          border: "1px solid #2a2a2a",
          boxShadow: "0 20px 60px rgba(0,0,0,0.45)",
          color: "#fff",
        }}
      >
        <div
          style={{
            height: "4px",
            background: "linear-gradient(90deg, #b91c1c 0%, #ef4444 100%)",
          }}
        />

        <div style={{ padding: "20px 18px 18px", position: "relative" }}>
          <button
            type="button"
            onClick={closePopup}
            aria-label="Close popup"
            style={{
              position: "absolute",
              top: "12px",
              right: "12px",
              width: "38px",
              height: "38px",
              borderRadius: "999px",
              border: "1px solid #3a3a3a",
              background: "#1c1c1c",
              color: "#fff",
              fontSize: "20px",
              cursor: "pointer",
            }}
          >
            ×
          </button>

          <div
            style={{
              display: "inline-block",
              background: "#991b1b",
              border: "1px solid #dc2626",
              color: "#fff",
              borderRadius: "999px",
              padding: "6px 12px",
              fontSize: "11px",
              fontWeight: 800,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            Security Notice
          </div>

          <h2
            id="telegram-popup-title"
            style={{
              margin: "18px 0 0",
              fontSize: "28px",
              lineHeight: 1.15,
              fontWeight: 900,
              textAlign: "center",
            }}
          >
            Important Update Alert
          </h2>

          <p
            style={{
              margin: "14px 0 0",
              fontSize: "15px",
              lineHeight: 1.7,
              color: "#e5e5e5",
              textAlign: "center",
            }}
          >
            Join our Telegram channel now, otherwise you may miss the next app
            update and important announcements.
          </p>

          <p
            style={{
              margin: "14px 0 0",
              fontSize: "15px",
              lineHeight: 1.7,
              fontWeight: 800,
              color: "#ffffff",
              textAlign: "center",
            }}
          >
            <span
              style={{
                color: "#f87171",
                textDecoration: "underline",
                textUnderlineOffset: "4px",
                textDecorationThickness: "2px",
              }}
            >
              Otherwise you&apos;ll be banned from our app vidyaX.
            </span>
          </p>

          <div
            style={{
              marginTop: "18px",
              paddingTop: "14px",
              borderTop: "1px solid #2d2d2d",
              textAlign: "center",
            }}
          >
            <span
              onClick={openTelegram}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  openTelegram();
                }
              }}
              role="button"
              tabIndex={0}
              style={{
                color: "#ff5a5a",
                fontWeight: 800,
                fontSize: "16px",
                cursor: "pointer",
                textDecoration: "underline",
                textUnderlineOffset: "5px",
                textDecorationThickness: "2px",
              }}
            >
              Join Telegram
            </span>
          </div>

          <button
            type="button"
            onClick={closePopup}
            style={{
              marginTop: "18px",
              width: "100%",
              height: "50px",
              borderRadius: "16px",
              border: "1px solid #3a3a3a",
              background: "#1b1b1b",
              color: "#fff",
              fontWeight: 800,
              fontSize: "15px",
              cursor: "pointer",
            }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
