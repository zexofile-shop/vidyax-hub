import { useEffect } from "react";

export type AndroidVariant = {
  id: "64" | "32" | "emu";
  label: string;
  subtitle: string;
  devices: string;
  url: string;
  recommended?: boolean;
};

export const ANDROID_VARIANTS: AndroidVariant[] = [
  {
    id: "64",
    label: "64-bit",
    subtitle: "Recommended for most modern phones",
    devices:
      "Works on almost all phones from 2018+ — e.g. Samsung Galaxy S/A series, OnePlus, Xiaomi/Redmi Note, Realme, Vivo, Oppo, iQOO, Google Pixel, Motorola Edge.",
    url: "https://github.com/Bhavishy-dev/Vidya-X-versions/releases/download/1.2.7/VidyaX_1.2.7_64Bit.apk",
    recommended: true,
  },
  {
    id: "32",
    label: "32-bit",
    subtitle: "For older / budget devices",
    devices:
      "Use only if 64-bit doesn’t install — e.g. older Redmi 4/5/6, Samsung J-series, Micromax, Lava, Karbonn, or any phone from before 2018 with ≤ 2 GB RAM.",
    url: "https://github.com/Bhavishy-dev/Vidya-X-versions/releases/download/1.2.7/VidyaX_1.2.7_32Bit.apk",
  },
  {
    id: "emu",
    label: "Emulator (AMD build)",
    subtitle: "Not a PC version — for AMD-chip Android devices & AMD emulators",
    devices:
      "This is NOT a Windows / PC version. Use it only if your Android device or emulator runs on an AMD chip — common in some tablets (a few Lenovo / Intel-Atom era tabs) and in AMD-based Android emulators like BlueStacks, LDPlayer, NoxPlayer, MEmu, MuMu Player on AMD PCs. On normal ARM phones, always pick 64-bit or 32-bit instead.",
    url: "https://github.com/Bhavishy-dev/Vidya-X-versions/releases/download/1.2.7/VidyaX_1.2.7_Emulators.apk",
  },
];

export function AndroidDownloadDialog({
  open,
  onClose,
  version,
}: {
  open: boolean;
  onClose: () => void;
  version: string;
}) {
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Choose Android build"
      onClick={onClose}
      className="fixed inset-0 z-[9999] flex items-start justify-center overflow-y-auto bg-black/85 p-3 backdrop-blur sm:items-center sm:p-6"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative my-auto w-full max-w-lg overflow-hidden rounded-2xl bg-card shadow-2xl"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-3 top-3 z-10 grid h-9 w-9 shrink-0 place-items-center rounded-full bg-muted text-xl font-black leading-none text-foreground shadow-md hover:bg-accent"
          style={{ aspectRatio: "1 / 1" }}
        >
          <span className="block leading-none">×</span>
        </button>

        <div className="bg-hero-gradient p-5 text-primary-foreground sm:p-6">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-85">
            Android · v{version}
          </p>
          <h3 className="mt-1 text-xl font-black sm:text-2xl">Choose your build</h3>
          <p className="mt-1 text-xs font-semibold leading-5 opacity-85 sm:text-sm">
            Most users should pick <span className="font-black">64-bit</span>. If it fails to install, try 32-bit. For PC/Mac use the Emulator build.
          </p>
        </div>

        <div className="space-y-2.5 p-4 sm:p-5">
          {ANDROID_VARIANTS.map((v) => (
            <a
              key={v.id}
              href={v.url}
              target="_blank"
              rel="noreferrer"
              onClick={onClose}
              className="block rounded-2xl border bg-card p-4 shadow-card transition hover:-translate-y-0.5 hover:border-primary focus:outline-none focus:ring-4 focus:ring-ring/30"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-1.5">
                    <h4 className="text-base font-black">{v.label}</h4>
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
                <span className="shrink-0 text-xs font-black text-primary">Download →</span>
              </div>
            </a>
          ))}

          <p className="pt-1 text-center text-[10px] font-bold text-muted-foreground">
            Not sure? Pick <span className="text-primary">64-bit</span> — it works on 95% of phones.
          </p>
        </div>
      </div>
    </div>
  );
}
