import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Mail, MapPin, Phone, Clock, CheckCircle2 } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { services } from "@/data/services";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Komushana Consultancy" },
      {
        name: "description",
        content:
          "Book a consultation with Komushana Consultancy in Kampala. Tell us about your organisation and the systems you need to build.",
      },
      { property: "og:title", content: "Contact — Komushana Consultancy" },
      {
        property: "og:description",
        content: "Get in touch to start building the operational foundations your organisation needs.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

const contactDetails = [
  { icon: MapPin, label: "Office", value: "Kampala, Uganda" },
  { icon: Mail, label: "Email", value: "shebanahurira@gmail.com" },
  { icon: Phone, label: "Phone", value: "+256 752 973 828" },
  { icon: Clock, label: "Hours", value: "Mon – Fri, 9:00 – 17:00 EAT" },
];

function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = encodeURIComponent(`Consultation request — ${data.get("name")}`);
    const body = encodeURIComponent(
      `Name: ${data.get("name")}\nOrganisation: ${data.get("org")}\nEmail: ${data.get("email")}\nService: ${data.get("service")}\n\n${data.get("message")}`,
    );
    window.location.href = `mailto:shebanahurira@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <PageLayout>
      <section className="bg-navy text-primary-foreground">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">Contact</span>
          <h1 className="mt-3 max-w-3xl text-balance text-4xl md:text-5xl">
            Let's build your organisation's foundations.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-primary-foreground/80">
            Tell us where your organisation is today and what you'd like to
            achieve. We'll get back to you to arrange a consultation.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-[1fr_1.4fr]">
          <div className="space-y-6">
            {contactDetails.map((d) => (
              <div key={d.label} className="flex items-start gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-navy/5 text-navy">
                  <d.icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{d.label}</p>
                  <p className="mt-1 text-foreground">{d.value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-card)]">
            {sent ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <CheckCircle2 className="h-14 w-14 text-gold" />
                <h2 className="mt-5 text-2xl text-card-foreground">Thank you</h2>
                <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                  Your email client should have opened with your message. If not,
                  reach us directly at shebanahurira@gmail.com.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Full name" name="name" required />
                  <Field label="Organisation" name="org" />
                </div>
                <Field label="Email" name="email" type="email" required />
                <div>
                  <label htmlFor="service" className="text-sm font-medium text-foreground">
                    Service of interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="mt-1.5 w-full rounded-md border border-input bg-background px-3.5 py-2.5 text-sm text-foreground outline-none focus:border-ring focus:ring-2 focus:ring-ring/30"
                  >
                    <option value="">Select a service</option>
                    {services.map((s) => (
                      <option key={s.slug} value={s.title}>{s.title}</option>
                    ))}
                    <option value="Other">Other / Not sure yet</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    How can we help?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="mt-1.5 w-full rounded-md border border-input bg-background px-3.5 py-2.5 text-sm text-foreground outline-none focus:border-ring focus:ring-2 focus:ring-ring/30"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-md bg-navy px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
                >
                  Send message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="text-sm font-medium text-foreground">
        {label}
        {required && <span className="text-destructive"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-1.5 w-full rounded-md border border-input bg-background px-3.5 py-2.5 text-sm text-foreground outline-none focus:border-ring focus:ring-2 focus:ring-ring/30"
      />
    </div>
  );
}
