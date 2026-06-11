import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Lock, RefreshCw, Mail, Star, Send, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { ADMIN_KEY, FEEDBACK_ENDPOINT } from "@/lib/feedback-config";

export const Route = createFileRoute("/feedback_/admin")({
  head: () => ({
    meta: [
      { title: "Feedback Admin — VidyaX" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: FeedbackAdmin,
});

const STATUS_OPTIONS = [
  "Under Review",
  "In Progress",
  "Resolved",
  "Closed",
] as const;

type FeedbackItem = {
  rowIndex: number;
  timestamp?: string;
  name?: string;
  email?: string;
  rating?: string | number;
  category?: string;
  message?: string;
  month?: string;
  userAgent?: string;
  status?: string;
  admin_reply?: string;
};

function FeedbackAdmin() {
  const [keyInput, setKeyInput] = useState("");
  const [adminKey, setAdminKey] = useState("");
  const [authed, setAuthed] = useState(false);
  const [items, setItems] = useState<FeedbackItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");
  const [query, setQuery] = useState("");

  const load = async (key: string) => {
    const trimmedKey = key.trim();

    // ✅ FIX: Client-side key check FIRST — no API dependency for auth
    if (trimmedKey !== ADMIN_KEY.trim()) {
      setErr("Wrong admin key.");
      setAuthed(false);
      return;
    }

    // ✅ Key is correct — unlock dashboard immediately
    setAdminKey(trimmedKey);
    setAuthed(true);
    setErr("");

    if (!FEEDBACK_ENDPOINT) {
      setErr("Feedback endpoint not configured.");
      return;
    }
    setLoading(true);
    try {
      const r = await fetch(
        `${FEEDBACK_ENDPOINT}?key=${encodeURIComponent(trimmedKey)}`,
      );
      const j = await r.json();
      if (!j.ok) {
        // API secret mismatch — auth stays unlocked, but data won't load
        setErr("API key mismatch — feedback data could not be loaded.");
        return;
      }
      const data: FeedbackItem[] = Array.isArray(j.data)
        ? j.data
        : Array.isArray(j.rows)
          ? j.rows
          : [];
      setItems(data);
    } catch {
      setErr("Couldn't load feedback data. Check endpoint.");
    } finally {
      setLoading(false);
    }
  };

  if (!authed) {
    return (
      <main className="grid min-h-screen place-items-center bg-background px-4 text-foreground">
        <div className="w-full max-w-sm rounded-2xl border bg-card p-6 shadow-card">
          <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-brand-soft text-primary">
            <Lock className="h-5 w-5" />
          </div>
          <h1 className="mt-4 text-center text-xl font-black">Feedback Admin</h1>
          <p className="mt-1 text-center text-xs font-bold text-muted-foreground">
            Enter admin key to view submissions.
          </p>
          <input
            type="password"
            value={keyInput}
            onChange={(e) => setKeyInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") load(keyInput.trim());
            }}
            placeholder="Admin key"
            className="mt-4 w-full rounded-xl border bg-background px-3 py-2.5 text-sm font-semibold outline-none focus:border-primary"
          />
          {err && (
            <p className="mt-2 text-xs font-bold text-destructive">{err}</p>
          )}
          <button
            onClick={() => load(keyInput.trim())}
            disabled={loading}
            className="mt-4 w-full rounded-xl bg-primary px-4 py-2.5 text-sm font-black text-primary-foreground disabled:opacity-60"
          >
            {loading ? "Checking…" : "Unlock"}
          </button>
          <Link
            to="/"
            className="mt-4 block text-center text-[11px] font-black text-muted-foreground hover:text-primary"
          >
            ← Back to home
          </Link>
        </div>
      </main>
    );
  }

  const filtered = items.filter((it) => {
    if (!query.trim()) return true;
    const q = query.toLowerCase();
    return (
      (it.email || "").toLowerCase().includes(q) ||
      (it.name || "").toLowerCase().includes(q) ||
      (it.category || "").toLowerCase().includes(q) ||
      (it.message || "").toLowerCase().includes(q) ||
      (it.status || "").toLowerCase().includes(q)
    );
  });

  return (
    <main className="min-h-screen bg-background text-foreground">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <Link to="/" className="text-2xl font-black text-brand-gradient">
          VidyaX
        </Link>
        <div className="flex items-center gap-2">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search…"
            className="hidden rounded-lg border bg-card px-3 py-1.5 text-xs font-semibold outline-none focus:border-primary sm:block"
          />
          <button
            onClick={() => load(adminKey)}
            className="inline-flex items-center gap-1.5 rounded-lg border bg-card px-3 py-1.5 text-xs font-black hover:border-primary"
          >
            <RefreshCw className={`h-3.5 w-3.5 ${loading ? "animate-spin" : ""}`} />
            Refresh
          </button>
        </div>
      </nav>

      <section className="mx-auto w-full max-w-6xl px-5 pb-16 sm:px-8">
        <div className="flex items-end justify-between gap-3">
          <div>
            <h1 className="text-2xl font-black sm:text-3xl">Feedback Dashboard</h1>
            <p className="mt-1 text-xs font-bold text-muted-foreground">
              {filtered.length} of {items.length} entries
            </p>
          </div>
        </div>

        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by name, email, category…"
          className="mt-4 w-full rounded-xl border bg-card px-3 py-2.5 text-sm font-semibold outline-none focus:border-primary sm:hidden"
        />

        <div className="mt-5 grid gap-4">
          {filtered.length === 0 && (
            <div className="rounded-2xl border bg-card p-10 text-center text-sm font-bold text-muted-foreground shadow-card">
              No feedback found.
            </div>
          )}
          {filtered
            .slice()
            .sort((a, b) => (b.rowIndex || 0) - (a.rowIndex || 0))
            .map((item) => (
              <FeedbackCard
                key={item.rowIndex}
                item={item}
                adminKey={adminKey}
                onUpdated={(status, reply) => {
                  setItems((prev) =>
                    prev.map((p) =>
                      p.rowIndex === item.rowIndex
                        ? { ...p, status, admin_reply: reply }
                        : p,
                    ),
                  );
                }}
              />
            ))}
        </div>
      </section>
    </main>
  );
}

function FeedbackCard({
  item,
  adminKey,
  onUpdated,
}: {
  item: FeedbackItem;
  adminKey: string;
  onUpdated: (status: string, reply: string) => void;
}) {
  const [status, setStatus] = useState<string>(
    item.status && STATUS_OPTIONS.includes(item.status as typeof STATUS_OPTIONS[number])
      ? item.status
      : "Under Review",
  );
  const [reply, setReply] = useState<string>(item.admin_reply || "");
  const [sending, setSending] = useState(false);

  const rating = Number(item.rating) || 0;

  const sendUpdate = async () => {
    if (!item.email) {
      toast.error("No user email on this entry.");
      return;
    }
    if (!reply.trim() || reply.trim().length < 8) {
      toast.error("Please write a response (at least 8 characters).");
      return;
    }
    setSending(true);
    try {
      await fetch(FEEDBACK_ENDPOINT, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({
          action: "send_admin_reply",
          key: adminKey,
          userEmail: item.email,
          rowIndex: item.rowIndex,
          status,
          customMessage: reply,
        }),
      });
      toast.success(`Update sent to ${item.email}`);
      onUpdated(status, reply);
    } catch {
      toast.error("Couldn't send update. Try again.");
    } finally {
      setSending(false);
    }
  };

  const statusTone =
    status === "Resolved"
      ? "bg-emerald-500/10 text-emerald-500 border-emerald-500/30"
      : status === "In Progress"
        ? "bg-blue-500/10 text-blue-500 border-blue-500/30"
        : status === "Closed"
          ? "bg-zinc-500/10 text-zinc-500 border-zinc-500/30"
          : "bg-amber-500/10 text-amber-500 border-amber-500/30";

  return (
    <article className="rounded-2xl border bg-card p-5 shadow-card">
      <header className="flex flex-wrap items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-base font-black">{item.name || "Anonymous"}</h3>
            <span
              className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[10px] font-black uppercase tracking-wider ${statusTone}`}
            >
              {status}
            </span>
            {item.category && (
              <span className="rounded-full bg-muted px-2 py-0.5 text-[10px] font-black uppercase tracking-wider text-muted-foreground">
                {item.category}
              </span>
            )}
          </div>
          <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] font-bold text-muted-foreground">
            <span className="inline-flex items-center gap-1">
              <Mail className="h-3 w-3" />
              {item.email || "—"}
            </span>
            {item.timestamp && (
              <span>
                {new Date(item.timestamp).toLocaleString("en-IN", {
                  dateStyle: "medium",
                  timeStyle: "short",
                })}
              </span>
            )}
            {item.month && <span>• {item.month}</span>}
            <span>• #{item.rowIndex}</span>
          </div>
        </div>
        {rating > 0 && (
          <div className="flex items-center gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`h-3.5 w-3.5 ${
                  i < rating
                    ? "fill-amber-400 text-amber-400"
                    : "text-muted-foreground/30"
                }`}
              />
            ))}
          </div>
        )}
      </header>

      {item.message && (
        <p className="mt-3 whitespace-pre-wrap rounded-xl bg-muted/40 p-3 text-sm font-semibold leading-6">
          {item.message}
        </p>
      )}

      <div className="mt-4 grid gap-3 rounded-xl border bg-background p-3 sm:grid-cols-[180px_1fr]">
        <div>
          <label className="mb-1 block text-[10px] font-black uppercase tracking-wider text-muted-foreground">
            Status
          </label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full rounded-lg border bg-card px-2.5 py-2 text-xs font-bold outline-none focus:border-primary"
          >
            {STATUS_OPTIONS.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="mb-1 block text-[10px] font-black uppercase tracking-wider text-muted-foreground">
            Admin response (sent to user's email)
          </label>
          <textarea
            value={reply}
            onChange={(e) => setReply(e.target.value)}
            rows={3}
            placeholder="Type a professional reply…"
            className="w-full resize-y rounded-lg border bg-card px-3 py-2 text-xs font-semibold outline-none focus:border-primary"
          />
        </div>
        <div className="sm:col-span-2 flex justify-end">
          <button
            onClick={sendUpdate}
            disabled={sending}
            className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-xs font-black text-primary-foreground hover:opacity-90 disabled:opacity-60"
          >
            {sending ? (
              <Loader2 className="h-3.5 w-3.5 animate-spin" />
            ) : (
              <Send className="h-3.5 w-3.5" />
            )}
            {sending ? "Sending…" : "Send Update"}
          </button>
        </div>
      </div>
    </article>
  );
}
