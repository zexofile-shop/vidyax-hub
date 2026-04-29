import { createFileRoute } from "@tanstack/react-router";
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

const downloadOptions = [
  { name: "Android", status: "Download APK", icon: "android", href: "https://www.mediafire.com/" },
  { name: "iOS", status: "Coming soon", icon: "apple", href: "#download" },
  { name: "Windows", status: "Coming soon", icon: "windows", href: "#download" },
];

const telegramLink = "https://t.me/";
const supportEmail = "edusparkkoficial@gmail.com";

function BrandLogo() {
  return <span className="text-3xl font-black tracking-normal text-brand-gradient">VidyaX</span>;
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
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-5 sm:px-8">
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

      <section className="mx-auto grid w-full max-w-7xl items-center gap-12 px-5 pb-16 pt-8 sm:px-8 lg:grid-cols-[1fr_0.95fr] lg:pb-24">
        <div>
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border bg-card px-4 py-2 text-sm font-extrabold text-secondary-foreground shadow-card">
            <span className="grid h-7 w-7 place-items-center rounded-full bg-success text-primary-foreground">
              ✓
            </span>
            Powered by Eduspark
          </div>
          <h1 className="max-w-3xl text-5xl font-black leading-[1.02] tracking-normal text-foreground sm:text-6xl lg:text-7xl">
            VidyaX — future of learning, free content ke saath.
          </h1>
          <p className="mt-6 max-w-2xl text-lg font-semibold leading-8 text-muted-foreground sm:text-xl">
            Reputed institutes ke lectures, books library, test series, notifications, streaks aur
            achievements—sab kuch ek polished app experience mein.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="https://www.mediafire.com/"
              target="_blank"
              rel="noreferrer"
              className="shine-sweep rounded-full bg-primary px-7 py-4 text-center text-base font-black text-primary-foreground shadow-soft transition hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-ring/30"
            >
              Download Android APK
            </a>
            <a
              href="#support"
              className="rounded-full border bg-card px-7 py-4 text-center text-base font-black text-foreground shadow-card transition hover:-translate-y-1 hover:border-primary focus:outline-none focus:ring-4 focus:ring-ring/30"
            >
              Join Telegram
            </a>
          </div>
          <div className="mt-10 grid max-w-xl grid-cols-3 gap-4">
            {[
              ["11k+", "Students"],
              ["10+", "Achievements"],
              ["24/7", "Access"],
            ].map(([value, label]) => (
              <div key={label} className="rounded-3xl border bg-card p-4 text-center shadow-card">
                <div className="text-2xl font-black text-primary">{value}</div>
                <div className="mt-1 text-xs font-extrabold text-muted-foreground">{label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto h-[610px] w-full max-w-[560px] sm:h-[700px]">
          <div className="absolute inset-x-8 top-12 h-[520px] rounded-[4rem] bg-hero-gradient opacity-90 blur-3xl" />
          <div className="phone-perspective float-slow absolute left-1/2 top-4 w-[245px] -translate-x-1/2 rounded-[2.6rem] border-[10px] border-card bg-card p-2 shadow-soft sm:w-[300px]">
            <img
              src={appsShot}
              alt="VidyaX app home screen preview"
              className="aspect-[9/19.5] w-full rounded-[2rem] object-cover"
              loading="eager"
            />
          </div>
          <div className="absolute bottom-24 left-0 w-[168px] rotate-[-9deg] rounded-[2rem] border-[8px] border-card bg-card p-1 shadow-card sm:w-[210px]">
            <img
              src={achievementsShot}
              alt="VidyaX XP and achievements screen"
              className="aspect-[9/19.5] w-full rounded-[1.35rem] object-cover"
              loading="lazy"
            />
          </div>
          <div className="absolute bottom-8 right-1 w-[172px] rotate-[10deg] rounded-[2rem] border-[8px] border-card bg-card p-1 shadow-card sm:w-[215px]">
            <img
              src={profileShot}
              alt="VidyaX student profile screen"
              className="aspect-[9/19.5] w-full rounded-[1.35rem] object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section id="features" className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-primary">Features</p>
          <h2 className="mt-3 text-4xl font-black tracking-normal sm:text-5xl">
            Learning app ke sare important tools ek jagah.
          </h2>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="group rounded-[2rem] border bg-card p-6 shadow-card transition hover:-translate-y-2 hover:border-primary"
            >
              <div className="mb-7 grid h-14 w-14 place-items-center rounded-2xl bg-brand-soft text-2xl font-black text-primary transition group-hover:scale-110">
                {feature.icon}
              </div>
              <h3 className="text-xl font-black">{feature.title}</h3>
              <p className="mt-3 text-sm font-semibold leading-7 text-muted-foreground">
                {feature.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section id="screens" className="bg-secondary/60 py-18">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.22em] text-primary">
                App Preview
              </p>
              <h2 className="mt-3 text-4xl font-black tracking-normal sm:text-5xl">
                Screenshots ko premium device gallery mein dekho.
              </h2>
            </div>
            <p className="max-w-md text-sm font-semibold leading-7 text-muted-foreground">
              Real app screens ko normal flat images ki jagah layered 3D mobile cards mein present
              kiya gaya hai.
            </p>
          </div>
          <div className="mt-12 flex gap-6 overflow-x-auto pb-8 [scrollbar-width:none]">
            {screenshots.map((shot, index) => (
              <figure
                key={shot.label}
                className={`min-w-[245px] rounded-[2.5rem] border-[10px] border-card bg-card p-2 shadow-soft transition hover:-translate-y-3 sm:min-w-[285px] ${index % 2 === 0 ? "-rotate-2" : "rotate-2"}`}
              >
                <img
                  src={shot.src}
                  alt={shot.alt}
                  className="aspect-[9/19.5] w-full rounded-[1.9rem] object-cover"
                  loading="lazy"
                />
                <figcaption className="px-3 py-4 text-center text-sm font-black text-primary">
                  {shot.label}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section
        id="download"
        className="mx-auto grid w-full max-w-7xl gap-8 px-5 py-20 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]"
      >
        <div className="rounded-[2.25rem] bg-hero-gradient p-8 text-primary-foreground shadow-soft sm:p-10">
          <p className="text-sm font-black uppercase tracking-[0.22em] opacity-80">Download</p>
          <h2 className="mt-4 text-4xl font-black tracking-normal sm:text-5xl">
            VidyaX install karo aur free learning start karo.
          </h2>
          <p className="mt-5 text-base font-semibold leading-8 opacity-80">
            Android APK ke liye MediaFire link attach hoga. iOS aur Windows options ko professional
            availability cards ke form mein show kiya gaya hai.
          </p>
        </div>
        <div className="grid gap-4">
          {downloadOptions.map((option) => (
            <a
              key={option.name}
              href={option.name === "Android" ? "https://www.mediafire.com/" : "#download"}
              target={option.name === "Android" ? "_blank" : undefined}
              rel={option.name === "Android" ? "noreferrer" : undefined}
              className="flex items-center justify-between rounded-[2rem] border bg-card p-5 shadow-card transition hover:-translate-y-1 hover:border-primary focus:outline-none focus:ring-4 focus:ring-ring/30"
            >
              <div className="flex items-center gap-5">
                <div className="grid h-16 w-16 place-items-center rounded-2xl bg-brand-soft text-primary">
                  <PlatformIcon type={option.icon} />
                </div>
                <div>
                  <h3 className="text-xl font-black">{option.name}</h3>
                  <p className="mt-1 text-sm font-bold text-muted-foreground">{option.status}</p>
                </div>
              </div>
              <span className="text-2xl font-black text-primary">→</span>
            </a>
          ))}
        </div>
      </section>

      <section id="support" className="mx-auto w-full max-w-7xl px-5 pb-20 sm:px-8">
        <div className="grid gap-5 md:grid-cols-2">
          <a
            href="https://t.me/"
            target="_blank"
            rel="noreferrer"
            className="rounded-[2rem] border bg-card p-7 shadow-card transition hover:-translate-y-2 hover:border-primary focus:outline-none focus:ring-4 focus:ring-ring/30"
          >
            <div className="mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-brand-soft text-2xl font-black text-primary">
              ↗
            </div>
            <h2 className="text-2xl font-black">Join Telegram</h2>
            <p className="mt-3 font-semibold leading-7 text-muted-foreground">
              Updates, announcements aur student community ke liye Telegram channel join karo.
            </p>
          </a>
          <a
            href="mailto:support@eduspark.app"
            className="rounded-[2rem] border bg-card p-7 shadow-card transition hover:-translate-y-2 hover:border-primary focus:outline-none focus:ring-4 focus:ring-ring/30"
          >
            <div className="mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-brand-soft text-2xl font-black text-primary">
              ?
            </div>
            <h2 className="text-2xl font-black">Contact Support</h2>
            <p className="mt-3 font-semibold leading-7 text-muted-foreground">
              Download, app access ya content related help ke liye Eduspark support se connect karo.
            </p>
          </a>
        </div>
        <footer className="pt-14 text-center">
          <BrandLogo />
          <p className="mt-3 text-sm font-black text-muted-foreground">
            Powered by Eduspark • Made with ❤️ in India
          </p>
        </footer>
      </section>
    </main>
  );
}
