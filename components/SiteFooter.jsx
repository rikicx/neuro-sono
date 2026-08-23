export default function SiteFooter({ items, brandHref, currentHref, pageLabel }) {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <a className="footer-brand" href={brandHref}>
          <img src="/assets/neuro-sono-logo.png" alt="Neuro-Sono" />
        </a>
        <p>Para o estudo dos distúrbios do sono e avaliações neurológicas.</p>
        <div className="footer-links">
          {items.map((item) => (
            <a key={item.href} href={item.href} aria-current={item.href === currentHref ? "page" : undefined}>
              {item.label}
            </a>
          ))}
        </div>
        <div className="footer-social">
          <a
            href="https://www.facebook.com/Neuro-Sono-Vila-Mariana-132007100468508/"
            target="_blank"
            rel="noreferrer"
            aria-label="Neuro-Sono no Facebook"
          >
            <svg viewBox="0 0 20 20" aria-hidden="true">
              <circle cx="10" cy="10" r="8" />
              <path d="M13 2.5h-1.6a3 3 0 0 0-3 3V8H6.5v3H8.4v6.4h3V11h2l.4-3h-2.4V5.9a.9.9 0 0 1 .9-.9H13z" />
            </svg>
          </a>
          <a href="https://www.instagram.com/neurosono_/" target="_blank" rel="noreferrer" aria-label="Neuro-Sono no Instagram">
            <svg viewBox="0 0 20 20" aria-hidden="true">
              <rect x="3" y="3" width="14" height="14" rx="4" />
              <circle cx="10" cy="10" r="3.2" />
              <circle cx="14.1" cy="5.9" r="0.7" fill="currentColor" stroke="none" />
            </svg>
          </a>
        </div>
      </div>
      <div className="shell footer-bottom">
        <span>
          © <span>{new Date().getFullYear()}</span> Neuro-Sono
        </span>
        <span>{pageLabel}</span>
        <a
          className="footer-signature"
          href="https://www.henriquesilva.design/?utm_source=neuro-sono&utm_medium=footer&utm_campaign=site-credit"
          target="_blank"
          rel="author noreferrer"
        >
          Henrique Silva
        </a>
      </div>
    </footer>
  );
}
