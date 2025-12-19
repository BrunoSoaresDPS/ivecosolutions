import { useState, useEffect } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Sidebar } from "@/components/layout/Sidebar";
import { TabNavigation } from "@/components/layout/TabNavigation";
import { Material1Content, material1Sections } from "@/components/materials/Material1Content";
import { Material2Content, material2Sections } from "@/components/materials/Material2Content";
import { HomeContent } from "@/components/home/HomeContent";

const Index = () => {
  const [activeTab, setActiveTab] = useState<"home" | "material1" | "material2">("home");
  const [searchQuery, setSearchQuery] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("intro");

  // Reset search and section when tab changes
  useEffect(() => {
    setSearchQuery("");
    if (activeTab === "material1") {
      setActiveSection("intro");
    } else if (activeTab === "material2") {
      setActiveSection("intro2");
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

  const currentSections = activeTab === "material1" ? material1Sections : material2Sections;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header 
        onSearch={handleSearch}
        searchQuery={searchQuery}
        onMenuToggle={() => setSidebarOpen(!sidebarOpen)}
        activeTab={activeTab}
        onLogoClick={() => setActiveTab("home")}
      />
      
      <div className="pt-16 flex-1 flex flex-col">
        <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />
        
        {activeTab === "home" ? (
          <HomeContent onNavigate={setActiveTab} />
        ) : (
          <div className="flex flex-1">
            <Sidebar
              sections={currentSections}
              activeSection={activeSection}
              onSectionClick={handleSectionClick}
              isOpen={sidebarOpen}
              onClose={() => setSidebarOpen(false)}
            />
            
            <main className="flex-1 lg:ml-0 min-h-[calc(100vh-8rem)]">
              <div className="p-4 md:p-8">
                {activeTab === "material1" ? (
                  <Material1Content 
                    searchQuery={searchQuery}
                    onSectionVisible={setActiveSection}
                  />
                ) : (
                  <Material2Content 
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
