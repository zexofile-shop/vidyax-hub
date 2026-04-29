import { createFileRoute } from "@tanstack/react-router";
import type { MouseEvent } from "react";
import { useState } from "react";

import achievementsShot from "../assets/vidyax-achievements.jpg";
import appsShot from "../assets/vidyax-apps.jpg";
import edusparkLogo from "../assets/eduspark-logo.jpg";
import notificationsShot from "../assets/vidyax-notifications.jpg";
import profileShot from "../assets/vidyax-profile.jpg";
import settingsShot from "../assets/vidyax-settings.jpg";

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

const screenshots = [
  { src: appsShot, alt: "VidyaX apps dashboard with available learning apps", label: "Apps Hub" },
  { src: profileShot, alt: "VidyaX profile with streak and quick stats", label: "Profile" },
  { src: achievementsShot, alt: "VidyaX achievements and XP screen", label: "Achievements" },
  { src: settingsShot, alt: "VidyaX settings controls", label: "Settings" },
  { src: notificationsShot, alt: "VidyaX notifications inbox", label: "Notifications" },
];

const heroScreens = screenshots.slice(0, 3);

const downloadOptions = [
  { name: "Android", status: "Download APK", icon: "android", href: "https://www.mediafire.com/" },
  { name: "iOS", status: "Coming soon", icon: "apple", href: "#download" },
  { name: "Windows", status: "Coming soon", icon: "windows", href: "#download" },
];

const telegramLink = "https://t.me/";
const supportEmail = "edusparkkoficial@gmail.com";
const telegramPromptStorageKey = "vidyax-telegram-prompt-count";

function BrandLogo() {
  return <span className="text-2xl font-black tracking-normal text-brand-gradient">VidyaX</span>;
}

function EdusparkMark({ compact = false, highlight = false }: { compact?: boolean; highlight?: boolean }) {
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
      <path fill="#C5221F" d="M3 6.5V6a2 2 0 0 1 3.2-1.6L12 8.6 17.8 4.4A2 2 0 0 1 21 6v.5L12 13 3 6.5Z" />
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
  const [telegramPromptOpen, setTelegramPromptOpen] = useState(false);
  const [activeHeroShot, setActiveHeroShot] = useState(0);
  const [telegramPromptCount, setTelegramPromptCount] = useState(() => {
    if (typeof window === "undefined") {
      return 0;
    }
    return Number(window.localStorage.getItem(telegramPromptStorageKey) ?? 0);
  });
  const [pendingDownloadHref, setPendingDownloadHref] = useState<string | null>(null);

  const handleDownloadClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (telegramPromptCount >= 2) {
      return;
    }
    event.preventDefault();
    setPendingDownloadHref(event.currentTarget.href);
    setTelegramPromptCount((count) => {
      const nextCount = count + 1;
      window.localStorage.setItem(telegramPromptStorageKey, String(nextCount));
      return nextCount;
    });
    setTelegramPromptOpen(true);
  };

  const continueDownload = () => {
    setTelegramPromptOpen(false);
    setPendingDownloadHref(null);
    window.requestAnimationFrame(() => {
      document.getElementById("download")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <BrandLogo />
        <div className="hidden items-center gap-7 text-sm font-extrabold text-muted-foreground sm:flex">
          <a href="#features" className="transition hover:text-primary">
            Features
          </a>
          <a href="#screens" className="transition hover:text-primary">
            Screenshots
          </a>
          <a href="#download" className="transition hover:text-primary">
            Download
          </a>
        </div>
        <a
          href="#download"
          className="rounded-full bg-primary px-5 py-3 text-sm font-extrabold text-primary-foreground shadow-soft transition hover:-translate-y-0.5 hover:shadow-card focus:outline-none focus:ring-4 focus:ring-ring/30"
        >
          Get APK
        </a>
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
            <a
              href="https://www.mediafire.com/"
              target="_blank"
              rel="noreferrer"
              onClick={handleDownloadClick}
              className="shine-sweep rounded-full bg-primary px-6 py-3 text-center text-sm font-black text-primary-foreground shadow-soft transition hover:-translate-y-1 active:scale-95 focus:outline-none focus:ring-4 focus:ring-ring/30"
            >
              Download Android APK
            </a>
            <a
              href="#support"
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
          <div className="absolute inset-x-10 top-14 h-[430px] rounded-[4rem] bg-hero-gradient opacity-80 blur-3xl" />
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
                  className="aspect-[9/18.2] w-full rounded-[1.45rem] object-cover object-top sm:rounded-[1.85rem]"
                  loading={isActive ? "eager" : "lazy"}
                />
                <div className="pointer-events-none absolute inset-x-3 top-1 h-4 rounded-t-[1.4rem] bg-card/95" />
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
                  className="aspect-[9/18.2] w-full rounded-[1.5rem] object-cover object-top"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-x-3 top-1 h-4 rounded-t-[1.35rem] bg-card/95" />
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
            Android APK will open through the attached MediaFire link. iOS and Windows options are
            prepared as professional availability cards.
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
              target={option.name === "Android" ? "_blank" : undefined}
              rel={option.name === "Android" ? "noreferrer" : undefined}
              onClick={handleDownloadClick}
              className="flex items-center justify-between rounded-2xl border bg-card p-4 shadow-card transition hover:-translate-y-1 active:scale-[0.97] hover:border-primary focus:outline-none focus:ring-4 focus:ring-ring/30"
            >
              <div className="flex items-center gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand-soft text-primary">
                  <PlatformIcon type={option.icon} />
                </div>
                <div>
                  <h3 className="text-base font-black">{option.name}</h3>
                  <p className="mt-0.5 text-xs font-bold text-muted-foreground">{option.status}</p>
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
        <div className="flex gap-4 overflow-x-auto pb-5 [scrollbar-width:none]">
          <a
            href={telegramLink}
            target="_blank"
            rel="noreferrer"
            className="group min-w-[250px] rounded-2xl border bg-card p-5 shadow-card transition hover:-translate-y-1 hover:border-primary focus:outline-none focus:ring-4 focus:ring-ring/30 sm:min-w-[290px]"
          >
            <div className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-brand-soft text-primary transition group-hover:scale-105">
              <TelegramIcon />
            </div>
            <h2 className="text-lg font-black">Join Telegram</h2>
            <p className="mt-2 text-sm font-semibold leading-6 text-muted-foreground">
              Get updates, announcements, and student community access in one place.
            </p>
          </a>
          <a
            href={`mailto:${supportEmail}`}
            className="group min-w-[250px] rounded-2xl border bg-card p-5 shadow-card transition hover:-translate-y-1 hover:border-primary focus:outline-none focus:ring-4 focus:ring-ring/30 sm:min-w-[290px]"
          >
            <div className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-brand-soft transition group-hover:scale-105">
              <GmailIcon />
            </div>
            <h2 className="text-lg font-black">Email Support</h2>
            <p className="mt-2 break-words text-sm font-semibold leading-6 text-muted-foreground">
              {supportEmail}
            </p>
          </a>
          <a
            href={telegramLink}
            target="_blank"
            rel="noreferrer"
            className="group min-w-[250px] rounded-2xl border bg-card p-5 shadow-card transition hover:-translate-y-1 hover:border-primary focus:outline-none focus:ring-4 focus:ring-ring/30 sm:min-w-[290px]"
          >
            <div className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-brand-soft text-primary transition group-hover:scale-105">
              <TelegramIcon />
            </div>
            <h2 className="text-lg font-black">Telegram Support</h2>
            <p className="mt-2 text-sm font-semibold leading-6 text-muted-foreground">
              Connect directly on Telegram for download, app access, and content help.
            </p>
          </a>
        </div>
        <footer className="pt-14 text-center">
          <div className="flex justify-center">
            <EdusparkMark />
          </div>
          <p className="mt-4 text-sm font-black text-muted-foreground">VidyaX by Eduspark</p>
        </footer>
      </section>

      {telegramPromptOpen && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-foreground/35 px-5 py-8 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-[2rem] border bg-card p-6 text-center shadow-soft">
            <div className="mx-auto mb-4 grid h-16 w-16 place-items-center rounded-full bg-brand-soft text-primary">
              <TelegramIcon className="h-8 w-8" />
            </div>
            <h2 className="text-2xl font-black">Join Telegram</h2>
            <p className="mt-3 text-sm font-semibold leading-7 text-muted-foreground">
              Join the VidyaX Telegram community for updates before continuing to downloads.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <a
                href={telegramLink}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-primary px-5 py-3 text-sm font-black text-primary-foreground shadow-soft transition hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-ring/30"
              >
                Join Telegram
              </a>
              <button
                type="button"
                onClick={continueDownload}
                className="rounded-full border bg-card px-5 py-3 text-sm font-black text-foreground shadow-card transition hover:-translate-y-0.5 hover:border-primary focus:outline-none focus:ring-4 focus:ring-ring/30"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
