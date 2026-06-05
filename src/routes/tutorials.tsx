import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { X } from "lucide-react";

import thumbInstall from "../assets/thumb-install.png.asset.json";
import thumbLogin from "../assets/thumb-login.png.asset.json";
import thumbBatches from "../assets/thumb-batches.png.asset.json";
import thumbPw from "../assets/thumb-pw.png.asset.json";
import thumbSearch from "../assets/thumb-search.png.asset.json";
import thumbLectures from "../assets/thumb-lectures.png.asset.json";
import thumbProfile from "../assets/thumb-profile.png.asset.json";
import thumbLeaderboard from "../assets/thumb-leaderboard.png.asset.json";

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
    poster: a(thumbInstall.url),
  },
  {
    title: "How to Login on VidyaX",
    desc: "Step-by-step login process for new VidyaX users.",
    videoUrl: "https://res.cloudinary.com/ddm2vzvbf/video/upload/v1780583300/Captune-20260604-180844976_yvyyq3.mp4",
    poster: a(thumbLogin.url),
  },
  {
    title: "How to Access Batches",
    desc: "Open the batches section and explore your courses.",
    videoUrl: "https://res.cloudinary.com/ddm2vzvbf/video/upload/v1780584518/Captune-20260604-181030634_fijowp.mp4",
    poster: a(thumbBatches.url),
  },
  {
    title: "How to Connect PW Account",
    desc: "Link your Physics Wallah account inside VidyaX.",
    videoUrl: "https://res.cloudinary.com/ddm2vzvbf/video/upload/v1780585794/lv_0_20260604203244_lpxemg.mp4",
    poster: a(thumbPw.url),
  },
  {
    title: "How to Search & Enroll in Batches",
    desc: "Find the right batch and enroll in a single tap.",
    videoUrl: "https://res.cloudinary.com/ddm2vzvbf/video/upload/v1780583402/Captune-20260604-170619735_nieqcs.mp4",
    poster: a(thumbSearch.url),
  },
  {
    title: "How to Access Lectures, Notes & DPPs",
    desc: "Play lectures and download notes & DPPs inside batches.",
    videoUrl: "https://res.cloudinary.com/ddm2vzvbf/video/upload/v1780583612/Captune-20260604-174620058_1_nfu0cl.mp4",
    poster: a(thumbLectures.url),
  },
  {
    title: "How to Update Your Profile",
    desc: "Edit your profile picture, name, and personal details.",
    videoUrl: "https://res.cloudinary.com/ddm2vzvbf/video/upload/v1780583619/lv_0_20260604175838_ckpgmn.mp4",
    poster: a(thumbProfile.url),
  },
  {
    title: "How to View Leaderboard",
    desc: "Check your rank and compete with other learners.",
    videoUrl: "https://res.cloudinary.com/ddm2vzvbf/video/upload/v1780583397/Captune-20260604-180559814_x051oy.mp4",
    poster: a(thumbLeaderboard.url),
  },
];

function TutorialsPage() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  // Lock body scroll while modal is open (prevents layout shift / odd bottom artifacts)
  useEffect(() => {
    if (activeIdx === null) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [activeIdx]);

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
              {/* 16:9 thumbnail — matches the uploaded YouTube-style covers, no cropping */}
              <div className="relative aspect-video w-full overflow-hidden bg-black">
                <img
                  src={seg.poster}
                  alt={seg.title}
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary/95 shadow-soft sm:h-14 sm:w-14">
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
          className="fixed inset-0 z-[9999] flex items-start justify-center overflow-y-auto bg-black/85 p-3 backdrop-blur sm:items-center sm:p-6"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative my-auto w-full max-w-3xl overflow-hidden rounded-2xl bg-card shadow-2xl"
          >
            <button
              type="button"
              onClick={() => setActiveIdx(null)}
              aria-label="Close"
              className="absolute right-3 top-3 z-10 grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white/95 text-xl font-black leading-none text-black shadow-md hover:bg-white"
              style={{ aspectRatio: "1 / 1" }}
            >
              <span className="block leading-none">×</span>
            </button>
            <div className="bg-black">
              <video
                key={segments[activeIdx].videoUrl}
                src={segments[activeIdx].videoUrl}
                poster={segments[activeIdx].poster}
                controls
                autoPlay
                playsInline
                controlsList="nodownload"
                className="block aspect-video max-h-[65vh] w-full bg-black"
              />
            </div>
            <div className="p-4 sm:p-5">
              <p className="text-[10px] font-black uppercase tracking-wider text-primary">
                Segment {String(activeIdx + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-1 text-base font-black sm:text-lg">{segments[activeIdx].title}</h3>
              <p className="mt-1 text-xs font-semibold text-muted-foreground">
                {segments[activeIdx].desc}
              </p>

              {/* Credits */}
              <div className="mt-4 rounded-xl border border-primary/15 bg-primary/5 p-3 sm:p-4">
                <p className="text-[10px] font-black uppercase tracking-[0.18em] text-primary">
                  Credits
                </p>
                <ul className="mt-2 space-y-1.5 text-[12px] font-semibold text-foreground sm:text-sm">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span>
                      <span className="font-black">Tutorials</span> added by our Management Team
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span>
                      <span className="font-black">Voice Over</span> by Sanjana Rai
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span>
                      <span className="font-black">Subtitled</span> by Raqib Ansari
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
