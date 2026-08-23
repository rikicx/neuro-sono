"use client";

import { useEffect } from "react";

export default function ProcedureOverlay() {
  useEffect(() => {
    const overlay = document.querySelector("[data-procedure-overlay]");
    if (!overlay) return undefined;

    const sheet = overlay.querySelector("[data-procedure-sheet]");
    const bodyEl = overlay.querySelector("[data-procedure-body]");
    const closeButtons = [...overlay.querySelectorAll("[data-procedure-close]")];
    const cache = new Map();
    const originalTitle = document.title;
    let lastTrigger = null;

    const setLoading = () => {
      bodyEl.innerHTML = '<p class="procedure-sheet-loading">Carregando…</p>';
    };

    const setError = (url) => {
      bodyEl.innerHTML = `<p class="procedure-sheet-error">Não foi possível carregar este conteúdo agora. <a class="text-link dark" href="${url}">Abrir em uma página própria</a>.</p>`;
    };

    const showContent = (content, title) => {
      bodyEl.innerHTML = "";
      bodyEl.appendChild(content.cloneNode(true));
      document.title = title || originalTitle;
      if (sheet) sheet.scrollTop = 0;
    };

    const loadProcedure = (url) => {
      if (cache.has(url)) {
        const cached = cache.get(url);
        showContent(cached.content, cached.title);
        return;
      }
      setLoading();
      fetch(url)
        .then((response) => {
          if (!response.ok) throw new Error("request failed");
          return response.text();
        })
        .then((html) => {
          const doc = new DOMParser().parseFromString(html, "text/html");
          const content = doc.querySelector("[data-procedure-content]");
          if (!content) throw new Error("no content region");
          cache.set(url, { content, title: doc.title });
          showContent(content, doc.title);
        })
        .catch(() => setError(url));
    };

    const openOverlay = (url, trigger) => {
      lastTrigger = trigger || null;
      overlay.classList.add("is-open");
      overlay.setAttribute("aria-hidden", "false");
      document.body.classList.add("procedure-open");
      loadProcedure(url);
      window.requestAnimationFrame(() => {
        overlay.querySelector(".procedure-close")?.focus({ preventScroll: true });
      });
    };

    const closeOverlay = () => {
      if (!overlay.classList.contains("is-open")) return;
      overlay.classList.remove("is-open");
      overlay.setAttribute("aria-hidden", "true");
      document.body.classList.remove("procedure-open");
      document.title = originalTitle;
      lastTrigger?.focus({ preventScroll: true });
    };

    const goHome = () => {
      if (window.location.pathname.startsWith("/procedimentos/")) {
        window.history.pushState({}, "", "/");
      }
    };

    const triggerHandlers = [...document.querySelectorAll("[data-procedure-trigger]")].map((trigger) => {
      const handler = (event) => {
        event.preventDefault();
        const url = trigger.getAttribute("href");
        window.history.pushState({ procedure: url }, "", url);
        openOverlay(url, trigger);
      };
      trigger.addEventListener("click", handler);
      return { trigger, handler };
    });

    const cardHandlers = [...document.querySelectorAll(".exam-card")].flatMap((card) => {
      const trigger = card.querySelector("[data-procedure-trigger]");
      if (!trigger) return [];
      const handler = (event) => {
        if (event.target.closest("[data-procedure-trigger]")) return;
        trigger.click();
      };
      card.addEventListener("click", handler);
      return [{ card, handler }];
    });

    const onCloseClick = () => {
      closeOverlay();
      goHome();
    };
    closeButtons.forEach((button) => button.addEventListener("click", onCloseClick));

    const onKeydown = (event) => {
      if (event.key === "Escape" && overlay.classList.contains("is-open")) {
        closeOverlay();
        goHome();
      }
    };
    document.addEventListener("keydown", onKeydown);

    const onPopstate = () => {
      if (window.location.pathname.startsWith("/procedimentos/")) {
        openOverlay(window.location.pathname);
      } else {
        closeOverlay();
      }
    };
    window.addEventListener("popstate", onPopstate);

    return () => {
      triggerHandlers.forEach(({ trigger, handler }) => trigger.removeEventListener("click", handler));
      cardHandlers.forEach(({ card, handler }) => card.removeEventListener("click", handler));
      closeButtons.forEach((button) => button.removeEventListener("click", onCloseClick));
      document.removeEventListener("keydown", onKeydown);
      window.removeEventListener("popstate", onPopstate);
    };
  }, []);

  return (
    <div className="procedure-overlay" data-procedure-overlay aria-hidden="true">
      <div className="procedure-overlay-scrim" data-procedure-close></div>
      <div className="procedure-sheet" data-procedure-sheet role="dialog" aria-modal="true" aria-label="Detalhes do procedimento">
        <button className="procedure-close" type="button" data-procedure-close aria-label="Fechar">
          <svg viewBox="0 0 20 20" aria-hidden="true">
            <path d="M5 5l10 10M15 5 5 15" />
          </svg>
        </button>
        <div className="procedure-sheet-body" data-procedure-body></div>
      </div>
    </div>
  );
}
