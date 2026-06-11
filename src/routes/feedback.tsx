import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { CheckCircle2, Lock, MessageSquare, Sparkles, Star } from "lucide-react";
import {
  FEEDBACK_ENDPOINT,
  formatDate,
  getPortalStatus,
} from "@/lib/feedback-config";

export const Route = createFileRoute("/feedback")({
  head: () => ({
    meta: [
      { title: "Give Feedback — VidyaX Monthly Feedback Portal" },
      {
        name: "description",
        content:
          "Share feedback for the VidyaX app. Monthly Feedback Portal opens on the 7th of every month for 15 days. Help us make VidyaX better.",
      },
      { property: "og:title", content: "VidyaX Feedback Portal" },
      {
        property: "og:description",
        content: "Monthly feedback portal for the VidyaX learning app by Eduspark.",
      },
    ],
    links: [{ rel: "canonical", href: "https://vidyax.site/feedback" }],
  }),
  component: FeedbackPage,
});

const CATEGORIES = [
  "App Bug / Crash",
  "Feature Request",
  "Content / Batches",
  "UI / Design",
  "Performance",
  "Other",
];

const RULES = [
  "Portal opens on the 7th of every month and stays open for 15 days.",
  "One submission per concern is enough — duplicates slow our response time.",
  "Mention your device & app version for bug reports (helps us reproduce).",
  "Be specific. ‘App is slow’ helps less than ‘Lecture player lags on Redmi 9’.",
  "No personal data of others, no abusive content. Such entries are dropped.",
  "Reviewed feedback gets a reply on your email within 24–48 hours.",
];

function FeedbackPage() {
  const status = useMemo(() => getPortalStatus(), []);
  const [form, setForm] = useState({
    name: "",
    email: "",
    rating: 5,
    category: CATEGORIES[0],
    message: "",
  });
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const isOpen = status.isOpen;

  const onChange = (k: keyof typeof form, v: string | number) =>
    setForm((p) => ({ ...p, [k]: v }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");
    if (!form.email.trim() || !form.message.trim() || !form.name.trim()) {
      setErrorMsg("Please fill name, email and your message.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setErrorMsg("Please enter a valid email address.");
      return;
    }
    if (form.message.trim().length < 12) {
      setErrorMsg("Please share a little more detail (min 12 characters).");
      return;
    }
    if (!FEEDBACK_ENDPOINT) {
      setErrorMsg(
        "Feedback endpoint is not configured yet. Please try again later.",
      );
      return;
    }
    setState("sending");

    const payload = {
      action:    "submit_feedback",
      name:      form.name,
      email:     form.email,
      rating:    form.rating,
      category:  form.category,
      message:   form.message,
      month:     status.monthLabel,
      userAgent: typeof navigator !== "undefined" ? navigator.userAgent : "",
    };

    console.log("[VidyaX Feedback] Endpoint:", FEEDBACK_ENDPOINT);
    console.log("[VidyaX Feedback] Payload:", JSON.stringify(payload, null, 2));

    try {
      const response = await fetch(FEEDBACK_ENDPOINT, {
        method: "POST",
        // no-cors avoids CORS preflight on Google Apps Script.
        // Response will always be opaque (status: 0) — that is expected.
        mode: "no-cors",
        // FIX: "text/plain;charset=utf-8" is NOT a CORS-safelisted Content-Type
        // because of the extra ;charset= parameter. The browser strips the header
        // in no-cors mode, so the body never reaches Apps Script as expected.
        // Plain "text/plain" (no params) IS safelisted and works correctly.
        headers: { "Content-Type": "text/plain" },
        body: JSON.stringify(payload),
      });

      // Opaque response is expected with no-cors — it does NOT mean failure.
      console.log("[VidyaX Feedback] Response type:", response.type, "| status:", response.status);
      console.log("[VidyaX Feedback] Request dispatched — check Google Sheet for the new row.");

      setState("sent");
    } catch (err) {
      console.error("[VidyaX Feedback] Fetch failed:", err);
      setState("error");
      setErrorMsg("Couldn't submit right now. Please try again in a minute.");
    }
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      <nav className="mx-auto flex w-full max-w-5xl items-center justify-between px-5 py-4 sm:px-8">
        <Link to="/" className="text-2xl font-black text-brand-gradient">
          VidyaX
        </Link>
        <Link
          to="/faq"
          className="text-sm font-extrabold text-muted-foreground hover:text-primary"
        >
          FAQ
        </Link>
      </nav>

      <section className="mx-auto w-full max-w-3xl px-5 pb-16 pt-2 sm:px-8">
        {/* Hero */}
        <div className="overflow-hidden rounded-3xl bg-hero-gradient p-6 text-primary-foreground shadow-soft sm:p-8">
          <div className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] opacity-90">
            <Sparkles className="h-3.5 w-3.5" />
            Monthly Feedback Portal
          </div>
          <h1 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
            {status.monthLabel} — VidyaX Feedback
          </h1>
          <p className="mt-3 max-w-xl text-sm font-semibold leading-7 opacity-90">
            Tell us what's working, what's broken, and what you'd love to see
            next. We read every entry and reply on your email within 24–48
            hours.
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-2">
            <span
              className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-black uppercase tracking-wider ${
                isOpen
                  ? "bg-white/20 text-white"
                  : "bg-black/30 text-white/90"
              }`}
            >
              <span
                className={`h-2 w-2 rounded-full ${
                  isOpen ? "bg-emerald-300" : "bg-rose-300"
                }`}
              />
              {isOpen ? "Portal is open" : "Portal is closed"}
            </span>
            <span className="rounded-full bg-white/15 px-3 py-1 text-[11px] font-bold">
              {isOpen
                ? `Open till ${formatDate(status.closesAt)}`
                : `Reopens ${formatDate(status.nextOpensAt)}`}
            </span>
          </div>
        </div>

        {/* Rules */}
        <div className="mt-6 rounded-2xl border bg-card p-5 shadow-card">
          <h2 className="flex items-center gap-2 text-base font-black">
            <MessageSquare className="h-4 w-4 text-primary" />
            Portal Rules
          </h2>
          <ul className="mt-3 space-y-2 text-sm font-semibold text-muted-foreground">
            {RULES.map((r, i) => (
              <li key={i} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>{r}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Form / States */}
        <div className="mt-6 rounded-2xl border bg-card p-5 shadow-card sm:p-7">
          {state === "sent" ? (
            <div className="py-6 text-center">
              <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-emerald-500/10 text-emerald-500">
                <CheckCircle2 className="h-7 w-7" />
              </div>
              <h2 className="mt-4 text-2xl font-black">Thank you!</h2>
              <p className="mt-2 text-sm font-semibold text-muted-foreground">
                Your feedback for the {status.monthLabel} portal has been
                recorded. We'll reply on{" "}
                <span className="font-black text-foreground">{form.email}</span>{" "}
                within 24–48 hours.
              </p>
              <Link
                to="/"
                className="mt-6 inline-flex rounded-xl bg-primary px-5 py-2.5 text-sm font-black text-primary-foreground hover:opacity-90"
              >
                Back to home
              </Link>
            </div>
          ) : !isOpen ? (
            <div className="py-6 text-center">
              <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-muted text-muted-foreground">
                <Lock className="h-7 w-7" />
              </div>
              <h2 className="mt-4 text-xl font-black">
                The {status.monthLabel} portal is currently closed
              </h2>
              <p className="mt-2 text-sm font-semibold text-muted-foreground">
                The feedback portal opens on the 7th of every month and stays
                open for 15 days.
                <br />
                Next window:{" "}
                <span className="font-black text-foreground">
                  {formatDate(status.nextOpensAt)}
                </span>
                .
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-4">
              <Field label="Your name">
                <input
                  type="text"
                  required
                  maxLength={80}
                  value={form.name}
                  onChange={(e) => onChange("name", e.target.value)}
                  className="input-base"
                  placeholder="e.g. Aman Sharma"
                />
              </Field>

              <Field
                label="Email (we'll reply here within 24–48 hours)"
              >
                <input
                  type="email"
                  required
                  maxLength={120}
                  value={form.email}
                  onChange={(e) => onChange("email", e.target.value)}
                  className="input-base"
                  placeholder="you@example.com"
                />
              </Field>

              <Field label="Overall rating">
                <RatingPicker
                  value={form.rating}
                  onChange={(v) => onChange("rating", v)}
                />
              </Field>

              <Field label="Category">
                <select
                  value={form.category}
                  onChange={(e) => onChange("category", e.target.value)}
                  className="input-base"
                >
                  {CATEGORIES.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </Field>

              <Field label="Your feedback">
                <textarea
                  required
                  minLength={12}
                  maxLength={2000}
                  rows={5}
                  value={form.message}
                  onChange={(e) => onChange("message", e.target.value)}
                  className="input-base resize-y"
                  placeholder="Describe your bug, suggestion, or idea. The more specific, the better."
                />
                <p className="mt-1 text-[11px] font-bold text-muted-foreground">
                  {form.message.length}/2000
                </p>
              </Field>

              {errorMsg && (
                <p className="rounded-lg bg-destructive/10 px-3 py-2 text-xs font-bold text-destructive">
                  {errorMsg}
                </p>
              )}

              <button
                type="submit"
                disabled={state === "sending"}
                className="w-full rounded-xl bg-primary px-5 py-3 text-sm font-black text-primary-foreground transition hover:opacity-90 disabled:opacity-60"
              >
                {state === "sending" ? "Submitting…" : "Submit feedback"}
              </button>
              <p className="text-center text-[11px] font-bold text-muted-foreground">
                By submitting, you agree we may contact you on the email
                provided regarding this feedback only.
              </p>
            </form>
          )}
        </div>

        <div className="mt-6 text-center">
          <Link
            to="/"
            className="text-xs font-black text-muted-foreground hover:text-primary"
          >
            ← Back to home
          </Link>
        </div>
      </section>

      <style>{`
        .input-base {
          width: 100%;
          border-radius: 0.75rem;
          border: 1px solid hsl(var(--border));
          background: hsl(var(--background));
          padding: 0.7rem 0.9rem;
          font-size: 0.875rem;
          font-weight: 600;
          color: hsl(var(--foreground));
          outline: none;
          transition: border-color .15s, box-shadow .15s;
        }
        .input-base:focus {
          border-color: hsl(var(--primary));
          box-shadow: 0 0 0 4px color-mix(in oklab, hsl(var(--primary)) 18%, transparent);
        }
      `}</style>
    </main>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-black uppercase tracking-wider text-muted-foreground">
        {label}
      </span>
      {children}
    </label>
  );
}

function RatingPicker({
  value,
  onChange,
}: {
  value: number;
  onChange: (n: number) => void;
}) {
  return (
    <div className="flex items-center gap-1.5">
      {[1, 2, 3, 4, 5].map((n) => (
        <button
          key={n}
          type="button"
          onClick={() => onChange(n)}
          className="rounded-lg p-1 transition hover:scale-110"
          aria-label={`${n} star`}
        >
          <Star
            className={`h-7 w-7 ${
              n <= value
                ? "fill-amber-400 text-amber-400"
                : "text-muted-foreground/40"
            }`}
          />
        </button>
      ))}
      <span className="ml-2 text-xs font-black text-muted-foreground">
        {value}/5
      </span>
    </div>
  );
}
