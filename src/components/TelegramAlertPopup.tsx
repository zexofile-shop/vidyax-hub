import { useEffect, useState } from "react";

const TELEGRAM_URL = "https://t.me/+J_bKwBOe70czNjI1";

export default function TelegramAlertPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsOpen(true);

    const frameId = window.requestAnimationFrame(() => {
      setIsVisible(true);
    });

    return () => {
      window.cancelAnimationFrame(frameId);
    };
  }, []);

  const closePopup = () => {
    setIsVisible(false);

    window.setTimeout(() => {
      setIsOpen(false);
    }, 180);
  };

  const openTelegram = () => {
    window.open(TELEGRAM_URL, "_blank", "noopener,noreferrer");
  };

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closePopup();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      <style>
        {`
          @keyframes telegramPopupEnter {
            from {
              opacity: 0;
              transform: translateY(10px) scale(0.985);
            }
            to {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }
        `}
      </style>

      <div
        aria-live="polite"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 9999,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "16px",
          background: "rgba(8, 8, 10, 0.76)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          opacity: isVisible ? 1 : 0,
          transition: "opacity 180ms ease",
        }}
      >
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="telegram-popup-title"
          aria-describedby="telegram-popup-description"
          style={{
            position: "relative",
            width: "100%",
            maxWidth: "360px",
            overflow: "hidden",
            borderRadius: "24px",
            border: "1px solid #321315",
            background:
              "linear-gradient(180deg, #151214 0%, #100d0e 52%, #0c0a0b 100%)",
            boxShadow:
              "0 22px 56px rgba(0,0,0,0.46), 0 8px 20px rgba(88, 14, 18, 0.18)",
            color: "#ffffff",
            transform: isVisible
              ? "translateY(0) scale(1)"
              : "translateY(10px) scale(0.985)",
            opacity: isVisible ? 1 : 0,
            transition:
              "transform 180ms cubic-bezier(0.22, 1, 0.36, 1), opacity 180ms ease",
            animation: isVisible
              ? "telegramPopupEnter 180ms cubic-bezier(0.22, 1, 0.36, 1)"
              : "none",
          }}
        >
          <div
            style={{
              height: "3px",
              width: "100%",
              background: "linear-gradient(90deg, #7f1d1d 0%, #dc2626 100%)",
            }}
          />

          <button
            type="button"
            onClick={closePopup}
            aria-label="Close popup"
            style={{
              position: "absolute",
              top: "12px",
              right: "12px",
              zIndex: 2,
              width: "38px",
              height: "38px",
              border: "1px solid #303036",
              borderRadius: "999px",
              background: "#18181b",
              color: "#ffffff",
              fontSize: "20px",
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            ×
          </button>

          <div
            style={{
              padding: "18px 16px 16px",
            }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                minHeight: "28px",
                padding: "0 11px",
                borderRadius: "999px",
                background: "#7f1d1d",
                border: "1px solid #991b1b",
                color: "#ffffff",
                fontSize: "10px",
                fontWeight: 800,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              Security Notice
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "16px",
                marginBottom: "14px",
              }}
            >
              <div
                style={{
                  width: "68px",
                  height: "68px",
                  borderRadius: "20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "linear-gradient(180deg, #991b1b 0%, #7f1d1d 100%)",
                  border: "1px solid #b91c1c",
                  boxShadow: "0 8px 20px rgba(80, 10, 16, 0.2)",
                }}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  style={{
                    width: "30px",
                    height: "30px",
                    color: "#ffffff",
                  }}
                >
                  <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z" />
                  <path d="M12 9v4" />
                  <path d="M12 17h.01" />
                </svg>
              </div>
            </div>

            <h2
              id="telegram-popup-title"
              style={{
                margin: 0,
                textAlign: "center",
                fontSize: "1.35rem",
                lineHeight: 1.15,
                fontWeight: 900,
                letterSpacing: "-0.02em",
                color: "#ffffff",
              }}
            >
              Important Update Alert
            </h2>

            <p
              id="telegram-popup-description"
              style={{
                margin: "12px 4px 0",
                textAlign: "center",
                color: "#e4e4e7",
                fontSize: "0.86rem",
                lineHeight: 1.62,
                fontWeight: 500,
              }}
            >
              Join our Telegram channel now to stay updated with important
              announcements and the next app update,{" "}
              <span
                style={{
                  color: "#fca5a5",
                  textDecoration: "underline",
                  textUnderlineOffset: "4px",
                  textDecorationThickness: "2px",
                  fontWeight: 700,
                }}
              >
                otherwise, you may be banned from vidyaX.
              </span>
            </p>

            <button
              type="button"
              onClick={openTelegram}
              style={{
                marginTop: "18px",
                width: "100%",
                minHeight: "46px",
                borderRadius: "14px",
                border: "1px solid #313138",
                background: "#18181b",
                color: "#ffffff",
                fontSize: "0.94rem",
                fontWeight: 800,
                cursor: "pointer",
              }}
            >
              Join Telegram
            </button>

            <div
              style={{
                marginTop: "14px",
                textAlign: "center",
              }}
            >
              <span
                role="button"
                tabIndex={0}
                onClick={closePopup}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    closePopup();
                  }
                }}
                style={{
                  display: "inline-block",
                  color: "#f87171",
                  fontSize: "0.98rem",
                  fontWeight: 800,
                  textDecoration: "underline",
                  textUnderlineOffset: "5px",
                  textDecorationThickness: "2px",
                  cursor: "pointer",
                }}
              >
                Close
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
