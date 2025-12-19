import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Footer } from "@/components/layout/Footer";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import ivecoLogo from "@/assets/iveco-logo-new.png";

declare global {
  interface Window {
    chtlConfig?: {
      chatbotId: string;
      display: string;
    };
  }
}

export default function TireSuasDuvidas() {
  useEffect(() => {
    // Configure chatbot
    window.chtlConfig = {
      chatbotId: "9612341762",
      display: "page_inline"
    };

    // Load chatbot script
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://chatling.ai/js/embed.js";
    script.id = "chtl-script";
    script.setAttribute("data-id", "9612341762");
    script.setAttribute("data-display", "page_inline");
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.getElementById("chtl-script");
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Simple Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black text-white shadow-lg">
        <div className="flex items-center justify-between h-14 sm:h-16 px-2 sm:px-4 lg:px-6">
          <div className="flex items-center gap-2 sm:gap-4">
            <Link to="/">
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/10 h-8 w-8 sm:h-10 sm:w-10"
              >
                <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </Link>
            <Link to="/" className="hover:opacity-80 transition-opacity">
              <img src={ivecoLogo} alt="IVECO" className="h-4 sm:h-5 w-auto brightness-0 invert" />
            </Link>
          </div>
          <ThemeToggle />
        </div>
      </header>
      
      <main className="flex-1 container mx-auto px-4 py-8 mt-20">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
          Tire suas Dúvidas
        </h1>
        
        <div className="max-w-4xl mx-auto">
          <p className="text-muted-foreground text-center mb-8">
            Converse com nosso assistente virtual para esclarecer suas dúvidas sobre produtos e serviços IVECO.
          </p>
          
          <div 
            id="chtl-inline-bot" 
            style={{ width: "100%", height: "500px" }}
            className="rounded-lg border border-border overflow-hidden"
          />
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
