import AdminApp from "@/components/admin/AdminApp";
import "./painel.css";

export const metadata = {
  title: "Painel administrativo — Neuro-Sono",
  description: "Protótipo funcional do painel administrativo da Clínica Neuro-Sono.",
  robots: { index: false, follow: false },
};

export default function PainelPage() {
  return <AdminApp />;
}
