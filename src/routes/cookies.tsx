import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";

export const Route = createFileRoute("/cookies")({
  head: () => ({
    meta: [
      { title: "Cookie policy — Komushana Consultancy" },
      { name: "description", content: "This website does not set advertising or tracking cookies. Your browser may store a small note so the intro animation shows only once per visit." },
      { property: "og:title", content: "Cookie policy — Komushana Consultancy" },
      { property: "og:description", content: "This website does not set advertising or tracking cookies. Your browser may store a small note so the intro animation shows only once per visit." },
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
        <h1 className="text-4xl">Cookie policy</h1>
        <p className="mt-6 leading-relaxed text-foreground">This website does not set advertising or tracking cookies. Your browser may store a small note so the intro animation shows only once per visit.</p>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          Draft wording — to be reviewed by a qualified Ugandan legal professional, including against the Data Protection and Privacy Act, 2019. Questions: shebanahurira@gmail.com.
        </p>
      </section>
    </PageLayout>
  );
}
