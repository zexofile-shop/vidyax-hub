import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Lock, RefreshCw } from "lucide-react";
import { ADMIN_KEY, FEEDBACK_ENDPOINT } from "@/lib/feedback-config";

export const Route = createFileRoute("/feedback/admin")({
  head: () => ({
    meta: [
      { title: "Feedback Admin — VidyaX" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: FeedbackAdmin,
});

function FeedbackAdmin() {
  const [keyInput, setKeyInput] = useState("");
  const [authed, setAuthed] = useState(false);
  const [rows, setRows] = useState<string[][]>([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  const load = async (key: string) => {
    if (!FEEDBACK_ENDPOINT) {
      setErr("Feedback endpoint not configured.");
      return;
    }
    setLoading(true);
    setErr("");
    try {
      const r = await fetch(`${FEEDBACK_ENDPOINT}?key=${encodeURIComponent(key)}`);
      const j = await r.json();
      if (!j.ok) {
        setErr("Wrong key.");
        setAuthed(false);
        return;
      }
      setRows(j.rows || []);
      setAuthed(true);
    } catch {
      setErr("Couldn't load. Check endpoint.");
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
            placeholder="Admin key"
            className="mt-4 w-full rounded-xl border bg-background px-3 py-2.5 text-sm font-semibold outline-none focus:border-primary"
          />
          {err && (
            <p className="mt-2 text-xs font-bold text-destructive">{err}</p>
          )}
          <button
            onClick={() => load(keyInput || ADMIN_KEY)}
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

  const [header, ...data] = rows.length ? rows : [[]];

  return (
    <main className="min-h-screen bg-background text-foreground">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <Link to="/" className="text-2xl font-black text-brand-gradient">
          VidyaX
        </Link>
        <button
          onClick={() => load(keyInput || ADMIN_KEY)}
          className="inline-flex items-center gap-1.5 rounded-lg border bg-card px-3 py-1.5 text-xs font-black hover:border-primary"
        >
          <RefreshCw className={`h-3.5 w-3.5 ${loading ? "animate-spin" : ""}`} />
          Refresh
        </button>
      </nav>
      <section className="mx-auto w-full max-w-6xl px-5 pb-16 sm:px-8">
        <h1 className="text-2xl font-black">Feedback Submissions</h1>
        <p className="mt-1 text-xs font-bold text-muted-foreground">
          {data.length} total entries
        </p>
        <div className="mt-5 overflow-x-auto rounded-2xl border bg-card shadow-card">
          <table className="w-full text-sm">
            <thead className="bg-muted/40 text-left text-[11px] font-black uppercase tracking-wider text-muted-foreground">
              <tr>
                {(header || []).map((h, i) => (
                  <th key={i} className="whitespace-nowrap px-3 py-2.5">
                    {String(h)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.length === 0 && (
                <tr>
                  <td
                    colSpan={(header || []).length || 1}
                    className="px-3 py-8 text-center text-xs font-bold text-muted-foreground"
                  >
                    No feedback yet.
                  </td>
                </tr>
              )}
              {data
                .slice()
                .reverse()
                .map((row, i) => (
                  <tr key={i} className="border-t align-top">
                    {row.map((cell, j) => (
                      <td
                        key={j}
                        className="max-w-xs whitespace-pre-wrap break-words px-3 py-2.5 text-xs font-semibold"
                      >
                        {String(cell)}
                      </td>
                    ))}
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
