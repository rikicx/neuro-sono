"use client";

export function initQuestionnaire() {

const STORAGE_KEY = "neuro-sono-questionnaire-v5";

const frequencyOptions = [
  ["never", "Nunca"],
  ["rarely", "Raramente"],
  ["sometimes", "Algumas vezes"],
  ["frequently", "Frequentemente"],
  ["usually", "Usualmente"],
  ["always", "Sempre"],
];

const yesNo = [["yes", "Sim"], ["no", "Não"]];

const symptomGroups = [
  {
    id: "sleep_onset",
    title: "Como o sono acontece",
    kicker: "Sintomas · 1 de 7",
    intro: "Agora vamos falar sobre como você adormece e mantém o sono. Pensando nos últimos 12 meses, com que frequência cada situação aconteceu?",
    items: [
      ["s01", "Acorda e está alerta antes do horário de se levantar?"],
      ["s02", "Tem problemas para pegar no sono?"],
      ["s03", "Tem problemas para continuar dormindo depois que adormece?"],
      ["s04", "Acorda de madrugada e tem dificuldade para voltar a dormir?"],
      ["s05", "Fica acordado à noite com muitos pensamentos?"],
      ["s06", "Fica acordado à noite preocupado ou deprimido?"],
      ["s07", "É acordado facilmente por barulho, luz ou outras coisas?"],
      ["s08", "Fica com energia, excitado ou com coisas importantes a fazer e não consegue dormir?"],
      ["s09", "Usa álcool para ajudar a dormir?"],
      ["s10", "Usa medicação para ajudar a dormir?"],
    ],
  },
  {
    id: "breathing",
    title: "Respiração durante o sono",
    kicker: "Sintomas · 2 de 7",
    intro: "Algumas dessas situações podem ser percebidas melhor por quem dorme perto de você. Se puder, peça ajuda a essa pessoa.",
    items: [
      ["s11", "Você ronca?"],
      ["s12", "Seu ronco incomoda outras pessoas próximas?"],
      ["s13", "Dorme em cama ou quarto separado por causa do ronco?"],
      ["s14", "Tem dificuldade para respirar durante a noite?"],
      ["s15", "Acorda sufocado ou com falta de ar?"],
      ["s16", "Alguém já percebeu que você para de respirar durante o sono?"],
      ["s17", "Levanta-se cansado ou sem a sensação de ter descansado?"],
      ["s18", "Tira um ou mais cochilos durante o dia?"],
      ["s19", "Sente-se recuperado depois de um cochilo?"],
      ["s20", "Sonha durante os cochilos?"],
    ],
  },
  {
    id: "sleepiness_a",
    title: "Sonolência durante o dia",
    kicker: "Sintomas · 3 de 7",
    intro: "Quero entender como o sono interfere nas suas atividades do dia a dia.",
    items: [
      ["s21", "Precisa se esforçar para ficar acordado durante o dia?"],
      ["s22", "Cochila ou adormece enquanto fala ao telefone?"],
      ["s23", "Cochila ou adormece conversando com amigos?"],
      ["s24", "Cochila ou adormece assistindo TV ou no cinema?"],
      ["s25", "Cochila em conferências, palestras ou na igreja?"],
      ["s26", "Cochila ou adormece lendo um livro, jornal ou revista?"],
      ["s27", "Cochila ou adormece trabalhando ou estudando?"],
      ["s28", "Cochila ou adormece dirigindo?"],
      ["s29", "Sente sono ou sonolência durante o dia?"],
    ],
  },
  {
    id: "sleepiness_b",
    title: "Outros sinais de sonolência",
    kicker: "Sintomas · 4 de 7",
    intro: "Só mais algumas situações relacionadas à sonolência e ao estado de alerta.",
    items: [
      ["s30", "Dorme mais nos finais de semana ou feriados do que durante a semana?"],
      ["s31", "Sente-se cansado ou com sono no início da noite?"],
      ["s32", "Usa comprimidos para ajudar a ficar acordado?"],
      ["s33", "Usa café, chá, refrigerante, guaraná ou estimulantes para ficar acordado?"],
      ["s34", "Tem sonhos muito vívidos logo após pegar no sono?"],
      ["s35", "Ouve vozes ou vê coisas enquanto adormece ou acorda?"],
      ["s36", "Sente-se paralisado, sem conseguir se mover, enquanto adormece ou acorda?"],
      ["s37", "Sente fraqueza súbita no corpo quando ri, chora ou vive uma emoção forte?"],
      ["s38", "Sente-se recuperado mesmo após cochilos curtos, de 10 a 15 minutos?"],
    ],
  },
  {
    id: "circadian",
    title: "Seu ritmo ao longo do dia",
    kicker: "Sintomas · 5 de 7",
    intro: "Agora pense nos períodos do dia em que você se sente mais ou menos alerta.",
    items: [
      ["s39", "Sente-se cansado ou sonolento durante a manhã?"],
      ["s40", "Tem dificuldade para se manter alerta durante a tarde?"],
      ["s41", "Tem dificuldade para ficar acordado até a hora de ir para a cama?"],
      ["s42", "Fica mais acordado e alerta no início da noite do que pela manhã?"],
    ],
  },
  {
    id: "parasomnias",
    title: "Comportamentos durante o sono",
    kicker: "Sintomas · 6 de 7",
    intro: "Estas situações também podem ser mais fáceis de responder com a ajuda de quem dorme perto de você.",
    items: [
      ["s43", "Senta-se e grita durante o sono ou acorda assustado de repente?"],
      ["s44", "Anda durante o sono e não se lembra no dia seguinte?"],
      ["s45", "Movimenta-se, anda ou representa o que está sonhando?"],
      ["s46", "Tem sonhos amedrontadores ou pesadelos?"],
      ["s47", "Range os dentes durante o sono?"],
    ],
  },
  {
    id: "movement",
    title: "Movimentos e sensações",
    kicker: "Sintomas · 7 de 7",
    intro: "Para finalizar esta parte, conte sobre movimentos, sensações físicas e cansaço.",
    items: [
      ["s48", "Tem sensações fortes ou perturbadoras nas pernas que melhoram ao movimentá-las?"],
      ["s49", "Sente necessidade de movimentar as pernas repetidamente?"],
      ["s50", "Apresenta repuxões, abalos ou movimentos súbitos durante o sono?"],
      ["s51", "Tem sono inquieto ou acorda com lençóis e cobertas revirados?"],
      ["s52", "Movimenta-se tanto que incomodaria quem dorme ao seu lado?"],
      ["s53", "Sente-se incomodado por problemas físicos ou sensações à noite?"],
      ["s54", "Tem palpitações ou dor no peito à noite?"],
      ["s55", "Sente cansaço e fadiga mesmo quando não está sonolento?"],
    ],
  },
];

const medicalGroups = [
  ["Cardíacas", ["Pressão alta", "Doença coronariana", "Angina", "Ponte de safena", "Ataque cardíaco", "Arritmia cardíaca", "Insuficiência cardíaca", "Sopros cardíacos"]],
  ["Pulmonares", ["Asma", "Pneumonia", "Bronquite crônica", "Enfisema", "Trombose pulmonar ou nas pernas"]],
  ["Otorrinolaringológicas", ["Rinite", "Sinusite crônica", "Desvio de septo", "Sinusites frequentes"]],
  ["Gastrointestinais", ["Gastrite", "Úlceras", "Hérnia de hiato", "Hepatite crônica", "Esofagite", "Doença da vesícula", "Refluxo gastroesofágico", "Pancreatite crônica"]],
  ["Endócrinas", ["Diabetes", "Colesterol alto", "Doença da tireoide", "Obesidade"]],
  ["Rins e vias urinárias", ["Cálculo renal", "Diálise", "Problemas de bexiga", "Nefrite", "Insuficiência renal", "Infecção urinária", "Problemas de próstata"]],
  ["Reumáticas", ["Artrite reumatoide", "Fibromialgia", "Reumatismo crônico"]],
  ["Neurológicas", ["AVC", "Paralisia", "Perda de audição", "Dor de cabeça", "Enxaqueca", "Perda de visão", "Convulsões", "Epilepsia", "Doença de Parkinson"]],
  ["Psiquiátricas ou psicológicas", ["Depressão", "Transtorno bipolar", "Tratamento psiquiátrico", "Ansiedade"]],
  ["Outras", ["Câncer", "Anemia", "Problemas ginecológicos", "Dor lombar", "Impotência", "Trauma"]],
];

const surgeries = ["Amigdalectomia", "Adenoidectomia", "Apendicectomia", "Histerectomia", "Colecistectomia", "Cirurgia para ronco", "Cirurgia de septo nasal", "Cirurgia bariátrica"];

const epworthItems = [
  "Sentado e lendo.",
  "Vendo TV.",
  "Sentado em um lugar público, como sala de espera ou igreja.",
  "Como passageiro em trem, carro ou ônibus durante uma hora sem parar.",
  "Deitando-se para descansar à tarde, quando possível.",
  "Sentado e conversando com alguém.",
  "Sentado calmamente após o almoço, sem álcool.",
  "Em um carro parado por alguns minutos no trânsito.",
];

const sections = [
  { id: "intro", label: "Antes de começar" },
  { id: "identity", label: "Identificação" },
  { id: "history", label: "Sua história" },
  { id: "habits", label: "Hábitos" },
  { id: "environment", label: "Sono e ambiente" },
  { id: "symptoms", label: "Sintomas do sono" },
  { id: "health", label: "Histórico de saúde" },
  { id: "family", label: "Família e perfil" },
  { id: "epworth", label: "Sonolência" },
  { id: "review", label: "Revisão" },
];

const input = (name, label, type = "text", options = {}) => `
  <div class="field ${options.wide ? "is-wide" : ""}">
    <label for="${name}">${label}${options.optional ? " <span>(opcional)</span>" : ""}</label>
    <input id="${name}" name="${name}" type="${type}" ${options.placeholder ? `placeholder="${options.placeholder}"` : ""} ${options.required ? "required" : ""} autocomplete="${options.autocomplete || "off"}" />
  </div>`;

const textarea = (name, label, options = {}) => `
  <div class="field ${options.wide ? "is-wide" : ""}">
    <label for="${name}">${label}${options.optional ? " <span>(opcional)</span>" : ""}</label>
    <textarea id="${name}" name="${name}" ${options.required ? "required" : ""} ${options.placeholder ? `placeholder="${options.placeholder}"` : ""}></textarea>
  </div>`;

const select = (name, label, options, settings = {}) => `
  <div class="field ${settings.wide ? "is-wide" : ""}">
    <label for="${name}">${label}</label>
    <select id="${name}" name="${name}" ${settings.required ? "required" : ""}>
      <option value="">Selecione</option>
      ${options.map(([value, text]) => `<option value="${value}">${text}</option>`).join("")}
    </select>
  </div>`;

const choice = (name, label, options, settings = {}) => `
  <fieldset class="choice-group ${settings.wide ? "field is-wide" : "field"}">
    <legend>${label}${settings.optional ? " <span>(opcional)</span>" : ""}</legend>
    <div class="choice-grid ${settings.columns === 3 ? "is-three" : ""} ${settings.columns === 1 ? "is-single" : ""}">
      ${options.map(([value, text]) => `
        <label class="choice-option ${settings.multiple ? "is-checkbox" : ""}">
          <input type="${settings.multiple ? "checkbox" : "radio"}" name="${name}" value="${value}" ${settings.required ? "required" : ""} />
          <span class="choice-control" aria-hidden="true"></span>
          <span>${text}</span>
        </label>`).join("")}
    </div>
  </fieldset>`;

const step = (config) => ({ optional: false, ...config });

const openReply = ({ name, type = "text", placeholder = "Digite sua resposta", autocomplete = "off", multiline = false, formatter, ...config }) => step({
  compactReply: true,
  answerName: name,
  ...config,
  content: () => `<div class="text-reply ${multiline ? "long-reply" : ""}">
    <label class="visually-hidden" for="${name}">${typeof config.question === "string" ? config.question : "Digite sua resposta"}</label>
    ${multiline
      ? `<textarea id="${name}" name="${name}" placeholder="${placeholder}" ${config.optional ? "" : "required"}></textarea>`
      : `<input id="${name}" name="${name}" type="${["date", "time", "number"].includes(type) ? "text" : type}"
          placeholder="${type === "date" ? "DD/MM/AAAA" : type === "time" ? "HH:MM" : placeholder}"
          ${type === "date" ? 'inputmode="numeric" maxlength="10" data-mask="date"' : ""}
          ${type === "time" ? 'inputmode="numeric" maxlength="5" data-mask="time"' : ""}
          ${type === "number" ? 'inputmode="decimal" data-input-kind="number"' : ""}
          ${config.optional ? "" : "required"} autocomplete="${autocomplete}" />`}
  </div>`,
  summary: (answers) => formatter ? formatter(answers[name], answers) : answers[name] || "Sem resposta",
});

const optionReply = ({ name, options, multiple = false, columns = 1, formatter, ...config }) => step({
  compactReply: true,
  answerName: name,
  autoAdvance: !multiple,
  ...config,
  content: () => `<div class="quick-choice">${choice(name, "Escolha uma opção", options, {
    multiple,
    columns,
    required: !config.optional && !multiple,
    optional: config.optional,
  })}</div>`,
  summary: (answers) => formatter ? formatter(answers[name], answers) : optionAnswer(options, answers[name]),
});

const scaleReply = ({ name, minLabel, maxLabel, ...config }) => step({
  compactReply: true,
  answerName: name,
  autoAdvance: true,
  ...config,
  content: () => `<div class="quick-scale">${tenPointScale(name, "Escolha um número")}</div><div class="scale-legend"><span>${minLabel}</span><span>${maxLabel}</span></div>`,
  summary: (answers) => `${answers[name] || "-"} de 10`,
});

const maritalOptions = [["single", "Solteiro(a)"], ["married", "Casado(a)"], ["separated", "Separado(a)"], ["divorced", "Divorciado(a)"], ["widowed", "Viúvo(a)"], ["partner", "União estável"]];
const raceOptions = [["white", "Branca"], ["brown", "Parda"], ["black", "Preta"], ["indigenous", "Indígena"], ["asian", "Amarela"], ["other", "Outra"]];
const educationOptions = [["elementary1", "Fundamental I incompleto"], ["elementary2", "Fundamental II incompleto"], ["elementary", "Fundamental completo"], ["highIncomplete", "Médio incompleto"], ["high", "Médio completo"], ["collegeIncomplete", "Superior incompleto"], ["college", "Superior completo"], ["postgrad", "Pós-graduação"]];
const employmentOptions = [["domestic", "Trabalho doméstico"], ["unemployed", "Desempregado(a)"], ["leave", "Afastado(a)"], ["full", "Horário integral"], ["part", "Horário parcial"], ["retired", "Aposentado(a)"], ["informal", "Trabalho informal ou bico"]];
const alcoholFrequencyOptions = [["never", "Nunca"], ["monthly", "Uma vez por mês ou menos"], ["2-4month", "2 a 4 vezes por mês"], ["2-4week", "2 a 4 vezes por semana"], ["daily", "Diariamente"]];
const doseOptions = [["0.5", "Meia dose ou menos"], ["1", "1 dose"], ["1.5", "1,5 dose"], ["2", "2 doses"], ["2.5", "2,5 doses"], ["3", "3 doses"], ["3.5", "3,5 doses"], ["4+", "4 doses ou mais"]];
const packOptions = [["0.5", "Meio maço ou menos"], ["1", "1 maço"], ["1.5", "1,5 maço"], ["2", "2 maços"], ["2.5", "2,5 maços"], ["3", "3 maços"], ["3.5", "3,5 maços"], ["4+", "4 maços ou mais"]];
const yearsOptions = [["1-5", "1 a 5 anos"], ["6-10", "6 a 10 anos"], ["11-15", "11 a 15 anos"], ["16-20", "16 a 20 anos"], ["21-25", "21 a 25 anos"], ["26-30", "26 a 30 anos"], ["31-35", "31 a 35 anos"], ["36+", "36 anos ou mais"]];
const sleepHoursOptions = [["lt3", "Menos de 3 horas"], ["4-6", "4 a 6 horas"], ["7", "7 horas"], ["8", "8 horas"], ["9", "9 horas"], ["10-12", "10 a 12 horas"], ["12+", "Mais de 12 horas"]];

const legacySteps = false ? [
  step({
    id: "welcome",
    section: "intro",
    title: "Vamos conhecer melhor o seu sono.",
    kicker: "Boas-vindas",
    welcome: true,
  }),
  step({
    id: "respondent",
    section: "intro",
    title: "Antes de começar",
    kicker: "Quem está respondendo",
    question: "Quem está preenchendo este questionário?",
    helper: "Esta informação ajuda a equipe a interpretar respostas observadas por familiares ou cuidadores.",
    content: () => choice("respondent", "Escolha uma opção", [
      ["patient", "O próprio paciente"], ["spouse", "Esposo(a) ou companheiro(a)"], ["child", "Filho(a)"], ["relative", "Outro parente"], ["caregiver", "Cuidador(a)"], ["staff", "Funcionário ou técnico"], ["other", "Outra pessoa"],
    ], { required: true, columns: 1 }),
    summary: (a) => labelFor("respondent", a.respondent),
  }),
  step({
    id: "identity_name",
    section: "identity",
    title: "Seu nome",
    kicker: "Identificação clínica",
    question: "Qual é o seu nome completo?",
    compactReply: true,
    content: () => `<div class="text-reply"><label class="visually-hidden" for="fullName">Nome completo</label><input id="fullName" name="fullName" type="text" placeholder="Digite sua resposta" required autocomplete="name" /></div>`,
    summary: (a) => a.fullName || "Nome não informado",
  }),
  step({
    id: "identity_birth_date",
    section: "identity",
    title: "Sua data de nascimento",
    kicker: "Identificação clínica",
    question: (a) => `Obrigado${a.fullName ? `, ${firstName(a.fullName)}` : ""}. Qual é a sua data de nascimento?`,
    compactReply: true,
    content: () => `<div class="text-reply date-reply"><label class="visually-hidden" for="birthDate">Data de nascimento</label><input id="birthDate" name="birthDate" type="date" required autocomplete="bday" /></div>`,
    summary: (a) => formatDate(a.birthDate) || "Data de nascimento não informada",
  }),
  step({
    id: "identity_profile",
    section: "identity",
    title: "Sobre você",
    kicker: "Identificação clínica",
    question: "Conte um pouco sobre seu perfil.",
    content: () => `<div class="field-grid three-columns">
      ${choice("sex", "Sexo", [["male", "Masculino"], ["female", "Feminino"]], { required: true, wide: true })}
      ${input("weight", "Peso (kg)", "number")}${input("height", "Altura (cm)", "number")}${input("profession", "Profissão")}
      ${input("birthplace", "Natural de", "text", { optional: true })}
      ${select("maritalStatus", "Estado civil", [["single", "Solteiro(a)"], ["married", "Casado(a)"], ["separated", "Separado(a)"], ["divorced", "Divorciado(a)"], ["widowed", "Viúvo(a)"], ["partner", "União estável"]])}
      ${select("race", "Raça/cor", [["white", "Branca"], ["brown", "Parda"], ["black", "Negra"], ["indigenous", "Indígena"], ["asian", "Amarela/asiática"], ["other", "Outra"]])}
    </div>`,
    summary: () => "Perfil informado",
  }),
  step({
    id: "contact",
    section: "identity",
    title: "Como podemos identificar seu cadastro?",
    kicker: "Contato",
    question: "Informe seus dados de contato.",
    helper: "Eles serão usados apenas no contexto do seu atendimento.",
    content: () => `<div class="field-grid">${input("email", "E-mail", "email", { required: true, autocomplete: "email" })}${input("phone", "Telefone ou celular", "tel", { required: true, autocomplete: "tel" })}${input("address", "Endereço", "text", { wide: true, autocomplete: "street-address" })}</div>`,
    summary: (a) => a.email || "Contato informado",
  }),
  step({
    id: "education_work",
    section: "identity",
    title: "Estudo e trabalho",
    kicker: "Rotina",
    question: "Como é sua rotina de estudo ou trabalho atualmente?",
    content: () => `<div class="field-grid">
      ${select("education", "Grau de escolaridade", [["elementary1", "Fundamental I incompleto"], ["elementary2", "Fundamental II incompleto"], ["elementary", "Fundamental completo"], ["highIncomplete", "Médio incompleto"], ["high", "Médio completo"], ["collegeIncomplete", "Superior incompleto"], ["college", "Superior completo"], ["postgrad", "Pós-graduação"]])}
      ${select("employment", "Situação de trabalho", [["domestic", "Trabalho doméstico"], ["unemployed", "Desempregado(a)"], ["leave", "Afastado(a)"], ["full", "Horário integral"], ["part", "Horário parcial"], ["retired", "Aposentado(a)"], ["informal", "Trabalho informal/bico"]])}
      ${choice("rotatingShift", "Trabalha em turno rotativo?", yesNo)}
      ${choice("nightWork", "Trabalha regularmente à noite?", yesNo)}
      ${choice("nightStudy", "Estuda à noite e trabalha durante o dia?", yesNo, { wide: true })}
      ${input("workHours", "Horário regular de trabalho", "text", { optional: true })}${input("studyHours", "Horário regular de estudo", "text", { optional: true })}
    </div>`,
    summary: () => "Rotina informada",
  }),
  step({
    id: "main_complaint",
    section: "history",
    title: "O que trouxe você até aqui?",
    kicker: "Sua história",
    question: "Qual é o seu principal problema de sono e há quanto tempo isso acontece?",
    helper: "Pode responder com suas próprias palavras. Não precisa usar termos médicos.",
    content: () => `<div class="field-grid">${textarea("mainComplaint", "Conte brevemente", { wide: true, required: true, placeholder: "Ex.: tenho dificuldade para dormir e acordo cansado há cerca de um ano." })}${input("complaintDuration", "Há quanto tempo?", "text", { wide: true, required: true, placeholder: "Ex.: 8 meses" })}</div>`,
    summary: (a) => a.mainComplaint || "Queixa principal informada",
  }),
  step({
    id: "problem_context",
    section: "history",
    title: "Como o problema foi percebido",
    kicker: "Sua história",
    question: "Quem percebeu o problema primeiro?",
    content: () => `<div class="field-grid">
      ${choice("firstSuspect", "Escolha uma opção", [["self", "Eu mesmo(a)"], ["spouse", "Esposo(a) ou companheiro(a)"], ["relative", "Outro parente"], ["doctor", "Meu médico"]], { required: true, wide: true })}
      ${choice("hasBedPartner", "Atualmente dorme com alguém no mesmo quarto ou cama?", yesNo)}
      <div class="conditional-contents" data-show-when="hasBedPartner:yes">${choice("partnerHelped", "Essa pessoa ajudou nas respostas?", yesNo)}</div>
    </div>`,
    summary: (a) => labelFor("firstSuspect", a.firstSuspect),
  }),
  step({
    id: "impact",
    section: "history",
    title: "Impactos no dia a dia",
    kicker: "Sua história",
    question: "O problema de sono tem afetado alguma destas situações?",
    helper: "Marque todas as alternativas que se aplicam.",
    optional: true,
    content: () => choice("impact", "Impactos percebidos", [["work", "Dificuldade para trabalhar"], ["study", "Dificuldade para estudar"], ["accident", "Acidentes com veículos"], ["driving", "Problemas ao dirigir"], ["leave", "Afastamento ou intenção de afastamento"]], { multiple: true, columns: 1, optional: true }),
    summary: (a) => countAnswer(a.impact, "impacto informado", "impactos informados"),
  }),
  step({
    id: "smoking",
    section: "habits",
    title: "Cigarros",
    kicker: "Hábitos",
    question: "Agora gostaria de entender seu histórico com cigarros.",
    content: () => `<div class="field-grid">
      ${choice("everSmoked", "Já fumou mais de cinco maços ao longo da vida?", yesNo, { required: true, wide: true })}
      <div class="conditional-contents" data-show-when="everSmoked:yes">
        ${choice("currentSmoker", "Fumou nos últimos 30 dias?", yesNo)}
        ${select("packsPerDay", "Quantidade diária", [["0.5", "Meio maço ou menos"], ["1", "1 maço"], ["1.5", "1,5 maço"], ["2", "2 maços"], ["2.5", "2,5 maços"], ["3", "3 maços"], ["3.5", "3,5 maços"], ["4+", "4 maços ou mais"]])}
        ${select("smokingYears", "Durante quantos anos?", [["1-5", "1 a 5 anos"], ["6-10", "6 a 10 anos"], ["11-15", "11 a 15 anos"], ["16-20", "16 a 20 anos"], ["21-25", "21 a 25 anos"], ["26-30", "26 a 30 anos"], ["31-35", "31 a 35 anos"], ["36+", "36 anos ou mais"]], { wide: true })}
      </div>
    </div>`,
    summary: (a) => a.everSmoked === "yes" ? "Histórico de tabagismo" : "Nunca fumou regularmente",
  }),
  step({
    id: "alcohol",
    section: "habits",
    title: "Bebidas alcoólicas",
    kicker: "Hábitos",
    question: "Com que frequência você consome bebidas alcoólicas?",
    content: () => `<div class="field-grid">
      ${select("alcoholFrequency", "Frequência", [["never", "Nunca"], ["monthly", "Uma vez por mês ou menos"], ["2-4month", "2 a 4 vezes por mês"], ["2-4week", "2 a 4 vezes por semana"], ["daily", "Diariamente"]], { required: true, wide: true })}
      <div class="conditional-contents" data-hide-when="alcoholFrequency:never">
        ${input("favoriteDrink", "Bebida mais consumida", "text", { optional: true })}
        ${select("alcoholDose", "Doses ou copos por ocasião", [["0.5", "Meia dose ou menos"], ["1", "1"], ["1.5", "1,5"], ["2", "2"], ["2.5", "2,5"], ["3", "3"], ["3.5", "3,5"], ["4+", "4 ou mais"]])}
        ${select("sixDoseFrequency", "Frequência de 6 ou mais doses", [["never", "Nunca"], ["monthly", "Uma vez por mês ou menos"], ["2-4month", "2 a 4 vezes por mês"], ["2-4week", "2 a 4 vezes por semana"], ["daily", "Diariamente"]])}
        ${input("alcoholTime", "Horário mais comum", "text", { optional: true, placeholder: "Ex.: após o jantar" })}
      </div>
    </div>`,
    summary: (a) => labelFor("alcoholFrequency", a.alcoholFrequency),
  }),
  step({
    id: "caffeine_meals",
    section: "habits",
    title: "Cafeína e refeições",
    kicker: "Hábitos",
    question: "Como é seu consumo de cafeína e sua rotina de refeições?",
    content: () => `<div class="field-grid three-columns">
      ${select("coffee", "Xícaras de café por dia", [["0", "Nenhuma"], ["lt3", "Menos de 3"], ["3-6", "3 a 6"], ["7-10", "7 a 10"], ["11-20", "11 a 20"], ["20+", "20 ou mais"]])}
      ${input("tea", "Xícaras de chá por dia", "number")}${input("soda", "Copos de refrigerante por dia", "number")}
      ${select("caffeinePills", "Cafeína em comprimido ou pó", [["never", "Nunca"], ["monthly", "Uma vez por mês ou menos"], ["2-4month", "2 a 4 vezes por mês"], ["2-4week", "2 a 4 vezes por semana"], ["daily", "Diariamente"]], { wide: true })}
      ${input("breakfastTime", "Café da manhã", "time")}${input("lunchTime", "Almoço", "time")}${input("dinnerTime", "Jantar", "time")}
      ${choice("afternoonSnack", "Faz lanche à tarde?", yesNo)}${choice("bedtimeSnack", "Faz lanche antes de dormir?", yesNo)}
    </div>`,
    summary: () => "Hábitos alimentares informados",
  }),
  step({
    id: "sleep_environment",
    section: "environment",
    title: "Onde você dorme",
    kicker: "Sono e ambiente",
    question: "Como é o ambiente em que você costuma dormir?",
    content: () => `<div class="field-grid">
      ${choice("sleepsAlone", "Dorme sozinho ou acompanhado?", [["alone", "Sozinho(a)"], ["accompanied", "Acompanhado(a)"]], { required: true, wide: true })}
      ${choice("tvBedroom", "Tem TV no quarto?", yesNo)}${choice("computerBedroom", "Tem computador no quarto?", yesNo)}
      ${choice("environmentIssues", "O que costuma incomodar?", [["noise", "Barulho"], ["cold", "Muito frio"], ["heat", "Muito calor"], ["light", "Claridade"], ["mattress", "Colchão desconfortável"]], { multiple: true, optional: true, wide: true })}
      ${textarea("environmentComment", "Quer comentar algo sobre o ambiente?", { optional: true, wide: true })}
    </div>`,
    summary: (a) => a.sleepsAlone === "alone" ? "Dorme sozinho(a)" : "Dorme acompanhado(a)",
  }),
  step({
    id: "sleep_schedule",
    section: "environment",
    title: "Seus horários de sono",
    kicker: "Sono e ambiente",
    question: "Pensando nos últimos seis meses, como costuma ser sua rotina de sono?",
    content: () => `<div class="field-grid three-columns">
      ${select("desiredSleep", "Horas que procura dormir", [["lt3", "Menos de 3"], ["4-6", "4 a 6"], ["7", "7"], ["8", "8"], ["9", "9"], ["10-12", "10 a 12"], ["12+", "Mais de 12"]], { required: true })}
      ${select("actualSleep", "Horas que realmente dorme", [["lt3", "Menos de 3"], ["4-6", "4 a 6"], ["7", "7"], ["8", "8"], ["9", "9"], ["10-12", "10 a 12"], ["12+", "Mais de 12"]], { required: true })}
      <div></div>
      ${input("weekdayBed", "Semana · vai para a cama", "time")}${input("weekdaySleep", "Semana · adormece", "time")}${input("weekdayWake", "Semana · acorda", "time")}${input("weekdayRise", "Semana · levanta", "time")}
      ${input("weekendBed", "Fim de semana · vai para a cama", "time")}${input("weekendSleep", "Fim de semana · adormece", "time")}${input("weekendWake", "Fim de semana · acorda", "time")}${input("weekendRise", "Fim de semana · levanta", "time")}
    </div>`,
    summary: (a) => `${a.actualSleep || "-"} horas de sono relatadas`,
  }),
  step({
    id: "sleep_satisfaction",
    section: "environment",
    title: "Como você se sente",
    kicker: "Sono e ambiente",
    question: "De 1 a 10, qual é sua satisfação com estes aspectos?",
    content: () => `<div class="scale-list">${tenPointScale("sleepQuality", "Qualidade atual do sono")}${tenPointScale("dayAlertness", "Estado de alerta durante o dia")}${tenPointScale("restedFeeling", "Sensação de descanso após uma noite de sono")}</div>`,
    summary: (a) => `Qualidade do sono: ${a.sleepQuality || "-"}/10`,
  }),
  step({
    id: "previous_care",
    section: "environment",
    title: "Avaliações anteriores",
    kicker: "Sono e ambiente",
    question: "Você já procurou um especialista ou realizou um estudo do sono?",
    helper: "Se tiver exames anteriores, leve uma cópia no dia do atendimento.",
    content: () => `<div class="field-grid">
      ${choice("sawSpecialist", "Já consultou especialista em sono?", yesNo, { required: true })}${choice("hadStudy", "Já fez polissonografia?", yesNo, { required: true })}
      <div class="conditional-contents" data-show-when="hadStudy:yes">
        ${input("studyWhen", "Quando fez o exame?", "text", { optional: true })}${input("studyWhere", "Onde fez?", "text", { optional: true })}
        ${input("studyDiagnosis", "Qual foi o diagnóstico?", "text", { wide: true, optional: true })}
        ${choice("startedTreatment", "Iniciou tratamento após o exame?", yesNo)}${input("treatment", "Qual tratamento?", "text", { optional: true })}
        ${choice("stoppedTreatment", "Interrompeu o tratamento?", yesNo)}${input("stoppedWhy", "Por quê?", "text", { optional: true })}
      </div>
    </div>`,
    summary: (a) => a.hadStudy === "yes" ? "Já realizou polissonografia" : "Sem polissonografia anterior",
  }),
  step({
    id: "night_activities",
    section: "environment",
    title: "Durante a noite",
    kicker: "Sono e ambiente",
    question: "Você costuma realizar alguma destas atividades durante a noite?",
    optional: true,
    content: () => `<div class="field-grid">
      ${choice("bathroomNight", "Levanta para ir ao banheiro?", yesNo)}${input("bathroomCount", "Quantas vezes?", "number", { optional: true })}
      ${choice("walkNight", "Anda pela casa acordado?", yesNo)}${input("walkCount", "Quantas vezes?", "number", { optional: true })}
      ${choice("eatNight", "Come durante a noite?", yesNo)}${input("eatCount", "Quantas vezes?", "number", { optional: true })}
      ${choice("smokeNight", "Fuma durante a noite?", yesNo)}${input("smokeCount", "Quantas vezes?", "number", { optional: true })}
      ${input("otherNightActivity", "Outras atividades", "text", { optional: true, wide: true })}
    </div>`,
    summary: () => "Atividades noturnas informadas",
  }),
  ...symptomGroups.flatMap((group) => group.items.map(([id, symptomQuestion]) => step({
    id,
    section: "symptoms",
    title: "Escolha a frequência",
    answerTitle: "Sua resposta",
    kicker: `${group.title} · ${Number(id.slice(1))} de 55`,
    question: symptomQuestion,
    helper: Number(id.slice(1)) === 1
      ? "Pensando nos últimos 12 meses, escolha a frequência que mais se aproxima da sua experiência."
      : "Pensando nos últimos 12 meses.",
    content: () => `<div class="quick-replies">${frequencyScale(id, "Com que frequência isso acontece?")}</div>${Number(id.slice(1)) === 1 ? `<p class="symptom-scale-help">Nunca: não ocorreu no último ano · Raramente: menos de uma vez por mês · Algumas vezes: poucas vezes por mês · Frequentemente: quase toda semana · Usualmente: 2 a 5 vezes por semana · Sempre: diariamente</p>` : ""}`,
    summary: (a) => frequencyLabel(a[id]),
  }))),
  step({
    id: "medical_history",
    section: "health",
    title: "Seu histórico médico",
    kicker: "Histórico de saúde",
    question: "Você possui ou já teve alguma destas condições?",
    helper: "Marque todas as alternativas que se aplicam.",
    optional: true,
    content: () => `<div class="medical-groups">${medicalGroups.map(([group, items], index) => `<section class="medical-group"><h3>${group}</h3>${choice(`medical_${index}`, group, items.map((item) => [slugify(item), item]), { multiple: true, columns: 3, optional: true })}</section>`).join("")}${textarea("otherMedical", "Outras doenças ou observações", { optional: true, wide: true })}</div>`,
    summary: (a) => `${Object.keys(a).filter((key) => key.startsWith("medical_") && answerCount(a[key])).reduce((total, key) => total + answerCount(a[key]), 0)} condições marcadas`,
  }),
  step({
    id: "surgeries_allergies",
    section: "health",
    title: "Cirurgias e alergias",
    kicker: "Histórico de saúde",
    question: "Você já fez alguma destas cirurgias ou possui alergia a medicamentos?",
    optional: true,
    content: () => `<div class="field-grid">${choice("surgeries", "Cirurgias realizadas", surgeries.map((item) => [slugify(item), item]), { multiple: true, columns: 1, optional: true, wide: true })}${input("surgeryYears", "Ano(s) das cirurgias", "text", { optional: true, wide: true, placeholder: "Ex.: septo nasal em 2018" })}${textarea("allergies", "Alergias a medicamentos e tipo de reação", { optional: true, wide: true })}</div>`,
    summary: (a) => countAnswer(a.surgeries, "cirurgia informada", "cirurgias informadas"),
  }),
  step({
    id: "medications",
    section: "health",
    title: "Medicamentos em uso",
    kicker: "Histórico de saúde",
    question: "Quais medicamentos você toma atualmente?",
    helper: "Inclua medicamentos para dormir, tranquilizantes e sedativos. Se não usar nenhum, pode pular.",
    optional: true,
    repeater: "medications",
    content: () => `<div class="repeat-list" data-repeat-list="medications"></div><button class="add-row" type="button" data-add-row="medications"><span>+</span> Adicionar medicamento</button>`,
    summary: (a) => countAnswer(a.medications, "medicamento informado", "medicamentos informados"),
  }),
  step({
    id: "family_history",
    section: "family",
    title: "Histórico familiar",
    kicker: "Família e perfil",
    question: "Alguém da sua família tem algum distúrbio do sono?",
    optional: true,
    content: () => `<div class="field-grid">
      ${choice("familySleep", "Existe histórico familiar?", yesNo, { required: true, wide: true })}
      ${choice("familyDisorders", "Quais distúrbios?", [["apnea", "Apneia diagnosticada"], ["narcolepsy", "Narcolepsia"], ["rls", "Pernas inquietas"], ["snoring", "Ronco alto"], ["sleepwalking", "Sonambulismo"], ["rem", "Distúrbio comportamental do REM"], ["bruxism", "Bruxismo"], ["insomnia", "Insônia"]], { multiple: true, columns: 1, optional: true, wide: true })}
      ${textarea("familyDetails", "Quem apresenta e quais problemas médicos possui?", { optional: true, wide: true })}
    </div>`,
    summary: (a) => a.familySleep === "yes" ? "Com histórico familiar" : "Sem histórico familiar informado",
  }),
  step({
    id: "personality",
    section: "family",
    title: "Para conhecer você além do sono",
    kicker: "Família e perfil",
    question: "Como você descreveria sua personalidade e a forma como se vê?",
    optional: true,
    content: () => `<div class="field-grid">${textarea("personality", "Conte com suas palavras", { optional: true, wide: true })}${textarea("comments", "Há algo mais que gostaria de contar à equipe?", { optional: true, wide: true })}</div>`,
    summary: () => "Perfil pessoal informado",
  }),
  step({
    id: "epworth",
    section: "epworth",
    title: "Escala de sonolência",
    kicker: "Etapa final",
    question: "Qual é a chance de você cochilar ou adormecer nestas situações?",
    helper: "Considere seu modo de vida atual. Se não viveu alguma situação, estime como ela poderia afetá-lo.",
    content: () => `<p class="epworth-intro">0 = nenhuma chance · 1 = pouca chance · 2 = chance moderada · 3 = grande chance</p><div class="scale-list">${epworthItems.map((item, index) => fourPointScale(`epworth_${index + 1}`, item)).join("")}</div><div class="epworth-total"><span>Total calculado</span><strong data-epworth-total>0 / 24</strong></div>`,
    summary: (a) => `Pontuação calculada: ${epworthTotal(a)}/24`,
  }),
  step({
    id: "review",
    section: "review",
    title: "Revise antes de concluir.",
    kicker: "Resumo",
    question: "Pronto. Organizei suas respostas para você revisar.",
    helper: "Você pode voltar a qualquer etapa para fazer alterações.",
    review: true,
  }),
] : [];

const identitySteps = [
  openReply({ id: "identity_name", section: "identity", title: "Seu nome", kicker: "Identificação clínica", name: "fullName", question: "Qual é o seu nome completo?", autocomplete: "name" }),
  openReply({ id: "identity_birth_date", section: "identity", title: "Sua data de nascimento", kicker: "Identificação clínica", name: "birthDate", type: "date", placeholder: "", autocomplete: "bday", question: (a) => `Obrigado${a.fullName ? `, ${firstName(a.fullName)}` : ""}. Qual é a sua data de nascimento?`, formatter: formatDate }),
  optionReply({ id: "identity_sex", section: "identity", title: "Sobre você", kicker: "Identificação clínica", name: "sex", question: "Qual é o seu sexo?", helper: "As opções seguem o questionário clínico original.", options: [["male", "Masculino"], ["female", "Feminino"]] }),
  openReply({ id: "identity_weight", section: "identity", title: "Seu peso", kicker: "Identificação clínica", name: "weight", type: "number", question: "Qual é o seu peso, em quilos?", placeholder: "Ex.: 72", formatter: (value) => value ? `${value} kg` : "Sem resposta" }),
  openReply({ id: "identity_height", section: "identity", title: "Sua altura", kicker: "Identificação clínica", name: "height", type: "number", question: "Qual é a sua altura, em centímetros?", placeholder: "Ex.: 170", formatter: (value) => value ? `${value} cm` : "Sem resposta" }),
  openReply({ id: "identity_profession", section: "identity", title: "Sua profissão", kicker: "Identificação clínica", name: "profession", question: "Qual é a sua profissão?" }),
  openReply({ id: "identity_birthplace", section: "identity", title: "Sua naturalidade", kicker: "Identificação clínica", name: "birthplace", question: "Você é natural de onde?", helper: "Se preferir, pode pular esta pergunta.", optional: true }),
  optionReply({ id: "identity_marital", section: "identity", title: "Estado civil", kicker: "Identificação clínica", name: "maritalStatus", question: "Qual é o seu estado civil?", options: maritalOptions }),
  optionReply({ id: "identity_race", section: "identity", title: "Raça ou cor", kicker: "Identificação clínica", name: "race", question: "Como você declara sua raça ou cor?", options: raceOptions }),
  openReply({ id: "identity_email", section: "identity", title: "Contato", kicker: "Identificação clínica", name: "email", type: "email", question: "Qual é o seu e-mail?", autocomplete: "email" }),
  openReply({ id: "identity_phone", section: "identity", title: "Contato", kicker: "Identificação clínica", name: "phone", type: "tel", question: "Qual é o seu telefone ou celular?", autocomplete: "tel" }),
  openReply({ id: "identity_address", section: "identity", title: "Endereço", kicker: "Identificação clínica", name: "address", question: "Qual é o seu endereço?", autocomplete: "street-address", optional: true }),
  optionReply({ id: "identity_education", section: "identity", title: "Escolaridade", kicker: "Identificação clínica", name: "education", question: "Qual é o seu grau de escolaridade?", options: educationOptions }),
  optionReply({ id: "identity_employment", section: "identity", title: "Trabalho", kicker: "Identificação clínica", name: "employment", question: "Qual é a sua situação de trabalho atualmente?", options: employmentOptions }),
  optionReply({ id: "identity_shift", section: "identity", title: "Sua rotina", kicker: "Trabalho e estudo", name: "rotatingShift", question: "Você trabalha em turno rotativo?", options: yesNo }),
  optionReply({ id: "identity_night_work", section: "identity", title: "Sua rotina", kicker: "Trabalho e estudo", name: "nightWork", question: "Você trabalha regularmente à noite?", options: yesNo }),
  optionReply({ id: "identity_night_study", section: "identity", title: "Sua rotina", kicker: "Trabalho e estudo", name: "nightStudy", question: "Você estuda à noite e trabalha durante o dia?", options: yesNo }),
  openReply({ id: "identity_work_hours", section: "identity", title: "Horário de trabalho", kicker: "Trabalho e estudo", name: "workHours", question: "Qual é o seu horário regular de trabalho?", placeholder: "Ex.: das 9h às 18h", optional: true, when: (a) => !["unemployed", "retired"].includes(a.employment) }),
  openReply({ id: "identity_study_hours", section: "identity", title: "Horário de estudo", kicker: "Trabalho e estudo", name: "studyHours", question: "Qual é o seu horário regular de estudo?", placeholder: "Ex.: das 19h às 22h", optional: true, when: (a) => a.nightStudy === "yes" }),
];

const historySteps = [
  openReply({ id: "main_complaint", section: "history", title: "O que trouxe você até aqui?", kicker: "Sua história", name: "mainComplaint", question: "Qual é o seu principal problema de sono?", helper: "Responda com suas palavras. Não precisa usar termos médicos.", multiline: true, placeholder: "Conte brevemente o que está acontecendo." }),
  openReply({ id: "complaint_duration", section: "history", title: "Duração do problema", kicker: "Sua história", name: "complaintDuration", question: "Há quanto tempo esse problema acontece?", placeholder: "Ex.: há oito meses" }),
  optionReply({ id: "first_suspect", section: "history", title: "Como o problema foi percebido", kicker: "Sua história", name: "firstSuspect", question: "Quem percebeu o problema primeiro?", options: [["self", "Eu mesmo(a)"], ["spouse", "Esposo(a) ou companheiro(a)"], ["relative", "Outro parente"], ["doctor", "Meu médico"]] }),
  optionReply({ id: "bed_partner", section: "history", title: "Quem dorme perto de você", kicker: "Sua história", name: "hasBedPartner", question: "Atualmente, alguém dorme com você no mesmo quarto ou na mesma cama?", options: yesNo }),
  optionReply({ id: "partner_helped", section: "history", title: "Ajuda nas respostas", kicker: "Sua história", name: "partnerHelped", question: "Essa pessoa ajudou você a responder o questionário?", options: yesNo, when: (a) => a.hasBedPartner === "yes" }),
  optionReply({ id: "impact", section: "history", title: "Impactos no dia a dia", kicker: "Sua história", name: "impact", question: "O problema de sono tem afetado alguma destas situações?", helper: "Você pode escolher mais de uma alternativa.", options: [["work", "Trabalho"], ["study", "Estudo"], ["accident", "Acidentes com veículos"], ["driving", "Direção de veículos"], ["leave", "Afastamento do trabalho"]], multiple: true, optional: true, skipLabel: "Nenhuma destas" }),
];

const habitSteps = [
  optionReply({ id: "ever_smoked", section: "habits", title: "Cigarros", kicker: "Hábitos", name: "everSmoked", question: "Você já fumou mais de cinco maços de cigarros ao longo da vida?", options: yesNo }),
  optionReply({ id: "current_smoker", section: "habits", title: "Cigarros", kicker: "Hábitos", name: "currentSmoker", question: "Você fumou cigarros nos últimos 30 dias?", options: yesNo, when: (a) => a.everSmoked === "yes" }),
  optionReply({ id: "packs_per_day", section: "habits", title: "Cigarros", kicker: "Hábitos", name: "packsPerDay", question: "Quantos maços você fuma ou fumava por dia?", options: packOptions, when: (a) => a.everSmoked === "yes" }),
  optionReply({ id: "smoking_years", section: "habits", title: "Cigarros", kicker: "Hábitos", name: "smokingYears", question: "Durante quantos anos você fuma ou fumou?", options: yearsOptions, when: (a) => a.everSmoked === "yes" }),
  optionReply({ id: "alcohol_frequency", section: "habits", title: "Bebidas alcoólicas", kicker: "Hábitos", name: "alcoholFrequency", question: "Com que frequência você toma bebidas alcoólicas?", options: alcoholFrequencyOptions }),
  openReply({ id: "favorite_drink", section: "habits", title: "Bebidas alcoólicas", kicker: "Hábitos", name: "favoriteDrink", question: "Qual bebida alcoólica você consome com mais frequência?", optional: true, when: (a) => a.alcoholFrequency && a.alcoholFrequency !== "never" }),
  optionReply({ id: "alcohol_dose", section: "habits", title: "Bebidas alcoólicas", kicker: "Hábitos", name: "alcoholDose", question: "Quantas doses ou copos você costuma beber por ocasião?", options: doseOptions, when: (a) => a.alcoholFrequency && a.alcoholFrequency !== "never" }),
  optionReply({ id: "six_doses", section: "habits", title: "Bebidas alcoólicas", kicker: "Hábitos", name: "sixDoseFrequency", question: "Com que frequência você toma seis ou mais doses em uma ocasião?", options: alcoholFrequencyOptions, when: (a) => a.alcoholFrequency && a.alcoholFrequency !== "never" }),
  openReply({ id: "alcohol_time", section: "habits", title: "Bebidas alcoólicas", kicker: "Hábitos", name: "alcoholTime", question: "Em que horário você costuma beber?", placeholder: "Ex.: após o jantar", optional: true, when: (a) => a.alcoholFrequency && a.alcoholFrequency !== "never" }),
  optionReply({ id: "coffee", section: "habits", title: "Cafeína", kicker: "Hábitos", name: "coffee", question: "Quantas xícaras de café você costuma beber por dia?", options: [["0", "Nenhuma"], ["lt3", "Menos de 3"], ["3-6", "3 a 6"], ["7-10", "7 a 10"], ["11-20", "11 a 20"], ["20+", "20 ou mais"]] }),
  openReply({ id: "tea", section: "habits", title: "Cafeína", kicker: "Hábitos", name: "tea", type: "number", question: "Quantas xícaras de chá preto ou mate você bebe por dia?", placeholder: "Digite a quantidade" }),
  openReply({ id: "soda", section: "habits", title: "Cafeína", kicker: "Hábitos", name: "soda", type: "number", question: "Quantos copos de refrigerante de cola ou guaraná você bebe por dia?", placeholder: "Digite a quantidade" }),
  optionReply({ id: "caffeine_pills", section: "habits", title: "Cafeína", kicker: "Hábitos", name: "caffeinePills", question: "Com que frequência você usa comprimidos com cafeína ou pó de guaraná?", options: alcoholFrequencyOptions }),
  openReply({ id: "breakfast_time", section: "habits", title: "Refeições", kicker: "Hábitos", name: "breakfastTime", type: "time", question: "Em que horário você costuma tomar café da manhã?", placeholder: "" }),
  openReply({ id: "lunch_time", section: "habits", title: "Refeições", kicker: "Hábitos", name: "lunchTime", type: "time", question: "Em que horário você costuma almoçar?", placeholder: "" }),
  openReply({ id: "dinner_time", section: "habits", title: "Refeições", kicker: "Hábitos", name: "dinnerTime", type: "time", question: "Em que horário você costuma jantar?", placeholder: "" }),
  optionReply({ id: "afternoon_snack", section: "habits", title: "Refeições", kicker: "Hábitos", name: "afternoonSnack", question: "Você costuma fazer um lanche à tarde?", options: yesNo }),
  optionReply({ id: "bedtime_snack", section: "habits", title: "Refeições", kicker: "Hábitos", name: "bedtimeSnack", question: "Você costuma fazer um lanche antes de dormir?", options: yesNo }),
];

const environmentSteps = [
  optionReply({ id: "sleeps_alone", section: "environment", title: "Onde você dorme", kicker: "Sono e ambiente", name: "sleepsAlone", question: "Você costuma dormir sozinho ou acompanhado?", options: [["alone", "Sozinho(a)"], ["accompanied", "Acompanhado(a)"]] }),
  optionReply({ id: "tv_bedroom", section: "environment", title: "Seu quarto", kicker: "Sono e ambiente", name: "tvBedroom", question: "Tem televisão no quarto?", options: yesNo }),
  optionReply({ id: "computer_bedroom", section: "environment", title: "Seu quarto", kicker: "Sono e ambiente", name: "computerBedroom", question: "Tem computador no quarto?", options: yesNo }),
  optionReply({ id: "environment_issues", section: "environment", title: "Seu quarto", kicker: "Sono e ambiente", name: "environmentIssues", question: "Alguma destas condições incomoda você no local onde dorme?", helper: "Você pode escolher mais de uma alternativa.", options: [["noise", "Barulho"], ["cold", "Muito frio"], ["heat", "Muito calor"], ["light", "Claridade"], ["mattress", "Colchão desconfortável"]], multiple: true, optional: true, skipLabel: "Nenhuma destas" }),
  openReply({ id: "environment_comment", section: "environment", title: "Seu quarto", kicker: "Sono e ambiente", name: "environmentComment", question: "Quer comentar mais alguma coisa sobre o ambiente onde dorme?", multiline: true, optional: true }),
  optionReply({ id: "desired_sleep", section: "environment", title: "Sua rotina de sono", kicker: "Sono e ambiente", name: "desiredSleep", question: "Quantas horas você procura dormir por noite?", options: sleepHoursOptions }),
  optionReply({ id: "actual_sleep", section: "environment", title: "Sua rotina de sono", kicker: "Sono e ambiente", name: "actualSleep", question: "Quantas horas você realmente dorme por noite?", options: sleepHoursOptions }),
  ...[["weekdayBed", "Em dias de semana, a que horas você costuma ir para a cama?"], ["weekdaySleep", "Em dias de semana, a que horas você costuma adormecer?"], ["weekdayWake", "Em dias de semana, a que horas você costuma acordar?"], ["weekdayRise", "Em dias de semana, a que horas você costuma se levantar?"], ["weekendBed", "Nos finais de semana, a que horas você costuma ir para a cama?"], ["weekendSleep", "Nos finais de semana, a que horas você costuma adormecer?"], ["weekendWake", "Nos finais de semana, a que horas você costuma acordar?"], ["weekendRise", "Nos finais de semana, a que horas você costuma se levantar?"]].map(([name, question]) => openReply({ id: name, section: "environment", title: "Seus horários", kicker: "Sono e ambiente", name, type: "time", question, placeholder: "" })),
  scaleReply({ id: "sleep_quality", section: "environment", title: "Qualidade do sono", kicker: "Sono e ambiente", name: "sleepQuality", question: "De 1 a 10, quão satisfeito você está com a qualidade atual do seu sono?", minLabel: "Pouco satisfeito", maxLabel: "Muito satisfeito" }),
  scaleReply({ id: "day_alertness", section: "environment", title: "Alerta durante o dia", kicker: "Sono e ambiente", name: "dayAlertness", question: "De 1 a 10, quão satisfeito você está com seu estado de alerta durante o dia?", minLabel: "Pouco satisfeito", maxLabel: "Muito satisfeito" }),
  scaleReply({ id: "rested_feeling", section: "environment", title: "Sensação de descanso", kicker: "Sono e ambiente", name: "restedFeeling", question: "De 1 a 10, quão satisfeito você está com sua sensação de descanso após uma noite de sono?", minLabel: "Pouco satisfeito", maxLabel: "Muito satisfeito" }),
  optionReply({ id: "saw_specialist", section: "environment", title: "Avaliações anteriores", kicker: "Sono e ambiente", name: "sawSpecialist", question: "Você já consultou um especialista em sono?", options: yesNo }),
  optionReply({ id: "had_study", section: "environment", title: "Avaliações anteriores", kicker: "Sono e ambiente", name: "hadStudy", question: "Você já realizou uma polissonografia?", helper: "Se tiver exames anteriores, leve uma cópia no dia do atendimento.", options: yesNo }),
  openReply({ id: "study_when", section: "environment", title: "Polissonografia anterior", kicker: "Sono e ambiente", name: "studyWhen", question: "Quando você realizou a polissonografia?", optional: true, when: (a) => a.hadStudy === "yes" }),
  openReply({ id: "study_where", section: "environment", title: "Polissonografia anterior", kicker: "Sono e ambiente", name: "studyWhere", question: "Onde você realizou esse exame?", optional: true, when: (a) => a.hadStudy === "yes" }),
  openReply({ id: "study_diagnosis", section: "environment", title: "Polissonografia anterior", kicker: "Sono e ambiente", name: "studyDiagnosis", question: "Qual foi o diagnóstico desse exame?", multiline: true, optional: true, when: (a) => a.hadStudy === "yes" }),
  optionReply({ id: "started_treatment", section: "environment", title: "Tratamento anterior", kicker: "Sono e ambiente", name: "startedTreatment", question: "Você iniciou algum tratamento depois da polissonografia?", options: yesNo, when: (a) => a.hadStudy === "yes" }),
  openReply({ id: "treatment", section: "environment", title: "Tratamento anterior", kicker: "Sono e ambiente", name: "treatment", question: "Qual tratamento você iniciou?", optional: true, when: (a) => a.startedTreatment === "yes" }),
  optionReply({ id: "stopped_treatment", section: "environment", title: "Tratamento anterior", kicker: "Sono e ambiente", name: "stoppedTreatment", question: "Você interrompeu esse tratamento?", options: yesNo, when: (a) => a.startedTreatment === "yes" }),
  openReply({ id: "stopped_why", section: "environment", title: "Tratamento anterior", kicker: "Sono e ambiente", name: "stoppedWhy", question: "Por que o tratamento foi interrompido?", multiline: true, optional: true, when: (a) => a.stoppedTreatment === "yes" }),
  optionReply({ id: "bathroom_night", section: "environment", title: "Durante a noite", kicker: "Sono e ambiente", name: "bathroomNight", question: "Você se levanta para ir ao banheiro durante a noite?", options: yesNo }),
  openReply({ id: "bathroom_count", section: "environment", title: "Durante a noite", kicker: "Sono e ambiente", name: "bathroomCount", type: "number", question: "Quantas vezes por noite você costuma ir ao banheiro?", placeholder: "Digite a quantidade", when: (a) => a.bathroomNight === "yes" }),
  optionReply({ id: "walk_night", section: "environment", title: "Durante a noite", kicker: "Sono e ambiente", name: "walkNight", question: "Você anda pela casa acordado durante a noite?", options: yesNo }),
  openReply({ id: "walk_count", section: "environment", title: "Durante a noite", kicker: "Sono e ambiente", name: "walkCount", type: "number", question: "Quantas vezes por noite isso costuma acontecer?", placeholder: "Digite a quantidade", when: (a) => a.walkNight === "yes" }),
  optionReply({ id: "eat_night", section: "environment", title: "Durante a noite", kicker: "Sono e ambiente", name: "eatNight", question: "Você come durante a noite?", options: yesNo }),
  openReply({ id: "eat_count", section: "environment", title: "Durante a noite", kicker: "Sono e ambiente", name: "eatCount", type: "number", question: "Quantas vezes por noite isso costuma acontecer?", placeholder: "Digite a quantidade", when: (a) => a.eatNight === "yes" }),
  optionReply({ id: "smoke_night", section: "environment", title: "Durante a noite", kicker: "Sono e ambiente", name: "smokeNight", question: "Você fuma durante a noite?", options: yesNo }),
  openReply({ id: "smoke_count", section: "environment", title: "Durante a noite", kicker: "Sono e ambiente", name: "smokeCount", type: "number", question: "Quantas vezes por noite isso costuma acontecer?", placeholder: "Digite a quantidade", when: (a) => a.smokeNight === "yes" }),
  openReply({ id: "other_night_activity", section: "environment", title: "Durante a noite", kicker: "Sono e ambiente", name: "otherNightActivity", question: "Você realiza alguma outra atividade durante a noite?", multiline: true, optional: true }),
];

const symptomSteps = symptomGroups.flatMap((group) => group.items.map(([id, symptomQuestion]) => optionReply({
  id,
  section: "symptoms",
  title: "Sintomas do sono",
  kicker: `${group.title} · ${Number(id.slice(1))} de 55`,
  name: id,
  question: symptomQuestion,
  helper: Number(id.slice(1)) === 1 ? "Pensando nos últimos 12 meses, escolha a frequência que mais se aproxima da sua experiência." : "Pensando nos últimos 12 meses.",
  options: frequencyOptions,
  columns: 3,
  formatter: frequencyLabel,
})));

const healthSteps = [
  ...medicalGroups.map(([group, items], index) => optionReply({ id: `medical_${index}`, section: "health", title: "Seu histórico médico", kicker: "Histórico de saúde", name: `medical_${index}`, question: `Você possui ou já teve alguma destas condições ${group.toLowerCase()}?`, helper: "Você pode escolher mais de uma alternativa.", options: items.map((item) => [slugify(item), item]), multiple: true, optional: true, skipLabel: "Nenhuma destas" })),
  openReply({ id: "other_medical", section: "health", title: "Outras condições", kicker: "Histórico de saúde", name: "otherMedical", question: "Existe outra doença ou condição de saúde que a equipe precisa conhecer?", multiline: true, optional: true }),
  optionReply({ id: "surgeries", section: "health", title: "Cirurgias", kicker: "Histórico de saúde", name: "surgeries", question: "Você já realizou alguma destas cirurgias?", helper: "Você pode escolher mais de uma alternativa.", options: surgeries.map((item) => [slugify(item), item]), multiple: true, optional: true, skipLabel: "Nenhuma destas" }),
  openReply({ id: "surgery_years", section: "health", title: "Cirurgias", kicker: "Histórico de saúde", name: "surgeryYears", question: "Em que ano essas cirurgias foram realizadas?", placeholder: "Ex.: cirurgia de septo em 2018", optional: true, when: (a) => Array.isArray(a.surgeries) && a.surgeries.length > 0 }),
  openReply({ id: "allergies", section: "health", title: "Alergias", kicker: "Histórico de saúde", name: "allergies", question: "Você tem alergia a algum medicamento?", helper: "Informe o medicamento e o tipo de reação.", multiline: true, optional: true }),
  optionReply({ id: "uses_medication", section: "health", title: "Medicamentos", kicker: "Histórico de saúde", name: "usesMedication", question: "Você toma algum medicamento atualmente?", options: yesNo }),
  openReply({ id: "medication_details", section: "health", title: "Medicamentos", kicker: "Histórico de saúde", name: "medicationDetails", question: "Quais medicamentos você toma?", helper: "Informe o nome, a dose e quantas vezes por dia.", multiline: true, when: (a) => a.usesMedication === "yes" }),
  optionReply({ id: "uses_sleep_medication", section: "health", title: "Medicamentos para dormir", kicker: "Histórico de saúde", name: "usesSleepMedication", question: "Você usa comprimidos para dormir, tranquilizantes ou sedativos?", options: yesNo }),
  openReply({ id: "sleep_medication_details", section: "health", title: "Medicamentos para dormir", kicker: "Histórico de saúde", name: "sleepMedicationDetails", question: "Quais são esses medicamentos?", helper: "Informe o nome, a dose e quantas vezes por dia.", multiline: true, when: (a) => a.usesSleepMedication === "yes" }),
];

const familySteps = [
  optionReply({ id: "family_sleep", section: "family", title: "Histórico familiar", kicker: "Família e perfil", name: "familySleep", question: "Alguém da sua família tem algum distúrbio do sono?", options: yesNo }),
  optionReply({ id: "family_disorders", section: "family", title: "Histórico familiar", kicker: "Família e perfil", name: "familyDisorders", question: "Quais distúrbios do sono existem na sua família?", helper: "Você pode escolher mais de uma alternativa.", options: [["apnea", "Apneia diagnosticada"], ["narcolepsy", "Narcolepsia"], ["rls", "Pernas inquietas"], ["snoring", "Ronco alto"], ["sleepwalking", "Sonambulismo"], ["rem", "Distúrbio comportamental do REM"], ["bruxism", "Bruxismo"], ["insomnia", "Insônia"]], multiple: true, optional: true, when: (a) => a.familySleep === "yes" }),
  openReply({ id: "family_details", section: "family", title: "Histórico familiar", kicker: "Família e perfil", name: "familyDetails", question: "Quem apresenta esses problemas?", helper: "Se souber, conte também outros problemas médicos dessa pessoa.", multiline: true, optional: true, when: (a) => a.familySleep === "yes" }),
  openReply({ id: "personality", section: "family", title: "Sobre você", kicker: "Família e perfil", name: "personality", question: "Como você descreveria sua personalidade e a forma como se vê?", multiline: true, optional: true }),
  openReply({ id: "comments", section: "family", title: "Comentários finais", kicker: "Família e perfil", name: "comments", question: "Há algo mais que você gostaria de contar à equipe?", multiline: true, optional: true }),
];

const epworthSteps = epworthItems.map((item, index) => optionReply({
  id: `epworth_${index + 1}`,
  section: "epworth",
  title: "Escala de sonolência",
  kicker: `Situação ${index + 1} de 8`,
  name: `epworth_${index + 1}`,
  question: `Qual é a chance de você cochilar ou adormecer nesta situação: ${item}`,
  helper: index === 0 ? "Considere seu modo de vida atual: 0 significa nenhuma chance e 3 significa grande chance." : undefined,
  options: [["0", "0 · Nenhuma chance"], ["1", "1 · Pouca chance"], ["2", "2 · Chance moderada"], ["3", "3 · Grande chance"]],
  formatter: (value) => `${value ?? "-"} ponto${value === "1" ? "" : "s"}`,
}));

const steps = [
  step({ id: "welcome", section: "intro", title: "Vamos conhecer melhor o seu sono.", kicker: "Boas-vindas", welcome: true }),
  optionReply({ id: "respondent", section: "intro", title: "Antes de começar", kicker: "Quem está respondendo", name: "respondent", question: "Quem está preenchendo este questionário?", helper: "Isso ajuda a equipe a interpretar respostas observadas por familiares ou cuidadores.", options: [["patient", "O próprio paciente"], ["spouse", "Esposo(a) ou companheiro(a)"], ["child", "Filho(a)"], ["relative", "Outro parente"], ["caregiver", "Cuidador(a)"], ["staff", "Funcionário ou técnico"], ["other", "Outra pessoa"]] }),
  ...identitySteps,
  ...historySteps,
  ...habitSteps,
  ...environmentSteps,
  ...symptomSteps,
  ...healthSteps,
  ...familySteps,
  ...epworthSteps,
  step({ id: "review", section: "review", title: "Revise antes de concluir.", kicker: "Resumo", question: "Pronto. Organizei suas respostas para você revisar.", helper: "Você pode voltar a qualquer etapa para fazer alterações.", review: true }),
];

let state = loadState();
let currentIndex = Math.min(state.currentIndex || 0, steps.length - 1);
let answers = state.answers || {};
let typingTimer = 0;
let autoAdvanceTimer = 0;

const stage = document.querySelector("[data-conversation-stage]");
const sectionTitle = document.querySelector("[data-section-title]");
const sectionKicker = document.querySelector("[data-section-kicker]");
const progressBar = document.querySelector("[data-global-progress]");
const progressLabel = document.querySelector("[data-progress-label]");
const progressDetail = document.querySelector("[data-progress-detail]");
const mobileProgress = document.querySelector("[data-mobile-progress]");
const journeyList = document.querySelector("[data-journey-list]");
const saveStatus = document.querySelector("[data-save-status]");
const fontButtons = [...document.querySelectorAll("[data-font-size]")];

function loadState() {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : {};
  } catch {
    return {};
  }
}

function saveState() {
  saveStatus?.classList.add("is-saving");
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ currentIndex, answers, updatedAt: new Date().toISOString() }));
  window.setTimeout(() => saveStatus?.classList.remove("is-saving"), 450);
}

function setFontSize(size, persist = true) {
  const validSize = ["default", "large", "xlarge"].includes(size) ? size : "default";
  document.documentElement.dataset.fontSize = validSize;
  fontButtons.forEach((button) => button.setAttribute("aria-pressed", String(button.dataset.fontSize === validSize)));
  if (persist) window.localStorage.setItem(`${STORAGE_KEY}-font-size`, validSize);
}

function slugify(value) {
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function escapeHtml(value = "") {
  return String(value).replace(/[&<>'"]/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[character]);
}

function firstName(value = "") {
  return value.trim().split(/\s+/)[0] || "";
}

function formatDate(value) {
  if (!value) return "";
  if (/^\d{2}\/\d{2}\/\d{4}$/.test(value)) return value;
  const [year, month, day] = value.split("-");
  return day && month && year ? `${day}/${month}/${year}` : value;
}

function applyInputMask(element) {
  if (!(element instanceof HTMLInputElement)) return;
  if (element.dataset.mask === "date") {
    const digits = element.value.replace(/\D/g, "").slice(0, 8);
    element.value = [digits.slice(0, 2), digits.slice(2, 4), digits.slice(4, 8)].filter(Boolean).join("/");
  }
  if (element.dataset.mask === "time") {
    const digits = element.value.replace(/\D/g, "").slice(0, 4);
    element.value = [digits.slice(0, 2), digits.slice(2, 4)].filter(Boolean).join(":");
  }
  if (element.dataset.inputKind === "number") {
    const normalized = element.value.replace(/[^0-9,.]/g, "").replace(/([,.].*)[,.]/g, "$1");
    element.value = normalized;
  }
}

function isValidMaskedDate(value) {
  const match = /^(\d{2})\/(\d{2})\/(\d{4})$/.exec(value);
  if (!match) return false;
  const [, day, month, year] = match.map(Number);
  const date = new Date(year, month - 1, day);
  return year >= 1900 && year <= new Date().getFullYear() && date.getFullYear() === year && date.getMonth() === month - 1 && date.getDate() === day;
}

function isValidMaskedTime(value) {
  const match = /^(\d{2}):(\d{2})$/.exec(value);
  return Boolean(match && Number(match[1]) <= 23 && Number(match[2]) <= 59);
}

function optionAnswer(options, value) {
  if (Array.isArray(value)) {
    if (!value.length) return "Nenhuma opção selecionada";
    return value.map((selected) => options.find(([option]) => option === selected)?.[1] || selected).join(", ");
  }
  return options.find(([option]) => option === value)?.[1] || value || "Sem resposta";
}

function answerCount(value) {
  if (Array.isArray(value)) return value.length;
  return value ? 1 : 0;
}

function countAnswer(value, singular, plural) {
  const count = answerCount(value);
  return `${count} ${count === 1 ? singular : plural}`;
}

function labelFor(name, value) {
  const labels = {
    respondent: { patient: "O próprio paciente", spouse: "Esposo(a) ou companheiro(a)", child: "Filho(a)", relative: "Outro parente", caregiver: "Cuidador(a)", staff: "Funcionário ou técnico", other: "Outra pessoa" },
    firstSuspect: { self: "Percebido pelo próprio paciente", spouse: "Percebido por companheiro(a)", relative: "Percebido por familiar", doctor: "Percebido pelo médico" },
    alcoholFrequency: { never: "Não consome álcool", monthly: "Álcool: uma vez ao mês ou menos", "2-4month": "Álcool: 2 a 4 vezes ao mês", "2-4week": "Álcool: 2 a 4 vezes por semana", daily: "Álcool: diariamente" },
  };
  return labels[name]?.[value] || value || "Não informado";
}

function frequencyLabel(value) {
  return frequencyOptions.find(([option]) => option === value)?.[1] || "Frequência não informada";
}

function tenPointScale(name, text) {
  return `<div class="scale-question"><p>${text}</p><div class="scale-options ten-points">${Array.from({ length: 10 }, (_, index) => `<label class="scale-option"><input type="radio" name="${name}" value="${index + 1}" required /><span>${index + 1}</span></label>`).join("")}</div><div class="scale-legend"><span>Pouco satisfeito</span><span>Muito satisfeito</span></div></div>`;
}

function frequencyScale(name, text) {
  return `<div class="symptom-question"><p>${text}</p><div class="scale-options">${frequencyOptions.map(([value, label]) => `<label class="scale-option"><input type="radio" name="${name}" value="${value}" required /><span>${label}</span></label>`).join("")}</div></div>`;
}

function fourPointScale(name, text) {
  return `<div class="scale-question"><p>${text}</p><div class="scale-options">${[["0", "0 · Nenhuma"], ["1", "1 · Pouca"], ["2", "2 · Moderada"], ["3", "3 · Grande"]].map(([value, label]) => `<label class="scale-option"><input type="radio" name="${name}" value="${value}" required /><span>${label}</span></label>`).join("")}</div></div>`;
}

function epworthTotal(data = answers) {
  return epworthItems.reduce((sum, _, index) => sum + Number(data[`epworth_${index + 1}`] || 0), 0);
}

function renderJourney() {
  const currentSection = steps[currentIndex].section;
  const currentSectionIndex = sections.findIndex(({ id }) => id === currentSection);
  journeyList.innerHTML = sections.map((section, index) => `<li data-index="${String(index + 1).padStart(2, "0")}" class="${index === currentSectionIndex ? "is-current" : ""} ${index < currentSectionIndex ? "is-complete" : ""}">${section.label}</li>`).join("");
}

function renderProgress() {
  const progress = Math.round((currentIndex / Math.max(steps.length - 1, 1)) * 100);
  progressBar.style.transform = `scaleX(${progress / 100})`;
  mobileProgress.textContent = `${progress}%`;
  progressDetail.textContent = `${progress}% concluído`;
  progressLabel.textContent = sections.find(({ id }) => id === steps[currentIndex].section)?.label || "Questionário";
  renderJourney();
}

function renderWelcome() {
  const hasProgress = Object.keys(answers).length > 0;
  stage.innerHTML = `
    <article class="welcome-card">
      <span class="welcome-mark brand-symbol" aria-hidden="true"></span>
      <h2>${hasProgress ? "Que bom ter você <em>de volta.</em>" : "Esta é uma conversa sobre <em>você e seu sono.</em>"}</h2>
      <p>Vou fazer perguntas sobre sua rotina, seu sono e sua história de saúde, como em uma entrevista antes da consulta. Responda com calma e peça ajuda a quem dorme perto de você quando necessário.</p>
      <ul class="welcome-facts">
        <li><strong>Passo a passo</strong><span>Uma etapa de cada vez, com contexto claro.</span></li>
        <li><strong>Salvamento automático</strong><span>Seu progresso fica neste dispositivo.</span></li>
        <li><strong>Você tem controle</strong><span>Revise e altere respostas antes de concluir.</span></li>
      </ul>
      <button class="primary-action" type="button" data-start>
        ${hasProgress ? "Continuar preenchimento" : "Começar questionário"}
        <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4 10h12M11 5l5 5-5 5" /></svg>
      </button>
    </article>`;
  stage.querySelector("[data-start]").addEventListener("click", () => goTo(1));
}

function previousSummary() {
  if (currentIndex <= 1) return "";
  let previousIndex = currentIndex - 1;
  while (previousIndex > 0 && steps[previousIndex].when && !steps[previousIndex].when(answers)) previousIndex -= 1;
  const previous = steps[previousIndex];
  if (!previous.summary) return "";
  return `<div class="previous-answer">${escapeHtml(previous.summary(answers))}</div>`;
}

function renderStep(stepConfig) {
  const content = stepConfig.content ? stepConfig.content() : "";
  const questionText = typeof stepConfig.question === "function" ? stepConfig.question(answers) : stepConfig.question;
  stage.innerHTML = `
    <form class="chat-thread" data-step-form novalidate>
      <div class="chat-row typing-row" data-typing role="status" aria-label="A equipe Neuro-Sono está digitando">
        <span class="chat-avatar brand-symbol" aria-hidden="true"></span>
        <div class="typing-message" aria-hidden="true">
          <span></span><span></span><span></span>
        </div>
      </div>
      <div class="conversation-reveal" data-conversation-reveal hidden>
        <div class="chat-row incoming-message">
          <span class="chat-avatar brand-symbol" aria-hidden="true"></span>
          <div class="chat-message">
            <small>Equipe Neuro-Sono</small>
            <p>${escapeHtml(questionText)}</p>
            ${stepConfig.helper ? `<p class="helper-copy">${stepConfig.helper}</p>` : ""}
          </div>
        </div>
        ${previousSummary()}
        <div class="answer-card reply-composer ${stepConfig.compactReply ? "is-compact-reply" : ""}">
          ${stepConfig.compactReply ? "" : `<div class="answer-card-header"><h2>${stepConfig.answerTitle || "Sua resposta"}</h2><span>${stepConfig.optional ? "Opcional" : "Etapa obrigatória"}</span></div>`}
          ${content}
          <p class="form-error" data-form-error role="alert"></p>
        </div>
        <div class="question-actions">
          <button class="secondary-action" type="button" data-back>
            <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4 10h12M11 5l5 5-5 5" /></svg>
            Voltar
          </button>
          <div class="question-actions-right">
            ${stepConfig.optional ? `<button class="skip-action" type="button" data-skip>${stepConfig.skipLabel || "Pular por enquanto"}</button>` : ""}
            ${stepConfig.autoAdvance ? "" : `<button class="primary-action" type="submit">
                Enviar resposta
                <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4 10h12M11 5l5 5-5 5" /></svg>
              </button>`}
          </div>
        </div>
      </div>
    </form>`;

  const form = stage.querySelector("[data-step-form]");
  restoreForm(form, stepConfig);
  bindForm(form, stepConfig);
  const typing = form.querySelector("[data-typing]");
  const reveal = form.querySelector("[data-conversation-reveal]");
  const revealConversation = () => {
    typing.hidden = true;
    reveal.hidden = false;
    window.requestAnimationFrame(() => {
      reveal.classList.add("is-visible");
      const directAnswer = form.querySelector('.reply-composer input:not([type="radio"]):not([type="checkbox"]), .reply-composer textarea');
      directAnswer?.focus({ preventScroll: true });
    });
  };
  window.clearTimeout(typingTimer);
  const typingDelay = ["symptoms", "epworth"].includes(stepConfig.section) ? 320 : 720;
  typingTimer = window.setTimeout(revealConversation, window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : typingDelay);
}

function restoreForm(form, stepConfig) {
  [...form.elements].forEach((element) => {
    if (!element.name || !(element.name in answers)) return;
    if (element.type === "radio") element.checked = answers[element.name] === element.value;
    else if (element.type === "checkbox") element.checked = Array.isArray(answers[element.name]) && answers[element.name].includes(element.value);
    else element.value = answers[element.name] ?? "";
  });
  if (stepConfig.repeater) renderRepeater(form, stepConfig.repeater, answers[stepConfig.repeater] || []);
  applyConditions(form);
  updateEpworth(form);
}

function bindForm(form, stepConfig) {
  form.querySelector("[data-back]").addEventListener("click", () => {
    collectForm(form, stepConfig);
    goTo(currentIndex - 1);
  });
  form.querySelector("[data-skip]")?.addEventListener("click", () => {
    if (stepConfig.answerName) delete answers[stepConfig.answerName];
    goTo(currentIndex + 1);
  });
  form.addEventListener("input", (event) => {
    applyInputMask(event.target);
    event.target?.removeAttribute?.("aria-invalid");
    form.querySelector("[data-form-error]").textContent = "";
    collectForm(form, stepConfig);
    applyConditions(form);
    updateEpworth(form);
    saveState();
  });
  form.addEventListener("change", (event) => {
    collectForm(form, stepConfig);
    applyConditions(form);
    updateEpworth(form);
    saveState();
    if (stepConfig.autoAdvance && event.target instanceof HTMLInputElement && event.target.type === "radio" && event.target.checked) {
      window.clearTimeout(autoAdvanceTimer);
      form.querySelectorAll("input").forEach((inputElement) => { inputElement.disabled = true; });
      autoAdvanceTimer = window.setTimeout(() => goTo(currentIndex + 1), 220);
    }
  });
  form.addEventListener("keydown", (event) => {
    const target = event.target;
    const isShortAnswer = target instanceof HTMLInputElement && !["radio", "checkbox", "button", "submit"].includes(target.type);
    if (event.key !== "Enter" || !isShortAnswer || event.isComposing) return;
    event.preventDefault();
    form.requestSubmit();
  });
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!validateForm(form, stepConfig)) return;
    collectForm(form, stepConfig);
    goTo(currentIndex + 1);
  });
  form.querySelector("[data-add-row]")?.addEventListener("click", () => {
    collectForm(form, stepConfig);
    const rows = answers[stepConfig.repeater] || [];
    rows.push({ name: "", dose: "", frequency: "" });
    answers[stepConfig.repeater] = rows;
    renderRepeater(form, stepConfig.repeater, rows);
    saveState();
  });
}

function fieldValue(form, name) {
  const checked = form.querySelector(`[name="${CSS.escape(name)}"]:checked`);
  return checked?.value ?? form.querySelector(`[name="${CSS.escape(name)}"]`)?.value ?? "";
}

function applyConditions(form) {
  form.querySelectorAll("[data-show-when], [data-hide-when]").forEach((element) => {
    const rule = element.dataset.showWhen || element.dataset.hideWhen;
    const [name, expected] = rule.split(":");
    const matches = fieldValue(form, name) === expected;
    element.hidden = element.dataset.showWhen ? !matches : matches;
  });
}

function validateForm(form, stepConfig) {
  const requiredInvalid = [...form.querySelectorAll("[required]")].filter((element) => {
    if (element.type === "radio") return !form.querySelector(`[name="${CSS.escape(element.name)}"]:checked`);
    return !element.value.trim();
  });
  const formatInvalid = [...form.querySelectorAll("[data-mask]")].filter((element) => {
    if (!element.value && !element.required) return false;
    return element.dataset.mask === "date" ? !isValidMaskedDate(element.value) : !isValidMaskedTime(element.value);
  });
  const invalid = [...requiredInvalid, ...formatInvalid];
  if (!invalid.length) return true;
  const unique = [...new Map(invalid.map((item) => [item.name, item])).values()];
  const first = unique[0];
  const formatMessage = first?.dataset.mask === "date"
    ? "Digite uma data válida no formato DD/MM/AAAA."
    : first?.dataset.mask === "time"
      ? "Digite um horário válido no formato HH:MM."
      : unique.length === 1
        ? "Responda o campo indicado para continuar."
        : `Faltam ${unique.length} respostas nesta etapa.`;
  form.querySelector("[data-form-error]").textContent = formatMessage;
  unique.forEach((element) => element.setAttribute("aria-invalid", "true"));
  unique[0]?.focus({ preventScroll: true });
  unique[0]?.scrollIntoView({ behavior: "smooth", block: "center" });
  return false;
}

function collectForm(form, stepConfig) {
  const data = new FormData(form);
  const names = new Set([...form.elements].map((element) => element.name).filter(Boolean));
  names.forEach((name) => {
    const elements = [...form.querySelectorAll(`[name="${CSS.escape(name)}"]`)];
    if (elements[0]?.type === "checkbox") answers[name] = data.getAll(name);
    else if (data.has(name)) answers[name] = data.get(name);
    else if (elements[0]?.type === "radio") delete answers[name];
    else answers[name] = "";
  });
  if (stepConfig.repeater) answers[stepConfig.repeater] = collectRepeater(form, stepConfig.repeater);
}

function renderRepeater(form, name, rows) {
  const list = form.querySelector(`[data-repeat-list="${name}"]`);
  if (!list) return;
  const effectiveRows = rows.length ? rows : [{ name: "", dose: "", frequency: "" }];
  list.innerHTML = effectiveRows.map((row, index) => `<div class="repeat-row" data-repeat-row>
    ${effectiveRows.length > 1 ? `<button class="remove-row" type="button" data-remove-row="${index}" aria-label="Remover medicamento"><svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 4l8 8M12 4l-8 8" /></svg></button>` : ""}
    <div class="field-grid three-columns">
      ${input(`medication_name_${index}`, "Nome", "text", { placeholder: "Nome do medicamento" })}
      ${input(`medication_dose_${index}`, "Dose", "text", { placeholder: "Ex.: 10 mg" })}
      ${input(`medication_frequency_${index}`, "Vezes ao dia", "text", { placeholder: "Ex.: 1 vez" })}
    </div>
  </div>`).join("");
  effectiveRows.forEach((row, index) => {
    const nameInput = list.querySelector(`[name="medication_name_${index}"]`);
    const doseInput = list.querySelector(`[name="medication_dose_${index}"]`);
    const frequencyInput = list.querySelector(`[name="medication_frequency_${index}"]`);
    nameInput.value = row.name || "";
    doseInput.value = row.dose || "";
    frequencyInput.value = row.frequency || "";
  });
  list.querySelectorAll("[data-remove-row]").forEach((button) => button.addEventListener("click", () => {
    const currentRows = collectRepeater(form, name);
    currentRows.splice(Number(button.dataset.removeRow), 1);
    answers[name] = currentRows;
    renderRepeater(form, name, currentRows);
    saveState();
  }));
}

function collectRepeater(form, name) {
  return [...form.querySelectorAll(`[data-repeat-list="${name}"] [data-repeat-row]`)].map((row) => {
    const fields = row.querySelectorAll("input");
    return { name: fields[0]?.value || "", dose: fields[1]?.value || "", frequency: fields[2]?.value || "" };
  }).filter((row) => row.name || row.dose || row.frequency);
}

function updateEpworth(form) {
  const total = form.querySelector("[data-epworth-total]");
  if (total) total.textContent = `${epworthTotal()} / 24`;
}

function renderReview() {
  const completedSections = new Set(steps.slice(1, currentIndex).map(({ section }) => section)).size;
  const answered = Object.values(answers).filter((value) => answerCount(value)).length;
  const flagged = ["s15", "s16", "s28", "s54"].filter((key) => answers[key] && answers[key] !== "never").length;
  stage.innerHTML = `
    <div class="chat-thread">
      <div class="chat-row"><span class="chat-avatar brand-symbol" aria-hidden="true"></span><div class="chat-message"><small>Equipe Neuro-Sono</small><p>Organizei suas respostas por assunto.</p><p class="helper-copy">Revise o conteúdo antes de concluir. Nenhuma resposta gera diagnóstico automático.</p></div></div>
      <div class="answer-card">
        <div class="answer-card-header"><h2>Resumo do questionário</h2><span>Revisão</span></div>
        <div class="review-summary"><div><strong>${completedSections}</strong><span>seções percorridas</span></div><div><strong>${answered}</strong><span>grupos respondidos</span></div><div><strong>${flagged}</strong><span>itens para revisão clínica</span></div></div>
        <div class="review-sections">${sections.slice(1, -1).map((section) => {
          const sectionSteps = steps.filter((item) => item.section === section.id);
          const firstIndex = steps.findIndex((item) => item.section === section.id);
          const summaries = sectionSteps.map((item) => item.summary?.(answers)).filter(Boolean).slice(0, 2).join(" · ");
          return `<section class="review-section"><div><h3>${section.label}</h3><p>${escapeHtml(summaries || "Respostas registradas")}</p></div><button type="button" data-edit-step="${firstIndex}">Revisar</button></section>`;
        }).join("")}</div>
      </div>
      <div class="question-actions">
        <button class="secondary-action" type="button" data-review-back><svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4 10h12M11 5l5 5-5 5" /></svg>Voltar</button>
        <button class="primary-action" type="button" data-finish>Concluir demonstração<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4 10h12M11 5l5 5-5 5" /></svg></button>
      </div>
    </div>`;
  stage.querySelector("[data-review-back]").addEventListener("click", () => goTo(currentIndex - 1));
  stage.querySelectorAll("[data-edit-step]").forEach((button) => button.addEventListener("click", () => goTo(Number(button.dataset.editStep))));
  stage.querySelector("[data-finish]").addEventListener("click", renderCompletion);
}

function renderCompletion() {
  progressBar.style.transform = "scaleX(1)";
  mobileProgress.textContent = "100%";
  progressDetail.textContent = "100% concluído";
  stage.innerHTML = `<article class="completion-card"><span class="completion-icon"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 12 4 4 8-9" /></svg></span><h2>Questionário preenchido.</h2><p>Esta é uma demonstração da experiência. As respostas permaneceram apenas neste navegador e não foram enviadas à Neuro-Sono. A integração segura com a clínica será definida em uma próxima etapa.</p><button class="primary-action" type="button" data-review-again>Revisar respostas<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4 10h12M11 5l5 5-5 5" /></svg></button></article>`;
  stage.querySelector("[data-review-again]").addEventListener("click", () => goTo(steps.length - 1));
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function goTo(index) {
  window.clearTimeout(typingTimer);
  window.clearTimeout(autoAdvanceTimer);
  const direction = index >= currentIndex ? 1 : -1;
  let nextIndex = Math.max(0, Math.min(index, steps.length - 1));
  while (nextIndex > 0 && nextIndex < steps.length - 1 && steps[nextIndex].when && !steps[nextIndex].when(answers)) {
    nextIndex += direction;
  }
  currentIndex = Math.max(0, Math.min(nextIndex, steps.length - 1));
  saveState();
  render();
  window.scrollTo({ top: 0, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
}

function render() {
  const current = steps[currentIndex];
  sectionTitle.textContent = current.title;
  sectionKicker.textContent = current.kicker;
  renderProgress();
  if (current.welcome) renderWelcome();
  else if (current.review) renderReview();
  else renderStep(current);
}

fontButtons.forEach((button) => button.addEventListener("click", () => setFontSize(button.dataset.fontSize)));
setFontSize(window.localStorage.getItem(`${STORAGE_KEY}-font-size`) || "default", false);
render();
}
