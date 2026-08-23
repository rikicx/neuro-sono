"use client";

import { useMemo, useState } from "react";
import { ALL_TAGS } from "@/lib/content-tags";

function stripAccents(s) {
  return s.normalize("NFKD").replace(/[̀-ͯ]/g, "").toLowerCase();
}

export default function ContentGrid({ posts }) {
  const [activeTag, setActiveTag] = useState("all");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const normalizedQuery = stripAccents(query.trim());
    return posts.filter((post) => {
      const matchesTag = activeTag === "all" || post.tagIds.includes(activeTag);
      const matchesQuery = !normalizedQuery || post.searchBlob.includes(normalizedQuery);
      return matchesTag && matchesQuery;
    });
  }, [posts, activeTag, query]);

  return (
    <>
      <div className="content-filter-bar">
        <div className="content-search">
          <svg viewBox="0 0 20 20" aria-hidden="true">
            <circle cx="9" cy="9" r="6.5" />
            <path d="m18 18-4.5-4.5" />
          </svg>
          <input
            type="search"
            placeholder="Buscar por assunto, exame ou palavra-chave"
            aria-label="Buscar conteúdos"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </div>
        <div className="content-tags">
          <button
            type="button"
            className={`content-tag${activeTag === "all" ? " is-active" : ""}`}
            onClick={() => setActiveTag("all")}
          >
            Todos
          </button>
          {ALL_TAGS.map((tag) => (
            <button
              key={tag.id}
              type="button"
              className={`content-tag${activeTag === tag.id ? " is-active" : ""}`}
              onClick={() => setActiveTag(tag.id)}
            >
              {tag.label}
            </button>
          ))}
        </div>
      </div>

      <div className="content-grid">
        {filtered.map((post) => (
          <a key={post.site_slug} className="content-card" href={`/conteudos/${post.site_slug}/`}>
            {post.hero_local ? (
              <div className="content-card-media">
                <img src={post.hero_local} alt="" loading="lazy" decoding="async" />
                <span className="content-tag-pill">{post.primaryTagLabel}</span>
              </div>
            ) : (
              <div className="content-card-media content-card-fallback">
                <div className="content-card-fallback-ring">
                  <span></span>
                  <span></span>
                </div>
                <span className="content-tag-pill">{post.primaryTagLabel}</span>
              </div>
            )}
            <div className="content-card-body">
              {post.dateDisplay && <span className="content-card-date">{post.dateDisplay}</span>}
              <h3 className="content-card-title">{post.title}</h3>
            </div>
          </a>
        ))}
      </div>
      <p className={`content-empty${filtered.length === 0 ? " is-visible" : ""}`}>
        Nenhum conteúdo encontrado para essa busca.
      </p>
    </>
  );
}
