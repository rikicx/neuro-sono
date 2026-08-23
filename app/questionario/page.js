import Questionnaire from "@/components/Questionnaire";
import "./questionnaire.css";

export const metadata = {
  title: "Questionário pré-exame | Neuro-Sono",
  description: "Questionário pré-exame para adultos da Clínica Neuro-Sono.",
};

export default function QuestionarioPage() {
  return (
    <>
      <a className="skip-link" href="#questionario">
        Ir para o questionário
      </a>

      <header className="questionnaire-header">
        <a className="questionnaire-brand" href="/" aria-label="Voltar ao site da Neuro-Sono">
          <img src="/assets/neuro-sono-logo.png" alt="Neuro-Sono" />
        </a>
        <div className="questionnaire-header-copy">
          <span>Pré-exame</span>
          <strong>Questionário de sono para adultos</strong>
        </div>
        <div className="header-utilities">
          <div className="font-controls" role="group" aria-label="Tamanho do texto">
            <span className="font-controls-label">Texto</span>
            <button type="button" data-font-size="default" aria-label="Tamanho de texto padrão" aria-pressed="true">
              A
            </button>
            <button type="button" data-font-size="large" aria-label="Aumentar o tamanho do texto" aria-pressed="false">
              A+
            </button>
            <button type="button" data-font-size="xlarge" aria-label="Aumentar ainda mais o tamanho do texto" aria-pressed="false">
              A++
            </button>
          </div>
          <a className="exit-link" href="/">
            <span>Sair e continuar depois</span>
            <svg viewBox="0 0 20 20" aria-hidden="true">
              <path d="M4 10h12M11 5l5 5-5 5" />
            </svg>
          </a>
        </div>
      </header>

      <div className="global-progress" aria-hidden="true">
        <span data-global-progress></span>
      </div>

      <main id="questionario" className="questionnaire-shell">
        <aside className="journey-panel" aria-label="Progresso do questionário">
          <div className="journey-intro">
            <span className="eyebrow">Sua jornada</span>
            <strong data-progress-label>Antes de começar</strong>
            <p data-progress-detail>0% concluído</p>
          </div>
          <ol className="journey-list" data-journey-list></ol>
          <div className="save-status" data-save-status>
            <span aria-hidden="true"></span>
            <p>
              <strong>Salvo neste dispositivo</strong>Você pode fechar e continuar depois.
            </p>
          </div>
        </aside>

        <section className="conversation-panel" aria-labelledby="conversation-title">
          <div className="conversation-topline">
            <div>
              <span className="eyebrow" data-section-kicker>
                Boas-vindas
              </span>
              <h1 id="conversation-title" data-section-title>
                Vamos conhecer melhor o seu sono.
              </h1>
            </div>
            <div className="mobile-progress" aria-label="Progresso">
              <strong data-mobile-progress>0%</strong>
              <span>concluído</span>
            </div>
          </div>

          <div className="conversation-stage" data-conversation-stage aria-live="polite"></div>
        </section>
      </main>

      <div className="privacy-note">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="5" y="10" width="14" height="10" rx="2" />
          <path d="M8 10V7a4 4 0 0 1 8 0v3" />
        </svg>
        <p>Nesta versão de demonstração, as respostas ficam somente neste navegador e ainda não são enviadas à clínica.</p>
      </div>

      <noscript>Ative o JavaScript para preencher o questionário.</noscript>
      <Questionnaire />
    </>
  );
}
