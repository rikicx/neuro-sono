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
    setMessage("Aguarde o verde.");
    window.clearTimeout(waitTimerRef.current);
    waitTimerRef.current = window.setTimeout(
      () => {
        setPhase("go");
        setLight("green");
        setTriggerLabel("Clique!");
        setMessage("Agora!");
        greenAtRef.current = performance.now();
      },
      MIN_WAIT_MS + Math.random() * (MAX_WAIT_MS - MIN_WAIT_MS),
    );
  };

  const resetTest = () => {
    setRound(0);
    setTimes([]);
    setIsEarly(false);
    showReady("Iniciar rodada", "Toque para começar quando estiver pronto.");
  };

  const handleTriggerClick = () => {
    if (phase === "ready") {
      beginWait();
      return;
    }
    if (phase === "waiting") {
      window.clearTimeout(waitTimerRef.current);
      setIsEarly(true);
      showReady("Tentar de novo", "Foi cedo, espere o verde desta vez.");
      return;
    }
    if (phase === "go") {
      const seconds = (performance.now() - greenAtRef.current) / 1000;
      const nextTimes = [...times, seconds];
      setTimes(nextTimes);
      const nextRound = round + 1;
      setRound(nextRound);
      setLight("red");
      if (nextRound >= TOTAL_ROUNDS) {
        setView("results");
      } else {
        showReady("Próxima rodada", `Registrado ${seconds.toFixed(3)}s. Toque para continuar.`);
      }
    }
  };

  const average = times.length ? times.reduce((total, value) => total + value, 0) / times.length : 0;
  const band = BANDS.find((candidate) => average <= candidate.max);

  return (
    <div className="reaction-panel" data-reaction-root>
      {view === "intro" && (
        <div className="reaction-intro" data-reaction-view="intro">
          <p className="reaction-eyebrow">Antes de começar</p>
          <ul className="reaction-rules">
            <li>Você fará 5 rodadas.</li>
            <li>O semáforo começa vermelho: aguarde ele ficar verde.</li>
            <li>Assim que acender o verde, clique no botão o mais rápido que puder.</li>
            <li>Clicar antes da hora não conta, é só tentar de novo.</li>
          </ul>
          <button
            className="button button-accent"
            type="button"
            onClick={() => {
              setView("test");
              resetTest();
            }}
          >
            Começar teste
            <svg viewBox="0 0 20 20" aria-hidden="true">
              <path d="M4 10h12M11 5l5 5-5 5" />
            </svg>
          </button>
        </div>
      )}

      {view === "test" && (
        <div className="reaction-test" data-reaction-view="test">
          <div className="reaction-status">
            <span className="reaction-round">
              Rodada <strong>{round + 1}</strong> de {TOTAL_ROUNDS}
            </span>
            <span className="reaction-message" aria-live="polite">
              {message}
            </span>
          </div>

          <div className="reaction-stage">
            <div className="semaphore" data-reaction-light={light} aria-hidden="true">
              <span className="light light-red"></span>
              <span className="light light-yellow"></span>
              <span className="light light-green"></span>
            </div>

            <button
              className={`reaction-trigger${phase === "go" ? " is-ready" : ""}${isEarly ? " is-early" : ""}`}
              type="button"
              onClick={handleTriggerClick}
            >
              <span>{triggerLabel}</span>
            </button>
          </div>

          <ol className="reaction-history" aria-label="Tempos registrados">
            {times.map((value, index) => (
              <li key={index}>{value.toFixed(3)}s</li>
            ))}
          </ol>
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
            <button
              className="button button-accent"
              type="button"
              onClick={() => {
                setView("test");
                resetTest();
              }}
            >
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
