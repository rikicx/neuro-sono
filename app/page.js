import PageChrome from "@/components/PageChrome";
import ProcedureOverlay from "@/components/ProcedureOverlay";

export const metadata = {
  title: "Neuro-Sono — Neurologia e Sono",
  description: "Clínica Neuro-Sono — estudo dos distúrbios do sono e avaliações neurológicas em São Paulo.",
};

const PROCEDURES = [
  {
    number: "01",
    motif: "wave",
    eyebrow: "Estudo do sono",
    title: "Polissonografia",
    text: "Exame destacado pela Neuro-Sono para o estudo dos distúrbios do sono.",
    href: "/procedimentos/polissonografia/",
    secondary: false,
  },
  {
    number: "02",
    motif: "wave",
    eyebrow: "Avaliação neurológica",
    title: "Eletroencefalograma",
    text: "Exame apresentado pela clínica como uma de suas principais frentes de avaliação.",
    href: "/procedimentos/eletroencefalograma/",
    secondary: true,
  },
  {
    number: "03",
    motif: "pulse",
    eyebrow: "Tratamento da insônia",
    title: "TCC para Insônia",
    text: "Terapia Cognitivo-Comportamental para insônia crônica, com foco em mudanças de pensamento e comportamento que duram além da terapia.",
    href: "/procedimentos/tcc-insonia/",
    secondary: false,
  },
  {
    number: "04",
    motif: "pulse",
    eyebrow: "Tratamento da apneia",
    title: "CPAP, BIPAP e Servo-Ventilador",
    text: "Ajuste e acompanhamento dos equipamentos para Apneia Obstrutiva do Sono, com uma equipe treinada para cada caso.",
    href: "/procedimentos/cpap-bipap-servo-ventilador/",
    secondary: true,
  },
  {
    number: "05",
    motif: "wave",
    eyebrow: "Nervos e músculos",
    title: "Eletroneuromiografia",
    text: "Exame para diagnóstico e acompanhamento de condições que afetam nervos e músculos.",
    href: "/procedimentos/eletroneuromiografia/",
    secondary: false,
  },
  {
    number: "06",
    motif: "wave",
    eyebrow: "Funções cognitivas",
    title: "Avaliação Neuropsicológica",
    text: "Bateria de testes para avaliar memória, atenção e outras funções cognitivas.",
    href: "/procedimentos/avaliacao-neuropsicologica/",
    secondary: true,
  },
  {
    number: "07",
    motif: "pulse",
    eyebrow: "Sonolência excessiva",
    title: "Testes de Sonolência Diurna",
    text: "Avaliações objetivas da sonolência e da capacidade de permanecer acordado durante o dia.",
    href: "/procedimentos/sonolencia-diurna/",
    secondary: false,
  },
];

const ARTICLES = [
  { no: "01", type: "Procedimentos", title: "Botox no tratamento do bruxismo", href: "/conteudos/botox-no-tratamento-do-bruxismo/" },
  {
    no: "02",
    type: "Distúrbios do sono",
    title: "Doença de Willis-Ekbom ou síndrome das pernas inquietas?",
    href: "/conteudos/doenca-de-willis-ekbom-ou-sindrome-das-pernas-inquietas/",
  },
  { no: "03", type: "Orientação", title: "Cuidado com a faixa do ronco!", href: "/conteudos/cuidado-com-a-faixa-do-ronco/" },
];

const SOCIAL_TILES = Array.from({ length: 6 });

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  name: "Clínica Neuro-Sono",
  telephone: "+55 11 5081-6629",
  email: "neuro.sono.394@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rua Cláudio Rossi, 394",
    addressLocality: "São Paulo",
    addressRegion: "SP",
    addressCountry: "BR",
  },
};

export default function HomePage() {
  return (
    <PageChrome variant="home" currentHref="/" pageLabel="Conceito de repaginação">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }} />
      <section className="hero" id="inicio" aria-labelledby="hero-title" data-hero-scene>
        <div className="hero-stage">
          <div className="hero-media" data-parallax="0.18" aria-hidden="true"></div>
          <div className="hero-noise" aria-hidden="true"></div>
          <svg className="hero-wave" viewBox="0 0 1440 240" preserveAspectRatio="none" aria-hidden="true">
            <path
              className="hero-wave-line hero-wave-line-a"
              d="M-40 142.06 L-34 137.82 L-28 143.54 L-22 136.93 L-16 140.77 L-10 144.58 L-4 133.13 L2 143.07 L8 141.44 L14 136.9 L20 142.51 L26 138.34 L32 142.61 L38 139 L44 137.75 L50 145.12 L56 134.77 L62 139.17 L68 144.03 L74 135.59 L80 141.89 L86 139.32 L92 139.18 L98 142.62 L104 136.07 L110 142.99 L116 142.94 L122 134.79 L128 143.62 L134 141.96 L140 133.9 L146 143.07 L152 141.16 L158 137.46 L164 142.56 L170 138.21 L176 140.07 L182 141.49 L188 136.93 L194 142.87 L200 141.57 L206 134.35 L212 145.66 L218 140.58 L224 134.77 L230 144.33 L236 137.84 L242 138.1 L248 143.34 L254 137.81 L260 141.06 L266 139.26 L272 138.72 L278 143.95 L284 135.49 L290 139.67 L296 144.09 L302 134.94 L308 143.76 L314 139.88 L320 138.99 L326 141.18 L332 135.75 L338 145.02 L344 137.27 L350 140.05 L356 143.72 L362 131.09 L368 147.61 L374 145.77 L380 123.02 L386 145.84 L392 153.96 L398 126.86 L404 129.5 L410 158.91 L416 143.15 L422 116.04 L428 151.36 L434 160.09 L440 117.21 L446 137.37 L452 160.02 L458 131.09 L464 132.63 L470 147.23 L476 138.24 L482 141.35 L488 137.59 L494 137.78 L500 145.13 L506 135.84 L512 138.03 L518 145.38 L524 136.97 L530 138.3 L536 142.88 L542 137.8 L548 142.58 L554 140.15 L560 138.66 L566 144.55 L572 135.95 L578 139.89 L584 144.13 L590 134.65 L596 142.07 L602 143.55 L608 136.81 L614 141.74 L620 137.46 L626 141.75 L632 141.56 L638 135.56 L644 146.6 L650 136.88 L656 138.39 L662 145.13 L668 135.42 L674 141.04 L680 139.74 L686 139.92 L692 142.67 L698 134.39 L704 144.85 L710 139.78 L716 134.43 L722 145.29 L728 137.7 L734 138.38 L740 142.58 L746 138.7 L752 143.47 L758 136.54 L764 138.87 L770 145.73 L776 135.06 L782 140.69 L788 145.14 L794 133.7 L800 141.07 L806 142.97 L812 135.69 L818 142.42 L824 139.11 L830 137.82 L836 143.75 L842 137.11 L848 141.11 L854 144.33 L860 135.45 L866 143 L872 142.81 L878 133.34 L884 142.86 L890 142.06 L896 135.66 L902 142.76 L908 138.31 L914 138.81 L920 141.56 L926 135.77 L932 143.95 L938 139.75 L944 135.61 L950 145.66 L956 137.12 L962 138.49 L968 144.1 L974 136.97 L980 142.21 L986 136.78 L992 141.72 L998 142.16 L1004 134.31 L1010 145.16 L1016 138.78 L1022 139.82 L1028 156.11 L1034 162.72 L1040 171.28 L1046 164.04 L1052 144.72 L1058 127.1 L1064 97.52 L1070 96.35 L1076 105.64 L1082 110.27 L1088 134.09 L1094 142.88 L1100 139.56 L1106 142.3 L1112 137.61 L1118 140.34 L1124 142.28 L1130 135.85 L1136 144.46 L1142 140.94 L1148 135.04 L1154 145.46 L1160 140.05 L1166 135.68 L1172 143.85 L1178 138.91 L1184 136.66 L1190 143.1 L1196 137.14 L1202 140.95 L1208 141.88 L1214 137.36 L1220 144.24 L1226 139.75 L1232 135.03 L1238 146.07 L1244 137.91 L1250 136.9 L1256 145.79 L1262 136.14 L1268 141.48 L1274 140.3 L1280 139.63 L1286 144.33 L1292 135.15 L1298 142.32 L1304 142.41 L1310 133.37 L1316 143.84 L1322 138.42 L1328 137.47 L1334 142.85 L1340 137.78 L1346 143.75 L1352 136.11 L1358 140.6 L1364 143.95 L1370 134.87 L1376 141.94 L1382 140.87 L1388 136.58 L1394 142.33 L1400 137.23 L1406 141.39 L1412 139.65 L1418 136.88 L1424 145.45 L1430 138.1 L1436 137.3 L1442 145.59 L1448 137.39 L1454 138.04 L1460 143.49 L1466 137.41 L1472 141.39 L1478 140.52"
            />
            <path
              className="hero-wave-line hero-wave-line-b"
              d="M-40 165.88 L-34 164.31 L-28 164.24 L-22 170.31 L-16 163.72 L-10 169.12 L-4 161.26 L2 168.67 L8 164.44 L14 168.4 L20 165.27 L26 162.15 L32 167.46 L38 163.25 L44 171.21 L50 162.63 L56 167.81 L62 162.8 L68 167.23 L74 169.15 L80 164.48 L86 167.46 L92 161.11 L98 169.85 L104 166.43 L110 167.08 L116 167.24 L122 160.44 L128 169.93 L134 165.24 L140 168.4 L146 164.89 L152 162.01 L158 168.06 L164 162.74 L170 169.82 L176 165.11 L182 162.9 L188 167.36 L194 163.4 L200 171.26 L206 164.14 L212 164.44 L218 165.59 L224 163.09 L230 171.86 L236 163.01 L242 167.98 L248 162.87 L254 165.3 L260 169.99 L266 163.33 L272 169.08 L278 160.78 L284 168.18 L290 165.21 L296 168.99 L302 166.86 L308 162.71 L314 168.29 L320 163.19 L326 170.31 L332 162.07 L338 166.72 L344 162.94 L350 167.83 L356 167.1 L362 166.07 L368 166.81 L374 160.88 L380 170.59 L386 163.81 L392 170.14 L398 163.54 L404 164.52 L410 167.17 L416 163.93 L422 170.83 L428 161.65 L434 166.95 L440 164.59 L446 166.41 L452 170.17 L458 162.51 L464 167.35 L470 161.15 L476 169.1 L482 167.24 L488 163.98 L494 168.72 L500 161.33 L506 164.92 L512 164.04 L518 171.94 L524 177.36 L530 160.11 L536 153.85 L542 156.61 L548 179.65 L554 185.11 L560 158.82 L566 148.77 L572 153.22 L578 182.5 L584 179.01 L590 162 L596 155.88 L602 160.1 L608 174.45 L614 166.62 L620 166.75 L626 161.35 L632 167.89 L638 168.52 L644 164.8 L650 166.47 L656 160.71 L662 169.23 L668 164.73 L674 170.53 L680 163.68 L686 165.1 L692 164.72 L698 166.79 L704 169.23 L710 162.82 L716 168.82 L722 161.29 L728 169.62 L734 165.73 L740 167.14 L746 164.91 L752 162.41 L758 169.76 L764 163.54 L770 169.52 L776 163.59 L782 164.17 L788 169.1 L794 163.72 L800 170.78 L806 161.85 L812 165.48 L818 165.92 L824 165.9 L830 171.48 L836 161.88 L842 167.07 L848 165.09 L854 165.75 L860 170.71 L866 162.84 L872 167.09 L878 163.13 L884 167.89 L890 169.28 L896 163.68 L902 168.45 L908 160.69 L914 168.66 L920 166.76 L926 168.37 L932 170 L938 167.65 L944 178.99 L950 176.48 L956 185.32 L962 180.35 L968 184.35 L974 182.98 L980 182.87 L986 184.48 L992 173.54 L998 177.62 L1004 168.27 L1010 173.09 L1016 165.54 L1022 167.98 L1028 164.51 L1034 163.21 L1040 169.4 L1046 164.62 L1052 170.76 L1058 162.06 L1064 166.78 L1070 164.1 L1076 168.02 L1082 168.33 L1088 161.9 L1094 168.6 L1100 161.61 L1106 170.23 L1112 166.37 L1118 165.23 L1124 166.8 L1130 161.96 L1136 170.99 L1142 165.13 L1148 167.54 L1154 164.69 L1160 161.91 L1166 169.5 L1172 165.01 L1178 168.87 L1184 164.81 L1190 163.25 L1196 170.21 L1202 163.37 L1208 169.63 L1214 163.13 L1220 163.89 L1226 167.32 L1232 164.58 L1238 171.3 L1244 161.13 L1250 166.19 L1256 164.28 L1262 166.96 L1268 169.53 L1274 162.09 L1280 167.36 L1286 161.95 L1292 170.61 L1298 165.36 L1304 167.83 L1310 164.8 L1316 163.11 L1322 169.18 L1328 164.18 L1334 170.44 L1340 160.33 L1346 167.25 L1352 162.91 L1358 169.4 L1364 167.26 L1370 165.13 L1376 166.9 L1382 161.93 L1388 171.3 L1394 164.37 L1400 168.42 L1406 162.32 L1412 165.99 L1418 168.32 L1424 165.43 L1430 168.5 L1436 161.78 L1442 168.06 L1448 165.02 L1454 166.31 L1460 169.4 L1466 160.7 L1472 168.69 L1478 163.8"
            />
            <path
              className="hero-wave-pulse hero-wave-pulse-a"
              d="M-40 142.06 L-34 137.82 L-28 143.54 L-22 136.93 L-16 140.77 L-10 144.58 L-4 133.13 L2 143.07 L8 141.44 L14 136.9 L20 142.51 L26 138.34 L32 142.61 L38 139 L44 137.75 L50 145.12 L56 134.77 L62 139.17 L68 144.03 L74 135.59 L80 141.89 L86 139.32 L92 139.18 L98 142.62 L104 136.07 L110 142.99 L116 142.94 L122 134.79 L128 143.62 L134 141.96 L140 133.9 L146 143.07 L152 141.16 L158 137.46 L164 142.56 L170 138.21 L176 140.07 L182 141.49 L188 136.93 L194 142.87 L200 141.57 L206 134.35 L212 145.66 L218 140.58 L224 134.77 L230 144.33 L236 137.84 L242 138.1 L248 143.34 L254 137.81 L260 141.06 L266 139.26 L272 138.72 L278 143.95 L284 135.49 L290 139.67 L296 144.09 L302 134.94 L308 143.76 L314 139.88 L320 138.99 L326 141.18 L332 135.75 L338 145.02 L344 137.27 L350 140.05 L356 143.72 L362 131.09 L368 147.61 L374 145.77 L380 123.02 L386 145.84 L392 153.96 L398 126.86 L404 129.5 L410 158.91 L416 143.15 L422 116.04 L428 151.36 L434 160.09 L440 117.21 L446 137.37 L452 160.02 L458 131.09 L464 132.63 L470 147.23 L476 138.24 L482 141.35 L488 137.59 L494 137.78 L500 145.13 L506 135.84 L512 138.03 L518 145.38 L524 136.97 L530 138.3 L536 142.88 L542 137.8 L548 142.58 L554 140.15 L560 138.66 L566 144.55 L572 135.95 L578 139.89 L584 144.13 L590 134.65 L596 142.07 L602 143.55 L608 136.81 L614 141.74 L620 137.46 L626 141.75 L632 141.56 L638 135.56 L644 146.6 L650 136.88 L656 138.39 L662 145.13 L668 135.42 L674 141.04 L680 139.74 L686 139.92 L692 142.67 L698 134.39 L704 144.85 L710 139.78 L716 134.43 L722 145.29 L728 137.7 L734 138.38 L740 142.58 L746 138.7 L752 143.47 L758 136.54 L764 138.87 L770 145.73 L776 135.06 L782 140.69 L788 145.14 L794 133.7 L800 141.07 L806 142.97 L812 135.69 L818 142.42 L824 139.11 L830 137.82 L836 143.75 L842 137.11 L848 141.11 L854 144.33 L860 135.45 L866 143 L872 142.81 L878 133.34 L884 142.86 L890 142.06 L896 135.66 L902 142.76 L908 138.31 L914 138.81 L920 141.56 L926 135.77 L932 143.95 L938 139.75 L944 135.61 L950 145.66 L956 137.12 L962 138.49 L968 144.1 L974 136.97 L980 142.21 L986 136.78 L992 141.72 L998 142.16 L1004 134.31 L1010 145.16 L1016 138.78 L1022 139.82 L1028 156.11 L1034 162.72 L1040 171.28 L1046 164.04 L1052 144.72 L1058 127.1 L1064 97.52 L1070 96.35 L1076 105.64 L1082 110.27 L1088 134.09 L1094 142.88 L1100 139.56 L1106 142.3 L1112 137.61 L1118 140.34 L1124 142.28 L1130 135.85 L1136 144.46 L1142 140.94 L1148 135.04 L1154 145.46 L1160 140.05 L1166 135.68 L1172 143.85 L1178 138.91 L1184 136.66 L1190 143.1 L1196 137.14 L1202 140.95 L1208 141.88 L1214 137.36 L1220 144.24 L1226 139.75 L1232 135.03 L1238 146.07 L1244 137.91 L1250 136.9 L1256 145.79 L1262 136.14 L1268 141.48 L1274 140.3 L1280 139.63 L1286 144.33 L1292 135.15 L1298 142.32 L1304 142.41 L1310 133.37 L1316 143.84 L1322 138.42 L1328 137.47 L1334 142.85 L1340 137.78 L1346 143.75 L1352 136.11 L1358 140.6 L1364 143.95 L1370 134.87 L1376 141.94 L1382 140.87 L1388 136.58 L1394 142.33 L1400 137.23 L1406 141.39 L1412 139.65 L1418 136.88 L1424 145.45 L1430 138.1 L1436 137.3 L1442 145.59 L1448 137.39 L1454 138.04 L1460 143.49 L1466 137.41 L1472 141.39 L1478 140.52"
            />
            <path
              className="hero-wave-pulse hero-wave-pulse-b"
              d="M-40 165.88 L-34 164.31 L-28 164.24 L-22 170.31 L-16 163.72 L-10 169.12 L-4 161.26 L2 168.67 L8 164.44 L14 168.4 L20 165.27 L26 162.15 L32 167.46 L38 163.25 L44 171.21 L50 162.63 L56 167.81 L62 162.8 L68 167.23 L74 169.15 L80 164.48 L86 167.46 L92 161.11 L98 169.85 L104 166.43 L110 167.08 L116 167.24 L122 160.44 L128 169.93 L134 165.24 L140 168.4 L146 164.89 L152 162.01 L158 168.06 L164 162.74 L170 169.82 L176 165.11 L182 162.9 L188 167.36 L194 163.4 L200 171.26 L206 164.14 L212 164.44 L218 165.59 L224 163.09 L230 171.86 L236 163.01 L242 167.98 L248 162.87 L254 165.3 L260 169.99 L266 163.33 L272 169.08 L278 160.78 L284 168.18 L290 165.21 L296 168.99 L302 166.86 L308 162.71 L314 168.29 L320 163.19 L326 170.31 L332 162.07 L338 166.72 L344 162.94 L350 167.83 L356 167.1 L362 166.07 L368 166.81 L374 160.88 L380 170.59 L386 163.81 L392 170.14 L398 163.54 L404 164.52 L410 167.17 L416 163.93 L422 170.83 L428 161.65 L434 166.95 L440 164.59 L446 166.41 L452 170.17 L458 162.51 L464 167.35 L470 161.15 L476 169.1 L482 167.24 L488 163.98 L494 168.72 L500 161.33 L506 164.92 L512 164.04 L518 171.94 L524 177.36 L530 160.11 L536 153.85 L542 156.61 L548 179.65 L554 185.11 L560 158.82 L566 148.77 L572 153.22 L578 182.5 L584 179.01 L590 162 L596 155.88 L602 160.1 L608 174.45 L614 166.62 L620 166.75 L626 161.35 L632 167.89 L638 168.52 L644 164.8 L650 166.47 L656 160.71 L662 169.23 L668 164.73 L674 170.53 L680 163.68 L686 165.1 L692 164.72 L698 166.79 L704 169.23 L710 162.82 L716 168.82 L722 161.29 L728 169.62 L734 165.73 L740 167.14 L746 164.91 L752 162.41 L758 169.76 L764 163.54 L770 169.52 L776 163.59 L782 164.17 L788 169.1 L794 163.72 L800 170.78 L806 161.85 L812 165.48 L818 165.92 L824 165.9 L830 171.48 L836 161.88 L842 167.07 L848 165.09 L854 165.75 L860 170.71 L866 162.84 L872 167.09 L878 163.13 L884 167.89 L890 169.28 L896 163.68 L902 168.45 L908 160.69 L914 168.66 L920 166.76 L926 168.37 L932 170 L938 167.65 L944 178.99 L950 176.48 L956 185.32 L962 180.35 L968 184.35 L974 182.98 L980 182.87 L986 184.48 L992 173.54 L998 177.62 L1004 168.27 L1010 173.09 L1016 165.54 L1022 167.98 L1028 164.51 L1034 163.21 L1040 169.4 L1046 164.62 L1052 170.76 L1058 162.06 L1064 166.78 L1070 164.1 L1076 168.02 L1082 168.33 L1088 161.9 L1094 168.6 L1100 161.61 L1106 170.23 L1112 166.37 L1118 165.23 L1124 166.8 L1130 161.96 L1136 170.99 L1142 165.13 L1148 167.54 L1154 164.69 L1160 161.91 L1166 169.5 L1172 165.01 L1178 168.87 L1184 164.81 L1190 163.25 L1196 170.21 L1202 163.37 L1208 169.63 L1214 163.13 L1220 163.89 L1226 167.32 L1232 164.58 L1238 171.3 L1244 161.13 L1250 166.19 L1256 164.28 L1262 166.96 L1268 169.53 L1274 162.09 L1280 167.36 L1286 161.95 L1292 170.61 L1298 165.36 L1304 167.83 L1310 164.8 L1316 163.11 L1322 169.18 L1328 164.18 L1334 170.44 L1340 160.33 L1346 167.25 L1352 162.91 L1358 169.4 L1364 167.26 L1370 165.13 L1376 166.9 L1382 161.93 L1388 171.3 L1394 164.37 L1400 168.42 L1406 162.32 L1412 165.99 L1418 168.32 L1424 165.43 L1430 168.5 L1436 161.78 L1442 168.06 L1448 165.02 L1454 166.31 L1460 169.4 L1466 160.7 L1472 168.69 L1478 163.8"
            />
          </svg>

          <div className="hero-content shell">
            <p className="eyebrow hero-eyebrow" data-reveal>
              Neurologia · Sono · Ciência
            </p>
            <h1 id="hero-title">
              <span className="line-mask">
                <span>Compreender o sono.</span>
              </span>
              <span className="line-mask">
                <span className="italic">Cuidar por inteiro.</span>
              </span>
            </h1>
            <div className="hero-bottom" data-reveal>
              <p>Experiência interdisciplinar no estudo dos distúrbios do sono e em avaliações neurológicas.</p>
              <div className="hero-ctas">
                <a className="button button-light" href="https://wa.me/5511940397143" target="_blank" rel="noreferrer">
                  Falar com a equipe
                  <svg viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M4 10h12M11 5l5 5-5 5" />
                  </svg>
                </a>
                <a className="text-link" href="#sobre">
                  Conheça a clínica
                </a>
              </div>
            </div>
          </div>
          <div className="scroll-cue" aria-hidden="true">
            <span></span>Role para explorar
          </div>
        </div>
      </section>

      <section className="services" id="exames" aria-label="Procedimentos em destaque">
        <div className="shell services-heading">
          <div className="services-heading-copy">
            <p className="eyebrow" data-reveal>
              Procedimentos em destaque
            </p>
            <h2 className="display-title" data-reveal>
              O sono deixa sinais. <em>A ciência ajuda a lê-los.</em>
            </h2>
          </div>
          <div className="services-nav">
            <button className="carousel-arrow" type="button" data-services-prev aria-label="Procedimento anterior">
              <svg viewBox="0 0 20 20" aria-hidden="true">
                <path d="M16 10H4M9 5l-5 5 5 5" />
              </svg>
            </button>
            <button className="carousel-arrow" type="button" data-services-next aria-label="Próximo procedimento">
              <svg viewBox="0 0 20 20" aria-hidden="true">
                <path d="M4 10h12M11 5l5 5-5 5" />
              </svg>
            </button>
          </div>
        </div>

        <div className="services-track" data-services-track>
          {PROCEDURES.map((proc) => (
            <article key={proc.href} className={`exam-card${proc.secondary ? " exam-card-secondary" : ""}`} data-reveal>
              {proc.motif === "pulse" ? (
                <div className="exam-card-motif is-pulse" aria-hidden="true">
                  <span></span>
                  <span></span>
                </div>
              ) : (
                <div className="exam-card-motif is-wave" aria-hidden="true">
                  <svg viewBox="0 0 120 60" preserveAspectRatio="none">
                    <path d="M0 31 8 21 13 37 19 17 25 40 31 26 37 34 43 13 50 44 57 24 63 36 70 19 77 39 84 25 91 41 98 16 105 35 112 27 120 31" />
                  </svg>
                </div>
              )}
              <div className="exam-number">{proc.number}</div>
              <div className="exam-copy">
                <p className="eyebrow">{proc.eyebrow}</p>
                <h3>{proc.title}</h3>
                <p>{proc.text}</p>
                <a className="card-link" href={proc.href} data-procedure-trigger>
                  <span>Ver detalhes</span>
                  <svg viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M4 10h12M11 5l5 5-5 5" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <ProcedureOverlay />

      <section className="intro intro-scene section-light" data-intro-scene>
        <span id="sobre" className="intro-anchor" aria-hidden="true"></span>
        <div className="intro-sticky">
          <div className="intro-symbol" aria-hidden="true">
            <i></i>
            <i></i>
            <i></i>
            <i></i>
          </div>
          <div className="shell intro-grid">
            <div className="intro-meta">
              <p className="eyebrow">Sobre a Neuro-Sono</p>
              <p className="section-index" aria-hidden="true">
                01
              </p>
              <div className="intro-timeline" aria-hidden="true">
                <span>Década de 90</span>
                <i></i>
                <span>Hoje</span>
              </div>
            </div>
            <div className="intro-copy-stage">
              <h2 className="display-title">Uma jornada de cuidado guiada por experiência, escuta e precisão.</h2>
              <p className="intro-copy">
                A Neuro-Sono atua no diagnóstico e tratamento dos problemas do sono desde a década de 90, com atendimento
                interdisciplinar e equipe especializada.
              </p>
              <a className="text-link dark intro-link" href="/equipe/">
                Conheça o corpo clínico
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="story" aria-label="Diferenciais da Neuro-Sono" data-story>
        <div className="story-sticky">
          <div className="story-scanline" aria-hidden="true"></div>
          <div className="story-orbit" aria-hidden="true">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="shell story-layout">
            <div className="story-aside">
              <p className="eyebrow">Uma visão integrada</p>
              <div className="story-counter">
                <span data-story-current>01</span>
                <i></i>
                <span>03</span>
              </div>
            </div>
            <div className="story-steps">
              <article className="story-step is-active" data-story-step="0">
                <span className="story-ghost" aria-hidden="true">
                  História
                </span>
                <span className="story-kicker">Experiência</span>
                <h3>Desde a década de 90 estudando as relações entre sono e saúde.</h3>
              </article>
              <article className="story-step" data-story-step="1">
                <span className="story-ghost" aria-hidden="true">
                  Integração
                </span>
                <span className="story-kicker">Integração</span>
                <h3>Atendimento interdisciplinar para observar cada paciente de forma ampla.</h3>
              </article>
              <article className="story-step" data-story-step="2">
                <span className="story-ghost" aria-hidden="true">
                  Precisão
                </span>
                <span className="story-kicker">Qualidade</span>
                <h3>Certificações profissionais no Brasil e no exterior, além do selo da SBNC.</h3>
              </article>
            </div>
          </div>
          <div className="story-progress" aria-hidden="true">
            <span data-story-progress></span>
          </div>
        </div>
      </section>

      <section className="manifesto section-dark">
        <div className="manifesto-orb" data-parallax="-0.08" aria-hidden="true"></div>
        <div className="shell manifesto-grid">
          <p className="eyebrow" data-reveal>
            Cuidado interdisciplinar
          </p>
          <blockquote data-reveal>
            &ldquo;Dormir é um processo complexo. Entender seus sinais pede tempo, conhecimento e diferentes perspectivas.&rdquo;
          </blockquote>
          <p className="manifesto-note" data-reveal>
            Uma nova experiência digital para apresentar a trajetória, a ciência e os canais de atendimento da Neuro-Sono com
            mais clareza.
          </p>
        </div>
      </section>

      <section className="science section-light" id="ciencia">
        <div className="shell science-heading">
          <div>
            <p className="eyebrow" data-reveal>
              Conteúdo científico
            </p>
            <h2 className="display-title" data-reveal>
              Conhecimento que
              <br />
              <em>continua em movimento.</em>
            </h2>
          </div>
        </div>

        <div className="shell article-grid">
          {ARTICLES.map((article) => (
            <a key={article.href} className="article-card" data-reveal href={article.href}>
              <span className="article-no">{article.no}</span>
              <span className="article-type">{article.type}</span>
              <h3>{article.title}</h3>
              <svg className="article-arrow" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M5 15 15 5M7 5h8v8" />
              </svg>
            </a>
          ))}
        </div>
      </section>

      <section className="social-feed section-light" id="instagram">
        <div className="shell social-feed-heading">
          <div>
            <p className="eyebrow" data-reveal>
              @neurosono_
            </p>
            <h2 className="display-title" data-reveal>
              Bastidores e conteúdo <em>direto do Instagram.</em>
            </h2>
          </div>
          <a className="button button-accent" href="https://www.instagram.com/neurosono_/" target="_blank" rel="noreferrer">
            Seguir no Instagram
            <svg viewBox="0 0 20 20" aria-hidden="true">
              <path d="M4 10h12M11 5l5 5-5 5" />
            </svg>
          </a>
        </div>

        <div className="shell social-feed-grid" data-social-feed>
          {SOCIAL_TILES.map((_, index) => (
            <a key={index} className="social-tile" href="https://www.instagram.com/neurosono_/" target="_blank" rel="noreferrer">
              <div className="social-tile-placeholder">
                <svg className="social-tile-icon" viewBox="0 0 20 20" aria-hidden="true">
                  <rect x="3" y="3" width="14" height="14" rx="4" />
                  <circle cx="10" cy="10" r="3.2" />
                  <circle cx="14.1" cy="5.9" r="0.7" fill="currentColor" stroke="none" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="contact" id="contato">
        <div className="shell contact-grid">
          <div className="contact-main">
            <p className="eyebrow" data-reveal>
              Estamos na Vila Mariana
            </p>
            <h2 className="display-title" data-reveal>
              Vamos conversar sobre o seu sono?
            </h2>
            <div className="contact-actions" data-reveal>
              <a className="button button-accent" href="https://wa.me/5511940397143" target="_blank" rel="noreferrer">
                Conversar pelo WhatsApp
                <svg viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M4 10h12M11 5l5 5-5 5" />
                </svg>
              </a>
              <a className="button button-outline" href="tel:+551150816629">
                Ligar para a clínica
              </a>
            </div>
          </div>

          <div className="contact-details" data-reveal>
            <div>
              <span>Endereço</span>
              <a href="https://www.google.com/maps/search/?api=1&query=Rua+Cl%C3%A1udio+Rossi+394+S%C3%A3o+Paulo" target="_blank" rel="noreferrer">
                Rua Cláudio Rossi, 394
                <br />
                Vila Mariana · São Paulo
              </a>
            </div>
            <div>
              <span>Telefone</span>
              <a href="tel:+551150816629">(11) 5081-6629</a>
            </div>
            <div>
              <span>WhatsApp</span>
              <a href="https://wa.me/5511940397143" target="_blank" rel="noreferrer">
                (11) 94039-7143
              </a>
            </div>
            <div>
              <span>E-mail</span>
              <a href="mailto:neuro.sono.394@gmail.com">neuro.sono.394@gmail.com</a>
            </div>
          </div>
        </div>

        <div className="exam-banner shell" data-reveal>
          <div>
            <span className="eyebrow">Área do paciente</span>
            <h3>Seus resultados, em um acesso direto.</h3>
          </div>
          <a className="button button-light" href="https://core.feegow.com/patient-interface/185r/login" target="_blank" rel="noreferrer">
            Acessar resultados
            <svg viewBox="0 0 20 20" aria-hidden="true">
              <path d="M5 15 15 5M7 5h8v8" />
            </svg>
          </a>
        </div>
      </section>
    </PageChrome>
  );
}
