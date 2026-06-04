import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import splashAsset from "../assets/vidyax-splash.jpg.asset.json";
import homeAsset from "../assets/vidyax-home.jpg.asset.json";
import pwAsset from "../assets/vidyax-pw.jpg.asset.json";
import batchesAsset from "../assets/vidyax-batches.jpg.asset.json";
import lecturePhysicsAsset from "../assets/vidyax-lecture-physics.jpg.asset.json";
import lectureForestAsset from "../assets/vidyax-lecture-forest.jpg.asset.json";
import profileAsset from "../assets/vidyax-profile.jpg.asset.json";
import leaderboardAsset from "../assets/vidyax-leaderboard.jpg.asset.json";

const ASSET_BASE = "https://vidyax.lovable.app";
const a = (u: string) => (u.startsWith("http") ? u : `${ASSET_BASE}${u}`);

export const Route = createFileRoute("/tutorials")({
  head: () => ({
    meta: [
      { name: "google-site-verification", content: "DEJFR5l2Bgd1ltRMs0yaGFgZOlqzBfjn3u40t2TyEvk" },
      { title: "How to use VidyaX — Tutorials" },
      {
        name: "description",
        content:
          "Step-by-step video tutorials for VidyaX — install, login, batches, PW connect, lectures, profile, and leaderboard.",
      },
      { property: "og:title", content: "How to use VidyaX — Tutorials" },
      { property: "og:description", content: "Short, segment-wise video guides for VidyaX." },
    ],
  }),
  component: TutorialsPage,
});

// To change a tutorial video, just edit the videoUrl below.
// File: src/routes/tutorials.tsx
const segments: { title: string; desc: string; videoUrl: string; poster: string }[] = [
  {
    title: "How to Install / Update VidyaX",
    desc: "Install the APK or update to the latest version safely.",
    videoUrl: "https://res.cloudinary.com/ddm2vzvbf/video/upload/v1780582566/Captune-20260604-160419331_vgv7i4.mp4",
    poster: a(homeAsset.url),
  },
  {
    title: "How to Login on VidyaX",
    desc: "Step-by-step login process for new VidyaX users.",
    videoUrl: "https://res.cloudinary.com/ddm2vzvbf/video/upload/v1780583300/Captune-20260604-180844976_yvyyq3.mp4",
    poster: a(splashAsset.url),
  },
  {
    title: "How to Access Batches",
    desc: "Open the batches section and explore your courses.",
    videoUrl: "https://res.cloudinary.com/ddm2vzvbf/video/upload/v1780584518/Captune-20260604-181030634_fijowp.mp4",
    poster: a(batchesAsset.url),
  },
  {
    title: "How to Connect PW Account",
    desc: "Link your Physics Wallah account inside VidyaX.",
    videoUrl: "https://res.cloudinary.com/ddm2vzvbf/video/upload/v1780585794/lv_0_20260604203244_lpxemg.mp4",
    poster: a(pwAsset.url),
  },
  {
    title: "How to Search & Enroll in Batches",
    desc: "Find the right batch and enroll in a single tap.",
    videoUrl: "https://res.cloudinary.com/ddm2vzvbf/video/upload/v1780583402/Captune-20260604-170619735_nieqcs.mp4",
    poster: a(lecturePhysicsAsset.url),
  },
  {
    title: "How to Access Lectures, Notes & DPPs",
    desc: "Play lectures and download notes & DPPs inside batches.",
    videoUrl: "https://res.cloudinary.com/ddm2vzvbf/video/upload/v1780583612/Captune-20260604-174620058_1_nfu0cl.mp4",
    poster: a(lectureForestAsset.url),
  },
  {
    title: "How to Update Your Profile",
    desc: "Edit your profile picture, name, and personal details.",
    videoUrl: "https://res.cloudinary.com/ddm2vzvbf/video/upload/v1780583619/lv_0_20260604175838_ckpgmn.mp4",
    poster: a(profileAsset.url),
  },
  {
    title: "How to View Leaderboard",
    desc: "Check your rank and compete with other learners.",
    videoUrl: "https://res.cloudinary.com/ddm2vzvbf/video/upload/v1780583397/Captune-20260604-180559814_x051oy.mp4",
    poster: a(leaderboardAsset.url),
  },
];

function TutorialsPage() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

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

      <section className="mx-auto w-full max-w-5xl px-5 pb-12 pt-4 sm:px-8">
        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Tutorials</p>
        <h1 className="mt-2 text-2xl font-black tracking-normal sm:text-4xl">
          How to use VidyaX
        </h1>
        <p className="mt-3 max-w-2xl text-sm font-semibold text-muted-foreground sm:text-base">
          Short video guides — tap any segment to play.
        </p>

        <div className="mt-7 grid grid-cols-2 gap-2.5 sm:gap-4">
          {segments.map((seg, i) => (
            <button
              type="button"
              key={seg.title}
              onClick={() => setActiveIdx(i)}
              className="text-left overflow-hidden rounded-xl border bg-card shadow-card transition hover:-translate-y-1 hover:border-primary sm:rounded-2xl"
            >
              <div className="relative aspect-video w-full bg-black/90">
                <img
                  src={seg.poster}
                  alt={seg.title}
                  className="absolute inset-0 h-full w-full object-cover object-top opacity-40"
                  loading="lazy"
                />
                <div className="relative z-10 flex h-full w-full items-center justify-center">
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-primary/90 shadow-soft sm:h-14 sm:w-14">
                    <svg viewBox="0 0 24 24" className="h-4 w-4 text-primary-foreground sm:h-6 sm:w-6" aria-hidden="true">
                      <path fill="currentColor" d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-2.5 sm:p-4">
                <p className="text-[9px] font-black uppercase tracking-wider text-primary sm:text-[10px]">
                  Segment {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-1 text-[12px] font-black leading-tight sm:text-base">
                  {seg.title}
                </h3>
                <p className="mt-1 hidden text-xs font-semibold leading-5 text-muted-foreground sm:block">
                  {seg.desc}
                </p>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link to="/" className="text-xs font-black text-muted-foreground hover:text-primary">
            ← Back to home
          </Link>
        </div>
      </section>

      {activeIdx !== null && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setActiveIdx(null)}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 p-4 backdrop-blur"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl overflow-hidden rounded-2xl bg-black shadow-2xl"
          >
            <button
              type="button"
              onClick={() => setActiveIdx(null)}
              aria-label="Close"
              className="absolute right-3 top-3 z-10 grid h-9 w-9 place-items-center rounded-full bg-white/90 text-lg font-black text-black hover:bg-white"
            >
              ×
            </button>
            <video
              key={segments[activeIdx].videoUrl}
              src={segments[activeIdx].videoUrl}
              poster={segments[activeIdx].poster}
              controls
              autoPlay
              playsInline
              controlsList="nodownload"
              className="aspect-video w-full bg-black"
            />
            <div className="bg-card p-4">
              <p className="text-[10px] font-black uppercase tracking-wider text-primary">
                Segment {String(activeIdx + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-1 text-base font-black sm:text-lg">{segments[activeIdx].title}</h3>
              <p className="mt-1 text-xs font-semibold text-muted-foreground">
                {segments[activeIdx].desc}
              </p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
