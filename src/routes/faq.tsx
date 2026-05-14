import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { FaqSection } from "./index";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { name: "google-site-verification", content: "DEJFR5l2Bgd1ltRMs0yaGFgZOlqzBfjn3u40t2TyEvk" },
      { title: "VidyaX FAQ — Common questions about Vidya X by Eduspark" },
      {
        name: "description",
        content:
          "Answers to common questions about VidyaX (Vidya X) — installation, Play Protect warnings, version updates, privacy and Eduspark support.",
      },
      { property: "og:title", content: "VidyaX FAQ — Vidya X by Eduspark" },
      {
        property: "og:description",
        content: "Everything you need to know about VidyaX before installing.",
      },
    ],
    links: [{ rel: "canonical", href: "https://vidyax.site/faq" }],
  }),
  component: FaqPage,
});

const API_URL = "https://vidya-x-application.vercel.app/api/app-version";

function FaqPage() {
  const [version, setVersion] = useState("1.2.3");
  const [updatedAt, setUpdatedAt] = useState("May 13, 2026");

  useEffect(() => {
    (async () => {
      try {
        const r = await fetch(API_URL, { headers: { "cache-control": "no-cache" } });
        const j = await r.json();
        if (j?.success && j.data) {
          setVersion(j.data.latestVersion);
          setUpdatedAt(
            new Date(j.data.updatedAt).toLocaleDateString("en-IN", {
              day: "numeric",
              month: "short",
              year: "numeric",
            }),
          );
        }
      } catch {
        /* ignore */
      }
    })();
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <nav className="mx-auto flex w-full max-w-5xl items-center justify-between px-5 py-4 sm:px-8">
        <Link to="/" className="text-2xl font-black text-brand-gradient">
          VidyaX
        </Link>
        <Link
          to="/download"
          className="rounded-full bg-primary px-5 py-2.5 text-sm font-extrabold text-primary-foreground shadow-soft transition hover:-translate-y-0.5"
        >
          Get APK
        </Link>
      </nav>
      <div className="mx-auto w-full max-w-5xl px-5 pb-16 sm:px-8">
        <FaqSection version={version} updatedAt={updatedAt} />
        <div className="mt-8 text-center">
          <Link to="/" className="text-xs font-black text-primary hover:underline">
            Back to home
          </Link>
        </div>
      </div>
    </main>
  );
}
