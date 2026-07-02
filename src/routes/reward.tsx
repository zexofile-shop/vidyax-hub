import { createFileRoute, Link } from "@tanstack/react-router";
import { RewardOfferCard } from "./index";

export const Route = createFileRoute("/reward")({
  head: () => ({
    meta: [
      { title: "Claim ₹170 Instant Reward — VidyaX" },
      {
        name: "description",
        content:
          "Sign up and get ₹170 instantly credited to your UPI/Bank. Trusted student reward — verified by Eduspark.",
      },
    ],
  }),
  component: RewardPage,
});

function RewardPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <nav className="mx-auto flex w-full max-w-5xl items-center justify-between px-5 py-4 sm:px-8">
        <Link to="/" className="text-2xl font-black text-brand-gradient">
          VidyaX
        </Link>
        <Link to="/" className="text-sm font-extrabold text-muted-foreground hover:text-primary">
          Home
        </Link>
      </nav>

      <section className="mx-auto flex w-full max-w-3xl flex-col items-center px-5 pb-16 pt-4 sm:px-8">
        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">
          Instant Reward
        </p>
        <h1 className="mt-2 text-center text-2xl font-black tracking-normal sm:text-4xl">
          Get ₹170 — Instantly on Signup
        </h1>
        <p className="mt-3 max-w-xl text-center text-sm font-semibold text-muted-foreground sm:text-base">
          A trusted student offer verified & used by the Eduspark team. No deposit required —
          withdraw directly to your UPI or bank.
        </p>

        <RewardOfferCard />

        <div className="mt-10 w-full max-w-md rounded-2xl border bg-card p-5 text-left shadow-card">
          <p className="text-[10px] font-black uppercase tracking-wider text-primary">
            How it works
          </p>
          <ol className="mt-3 space-y-2 text-sm font-semibold text-foreground">
            <li>1. Tap "Claim ₹170 Now" above.</li>
            <li>2. Sign up with your mobile number.</li>
            <li>3. ₹170 gets credited instantly — withdraw to UPI / bank.</li>
          </ol>
        </div>

        <div className="mt-10 text-center">
          <Link to="/" className="text-xs font-black text-muted-foreground hover:text-primary">
            ← Back to home
          </Link>
        </div>
      </section>
    </main>
  );
}
