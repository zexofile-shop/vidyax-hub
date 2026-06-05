import { useEffect, useState } from "react";
import { X } from "lucide-react";


const TELEGRAM_URL = "https://t.me/+J_bKwBOe70czNjI1";

// Site's primary dark-blue button color (same as Download APK button)
const BRAND_BLUE = "oklch(0.47 0.275 264.4)";
const BRAND_BLUE_DARK = "oklch(0.37 0.27 263.8)";

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
    }, 200);
  };

  const openTelegram = () => {
    window.open(TELEGRAM_URL, "_blank", "noopener,noreferrer");
  };

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closePopup();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      aria-live="polite"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
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
        aria-labelledby="telegram-popup-title"
        aria-describedby="telegram-popup-description"
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "380px",
          overflow: "hidden",
          borderRadius: "24px",
          border: "1.5px solid oklch(0.902 0.019 252.4)",
          background: "oklch(1 0 0)",
          boxShadow:
            "0 24px 80px -12px oklch(0.47 0.275 264.4 / 22%), 0 8px 24px oklch(0 0 0 / 10%)",
          color: "oklch(0.19 0.052 259.8)",
          transform: isVisible
            ? "translateY(0) scale(1)"
            : "translateY(16px) scale(0.97)",
          opacity: isVisible ? 1 : 0,
          transition:
            "transform 220ms cubic-bezier(0.22, 1, 0.36, 1), opacity 200ms ease",
        }}
      >
        {/* Top accent bar */}
        <div
          style={{
            height: "4px",
            width: "100%",
            background: `linear-gradient(90deg, ${BRAND_BLUE}, ${BRAND_BLUE_DARK})`,
          }}
        />

        {/* Close button */}
        <button
          type="button"
          onClick={closePopup}
          aria-label="Close popup"
          style={{
            position: "absolute",
            top: "14px",
            right: "14px",
            zIndex: 2,
            width: "38px",
            height: "38px",
            minWidth: "38px",
            minHeight: "38px",
            flexShrink: 0,
            aspectRatio: "1 / 1",
            padding: 0,
            border: "1.5px solid oklch(0.902 0.019 252.4)",
            borderRadius: "999px",
            background: "oklch(0.981 0.009 253.2)",
            color: "oklch(0.35 0.05 258)",
            cursor: "pointer",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            lineHeight: 0,
            transition: "background 150ms",
          }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLButtonElement).style.background =
              "oklch(0.937 0.025 255.7)")
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLButtonElement).style.background =
              "oklch(0.981 0.009 253.2)")
          }
        >
          <X size={18} strokeWidth={2.75} />
        </button>


        <div style={{ padding: "22px 22px 24px" }}>
          {/* Badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              minHeight: "26px",
              padding: "0 12px",
              borderRadius: "999px",
              background: "oklch(0.93 0.054 260.8)",
              border: "1px solid oklch(0.902 0.019 252.4)",
              color: BRAND_BLUE,
              fontSize: "10px",
              fontWeight: 800,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            A Little Help
          </div>

          {/* Title */}
          <h2
            id="telegram-popup-title"
            style={{
              margin: "14px 0 0",
              textAlign: "center",
              fontSize: "1.3rem",
              lineHeight: 1.2,
              fontWeight: 900,
              letterSpacing: "-0.02em",
              color: "oklch(0.19 0.052 259.8)",
            }}
          >
            A Small Request From Us
          </h2>

          {/* Description */}
          <p
            id="telegram-popup-description"
            style={{
              margin: "12px 2px 0",
              textAlign: "center",
              color: "oklch(0.56 0.044 254.8)",
              fontSize: "0.83rem",
              lineHeight: 1.65,
              fontWeight: 500,
            }}
          >
            We provide{" "}
            <span
              style={{
                color: BRAND_BLUE,
                fontWeight: 800,
              }}
            >
              lakhs of rupees worth of premium content
            </span>{" "}
            absolutely free to thousands of students every day. If VidyaX has
            genuinely helped you, please{" "}
            <span
              style={{
                color: BRAND_BLUE_DARK,
                fontWeight: 700,
                textDecoration: "underline",
                textUnderlineOffset: "3px",
              }}
            >
              subscribe to our Telegram channel and share VidyaX
            </span>{" "}
            with your friends. Your one share helps another student. That is the
            only fee we ever ask for.
          </p>

          {/* CTA Button — same solid dark-blue as site's Download button */}
          <button
            type="button"
            onClick={openTelegram}
            style={{
              marginTop: "20px",
              width: "100%",
              minHeight: "48px",
              borderRadius: "14px",
              border: "none",
              background: BRAND_BLUE,
              color: "oklch(0.99 0.004 252)",
              fontSize: "0.95rem",
              fontWeight: 800,
              cursor: "pointer",
              letterSpacing: "-0.01em",
              transition: "background 150ms, transform 150ms",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background =
                BRAND_BLUE_DARK;
              (e.currentTarget as HTMLButtonElement).style.transform =
                "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background =
                BRAND_BLUE;
              (e.currentTarget as HTMLButtonElement).style.transform =
                "translateY(0)";
            }}
          >
            Subscribe &amp; Support Us
          </button>

          {/* Close link */}
          <div style={{ marginTop: "14px", textAlign: "center" }}>
            <span
              role="button"
              tabIndex={0}
              onClick={closePopup}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  closePopup();
                }
              }}
              style={{
                display: "inline-block",
                color: "oklch(0.56 0.044 254.8)",
                fontSize: "0.88rem",
                fontWeight: 600,
                textDecoration: "underline",
                textUnderlineOffset: "4px",
                cursor: "pointer",
              }}
            >
              Maybe later
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
