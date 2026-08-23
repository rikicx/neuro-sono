import PageChrome from "@/components/PageChrome";

export const metadata = {
  title: "Estrutura — Neuro-Sono",
  description: "Conheça os quartos exclusivos de polissonografia e os consultórios da Clínica Neuro-Sono.",
  alternates: {
    canonical: "/estrutura/",
    languages: { "pt-BR": "/estrutura/", "x-default": "/estrutura/" },
  },
};

export default function EstruturaPage() {
  return (
    <PageChrome variant="subpage" currentHref="/estrutura/" pageLabel="Estrutura">
      <section className="subpage-hero structure-hero" aria-labelledby="page-title">
        <div className="subpage-hero-media" data-scroll-zoom aria-hidden="true"></div>
        <div className="subpage-hero-shade" aria-hidden="true"></div>
        <div className="shell subpage-hero-content">
          <p className="eyebrow" data-reveal>
            Nossa estrutura
          </p>
          <h1 id="page-title">
            <span className="line-mask">
              <span>Um ambiente pensado</span>
            </span>
            <span className="line-mask">
              <span className="italic">para o seu sono real.</span>
            </span>
          </h1>
          <div className="subpage-hero-bottom" data-reveal>
            <p>
              Quartos exclusivos para polissonografia e consultórios equipados, planejados para oferecer conforto,
              privacidade e segurança durante toda a sua experiência.
            </p>
            <span className="page-marker">01 · Estrutura</span>
          </div>
        </div>
      </section>

      <section className="team-intro section-light">
        <div className="shell team-intro-grid">
          <p className="eyebrow" data-reveal>
            Pensada para o sono, não só para o exame
          </p>
          <h2 className="display-title" data-reveal>
            Cama confortável, banheiro privativo e temperatura controlada — para reproduzir uma noite de sono o mais
            parecida possível com a de casa.
          </h2>
        </div>
      </section>

      <section className="story tour-story" aria-label="Um passeio pela clínica" data-story>
        <div className="story-sticky">
          <div className="story-scanline" aria-hidden="true"></div>
          <div className="story-orbit" aria-hidden="true">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="tour-scene" aria-hidden="true">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="shell story-layout">
            <div className="story-aside">
              <p className="eyebrow">Um passeio pela clínica</p>
              <div className="story-counter">
                <span data-story-current>01</span>
                <i></i>
                <span>03</span>
              </div>
            </div>
            <div className="story-steps">
              <article className="story-step is-active" data-story-step="0">
                <span className="story-ghost" aria-hidden="true">
                  Chegada
                </span>
                <span className="story-kicker">Chegada</span>
                <h3>Uma recepção pensada para acolher, sem pressa e sem burocracia.</h3>
              </article>
              <article className="story-step" data-story-step="1">
                <span className="story-ghost" aria-hidden="true">
                  Sono
                </span>
                <span className="story-kicker">Quarto de exame</span>
                <h3>Quartos exclusivos para polissonografia, com cama confortável e banheiro privativo.</h3>
              </article>
              <article className="story-step" data-story-step="2">
                <span className="story-ghost" aria-hidden="true">
                  Cuidado
                </span>
                <span className="story-kicker">Consultório</span>
                <h3>Consultórios equipados para consulta e acompanhamento, com atendimento humanizado do início ao fim.</h3>
              </article>
            </div>
          </div>
          <div className="story-progress" aria-hidden="true">
            <span data-story-progress></span>
          </div>
        </div>
      </section>

      <section className="team-directory" aria-label="Ambientes da clínica">
        <div className="shell">
          <p className="eyebrow room-grid-eyebrow" data-reveal>
            Os ambientes
          </p>
          <div className="room-grid" data-reveal>
            <article className="room-card">
              <div className="room-photo-slot">
                <img src="/assets/structure/entrada.webp" alt="Recepção da Clínica Neuro-Sono" loading="lazy" decoding="async" />
              </div>
              <div className="room-info">
                <h3>Entrada</h3>
                <p>Recepção acolhedora, pensada para reduzir a ansiedade de quem chega para o exame.</p>
              </div>
            </article>
            <article className="room-card">
              <div className="room-photo-slot">
                <img
                  src="/assets/structure/quarto.webp"
                  alt="Quarto exclusivo para polissonografia da Clínica Neuro-Sono"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="room-info">
                <h3>Quarto de exame</h3>
                <p>Cama confortável, banheiro privativo e temperatura controlada para adultos e crianças.</p>
              </div>
            </article>
            <article className="room-card">
              <div className="room-photo-slot" aria-hidden="true">
                <span>Fotografia em produção</span>
              </div>
              <div className="room-info">
                <h3>Consultório</h3>
                <p>Espaço equipado para consultas e acompanhamento com a equipe especializada.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="team-cta">
        <div className="shell team-cta-inner" data-reveal>
          <div>
            <p className="eyebrow">Agende sua visita</p>
            <h2>Venha conhecer a clínica antes do seu exame.</h2>
          </div>
          <a className="button button-light" href="https://wa.me/5511940397143" target="_blank" rel="noreferrer">
            Falar com a equipe
            <svg viewBox="0 0 20 20" aria-hidden="true">
              <path d="M4 10h12M11 5l5 5-5 5" />
            </svg>
          </a>
        </div>
      </section>
    </PageChrome>
  );
}
