export const ADMIN_STORAGE_KEY = "neuro-sono-admin-prototype-v4";

export const API_CONTRACTS = {
  invitations: "/api/v1/questionnaire-invitations",
  submission: (id) => `/api/v1/admin/submissions/${id}`,
  synthesis: (id) => `/api/v1/admin/submissions/${id}/synthesis`,
  conclusions: (id) => `/api/v1/admin/submissions/${id}/conclusions`,
  artifacts: (id) => `/api/v1/admin/submissions/${id}/artifacts`,
  team: "/api/v1/admin/team-members",
  media: "/api/v1/admin/media/presign",
  users: "/api/v1/admin/users",
  patients: "/api/v1/admin/patients",
  content: "/api/v1/admin/content",
};

export const TEAM_GROUPS = [
  "Neurologia e Distúrbios do Sono",
  "Psiquiatria e Distúrbios do Sono",
  "Neurologia e Neuropediatria",
  "Clínica Médica e Distúrbios do Sono",
  "Psicologia e Terapia Cognitivo-Comportamental",
  "Fisioterapia e Adaptação de CPAP",
  "Odontologia e Sono",
  "Polissonografia · PSG",
  "Eletroencefalograma · EEG",
];

const answerSet = (name, birth, sex) => ({
  identity: [
    ["Nome completo", name], ["Data de nascimento", birth],
    ["Sexo", sex], ["Peso e altura", sex === "Feminino" ? "68 kg · 165 cm" : "82 kg · 178 cm"],
  ],
  history: [
    ["Principal queixa", "Dificuldade para manter o sono e cansaço ao acordar."],
    ["Há quanto tempo", "Aproximadamente 8 meses"], ["Horário habitual", "23h30 às 06h30"],
  ],
  symptoms: [
    ["Problemas para pegar no sono", "Algumas vezes"], ["Acorda durante a noite", "Frequentemente"],
    ["Sente sono durante o dia", "Algumas vezes"], ["Ronca", "Raramente"],
  ],
  epworth: [["Escala de Sonolência de Epworth", "9 de 24 pontos"]],
});

export const seedData = {
  categories: ["Sono", "Exames", "Neurologia", "Orientação"],
  teamGroups: TEAM_GROUPS,
  users: [
    { id: "u1", name: "Henrique Silva", email: "henrique@neurosono.com.br", role: "Administrador", status: "Ativo", initials: "HS" },
    { id: "u2", name: "Dr. Gilmar Prado", email: "gilmar@neurosono.com.br", role: "Médico", status: "Ativo", initials: "GP" },
    { id: "u3", name: "Carla Mendes", email: "atendimento@neurosono.com.br", role: "Atendimento", status: "Ativo", initials: "CM" },
    { id: "u4", name: "Lorrane Almeida", email: "—", role: "A definir", status: "Acesso pendente", initials: "LA" },
    { id: "u5", name: "Paula Calmona", email: "—", role: "A definir", status: "Acesso pendente", initials: "PC" },
  ],
  patients: [
    { id: "p1", name: "Marina Souza", email: "marina@exemplo.com", phone: "(11) 98888-1024", birth: "22/04/1980", status: "Concluído", updated: "Hoje, 09:42", submissionId: "s1", answers: answerSet("Marina Souza", "22/04/1980", "Feminino"), synthesis: "Paciente relata despertares frequentes há cerca de oito meses, sono não reparador e sonolência diurna ocasional. Epworth registrado em 9/24. As respostas indicam necessidade de revisão clínica do padrão de manutenção do sono e dos hábitos noturnos.", conclusion: "Relato compatível com queixa de manutenção do sono. Correlacionar com avaliação clínica e histórico completo antes de qualquer conduta.", doctor: "Dr. Gilmar Fernandes do Prado · CRM 49.905" },
    { id: "p2", name: "Carlos Andrade", email: "carlos@exemplo.com", phone: "(11) 97777-4831", birth: "10/11/1972", status: "Aguardando", updated: "Enviado ontem", submissionId: "s2" },
    { id: "p3", name: "Juliana Lima", email: "juliana@exemplo.com", phone: "(11) 96666-1590", birth: "03/07/1991", status: "Em preenchimento", updated: "Há 18 min", submissionId: "s3" },
    { id: "p4", name: "Roberto Nunes", email: "roberto@exemplo.com", phone: "(11) 95555-2210", birth: "18/02/1964", status: "Revisão médica", updated: "Ontem, 16:20", submissionId: "s4", answers: answerSet("Roberto Nunes", "18/02/1964", "Masculino"), synthesis: "Síntese assistiva disponível para revisão médica.", conclusion: "" },
  ],
  content: [
    { id: "c1", title: "Como o sono afeta a memória", category: "Sono", excerpt: "Entenda a relação entre descanso e consolidação de memórias.", body: "Conteúdo demonstrativo para o teste do editor.", status: "Publicado", updated: "02 set 2026" },
    { id: "c2", title: "Polissonografia: quando é indicada?", category: "Exames", excerpt: "Um guia introdutório sobre o exame do sono.", body: "Conteúdo demonstrativo para o teste do editor.", status: "Rascunho", updated: "28 ago 2026" },
  ],
  team: [
    { id: "t1", name: "Dr. Gilmar Fernandes do Prado", type: "Médico", council: "CRM", registration: "49.905", groups: [TEAM_GROUPS[0]], photo: "/assets/team/gilmar.webp", status: "Publicado" },
    { id: "t2", name: "Dr. Pedro Barbosa Oliveira", type: "Médico", council: "CRM", registration: "202.914", groups: [TEAM_GROUPS[0], TEAM_GROUPS[2]], photo: "/assets/team/pedro.webp", status: "Publicado" },
    { id: "t3", name: "Dra. Letícia Molina", type: "Psicóloga", council: "CRP", registration: "SP 140677", groups: [TEAM_GROUPS[4]], photo: "/assets/team/leticia.webp", status: "Publicado" },
    { id: "t4", name: "Evelyn Tomas", type: "Técnica", council: "", registration: "", groups: [TEAM_GROUPS[8]], photo: "", status: "Publicado" },
  ],
  activity: [
    { id: "a1", text: "Marina Souza concluiu o questionário", time: "Há 18 minutos", tone: "success" },
    { id: "a2", text: "Lembrete enviado para Carlos Andrade", time: "Há 1 hora", tone: "info" },
    { id: "a3", text: "Conteúdo “Como o sono afeta a memória” publicado", time: "Ontem, 17:30", tone: "neutral" },
  ],
};

export function loadPrototype() {
  if (typeof window === "undefined") return seedData;
  try {
    const saved = window.localStorage.getItem(ADMIN_STORAGE_KEY);
    if (!saved) return seedData;
    const parsed = JSON.parse(saved);
    const users = Array.isArray(parsed.users)
      ? parsed.users.map((user) => ({
          ...user,
          ...(user.id === "u4" ? { name: "Lorrane Almeida", initials: "LA" } : {}),
          ...(user.status === "Cadastro pendente" ? { status: "Acesso pendente" } : {}),
        }))
      : seedData.users;
    return { ...seedData, ...parsed, categories: parsed.categories || seedData.categories, teamGroups: parsed.teamGroups || seedData.teamGroups, users };
  } catch { return seedData; }
}

export function savePrototype(data) {
  if (typeof window !== "undefined") window.localStorage.setItem(ADMIN_STORAGE_KEY, JSON.stringify(data));
}

export const mockRequest = (result, delay = 260) => new Promise((resolve) => window.setTimeout(() => resolve(result), delay));
