import { createFileRoute, Link } from "@tanstack/react-router";
import { ANDROID_VARIANTS } from "../components/AndroidDownloadDialog";

export const Route = createFileRoute("/android")({
  head: () => ({
    meta: [
      { title: "Choose Android build — VidyaX" },
      {
        name: "description",
        content:
          "Pick the right VidyaX Android build — 64-bit, 32-bit, or Emulator. Direct APK downloads from Eduspark.",
      },
      { property: "og:title", content: "Choose your Android build — VidyaX" },
      {
        property: "og:description",
        content: "64-bit, 32-bit and Emulator APK builds for VidyaX.",
      },
    ],
  }),
  component: AndroidPage,
});

function AndroidPage() {
  const version = "1.2.5";
  return (
    <main className="min-h-screen bg-background text-foreground">
      <nav className="mx-auto flex w-full max-w-3xl items-center justify-between px-5 py-4 sm:px-8">
        <Link to="/" className="text-2xl font-black text-brand-gradient">
          VidyaX
        </Link>
        <Link
          to="/download"
          className="text-sm font-extrabold text-muted-foreground hover:text-primary"
        >
          Downloads
        </Link>
      </nav>

      <section className="mx-auto w-full max-w-3xl px-5 pb-16 pt-2 sm:px-8">
        <div className="overflow-hidden rounded-2xl bg-hero-gradient p-6 text-primary-foreground sm:p-8">
          <p className="text-[10px] font-black uppercase tracking-[0.22em] opacity-85">
            Android · v{version}
          </p>
          <h1 className="mt-2 text-2xl font-black sm:text-3xl">Choose your build</h1>
          <p className="mt-2 text-xs font-semibold leading-6 opacity-90 sm:text-sm">
            Most users should pick <span className="font-black">64-bit</span>. If it fails to install, try 32-bit. For PC / Mac use the Emulator build.
          </p>
        </div>

        <div className="mt-5 space-y-3 sm:mt-7">
          {ANDROID_VARIANTS.map((v) => (
            <a
              key={v.id}
              href={v.url}
              target="_blank"
              rel="noreferrer"
              className="block rounded-2xl border bg-card p-4 shadow-card transition hover:-translate-y-0.5 hover:border-primary focus:outline-none focus:ring-4 focus:ring-ring/30 sm:p-5"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-1.5">
                    <h2 className="text-base font-black sm:text-lg">{v.label}</h2>
                    {v.recommended && (
                      <span className="rounded-full bg-primary px-2 py-0.5 text-[9px] font-black uppercase tracking-wider text-primary-foreground">
                        Recommended
                      </span>
                    )}
                  </div>
                  <p className="mt-0.5 text-[11px] font-bold text-primary sm:text-xs">
                    {v.subtitle}
                  </p>
                  <p className="mt-1.5 text-[11px] font-semibold leading-5 text-muted-foreground sm:text-xs">
                    {v.devices}
                  </p>
                </div>
                <span className="shrink-0 text-xs font-black text-primary">Download</span>
              </div>
            </a>
          ))}
        </div>

        <p className="mt-6 text-center text-[11px] font-bold text-muted-foreground">
          Not sure? Pick <span className="text-primary">64-bit</span> — it works on 95% of phones.
        </p>

        <div className="mt-8 text-center">
          <Link to="/" className="text-xs font-black text-muted-foreground hover:text-primary">
            ← Back to home
          </Link>
        </div>
      </section>
    </main>
  );
}
