import { createFileRoute, Link } from "@tanstack/react-router";
import { Send } from "lucide-react";

export const Route = createFileRoute("/feedback_/admin")({
  head: () => ({
    meta: [
      { title: "Feedback Admin — VidyaX" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: FeedbackAdmin,
});

function FeedbackAdmin() {
  return (
    <main className="grid min-h-screen place-items-center bg-background px-4 text-foreground">
      <div className="w-full max-w-sm rounded-2xl border bg-card p-8 shadow-card text-center">
        <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-brand-soft text-primary">
          <Send className="h-6 w-6" />
        </div>
        <h1 className="mt-5 text-xl font-black">Admin Panel Migrated</h1>
        <p className="mt-2 text-sm font-semibold text-muted-foreground leading-relaxed">
          The feedback system has been successfully migrated to Telegram. 
          You no longer need this dashboard to view messages.
        </p>
        <div className="mt-4 rounded-xl bg-muted/40 p-4 border text-xs font-bold text-foreground">
          All new user feedback will be sent directly to your Telegram Bot automatically.
        </div>
        <Link
          to="/"
          className="mt-6 block rounded-xl bg-primary px-4 py-3 text-sm font-black text-primary-foreground hover:opacity-90"
        >
          Return to Home
        </Link>
      </div>
    </main>
  );
}
