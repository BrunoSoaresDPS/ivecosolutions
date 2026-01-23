import { createContext, useContext, useState, ReactNode } from "react";

export type Language = "pt" | "es" | "en";

interface Translations {
  // Header
  searchPlaceholder: string;
  solutions: string;
  
  // Tabs
  home: string;
  ivecoSeu: string;
  coveragePlans: string;
  oneDrive: string;
  oneDriveDescription: string;
  oneDriveSecurityNote: string;
  openOneDrive: string;
  faq: string;
  telemetryTab: string;
  
  // Tools Sidebar
  tools: string;
  qtool: string;
  nexproConnect: string;
  ssTraining: string;
  ivecoOn: string;
  missionClassifier: string;
  
  // Home Page
  welcomeTitle: string;
  welcomeSubtitle: string;
  heroDescription: string;
  askQuestions: string;
  toolsResources: string;
  selectSolution: string;
  
  // IVECO SEU Card
  ivecoSeuTitle: string;
  ivecoSeuSubtitle: string;
  ivecoSeuDescription: string;
  powerGain: string;
  powerGainDesc: string;
  fuelSavings: string;
  fuelSavingsDesc: string;
  otaUpdate: string;
  otaUpdateDesc: string;
  viewDetails: string;
  
  // Coverage Plans Card
  coveragePlansTitle: string;
  coveragePlansSubtitle: string;
  coveragePlansDescription: string;
  planOptions: string;
  planOptionsDesc: string;
  comprehensiveCoverage: string;
  comprehensiveCoverageDesc: string;
  telemetryIncluded: string;
  telemetryIncludedDesc: string;
  
  // Telemetry Card
  telemetryCardTitle: string;
  telemetryCardSubtitle: string;
  telemetryCardDescription: string;
  telemetryCardFeature1: string;
  telemetryCardFeature1Desc: string;
  telemetryCardFeature2: string;
  telemetryCardFeature2Desc: string;
  telemetryCardFeature3: string;
  telemetryCardFeature3Desc: string;
  
  // Tools Cards
  qtoolDescription: string;
  accessQtool: string;
  nexproDescription: string;
  accessNexpro: string;
  ssTrainingDescription: string;
  accessTraining: string;
  ivecoOnDescription: string;
  accessIvecoOn: string;
  
  // Sidebar Sections - Material 1
  sidebarIntro: string;
  sidebarPerformance: string;
  sidebarTechnology: string;
  sidebarAudience: string;
  sidebarHowItWorks: string;
  sidebarOta: string;
  sidebarRoi: string;
  sidebarOffer: string;
  
  // Sidebar Sections - Material 2
  sidebarIntro2: string;
  sidebarBasicPlan: string;
  sidebarEssentialPlan: string;
  sidebarEconomyPlan: string;
  sidebarPowertrainPlan: string;
  sidebarCompletePlan: string;
  sidebarExclusions: string;
  sidebarTelemetry: string;
  
  // Sidebar Sections - Telemetria
  sidebarTelemetriaIntro: string;
  sidebarNexpro: string;
  sidebarIvecoOn: string;
  sidebarComparativo: string;
  
  // Telemetria Content
  telemetryIntroTitle: string;
  telemetryIntroDesc: string;
  telemetryIntroHighlightTitle: string;
  telemetryIntroNote: string;
  telemetryFeature1: string;
  telemetryFeature1Desc: string;
  telemetryFeature2: string;
  telemetryFeature2Desc: string;
  telemetryFeature3: string;
  telemetryFeature3Desc: string;
  
  // NexPro Connect Content
  nexproConnectTitle: string;
  nexproConnectHighlightTitle: string;
  nexproConnectHighlight: string;
  nexproConnectFullDesc: string;
  nexproFeature1: string;
  nexproFeature1Desc: string;
  nexproFeature2: string;
  nexproFeature2Desc: string;
  nexproFeature3: string;
  nexproFeature3Desc: string;
  nexproFeature4: string;
  nexproFeature4Desc: string;
  nexproPackagesTitle: string;
  nexproPackage1: string;
  nexproPackage2: string;
  nexproPackage3: string;
  nexproPackage4: string;
  nexproPackage5: string;
  nexproPackage6: string;
  nexproNumbers: string;
  nexproNumbersDesc: string;
  
  // IVECO ON Content
  ivecoOnTitleFull: string;
  ivecoOnHighlightTitle: string;
  ivecoOnHighlight: string;
  ivecoOnFullDesc: string;
  ivecoOnBasicTitle: string;
  ivecoOnFeature1: string;
  ivecoOnFeature1Desc: string;
  ivecoOnFeature2: string;
  ivecoOnFeature2Desc: string;
  ivecoOnFeature3: string;
  ivecoOnFeature3Desc: string;
  ivecoOnFeature4: string;
  ivecoOnFeature4Desc: string;
  ivecoOnPortalTitle: string;
  ivecoOnPortal1: string;
  ivecoOnPortal2: string;
  ivecoOnPortal3: string;
  ivecoOnPortal4: string;
  ivecoOnPortal5: string;
  ivecoOnAppTitle: string;
  ivecoOnAppDesc: string;
  ivecoOnAccessTitle: string;
  ivecoOnAccessDesc: string;
  
  // Telemetry Compare
  telemetryCompareTitle: string;
  telemetryCompareDesc: string;
  telemetryCompareFeature: string;
  compareRow1: string;
  compareRow2: string;
  compareRow3: string;
  compareRow4: string;
  compareRow5: string;
  compareRow6: string;
  compareRow7: string;
  compareMultibrand: string;
  compareSway: string;
  telemetryCompareTipTitle: string;
  telemetryCompareTip: string;
  
  // Material 1 - IVECO SEU
  m1IntroTitle: string;
  m1Title: string;
  m1Description: string;
  realPersonalization: string;
  realPersonalizationDesc: string;
  remoteUpdate: string;
  remoteUpdateDesc: string;
  provenSavings: string;
  provenSavingsDesc: string;
  m1AttentionNote: string;
  
  m1PerformanceTitle: string;
  m1PerformanceDesc: string;
  m1PerformanceResult: string;
  
  m1TechTitle: string;
  m1TechDesc: string;
  innovation: string;
  innovationDesc: string;
  personalization: string;
  personalizationDesc: string;
  
  m1AudienceTitle: string;
  m1AudienceDesc: string;
  indicatedProfiles: string;
  fleetOwners: string;
  fleetOwnersDesc: string;
  logisticsOperators: string;
  logisticsOperatorsDesc: string;
  businessMindedOwners: string;
  businessMindedOwnersDesc: string;
  
  m1HowItWorksTitle: string;
  m1HowItWorksDesc: string;
  step1Title: string;
  step1Desc: string;
  step2Title: string;
  step2Desc: string;
  step3Title: string;
  step3Desc: string;
  step4Title: string;
  step4Desc: string;
  step5Title: string;
  step5Desc: string;
  technicalReports: string;
  technicalReportsDesc: string;
  practicalGuidelines: string;
  practicalGuidelinesDesc: string;
  
  m1OtaTitle: string;
  m1OtaAttention: string;
  m1OtaDesc: string;
  m1OtaRecommendation: string;
  
  m1RoiTitle: string;
  roiLabel: string;
  roiTime: string;
  realSavings: string;
  realSavingsItems: string[];
  exclusiveAdvantages: string;
  exclusiveAdvantagesItems: string[];
  
  m1OfferTitle: string;
  commercialCondition: string;
  commercialConditionDesc: string;
  paybackSimulator: string;
  paybackSimulatorDesc: string;
  m1FinalMessage: string;
  m1FinalDescription: string;
  
  noResultsFound: string;
  
  // Material 2 - Coverage Plans
  m2IntroTitle: string;
  m2Title: string;
  m2Description: string;
  
  basicPlan: string;
  basicPlanDesc: string;
  basicPlanIncludes: string;
  engineOil: string;
  engineOilFilter: string;
  
  essentialPlan: string;
  essentialPlanSubtitle: string;
  essentialPlanDesc: string;
  essentialPlanCoverage: string;
  essentialItems: string[];
  
  economyPlan: string;
  economyPlanSubtitle: string;
  economyPlanDesc: string;
  economyPlanNote: string;
  viewFullCoverage: string;
  
  powertrainPlan: string;
  powertrainPlanSubtitle: string;
  powertrainPlanDesc: string;
  includesPowertrain: string;
  engine: string;
  transmission: string;
  differential: string;
  driveShaft: string;
  powertrainNote: string;
  
  completePlan: string;
  completePlanSubtitle: string;
  completePlanDesc: string;
  systemsCoverage: string;
  completeItems: string[];
  additionalBenefits: string;
  additionalBenefitsItems: string[];
  completeAttention: string;
  
  exclusionsTitle: string;
  exclusionsSubtitle: string;
  exclusionsDesc: string;
  cabinItems: string;
  cabinItemsList: string[];
  externalItems: string;
  externalItemsList: string[];
  
  telemetryTitle: string;
  ivecoOnDesc: string;
  nexproConnectDesc: string;
  period: string;
  basic: string;
  performance: string;
  year: string;
  years: string;
  
  // Footer
  allRightsReserved: string;
  
  // Common
  print: string;
  backToTop: string;
  navigation: string;
  summary: string;
}

const translations: Record<Language, Translations> = {
  pt: {
    searchPlaceholder: "Buscar no material...",
    solutions: "Soluções e Serviços",
    home: "Início",
    ivecoSeu: "IVECO SEU",
    coveragePlans: "Cobertura de Planos",
    oneDrive: "One Drive",
    oneDriveDescription: "Acesse arquivos e documentos compartilhados",
    oneDriveSecurityNote: "Por razões de segurança, o OneDrive será aberto em uma nova aba do navegador.",
    openOneDrive: "Abrir OneDrive",
    faq: "Tire suas Dúvidas",
    tools: "Ferramentas",
    qtool: "QTool",
    nexproConnect: "NexPro Connect",
    ssTraining: "SS Training",
    ivecoOn: "IVECO ON",
    missionClassifier: "Classificador de Missão",
    welcomeTitle: "Soluções e Serviços IVECO",
    welcomeSubtitle: "Soluções e Serviços",
    heroDescription: "Conheça nossas soluções exclusivas para maximizar a eficiência e proteger seu investimento",
    askQuestions: "Tire suas Dúvidas",
    toolsResources: "Ferramentas e Recursos",
    selectSolution: "Selecione uma das soluções acima para ver o conteúdo completo e detalhado",
    
    ivecoSeuTitle: "IVECO SEU",
    ivecoSeuSubtitle: "Software de Eficiência Único",
    ivecoSeuDescription: "Tecnologia exclusiva IVECO que otimiza a performance do seu caminhão através de reprogramação inteligente da ECU, proporcionando economia de combustível e aumento de potência.",
    powerGain: "+30cv de potência",
    powerGainDesc: "Ganho real de performance",
    fuelSavings: "Até 3% de economia",
    fuelSavingsDesc: "Redução no consumo de combustível",
    otaUpdate: "Atualização OTA",
    otaUpdateDesc: "Via telemetria sem parar o veículo",
    viewDetails: "Ver detalhes completos",
    
    // Sidebar Sections - Material 1
    sidebarIntro: "Introdução",
    sidebarPerformance: "IVECO SEU Performance",
    sidebarTechnology: "Tecnologia Exclusiva",
    sidebarAudience: "Público-Alvo",
    sidebarHowItWorks: "Como Funciona",
    sidebarOta: "Tecnologia OTA",
    sidebarRoi: "Retorno do Investimento",
    sidebarOffer: "Oferta Especial",
    
    // Sidebar Sections - Material 2
    sidebarIntro2: "Introdução",
    sidebarBasicPlan: "Plano Básico",
    sidebarEssentialPlan: "Plano Essencial",
    sidebarEconomyPlan: "Plano Essencial Economy",
    sidebarPowertrainPlan: "Plano Essencial Powertrain",
    sidebarCompletePlan: "Plano Completo",
    sidebarExclusions: "Exclusões do Plano Completo",
    sidebarTelemetry: "Telemetria",
    
    coveragePlansTitle: "Cobertura de Planos de Manutenção",
    coveragePlansSubtitle: "Planos de Serviços IVECO",
    coveragePlansDescription: "Proteja seu investimento com nossos planos de manutenção e cobertura. Opções flexíveis que garantem tranquilidade e previsibilidade de custos para sua operação.",
    planOptions: "5 opções de planos",
    planOptionsDesc: "Do Básico ao Completo",
    comprehensiveCoverage: "Cobertura abrangente",
    comprehensiveCoverageDesc: "Motor, câmbio, eixos e mais",
    telemetryIncluded: "Telemetria incluída",
    telemetryIncludedDesc: "IVECO ON e NEXPRO CONNECT",
    
    qtoolDescription: "Ferramenta de cotação e cálculos para serviços IVECO. Acesse rapidamente informações de preços e simulações.",
    accessQtool: "Acessar QTool",
    nexproDescription: "Plataforma de conectividade e telemetria IVECO. Monitore sua frota em tempo real e otimize operações.",
    accessNexpro: "Acessar NexPro",
    ssTrainingDescription: "Plataforma de treinamentos e capacitação. Acesse cursos e materiais para aprimorar seus conhecimentos.",
    accessTraining: "Acessar Training",
    ivecoOnDescription: "Portal de contratos e serviços conectados IVECO. Gerencie seus contratos e acesse funcionalidades exclusivas.",
    accessIvecoOn: "Acessar IVECO ON",
    
    m1IntroTitle: "Seu Jeito de Rodar, Seu S-Way Mais Inteligente",
    m1Title: "IVECO SEU – Software de Eficiência Único",
    m1Description: "O Software de Eficiência Único (SEU) é um recurso exclusivo da IVECO que ajusta a performance do S-Way com base na sua operação real.",
    realPersonalization: "Personalização Real",
    realPersonalizationDesc: "Curva de motor ajustada conforme características da sua operação",
    remoteUpdate: "Atualização Remota (OTA)",
    remoteUpdateDesc: "Agilidade para configurar, sem parada, sem burocracia",
    provenSavings: "Economia Comprovada",
    provenSavingsDesc: "Melhor rendimento operacional com menor consumo de combustível por km",
    m1AttentionNote: "Tecnologia 100% desenvolvida pela IVECO. A telemetria IVECO ON analisa o uso do caminhão e sugere a melhor calibração do motor para sua realidade, gerando mais rentabilidade para a frota.",
    
    m1PerformanceTitle: "IVECO SEU Performance – IVECO Sob Medida",
    m1PerformanceDesc: "A eficiência que já nasce com o IVECO S-Way ganha ainda mais potencial ao transformar os dados da sua operação em inteligência, personalizando a curva de motor de cada caminhão por meio do diagnóstico realizado a partir do IVECO ON.",
    m1PerformanceResult: "Mais economia, mais performance, mais eficiência. O que já é bom, fica ainda melhor.",
    
    m1TechTitle: "Tecnologia Exclusiva da IVECO",
    m1TechDesc: "Nenhuma outra montadora oferece esse nível de personalização com atualização remota e análise baseada em dados reais de operação.",
    innovation: "+ Inovação",
    innovationDesc: "Tecnologia de ponta aplicada à gestão de frota",
    personalization: "+ Personalização",
    personalizationDesc: "S-Way como uma solução ainda mais estratégica para a sua frota",
    
    m1AudienceTitle: "Quem é o SEU?",
    m1AudienceDesc: "O SEU é especialmente indicado para operações rodoviárias, especificidades de carga e foco em custo operacional.",
    indicatedProfiles: "Perfis Indicados",
    fleetOwners: "Frotistas e Transportadoras",
    fleetOwnersDesc: "Empresas que querem eficiência e previsibilidade nas operações.",
    logisticsOperators: "Operadores Logísticos",
    logisticsOperatorsDesc: "Foco em rentabilidade e otimização de custos operacionais.",
    businessMindedOwners: "Autônomos que Pensam como Empresários",
    businessMindedOwnersDesc: "Ideal para quem busca mais resultado sem complicação.",
    
    m1HowItWorksTitle: "Como Funciona?",
    m1HowItWorksDesc: "Conte com a consultoria do nosso time de especialistas para acompanhamento da performance do seu caminhão.",
    step1Title: "Coleta de Dados",
    step1Desc: "Coleta de dados via IVECO ON por 30 dias de operação",
    step2Title: "Análise Especializada",
    step2Desc: "Análise da IVECO sobre uso, carga, rota e topografia",
    step3Title: "Parametrização Personalizada",
    step3Desc: "Parametrização personalizada do veículo conforme sua operação",
    step4Title: "Atualização Remota",
    step4Desc: "Atualização remota via OTA, sem necessidade de parada",
    step5Title: "Resultado Direto",
    step5Desc: "Mais economia e performance ajustada à operação",
    technicalReports: "Relatórios Técnicos",
    technicalReportsDesc: "Entrega de relatórios técnicos com comparativos antes e depois do IVECO SEU.",
    practicalGuidelines: "Orientações Práticas",
    practicalGuidelinesDesc: "Orientações práticas de condução para evolução dos indicadores.",
    
    m1OtaTitle: "Tecnologia OTA – Eficiência Sem Interrupção",
    m1OtaAttention: "O cliente não precisa parar o caminhão para se beneficiar do SEU.",
    m1OtaDesc: "A atualização é feita remotamente por OTA (Over The Air), com segurança e agilidade. Enquanto a operação roda, a tecnologia trabalha para otimizar.",
    m1OtaRecommendation: "É o máximo de eficiência com o mínimo de intervenção.",
    
    m1RoiTitle: "Por que Apostar no IVECO SEU?",
    roiLabel: "Retorno do Investimento",
    roiTime: "Em aproximadamente 3 meses",
    realSavings: "Economia Real",
    realSavingsItems: ["Economia real de combustível", "Aumento da vida útil do caminhão", "Menor desgaste e mais previsibilidade"],
    exclusiveAdvantages: "Vantagens Exclusivas",
    exclusiveAdvantagesItems: ["Solução integrada à conectividade IVECO ON", "Sustentabilidade comprovada: menos consumo, menor impacto ambiental", "Caminhão personalizado, sem perder garantia e sem parar"],
    
    m1OfferTitle: "Oferta Especial",
    commercialCondition: "Condição Comercial",
    commercialConditionDesc: "20% da economia entregue, multiplicado pelo fator 18.",
    paybackSimulator: "Simulador Payback",
    paybackSimulatorDesc: "Utilize o simulador IVECO para calcular o retorno do investimento baseado na sua operação específica.",
    m1FinalMessage: "A gente entende o seu caminho e segue com você.",
    m1FinalDescription: "Descubra como o IVECO SEU pode elevar a performance do S-Way e gerar resultados reais.",
    
    noResultsFound: "Nenhum resultado encontrado para",
    
    m2IntroTitle: "Cobertura de Serviços – Instrutivo",
    m2Title: "O jeito mais simples de cuidar do seu Iveco",
    m2Description: "Ao cuidar do seu caminhão na rede autorizada, você garante mão de obra especializada, produtos genuínos, baixo custo e rapidez na manutenção do seu Iveco.",
    
    basicPlan: "Plano Básico",
    basicPlanDesc: "O filtro e o óleo do motor são itens de manutenção obrigatórios e fundamentais para o bom funcionamento do seu veículo. Além de lubrificar as peças móveis, evitando seu desgaste, o óleo tem função imprescindível no arrefecimento de componentes que são expostos a elevadas temperaturas.",
    basicPlanIncludes: "O Plano Básico Contempla",
    engineOil: "Óleo do motor",
    engineOilFilter: "Filtro de óleo do motor",
    
    essentialPlan: "Plano Essencial",
    essentialPlanSubtitle: "Para você, todas as revisões em dia",
    essentialPlanDesc: "Com parcelas de valores fixos, o plano Essencial garante a correta manutenção do seu veículo, para que a performance do seu veículo seja muito maior.",
    essentialPlanCoverage: "Cobertura do Plano Essencial",
    essentialItems: [
      "Filtro e pré-filtro de combustível",
      "Filtro de ar e anti-pólen",
      "Filtro de óleo do motor",
      "Filtro de ureia",
      "Filtro de óleo da direção hidráulica (sob avaliação da necessidade de troca)",
      "Filtro APU",
      "Correias e tensores",
      "Regulagem de válvulas",
      "Juntas do Respiro",
      "Lubrificantes (óleo do motor, do diferencial, da direção hidráulica, dos cubos de roda e da transmissão, além de líquido de arrefecimento)"
    ],
    
    economyPlan: "Plano Essencial Economy",
    economyPlanSubtitle: "A solução para o seu veículo seminovo",
    economyPlanDesc: "Focado em veículos que já não possuem mais garantia, o Plano Essencial Economy possui a mesma cobertura do Plano Essencial, porém com peças PRO, garantindo um plano mais em conta para o cliente com peças certificadas que garantem confiança na condução do seu veículo.",
    economyPlanNote: "Este plano utiliza peças da linha PRO – certificadas e com garantia de qualidade, porém com custo mais acessível.",
    viewFullCoverage: "Ver lista completa de cobertura",
    
    powertrainPlan: "Plano Essencial Powertrain",
    powertrainPlanSubtitle: "A cobertura dos itens mais críticos",
    powertrainPlanDesc: "Além de toda a cobertura do Plano Essencial, o Plano Essencial Powertrain cobre manutenções corretivas de todo o trem de força do veículo (motor, transmissão, diferencial e eixo cardan), além de sistema de telemetria indicada pela Iveco para o seu veículo!",
    includesPowertrain: "Inclui Trem de Força Completo",
    engine: "Motor",
    transmission: "Transmissão",
    differential: "Diferencial",
    driveShaft: "Eixo Cardan",
    powertrainNote: "Este plano também inclui sistema de telemetria indicada pela Iveco para o seu veículo.",
    
    completePlan: "Plano Completo",
    completePlanSubtitle: "A maior cobertura para o seu veículo",
    completePlanDesc: "O Plano Completo cobre toda a manutenção preventiva do veículo (assim como o Plano Essencial), além de contemplar manutenções e reparos para diversos sistemas.",
    systemsCoverage: "Cobertura de Sistemas",
    completeItems: [
      "Conjuntos trem de força (motor, transmissão, diferencial e eixo cardan)",
      "Sistemas de freios",
      "Sistema de suspensão e feixes de molas",
      "Sistema de direção",
      "Sistemas pneumáticos",
      "Sistemas elétricos"
    ],
    additionalBenefits: "Benefícios Adicionais",
    additionalBenefitsItems: [
      "Substituição de itens de desgaste",
      "Socorro mecânico 24h",
      "Guincho 24h",
      "Telemetria indicada para o seu veículo"
    ],
    completeAttention: "O socorro mecânico e guincho não se aplicam em casos de constatação de mal uso do caminhão, como insistência operacional ou batidas/impactos ao veículo.",
    
    exclusionsTitle: "Exclusões do Plano Completo",
    exclusionsSubtitle: "Itens não contemplados",
    exclusionsDesc: "O plano não contempla itens periféricos ou da cabine como:",
    cabinItems: "Itens de Cabine",
    cabinItemsList: ["Molduras e gaveteiros", "Cortinas", "Geladeiras e trilhos", "Bancos e cama", "Viseiras e outros itens internos"],
    externalItems: "Itens Externos e Outros",
    externalItemsList: ["Retrovisores, faróis e para-choques", "Pneus", "Alinhamento e balanceamento", "Pintura e funilaria", "Para-brisas", "Manutenções do interclima"],
    
    telemetryTitle: "Telemetria",
    ivecoOnDesc: "Solução de conectividade exclusiva para o S-WAY, permitindo que os usuários acessem serviços como telemetria, atualizações de software e diagnósticos.",
    nexproConnectDesc: "Plataforma de conectividade para veículos multimarcas, que permite que os proprietários monitorem e gerenciem todos seus veículos em uma única plataforma.",
    period: "Período",
    basic: "Básico",
    performance: "Performance",
    year: "ano",
    years: "anos",
    
    // Telemetry Tab and Card
    telemetryTab: "Telemetria",
    telemetryCardTitle: "Telemetria",
    telemetryCardSubtitle: "Soluções de Conectividade",
    telemetryCardDescription: "Conecte sua frota e transforme dados em resultados. Monitore veículos em tempo real, analise performance e otimize operações.",
    telemetryCardFeature1: "NexPro Connect",
    telemetryCardFeature1Desc: "Plataforma multimarcas",
    telemetryCardFeature2: "IVECO ON",
    telemetryCardFeature2Desc: "Exclusivo para S-WAY",
    telemetryCardFeature3: "Gestão Inteligente",
    telemetryCardFeature3Desc: "Dados em tempo real",
    
    // Sidebar Sections - Telemetria
    sidebarTelemetriaIntro: "Introdução",
    sidebarNexpro: "NexPro Connect",
    sidebarIvecoOn: "IVECO ON",
    sidebarComparativo: "Comparativo",
    
    // Telemetria Content
    telemetryIntroTitle: "Telemetria - Conectividade que Gera Resultados",
    telemetryIntroDesc: "A telemetria permite monitorar em tempo real toda a dinâmica do veículo e do motorista. Com essa tecnologia, é possível fazer uma gestão de frota muito mais eficiente, levando em consideração o comportamento dos veículos e motoristas em rotas e trabalhos distintos.",
    telemetryIntroHighlightTitle: "Por que Telemetria?",
    telemetryIntroNote: "Reduza custos da sua frota e tenha controle da eficiência dos veículos. A IVECO está empenhada em proteger o valor e a produtividade do seu veículo ao longo do tempo.",
    telemetryFeature1: "Gestão de Performance",
    telemetryFeature1Desc: "Acompanhe indicadores de desempenho e custos operacionais",
    telemetryFeature2: "Redução de Consumo",
    telemetryFeature2Desc: "Identifique oportunidades de economia de combustível",
    telemetryFeature3: "Segurança Operacional",
    telemetryFeature3Desc: "Monitore comportamento de condução e previna riscos",
    
    // NexPro Connect Content
    nexproConnectTitle: "NexPro Connect - Sua Frota Conectada",
    nexproConnectHighlightTitle: "Solução Multimarcas",
    nexproConnectHighlight: "Conecte sua frota para converter dados em resultados. Plataforma de telemetria que suporta veículos de múltiplas marcas em uma única interface.",
    nexproConnectFullDesc: "O NexPro Connect oferece tecnologia de informações remotas através de sensores avançados e conectividade inteligente. A plataforma coleta dados diretamente da rede CAN do veículo, garantindo informações precisas e em tempo real.",
    nexproFeature1: "Localização da Frota",
    nexproFeature1Desc: "Rastreamento GPS em tempo real de todos os veículos",
    nexproFeature2: "Consumo de Combustível",
    nexproFeature2Desc: "Monitoramento detalhado do consumo e eficiência",
    nexproFeature3: "Avaliação de Condução",
    nexproFeature3Desc: "Análise do estilo de condução dos motoristas",
    nexproFeature4: "Relatórios Completos",
    nexproFeature4Desc: "Relatórios de viagem, performance e análises",
    nexproPackagesTitle: "Pacotes Disponíveis",
    nexproPackage1: "Gestão de Frota e Localização",
    nexproPackage2: "Simulador de Cabine",
    nexproPackage3: "Relatórios de Viagem e Performance",
    nexproPackage4: "Análise de Consumo de Combustível",
    nexproPackage5: "Controle de Jornada",
    nexproPackage6: "API NexPro Connect para integração",
    nexproNumbers: "+6.000 veículos conectados",
    nexproNumbersDesc: "+150 revendedores e +75.000 dados coletados diariamente com até 70 parâmetros",
    
    // IVECO ON Content
    ivecoOnTitleFull: "IVECO ON - O Novo Mundo de Conectividade",
    ivecoOnHighlightTitle: "Exclusivo S-WAY",
    ivecoOnHighlight: "Sistema que monitora em tempo real toda a dinâmica do veículo S-WAY, oferecendo conectividade exclusiva da IVECO.",
    ivecoOnFullDesc: "O IVECO ON é a solução de conectividade exclusiva para o S-WAY que permite acessar serviços como telemetria avançada, atualizações de software e diagnósticos remotos. A plataforma oferece uma experiência completa de gestão.",
    ivecoOnBasicTitle: "IVECO ON Básico",
    ivecoOnFeature1: "Monitoramento em Tempo Real",
    ivecoOnFeature1Desc: "Acompanhe veículos e motoristas em tempo real",
    ivecoOnFeature2: "Relatórios Inteligentes",
    ivecoOnFeature2Desc: "Relatórios semanais automáticos com dicas de economia",
    ivecoOnFeature3: "Easy Way App",
    ivecoOnFeature3Desc: "Aplicativo para controle digital a bordo do veículo",
    ivecoOnFeature4: "Cerca Eletrônica",
    ivecoOnFeature4Desc: "Alertas quando o veículo entra em áreas definidas",
    ivecoOnPortalTitle: "Recursos do Portal",
    ivecoOnPortal1: "Monitoramento de veículos e motoristas",
    ivecoOnPortal2: "Análise de estilo de condução (DSE)",
    ivecoOnPortal3: "Gráfico de emissão de CO2",
    ivecoOnPortal4: "Acompanhamento de rotas diárias",
    ivecoOnPortal5: "Visualização do painel do veículo",
    ivecoOnAppTitle: "Aplicativo Easy Way",
    ivecoOnAppDesc: "Leve a sua vida digital a bordo com todas as funcionalidades para controlar e conhecer mais sobre seu estilo de condução. Controle de travamento de portas, janelas, luzes internas e multimídia.",
    ivecoOnAccessTitle: "Acesse o Portal IVECO ON",
    ivecoOnAccessDesc: "Gerencie contratos e acesse funcionalidades exclusivas",
    
    // Telemetry Compare
    telemetryCompareTitle: "Comparativo das Soluções",
    telemetryCompareDesc: "Compare as funcionalidades de cada plataforma de telemetria para escolher a melhor opção para sua frota.",
    telemetryCompareFeature: "Funcionalidade",
    compareRow1: "Localização GPS",
    compareRow2: "Consumo de Combustível",
    compareRow3: "Avaliação de Condução",
    compareRow4: "Suporte Multimarcas",
    compareRow5: "Atualizações OTA",
    compareRow6: "API de Integração",
    compareRow7: "Veículos Compatíveis",
    compareMultibrand: "Multimarcas",
    compareSway: "S-WAY",
    telemetryCompareTipTitle: "Dica",
    telemetryCompareTip: "Para frotas mistas com diferentes marcas, o NexPro Connect é a escolha ideal. Para frotas 100% IVECO S-WAY, o IVECO ON oferece recursos exclusivos e integração mais profunda.",
    
    allRightsReserved: "Todos os direitos reservados",
    print: "Imprimir",
    backToTop: "Voltar ao topo",
    navigation: "Navegação",
    summary: "Sumário",
  },
  es: {
    searchPlaceholder: "Buscar en el material...",
    solutions: "Soluciones y Servicios",
    home: "Inicio",
    ivecoSeu: "IVECO SEU",
    coveragePlans: "Cobertura de Planes",
    oneDrive: "One Drive",
    oneDriveDescription: "Acceda a archivos y documentos compartidos",
    oneDriveSecurityNote: "Por razones de seguridad, OneDrive se abrirá en una nueva pestaña del navegador.",
    openOneDrive: "Abrir OneDrive",
    faq: "Preguntas Frecuentes",
    tools: "Herramientas",
    qtool: "QTool",
    nexproConnect: "NexPro Connect",
    ssTraining: "SS Training",
    ivecoOn: "IVECO ON",
    missionClassifier: "Clasificador de Misión",
    welcomeTitle: "Soluciones y Servicios IVECO",
    welcomeSubtitle: "Soluciones y Servicios",
    heroDescription: "Conozca nuestras soluciones exclusivas para maximizar la eficiencia y proteger su inversión",
    askQuestions: "Preguntas Frecuentes",
    toolsResources: "Herramientas y Recursos",
    selectSolution: "Seleccione una de las soluciones arriba para ver el contenido completo y detallado",
    
    ivecoSeuTitle: "IVECO SEU",
    ivecoSeuSubtitle: "Software de Eficiencia Único",
    ivecoSeuDescription: "Tecnología exclusiva IVECO que optimiza el rendimiento de su camión mediante reprogramación inteligente de la ECU, proporcionando ahorro de combustible y aumento de potencia.",
    powerGain: "+30cv de potencia",
    powerGainDesc: "Ganancia real de rendimiento",
    fuelSavings: "Hasta 3% de ahorro",
    fuelSavingsDesc: "Reducción en el consumo de combustible",
    otaUpdate: "Actualización OTA",
    otaUpdateDesc: "Vía telemetría sin detener el vehículo",
    viewDetails: "Ver detalles completos",
    
    // Sidebar Sections - Material 1
    sidebarIntro: "Introducción",
    sidebarPerformance: "IVECO SEU Performance",
    sidebarTechnology: "Tecnología Exclusiva",
    sidebarAudience: "Público Objetivo",
    sidebarHowItWorks: "Cómo Funciona",
    sidebarOta: "Tecnología OTA",
    sidebarRoi: "Retorno de la Inversión",
    sidebarOffer: "Oferta Especial",
    
    // Sidebar Sections - Material 2
    sidebarIntro2: "Introducción",
    sidebarBasicPlan: "Plan Básico",
    sidebarEssentialPlan: "Plan Esencial",
    sidebarEconomyPlan: "Plan Esencial Economy",
    sidebarPowertrainPlan: "Plan Esencial Powertrain",
    sidebarCompletePlan: "Plan Completo",
    sidebarExclusions: "Exclusiones del Plan Completo",
    sidebarTelemetry: "Telemetría",
    
    coveragePlansTitle: "Cobertura de Planes de Mantenimiento",
    coveragePlansSubtitle: "Planes de Servicios IVECO",
    coveragePlansDescription: "Proteja su inversión con nuestros planes de mantenimiento y cobertura. Opciones flexibles que garantizan tranquilidad y previsibilidad de costos para su operación.",
    planOptions: "5 opciones de planes",
    planOptionsDesc: "Del Básico al Completo",
    comprehensiveCoverage: "Cobertura integral",
    comprehensiveCoverageDesc: "Motor, caja de cambios, ejes y más",
    telemetryIncluded: "Telemetría incluida",
    telemetryIncludedDesc: "IVECO ON y NEXPRO CONNECT",
    
    qtoolDescription: "Herramienta de cotización y cálculos para servicios IVECO. Acceda rápidamente a información de precios y simulaciones.",
    accessQtool: "Acceder a QTool",
    nexproDescription: "Plataforma de conectividad y telemetría IVECO. Monitoree su flota en tiempo real y optimice operaciones.",
    accessNexpro: "Acceder a NexPro",
    ssTrainingDescription: "Plataforma de capacitaciones y formación. Acceda a cursos y materiales para mejorar sus conocimientos.",
    accessTraining: "Acceder a Training",
    ivecoOnDescription: "Portal de contratos y servicios conectados IVECO. Gestione sus contratos y acceda a funcionalidades exclusivas.",
    accessIvecoOn: "Acceder a IVECO ON",
    
    m1IntroTitle: "Su Forma de Rodar, Su S-Way Más Inteligente",
    m1Title: "IVECO SEU – Software de Eficiencia Único",
    m1Description: "El Software de Eficiencia Único (SEU) es un recurso exclusivo de IVECO que ajusta el rendimiento del S-Way según su operación real.",
    realPersonalization: "Personalización Real",
    realPersonalizationDesc: "Curva de motor ajustada según las características de su operación",
    remoteUpdate: "Actualización Remota (OTA)",
    remoteUpdateDesc: "Agilidad para configurar, sin paradas, sin burocracia",
    provenSavings: "Ahorro Comprobado",
    provenSavingsDesc: "Mejor rendimiento operativo con menor consumo de combustible por km",
    m1AttentionNote: "Tecnología 100% desarrollada por IVECO. La telemetría IVECO ON analiza el uso del camión y sugiere la mejor calibración del motor para su realidad, generando más rentabilidad para la flota.",
    
    m1PerformanceTitle: "IVECO SEU Performance – IVECO a Medida",
    m1PerformanceDesc: "La eficiencia que ya viene con el IVECO S-Way gana aún más potencial al transformar los datos de su operación en inteligencia, personalizando la curva de motor de cada camión mediante el diagnóstico realizado a partir del IVECO ON.",
    m1PerformanceResult: "Más ahorro, más rendimiento, más eficiencia. Lo que ya es bueno, se vuelve aún mejor.",
    
    m1TechTitle: "Tecnología Exclusiva de IVECO",
    m1TechDesc: "Ningún otro fabricante ofrece este nivel de personalización con actualización remota y análisis basado en datos reales de operación.",
    innovation: "+ Innovación",
    innovationDesc: "Tecnología de punta aplicada a la gestión de flotas",
    personalization: "+ Personalización",
    personalizationDesc: "S-Way como una solución aún más estratégica para su flota",
    
    m1AudienceTitle: "¿Quién es el SEU?",
    m1AudienceDesc: "El SEU está especialmente indicado para operaciones de carretera, especificidades de carga y enfoque en costo operativo.",
    indicatedProfiles: "Perfiles Indicados",
    fleetOwners: "Flotistas y Transportadoras",
    fleetOwnersDesc: "Empresas que quieren eficiencia y previsibilidad en las operaciones.",
    logisticsOperators: "Operadores Logísticos",
    logisticsOperatorsDesc: "Enfoque en rentabilidad y optimización de costos operativos.",
    businessMindedOwners: "Autónomos con Mentalidad Empresarial",
    businessMindedOwnersDesc: "Ideal para quienes buscan más resultados sin complicaciones.",
    
    m1HowItWorksTitle: "¿Cómo Funciona?",
    m1HowItWorksDesc: "Cuente con la consultoría de nuestro equipo de especialistas para el seguimiento del rendimiento de su camión.",
    step1Title: "Recolección de Datos",
    step1Desc: "Recolección de datos vía IVECO ON durante 30 días de operación",
    step2Title: "Análisis Especializado",
    step2Desc: "Análisis de IVECO sobre uso, carga, ruta y topografía",
    step3Title: "Parametrización Personalizada",
    step3Desc: "Parametrización personalizada del vehículo según su operación",
    step4Title: "Actualización Remota",
    step4Desc: "Actualización remota vía OTA, sin necesidad de parada",
    step5Title: "Resultado Directo",
    step5Desc: "Más ahorro y rendimiento ajustado a la operación",
    technicalReports: "Informes Técnicos",
    technicalReportsDesc: "Entrega de informes técnicos con comparativos antes y después del IVECO SEU.",
    practicalGuidelines: "Orientaciones Prácticas",
    practicalGuidelinesDesc: "Orientaciones prácticas de conducción para evolución de los indicadores.",
    
    m1OtaTitle: "Tecnología OTA – Eficiencia Sin Interrupción",
    m1OtaAttention: "El cliente no necesita detener el camión para beneficiarse del SEU.",
    m1OtaDesc: "La actualización se realiza remotamente por OTA (Over The Air), con seguridad y agilidad. Mientras la operación funciona, la tecnología trabaja para optimizar.",
    m1OtaRecommendation: "Es el máximo de eficiencia con el mínimo de intervención.",
    
    m1RoiTitle: "¿Por Qué Apostar por IVECO SEU?",
    roiLabel: "Retorno de la Inversión",
    roiTime: "En aproximadamente 3 meses",
    realSavings: "Ahorro Real",
    realSavingsItems: ["Ahorro real de combustible", "Aumento de la vida útil del camión", "Menor desgaste y más previsibilidad"],
    exclusiveAdvantages: "Ventajas Exclusivas",
    exclusiveAdvantagesItems: ["Solución integrada a la conectividad IVECO ON", "Sostenibilidad comprobada: menos consumo, menor impacto ambiental", "Camión personalizado, sin perder garantía y sin parar"],
    
    m1OfferTitle: "Oferta Especial",
    commercialCondition: "Condición Comercial",
    commercialConditionDesc: "20% del ahorro entregado, multiplicado por el factor 18.",
    paybackSimulator: "Simulador Payback",
    paybackSimulatorDesc: "Utilice el simulador IVECO para calcular el retorno de la inversión basado en su operación específica.",
    m1FinalMessage: "Entendemos su camino y seguimos con usted.",
    m1FinalDescription: "Descubra cómo el IVECO SEU puede elevar el rendimiento del S-Way y generar resultados reales.",
    
    noResultsFound: "No se encontraron resultados para",
    
    m2IntroTitle: "Cobertura de Servicios – Instructivo",
    m2Title: "La forma más simple de cuidar su Iveco",
    m2Description: "Al cuidar su camión en la red autorizada, usted garantiza mano de obra especializada, productos genuinos, bajo costo y rapidez en el mantenimiento de su Iveco.",
    
    basicPlan: "Plan Básico",
    basicPlanDesc: "El filtro y el aceite del motor son elementos de mantenimiento obligatorios y fundamentales para el buen funcionamiento de su vehículo. Además de lubricar las piezas móviles, evitando su desgaste, el aceite tiene función imprescindible en el enfriamiento de componentes que están expuestos a altas temperaturas.",
    basicPlanIncludes: "El Plan Básico Incluye",
    engineOil: "Aceite del motor",
    engineOilFilter: "Filtro de aceite del motor",
    
    essentialPlan: "Plan Esencial",
    essentialPlanSubtitle: "Para usted, todas las revisiones al día",
    essentialPlanDesc: "Con cuotas de valores fijos, el plan Esencial garantiza el correcto mantenimiento de su vehículo, para que el rendimiento de su vehículo sea mucho mayor.",
    essentialPlanCoverage: "Cobertura del Plan Esencial",
    essentialItems: [
      "Filtro y prefiltro de combustible",
      "Filtro de aire y anti-polen",
      "Filtro de aceite del motor",
      "Filtro de urea",
      "Filtro de aceite de la dirección hidráulica (bajo evaluación de necesidad de cambio)",
      "Filtro APU",
      "Correas y tensores",
      "Regulación de válvulas",
      "Juntas del Respiradero",
      "Lubricantes (aceite del motor, del diferencial, de la dirección hidráulica, de los cubos de rueda y de la transmisión, además de líquido refrigerante)"
    ],
    
    economyPlan: "Plan Esencial Economy",
    economyPlanSubtitle: "La solución para su vehículo seminuevo",
    economyPlanDesc: "Enfocado en vehículos que ya no tienen garantía, el Plan Esencial Economy tiene la misma cobertura del Plan Esencial, pero con piezas PRO, garantizando un plan más económico para el cliente con piezas certificadas que garantizan confianza en la conducción de su vehículo.",
    economyPlanNote: "Este plan utiliza piezas de la línea PRO – certificadas y con garantía de calidad, pero con costo más accesible.",
    viewFullCoverage: "Ver lista completa de cobertura",
    
    powertrainPlan: "Plan Esencial Powertrain",
    powertrainPlanSubtitle: "La cobertura de los elementos más críticos",
    powertrainPlanDesc: "Además de toda la cobertura del Plan Esencial, el Plan Esencial Powertrain cubre mantenimientos correctivos de todo el tren de potencia del vehículo (motor, transmisión, diferencial y eje cardán), además del sistema de telemetría indicado por Iveco para su vehículo!",
    includesPowertrain: "Incluye Tren de Potencia Completo",
    engine: "Motor",
    transmission: "Transmisión",
    differential: "Diferencial",
    driveShaft: "Eje Cardán",
    powertrainNote: "Este plan también incluye sistema de telemetría indicado por Iveco para su vehículo.",
    
    completePlan: "Plan Completo",
    completePlanSubtitle: "La mayor cobertura para su vehículo",
    completePlanDesc: "El Plan Completo cubre todo el mantenimiento preventivo del vehículo (así como el Plan Esencial), además de contemplar mantenimientos y reparaciones para diversos sistemas.",
    systemsCoverage: "Cobertura de Sistemas",
    completeItems: [
      "Conjuntos tren de potencia (motor, transmisión, diferencial y eje cardán)",
      "Sistemas de frenos",
      "Sistema de suspensión y paquetes de muelles",
      "Sistema de dirección",
      "Sistemas neumáticos",
      "Sistemas eléctricos"
    ],
    additionalBenefits: "Beneficios Adicionales",
    additionalBenefitsItems: [
      "Sustitución de elementos de desgaste",
      "Asistencia mecánica 24h",
      "Grúa 24h",
      "Telemetría indicada para su vehículo"
    ],
    completeAttention: "La asistencia mecánica y grúa no se aplican en casos de constatación de mal uso del camión, como insistencia operacional o golpes/impactos al vehículo.",
    
    exclusionsTitle: "Exclusiones del Plan Completo",
    exclusionsSubtitle: "Elementos no contemplados",
    exclusionsDesc: "El plan no contempla elementos periféricos o de la cabina como:",
    cabinItems: "Elementos de Cabina",
    cabinItemsList: ["Molduras y cajones", "Cortinas", "Refrigeradores y rieles", "Asientos y cama", "Viseras y otros elementos internos"],
    externalItems: "Elementos Externos y Otros",
    externalItemsList: ["Retrovisores, faros y parachoques", "Neumáticos", "Alineación y balanceo", "Pintura y carrocería", "Parabrisas", "Mantenimientos del interclima"],
    
    telemetryTitle: "Telemetría",
    ivecoOnDesc: "Solución de conectividad exclusiva para el S-WAY, permitiendo que los usuarios accedan a servicios como telemetría, actualizaciones de software y diagnósticos.",
    nexproConnectDesc: "Plataforma de conectividad para vehículos multimarca, que permite que los propietarios monitoreen y gestionen todos sus vehículos en una única plataforma.",
    period: "Período",
    basic: "Básico",
    performance: "Performance",
    year: "año",
    years: "años",
    
    // Telemetry Tab and Card
    telemetryTab: "Telemetría",
    telemetryCardTitle: "Telemetría",
    telemetryCardSubtitle: "Soluciones de Conectividad",
    telemetryCardDescription: "Conecte su flota y transforme datos en resultados. Monitoree vehículos en tiempo real, analice rendimiento y optimice operaciones.",
    telemetryCardFeature1: "NexPro Connect",
    telemetryCardFeature1Desc: "Plataforma multimarca",
    telemetryCardFeature2: "IVECO ON",
    telemetryCardFeature2Desc: "Exclusivo para S-WAY",
    telemetryCardFeature3: "Gestión Inteligente",
    telemetryCardFeature3Desc: "Datos en tiempo real",
    
    // Sidebar Sections - Telemetria
    sidebarTelemetriaIntro: "Introducción",
    sidebarNexpro: "NexPro Connect",
    sidebarIvecoOn: "IVECO ON",
    sidebarComparativo: "Comparativo",
    
    // Telemetria Content
    telemetryIntroTitle: "Telemetría - Conectividad que Genera Resultados",
    telemetryIntroDesc: "La telemetría permite monitorear en tiempo real toda la dinámica del vehículo y del conductor. Con esta tecnología, es posible hacer una gestión de flota mucho más eficiente.",
    telemetryIntroHighlightTitle: "¿Por qué Telemetría?",
    telemetryIntroNote: "Reduzca costos de su flota y tenga control de la eficiencia de los vehículos. IVECO está comprometida en proteger el valor y la productividad de su vehículo.",
    telemetryFeature1: "Gestión de Rendimiento",
    telemetryFeature1Desc: "Acompañe indicadores de desempeño y costos operativos",
    telemetryFeature2: "Reducción de Consumo",
    telemetryFeature2Desc: "Identifique oportunidades de ahorro de combustible",
    telemetryFeature3: "Seguridad Operacional",
    telemetryFeature3Desc: "Monitoree comportamiento de conducción y prevenga riesgos",
    
    // NexPro Connect Content
    nexproConnectTitle: "NexPro Connect - Su Flota Conectada",
    nexproConnectHighlightTitle: "Solución Multimarca",
    nexproConnectHighlight: "Conecte su flota para convertir datos en resultados. Plataforma de telemetría que soporta vehículos de múltiples marcas.",
    nexproConnectFullDesc: "NexPro Connect ofrece tecnología de información remota a través de sensores avanzados y conectividad inteligente.",
    nexproFeature1: "Localización de Flota",
    nexproFeature1Desc: "Rastreo GPS en tiempo real de todos los vehículos",
    nexproFeature2: "Consumo de Combustible",
    nexproFeature2Desc: "Monitoreo detallado del consumo y eficiencia",
    nexproFeature3: "Evaluación de Conducción",
    nexproFeature3Desc: "Análisis del estilo de conducción de los conductores",
    nexproFeature4: "Informes Completos",
    nexproFeature4Desc: "Informes de viaje, rendimiento y análisis",
    nexproPackagesTitle: "Paquetes Disponibles",
    nexproPackage1: "Gestión de Flota y Localización",
    nexproPackage2: "Simulador de Cabina",
    nexproPackage3: "Informes de Viaje y Rendimiento",
    nexproPackage4: "Análisis de Consumo de Combustible",
    nexproPackage5: "Control de Jornada",
    nexproPackage6: "API NexPro Connect para integración",
    nexproNumbers: "+6.000 vehículos conectados",
    nexproNumbersDesc: "+150 concesionarios y +75.000 datos recopilados diariamente",
    
    // IVECO ON Content
    ivecoOnTitleFull: "IVECO ON - El Nuevo Mundo de Conectividad",
    ivecoOnHighlightTitle: "Exclusivo S-WAY",
    ivecoOnHighlight: "Sistema que monitorea en tiempo real toda la dinámica del vehículo S-WAY.",
    ivecoOnFullDesc: "IVECO ON es la solución de conectividad exclusiva para el S-WAY que permite acceder a servicios como telemetría avanzada y diagnósticos remotos.",
    ivecoOnBasicTitle: "IVECO ON Básico",
    ivecoOnFeature1: "Monitoreo en Tiempo Real",
    ivecoOnFeature1Desc: "Acompañe vehículos y conductores en tiempo real",
    ivecoOnFeature2: "Informes Inteligentes",
    ivecoOnFeature2Desc: "Informes semanales automáticos con consejos de ahorro",
    ivecoOnFeature3: "Easy Way App",
    ivecoOnFeature3Desc: "Aplicación para control digital a bordo del vehículo",
    ivecoOnFeature4: "Cerca Electrónica",
    ivecoOnFeature4Desc: "Alertas cuando el vehículo entra en áreas definidas",
    ivecoOnPortalTitle: "Recursos del Portal",
    ivecoOnPortal1: "Monitoreo de vehículos y conductores",
    ivecoOnPortal2: "Análisis de estilo de conducción (DSE)",
    ivecoOnPortal3: "Gráfico de emisión de CO2",
    ivecoOnPortal4: "Seguimiento de rutas diarias",
    ivecoOnPortal5: "Visualización del panel del vehículo",
    ivecoOnAppTitle: "Aplicación Easy Way",
    ivecoOnAppDesc: "Lleve su vida digital a bordo con todas las funcionalidades para controlar su estilo de conducción.",
    ivecoOnAccessTitle: "Acceda al Portal IVECO ON",
    ivecoOnAccessDesc: "Gestione contratos y acceda a funcionalidades exclusivas",
    
    // Telemetry Compare
    telemetryCompareTitle: "Comparativo de Soluciones",
    telemetryCompareDesc: "Compare las funcionalidades de cada plataforma para elegir la mejor opción para su flota.",
    telemetryCompareFeature: "Funcionalidad",
    compareRow1: "Localización GPS",
    compareRow2: "Consumo de Combustible",
    compareRow3: "Evaluación de Conducción",
    compareRow4: "Soporte Multimarca",
    compareRow5: "Actualizaciones OTA",
    compareRow6: "API de Integración",
    compareRow7: "Vehículos Compatibles",
    compareMultibrand: "Multimarca",
    compareSway: "S-WAY",
    telemetryCompareTipTitle: "Consejo",
    telemetryCompareTip: "Para flotas mixtas con diferentes marcas, NexPro Connect es la elección ideal. Para flotas 100% IVECO S-WAY, IVECO ON ofrece recursos exclusivos.",
    
    allRightsReserved: "Todos los derechos reservados",
    print: "Imprimir",
    backToTop: "Volver arriba",
    navigation: "Navegación",
    summary: "Resumen",
  },
  en: {
    searchPlaceholder: "Search in material...",
    solutions: "Solutions and Services",
    home: "Home",
    ivecoSeu: "IVECO SEU",
    coveragePlans: "Coverage Plans",
    oneDrive: "One Drive",
    oneDriveDescription: "Access shared files and documents",
    oneDriveSecurityNote: "For security reasons, OneDrive will open in a new browser tab.",
    openOneDrive: "Open OneDrive",
    faq: "FAQ",
    tools: "Tools",
    qtool: "QTool",
    nexproConnect: "NexPro Connect",
    ssTraining: "SS Training",
    ivecoOn: "IVECO ON",
    missionClassifier: "Mission Classifier",
    welcomeTitle: "IVECO Solutions and Services",
    welcomeSubtitle: "Solutions and Services",
    heroDescription: "Discover our exclusive solutions to maximize efficiency and protect your investment",
    askQuestions: "FAQ",
    toolsResources: "Tools and Resources",
    selectSolution: "Select one of the solutions above to see the complete and detailed content",
    
    ivecoSeuTitle: "IVECO SEU",
    ivecoSeuSubtitle: "Unique Efficiency Software",
    ivecoSeuDescription: "Exclusive IVECO technology that optimizes your truck's performance through intelligent ECU reprogramming, providing fuel savings and power increase.",
    powerGain: "+30hp power gain",
    powerGainDesc: "Real performance improvement",
    fuelSavings: "Up to 3% savings",
    fuelSavingsDesc: "Fuel consumption reduction",
    otaUpdate: "OTA Update",
    otaUpdateDesc: "Via telemetry without stopping the vehicle",
    viewDetails: "View full details",
    
    // Sidebar Sections - Material 1
    sidebarIntro: "Introduction",
    sidebarPerformance: "IVECO SEU Performance",
    sidebarTechnology: "Exclusive Technology",
    sidebarAudience: "Target Audience",
    sidebarHowItWorks: "How It Works",
    sidebarOta: "OTA Technology",
    sidebarRoi: "Return on Investment",
    sidebarOffer: "Special Offer",
    
    // Sidebar Sections - Material 2
    sidebarIntro2: "Introduction",
    sidebarBasicPlan: "Basic Plan",
    sidebarEssentialPlan: "Essential Plan",
    sidebarEconomyPlan: "Essential Economy Plan",
    sidebarPowertrainPlan: "Essential Powertrain Plan",
    sidebarCompletePlan: "Complete Plan",
    sidebarExclusions: "Complete Plan Exclusions",
    sidebarTelemetry: "Telemetry",
    
    coveragePlansTitle: "Maintenance Coverage Plans",
    coveragePlansSubtitle: "IVECO Service Plans",
    coveragePlansDescription: "Protect your investment with our maintenance and coverage plans. Flexible options that guarantee peace of mind and cost predictability for your operation.",
    planOptions: "5 plan options",
    planOptionsDesc: "From Basic to Complete",
    comprehensiveCoverage: "Comprehensive coverage",
    comprehensiveCoverageDesc: "Engine, gearbox, axles and more",
    telemetryIncluded: "Telemetry included",
    telemetryIncludedDesc: "IVECO ON and NEXPRO CONNECT",
    
    qtoolDescription: "Quotation and calculation tool for IVECO services. Quickly access pricing information and simulations.",
    accessQtool: "Access QTool",
    nexproDescription: "IVECO connectivity and telemetry platform. Monitor your fleet in real time and optimize operations.",
    accessNexpro: "Access NexPro",
    ssTrainingDescription: "Training and development platform. Access courses and materials to enhance your knowledge.",
    accessTraining: "Access Training",
    ivecoOnDescription: "IVECO connected contracts and services portal. Manage your contracts and access exclusive features.",
    accessIvecoOn: "Access IVECO ON",
    
    m1IntroTitle: "Your Way to Drive, Your Smarter S-Way",
    m1Title: "IVECO SEU – Unique Efficiency Software",
    m1Description: "The Unique Efficiency Software (SEU) is an exclusive IVECO resource that adjusts the S-Way performance based on your actual operation.",
    realPersonalization: "Real Personalization",
    realPersonalizationDesc: "Engine curve adjusted according to your operation characteristics",
    remoteUpdate: "Remote Update (OTA)",
    remoteUpdateDesc: "Agility to configure, without stops, without bureaucracy",
    provenSavings: "Proven Savings",
    provenSavingsDesc: "Better operational efficiency with lower fuel consumption per km",
    m1AttentionNote: "100% IVECO-developed technology. IVECO ON telemetry analyzes truck usage and suggests the best engine calibration for your reality, generating more profitability for the fleet.",
    
    m1PerformanceTitle: "IVECO SEU Performance – Tailored IVECO",
    m1PerformanceDesc: "The efficiency that already comes with the IVECO S-Way gains even more potential by transforming your operation data into intelligence, customizing the engine curve of each truck through diagnostics performed from IVECO ON.",
    m1PerformanceResult: "More savings, more performance, more efficiency. What's already good becomes even better.",
    
    m1TechTitle: "Exclusive IVECO Technology",
    m1TechDesc: "No other manufacturer offers this level of personalization with remote updates and analysis based on real operation data.",
    innovation: "+ Innovation",
    innovationDesc: "Cutting-edge technology applied to fleet management",
    personalization: "+ Personalization",
    personalizationDesc: "S-Way as an even more strategic solution for your fleet",
    
    m1AudienceTitle: "Who is SEU for?",
    m1AudienceDesc: "SEU is especially recommended for highway operations, cargo specifications and focus on operational cost.",
    indicatedProfiles: "Indicated Profiles",
    fleetOwners: "Fleet Owners and Carriers",
    fleetOwnersDesc: "Companies that want efficiency and predictability in operations.",
    logisticsOperators: "Logistics Operators",
    logisticsOperatorsDesc: "Focus on profitability and optimization of operational costs.",
    businessMindedOwners: "Business-Minded Owner-Operators",
    businessMindedOwnersDesc: "Ideal for those seeking more results without complications.",
    
    m1HowItWorksTitle: "How Does It Work?",
    m1HowItWorksDesc: "Count on our team of specialists' consultancy to monitor your truck's performance.",
    step1Title: "Data Collection",
    step1Desc: "Data collection via IVECO ON for 30 days of operation",
    step2Title: "Specialized Analysis",
    step2Desc: "IVECO analysis on usage, load, route and topography",
    step3Title: "Personalized Parameterization",
    step3Desc: "Personalized vehicle parameterization according to your operation",
    step4Title: "Remote Update",
    step4Desc: "Remote update via OTA, no need to stop",
    step5Title: "Direct Result",
    step5Desc: "More savings and performance adjusted to the operation",
    technicalReports: "Technical Reports",
    technicalReportsDesc: "Delivery of technical reports with before and after IVECO SEU comparisons.",
    practicalGuidelines: "Practical Guidelines",
    practicalGuidelinesDesc: "Practical driving guidelines for indicator evolution.",
    
    m1OtaTitle: "OTA Technology – Efficiency Without Interruption",
    m1OtaAttention: "The customer doesn't need to stop the truck to benefit from SEU.",
    m1OtaDesc: "The update is done remotely via OTA (Over The Air), with security and agility. While the operation runs, the technology works to optimize.",
    m1OtaRecommendation: "It's maximum efficiency with minimum intervention.",
    
    m1RoiTitle: "Why Bet on IVECO SEU?",
    roiLabel: "Return on Investment",
    roiTime: "In approximately 3 months",
    realSavings: "Real Savings",
    realSavingsItems: ["Real fuel savings", "Increased truck lifespan", "Less wear and more predictability"],
    exclusiveAdvantages: "Exclusive Advantages",
    exclusiveAdvantagesItems: ["Solution integrated with IVECO ON connectivity", "Proven sustainability: less consumption, lower environmental impact", "Customized truck, without losing warranty and without stopping"],
    
    m1OfferTitle: "Special Offer",
    commercialCondition: "Commercial Condition",
    commercialConditionDesc: "20% of delivered savings, multiplied by factor 18.",
    paybackSimulator: "Payback Simulator",
    paybackSimulatorDesc: "Use the IVECO simulator to calculate the return on investment based on your specific operation.",
    m1FinalMessage: "We understand your path and follow with you.",
    m1FinalDescription: "Discover how IVECO SEU can elevate S-Way performance and generate real results.",
    
    noResultsFound: "No results found for",
    
    m2IntroTitle: "Service Coverage – Instructions",
    m2Title: "The simplest way to take care of your Iveco",
    m2Description: "By taking care of your truck at the authorized network, you guarantee specialized labor, genuine products, low cost and fast maintenance for your Iveco.",
    
    basicPlan: "Basic Plan",
    basicPlanDesc: "The filter and engine oil are mandatory and fundamental maintenance items for the proper functioning of your vehicle. In addition to lubricating moving parts, preventing wear, oil has an essential function in cooling components that are exposed to high temperatures.",
    basicPlanIncludes: "The Basic Plan Includes",
    engineOil: "Engine oil",
    engineOilFilter: "Engine oil filter",
    
    essentialPlan: "Essential Plan",
    essentialPlanSubtitle: "For you, all revisions up to date",
    essentialPlanDesc: "With fixed-value installments, the Essential plan guarantees the correct maintenance of your vehicle, so that your vehicle's performance is much higher.",
    essentialPlanCoverage: "Essential Plan Coverage",
    essentialItems: [
      "Fuel filter and pre-filter",
      "Air filter and anti-pollen",
      "Engine oil filter",
      "Urea filter",
      "Hydraulic steering oil filter (subject to evaluation of replacement need)",
      "APU filter",
      "Belts and tensioners",
      "Valve adjustment",
      "Breather gaskets",
      "Lubricants (engine oil, differential, hydraulic steering, wheel hubs and transmission, plus coolant)"
    ],
    
    economyPlan: "Essential Economy Plan",
    economyPlanSubtitle: "The solution for your pre-owned vehicle",
    economyPlanDesc: "Focused on vehicles that no longer have warranty, the Essential Economy Plan has the same coverage as the Essential Plan, but with PRO parts, guaranteeing a more affordable plan for the customer with certified parts that ensure confidence in driving your vehicle.",
    economyPlanNote: "This plan uses PRO line parts – certified and with quality guarantee, but with more accessible cost.",
    viewFullCoverage: "View full coverage list",
    
    powertrainPlan: "Essential Powertrain Plan",
    powertrainPlanSubtitle: "Coverage of the most critical items",
    powertrainPlanDesc: "In addition to all the coverage of the Essential Plan, the Essential Powertrain Plan covers corrective maintenance of the entire vehicle powertrain (engine, transmission, differential and drive shaft), plus the telemetry system indicated by Iveco for your vehicle!",
    includesPowertrain: "Includes Complete Powertrain",
    engine: "Engine",
    transmission: "Transmission",
    differential: "Differential",
    driveShaft: "Drive Shaft",
    powertrainNote: "This plan also includes telemetry system indicated by Iveco for your vehicle.",
    
    completePlan: "Complete Plan",
    completePlanSubtitle: "The greatest coverage for your vehicle",
    completePlanDesc: "The Complete Plan covers all preventive maintenance of the vehicle (like the Essential Plan), in addition to covering maintenance and repairs for various systems.",
    systemsCoverage: "Systems Coverage",
    completeItems: [
      "Powertrain sets (engine, transmission, differential and drive shaft)",
      "Brake systems",
      "Suspension system and leaf springs",
      "Steering system",
      "Pneumatic systems",
      "Electrical systems"
    ],
    additionalBenefits: "Additional Benefits",
    additionalBenefitsItems: [
      "Replacement of wear items",
      "24h roadside assistance",
      "24h towing",
      "Telemetry indicated for your vehicle"
    ],
    completeAttention: "Roadside assistance and towing do not apply in cases of verified truck misuse, such as operational insistence or collisions/impacts to the vehicle.",
    
    exclusionsTitle: "Complete Plan Exclusions",
    exclusionsSubtitle: "Items not covered",
    exclusionsDesc: "The plan does not cover peripheral or cabin items such as:",
    cabinItems: "Cabin Items",
    cabinItemsList: ["Moldings and drawers", "Curtains", "Refrigerators and rails", "Seats and bed", "Sun visors and other internal items"],
    externalItems: "External Items and Others",
    externalItemsList: ["Rearview mirrors, headlights and bumpers", "Tires", "Alignment and balancing", "Painting and bodywork", "Windshields", "Interclima maintenance"],
    
    telemetryTitle: "Telemetry",
    ivecoOnDesc: "Exclusive connectivity solution for the S-WAY, allowing users to access services such as telemetry, software updates and diagnostics.",
    nexproConnectDesc: "Connectivity platform for multi-brand vehicles, which allows owners to monitor and manage all their vehicles on a single platform.",
    period: "Period",
    basic: "Basic",
    performance: "Performance",
    year: "year",
    years: "years",
    
    // Telemetry Tab and Card
    telemetryTab: "Telemetry",
    telemetryCardTitle: "Telemetry",
    telemetryCardSubtitle: "Connectivity Solutions",
    telemetryCardDescription: "Connect your fleet and transform data into results. Monitor vehicles in real time, analyze performance and optimize operations.",
    telemetryCardFeature1: "NexPro Connect",
    telemetryCardFeature1Desc: "Multi-brand platform",
    telemetryCardFeature2: "IVECO ON",
    telemetryCardFeature2Desc: "Exclusive for S-WAY",
    telemetryCardFeature3: "Smart Management",
    telemetryCardFeature3Desc: "Real-time data",
    
    // Sidebar Sections - Telemetria
    sidebarTelemetriaIntro: "Introduction",
    sidebarNexpro: "NexPro Connect",
    sidebarIvecoOn: "IVECO ON",
    sidebarComparativo: "Comparison",
    
    // Telemetria Content
    telemetryIntroTitle: "Telemetry - Connectivity that Delivers Results",
    telemetryIntroDesc: "Telemetry allows real-time monitoring of the entire vehicle and driver dynamics. With this technology, it's possible to manage fleets much more efficiently.",
    telemetryIntroHighlightTitle: "Why Telemetry?",
    telemetryIntroNote: "Reduce your fleet costs and have control over vehicle efficiency. IVECO is committed to protecting the value and productivity of your vehicle.",
    telemetryFeature1: "Performance Management",
    telemetryFeature1Desc: "Track performance indicators and operational costs",
    telemetryFeature2: "Consumption Reduction",
    telemetryFeature2Desc: "Identify fuel saving opportunities",
    telemetryFeature3: "Operational Safety",
    telemetryFeature3Desc: "Monitor driving behavior and prevent risks",
    
    // NexPro Connect Content
    nexproConnectTitle: "NexPro Connect - Your Connected Fleet",
    nexproConnectHighlightTitle: "Multi-brand Solution",
    nexproConnectHighlight: "Connect your fleet to convert data into results. Telemetry platform that supports multi-brand vehicles.",
    nexproConnectFullDesc: "NexPro Connect offers remote information technology through advanced sensors and intelligent connectivity.",
    nexproFeature1: "Fleet Location",
    nexproFeature1Desc: "Real-time GPS tracking of all vehicles",
    nexproFeature2: "Fuel Consumption",
    nexproFeature2Desc: "Detailed monitoring of consumption and efficiency",
    nexproFeature3: "Driving Evaluation",
    nexproFeature3Desc: "Analysis of drivers' driving style",
    nexproFeature4: "Complete Reports",
    nexproFeature4Desc: "Trip, performance and analysis reports",
    nexproPackagesTitle: "Available Packages",
    nexproPackage1: "Fleet Management and Location",
    nexproPackage2: "Cabin Simulator",
    nexproPackage3: "Trip and Performance Reports",
    nexproPackage4: "Fuel Consumption Analysis",
    nexproPackage5: "Journey Control",
    nexproPackage6: "NexPro Connect API for integration",
    nexproNumbers: "+6,000 connected vehicles",
    nexproNumbersDesc: "+150 dealers and +75,000 data collected daily",
    
    // IVECO ON Content
    ivecoOnTitleFull: "IVECO ON - The New World of Connectivity",
    ivecoOnHighlightTitle: "S-WAY Exclusive",
    ivecoOnHighlight: "System that monitors in real time all dynamics of the S-WAY vehicle.",
    ivecoOnFullDesc: "IVECO ON is the exclusive connectivity solution for the S-WAY that allows access to services such as advanced telemetry and remote diagnostics.",
    ivecoOnBasicTitle: "IVECO ON Basic",
    ivecoOnFeature1: "Real-time Monitoring",
    ivecoOnFeature1Desc: "Track vehicles and drivers in real time",
    ivecoOnFeature2: "Smart Reports",
    ivecoOnFeature2Desc: "Automatic weekly reports with savings tips",
    ivecoOnFeature3: "Easy Way App",
    ivecoOnFeature3Desc: "App for digital control on board the vehicle",
    ivecoOnFeature4: "Electronic Fence",
    ivecoOnFeature4Desc: "Alerts when the vehicle enters defined areas",
    ivecoOnPortalTitle: "Portal Features",
    ivecoOnPortal1: "Vehicle and driver monitoring",
    ivecoOnPortal2: "Driving style analysis (DSE)",
    ivecoOnPortal3: "CO2 emission chart",
    ivecoOnPortal4: "Daily route tracking",
    ivecoOnPortal5: "Vehicle dashboard visualization",
    ivecoOnAppTitle: "Easy Way App",
    ivecoOnAppDesc: "Take your digital life on board with all the features to control your driving style.",
    ivecoOnAccessTitle: "Access IVECO ON Portal",
    ivecoOnAccessDesc: "Manage contracts and access exclusive features",
    
    // Telemetry Compare
    telemetryCompareTitle: "Solutions Comparison",
    telemetryCompareDesc: "Compare the features of each platform to choose the best option for your fleet.",
    telemetryCompareFeature: "Feature",
    compareRow1: "GPS Location",
    compareRow2: "Fuel Consumption",
    compareRow3: "Driving Evaluation",
    compareRow4: "Multi-brand Support",
    compareRow5: "OTA Updates",
    compareRow6: "Integration API",
    compareRow7: "Compatible Vehicles",
    compareMultibrand: "Multi-brand",
    compareSway: "S-WAY",
    telemetryCompareTipTitle: "Tip",
    telemetryCompareTip: "For mixed fleets with different brands, NexPro Connect is the ideal choice. For 100% IVECO S-WAY fleets, IVECO ON offers exclusive features.",
    
    allRightsReserved: "All rights reserved",
    print: "Print",
    backToTop: "Back to top",
    navigation: "Navigation",
    summary: "Summary",
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("pt");

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t: translations[language],
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
