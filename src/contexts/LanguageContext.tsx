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
  faq: string;
  
  // Tools Sidebar
  tools: string;
  qtool: string;
  nexproConnect: string;
  ssTraining: string;
  ivecoOn: string;
  missionClassifier: string;
  
  // Home
  welcomeTitle: string;
  welcomeSubtitle: string;
  toolsResources: string;
  
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
    faq: "Tire suas Dúvidas",
    tools: "Ferramentas",
    qtool: "QTool",
    nexproConnect: "NexPro Connect",
    ssTraining: "SS Training",
    ivecoOn: "IVECO ON",
    missionClassifier: "Classificador de Missão",
    welcomeTitle: "Bem-vindo ao Portal IVECO",
    welcomeSubtitle: "Soluções e Serviços",
    toolsResources: "Ferramentas e Recursos",
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
    faq: "Preguntas Frecuentes",
    tools: "Herramientas",
    qtool: "QTool",
    nexproConnect: "NexPro Connect",
    ssTraining: "SS Training",
    ivecoOn: "IVECO ON",
    missionClassifier: "Clasificador de Misión",
    welcomeTitle: "Bienvenido al Portal IVECO",
    welcomeSubtitle: "Soluciones y Servicios",
    toolsResources: "Herramientas y Recursos",
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
    faq: "FAQ",
    tools: "Tools",
    qtool: "QTool",
    nexproConnect: "NexPro Connect",
    ssTraining: "SS Training",
    ivecoOn: "IVECO ON",
    missionClassifier: "Mission Classifier",
    welcomeTitle: "Welcome to IVECO Portal",
    welcomeSubtitle: "Solutions and Services",
    toolsResources: "Tools and Resources",
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
