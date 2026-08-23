import SiteHeader from "./SiteHeader";
import MenuNav from "./MenuNav";
import SiteFooter from "./SiteFooter";
import WhatsappFloat from "./WhatsappFloat";
import { SUBPAGE_NAV, HOME_NAV } from "./nav-config";

export default function PageChrome({ variant = "subpage", currentHref, pageLabel, headerOnLight = false, children }) {
  const items = variant === "home" ? HOME_NAV : SUBPAGE_NAV;
  const brandHref = variant === "home" ? "#inicio" : "/";

  return (
    <>
      <a className="skip-link" href="#conteudo">
        Ir para o conteúdo
      </a>

      <SiteHeader brandHref={brandHref} onLightPage={headerOnLight} />
      <MenuNav items={items} currentHref={currentHref} />

      <main id="conteudo">{children}</main>

      <SiteFooter items={items} brandHref={brandHref} currentHref={currentHref} pageLabel={pageLabel} />
      <WhatsappFloat />
    </>
  );
}
