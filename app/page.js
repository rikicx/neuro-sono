import PageChrome from "@/components/PageChrome";
import ProcedureOverlay from "@/components/ProcedureOverlay";

export const metadata = {
  title: "Neuro-Sono — Neurologia e Sono",
  description: "Clínica Neuro-Sono — estudo dos distúrbios do sono e avaliações neurológicas em São Paulo.",
};

const PROCEDURES = [
  {
    number: "01",
    motif: "pulse",
    eyebrow: "Estudo do sono",
    title: "Polissonografia",
    text: "Exame destacado pela Neuro-Sono para o estudo dos distúrbios do sono.",
    href: "/procedimentos/polissonografia/",
    secondary: false,
  },
  {
    number: "02",
    motif: "wave",
    eyebrow: "Avaliação neurológica",
    title: "Eletroencefalograma",
    text: "Exame apresentado pela clínica como uma de suas principais frentes de avaliação.",
    href: "/procedimentos/eletroencefalograma/",
    secondary: true,
  },
  {
    number: "03",
    motif: "pulse",
    eyebrow: "Tratamento da insônia",
    title: "TCC para Insônia",
    text: "Terapia Cognitivo-Comportamental para insônia crônica, com foco em mudanças de pensamento e comportamento que duram além da terapia.",
    href: "/procedimentos/tcc-insonia/",
    secondary: false,
  },
  {
    number: "04",
    motif: "pulse",
    eyebrow: "Tratamento da apneia",
    title: "CPAP, BIPAP e Servo-Ventilador",
    text: "Ajuste e acompanhamento dos equipamentos para Apneia Obstrutiva do Sono, com uma equipe treinada para cada caso.",
    href: "/procedimentos/cpap-bipap-servo-ventilador/",
    secondary: true,
  },
  {
    number: "05",
    motif: "wave",
    eyebrow: "Nervos e músculos",
    title: "Eletroneuromiografia",
    text: "Exame para diagnóstico e acompanhamento de condições que afetam nervos e músculos.",
    href: "/procedimentos/eletroneuromiografia/",
    secondary: false,
  },
  {
    number: "06",
    motif: "wave",
    eyebrow: "Funções cognitivas",
    title: "Avaliação Neuropsicológica",
    text: "Bateria de testes para avaliar memória, atenção e outras funções cognitivas.",
    href: "/procedimentos/avaliacao-neuropsicologica/",
    secondary: true,
  },
  {
    number: "07",
    motif: "pulse",
    eyebrow: "Sonolência excessiva",
    title: "Testes de Sonolência Diurna",
    text: "Avaliações objetivas da sonolência e da capacidade de permanecer acordado durante o dia.",
    href: "/procedimentos/sonolencia-diurna/",
    secondary: false,
  },
];

const ARTICLES = [
  { no: "01", type: "Procedimentos", title: "Botox no tratamento do bruxismo", href: "/conteudos/botox-no-tratamento-do-bruxismo/" },
  {
    no: "02",
    type: "Distúrbios do sono",
    title: "Doença de Willis-Ekbom ou síndrome das pernas inquietas?",
    href: "/conteudos/doenca-de-willis-ekbom-ou-sindrome-das-pernas-inquietas/",
  },
  { no: "03", type: "Orientação", title: "Cuidado com a faixa do ronco!", href: "/conteudos/cuidado-com-a-faixa-do-ronco/" },
];

const SOCIAL_TILES = Array.from({ length: 6 });

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  name: "Clínica Neuro-Sono",
  telephone: "+55 11 5081-6629",
  email: "neuro.sono.394@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rua Cláudio Rossi, 394",
    addressLocality: "São Paulo",
    addressRegion: "SP",
    addressCountry: "BR",
  },
};

export default function HomePage() {
  return (
    <PageChrome variant="home" currentHref="/" pageLabel="Conceito de repaginação">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }} />
      <section className="hero" id="inicio" aria-labelledby="hero-title" data-hero-scene>
        <div className="hero-stage">
          <div className="hero-media" data-parallax="0.18" aria-hidden="true"></div>
          <div className="hero-noise" aria-hidden="true"></div>
          <svg className="hero-wave" viewBox="0 0 1440 240" preserveAspectRatio="none" aria-hidden="true">
            <path
              className="hero-wave-line hero-wave-line-a"
              d="M-40 140 C 20 140 60 137 110 140 C 145 142 170 137 200 140 C 230 142 250 135 275 140 C 305 144 325 120 348 140 C 365 155 380 92 397 140 C 412 188 430 68 448 140 C 464 196 484 78 502 140 C 520 178 538 105 558 140 C 580 158 600 126 625 140 C 660 146 685 136 720 140 C 760 144 790 136 825 140 C 860 143 886 130 915 140 C 945 151 965 102 988 140 C 1005 168 1025 82 1044 140 C 1060 190 1080 75 1100 140 C 1118 180 1135 103 1155 140 C 1180 158 1200 130 1230 140 C 1280 146 1335 136 1480 140"
            />
            <path
              className="hero-wave-line hero-wave-line-b"
              d="M-40 168 C 70 164 120 171 190 166 C 240 162 270 177 315 166 C 350 156 375 185 410 166 C 445 145 470 190 510 166 C 560 138 600 192 650 166 C 700 140 750 190 800 166 C 850 152 875 175 915 166 C 945 160 965 172 990 166 L 1022 166 L 1037 126 L 1052 205 L 1068 144 L 1088 166 C 1140 178 1180 155 1230 166 C 1300 175 1360 160 1480 166"
            />
            <path
              className="hero-wave-pulse hero-wave-pulse-a"
              d="M-40 140 C 20 140 60 137 110 140 C 145 142 170 137 200 140 C 230 142 250 135 275 140 C 305 144 325 120 348 140 C 365 155 380 92 397 140 C 412 188 430 68 448 140 C 464 196 484 78 502 140 C 520 178 538 105 558 140 C 580 158 600 126 625 140 C 660 146 685 136 720 140 C 760 144 790 136 825 140 C 860 143 886 130 915 140 C 945 151 965 102 988 140 C 1005 168 1025 82 1044 140 C 1060 190 1080 75 1100 140 C 1118 180 1135 103 1155 140 C 1180 158 1200 130 1230 140 C 1280 146 1335 136 1480 140"
            />
            <path
              className="hero-wave-pulse hero-wave-pulse-b"
              d="M-40 168 C 70 164 120 171 190 166 C 240 162 270 177 315 166 C 350 156 375 185 410 166 C 445 145 470 190 510 166 C 560 138 600 192 650 166 C 700 140 750 190 800 166 C 850 152 875 175 915 166 C 945 160 965 172 990 166 L 1022 166 L 1037 126 L 1052 205 L 1068 144 L 1088 166 C 1140 178 1180 155 1230 166 C 1300 175 1360 160 1480 166"
            />
          </svg>

          <div className="hero-content shell">
            <p className="eyebrow hero-eyebrow" data-reveal>
              Neurologia · Sono · Ciência
            </p>
            <h1 id="hero-title">
              <span className="line-mask">
                <span>Compreender o sono.</span>
              </span>
              <span className="line-mask">
                <span className="italic">Cuidar por inteiro.</span>
              </span>
            </h1>
            <div className="hero-bottom" data-reveal>
              <p>Experiência interdisciplinar no estudo dos distúrbios do sono e em avaliações neurológicas.</p>
              <div className="hero-ctas">
                <a className="button button-light" href="https://wa.me/5511940397143" target="_blank" rel="noreferrer">
                  Falar com a equipe
                  <svg viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M4 10h12M11 5l5 5-5 5" />
                  </svg>
                </a>
                <a className="text-link" href="#sobre">
                  Conheça a clínica
                </a>
              </div>
            </div>
          </div>
          <div className="scroll-cue" aria-hidden="true">
            <span></span>Role para explorar
          </div>
        </div>
      </section>

      <section className="services" id="exames" aria-label="Procedimentos em destaque">
        <div className="shell services-heading">
          <div className="services-heading-copy">
            <p className="eyebrow" data-reveal>
              Procedimentos em destaque
            </p>
            <h2 className="display-title" data-reveal>
              O sono deixa sinais. <em>A ciência ajuda a lê-los.</em>
            </h2>
          </div>
          <div className="services-nav">
            <button className="carousel-arrow" type="button" data-services-prev aria-label="Procedimento anterior">
              <svg viewBox="0 0 20 20" aria-hidden="true">
                <path d="M16 10H4M9 5l-5 5 5 5" />
              </svg>
            </button>
            <button className="carousel-arrow" type="button" data-services-next aria-label="Próximo procedimento">
              <svg viewBox="0 0 20 20" aria-hidden="true">
                <path d="M4 10h12M11 5l5 5-5 5" />
              </svg>
            </button>
          </div>
        </div>

        <div className="services-track" data-services-track>
          {PROCEDURES.map((proc) => (
            <article key={proc.href} className={`exam-card${proc.secondary ? " exam-card-secondary" : ""}`} data-reveal>
              {proc.motif === "pulse" ? (
                <div className="exam-card-motif is-pulse" aria-hidden="true">
                  <span></span>
                  <span></span>
                </div>
              ) : (
                <div className="exam-card-motif is-wave" aria-hidden="true">
                  <svg viewBox="0 0 120 60" preserveAspectRatio="none">
                    <path d="M0 30h14l6-16 8 32 8-40 8 40 8-24 6 8h14" />
                  </svg>
                </div>
              )}
              <div className="exam-number">{proc.number}</div>
              <div className="exam-copy">
                <p className="eyebrow">{proc.eyebrow}</p>
                <h3>{proc.title}</h3>
                <p>{proc.text}</p>
                <a className="card-link" href={proc.href} data-procedure-trigger>
                  <span>Ver detalhes</span>
                  <svg viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M4 10h12M11 5l5 5-5 5" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <ProcedureOverlay />

      <section className="intro intro-scene section-light" id="sobre" data-intro-scene>
        <div className="intro-sticky">
          <div className="intro-symbol" aria-hidden="true">
            <i></i>
            <i></i>
            <i></i>
            <i></i>
          </div>
          <div className="shell intro-grid">
            <div className="intro-meta">
              <p className="eyebrow">Sobre a Neuro-Sono</p>
              <p className="section-index" aria-hidden="true">
                01
              </p>
              <div className="intro-timeline" aria-hidden="true">
                <span>Década de 90</span>
                <i></i>
                <span>Hoje</span>
              </div>
            </div>
            <div className="intro-copy-stage">
              <h2 className="display-title">Uma jornada de cuidado guiada por experiência, escuta e precisão.</h2>
              <p className="intro-copy">
                A Neuro-Sono atua no diagnóstico e tratamento dos problemas do sono desde a década de 90, com atendimento
                interdisciplinar e equipe especializada.
              </p>
              <a className="text-link dark intro-link" href="/equipe/">
                Conheça o corpo clínico
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="story" aria-label="Diferenciais da Neuro-Sono" data-story>
        <div className="story-sticky">
          <div className="story-scanline" aria-hidden="true"></div>
          <div className="story-orbit" aria-hidden="true">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="shell story-layout">
            <div className="story-aside">
              <p className="eyebrow">Uma visão integrada</p>
              <div className="story-counter">
                <span data-story-current>01</span>
                <i></i>
                <span>03</span>
              </div>
            </div>
            <div className="story-steps">
              <article className="story-step is-active" data-story-step="0">
                <span className="story-ghost" aria-hidden="true">
                  História
                </span>
                <span className="story-kicker">Experiência</span>
                <h3>Desde a década de 90 estudando as relações entre sono e saúde.</h3>
              </article>
              <article className="story-step" data-story-step="1">
                <span className="story-ghost" aria-hidden="true">
                  Integração
                </span>
                <span className="story-kicker">Integração</span>
                <h3>Atendimento interdisciplinar para observar cada paciente de forma ampla.</h3>
              </article>
              <article className="story-step" data-story-step="2">
                <span className="story-ghost" aria-hidden="true">
                  Precisão
                </span>
                <span className="story-kicker">Qualidade</span>
                <h3>Certificações profissionais no Brasil e no exterior, além do selo da SBNC.</h3>
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
            Cuidado interdisciplinar
          </p>
          <blockquote data-reveal>
            &ldquo;Dormir é um processo complexo. Entender seus sinais pede tempo, conhecimento e diferentes perspectivas.&rdquo;
          </blockquote>
          <p className="manifesto-note" data-reveal>
            Uma nova experiência digital para apresentar a trajetória, a ciência e os canais de atendimento da Neuro-Sono com
            mais clareza.
          </p>
        </div>
      </section>

      <section className="science section-light" id="ciencia">
        <div className="shell science-heading">
          <div>
            <p className="eyebrow" data-reveal>
              Conteúdo científico
            </p>
            <h2 className="display-title" data-reveal>
              Conhecimento que
              <br />
              <em>continua em movimento.</em>
            </h2>
          </div>
        </div>

        <div className="shell article-grid">
          {ARTICLES.map((article) => (
            <a key={article.href} className="article-card" data-reveal href={article.href}>
              <span className="article-no">{article.no}</span>
              <span className="article-type">{article.type}</span>
              <h3>{article.title}</h3>
              <svg className="article-arrow" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M5 15 15 5M7 5h8v8" />
              </svg>
            </a>
          ))}
        </div>
      </section>

      <section className="social-feed section-light" id="instagram">
        <div className="shell social-feed-heading">
          <div>
            <p className="eyebrow" data-reveal>
              @neurosono_
            </p>
            <h2 className="display-title" data-reveal>
              Bastidores e conteúdo <em>direto do Instagram.</em>
            </h2>
          </div>
          <a className="button button-accent" href="https://www.instagram.com/neurosono_/" target="_blank" rel="noreferrer">
            Seguir no Instagram
            <svg viewBox="0 0 20 20" aria-hidden="true">
              <path d="M4 10h12M11 5l5 5-5 5" />
            </svg>
          </a>
        </div>

        <div className="shell social-feed-grid" data-social-feed>
          {SOCIAL_TILES.map((_, index) => (
            <a key={index} className="social-tile" href="https://www.instagram.com/neurosono_/" target="_blank" rel="noreferrer">
              <div className="social-tile-placeholder">
                <svg className="social-tile-icon" viewBox="0 0 20 20" aria-hidden="true">
                  <rect x="3" y="3" width="14" height="14" rx="4" />
                  <circle cx="10" cy="10" r="3.2" />
                  <circle cx="14.1" cy="5.9" r="0.7" fill="currentColor" stroke="none" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="contact" id="contato">
        <div className="shell contact-grid">
          <div className="contact-main">
            <p className="eyebrow" data-reveal>
              Estamos na Vila Mariana
            </p>
            <h2 className="display-title" data-reveal>
              Vamos conversar sobre o seu sono?
            </h2>
            <div className="contact-actions" data-reveal>
              <a className="button button-accent" href="https://wa.me/5511940397143" target="_blank" rel="noreferrer">
                Conversar pelo WhatsApp
                <svg viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M4 10h12M11 5l5 5-5 5" />
                </svg>
              </a>
              <a className="button button-outline" href="tel:+551150816629">
                Ligar para a clínica
              </a>
            </div>
          </div>

          <div className="contact-details" data-reveal>
            <div>
              <span>Endereço</span>
              <a href="https://www.google.com/maps/search/?api=1&query=Rua+Cl%C3%A1udio+Rossi+394+S%C3%A3o+Paulo" target="_blank" rel="noreferrer">
                Rua Cláudio Rossi, 394
                <br />
                Vila Mariana · São Paulo
              </a>
            </div>
            <div>
              <span>Telefone</span>
              <a href="tel:+551150816629">(11) 5081-6629</a>
            </div>
            <div>
              <span>WhatsApp</span>
              <a href="https://wa.me/5511940397143" target="_blank" rel="noreferrer">
                (11) 94039-7143
              </a>
            </div>
            <div>
              <span>E-mail</span>
              <a href="mailto:neuro.sono.394@gmail.com">neuro.sono.394@gmail.com</a>
            </div>
          </div>
        </div>

        <div className="exam-banner shell" data-reveal>
          <div>
            <span className="eyebrow">Área do paciente</span>
            <h3>Seus resultados, em um acesso direto.</h3>
          </div>
          <a className="button button-light" href="https://core.feegow.com/patient-interface/185r/login" target="_blank" rel="noreferrer">
            Acessar resultados
            <svg viewBox="0 0 20 20" aria-hidden="true">
              <path d="M5 15 15 5M7 5h8v8" />
            </svg>
          </a>
        </div>
      </section>
    </PageChrome>
  );
}
