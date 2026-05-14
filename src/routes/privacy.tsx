import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — VidyaX by Eduspark" },
      {
        name: "description",
        content:
          "Privacy Policy for VidyaX (Vidya X) — what data Eduspark collects, how it is used, and your rights.",
      },
      { property: "og:title", content: "Privacy Policy — VidyaX" },
      {
        property: "og:description",
        content: "How VidyaX (Eduspark) handles your data and protects your privacy.",
      },
    ],
    links: [{ rel: "canonical", href: "https://vidyax.site/privacy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <nav className="mx-auto flex w-full max-w-3xl items-center justify-between px-5 py-4 sm:px-8">
        <Link to="/" className="text-2xl font-black text-brand-gradient">
          VidyaX
        </Link>
        <Link to="/" className="text-sm font-extrabold text-muted-foreground hover:text-primary">
          Home
        </Link>
      </nav>

      <article className="mx-auto w-full max-w-3xl px-5 pb-16 sm:px-8">
        <p className="text-xs font-black uppercase tracking-[0.2em] text-primary">Legal</p>
        <h1 className="mt-2 text-3xl font-black sm:text-4xl">Privacy Policy</h1>
        <p className="mt-2 text-xs font-bold text-muted-foreground">Last updated: May 14, 2026</p>

        <div className="prose prose-sm mt-6 max-w-none space-y-5 text-sm font-medium leading-7 text-foreground">
          <p>
            This Privacy Policy explains how Eduspark (“we”, “us”) collects, uses and protects your
            information when you use the VidyaX (Vidya X) Android app and the website at{" "}
            <a className="font-black text-primary underline" href="https://vidyax.site">
              vidyax.site
            </a>
            .
          </p>

          <h2 className="text-lg font-black">1. Information we collect</h2>
          <ul className="list-disc pl-6">
            <li>
              <strong>Account info:</strong> name, email, phone number (optional) when you sign up.
            </li>
            <li>
              <strong>Usage data:</strong> which batches and books you open, watch progress, test
              attempts, streaks and achievements.
            </li>
            <li>
              <strong>Device info:</strong> Android version, device model, app version, crash logs
              and rough region (from IP).
            </li>
            <li>
              <strong>Communications:</strong> messages you send to support via email or Telegram.
            </li>
          </ul>

          <h2 className="text-lg font-black">2. How we use your data</h2>
          <ul className="list-disc pl-6">
            <li>To run, maintain and improve the VidyaX app and website.</li>
            <li>To sync your progress, achievements and library across sessions.</li>
            <li>To send important updates about new versions and security fixes.</li>
            <li>To prevent abuse, fraud and to enforce our Terms.</li>
          </ul>

          <h2 className="text-lg font-black">3. What we do NOT do</h2>
          <ul className="list-disc pl-6">
            <li>We do not sell your personal data to advertisers or any third party.</li>
            <li>We do not run intrusive ad-tracking SDKs inside the app.</li>
            <li>We do not access your contacts, SMS, calls or media outside what you explicitly upload.</li>
          </ul>

          <h2 className="text-lg font-black">4. Third-party content</h2>
          <p>
            VidyaX is a learning aggregator and may link to or stream third-party material. Those
            third parties have their own privacy policies and we are not responsible for their
            practices. If you believe any content infringes your rights, see our{" "}
            <Link to="/dmca" className="font-black text-primary underline">
              DMCA Policy
            </Link>
            .
          </p>

          <h2 className="text-lg font-black">5. Storage and security</h2>
          <p>
            Data is transmitted over HTTPS. We use reputable cloud providers for storage and apply
            standard security controls (access restrictions, encryption at rest where supported).
            No system is 100% secure, so we encourage you to use a strong password.
          </p>

          <h2 className="text-lg font-black">6. Children</h2>
          <p>
            VidyaX is intended for learners aged 13 and above. If a child under 13 uses the app, a
            parent or guardian should supervise. We do not knowingly collect data from children
            under 13 without parental consent.
          </p>

          <h2 className="text-lg font-black">7. Your rights</h2>
          <p>
            You can request a copy of your data, ask for corrections or request deletion of your
            account by writing to{" "}
            <a className="font-black text-primary underline" href="mailto:edusparkkoficial@gmail.com">
              edusparkkoficial@gmail.com
            </a>
            . We typically respond within 7 working days.
          </p>

          <h2 className="text-lg font-black">8. Permissions used by the app</h2>
          <ul className="list-disc pl-6">
            <li><strong>Internet:</strong> to load batches, books and tests.</li>
            <li><strong>Storage (optional):</strong> to download notes/books for offline reading.</li>
            <li><strong>Notifications (optional):</strong> for streak reminders and update alerts.</li>
          </ul>

          <h2 className="text-lg font-black">9. Changes to this policy</h2>
          <p>
            We may update this policy from time to time. The “Last updated” date at the top of the
            page will reflect the most recent version. Continued use of VidyaX after changes
            constitutes acceptance of the updated policy.
          </p>

          <h2 className="text-lg font-black">10. Contact</h2>
          <p>
            Questions or concerns? Email{" "}
            <a className="font-black text-primary underline" href="mailto:edusparkkoficial@gmail.com">
              edusparkkoficial@gmail.com
            </a>{" "}
            or message us on Telegram via the support bot listed on the homepage.
          </p>
        </div>

        <div className="mt-10 text-center">
          <Link to="/" className="text-xs font-black text-primary hover:underline">
            ← Back to home
          </Link>
        </div>
      </article>
    </main>
  );
}
