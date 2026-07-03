import { useEffect, useState } from "react";
import { X, Wallet, ArrowRight } from "lucide-react";

/**
 * Slim bottom "stripe" — money theme, no emojis.
 * Shown on `show-reward-stripe` window event.
 * Click → smooth-scrolls to #reward-offer, or navigates to /reward.
 */
export default function RewardStripePopup() {
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const onShow = () => {
      setMounted(true);
      window.requestAnimationFrame(() => setVisible(true));
    };
    window.addEventListener("show-reward-stripe", onShow);
    return () => window.removeEventListener("show-reward-stripe", onShow);
  }, []);

  const close = (e?: React.MouseEvent | React.KeyboardEvent) => {
    e?.stopPropagation();
    setVisible(false);
    window.setTimeout(() => setMounted(false), 250);
  };

  const goToReward = () => {
    const el = document.getElementById("reward-offer");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
      close();
    } else {
      window.location.assign("/reward");
    }
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
      <div className="relative flex w-full max-w-md items-center gap-3 overflow-hidden rounded-2xl border border-emerald-400/25 bg-[#07120d]/95 px-3.5 py-2.5 shadow-2xl ring-1 ring-emerald-400/10 backdrop-blur">
        {/* Money icon */}
        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-emerald-400 to-teal-500 text-[#062015] shadow-md">
          <Wallet size={17} strokeWidth={2.5} />
        </span>

        {/* Copy */}
        <button
          type="button"
          onClick={goToReward}
          className="min-w-0 flex-1 text-left"
        >
          <p className="truncate text-[13px] font-black leading-tight text-white">
            Earn Now — <span className="text-emerald-300">instant payout</span>
          </p>
          <p className="truncate text-[11px] font-semibold text-white/60">
            Verified student offer · UPI / Bank
          </p>
        </button>

        {/* CTA */}
        <button
          type="button"
          onClick={goToReward}
          className="hidden shrink-0 items-center gap-1 rounded-lg bg-gradient-to-r from-emerald-400 to-teal-400 px-3 py-1.5 text-[11px] font-black text-[#062015] shadow-sm sm:inline-flex"
        >
          Earn
          <ArrowRight size={12} strokeWidth={3} />
        </button>

        {/* Cross */}
        <button
          type="button"
          onClick={close}
          aria-label="Dismiss"
          className="ml-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-white/5 text-white/80 ring-1 ring-white/10 transition hover:bg-white/10"
        >
          <X size={15} strokeWidth={2.75} />
        </button>
      </div>
    </div>
  );
}
