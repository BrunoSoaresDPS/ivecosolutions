import { useState, useEffect, useMemo } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Sidebar } from "@/components/layout/Sidebar";
import { ToolsSidebar } from "@/components/layout/ToolsSidebar";
import { TabNavigation } from "@/components/layout/TabNavigation";
import { Material1Content } from "@/components/materials/Material1Content";
import { Material2Content } from "@/components/materials/Material2Content";
import { TelemetriaContent } from "@/components/materials/TelemetriaContent";
import { RentalContent } from "@/components/materials/RentalContent";
import { HomeContent } from "@/components/home/HomeContent";
import { useLanguage } from "@/contexts/LanguageContext";

const Index = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<"home" | "material1" | "material2" | "telemetria" | "rental">("home");
  const [searchQuery, setSearchQuery] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("intro");

  // Translated sidebar sections
  const material1Sections = useMemo(() => [
    { id: "intro", title: t.sidebarIntro },
    { id: "performance", title: t.sidebarPerformance },
    { id: "tecnologia", title: t.sidebarTechnology },
    { id: "publico", title: t.sidebarAudience },
    { id: "funcionamento", title: t.sidebarHowItWorks },
    { id: "ota", title: t.sidebarOta },
    { id: "retorno", title: t.sidebarRoi },
    { id: "oferta", title: t.sidebarOffer },
  ], [t]);

  const material2Sections = useMemo(() => [
    { id: "intro2", title: t.sidebarIntro2 },
    { id: "basico", title: t.sidebarBasicPlan },
    { id: "essencial", title: t.sidebarEssentialPlan },
    { id: "economy", title: t.sidebarEconomyPlan },
    { id: "powertrain", title: t.sidebarPowertrainPlan },
    { id: "completo", title: t.sidebarCompletePlan },
    { id: "exclusoes", title: t.sidebarExclusions },
    { id: "telemetria", title: t.sidebarTelemetry },
  ], [t]);

  const telemetriaSections = useMemo(() => [
    { id: "intro-telemetria", title: t.sidebarTelemetriaIntro },
    { id: "nexpro", title: t.sidebarNexpro },
    { id: "iveco-on", title: t.sidebarIvecoOn },
    { id: "comparativo", title: t.sidebarComparativo },
  ], [t]);

  const rentalSections = useMemo(() => [
    { id: "intro-rental", title: t.sidebarRentalIntro },
    { id: "pacotes-rental", title: t.sidebarRentalPackages },
    { id: "termos-rental", title: t.sidebarRentalTerms },
    { id: "contato-rental", title: t.sidebarRentalContact },
  ], [t]);

  // Reset search and section when tab changes
  useEffect(() => {
    setSearchQuery("");
    if (activeTab === "material1") {
      setActiveSection("intro");
    } else if (activeTab === "material2") {
      setActiveSection("intro2");
    } else if (activeTab === "telemetria") {
      setActiveSection("intro-telemetria");
    } else if (activeTab === "rental") {
      setActiveSection("intro-rental");
    }
  }, [activeTab]);

  const handleSectionClick = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const currentSections = activeTab === "material1" 
    ? material1Sections 
    : activeTab === "material2" 
      ? material2Sections 
      : activeTab === "rental"
        ? rentalSections
        : telemetriaSections;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header 
        onSearch={handleSearch}
        searchQuery={searchQuery}
        onMenuToggle={() => setSidebarOpen(!sidebarOpen)}
        activeTab={activeTab}
        onLogoClick={() => setActiveTab("home")}
      />
      
      {/* Tools Sidebar - always visible */}
      <ToolsSidebar />
      
      <div className="pt-14 sm:pt-16 flex-1 flex flex-col">
        <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />
        
        {activeTab === "home" ? (
          <HomeContent onNavigate={setActiveTab} />
        ) : (
          <div className="flex flex-1 sm:ml-10 lg:ml-12">
            <Sidebar
              sections={currentSections}
              activeSection={activeSection}
              onSectionClick={handleSectionClick}
              isOpen={sidebarOpen}
              onClose={() => setSidebarOpen(false)}
            />
            
            <main className="flex-1 lg:ml-0 min-h-[calc(100vh-8rem)]">
              <div className="p-3 sm:p-4 md:p-6 lg:p-8">
                {activeTab === "material1" ? (
                  <Material1Content 
                    searchQuery={searchQuery}
                    onSectionVisible={setActiveSection}
                  />
                ) : activeTab === "material2" ? (
                  <Material2Content 
                    searchQuery={searchQuery}
                    onSectionVisible={setActiveSection}
                  />
                ) : activeTab === "rental" ? (
                  <RentalContent 
                    searchQuery={searchQuery}
                    onSectionVisible={setActiveSection}
                  />
                ) : (
                  <TelemetriaContent 
                    searchQuery={searchQuery}
                    onSectionVisible={setActiveSection}
                  />
                )}
              </div>
            </main>
          </div>
        )}
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
