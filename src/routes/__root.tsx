import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "google-site-verification", content: "DEJFR5l2Bgd1ltRMs0yaGFgZOlqzBfjn3u40t2TyEvk" },
      { title: "VidyaX — Free Learning App | Vidya X by Eduspark" },
      {
        name: "description",
        content:
          "VidyaX (Vidya X) — free learning app by Eduspark. Download VidyaX APK for institute content, books, test series, achievements & smart learning tools.",
      },
      {
        name: "keywords",
        content:
          "VidyaX, Vidya X, vidyax, vidya x, vidyax app, vidyax site, vidyax.site, VidyaX APK, VidyaX download, Eduspark, free learning app, vidyaX by eduspark",
      },
      { name: "author", content: "Eduspark" },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { name: "application-name", content: "VidyaX" },
      { name: "apple-mobile-web-app-title", content: "VidyaX" },
      { property: "og:site_name", content: "VidyaX" },
      { property: "og:title", content: "VidyaX — Free Learning App | Vidya X by Eduspark" },
      {
        property: "og:description",
        content:
          "VidyaX (Vidya X) — Premium learning access made simple. Institute content, book library, test series & app features in one platform.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://vidyax.site" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@VidyaX" },
      { name: "twitter:title", content: "VidyaX — Free Learning App" },
      { name: "twitter:description", content: "VidyaX (Vidya X) - Premium learning access, made simple" },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/SnOPXSzaNzcUFZq3MeYFFXSxoy52/social-images/social-1778410156410-1000099733.webp" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/SnOPXSzaNzcUFZq3MeYFFXSxoy52/social-images/social-1778410156410-1000099733.webp" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800;900&display=swap",
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "canonical", href: "https://vidyax.site" },
      { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32.png" },
      { rel: "icon", type: "image/png", sizes: "192x192", href: "/favicon-192.png" },
      { rel: "apple-touch-icon", sizes: "180x180", href: "/favicon-192.png" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "VidyaX",
          alternateName: ["Vidya X", "vidyax", "vidya x", "VidyaX App", "VidyaX Site"],
          url: "https://vidyax.site",
          publisher: { "@type": "Organization", name: "Eduspark" },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MobileApplication",
          name: "VidyaX",
          alternateName: "Vidya X",
          operatingSystem: "ANDROID",
          applicationCategory: "EducationalApplication",
          offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
          publisher: { "@type": "Organization", name: "Eduspark" },
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
    </>
  );
}

function RootComponent() {
  return <Outlet />;
}
