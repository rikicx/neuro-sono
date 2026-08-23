import PageChrome from "@/components/PageChrome";

export const metadata = {
  title: "Resultados de Exames — Neuro-Sono",
  description: "Acesse os resultados dos seus exames na Clínica Neuro-Sono.",
  alternates: {
    canonical: "/resultados/",
    languages: { "pt-BR": "/resultados/", "x-default": "/resultados/" },
  },
};

export default function ResultadosPage() {
  return (
    <PageChrome variant="subpage" currentHref="/resultados/" pageLabel="Resultados de exames">
      <section className="procedure-page-section results-page-section section-light">
        <div className="shell">
          <div className="procedure-page results-page">
            <header className="procedure-header">
              <p className="eyebrow">Área do paciente</p>
              <h1>Resultados de exames</h1>
              <p className="procedure-lead">
                Faça login abaixo com os dados enviados pela nossa equipe para acessar seus exames com segurança.
              </p>
            </header>

            <div className="results-frame-wrap">
              <iframe
                className="results-frame"
                src="https://core.feegow.com/patient-interface/185r/login"
                title="Login — Resultados de exames Neuro-Sono"
                loading="lazy"
              ></iframe>
            </div>

            <p className="results-fallback">
              Prefere abrir em uma nova aba?{" "}
              <a href="https://core.feegow.com/patient-interface/185r/login" target="_blank" rel="noreferrer">
                Acessar o portal diretamente
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </PageChrome>
  );
}
