import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { services } from "@/data/services";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Komushana Consultancy" },
      {
        name: "description",
        content:
          "Organisational build, HR systems, NGO & CBO compliance and registration, SME & startup operations, and corporate event management — delivered for organisations across Uganda.",
      },
      { property: "og:title", content: "Services — Komushana Consultancy" },
      {
        property: "og:description",
        content:
          "From organisational structures and HR frameworks to NGO compliance and operations — the systems your organisation needs to run professionally.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: Services,
});

function Services() {
  return (
    <PageLayout>
      <section className="bg-navy text-primary-foreground">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">Services</span>
          <h1 className="mt-3 max-w-3xl text-balance text-4xl md:text-5xl">
            Systems that let your organisation run without you in the room.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-primary-foreground/80">
            We design and implement the structures, documents, and frameworks
            your organisation needs to function consistently and accountably.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="space-y-8">
          {services.map((s, i) => (
            <article
              key={s.slug}
              className="grid gap-8 rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-card)] md:grid-cols-[1fr_1.2fr] md:p-10"
            >
              <div>
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-navy text-primary-foreground">
                    <s.icon className="h-6 w-6" />
                  </span>
                  <span className="font-serif text-sm font-bold text-muted-foreground">
                    0{i + 1}
                  </span>
                </div>
                <h2 className="mt-5 text-2xl leading-snug text-card-foreground">{s.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.summary}</p>
              </div>
              <ul className="grid content-center gap-3 sm:grid-cols-2">
                {s.points.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-sm text-foreground">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                    {p}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-16 rounded-2xl bg-secondary p-10 text-center">
          <h2 className="text-2xl md:text-3xl">Not sure where to start?</h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Book a consultation and we'll assess your organisation and recommend
            the systems that will make the biggest difference first.
          </p>
          <Link
            to="/contact"
            className="mt-7 inline-flex items-center gap-2 rounded-md bg-navy px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Book a consultation <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}
