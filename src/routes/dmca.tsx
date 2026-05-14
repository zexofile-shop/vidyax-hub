import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/dmca")({
  head: () => ({
    meta: [
      { title: "DMCA Policy — VidyaX by Eduspark" },
      {
        name: "description",
        content:
          "VidyaX DMCA & copyright takedown policy. Learn how to file a notice for copyrighted content available through the VidyaX (Vidya X) app.",
      },
      { property: "og:title", content: "DMCA Policy — VidyaX" },
      {
        property: "og:description",
        content: "How to send a DMCA / copyright takedown notice to VidyaX (Eduspark).",
      },
    ],
    links: [{ rel: "canonical", href: "https://vidyax.site/dmca" }],
  }),
  component: DmcaPage,
});

function DmcaPage() {
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
        <h1 className="mt-2 text-3xl font-black sm:text-4xl">DMCA & Copyright Policy</h1>
        <p className="mt-2 text-xs font-bold text-muted-foreground">Last updated: May 14, 2026</p>

        <div className="prose prose-sm mt-6 max-w-none space-y-5 text-sm font-medium leading-7 text-foreground">
          <p>
            VidyaX (operated by Eduspark) respects the intellectual property rights of others and
            expects users of the app and website to do the same. This DMCA Policy describes how
            copyright owners can request removal of material that is alleged to infringe their
            rights and is made available through VidyaX.
          </p>

          <h2 className="text-lg font-black">1. About the content on VidyaX</h2>
          <p>
            VidyaX is a learning aggregator. Some learning material, batch references, books and
            test series accessible via VidyaX may originate from third parties. We do not claim
            ownership over third-party content and we are not affiliated with the institutes
            referenced unless explicitly stated. If you are a rights holder and believe your
            copyrighted material is being made available without your permission, you can ask us
            to remove it under this policy.
          </p>

          <h2 className="text-lg font-black">2. Filing a DMCA notice</h2>
          <p>To submit a takedown notice, send the following information by email:</p>
          <ul className="list-disc pl-6">
            <li>Your full legal name, address, phone number and email.</li>
            <li>
              A description of the copyrighted work you claim has been infringed (links, titles,
              ISBNs or screenshots help).
            </li>
            <li>The exact location inside VidyaX where the material appears.</li>
            <li>
              A statement that you have a good-faith belief the use is not authorised by the
              copyright owner, its agent or the law.
            </li>
            <li>
              A statement, under penalty of perjury, that the information in your notice is
              accurate and that you are the rights holder or authorised to act on behalf of the
              rights holder.
            </li>
            <li>Your physical or electronic signature.</li>
          </ul>
          <p>
            Send notices to:{" "}
            <a
              className="font-black text-primary underline"
              href="mailto:edusparkkoficial@gmail.com"
            >
              edusparkkoficial@gmail.com
            </a>{" "}
            with the subject line <em>“DMCA Takedown Notice — VidyaX”</em>.
          </p>

          <h2 className="text-lg font-black">3. Response time</h2>
          <p>
            Valid notices are typically actioned within 72 hours. We may remove or disable access
            to the reported material and notify the user who made it available, if applicable.
          </p>

          <h2 className="text-lg font-black">4. Counter-notice</h2>
          <p>
            If you believe content was removed in error, you may submit a counter-notice to the
            same email address. Include your contact details, the material removed, its previous
            location, and a statement under penalty of perjury that you have a good-faith belief
            the removal was a mistake.
          </p>

          <h2 className="text-lg font-black">5. Repeat infringers</h2>
          <p>
            Accounts or distributors that repeatedly upload infringing material will be terminated
            and banned from VidyaX in accordance with applicable law.
          </p>

          <h2 className="text-lg font-black">6. Misuse of this process</h2>
          <p>
            Knowingly filing a false notice is a serious offence and may result in legal liability
            for damages, including costs and attorneys’ fees.
          </p>

          <h2 className="text-lg font-black">7. Contact</h2>
          <p>
            For any DMCA, copyright or takedown question, contact{" "}
            <a className="font-black text-primary underline" href="mailto:edusparkkoficial@gmail.com">
              edusparkkoficial@gmail.com
            </a>
            .
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
