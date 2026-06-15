import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import edusparkLogo from "../assets/eduspark-logo.jpg";
import AdhyayXFloating from "../components/AdhyayXFloating";

import splashAsset from "../assets/vidyax-splash.jpg.asset.json";
import homeAsset from "../assets/vidyax-home.jpg.asset.json";
import profileAsset from "../assets/vidyax-profile.jpg.asset.json";
import settingsAsset from "../assets/vidyax-settings.jpg.asset.json";
import lectureForestAsset from "../assets/vidyax-lecture-forest.jpg.asset.json";
import lecturePhysicsAsset from "../assets/vidyax-lecture-physics.jpg.asset.json";
import pwAsset from "../assets/vidyax-pw.jpg.asset.json";
import leaderboardAsset from "../assets/vidyax-leaderboard.jpg.asset.json";
import appsAsset from "../assets/vidyax-apps.jpg.asset.json";
import quickactionsAsset from "../assets/vidyax-quickactions.jpg.asset.json";
import batchesAsset from "../assets/vidyax-batches.jpg.asset.json";

// Asset CDN base
const ASSET_BASE = "https://vidyax.lovable.app";
const a = (u: string) => (u.startsWith("http") ? u : `${ASSET_BASE}${u}`);

const splashShot = a(splashAsset.url);
const homeShot = a(homeAsset.url);
const profileShot = a(profileAsset.url);
const settingsShot = a(settingsAsset.url);
const lectureForestShot = a(lectureForestAsset.url);
const lecturePhysicsShot = a(lecturePhysicsAsset.url);
const pwShot = a(pwAsset.url);
const leaderboardShot = a(leaderboardAsset.url);
const appsShot = a(appsAsset.url);
const quickactionsShot = a(quickactionsAsset.url);
const batchesShot = a(batchesAsset.url);

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { name: "google-site-verification", content: "DEJFR5l2Bgd1ltRMs0yaGFgZOlqzBfjn3u40t2TyEvk" },
      { title: "VidyaX — Free Learning App" },
      {
        name: "description",
        content:
          "VidyaX brings free learning content, book library, test series, achievements, notifications, and institute apps in one modern platform powered by Eduspark.",
      },
      { property: "og:title", content: "VidyaX — Future of Learning" },
      {
        property: "og:description",
        content:
          "Download VidyaX for Android and explore free content from reputed learning platforms.",
      },
    ],
  }),
  component: Index,
});

const features = [
  {
    title: "Premium Institute Access",
    text: "Explore learning hubs inspired by top platforms like Physics Wallah, Next Topper, and Mission Jeet in one place.",
    icon: "▦",
  },
  {
    title: "Smart Book Library",
    text: "Keep notes, study material, and useful books organized inside a clean learning library.",
    icon: "▤",
  },
  {
    title: "Test Series",
    text: "Practice with focused tests, clear progress tracking, and an exam-ready preparation flow.",
    icon: "✓",
  },
  {
    title: "Gamified Progress",
    text: "XP, streaks, badges, and achievements make learning more consistent and motivating.",
    icon: "✦",
  },
];

const heroScreens = [
  { src: splashShot, alt: "VidyaX splash screen", label: "Splash" },
  { src: homeShot, alt: "VidyaX home dashboard", label: "Home" },
  { src: profileShot, alt: "VidyaX profile screen", label: "Profile" },
];

const screenshots = [
  { src: pwShot, alt: "Physics Wallah batches inside VidyaX", label: "Physics Wallah" },
  { src: batchesShot, alt: "VidyaX batches & Next Toppers", label: "Batches" },
  { src: lecturePhysicsShot, alt: "VidyaX physics lecture", label: "Live Class" },
  { src: lectureForestShot, alt: "VidyaX lecture player", label: "Lecture Player" },
  { src: quickactionsShot, alt: "VidyaX quick actions", label: "Quick Actions" },
  { src: appsShot, alt: "VidyaX apps grid", label: "Apps" },
  { src: leaderboardShot, alt: "VidyaX leaderboard", label: "Leaderboard" },
  { src: settingsShot, alt: "VidyaX settings", label: "Settings" },
];

const telegramCommunityUrl = "https://t.me/+J_bKwBOe70czNjI1";
const telegramSupportUrl = "https://t.me/Edusparkcontactbot";
const notifyIosUrl =
  "https://t.me/Edusparkcontactbot?text=" +
  encodeURIComponent(
    "Hi Eduspark Team,\n\nPlease notify me as soon as the VidyaX iOS version is released. I want to be among the first users to install it on my iPhone/iPad.\n\nThank you!",
  );
const notifyWindowsUrl =
  "https://t.me/Edusparkcontactbot?text=" +
  encodeURIComponent(
    "Hi Eduspark Team,\n\nPlease notify me as soon as the VidyaX Windows version is released. I want to be among the first users to install it on my PC/Laptop.\n\nThank you!",
  );
const supportEmail = "edusparkkoficial@gmail.com";
const defaultApkUrl = "https://github.com/Bhavishy-dev/Vidya-X-versions/releases/download/1.2.6/VidyaX_1.2.6_64Bit.apk";

function scrollToDownload() {
  document.getElementById("download")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function BrandLogo() {
  return <span className="text-2xl font-black tracking-normal text-brand-gradient">VidyaX</span>;
}

function EdusparkMark({
  compact = false,
  highlight = false,
}: {
  compact?: boolean;
  highlight?: boolean;
}) {
  return (
    <div
      className={`inline-flex items-center gap-2 rounded-full border bg-card/90 px-2.5 py-1.5 shadow-card backdrop-blur ${highlight ? "shine-sweep" : ""}`}
    >
      <img
        src={edusparkLogo}
        alt="Eduspark logo"
        className="h-7 w-7 rounded-full object-cover ring-2 ring-primary/10"
        loading="lazy"
      />
      {!compact && (
        <span className="text-[10px] font-black uppercase tracking-[0.12em] text-muted-foreground">
          Powered by Eduspark
        </span>
      )}
    </div>
  );
}

function TelegramIcon({ className = "h-7 w-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M21.8 4.2 18.6 19c-.2 1.1-.9 1.4-1.8.9l-5-3.7-2.4 2.3c-.3.3-.5.5-1 .5l.4-5.1 9.3-8.4c.4-.4-.1-.6-.6-.2L6 12.6l-5-1.5c-1.1-.3-1.1-1.1.2-1.6L20.5 2c.9-.3 1.7.2 1.3 2.2Z"
      />
    </svg>
  );
}

function GmailIcon({ className = "h-7 w-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path fill="#EA4335" d="M3 6.5 12 13l9-6.5V18a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6.5Z" />
      <path fill="#FBBC04" d="M3 6.5 12 13v3L3 9.5v-3Z" />
      <path fill="#34A853" d="M21 6.5 12 13v3l9-6.5v-3Z" />
      <path
        fill="#C5221F"
        d="M3 6.5V6a2 2 0 0 1 3.2-1.6L12 8.6 17.8 4.4A2 2 0 0 1 21 6v.5L12 13 3 6.5Z"
      />
      <path fill="#4285F4" d="M21 9.5V18a2 2 0 0 1-2 2h-2V12.4l4-2.9Z" />
    </svg>
  );
}

function PlatformIcon({ type }: { type: string }) {
  if (type === "android") {
    return (
      <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true">
        <path
          fill="currentColor"
          d="M7.2 9.4h9.6v7.1c0 .9-.7 1.6-1.6 1.6h-.7v2.1c0 .6-.5 1.1-1.1 1.1s-1.1-.5-1.1-1.1v-2.1h-.6v2.1c0 .6-.5 1.1-1.1 1.1s-1.1-.5-1.1-1.1v-2.1h-.7c-.9 0-1.6-.7-1.6-1.6V9.4Zm-2.5.2c.6 0 1.1.5 1.1 1.1v4.5c0 .6-.5 1.1-1.1 1.1s-1.1-.5-1.1-1.1v-4.5c0-.6.5-1.1 1.1-1.1Zm14.6 0c.6 0 1.1.5 1.1 1.1v4.5c0 .6-.5 1.1-1.1 1.1s-1.1-.5-1.1-1.1v-4.5c0-.6.5-1.1 1.1-1.1ZM8.1 7.8a4.8 4.8 0 0 1 7.8 0H8.1Zm.6-4.1.8-.8 1.1 1.1a5.7 5.7 0 0 1 2.8 0l1.1-1.1.8.8-1 1A5.7 5.7 0 0 1 16.6 7H7.4a5.7 5.7 0 0 1 2.3-2.3l-1-1Z"
        />
      </svg>
    );
  }
  if (type === "apple") {
    return (
      <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true">
        <path
          fill="currentColor"
          d="M17.05 12.04c-.03-2.6 2.13-3.86 2.22-3.92-1.21-1.77-3.1-2.02-3.77-2.04-1.6-.16-3.13.94-3.95.94-.82 0-2.07-.92-3.41-.9-1.76.03-3.38 1.02-4.28 2.6-1.83 3.17-.47 7.86 1.31 10.43.87 1.26 1.91 2.67 3.27 2.62 1.32-.05 1.82-.85 3.42-.85 1.6 0 2.05.85 3.45.82 1.42-.03 2.32-1.29 3.19-2.55 1.01-1.46 1.42-2.88 1.44-2.95-.03-.01-2.76-1.06-2.79-4.2zM14.6 4.43c.72-.87 1.21-2.08 1.07-3.29-1.04.04-2.3.69-3.05 1.56-.67.77-1.25 2-1.09 3.18 1.16.09 2.34-.59 3.07-1.45z"
        />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true">
      <path
        fill="currentColor"
        d="M3 4.4 10.7 3v8.4H3V4.4Zm8.7-1.6L21 1.2v10.2h-9.3V2.8ZM3 12.6h7.7V21L3 19.7v-7.1Zm8.7 0H21v10.2l-9.3-1.6v-8.6Z"
      />
    </svg>
  );
}

function Index() {
  const [activeHeroShot, setActiveHeroShot] = useState(0);

  // Use hardcoded values directly to prevent API overriding
  const currentVersion = "1.2.6";
  const currentDownloadUrl = defaultApkUrl;
  const lastUpdatedDate = "14 June 2026";

  useEffect(() => {
    const stop = (e: Event) => e.preventDefault();
    const blockKeys = (e: KeyboardEvent) => {
      const k = e.key.toLowerCase();
      if ((e.ctrlKey || e.metaKey) && ["c", "x", "u", "s", "a", "p"].includes(k)) {
        e.preventDefault();
      }
      if (e.key === "F12") e.preventDefault();
    };
    document.addEventListener("contextmenu", stop);
    document.addEventListener("copy", stop);
    document.addEventListener("cut", stop);
    document.addEventListener("dragstart", stop);
    document.addEventListener("selectstart", stop);
    document.addEventListener("keydown", blockKeys);
    return () => {
      document.removeEventListener("contextmenu", stop);
      document.removeEventListener("copy", stop);
      document.removeEventListener("cut", stop);
      document.removeEventListener("dragstart", stop);
      document.removeEventListener("selectstart", stop);
      document.removeEventListener("keydown", blockKeys);
    };
  }, []);

  const downloadOptions = [
    {
      name: "Android",
      status: `v${currentVersion} · Latest release`,
      icon: "android",
      href: currentDownloadUrl,
      active: true,
      cta: "Download Latest APK",
      updatedAt: lastUpdatedDate,
    },
    {
      name: "iOS",
      status: "Coming soon",
      icon: "apple",
      href: notifyIosUrl,
      active: false,
      cta: "Notify me",
    },
    {
      name: "Windows",
      status: "Coming soon",
      icon: "windows",
      href: notifyWindowsUrl,
      active: false,
      cta: "Notify me",
    },
  ];

  return (
    <main
      className="min-h-screen overflow-hidden bg-background text-foreground select-none"
      style={{ WebkitUserSelect: "none", userSelect: "none", WebkitTouchCallout: "none" }}
    >
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <BrandLogo />
        <div className="hidden items-center gap-7 text-sm font-extrabold text-muted-foreground sm:flex">
          <button type="button" onClick={() => scrollToId("features")} className="transition hover:text-primary">
            Features
          </button>
          <button type="button" onClick={() => scrollToId("screens")} className="transition hover:text-primary">
            Screenshots
          </button>
          <Link to="/download" className="transition hover:text-primary">
            Download
          </Link>
          <Link to="/tutorials" className="transition hover:text-primary">
            Tutorials
          </Link>
          <Link to="/feedback" className="transition hover:text-primary">
            Give Feedback
          </Link>
          <Link to="/faq" className="transition hover:text-primary">
            FAQ
          </Link>
        </div>
        <button
          type="button"
          onClick={scrollToDownload}
          className="rounded-full bg-primary px-5 py-3 text-sm font-extrabold text-primary-foreground shadow-soft transition hover:-translate-y-0.5 hover:shadow-card focus:outline-none focus:ring-4 focus:ring-ring/30"
        >
          Get APK
        </button>
      </nav>

      <section className="mx-auto grid w-full max-w-7xl items-center gap-8 px-5 pb-10 pt-4 sm:px-8 lg:grid-cols-[1fr_0.95fr] lg:pb-14">
        <div>
          <EdusparkMark highlight />
          <h1 className="mt-5 max-w-3xl text-3xl font-black leading-[1.08] tracking-normal text-foreground sm:text-4xl lg:text-5xl">
            VidyaX — premium learning access, made simple.
          </h1>
          <p className="mt-4 max-w-2xl text-sm font-semibold leading-7 text-muted-foreground sm:text-base">
            Discover institute content, book library, test series, notifications, streaks, and
            achievements inside one polished app experience powered by Eduspark.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={scrollToDownload}
              className="shine-sweep rounded-full bg-primary px-6 py-3 text-center text-sm font-black text-primary-foreground shadow-soft transition hover:-translate-y-1 active:scale-95 focus:outline-none focus:ring-4 focus:ring-ring/30"
            >
              Download Latest APK
            </button>
            <a
              href={telegramCommunityUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border bg-card px-6 py-3 text-center text-sm font-black text-foreground shadow-card transition hover:-translate-y-1 active:scale-95 hover:border-primary focus:outline-none focus:ring-4 focus:ring-ring/30"
            >
              Join Telegram
            </a>
          </div>
          <div className="mt-7 grid max-w-xl grid-cols-3 gap-2.5">
            {[
              ["11k+", "Students"],
              ["10+", "Achievements"],
              ["24/7", "Access"],
            ].map(([value, label]) => (
              <div key={label} className="rounded-2xl border bg-card p-3 text-center shadow-card">
                <div className="text-lg font-black text-primary">{value}</div>
                <div className="mt-1 text-[11px] font-extrabold text-muted-foreground">{label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto h-[500px] w-full max-w-[520px] sm:h-[600px]">
          <div className="absolute inset-x-16 top-20 h-[360px] rounded-[4rem] bg-hero-gradient opacity-25 blur-3xl" />
          {heroScreens.map((shot, index) => {
            const isActive = index === activeHeroShot;
            const position =
              index === activeHeroShot
                ? "left-1/2 top-2 w-[230px] -translate-x-1/2 rotate-0 sm:w-[280px]"
                : (index + 1) % heroScreens.length === activeHeroShot
                  ? "bottom-20 left-0 w-[160px] -rotate-[9deg] sm:w-[200px]"
                  : "bottom-8 right-1 w-[164px] rotate-[10deg] sm:w-[205px]";

            return (
              <button
                key={shot.label}
                type="button"
                onClick={() => setActiveHeroShot(index)}
                className={`absolute ${position} ${isActive ? "z-30 phone-perspective float-slow border-[9px] p-2 shadow-soft" : "z-20 border-[7px] p-1 shadow-card hover:z-40"} overflow-hidden rounded-[2rem] border-card bg-card transition-all duration-500 active:scale-95 focus:outline-none focus:ring-4 focus:ring-ring/30 sm:rounded-[2.5rem]`}
                aria-label={`Bring ${shot.label} screenshot to front`}
              >
                <img
                  src={shot.src}
                  alt={shot.alt}
                  draggable={false}
                  className="pointer-events-none aspect-[9/18.2] w-full rounded-[1.45rem] object-cover object-top sm:rounded-[1.85rem]"
                  loading={isActive ? "eager" : "lazy"}
                />
              </button>
            );
          })}
        </div>
      </section>

      <section id="features" className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-primary">Features</p>
          <h2 className="mt-2 text-2xl font-black tracking-normal sm:text-3xl">
            Everything students need, designed for daily learning.
          </h2>
        </div>
        <div className="mt-7 grid grid-cols-2 gap-2.5 sm:gap-3">
          {features.map((feature, index) => (
            <article
              key={feature.title}
              className="group relative overflow-hidden rounded-xl border bg-card p-2.5 shadow-card transition hover:-translate-y-1 hover:border-primary sm:p-4"
            >
              <div className="absolute right-2 top-1.5 text-xl font-black text-brand-soft sm:text-2xl">
                0{index + 1}
              </div>
              <div className="mb-2 grid h-7 w-7 place-items-center rounded-lg bg-brand-soft text-sm font-black text-primary transition group-hover:scale-105 sm:h-9 sm:w-9 sm:text-base">
                {feature.icon}
              </div>
              <h3 className="text-[12px] font-black leading-tight sm:text-sm">{feature.title}</h3>
              <p className="mt-1 text-[10px] font-semibold leading-4 text-muted-foreground sm:text-xs sm:leading-5">
                {feature.text}
              </p>
            </article>
          ))}
        </div>
      </section>


      <section id="screens" className="bg-secondary/60 py-10">
        <div className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-8">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-primary">
                App Preview
              </p>
              <h2 className="mt-2 text-2xl font-black tracking-normal sm:text-3xl">
                Real screens inside a premium device gallery.
              </h2>
            </div>
            <p className="max-w-md text-xs font-semibold leading-6 text-muted-foreground sm:text-sm">
              The app interface is presented with layered mobile frames for a polished product look.
            </p>
          </div>
          <div className="mt-8 flex gap-4 overflow-x-auto pb-6 [scrollbar-width:none]">
            {screenshots.map((shot, index) => (
              <figure
                key={shot.label}
                className={`relative min-w-[210px] rounded-[2rem] border-[8px] border-card bg-card p-1.5 shadow-soft transition hover:-translate-y-2 sm:min-w-[245px] ${index % 2 === 0 ? "-rotate-1" : "rotate-1"}`}
              >
                <img
                  src={shot.src}
                  alt={shot.alt}
                  draggable={false}
                  className="pointer-events-none aspect-[9/18.2] w-full rounded-[1.5rem] object-cover object-top"
                  loading="lazy"
                />
                <figcaption className="px-3 py-3 text-center text-xs font-black text-primary">
                  {shot.label}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <TutorialsCTA />


      <section
        id="download"
        className="mx-auto grid w-full max-w-7xl gap-5 px-5 py-11 sm:px-8 lg:grid-cols-[0.85fr_1.15fr]"
      >
        <div className="rounded-3xl bg-hero-gradient p-5 text-primary-foreground shadow-soft sm:p-7">
          <p className="text-xs font-black uppercase tracking-[0.2em] opacity-80">Download</p>
          <h2 className="mt-3 text-2xl font-black tracking-normal sm:text-3xl">
            Install VidyaX and start learning with confidence.
          </h2>
          <p className="mt-4 text-sm font-semibold leading-7 opacity-80">
            Get the latest Android APK directly. iOS and Windows versions are coming soon.
          </p>
          <div className="mt-5">
            <EdusparkMark compact />
          </div>
        </div>
        <div className="grid gap-3">
          {downloadOptions.map((option) => {
            const isAndroid = option.name ===
