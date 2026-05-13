import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import achievementsShot from "../assets/vidyax-achievements.jpg";
import appsShot from "../assets/vidyax-apps.jpg";
import batchesShot from "../assets/vidyax-batches.jpg";
import edusparkLogo from "../assets/eduspark-logo.jpg";
import libraryShot from "../assets/vidyax-library.jpg";
import missionShot from "../assets/vidyax-mission.jpg";
import notificationsShot from "../assets/vidyax-notifications.jpg";
import profileShot from "../assets/vidyax-profile.jpg";
import settingsShot from "../assets/vidyax-settings.jpg";
import splashShot from "../assets/vidyax-splash.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
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
  { src: appsShot, alt: "VidyaX apps dashboard", label: "Home" },
  { src: profileShot, alt: "VidyaX profile screen", label: "Profile" },
];

const screenshots = [
  { src: missionShot, alt: "VidyaX Mission Jeet batches", label: "Mission Jeet" },
  { src: batchesShot, alt: "VidyaX trending batches", label: "Live Batches" },
  { src: libraryShot, alt: "VidyaX book library upload", label: "Books" },
  { src: achievementsShot, alt: "VidyaX achievements and XP", label: "Achievements" },
  { src: settingsShot, alt: "VidyaX settings controls", label: "Settings" },
];

void notificationsShot;

// API constants
const API_URL = "https://vidya-x-application.vercel.app/api/app-version";
const telegramCommunityUrl = "https://t.me/+J_bKwBOe70czNjI1";
const telegramSupportUrl = "https://t.me/Edusparkcontactbot";
const supportEmail = "edusparkkoficial@gmail.com";
const defaultApkUrl = "https://www.mediafire.com/file/69bj76x1m7zv415/vidyaX.apk/file";

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
          d="M16.9 12.6c0-2 1.6-3 1.7-3.1-1-.1-2.8-.6-4.1 1-1.1 1.3-2.1 1.3-3.3 0-1.4-1.5-3.3-1-4.3.4-1.9 2.8-.5 7.5 1.4 10.1.9 1.2 2 1.1 2.8.7.9-.4 1.8-.4 2.8 0 .9.4 1.9.5 2.8-.7.7-1 1.2-2.1 1.5-3.2-2.6-1-2.9-4.2-1.3-5.2ZM14.8 2.8c-1.7.2-3.2 1.9-3 3.7 1.7.2 3.4-1.5 3-3.7Z"
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
  const [appData, setAppData] = useState<{
    latestVersion: string;
    downloadUrl: string;
    updatedAt: string;
  } | null>(null);

  useEffect(() => {
    const fetchAppVersion = async () => {
      try {
        const response = await fetch(API_URL, {
          method: "GET",
          headers: {
            accept: "*/*",
            "cache-control": "no-cache",
          },
        });
        const json = await response.json();
        if (json.success) {
          setAppData(json.data);
        }
      } catch (error) {
        console.error("Failed to fetch app version:", error);
      }
    };
    fetchAppVersion();
  }, []);

  // Content protection: disable copy, right-click, selection, common keys
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

  const currentVersion = appData?.latestVersion || "1.2.2";
  const currentDownloadUrl = appData?.downloadUrl || defaultApkUrl;
  const lastUpdatedDate = appData
    ? new Date(appData.updatedAt).toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric",
      })
    : "May 10, 2026";

  const downloadOptions = [
    {
      name: "Android",
      status: `v${currentVersion} · ${appData ? "Latest" : "Stable"} release`,
      icon: "android",
      href: currentDownloadUrl,
      active: true,
      cta: "Download Latest APK",
      updatedAt: lastUpdatedDate,
    },
    { name: "iOS", status: "Coming soon", icon: "apple", href: "", active: false },
    { name: "Windows", status: "Coming soon", icon: "windows", href: "", active: false },
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
          <button type="button" onClick={scrollToDownload} className="transition hover:text-primary">
            Download
          </button>
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
        <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {features.map((feature, index) => (
            <article
              key={feature.title}
              className="group relative overflow-hidden rounded-2xl border bg-card p-4 shadow-card transition hover:-translate-y-1 hover:border-primary sm:p-5"
            >
              <div className="absolute right-4 top-3 text-3xl font-black text-brand-soft">
                0{index + 1}
              </div>
              <div className="mb-4 grid h-10 w-10 place-items-center rounded-xl bg-brand-soft text-lg font-black text-primary transition group-hover:scale-105">
                {feature.icon}
              </div>
              <h3 className="max-w-[14rem] text-base font-black sm:text-lg">{feature.title}</h3>
              <p className="mt-2 max-w-md text-xs font-semibold leading-6 text-muted-foreground sm:text-sm">
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
          {downloadOptions.map((option) => (
            <a
              key={option.name}
              href={option.href}
              target={option.active ? "_blank" : undefined}
              rel={option.active ? "noreferrer" : undefined}
              className="flex items-center justify-between rounded-2xl border bg-card p-4 shadow-card transition hover:-translate-y-1 hover:border-primary focus:outline-none focus:ring-4 focus:ring-ring/30"
            >
              <div className="flex items-center gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand-soft text-primary">
                  <PlatformIcon type={option.icon} />
                </div>
                <div>
                  <h3 className="text-base font-black">
                    {option.name}
                    {option.active ? ` · v${currentVersion}` : ""}
                  </h3>
                  <p className="mt-0.5 text-xs font-bold text-muted-foreground">
                    {option.active
                      ? `Download Latest APK ${option.updatedAt ? `(Updated ${option.updatedAt})` : ""}`
                      : option.status}
                  </p>
                </div>
              </div>
              <span className="text-xl font-black text-primary">→</span>
            </a>
          ))}
        </div>
      </section>

      <section id="support" className="mx-auto w-full max-w-7xl px-5 pb-16 sm:px-8">
        <div className="mb-5 flex flex-col items-start justify-between gap-3 rounded-2xl border bg-card p-4 shadow-card sm:flex-row sm:items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-primary">Support</p>
            <h2 className="mt-1 text-2xl font-black tracking-normal">Community and help desk</h2>
          </div>
          <EdusparkMark />
        </div>
        <div className="-mx-5 flex gap-3 overflow-x-auto px-5 pb-3 pt-1 sm:mx-0 sm:px-0 [scrollbar-width:none]">
          <a
            href={telegramCommunityUrl}
            target="_blank"
            rel="noreferrer"
            className="group flex h-[150px] w-[58%] max-w-[210px] shrink-0 flex-col rounded-2xl border bg-card p-3.5 shadow-card transition hover:border-primary focus:outline-none focus:ring-2 focus:ring-ring/30 sm:w-[210px] sm:hover:-translate-y-1"
          >
            <div className="mb-2 grid h-8 w-8 place-items-center rounded-lg bg-brand-soft text-primary transition group-hover:scale-105">
              <TelegramIcon className="h-4 w-4" />
            </div>
            <h2 className="text-sm font-black leading-tight">Join Telegram</h2>
            <p className="mt-1 line-clamp-2 text-[11px] font-semibold leading-4 text-muted-foreground">
              Updates & student community access.
            </p>
            <p className="mt-auto text-[10px] font-bold text-primary">Open channel →</p>
          </a>
          <a
            href={`mailto:${supportEmail}`}
            className="group flex h-[150px] w-[58%] max-w-[210px] shrink-0 flex-col rounded-2xl border bg-card p-3.5 shadow-card transition hover:border-primary focus:outline-none focus:ring-2 focus:ring-ring/30 sm:w-[210px] sm:hover:-translate-y-1"
          >
            <div className="mb-2 grid h-8 w-8 place-items-center rounded-lg bg-brand-soft transition group-hover:scale-105">
              <GmailIcon />
            </div>
            <h2 className="text-sm font-black leading-tight">Email Support</h2>
            <p className="mt-1 line-clamp-2 break-all text-[10px] font-semibold leading-4 text-primary underline underline-offset-4">
              {supportEmail}
            </p>
            <p className="mt-auto text-[10px] font-bold text-muted-foreground">24×7 replies.</p>
          </a>
          <a
            href={telegramSupportUrl}
            target="_blank"
            rel="noreferrer"
            className="group flex h-[150px] w-[58%] max-w-[210px] shrink-0 flex-col rounded-2xl border bg-card p-3.5 shadow-card transition hover:border-primary focus:outline-none focus:ring-2 focus:ring-ring/30 sm:w-[210px] sm:hover:-translate-y-1"
          >
            <div className="mb-2 grid h-8 w-8 place-items-center rounded-lg bg-brand-soft text-primary transition group-hover:scale-105">
              <TelegramIcon className="h-4 w-4" />
            </div>
            <h2 className="text-sm font-black leading-tight">Telegram Support</h2>
            <p className="mt-1 line-clamp-2 text-[11px] font-semibold leading-4 text-muted-foreground">
              Bot for downloads & content help.
            </p>
            <p className="mt-auto text-[10px] font-bold text-primary">Open bot →</p>
          </a>
        </div>

        <ShareCard
          version={currentVersion}
          androidUrl={currentDownloadUrl}
          updatedAt={lastUpdatedDate}
        />

        <FaqSection version={currentVersion} updatedAt={lastUpdatedDate} />

        <footer className="pt-14 text-center">
          <div className="flex justify-center">
            <EdusparkMark />
          </div>
          <p className="mt-4 text-sm font-black text-muted-foreground">VidyaX by Eduspark</p>
        </footer>
      </section>
    </main>
  );
}

function ShareCard({
  version,
  androidUrl,
  updatedAt,
}: {
  version: string;
  androidUrl: string;
  updatedAt: string;
}) {
  const [copied, setCopied] = useState(false);
  const [sharing, setSharing] = useState(false);

  const siteUrl = "https://vidyax.site";
  const title = "VidyaX — Powered by Eduspark";
  const description =
    "VidyaX brings free institute content, book library, test series, achievements & smart learning tools — all in one polished app.";

  const shareText = [
    `📱 ${title}`,
    "",
    description,
    "",
    "🔗 Website:",
    `   ${siteUrl}`,
    "",
    "⬇️ Downloads:",
    `   • Android (v${version}): ${androidUrl}`,
    `   • iOS: Coming soon`,
    `   • Windows: Coming soon`,
    "",
    `📦 Latest version: v${version}`,
    `🗓️ Last updated: ${updatedAt}`,
    "",
    "📣 Join our Telegram for latest updates & app updates 👀",
    `   ${telegramCommunityUrl}`,
  ].join("\n");

  const handleShare = async () => {
    setSharing(true);
    try {
      const nav = navigator as Navigator & {
        canShare?: (data: ShareData) => boolean;
      };

      // Try sharing with the banner image
      try {
        const res = await fetch("/vidyax-banner.png");
        const blob = await res.blob();
        const file = new File([blob], "vidyax-banner.png", { type: blob.type });
        if (nav.canShare?.({ files: [file] })) {
          await nav.share({
            title,
            text: shareText,
            files: [file],
          });
          return;
        }
      } catch {
        // ignore, fall through
      }

      if (nav.share) {
        await nav.share({ title, text: shareText });
      } else {
        await navigator.clipboard.writeText(shareText);
        setCopied(true);
        setTimeout(() => setCopied(false), 2200);
      }
    } catch {
      // user cancelled or error — silent
    } finally {
      setSharing(false);
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      // ignore
    }
  };

  return (
    <div className="mt-8 flex flex-col items-center gap-3 text-center">
      <p className="text-sm font-bold text-muted-foreground sm:text-base">
        Spread VidyaX with your friends ✨
      </p>
      <button
        type="button"
        onClick={handleShare}
        disabled={sharing}
        className="shine-sweep inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-black text-primary-foreground shadow-soft transition hover:-translate-y-0.5 active:scale-95 disabled:opacity-70 focus:outline-none focus:ring-4 focus:ring-ring/30"
      >
        <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
          <path
            fill="currentColor"
            d="M18 16.1c-.8 0-1.5.3-2 .8l-7.1-4.1c.1-.3.1-.5.1-.8s0-.5-.1-.8L16 7.1c.6.5 1.3.9 2.1.9 1.7 0 3-1.3 3-3s-1.3-3-3-3-3 1.3-3 3c0 .3 0 .5.1.8L8 9.9c-.6-.5-1.3-.9-2.1-.9-1.7 0-3 1.3-3 3s1.3 3 3 3c.8 0 1.5-.3 2.1-.9l7.1 4.1c-.1.3-.1.5-.1.7 0 1.6 1.3 2.9 2.9 2.9s2.9-1.3 2.9-2.9-1.2-2.8-2.8-2.8Z"
          />
        </svg>
        {sharing ? "Sharing…" : copied ? "Copied ✓" : "Share VidyaX"}
      </button>
    </div>
  );
}

import faqAboutImg from "../assets/faq-about.jpg";
import faqFreeImg from "../assets/faq-free.jpg";
import faqVersionImg from "../assets/faq-version.jpg";
import faqInstallImg from "../assets/faq-install.jpg";
import faqPlayProtectImg from "../assets/faq-playprotect.jpg";
import faqPlatformsImg from "../assets/faq-platforms.jpg";
import faqUpdateImg from "../assets/faq-update.jpg";
import faqSupportImg from "../assets/faq-support.jpg";
import faqPrivacyImg from "../assets/faq-privacy.jpg";

function FaqSection({ version, updatedAt }: { version: string; updatedAt: string }) {
  const [lang, setLang] = useState<"en" | "hi">("en");

  const faqs = [
    {
      img: faqAboutImg,
      alt: "Student using VidyaX learning app",
      q_en: "What is VidyaX?",
      a_en:
        "VidyaX is a free learning platform built by Eduspark. You get free batches, a book library, test series, achievements and institute apps in one place — without any paid subscription.",
      q_hi: "VidyaX kya hai?",
      a_hi:
        "VidyaX ek free learning platform hai jise Eduspark ne banaya hai. Yaha aapko free batches, book library, test series, achievements aur institute apps ek hi jagah milte hain — bina kisi paid subscription ke.",
    },
    {
      img: faqFreeImg,
      alt: "Piggy bank with free tag",
      q_en: "Is VidyaX completely free?",
      a_en:
        "Yes, VidyaX is 100% free. You can access all learning content, batches and the library without any charge. Some features may become institute-specific in the future, but the core app will always remain free.",
      q_hi: "Kya VidyaX bilkul free hai?",
      a_hi:
        "Haan, VidyaX 100% free hai. Saari learning content, batches aur library bina kisi charge ke access kar sakte ho. Kuch features future me institute-specific ho sakte hain, lekin core app hamesha free rahega.",
    },
    {
      img: faqVersionImg,
      alt: "Phone showing version update",
      q_en: "Which is the latest version and when was it updated?",
      a_en: `The latest version is ${version} (last updated: ${updatedAt}). Join our Telegram channel to get every new release link first.`,
      q_hi: "Latest version kaunsa hai aur kab update hua?",
      a_hi: `Abhi latest version ${version} hai (last updated: ${updatedAt}). Updates ke liye Telegram channel join karo — har naye release ki link wahin sabse pehle milti hai.`,
    },
    {
      img: faqInstallImg,
      alt: "Android mascot with safety shield",
      q_en: "I get an 'Unknown Sources' warning while installing the APK. What should I do?",
      a_en:
        "This is a normal Android security warning because the app is being installed from outside the Play Store. Go to Settings → Security → 'Install unknown apps' and allow your browser, then the APK will install. The app is safe and signed by Eduspark.",
      q_hi: "APK install karte waqt 'Unknown Sources' warning aata hai, kya karu?",
      a_hi:
        "Ye Android ka normal security warning hai kyunki app Play Store ke bahar se install ho raha hai. Settings → Security → 'Install unknown apps' me apne browser ko allow kar do, phir APK install ho jayega. App safe hai, Eduspark ne sign kiya hua hai.",
    },
    {
      img: faqPlayProtectImg,
      alt: "Google Play Protect shield",
      q_en: "Play Protect shows a warning while installing — is the app unsafe?",
      a_en:
        "No, the app is safe. Google Play Protect shows this popup for any APK installed outside the Play Store, even popular ones. Just tap 'Install anyway' (or 'More details' → 'Install anyway'). VidyaX is signed by Eduspark, served over HTTPS, and contains no malware.",
      q_hi: "Play Protect install karte waqt warning deta hai — kya app safe nahi hai?",
      a_hi:
        "App bilkul safe hai. Google Play Protect ye popup har us APK pe dikhata hai jo Play Store ke bahar se install hoti hai, chahe wo popular hi kyu na ho. Bas 'Install anyway' (ya 'More details' → 'Install anyway') pe tap kar do. VidyaX Eduspark se signed hai, HTTPS pe serve hoti hai, aur isme koi malware nahi hai.",
    },
    {
      img: faqPlatformsImg,
      alt: "iOS and Windows coming soon",
      q_en: "When will iOS and Windows versions launch?",
      a_en:
        "iOS and Windows builds are in active development. As soon as they release, they will go live on the same download page. Join the Telegram channel to stay updated.",
      q_hi: "iOS aur Windows version kab aayega?",
      a_hi:
        "iOS aur Windows builds active development me hain. Release hote hi same download page pe live ho jayenge. Telegram channel join karke updates pe nazar rakho.",
    },
    {
      img: faqUpdateImg,
      alt: "Phone updating with smile",
      q_en: "How do I update the app?",
      a_en:
        "Come back to the site, download the latest APK and install — your old data and login stay exactly as they are. For auto-update notifications, stay subscribed to our Telegram channel.",
      q_hi: "App update kaise karu?",
      a_hi:
        "Site pe wapas aakar latest APK download karo aur install kar lo — purana data aur login waise ka waisa rahega. Auto-update ke liye Telegram channel se notify hote raho.",
    },
    {
      img: faqSupportImg,
      alt: "Customer support agent",
      q_en: "What if I face login or download issues?",
      a_en:
        "First try the Telegram support bot (fast replies). For detailed queries, write to our support email — you'll get a reply 24×7.",
      q_hi: "Login ya download me dikkat aaye to kya karu?",
      a_hi:
        "Sabse pehle Telegram support bot try karo (fast replies). Detailed query ke liye support email pe likho — 24×7 reply milta hai.",
    },
    {
      img: faqPrivacyImg,
      alt: "Privacy lock and shield",
      q_en: "Is my data safe?",
      a_en:
        "Yes. VidyaX only stores essential information and never sells data to third parties. The app uses secure (HTTPS) connections and follows Eduspark's privacy guidelines.",
      q_hi: "Mera data safe hai?",
      a_hi:
        "Haan. VidyaX sirf zaruri info store karta hai aur kisi third-party ko sell nahi karta. App secure connections (HTTPS) use karta hai aur Eduspark ki privacy guidelines follow karta hai.",
    },
  ];

  const t = (en: string, hi: string) => (lang === "en" ? en : hi);

  const handleShareFaq = async () => {
    const url = "https://vidyax.site";
    const title = "VidyaX — FAQ";
    const text = t(
      "Got questions about VidyaX? Here are the answers ✨",
      "VidyaX ke baare me sawaal? Yaha sab answers hain ✨",
    );
    try {
      const nav = navigator as Navigator;
      if (nav.share) {
        await nav.share({ title, text, url });
      } else {
        await navigator.clipboard.writeText(`${text}\n${url}`);
      }
    } catch {
      // ignore
    }
  };

  return (
    <section id="faq" className="mt-10 rounded-2xl border bg-card p-5 shadow-card sm:p-7">
      <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.2em] text-primary">FAQ</p>
          <h2 className="mt-1 text-2xl font-black tracking-normal">
            {t("Frequently asked questions", "Aksar puchhe jaane wale sawaal")}
          </h2>
          <p className="mt-1 text-xs font-bold text-muted-foreground">
            {t(`${faqs.length} answers · tap any question`, `${faqs.length} jawab · kisi bhi sawaal pe tap karo`)}
          </p>
        </div>
        <div
          role="tablist"
          aria-label="FAQ language"
          className="inline-flex shrink-0 self-start rounded-full border bg-background p-1 text-xs font-black"
        >
          <button
            type="button"
            role="tab"
            aria-selected={lang === "en"}
            onClick={() => setLang("en")}
            className={`rounded-full px-3 py-1.5 transition ${
              lang === "en"
                ? "bg-primary text-primary-foreground shadow-soft"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            English
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={lang === "hi"}
            onClick={() => setLang("hi")}
            className={`rounded-full px-3 py-1.5 transition ${
              lang === "hi"
                ? "bg-primary text-primary-foreground shadow-soft"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Hinglish
          </button>
        </div>
      </div>

      <Accordion type="single" collapsible className="w-full">
        {faqs.map((item, idx) => (
          <AccordionItem
            key={idx}
            value={`faq-${idx}`}
            className="border-b last:border-b-0"
          >
            <AccordionTrigger className="text-left text-sm font-black sm:text-base">
              <span className="pr-3">{t(item.q_en, item.q_hi)}</span>
            </AccordionTrigger>
            <AccordionContent className="text-sm font-medium leading-relaxed text-muted-foreground">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start">
                <div className="overflow-hidden rounded-xl border bg-muted/40 sm:w-44 sm:shrink-0">
                  <img
                    src={item.img}
                    alt={item.alt}
                    width={768}
                    height={512}
                    loading="lazy"
                    className="aspect-[3/2] w-full object-contain bg-muted/40"
                  />
                </div>
                <p className="flex-1">{t(item.a_en, item.a_hi)}</p>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <div className="mt-6 flex flex-col items-center gap-2 border-t pt-5 text-center">
        <p className="text-xs font-bold text-muted-foreground">
          {t("Found these helpful? Share with a friend.", "Helpful laga? Apne dost ke saath share karo.")}
        </p>
        <button
          type="button"
          onClick={handleShareFaq}
          className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/30 bg-brand-soft px-5 py-2 text-xs font-black text-primary transition hover:-translate-y-0.5 hover:border-primary active:scale-95 focus:outline-none focus:ring-4 focus:ring-ring/30"
        >
          <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" aria-hidden="true">
            <path
              fill="currentColor"
              d="M18 16.1c-.8 0-1.5.3-2 .8l-7.1-4.1c.1-.3.1-.5.1-.8s0-.5-.1-.8L16 7.1c.6.5 1.3.9 2.1.9 1.7 0 3-1.3 3-3s-1.3-3-3-3-3 1.3-3 3c0 .3 0 .5.1.8L8 9.9c-.6-.5-1.3-.9-2.1-.9-1.7 0-3 1.3-3 3s1.3 3 3 3c.8 0 1.5-.3 2.1-.9l7.1 4.1c-.1.3-.1.5-.1.7 0 1.6 1.3 2.9 2.9 2.9s2.9-1.3 2.9-2.9-1.2-2.8-2.8-2.8Z"
            />
          </svg>
          {t("Share FAQ", "FAQ share karo")}
        </button>
      </div>
    </section>
  );
}
