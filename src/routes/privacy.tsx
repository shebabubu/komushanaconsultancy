import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy policy — Komushana Consultancy" },
      { name: "description", content: "How Komushana Consultancy collects, uses, keeps and protects the information you share through enquiries." },
      { property: "og:title", content: "Privacy policy — Komushana Consultancy" },
      { property: "og:description", content: "How Komushana Consultancy collects, uses, keeps and protects the information you share through enquiries." },
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
        <h1 className="text-4xl">Privacy policy</h1>
        <p className="mt-6 leading-relaxed text-foreground">How Komushana Consultancy collects, uses, keeps and protects the information you share through enquiries.</p>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          Draft wording — to be reviewed by a qualified Ugandan legal professional, including against the Data Protection and Privacy Act, 2019. Questions: shebanahurira@gmail.com.
        </p>
      </section>
    </PageLayout>
  );
}
