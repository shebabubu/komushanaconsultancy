import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Target, Layers, Compass } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { services } from "@/data/services";
import heroImg from "@/assets/hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Komushana Consultancy — Organisational Development & Systems, Kampala" },
      {
        name: "description",
        content:
          "Kampala-based organisational development and systems consultancy. We build the structures, HR systems, compliance, and operations NGOs, CBOs, startups and SMEs need to grow.",
      },
      { property: "og:title", content: "Komushana Consultancy — Organisational Development & Systems" },
      {
        property: "og:description",
        content:
          "We don't just advise — we build the systems, documents, and governance structures that let your organisation run professionally.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:image", content: heroImg },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const differentiators = [
  {
    icon: Target,
    title: "We build, not just advise",
    body: "We design and implement the actual systems, documents, and frameworks — not slide decks that sit on a shelf.",
  },
  {
    icon: Compass,
    title: "Founder-independent by design",
    body: "Your organisation should function consistently and accountably, with or without the founder in the room.",
  },
  {
    icon: Layers,
    title: "Tailored to Uganda",
    body: "Frameworks built for your size, sector, and Ugandan legal requirements — from NGO Bureau to employment law.",
  },
];

function Home() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy text-primary-foreground">
        <img
          src={heroImg}
          alt="Modern Kampala office building at golden hour"
          width={1600}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy/85 to-navy-soft/70" />
        <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
          <span className="inline-block rounded-full border border-gold/40 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-gold">
            Structure · Compliance · Sustainability
          </span>
          <h1 className="mt-6 max-w-3xl text-balance text-4xl leading-tight md:text-6xl">
            Building the foundations organisations need to grow.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/80">
            Komushana Consultancy helps NGOs, community-based organisations,
            startups and SMEs move from informal, founder-dependent operations
            to structured, system-driven institutions.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-gold px-6 py-3 text-sm font-semibold text-gold-foreground transition-opacity hover:opacity-90"
            >
              Book a consultation <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-md border border-primary-foreground/30 px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
            >
              Explore our services
            </Link>
          </div>
        </div>
      </section>

      {/* Intro statement */}
      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-4xl px-6 py-16 text-center">
          <p className="text-balance font-serif text-2xl leading-snug text-foreground md:text-3xl">
            “We do not just advise — we build the actual systems, frameworks, and
            governance structures that allow an organisation to function
            consistently and accountably.”
          </p>
        </div>
      </section>

      {/* Differentiators */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-8 md:grid-cols-3">
          {differentiators.map((d) => (
            <div key={d.title} className="rounded-xl border border-border bg-card p-7 shadow-[var(--shadow-card)]">
              <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-navy/5 text-navy">
                <d.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-xl text-card-foreground">{d.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{d.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services preview */}
      <section className="bg-secondary/50">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-navy-soft">What we do</span>
              <h2 className="mt-2 text-3xl md:text-4xl">Our core specialisations</h2>
            </div>
            <Link to="/services" className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy hover:underline">
              View all services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div key={s.slug} className="flex flex-col rounded-xl border border-border bg-card p-7 shadow-[var(--shadow-card)] transition-shadow hover:shadow-[var(--shadow-elegant)]">
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-gold/15 text-navy">
                  <s.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-lg leading-snug text-card-foreground">{s.title}</h3>
                <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted-foreground">{s.summary}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who we serve */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-navy-soft">Who we serve</span>
            <h2 className="mt-2 text-3xl md:text-4xl">Organisations ready to formalise and scale</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              We partner with organisations at the stage where they need to move
              from informal, founder-dependent operations to structured,
              system-driven institutions.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "NGOs registering or strengthening governance",
                "Community-based organisations seeking compliance",
                "Startups building their first internal systems",
                "Growing SMEs formalising operations",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-foreground">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-navy p-10 text-primary-foreground shadow-[var(--shadow-elegant)]">
            <h3 className="text-2xl text-primary-foreground">Let's build your foundations.</h3>
            <p className="mt-3 text-primary-foreground/75">
              Tell us where your organisation is today and we'll map the systems
              that get you to where you want to be.
            </p>
            <Link
              to="/contact"
              className="mt-7 inline-flex items-center gap-2 rounded-md bg-gold px-6 py-3 text-sm font-semibold text-gold-foreground transition-opacity hover:opacity-90"
            >
              Start a conversation <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
