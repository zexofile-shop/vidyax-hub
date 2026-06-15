import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Lock, RefreshCw, Mail, Star, Send, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { FEEDBACK_ENDPOINT } from "@/lib/feedback-config";

export const Route = createFileRoute("/feedback_/admin")({
  head: () => ({
    meta: [
      { title: "Feedback Admin — VidyaX" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: FeedbackAdmin,
});

const STATUS_OPTIONS = ["Under Review", "In Progress", "Resolved", "Closed"] as const;

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
    if (!trimmedKey) { setErr("Please enter the admin key."); return; }
    if (!FEEDBACK_ENDPOINT || FEEDBACK_ENDPOINT.includes("YOUR_GOOGLE")) {
      setErr("Feedback endpoint not configured."); return;
    }

    setLoading(true); setErr("");
    
    try {
      const r = await fetch(`${FEEDBACK_ENDPOINT}?key=${encodeURIComponent(trimmedKey)}`);
      const j = await r.json();
      
      if (!j.ok) {
        setErr("Wrong Admin Key. Access Denied."); setAuthed(false); return;
      }

      setAdminKey(trimmedKey); setAuthed(true);
      let data: FeedbackItem[] = [];

      if (Array.isArray(j.rows) && j.rows.length > 0) {
        const [headers, ...dataRows] = j.rows as string[][];
        const colIndex = (name: string) => headers.findIndex((h: string) => h?.toString().toLowerCase() === name.toLowerCase());

        const tIdx = colIndex("timestamp"), nameIdx = colIndex("name"), emailIdx = colIndex("email");
        const ratingIdx= colIndex("rating"), catIdx = colIndex("category"), msgIdx = colIndex("message");
        const monthIdx = colIndex("month"), uaIdx = colIndex("useragent");
        const statusIdx= colIndex("status"), replyIdx = colIndex("admin_reply");

        data = dataRows
          .filter((row) => row.some((cell) => cell !== "" && cell != null))
          .map((row, i) => ({
            rowIndex: i + 2,
            timestamp: tIdx >= 0 ? String(row[tIdx] ?? "") : undefined,
            name: nameIdx >= 0 ? String(row[nameIdx] ?? "") : undefined,
            email: emailIdx >= 0 ? String(row[emailIdx] ?? "") : undefined,
            rating: ratingIdx >= 0? String(row[ratingIdx] ?? ""): undefined,
            category: catIdx >= 0 ? String(row[catIdx] ?? "") : undefined,
            message: msgIdx >= 0 ? String(row[msgIdx] ?? "") : undefined,
            month: monthIdx >= 0 ? String(row[monthIdx] ?? "") : undefined,
            userAgent: uaIdx >= 0 ? String(row[uaIdx] ?? "") : undefined,
            status: statusIdx >= 0? String(row[statusIdx] ?? ""): undefined,
            admin_reply: replyIdx >= 0 ? String(row[replyIdx] ?? "") : undefined,
          }));
      }

      setItems(data);
    } catch {
      setErr("Couldn't load feedback data.");
    } finally {
      setLoading(false);
    }
  };

  if (!authed) {
    return (
      <main className="grid min-h-screen place-items-center bg-background px-4 text-foreground">
        <div className="w-full max-w-sm rounded-2xl border bg-card p-6 shadow-card">
          <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-brand-soft text-primary"><Lock className="h-5 w-5" /></div>
          <h1 className="mt-4 text-center text-xl font-black">Feedback Admin</h1>
          <p className="mt-1 text-center text-xs font-bold text-muted-foreground">Enter admin key to view submissions.</p>
          <input
            type="password" value={keyInput} onChange={(e) => setKeyInput(e.target.value)}
            onKeyDown={(e) => { if (e.key === "Enter") load(keyInput.trim()); }}
            placeholder="Admin key" className="mt-4 w-full rounded-xl border bg-background px-3 py-2.5 text-sm font-semibold outline-none focus:border-primary"
          />
          {err && <p className="mt-2 text-xs font-bold text-destructive">{err}</p>}
          <button onClick={() => load(keyInput.trim())} disabled={loading} className="mt-4 w-full rounded-xl bg-primary px-4 py-2.5 text-sm font-black text-primary-foreground disabled:opacity-60">
            {loading ? "Checking…" : "Unlock"}
          </button>
        </div>
      </main>
    );
  }

  const filtered = items.filter((it) => {
    if (!query.trim()) return true;
    const q = query.toLowerCase();
    return (it.email || "").toLowerCase().includes(q) || (it.name || "").toLowerCase().includes(q) || (it.category || "").toLowerCase().includes(q) || (it.message || "").toLowerCase().includes(q) || (it.status || "").toLowerCase().includes(q);
  });

  return (
    <main className="min-h-screen bg-background text-foreground">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <Link to="/" className="text-2xl font-black text-brand-gradient">VidyaX</Link>
        <button onClick={() => load(adminKey)} className="inline-flex items-center gap-1.5 rounded-lg border bg-card px-3 py-1.5 text-xs font-black hover:border-primary">
          <RefreshCw className={`h-3.5 w-3.5 ${loading ? "animate-spin" : ""}`} /> Refresh
        </button>
      </nav>

      <section className="mx-auto w-full max-w-6xl px-5 pb-16 sm:px-8">
        <h1 className="text-2xl font-black sm:text-3xl">Feedback Dashboard</h1>
        <p className="mt-1 text-xs font-bold text-muted-foreground">{filtered.length} of {items.length} entries</p>

        <div className="mt-5 grid gap-4">
          {filtered.slice().sort((a, b) => (b.rowIndex || 0) - (a.rowIndex || 0)).map((item) => (
            <FeedbackCard key={item.rowIndex} item={item} adminKey={adminKey} onUpdated={(s, r) => setItems((p) => p.map((x) => x.rowIndex === item.rowIndex ? { ...x, status: s, admin_reply: r } : x))} />
          ))}
        </div>
      </section>
    </main>
  );
}

function FeedbackCard({ item, adminKey, onUpdated }: { item: FeedbackItem; adminKey: string; onUpdated: (s: string, r: string) => void; }) {
  const [status, setStatus] = useState(item.status && STATUS_OPTIONS.includes(item.status as any) ? item.status : "Under Review");
  const [reply, setReply] = useState(item.admin_reply || "");
  const [sending, setSending] = useState(false);

  const sendUpdate = async () => {
    setSending(true);
    try {
      await fetch(FEEDBACK_ENDPOINT, {
        method: "POST", mode: "no-cors",
        headers: { "Content-Type": "text/plain" },
        body: JSON.stringify({ action: "send_admin_reply", key: adminKey, rowIndex: item.rowIndex, status, customMessage: reply }),
      });
      toast.success("Saved");
      onUpdated(status, reply);
    } catch {
      toast.error("Error saving");
    } finally {
      setSending(false);
    }
  };

  return (
    <article className="rounded-2xl border bg-card p-5 shadow-card">
      <header className="flex flex-wrap items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <h3 className="text-base font-black">{item.name || "Anonymous"}</h3>
            <span className="rounded-full bg-muted px-2 py-0.5 text-[10px] font-black uppercase">{item.category}</span>
          </div>
          <div className="mt-1 flex items-center gap-3 text-[11px] font-bold text-muted-foreground">
            <span>{item.email}</span>
            <span>• Row {item.rowIndex}</span>
          </div>
        </div>
        <div className="flex items-center gap-0.5"><Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" /> {item.rating}/5</div>
      </header>
      <p className="mt-3 whitespace-pre-wrap rounded-xl bg-muted/40 p-3 text-sm font-semibold">{item.message}</p>
      
      <div className="mt-4 grid gap-3 rounded-xl border bg-background p-3 sm:grid-cols-[180px_1fr]">
        <div>
          <select value={status} onChange={(e) => setStatus(e.target.value)} className="w-full rounded-lg border bg-card px-2.5 py-2 text-xs font-bold outline-none focus:border-primary">
            {STATUS_OPTIONS.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
        <textarea value={reply} onChange={(e) => setReply(e.target.value)} rows={2} placeholder="Internal note / reply" className="w-full resize-y rounded-lg border bg-card px-3 py-2 text-xs font-semibold outline-none focus:border-primary" />
        <div className="sm:col-span-2 flex justify-end">
          <button onClick={sendUpdate} disabled={sending} className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-xs font-black text-primary-foreground disabled:opacity-60">
            {sending ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <Send className="h-3.5 w-3.5" />} Save
          </button>
        </div>
      </div>
    </article>
  );
}
