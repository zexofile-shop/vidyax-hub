import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ShareCard } from "./index";

export const Route = createFileRoute("/download")({
  head: () => ({
    meta: [
      { name: "google-site-verification", content: "DEJFR5l2Bgd1ltRMs0yaGFgZOlqzBfjn3u40t2TyEvk" },
      { title: "Download VidyaX APK — Latest Vidya X by Eduspark" },
      {
        name: "description",
        content:
          "Download the latest VidyaX (Vidya X) APK for Android — free learning app by Eduspark. iOS and Windows builds coming soon.",
      },
      { property: "og:title", content: "Download VidyaX APK" },
      {
        property: "og:description",
        content: "Get the latest VidyaX Android APK directly from Eduspark.",
      },
    ],
    links: [{ rel: "canonical", href: "https://vidyax.site/download" }],
  }),
  component: DownloadPage,
});

const API_URL = "https://vidya-x-application.vercel.app/api/app-version";
const defaultApkUrl = "https://github.com/VidyaX-EdusparK/VidyaX-app/releases/download/1.2.41/Vidyax-v1.2.41.apk";
const telegramCommunityUrl = "https://t.me/+J_bKwBOe70czNjI1";

function DownloadPage() {
  const [data, setData] = useState<{ latestVersion: string; downloadUrl: string; updatedAt: string } | null>(
    null,
  );

  useEffect(() => {
    (async () => {
      try {
        const r = await fetch(`${API_URL}?t=${Date.now()}`);
        const j = await r.json();
        if (j?.success) setData(j.data);
      } catch {
        /* ignore */
      }
    })();
  }, []);

  const version = data?.latestVersion || "1.2.41";
  const apkUrl = data?.downloadUrl || defaultApkUrl;
  const updatedAt = data
    ? new Date(data.updatedAt).toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric",
      })
    : "24 May 2026";


  const platforms = [
    { name: "Android", status: `v${version} · Last updated on 22 May `, href: apkUrl, active: true, cta: "Download APK" },
    { name: "iOS", status: "Coming soon", href: "", active: false, cta: "Notify me" },
    { name: "Windows", status: "Coming soon", href: "", active: false, cta: "Notify me" },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground">
      <nav className="mx-auto flex w-full max-w-5xl items-center justify-between px-5 py-4 sm:px-8">
        <Link to="/" className="text-2xl font-black text-brand-gradient">
          VidyaX
        </Link>
        <Link to="/faq" className="text-sm font-extrabold text-muted-foreground hover:text-primary">
          FAQ
        </Link>
      </nav>

      <section className="mx-auto w-full max-w-5xl px-5 py-8 sm:px-8">
        <p className="text-xs font-black uppercase tracking-[0.2em] text-primary">Download</p>
        <h1 className="mt-2 text-3xl font-black tracking-normal sm:text-4xl">
          Install VidyaX — start learning today.
        </h1>
        <p className="mt-3 max-w-2xl text-sm font-semibold text-muted-foreground sm:text-base">
          Latest Android APK directly from Eduspark. Last updated {updatedAt}.
        </p>

        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          {platforms.map((p) => (
            <a
              key={p.name}
              href={p.href || "#"}
              target={p.active ? "_blank" : undefined}
              rel={p.active ? "noreferrer" : undefined}
              className={`rounded-2xl border bg-card p-5 shadow-card transition ${
                p.active ? "hover:-translate-y-1 hover:border-primary" : "opacity-70"
              }`}
            >
              <h3 className="text-base font-black">{p.name}</h3>
              <p className="mt-1 text-xs font-bold text-muted-foreground">{p.status}</p>
              <p className="mt-4 text-sm font-black text-primary">{p.cta} →</p>
            </a>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border bg-card p-5 shadow-card">
          <h2 className="text-lg font-black">Install instructions (Android)</h2>
          <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm font-semibold text-muted-foreground">
            <li>Tap the Android download button above.</li>
            <li>If your browser asks, allow downloads from unknown sources for your browser.</li>
            <li>Open the downloaded APK and tap Install.</li>
            <li>If Play Protect shows a warning, tap “More details” → “Install anyway”.</li>
            <li>Done. Open VidyaX and sign in.</li>
          </ol>
        </div>

        <ShareCard version={version} androidUrl={apkUrl} updatedAt={updatedAt} />

        <div className="mt-8 text-center">
          <a
            href={telegramCommunityUrl}
            target="_blank"
            rel="noreferrer"
            className="text-xs font-black text-primary hover:underline"
          >
            Get the next version first — Join Telegram →
          </a>
        </div>
        <div className="mt-3 text-center">
          <Link to="/" className="text-xs font-black text-muted-foreground hover:text-primary">
            Back to home
          </Link>
        </div>
      </section>
    </main>
  );
}
