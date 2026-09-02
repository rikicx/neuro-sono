import PageChrome from "@/components/PageChrome";

export const metadata = {
  title: "Corpo Clínico — Neuro-Sono",
  description: "Conheça o corpo clínico e as equipes técnicas da Clínica Neuro-Sono.",
  alternates: {
    canonical: "/equipe/",
    languages: { "pt-BR": "/equipe/", "x-default": "/equipe/" },
  },
};

const TEAM_GROUPS = [
  {
    id: "group-neuro-sono",
    number: "01",
    title: "Neurologia e Distúrbios do Sono",
    people: [
      { photo: "gilmar.webp", name: "Dr. Gilmar Fernandes do Prado", info: "CRM 49.905" },
      { photo: "taina.webp", name: "Dr. Tainã Paulo Zanata Trombetta", info: "CRM 195.323" },
      { photo: "pedro.webp", name: "Dr. Pedro Barbosa Oliveira", info: "CRM 202.914" },
    ],
  },
  {
    id: "group-psiquiatria",
    number: "02",
    title: "Psiquiatria e Distúrbios do Sono",
    people: [{ photo: "lucas.webp", name: "Dr. Lucas Martins Teixeira", info: "CRM 242.065" }],
  },
  {
    id: "group-neuropediatria",
    number: "03",
    title: "Neurologia e Neuropediatria",
    people: [
      { photo: "melina.webp", photoClass: "person-photo--melina", name: "Dra. Melina Frota", info: "CRM 194.310" },
      { photo: "vinicius.webp", name: "Dr. Vinicius Lopes Braga", info: "CRM 200.141" },
      { photo: "pedro.webp", name: "Dr. Pedro Barbosa Oliveira", info: "CRM 202.914" },
    ],
  },
  {
    id: "group-clinica",
    number: "04",
    title: "Clínica Médica e Distúrbios do Sono",
    people: [{ photo: "victor.webp", name: "Dr. Victor Liberale", info: "CRM 228.680" }],
  },
  {
    id: "group-psicologia",
    number: "05",
    title: "Psicologia e Terapia Cognitivo-Comportamental",
    people: [
      { photo: "leticia.webp", name: "Dra. Letícia Molina", info: "TCCi · CRP SP 140677" },
      { photo: "denise.webp", name: "Dra. Denise Vettorazzo", info: "Avaliação Neuropsicológica · CRP 06/40937-1" },
    ],
  },
  {
    id: "group-fisio",
    number: "06",
    title: "Fisioterapia e Adaptação de CPAP",
    people: [{ photo: "patricia.webp", name: "Dra. Patrícia de Oliveira Moura", info: "Fisioterapeuta · CREFITO 401924F" }],
  },
  {
    id: "group-odonto",
    number: "07",
    title: "Odontologia e Sono",
    textOnly: true,
    people: [
      { name: "Dr. Marco Antonio Cardoso Machado" },
      { name: "Dra. Maria Ligia Juliano" },
      { name: "Dr. Rafael Balsalobre" },
    ],
  },
];

export default function EquipePage() {
  return (
    <PageChrome variant="subpage" currentHref="/equipe/" pageLabel="Corpo clínico">
      <section className="subpage-hero team-hero" aria-labelledby="page-title">
        <div className="subpage-hero-media" data-scroll-zoom aria-hidden="true"></div>
        <div className="subpage-hero-shade" aria-hidden="true"></div>
        <div className="shell subpage-hero-content">
          <p className="eyebrow" data-reveal>
            Corpo clínico
          </p>
          <h1 id="page-title">
            <span className="line-mask">
              <span>Diferentes saberes.</span>
            </span>
            <span className="line-mask">
              <span className="italic">Um cuidado integrado.</span>
            </span>
          </h1>
          <div className="subpage-hero-bottom" data-reveal>
            <p>
              Profissionais de neurologia, sono, psiquiatria, psicologia, fisioterapia e odontologia reunidos em uma
              abordagem interdisciplinar.
            </p>
            <span className="page-marker">01 · Equipe</span>
          </div>
        </div>
      </section>

      <section className="team-intro section-light">
        <div className="shell team-intro-grid">
          <p className="eyebrow" data-reveal>
            Especialidades que se conectam
          </p>
          <h2 className="display-title" data-reveal>
            Uma linguagem mais uniforme e coesa para cada paciente compreender sua saúde.
          </h2>
        </div>
      </section>

      <section className="team-directory" aria-label="Profissionais da Neuro-Sono">
        <div className="shell team-groups">
          {TEAM_GROUPS.map((group) => (
            <section key={group.id} className="team-group" data-reveal aria-labelledby={group.id}>
              <header>
                <span>{group.number}</span>
                <h2 id={group.id}>{group.title}</h2>
              </header>
              <div className="people-list">
                {group.people.map((person) =>
                  group.textOnly ? (
                    <article key={person.name} className="person-card person-card--text">
                      <div className="person-info">
                        <h3>{person.name}</h3>
                      </div>
                    </article>
                  ) : (
                    <article key={person.name} className="person-card">
                      <div className={`person-photo${person.photoClass ? ` ${person.photoClass}` : ""}`}>
                        <img src={`/assets/team/${person.photo}`} alt={person.name} loading="lazy" decoding="async" />
                      </div>
                      <div className="person-info">
                        <h3>{person.name}</h3>
                        <p>{person.info}</p>
                      </div>
                    </article>
                  ),
                )}
              </div>
            </section>
          ))}
        </div>
      </section>

      <section className="technical-team section-dark" aria-labelledby="technical-title">
        <div className="shell technical-grid">
          <div>
            <p className="eyebrow" data-reveal>
              Equipes técnicas
            </p>
            <h2 className="display-title" id="technical-title" data-reveal>
              Precisão também acontece nos bastidores.
            </h2>
          </div>
          <div className="technical-lists">
            <div data-reveal>
              <span>Polissonografia · PSG</span>
              <p>Isabel Cristina Durvanel Yogi</p>
              <p>Kátia Zanchetta</p>
            </div>
            <div data-reveal>
              <span>Eletroencefalograma · EEG</span>
              <p>Karina de Marco</p>
              <p>Katia de Marco Santoro</p>
              <p>Paula Calmona</p>
              <p>Gisele dos Santos</p>
              <p>Amanda Beck</p>
              <p>Tainá Soares</p>
              <p>Evelyn</p>
            </div>
          </div>
        </div>
      </section>

      <section className="team-cta">
        <div className="shell team-cta-inner" data-reveal>
          <div>
            <p className="eyebrow">Atendimento</p>
            <h2>Encontre o cuidado que faz sentido para você.</h2>
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
