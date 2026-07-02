import { useEffect, useState } from "react";
import { X } from "lucide-react";

/**
 * Slim "stripe" style slider that slides up from bottom.
 * Clicking it smooth-scrolls to the #reward-offer section on the home page.
 */
export default function RewardStripePopup({ delay = 300 }: { delay?: number }) {
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    const t = window.setTimeout(() => setVisible(true), delay);
    return () => window.clearTimeout(t);
  }, [delay]);

  const close = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setVisible(false);
    window.setTimeout(() => setMounted(false), 250);
  };

  const scrollToReward = () => {
    const el = document.getElementById("reward-offer");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    }
    close();
  };

  if (!mounted) return null;

  return (
    <div
      className="fixed inset-x-0 bottom-3 z-[9998] flex justify-center px-3 sm:bottom-4"
      style={{
        transform: visible ? "translateY(0)" : "translateY(120%)",
        opacity: visible ? 1 : 0,
        transition: "transform 320ms cubic-bezier(0.22,1,0.36,1), opacity 240ms ease",
      }}
      aria-live="polite"
    >
      <button
        type="button"
        onClick={scrollToReward}
        className="group relative flex w-full max-w-md items-center gap-3 overflow-hidden rounded-full border border-amber-300/40 bg-gradient-to-r from-[#1a1330] via-[#241a45] to-[#1a1330] px-3.5 py-2.5 text-left shadow-2xl ring-1 ring-amber-300/20 transition hover:-translate-y-0.5"
      >
        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-gradient-to-br from-amber-300 to-yellow-500 text-base shadow-md">
          💰
        </span>
        <div className="min-w-0 flex-1">
          <p className="truncate text-[13px] font-black leading-tight text-white">
            Earn <span className="text-amber-300">₹170 instantly</span>
          </p>
          <p className="truncate text-[11px] font-semibold text-white/70">
            Tap to claim your reward
          </p>
        </div>
        <span className="hidden shrink-0 rounded-full bg-amber-400 px-3 py-1 text-[11px] font-black text-[#1a1330] shadow-sm sm:inline-block">
          Claim
        </span>
        <span
          role="button"
          tabIndex={0}
          onClick={close as unknown as React.MouseEventHandler}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              close();
            }
          }}
          aria-label="Dismiss reward offer"
          className="ml-1 grid h-8 w-8 shrink-0 cursor-pointer place-items-center rounded-full bg-white/10 text-white/90 ring-1 ring-white/15 transition hover:bg-white/20"
          style={{ aspectRatio: "1 / 1" }}
        >
          <X size={15} strokeWidth={2.75} />
        </span>
      </button>
    </div>
  );
}
