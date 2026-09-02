function stripAccents(s) {
  return s.normalize("NFKD").replace(/[̀-ͯ]/g, "");
}

const TAG_RULES = [
  { id: "exame-sono", label: "Exame do sono", kws: ["polissonografia", "latencia do sono", "manutencao da vigilia", "titulacao", "poligrafia", "actigrafia"] },
  { id: "exame-cerebro", label: "Exame do cérebro", kws: ["eletroencefalo", "eeg", "mapeamento eletrico", "brain mapping", "video-eeg", "video eeg"] },
  { id: "nervos-musculos", label: "Nervos e músculos", kws: ["eletroneuromiografia", "eletroneuro", "conducao nervosa"] },
  { id: "apneia", label: "Apneia e CPAP", kws: ["apneia", "cpap", "bipap", "servo-ventilador", "servo ventilador", "ronco", "dessensibiliza"] },
  { id: "pernas-inquietas", label: "Pernas inquietas", kws: ["pernas inquietas", "willis-ekbom", "willis ekbom"] },
  { id: "parassonias", label: "Parassonias", kws: ["sonambulismo", "terror noturno", "pesadelo", "sono rem", "disturbio comportamental do sono", "movimento sono"] },
  { id: "epilepsia", label: "Sono e epilepsia", kws: ["epilepsia"] },
  { id: "insonia", label: "Insônia e TCC", kws: ["insonia", "tcc", "terapia cognitiv"] },
  { id: "cognitivo", label: "Avaliação Cognitiva", kws: ["neuropsicologica", "memoria"] },
  { id: "infantil", label: "Neurologia Infantil", kws: ["crianca", "hiperatividade", "aprendizagem"] },
  { id: "bruxismo", label: "Bruxismo", kws: ["bruxismo", "botox"] },
  { id: "sonolencia", label: "Sonolência", kws: ["sonolencia", "narcolepsia"] },
  { id: "ciencia", label: "Ciência e Curiosidades", kws: ["mito", "michael jackson", "cardiologista"] },
];

const FALLBACK_TAG = { id: "geral", label: "Neurologia e Sono" };

export const ALL_TAGS = [...TAG_RULES.map(({ id, label }) => ({ id, label })), FALLBACK_TAG];

export function deriveTags(post) {
  const haystack = stripAccents(`${post.title} ${post.description || ""}`.toLowerCase());
  const matched = [];
  for (const rule of TAG_RULES) {
    if (rule.kws.some((k) => haystack.includes(stripAccents(k)))) {
      matched.push(rule.id);
      if (matched.length === 2) break;
    }
  }
  return matched.length ? matched : [FALLBACK_TAG.id];
}

export function tagLabel(id) {
  return ALL_TAGS.find((t) => t.id === id)?.label ?? id;
}

const MONTHS = [
  "janeiro", "fevereiro", "março", "abril", "maio", "junho",
  "julho", "agosto", "setembro", "outubro", "novembro", "dezembro",
];

export function formatDate(iso) {
  if (!iso) return null;
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return null;
  return {
    display: `${d.getUTCDate()} de ${MONTHS[d.getUTCMonth()]} de ${d.getUTCFullYear()}`,
    iso: d.toISOString().slice(0, 10),
  };
}

export function excerptFor(post, maxLen) {
  const textBlocks = post.blocks.filter(
    (b) => b.text && (b.type === "paragraph" || b.type === "subheading" || b.type === "heading"),
  );
  let source = textBlocks.map((b) => b.text).join(" ").replace(/\s+/g, " ").trim();
  if (!source) source = (post.description || "").replace(/\s+/g, " ").trim();
  return source.length > maxLen ? source.slice(0, maxLen - 3).trimEnd() + "..." : source;
}
