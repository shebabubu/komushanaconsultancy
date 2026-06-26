import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import aboutImg from "@/assets/about.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Komushana Consultancy" },
      {
        name: "description",
        content:
          "Komushana Consultancy is a Kampala-based organisational development and systems consultancy that builds the operational foundations organisations need to grow sustainably.",
      },
      { property: "og:title", content: "About — Komushana Consultancy" },
      {
        property: "og:description",
        content:
          "We help organisations move from informal, founder-dependent operations to structured, system-driven institutions.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
      { property: "og:image", content: aboutImg },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const values = [
  { title: "We build, we don't just advise", body: "Our deliverables are working systems — policies, frameworks, structures — not recommendations alone." },
  { title: "Accountability by design", body: "We embed reporting cultures and governance so organisations stay consistent and transparent." },
  { title: "Context first", body: "Everything is tailored to your size, sector, and Ugandan legal requirements." },
  { title: "Sustainable independence", body: "We design organisations that run with or without the founder in the room." },
];

function About() {
  return (
    <PageLayout>
      <section className="bg-navy text-primary-foreground">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">About us</span>
          <h1 className="mt-3 max-w-3xl text-balance text-4xl md:text-5xl">
            An organisational development and systems consultancy.
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <p className="text-lg leading-relaxed text-foreground">
              Komushana Consultancy is a Kampala-based organisational development
              and systems consultancy specialising in building the operational
              foundations that organisations need to run professionally, grow
              sustainably, and deliver results.
            </p>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              We work with NGOs, community-based organisations, and growing
              businesses — particularly startups and SMEs — at the stage where
              they need to move from informal, founder-dependent operations to
              structured, system-driven institutions.
            </p>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              That means we don't just advise — we build. We design and implement
              the actual systems, documents, frameworks, and governance
              structures that allow an organisation to function consistently and
              accountably, with or without the founder in the room.
            </p>
          </div>
          <img
            src={aboutImg}
            alt="A diverse team meeting around a boardroom table in a modern office"
            width={1200}
            height={1000}
            loading="lazy"
            className="rounded-2xl border border-border object-cover shadow-[var(--shadow-elegant)]"
          />
        </div>
      </section>

      <section className="bg-secondary/50">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <span className="text-sm font-semibold uppercase tracking-wider text-navy-soft">Our approach</span>
          <h2 className="mt-2 text-3xl md:text-4xl">What guides our work</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {values.map((v) => (
              <div key={v.title} className="rounded-xl border border-border bg-card p-7 shadow-[var(--shadow-card)]">
                <h3 className="text-lg text-card-foreground">{v.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="rounded-2xl bg-navy p-10 text-center text-primary-foreground md:p-14">
          <h2 className="text-3xl text-primary-foreground">Ready to formalise and grow?</h2>
          <p className="mx-auto mt-3 max-w-xl text-primary-foreground/75">
            Let's talk about the foundations your organisation needs next.
          </p>
          <Link
            to="/contact"
            className="mt-7 inline-flex items-center gap-2 rounded-md bg-gold px-6 py-3 text-sm font-semibold text-gold-foreground transition-opacity hover:opacity-90"
          >
            Book a consultation <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}
