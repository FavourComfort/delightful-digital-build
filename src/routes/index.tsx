import { useState, useRef } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { toast } from "sonner";
import {
  ArrowRight,
  ArrowUpRight,
  Briefcase,
  Check,
  Clock,
  Code,
  Layers,
  Mail,
  MapPin,
  Menu,
  MonitorSmartphone,
  Palette,
  Smile,
  Sparkles,
  X,
} from "lucide-react";

const WEB3FORMS_KEY = (import.meta.env.VITE_WEB3FORMS_ACCESS_KEY as string | undefined) || "014536fa-72f7-4dcb-9538-404781b8cb38";

export const Route = createFileRoute("/")({
  component: Index,
});

const nav = [
  { label: "Home", href: "#top" },
  { label: "Work", href: "#work" },
  { label: "Services", href: "#expertise" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const stats = [
  { icon: Briefcase, value: "04+", label: "Projects Done" },
  { icon: Smile, value: "0%", label: "Ego Included" },
  { icon: Layers, value: "02", label: "Disciplines, Design to Deployment" },
  { icon: Code, value: "05", label: "Technologies Used" },
  { icon: MonitorSmartphone, value: "100%", label: "Responsive, Every Build" },
  { icon: Clock, value: "24hr", label: "Response Time" },
];

const projects = [
  {
    title: "KeepDearly",
    meta: "Selected Project · 2026",
    description: "A warm, memory-keeping experience — designed and built with care.",
    src: "/images/keepdearly.png",
    alt: "KeepDearly project preview",
    imgClass: "h-full w-full object-cover object-top",
    frameClass: "bg-muted",
  },
  {
    title: "Ninjawo",
    meta: "Selected Project · 2026",
    description: "Brand and web presence for a services business.",
    src: "/images/ninjawo.png",
    alt: "Ninjawo brand and website preview",
    imgClass: "h-full w-full object-contain",
    frameClass: "bg-white p-6 sm:p-8",
  },
];

const expertise = [
  {
    icon: Palette,
    heading: "Design",
    items: ["UI/UX Strategy", "Visual Identity", "Design Systems"],
  },
  {
    icon: Code,
    heading: "Development",
    items: ["Frontend Architecture", "Responsive Systems", "Interaction Design", "Performance Optimization"],
  },
];

function Index() {
  const [submitting, setSubmitting] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    const formData = new FormData(e.currentTarget);
    formData.append("access_key", WEB3FORMS_KEY);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      if (data.success) {
        toast.success("Message sent! I'll get back to you soon.");
        formRef.current?.reset();
      } else {
        toast.error("Something went wrong. Try again later.");
      }
    } catch {
      toast.error("Something went wrong. Try again later.");
    }
    setSubmitting(false);
  }

  return (
    <div className="min-h-screen overflow-x-clip bg-background text-foreground">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-foreground focus:px-4 focus:py-2 focus:text-sm focus:text-background"
      >
        Skip to content
      </a>
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
          <a href="#top" className="font-serif text-2xl tracking-tight" aria-label="Favour — home">
            Favour<span className="text-secondary">.</span>
          </a>
          <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="text-sm font-medium text-muted-foreground hover:text-foreground">
                {n.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background md:inline-flex"
            >
              Let&apos;s talk <ArrowRight className="size-4" aria-hidden />
            </a>
            <button
              type="button"
              className="inline-flex size-10 items-center justify-center rounded-full border border-border md:hidden"
              aria-expanded={menuOpen}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen((v) => !v)}
            >
              {menuOpen ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <nav className="border-t border-border/60 px-6 py-4 md:hidden" aria-label="Mobile">
            <ul className="space-y-1">
              {nav.map((n) => (
                <li key={n.href}>
                  <a href={n.href} onClick={() => setMenuOpen(false)} className="block rounded-lg px-3 py-2.5 font-medium hover:bg-muted">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </header>
      <main id="main">
        <section id="top" className="mx-auto max-w-6xl px-6 pt-14 md:px-10 md:pt-20" aria-labelledby="hero-heading">
          <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <p className="text-eyebrow text-olive">Designer &amp; Developer — Est. 2026</p>
              <h1 id="hero-heading" className="mt-6 font-serif text-5xl leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
                I design and build digital <em className="italic text-olive">experiences</em> that feel intentional.
              </h1>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
                Crafting digital experiences that balance structural integrity and visual clarity.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a href="#work" className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-medium text-background">
                  View my work <ArrowRight className="size-4" aria-hidden />
                </a>
                <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-foreground/25 px-6 py-3.5 text-sm font-medium">
                  Let&apos;s talk
                </a>
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
              <div className="absolute -bottom-5 -right-5 h-full w-full rounded-3xl bg-olive/25" aria-hidden />
              <img
                src="/images/profile.png"
                alt="Portrait of Favour"
                width={880}
                height={1100}
                className="relative aspect-[4/5] w-full rounded-3xl border border-border object-cover"
              />
            </div>
          </div>
        </section>
        {/* STATS */}
        <section id="about" className="mx-auto max-w-6xl scroll-mt-24 px-6 pt-16 md:px-10 md:pt-24" aria-label="About">
          <div className="grid gap-8 rounded-3xl border border-border bg-card px-8 py-10 sm:grid-cols-2 md:px-12 lg:grid-cols-3" role="list">
            {stats.map((s) => (
              <div key={s.label} role="listitem" className="flex items-center gap-5">
                <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-full bg-olive/15 text-olive">
                  <s.icon className="size-5" aria-hidden />
                </span>
                <span>
                  <span className="block font-serif text-3xl">{s.value}</span>
                  <span className="mt-1 block text-sm text-muted-foreground">{s.label}</span>
                </span>
              </div>
            ))}
          </div>
        </section>
        {/* EXPERTISE */}
        <section id="expertise" className="mx-auto max-w-6xl scroll-mt-24 px-6 pt-16 md:px-10 md:pt-24" aria-labelledby="expertise-heading">
          <p className="text-eyebrow text-olive">What I do</p>
          <div className="mt-4 flex flex-wrap items-end justify-between gap-6">
            <h2 id="expertise-heading" className="font-serif text-4xl tracking-tight sm:text-5xl">Expertise</h2>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              End-to-end services focused on designing and building products that make an impact.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {expertise.map((e) => (
              <article key={e.heading} className="rounded-3xl border border-border bg-card p-8 md:p-10">
                <div className="flex items-center gap-4">
                  <span className="inline-flex size-11 items-center justify-center rounded-xl bg-olive/15 text-olive">
                    <e.icon className="size-5" aria-hidden />
                  </span>
                  <h3 className="font-serif text-2xl">{e.heading}</h3>
                </div>
                <ul className="mt-8 space-y-4">
                  {e.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-[15px]">
                      <Check className="size-4 shrink-0 text-olive" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>
        {/* WORK */}
        <section id="work" className="mx-auto max-w-6xl scroll-mt-24 px-6 pt-16 md:px-10 md:pt-24" aria-labelledby="work-heading">
          <p className="text-eyebrow text-olive">Selected work</p>
          <h2 id="work-heading" className="mt-4 font-serif text-4xl tracking-tight sm:text-5xl">Featured Projects</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {projects.map((p) => (
              <article key={p.title} className="group overflow-hidden rounded-3xl border border-border bg-card">
                <div className={`aspect-[4/3] overflow-hidden ${p.frameClass}`}>
                  <img
                    src={p.src}
                    alt={p.alt}
                    loading="lazy"
                    className={`${p.imgClass} transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100`}
                  />
                </div>
                <div className="flex items-start justify-between gap-4 p-6 md:p-7">
                  <div>
                    <p className="text-eyebrow text-muted-foreground">{p.meta}</p>
                    <h3 className="mt-2 font-serif text-2xl">{p.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
                  </div>
                  <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-border text-olive">
                    <ArrowUpRight className="size-4" aria-hidden />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </section>
        {/* CONTACT */}
        <section id="contact" className="mx-auto max-w-6xl scroll-mt-24 px-6 pt-16 md:px-10 md:pt-24" aria-labelledby="contact-heading">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="text-eyebrow text-olive">Get in touch</p>
              <h2 id="contact-heading" className="mt-4 font-serif text-4xl leading-tight tracking-tight sm:text-5xl">
                Let&apos;s talk about<br />the future.
              </h2>
              <p className="mt-6 max-w-md leading-relaxed text-muted-foreground">
                Whether you have a specific project in mind or just want to say hi, I&apos;m always open to new
                opportunities and creative collaborations.
              </p>
              <div className="mt-10 space-y-6">
                <div className="flex items-center gap-4">
                  <span className="inline-flex size-11 items-center justify-center rounded-full border border-border text-olive">
                    <Mail className="size-5" aria-hidden />
                  </span>
                  <div>
                    <p className="text-eyebrow text-muted-foreground">Email directly</p>
                    <a href="mailto:comfortfavour128@gmail.com" className="mt-1 block font-medium hover:text-olive">
                      comfortfavour128@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="inline-flex size-11 items-center justify-center rounded-full border border-border text-olive">
                    <MapPin className="size-5" aria-hidden />
                  </span>
                  <div>
                    <p className="text-eyebrow text-muted-foreground">Current location</p>
                    <p className="mt-1 font-medium">Kampala, Uganda</p>
                  </div>
                </div>
              </div>
            </div>
            <form ref={formRef} onSubmit={handleSubmit} className="rounded-3xl border border-border bg-card p-8 md:p-10">
              <div className="space-y-8">
                <Field label="Full Name" name="name" />
                <Field label="Email Address" name="email" type="email" />
                <Field label="Your Message" name="message" as="textarea" />
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="mt-10 inline-flex w-full items-center justify-center gap-2 rounded-full bg-foreground px-6 py-4 text-sm font-medium text-background disabled:cursor-not-allowed disabled:opacity-60"
              >
                {submitting ? "Sending..." : "Send Message"}
                {!submitting && <ArrowRight className="size-4" aria-hidden />}
              </button>
            </form>
          </div>
        </section>
        {/* CTA */}
        <section className="mx-auto max-w-6xl px-6 pt-16 md:px-10 md:pt-24" aria-labelledby="cta-heading">
          <div className="flex flex-col gap-8 rounded-3xl bg-olive/15 p-8 sm:p-12 md:flex-row md:items-center md:justify-between">
            <div className="flex items-start gap-4">
              <Sparkles className="mt-1 size-6 shrink-0 text-olive" aria-hidden />
              <h2 id="cta-heading" className="max-w-md font-serif text-3xl leading-tight tracking-tight sm:text-4xl">
                Let&apos;s create something meaningful together.
              </h2>
            </div>
            <a
              href="#contact"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-medium text-background"
            >
              Start a conversation <ArrowRight className="size-4" aria-hidden />
            </a>
          </div>
        </section>
      </main>
      <footer className="mx-auto mt-16 max-w-6xl px-6 pb-10 md:px-10">
        <div className="flex flex-col gap-3 border-t border-border pt-8 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p className="font-serif text-lg text-foreground">
            Favour<span className="text-secondary">.</span>
          </p>
          <p>&copy; {new Date().getFullYear()} — Designed &amp; Built with Care</p>
        </div>
      </footer>
    </div>
  );
}

function Field({ label, name, type = "text", as }: { label: string; name: string; type?: string; as?: "textarea" }) {
  return (
    <label className="block">
      <span className="text-eyebrow text-muted-foreground">{label}</span>
      {as === "textarea" ? (
        <textarea name={name} rows={4} required className="mt-3 w-full resize-none border-b border-border bg-transparent pb-2 font-serif text-lg outline-none focus:border-foreground" />
      ) : (
        <input name={name} type={type} required className="mt-3 w-full border-b border-border bg-transparent pb-2 font-serif text-lg outline-none focus:border-foreground" />
      )}
    </label>
  );
}
