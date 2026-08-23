import { notFound } from "next/navigation";
import PageChrome from "@/components/PageChrome";
import posts from "@/data/posts.json";
import { formatDate } from "@/lib/content-tags";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.site_slug }));
}

function metaDescription(desc, title) {
  const base = desc || title;
  const clean = base.replace(/\s+/g, " ").trim();
  return clean.length <= 300 ? clean : clean.slice(0, 297).trimEnd() + "...";
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = posts.find((p) => p.site_slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} — Neuro-Sono`,
    description: metaDescription(post.description, post.title),
    alternates: {
      canonical: `/conteudos/${slug}/`,
      languages: { "pt-BR": `/conteudos/${slug}/`, "x-default": `/conteudos/${slug}/` },
    },
  };
}

function Block({ block }) {
  switch (block.type) {
    case "heading":
      return <h2>{block.text}</h2>;
    case "subheading":
      return (
        <p className="article-subhead">
          <strong>{block.text}</strong>
        </p>
      );
    case "quote":
      return <blockquote dangerouslySetInnerHTML={{ __html: block.html }} />;
    case "list": {
      const Tag = block.ordered ? "ol" : "ul";
      return (
        <Tag>
          {block.items.map((item, index) => (
            <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
          ))}
        </Tag>
      );
    }
    case "image":
      return block.local ? (
        <figure>
          <img src={block.local} alt={block.alt || ""} loading="lazy" decoding="async" />
        </figure>
      ) : null;
    case "paragraph":
    default:
      return <p dangerouslySetInnerHTML={{ __html: block.html }} />;
  }
}

export default async function ArticlePage({ params }) {
  const { slug } = await params;
  const post = posts.find((p) => p.site_slug === slug);
  if (!post) notFound();

  const dateInfo = formatDate(post.date_published) || formatDate(post.date_modified);
  const metaAuthor = post.author && post.author !== "Neuro-Sono" ? post.author : null;
  const bodyBlocks = post.blocks.filter((b) => !(b.type === "image" && b.local === post.hero_local));

  return (
    <PageChrome variant="subpage" currentHref="/conteudos/" pageLabel="Conteúdos" headerOnLight>
      <section className="procedure-page-section section-light">
        <div className="shell">
          <article className="procedure-page article-page">
            <header className="procedure-header">
              <a className="procedure-back" href="/conteudos/">
                <svg viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M4 10h12M11 5l5 5-5 5" />
                </svg>
                Conteúdos
              </a>
              <h1>{post.title}</h1>
              <div className="article-meta">
                {dateInfo && <time dateTime={dateInfo.iso}>{dateInfo.display}</time>}
                {dateInfo && metaAuthor && <span className="dot" aria-hidden="true"></span>}
                {metaAuthor && <span>{metaAuthor}</span>}
              </div>
            </header>

            {post.hero_local && (
              <div className="article-hero">
                <img src={post.hero_local} alt={post.title} loading="eager" decoding="async" />
              </div>
            )}

            <div className="article-body">
              {bodyBlocks.map((block, index) => (
                <Block key={index} block={block} />
              ))}
            </div>

            <div className="procedure-cta">
              <p>Tem dúvidas sobre o seu sono ou quer agendar uma avaliação?</p>
              <a className="button button-accent" href="https://wa.me/5511940397143" target="_blank" rel="noreferrer">
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
