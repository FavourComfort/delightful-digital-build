import { useState, useRef } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { toast } from "sonner";
import { submitContact } from "../lib/chats";

export const Route = createFileRoute("/")({
  component: Index,
});

const nav = [
  { label: "Featured", href: "#work" },
  { label: "Services", href: "#expertise" },
  { label: "Experience", href: "#stats" },
  { label: "Contact", href: "#contact" },
];

const stats = [
  { value: "05+", label: "Years Experience" },
  { value: "10+", label: "Projects Done" },
  { value: "0%", label: "Ego Included" },
];

const expertise = [
  {
    heading: "Design",
    items: [
      "UI/UX Strategy",
      "Visual Identity",
      "Design Systems",
      "Editorial Layouts",
    ],
  },
  {
    heading: "Development",
    items: [
      "Frontend Architecture",
      "Responsive Systems",
      "Interaction Design",
      "Performance Optimization",
    ],
  },
];

function Index() {
  const [submitting, setSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);

    const form = new FormData(e.currentTarget);
    const data = {
      name: form.get("name") as string,
      email: form.get("email") as string,
      message: form.get("message") as string,
    };

    if (!data.name || !data.email || !data.message) {
      toast.error("Please fill out all fields.");
      setSubmitting(false);
      return;
    }

    try {
      await submitContact(data);
      toast.success("Message sent! I'll get back to you soon.");
      formRef.current?.reset();
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Try again later.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 md:px-10">
          <a href="#top" className="font-serif text-xl tracking-tight">
            Favour<span className="text-secondary">.</span>
          </a>
          <nav className="hidden items-center gap-10 md:flex">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-eyebrow text-muted-foreground transition-colors hover:text-foreground"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="text-eyebrow rounded-full border border-foreground px-4 py-2 transition-colors hover:bg-foreground hover:text-background"
          >
            Let's talk
          </a>
        </div>
      </header>

      <main id="top">
        {/* HERO */}
        <section className="mx-auto max-w-[1400px] px-6 pb-20 pt-16 md:px-10 md:pt-24">
          <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
            <div className="flex flex-col justify-between">
              <div>
                <p className="text-eyebrow mb-8 flex items-center gap-3 text-muted-foreground">
                  <span className="inline-block h-px w-10 bg-foreground" />
                  Designer &amp; Developer — Est. 2026
                </p>
                <h1 className="text-display">
                  Favour<span className="text-secondary">.</span>
                </h1>
                <p className="mt-10 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
                  Crafting digital experiences that balance structural integrity. Specialized in editorial-style
                </p>
                <div className="mt-10 flex flex-wrap gap-4">
                  <a
                    href="#work"
                    className="text-eyebrow inline-flex items-center gap-3 rounded-full bg-foreground px-6 py-4 text-background transition-transform hover:-translate-y-0.5"
                  >
                    View My Work
                    <span aria-hidden>→</span>
                  </a>
                  <a
                    href="#contact"
                    className="text-eyebrow inline-flex items-center gap-3 rounded-full border border-foreground px-6 py-4 transition-colors hover:bg-foreground hover:text-background"
                  >
                    Let's Talk
                  </a>
                </div>
              </div>
            </div>

            <img
              src="/images/profile.png"
              alt="Favour"
              className="aspect-[4/5] w-full rounded-sm border border-border object-cover"
            />
          </div>
        </section>

        {/* STATS */}
        <section id="stats" className="border-y border-border">
          <div className="mx-auto grid max-w-[1400px] grid-cols-2 divide-x divide-y divide-border md:grid-cols-4 md:divide-y-0">
            {stats.map((s) => (
              <div key={s.label} className="px-6 py-10 md:px-10 md:py-14">
                <div className="text-title-lg text-secondary">{s.value}</div>
                <div className="text-eyebrow mt-3 text-muted-foreground">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* WORK */}
        <section id="work" className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
          <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-eyebrow mb-4 text-muted-foreground">§ 01 — Portfolio</p>
              <h2 className="text-title-xl max-w-2xl">Selected Works.</h2>
            </div>
            <p className="max-w-md text-muted-foreground">
              A curated selection of the most impactful projects — where careful
              typography meets considered engineering.
            </p>
          </div>

          <div className="grid gap-12 md:grid-cols-2 md:gap-10">
            <article className="group">
              <div className="aspect-[4/5] rounded-sm border border-border bg-muted/60 transition-colors group-hover:bg-muted" />
              <div className="mt-6 flex items-center justify-between">
                <span className="text-eyebrow text-secondary">Project</span>
                <span className="text-eyebrow text-muted-foreground">2025</span>
              </div>
              <h3 className="text-title-lg mt-3">Coming Soon</h3>
              <p className="mt-3 max-w-md text-muted-foreground">
                This portfolio is still being filled with case studies.
              </p>
            </article>
            <article className="group md:mt-24">
              <div className="aspect-[4/5] rounded-sm border border-border bg-muted/60 transition-colors group-hover:bg-muted" />
              <div className="mt-6 flex items-center justify-between">
                <span className="text-eyebrow text-secondary">Project</span>
                <span className="text-eyebrow text-muted-foreground">2025</span>
              </div>
              <h3 className="text-title-lg mt-3">Stay Tuned</h3>
              <p className="mt-3 max-w-md text-muted-foreground">
                More projects will appear here soon.
              </p>
            </article>
          </div>
        </section>

        {/* EXPERTISE */}
        <section id="expertise" className="border-t border-border bg-muted/40">
          <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
            <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr]">
              <div>
                <p className="text-eyebrow mb-4 text-muted-foreground">§ 02 — Discipline</p>
                <h2 className="text-title-xl">Expertise &amp;<br />Skills.</h2>
                <p className="mt-6 max-w-md text-muted-foreground">
                  Bridging the gap between aesthetic design and functional
                  development to create high-performance digital products that
                  feel inevitable.
                </p>
              </div>
              <div className="grid gap-10 sm:grid-cols-2">
                {expertise.map((e) => (
                  <div key={e.heading}>
                    <h3 className="text-eyebrow border-b border-border pb-3 text-foreground">
                      {e.heading}
                    </h3>
                    <ul className="mt-5 space-y-4">
                      {e.items.map((item, idx) => (
                        <li key={item} className="flex items-baseline gap-4">
                          <span className="text-eyebrow text-muted-foreground">
                            0{idx + 1}
                          </span>
                          <span className="font-serif text-xl">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
          <div className="grid gap-16 lg:grid-cols-[1fr_1fr]">
            <div>
              <p className="text-eyebrow mb-4 text-muted-foreground">§ 03 — Contact</p>
              <h2 className="text-title-xl">
                Let's talk about<br />the future.
              </h2>
              <p className="mt-6 max-w-md text-muted-foreground">
                Whether you have a specific project in mind or just want to say
                hi, I'm always open to new opportunities and creative
                collaborations.
              </p>

              <div className="mt-12 space-y-8">
                <div>
                  <p className="text-eyebrow text-muted-foreground">Email Directly</p>
                  <a
                    href="mailto:comfortfavour128@gmail.com"
                    className="text-title-lg mt-2 block transition-colors hover:text-secondary"
                  >
                    comfortfavour128@gmail.com
                  </a>
                </div>
                <div>
                  <p className="text-eyebrow text-muted-foreground">Current Location</p>
                  <p className="mt-2 font-serif text-xl">Kampala, Uganda</p>
                </div>
                <div>
                  <p className="text-eyebrow mb-3 text-muted-foreground">Find me elsewhere</p>
                  <div className="flex flex-wrap gap-6 text-sm">
                    {["GitHub", "Twitter"].map((s) => (
                      <a
                        key={s}
                        href="#"
                        className="border-b border-foreground/40 pb-1 transition-colors hover:border-secondary hover:text-secondary"
                      >
                        {s}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="rounded-sm border border-border bg-background p-8 md:p-10"
            >
              <div className="space-y-8">
                <Field label="Full Name" name="name" />
                <Field label="Email Address" name="email" type="email" />
                <Field label="Your Message" name="message" as="textarea" />
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="text-eyebrow mt-10 inline-flex w-full items-center justify-center gap-3 rounded-full bg-foreground px-6 py-4 text-background transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {submitting ? "Sending..." : "Send Message"}
                <span aria-hidden>{submitting ? "" : "→"}</span>
              </button>
            </form>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-border bg-foreground text-background">
          <div className="mx-auto flex max-w-[1400px] flex-col items-start gap-10 px-6 py-24 md:flex-row md:items-end md:justify-between md:px-10">
            <h2 className="text-title-xl max-w-2xl text-background">
              Ready to start a favored project?
            </h2>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="text-eyebrow inline-flex items-center gap-3 rounded-full bg-secondary px-6 py-4 text-secondary-foreground transition-transform hover:-translate-y-0.5"
              >
                Hire Me Today <span aria-hidden>→</span>
              </a>
              <a
                href="#contact"
                className="text-eyebrow inline-flex items-center gap-3 rounded-full border border-background/40 px-6 py-4 transition-colors hover:bg-background hover:text-foreground"
              >
                Schedule a 15-min call
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-4 px-6 py-10 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between md:px-10">
          <p className="font-serif text-lg text-foreground">
            Favour<span className="text-secondary">.</span>
          </p>
          <p className="text-eyebrow">
            &copy; {new Date().getFullYear()} — Designed &amp; Built with Care
          </p>
        </div>
      </footer>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  as,
}: {
  label: string;
  name: string;
  type?: string;
  as?: "textarea";
}) {
  return (
    <label className="block">
      <span className="text-eyebrow text-muted-foreground">{label}</span>
      {as === "textarea" ? (
        <textarea
          name={name}
          rows={4}
          className="mt-3 w-full resize-none border-b border-border bg-transparent pb-2 font-serif text-lg outline-none transition-colors focus:border-foreground"
        />
      ) : (
        <input
          type={type}
          name={name}
          className="mt-3 w-full border-b border-border bg-transparent pb-2 font-serif text-lg outline-none transition-colors focus:border-foreground"
        />
      )}
    </label>
  );
}
