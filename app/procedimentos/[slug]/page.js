import { notFound } from "next/navigation";
import PageChrome from "@/components/PageChrome";
import procedures from "@/data/procedures.json";

export function generateStaticParams() {
  return procedures.map((proc) => ({ slug: proc.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const proc = procedures.find((p) => p.slug === slug);
  if (!proc) return {};
  return {
    title: proc.metaTitle,
    description: proc.metaDescription,
    alternates: {
      canonical: `/procedimentos/${slug}/`,
      languages: { "pt-BR": `/procedimentos/${slug}/`, "x-default": `/procedimentos/${slug}/` },
    },
  };
}

export default async function ProcedurePage({ params }) {
  const { slug } = await params;
  const proc = procedures.find((p) => p.slug === slug);
  if (!proc) notFound();

  return (
    <PageChrome variant="subpage" currentHref={`/procedimentos/${slug}/`} pageLabel="Procedimentos">
      <section className="procedure-page-section section-light">
        <div className="shell">
          <article className="procedure-page" data-procedure-content>
            <header className="procedure-header">
              <a className="procedure-back" href="/#exames">
                <svg viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M4 10h12M11 5l5 5-5 5" />
                </svg>
                Procedimentos
              </a>
              <p className="eyebrow">{proc.eyebrow}</p>
              <h1>{proc.title}</h1>
              <p className="procedure-lead">{proc.lead}</p>
            </header>

            <div className="procedure-body">
              {proc.sections.map((section) => (
                <section key={section.h2}>
                  <h2>{section.h2}</h2>
                  {section.blocks.map((block, index) =>
                    block.type === "p" ? (
                      <p key={index} dangerouslySetInnerHTML={{ __html: block.html }} />
                    ) : (
                      <ul key={index} className="procedure-list">
                        {block.items.map((item, itemIndex) => (
                          <li key={itemIndex} dangerouslySetInnerHTML={{ __html: item }} />
                        ))}
                      </ul>
                    ),
                  )}
                </section>
              ))}
            </div>

            <div className="procedure-cta">
              <p>{proc.ctaText}</p>
              <a className="button button-accent" href={proc.ctaHref} target="_blank" rel="noreferrer">
                Falar com a clínica
                <svg viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M4 10h12M11 5l5 5-5 5" />
                </svg>
              </a>
            </div>
          </article>
        </div>
      </section>
    </PageChrome>
  );
}
