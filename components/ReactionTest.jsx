"use client";

import { useEffect, useRef, useState } from "react";

const TOTAL_ROUNDS = 5;
const MIN_WAIT_MS = 1400;
const MAX_WAIT_MS = 4400;

const BANDS = [
  { max: 0.25, label: "Excelente", detail: "Alerta e resposta acima da média." },
  { max: 0.3, label: "Normal", detail: "Desempenho esperado para a maioria dos adultos saudáveis." },
  { max: 0.35, label: "Levemente reduzido", detail: "Pode refletir cansaço, distração ou sono insuficiente." },
  { max: 0.45, label: "Atenção", detail: "Sinaliza queda no estado de alerta. Observe se há sonolência diurna." },
  {
    max: Infinity,
    label: "Redução importante",
    detail: "Pode estar associada a privação de sono ou uso de medicamentos. Vale conversar com a equipe.",
  },
];

export default function ReactionTest() {
  const [view, setView] = useState("intro");
  const [round, setRound] = useState(0);
  const [times, setTimes] = useState([]);
  const [phase, setPhase] = useState("ready");
  const [light, setLight] = useState("red");
  const [triggerLabel, setTriggerLabel] = useState("Iniciar rodada");
  const [message, setMessage] = useState("Toque para começar quando estiver pronto.");
  const [isEarly, setIsEarly] = useState(false);

  const waitTimerRef = useRef(0);
  const greenAtRef = useRef(0);

  useEffect(() => () => window.clearTimeout(waitTimerRef.current), []);

  const showReady = (label, text) => {
    setPhase("ready");
    window.clearTimeout(waitTimerRef.current);
    setLight("red");
    setTriggerLabel(label);
    setMessage(text);
  };

  const beginWait = () => {
    setPhase("waiting");
    setLight("red");
    setIsEarly(false);
    setTriggerLabel("Aguarde…");
    setMessage("Semáforo vermelho: não clique ainda. Espere ficar verde.");
    window.clearTimeout(waitTimerRef.current);
    waitTimerRef.current = window.setTimeout(
      () => {
        setPhase("go");
        setLight("green");
        setTriggerLabel("Clique agora!");
        setMessage("Verde! Clique no botão.");
        greenAtRef.current = performance.now();
      },
      MIN_WAIT_MS + Math.random() * (MAX_WAIT_MS - MIN_WAIT_MS),
    );
  };

  const startPractice = () => {
    setView("practice");
    setRound(0);
    setTimes([]);
    setIsEarly(false);
    showReady("Iniciar treino", "Rodada de treino: ela não conta para o resultado.");
  };

  const startTest = () => {
    setView("test");
    setRound(0);
    setTimes([]);
    setIsEarly(false);
    showReady("Iniciar rodada 1", "Toque no botão para começar. Depois, espere o verde.");
  };

  const handleTriggerClick = () => {
    if (phase === "practice-done") {
      startTest();
      return;
    }
    if (phase === "ready") {
      beginWait();
      return;
    }
    if (phase === "waiting") {
      window.clearTimeout(waitTimerRef.current);
      setIsEarly(true);
      showReady(
        view === "practice" ? "Repetir o treino" : "Tentar de novo",
        "Você clicou antes do verde. Espere a luz verde acender.",
      );
      return;
    }
    if (phase === "go") {
      const seconds = (performance.now() - greenAtRef.current) / 1000;
      setLight("red");

      if (view === "practice") {
        window.clearTimeout(waitTimerRef.current);
        setPhase("practice-done");
        setIsEarly(false);
        setTriggerLabel("Começar as 5 rodadas");
        setMessage(`Boa! Seu treino foi ${seconds.toFixed(3)}s. Agora vem o teste que vale.`);
        return;
      }

      const nextTimes = [...times, seconds];
      setTimes(nextTimes);
      const nextRound = round + 1;
      setRound(nextRound);
      if (nextRound >= TOTAL_ROUNDS) {
        setView("results");
      } else {
        showReady(`Iniciar rodada ${nextRound + 1}`, `Registrado ${seconds.toFixed(3)}s. Toque para continuar.`);
      }
    }
  };

  const average = times.length ? times.reduce((total, value) => total + value, 0) / times.length : 0;
  const band = BANDS.find((candidate) => average <= candidate.max);
  const isStageView = view === "practice" || view === "test";

  return (
    <div className="reaction-panel" data-reaction-root>
      {view === "intro" && (
        <div className="reaction-intro" data-reaction-view="intro">
          <p className="reaction-eyebrow">Antes de começar</p>
          <ul className="reaction-rules">
            <li>Primeiro você faz 1 rodada de treino. Depois, 5 rodadas que valem.</li>
            <li>O semáforo começa vermelho: não clique enquanto ele estiver aceso.</li>
            <li>Assim que a luz verde acender, clique no botão redondo o mais rápido que puder.</li>
            <li>Se clicar antes do verde, a rodada não conta — é só tentar de novo.</li>
          </ul>
          <button className="button button-accent" type="button" onClick={startPractice}>
            Fazer rodada de treino
            <svg viewBox="0 0 20 20" aria-hidden="true">
              <path d="M4 10h12M11 5l5 5-5 5" />
            </svg>
          </button>
        </div>
      )}

      {isStageView && (
        <div className="reaction-test" data-reaction-view={view}>
          <div className="reaction-status">
            <span className="reaction-round">
              {view === "practice" ? (
                "Rodada de treino"
              ) : (
                <>
                  Rodada <strong>{round + 1}</strong> de {TOTAL_ROUNDS}
                </>
              )}
            </span>
            <span className="reaction-message" aria-live="polite">
              {message}
            </span>
          </div>

          <p className="reaction-instruction">
            Quando a <strong>luz verde</strong> acender, clique no botão abaixo o mais rápido possível.
          </p>

          <div className="reaction-stage">
            <div className="semaphore" data-reaction-light={light} aria-hidden="true">
              <span className="light light-red"></span>
              <span className="light light-yellow"></span>
              <span className="light light-green"></span>
            </div>

            <svg
              className={`reaction-arrow${phase === "go" ? " is-active" : ""}`}
              viewBox="0 0 24 44"
              aria-hidden="true"
            >
              <path d="M12 4v28M4 24l8 9 8-9" />
            </svg>

            <button
              className={`reaction-trigger${phase === "go" ? " is-ready" : ""}${isEarly ? " is-early" : ""}`}
              type="button"
              onClick={handleTriggerClick}
            >
              <span>{triggerLabel}</span>
            </button>
          </div>

          {view === "test" && (
            <ol className="reaction-history" aria-label="Tempos registrados">
              {times.map((value, index) => (
                <li key={index}>{value.toFixed(3)}s</li>
              ))}
            </ol>
          )}
        </div>
      )}

      {view === "results" && (
        <div className="reaction-results" data-reaction-view="results">
          <p className="reaction-eyebrow">Resultado</p>
          <p className="reaction-average">
            <strong>{average.toFixed(3)}</strong> segundos em média
          </p>
          <p className="reaction-band">
            {band.label}. {band.detail}
          </p>
          <ol className="reaction-history reaction-history--final" aria-label="Tempos de cada rodada">
            {times.map((value, index) => (
              <li key={index}>
                Rodada {index + 1}: {value.toFixed(3)}s
              </li>
            ))}
          </ol>
          <div className="reaction-actions">
            <button className="button button-accent" type="button" onClick={startTest}>
              Testar novamente
              <svg viewBox="0 0 20 20" aria-hidden="true">
                <path d="M4 10h12M11 5l5 5-5 5" />
              </svg>
            </button>
          </div>
          <p className="reaction-disclaimer">
            Este teste tem finalidade educativa. Ele não diagnostica distúrbios do sono nem substitui uma avaliação médica: o
            tempo de reação varia de um dia para o outro, e um resultado isolado não é conclusivo.
          </p>
        </div>
      )}
    </div>
  );
}
