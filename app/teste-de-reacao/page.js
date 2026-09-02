import PageChrome from "@/components/PageChrome";
import ReactionTest from "@/components/ReactionTest";
import "./reaction-test.css";

export const metadata = {
  title: "Teste de Reação — Neuro-Sono",
  description: "Teste seu tempo de reação visual, uma ferramenta educativa da Clínica Neuro-Sono sobre atenção e estado de alerta.",
  alternates: {
    canonical: "/teste-de-reacao/",
    languages: { "pt-BR": "/teste-de-reacao/", "x-default": "/teste-de-reacao/" },
  },
};

export default function TesteDeReacaoPage() {
  return (
    <PageChrome variant="subpage" currentHref="/teste-de-reacao/" pageLabel="Teste de reação">
      <section className="subpage-hero hero-generative hero-compact" aria-labelledby="page-title">
        <div className="hero-rings" aria-hidden="true">
          <i></i>
        </div>
        <div className="subpage-hero-shade" aria-hidden="true"></div>
        <div className="shell subpage-hero-content">
          <p className="eyebrow" data-reveal>
            Ferramenta interativa
          </p>
          <h1 id="page-title">
            <span className="line-mask">
              <span>Teste o seu tempo</span>
            </span>
            <span className="line-mask">
              <span className="italic">de reação.</span>
            </span>
          </h1>
          <div className="subpage-hero-bottom" data-reveal>
            <p>
              Um exercício rápido sobre atenção e estado de alerta: a velocidade com que você percebe um estímulo visual e
              responde a ele. Depende de atenção, processamento cerebral e resposta motora, e costuma variar com a qualidade
              do sono.
            </p>
            <span className="page-marker">01 · Teste de Reação</span>
          </div>

          <div className="reaction-hero-figure" data-reveal>
            <svg className="reaction-hero-semaphore" viewBox="0 0 64 152" aria-hidden="true">
              <rect className="rh-housing" x="6" y="4" width="52" height="144" rx="26" />
              <circle className="rh-red" cx="32" cy="36" r="15" />
              <circle className="rh-amber" cx="32" cy="76" r="15" />
              <circle className="rh-green" cx="32" cy="116" r="15" />
            </svg>
            <p>Acidentes de trânsito, por exemplo, têm alta associação com sono de má qualidade.</p>
          </div>
        </div>
      </section>

      <section className="reaction-section" id="teste" aria-label="Teste de tempo de reação">
        <div className="shell reaction-shell">
          <ReactionTest />

          <aside className="reaction-scale" aria-label="Como interpretar o resultado">
            <p className="eyebrow">Como ler o resultado</p>
            <dl>
              <div>
                <dt>&lt; 0,250s</dt>
                <dd>Excelente: alerta e resposta acima da média.</dd>
              </div>
              <div>
                <dt>0,250 – 0,300s</dt>
                <dd>Normal: desempenho esperado para a maioria dos adultos.</dd>
              </div>
              <div>
                <dt>0,301 – 0,350s</dt>
                <dd>Levemente reduzido: pode refletir cansaço ou distração.</dd>
              </div>
              <div>
                <dt>0,351 – 0,450s</dt>
                <dd>Atenção: sinaliza queda no estado de alerta.</dd>
              </div>
              <div>
                <dt>&gt; 0,450s</dt>
                <dd>Redução importante: vale observar se há sonolência diurna.</dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>

      <section className="team-cta">
        <div className="shell team-cta-inner" data-reveal>
          <div>
            <p className="eyebrow">Sonolência diurna?</p>
            <h2>Se o resultado te chamou atenção, vamos conversar.</h2>
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
