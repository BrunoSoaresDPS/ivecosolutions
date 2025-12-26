import { Header } from "@/components/layout/Header";
import { TabNavigation } from "@/components/layout/TabNavigation";
import { Footer } from "@/components/layout/Footer";

const IvecoOn = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header 
        onSearch={() => {}} 
        searchQuery="" 
        onMenuToggle={() => {}} 
        activeTab="home" 
      />
      <TabNavigation activeTab="home" onTabChange={() => {}} />
      
      <main className="flex-1 pt-14 sm:pt-16">
        <div className="w-full h-[calc(100vh-200px)]">
          <iframe
            src="https://www.iveco-on.com/"
            className="w-full h-full border-0"
            title="IVECO ON"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default IvecoOn;
