export default function MenuNav({ items, currentHref }) {
  return (
    <div className="menu-overlay" id="menu-overlay" aria-hidden="true">
      <div className="menu-ambient" aria-hidden="true"></div>
      <nav aria-label="Navegação principal">
        <span className="eyebrow">Explore a Neuro-Sono</span>
        {items.map((item, index) => (
          <a key={item.href} href={item.href} aria-current={item.href === currentHref ? "page" : undefined}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            {item.label}
          </a>
        ))}
      </nav>
      <div className="menu-contact">
        <a href="tel:+551150816629">(11) 5081-6629</a>
        <a href="https://wa.me/5511940397143" target="_blank" rel="noreferrer">
          WhatsApp
        </a>
      </div>
    </div>
  );
}
