import { createFileRoute, Link } from "@tanstack/react-router";
import splashAsset from "../assets/vidyax-splash.jpg.asset.json";
import pwAsset from "../assets/vidyax-pw.jpg.asset.json";
import lecturePhysicsAsset from "../assets/vidyax-lecture-physics.jpg.asset.json";
import lectureForestAsset from "../assets/vidyax-lecture-forest.jpg.asset.json";

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
          "Step-by-step video tutorials for VidyaX — login, connect PW account, enroll in batches, and use the lecture player.",
      },
      { property: "og:title", content: "How to use VidyaX — Tutorials" },
      { property: "og:description", content: "Short, segment-wise video guides for VidyaX." },
    ],
    links: [{ rel: "canonical", href: "https://vidyax.site/tutorials" }],
  }),
  component: TutorialsPage,
});

const segments: { title: string; desc: string; videoUrl: string; poster: string }[] = [
  {
    title: "How to Login",
    desc: "Step-by-step login process for new VidyaX users.",
    videoUrl: "",
    poster: a(splashAsset.url),
  },
  {
    title: "How to Connect PW Account",
    desc: "Link your Physics Wallah account inside VidyaX in seconds.",
    videoUrl: "",
    poster: a(pwAsset.url),
  },
  {
    title: "How to Enroll in Batches",
    desc: "Browse batches and enroll in your preferred course.",
    videoUrl: "",
    poster: a(lecturePhysicsAsset.url),
  },
  {
    title: "How to Use the Lecture Player",
    desc: "Notes, autoplay, downloads, bookmarks — everything explained.",
    videoUrl: "",
    poster: a(lectureForestAsset.url),
  },
];

function TutorialsPage() {
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
          Short video guides — pick a segment and learn exactly what you need.
        </p>

        <div className="mt-7 grid grid-cols-2 gap-2.5 sm:gap-4">
          {segments.map((seg, i) => (
            <article
              key={seg.title}
              className="overflow-hidden rounded-xl border bg-card shadow-card transition hover:-translate-y-1 hover:border-primary sm:rounded-2xl"
            >
              <div className="relative aspect-video w-full bg-black/90">
                {seg.videoUrl ? (
                  <video
                    controls
                    controlsList="nodownload"
                    preload="metadata"
                    poster={seg.poster}
                    className="h-full w-full object-cover"
                  >
                    <source src={seg.videoUrl} type="video/mp4" />
                  </video>
                ) : (
                  <div className="relative h-full w-full">
                    <img
                      src={seg.poster}
                      alt={seg.title}
                      className="absolute inset-0 h-full w-full object-cover object-top opacity-30"
                      loading="lazy"
                    />
                    <div className="relative z-10 flex h-full w-full flex-col items-center justify-center gap-1.5 text-center">
                      <div className="grid h-9 w-9 place-items-center rounded-full bg-primary/90 shadow-soft sm:h-12 sm:w-12">
                        <svg viewBox="0 0 24 24" className="h-4 w-4 text-primary-foreground sm:h-5 sm:w-5" aria-hidden="true">
                          <path fill="currentColor" d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                      <span className="rounded-full bg-black/60 px-2 py-0.5 text-[8px] font-black uppercase tracking-wider text-white sm:text-[10px]">
                        Coming soon
                      </span>
                    </div>
                  </div>
                )}
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
            </article>
          ))}
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
