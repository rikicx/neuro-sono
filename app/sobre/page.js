import PageChrome from "@/components/PageChrome";

export const metadata = {
  title: "Sobre — Neuro-Sono",
  description: "Conheça a história, o modelo interdisciplinar e as certificações da Clínica Neuro-Sono.",
  alternates: {
    canonical: "/sobre/",
    languages: { "pt-BR": "/sobre/", "x-default": "/sobre/" },
  },
};

export default function SobrePage() {
  return (
    <PageChrome variant="subpage" currentHref="/sobre/" pageLabel="Sobre a clínica">
      <section className="subpage-hero hero-generative" aria-labelledby="page-title">
        <div className="hero-rings" aria-hidden="true">
          <i></i>
        </div>
        <div className="subpage-hero-shade" aria-hidden="true"></div>
        <div className="shell subpage-hero-content">
          <p className="eyebrow" data-reveal>
            Sobre a Neuro-Sono
          </p>
          <h1 id="page-title">
            <span className="line-mask">
              <span>Uma jornada guiada</span>
            </span>
            <span className="line-mask">
              <span className="italic">por experiência e escuta.</span>
            </span>
          </h1>
          <div className="subpage-hero-bottom" data-reveal>
            <p>
              Desde a década de 90 estudando o sono com rigor acadêmico e cuidado clínico, reunindo diferentes especialidades
              em um só olhar sobre cada paciente.
            </p>
            <span className="page-marker">01 · Sobre</span>
          </div>
        </div>
      </section>

      <section className="team-intro section-light">
        <div className="shell team-intro-grid">
          <p className="eyebrow" data-reveal>
            Desde 1989
          </p>
          <h2 className="display-title" data-reveal>
            Fundada pelo Dr. Gilmar Fernandes do Prado, neurofisiologista e professor da Universidade Federal de São Paulo,
            para unir rigor acadêmico e cuidado clínico no estudo do sono.
          </h2>
        </div>
      </section>

      <section className="story" aria-label="O que guia o cuidado na Neuro-Sono" data-story>
        <div className="story-sticky">
          <div className="story-scanline" aria-hidden="true"></div>
          <div className="story-orbit" aria-hidden="true">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="shell story-layout">
            <div className="story-aside">
              <p className="eyebrow">O que guia o cuidado</p>
              <div className="story-counter">
                <span data-story-current>01</span>
                <i></i>
                <span>03</span>
              </div>
            </div>
            <div className="story-steps">
              <article className="story-step is-active" data-story-step="0">
                <span className="story-ghost" aria-hidden="true">
                  Escuta
                </span>
                <span className="story-kicker">Interdisciplinaridade</span>
                <h3>Profissionais que conhecem as especialidades uns dos outros, para o paciente entender seu problema em uma linguagem só.</h3>
              </article>
              <article className="story-step" data-story-step="1">
                <span className="story-ghost" aria-hidden="true">
                  Formação
                </span>
                <span className="story-kicker">Formação</span>
                <h3>Equipe treinada dentro do mesmo modelo de cuidado, com certificações no Brasil e no exterior.</h3>
              </article>
              <article className="story-step" data-story-step="2">
                <span className="story-ghost" aria-hidden="true">
                  Precisão
                </span>
                <span className="story-kicker">Qualidade</span>
                <h3>Selo de qualidade da Sociedade Brasileira de Neurofisiologia Clínica.</h3>
              </article>
            </div>
          </div>
          <div className="story-progress" aria-hidden="true">
            <span data-story-progress></span>
          </div>
        </div>
      </section>

      <section className="manifesto section-dark">
        <div className="manifesto-orb" data-parallax="-0.08" aria-hidden="true"></div>
        <div className="shell manifesto-grid">
          <p className="eyebrow" data-reveal>
            Por que interdisciplinar
          </p>
          <blockquote data-reveal>&ldquo;A medicina do sono raramente tem uma única causa para investigar.&rdquo;</blockquote>
          <p className="manifesto-note" data-reveal>
            Apneia, insônia e parassonias podem ter origem neurológica, respiratória, psiquiátrica, odontológica ou
            comportamental — às vezes todas ao mesmo tempo. É por isso que a Neuro-Sono reúne essas especialidades em um só
            time.
            <a className="text-link" href="https://sbnc.org.br/" target="_blank" rel="noreferrer">
              Conheça o selo da SBNC
            </a>
          </p>
        </div>
      </section>

      <section className="team-cta">
        <div className="shell team-cta-inner" data-reveal>
          <div>
            <p className="eyebrow">Corpo clínico</p>
            <h2>Conheça quem cuida do seu sono, de perto.</h2>
          </div>
          <a className="button button-light" href="/equipe/">
            Ver a equipe
            <svg viewBox="0 0 20 20" aria-hidden="true">
              <path d="M4 10h12M11 5l5 5-5 5" />
            </svg>
          </a>
        </div>
      </section>
    </PageChrome>
  );
}
