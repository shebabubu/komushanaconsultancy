import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & disclaimer — Komushana Consultancy" },
      { name: "description", content: "Komushana Consultancy is a consultancy, not a law firm. We do not provide legal representation and do not guarantee registrations, approvals or business outcomes." },
      { property: "og:title", content: "Terms & disclaimer — Komushana Consultancy" },
      { property: "og:description", content: "Komushana Consultancy is a consultancy, not a law firm. We do not provide legal representation and do not guarantee registrations, approvals or business outcomes." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <PageLayout>
      <section className="mx-auto max-w-3xl px-6 py-20">
        <h1 className="text-4xl">Terms & disclaimer</h1>
        <p className="mt-6 leading-relaxed text-foreground">Komushana Consultancy is a consultancy, not a law firm. We do not provide legal representation and do not guarantee registrations, approvals or business outcomes.</p>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          Draft wording — to be reviewed by a qualified Ugandan legal professional, including against the Data Protection and Privacy Act, 2019. Questions: shebanahurira@gmail.com.
        </p>
      </section>
    </PageLayout>
  );
}
