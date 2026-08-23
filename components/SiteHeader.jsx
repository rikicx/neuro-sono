export default function SiteHeader({ brandHref, examLinkCurrent = false, onLightPage = false }) {
  return (
    <header className={`site-header${onLightPage ? " on-light-page" : ""}`} data-header>
      <a className="brand" href={brandHref} aria-label="Neuro-Sono — início">
        <img src="/assets/neuro-sono-logo.png" alt="Neuro-Sono" />
      </a>

      <div className="header-actions">
        <a className="exam-link" href="/resultados/" aria-current={examLinkCurrent ? "page" : undefined}>
          Resultados de exames
          <svg viewBox="0 0 20 20" aria-hidden="true">
            <path d="M5 15 15 5M7 5h8v8" />
          </svg>
        </a>
        <button className="menu-button" type="button" aria-expanded="false" aria-controls="menu-overlay">
          <span>Menu</span>
          <span className="menu-symbol" aria-hidden="true">
            <i></i>
            <i></i>
          </span>
        </button>
      </div>
    </header>
  );
}
