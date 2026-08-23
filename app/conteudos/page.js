import PageChrome from "@/components/PageChrome";
import ContentGrid from "@/components/ContentGrid";
import posts from "@/data/posts.json";
import { deriveTags, tagLabel, formatDate, excerptFor } from "@/lib/content-tags";

export const metadata = {
  title: "Conteúdos — Neuro-Sono",
  description: "Artigos da Clínica Neuro-Sono sobre distúrbios do sono, exames e avaliações neurológicas.",
  alternates: {
    canonical: "/conteudos/",
    languages: { "pt-BR": "/conteudos/", "x-default": "/conteudos/" },
  },
};

function stripAccents(s) {
  return s.normalize("NFKD").replace(/[̀-ͯ]/g, "").toLowerCase();
}

export default function ConteudosPage() {
  const sorted = [...posts].sort((a, b) => {
    const da = new Date(a.date_published || a.date_modified || 0).getTime();
    const db = new Date(b.date_published || b.date_modified || 0).getTime();
    return db - da;
  });

  const enriched = sorted.map((post) => {
    const tagIds = deriveTags(post);
    const dateInfo = formatDate(post.date_published) || formatDate(post.date_modified);
    return {
      ...post,
      tagIds,
      primaryTagLabel: tagLabel(tagIds[0]),
      dateDisplay: dateInfo?.display ?? null,
      searchBlob: stripAccents(`${post.title} ${excerptFor(post, 300)}`),
    };
  });

  const [featured, ...restHero] = enriched;
  const heroList = restHero.slice(0, 3);
  const gridPosts = enriched.slice(4);
  const featuredExcerpt = excerptFor(featured, 150);

  return (
    <PageChrome variant="subpage" currentHref="/conteudos/" pageLabel="Conteúdos">
      <section className="content-index section-light">
        <div className="shell">
          <div className="content-index-heading">
            <p className="eyebrow" data-reveal>
              Conteúdos
            </p>
            <h1 data-reveal>Ciência do sono, explicada com clareza.</h1>
          </div>

          <div className="content-hero">
            <a className="content-featured" href={`/conteudos/${featured.site_slug}/`}>
              <div className="content-featured-media">
                {featured.hero_local && <img src={featured.hero_local} alt="" loading="eager" decoding="async" />}
                <span className="content-tag-pill">{featured.primaryTagLabel}</span>
              </div>
              <div className="content-featured-body">
                {featured.dateDisplay && <span className="content-featured-date">{featured.dateDisplay}</span>}
                <h2 className="content-featured-title">{featured.title}</h2>
                {featuredExcerpt && <p className="content-featured-excerpt">{featuredExcerpt}</p>}
              </div>
            </a>

            <div className="content-hero-list">
              {heroList.map((post) => (
                <a key={post.site_slug} className="content-hero-item" href={`/conteudos/${post.site_slug}/`}>
                  {post.hero_local ? (
                    <div className="content-hero-thumb">
                      <img src={post.hero_local} alt="" loading="lazy" decoding="async" />
                    </div>
                  ) : (
                    <div className="content-hero-thumb content-card-fallback">
                      <div className="content-card-fallback-ring">
                        <span></span>
                        <span></span>
                      </div>
                    </div>
                  )}
                  <div>
                    {post.dateDisplay && <span className="content-hero-item-date">{post.dateDisplay}</span>}
                    <h3 className="content-hero-item-title">{post.title}</h3>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <ContentGrid posts={gridPosts} />
        </div>
      </section>
    </PageChrome>
  );
}
