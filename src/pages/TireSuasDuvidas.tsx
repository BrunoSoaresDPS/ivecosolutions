import { useEffect } from "react";
import { Link } from "react-router-dom";
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
      chatbotId: "6428888898",
      display: "fullscreen"
    };

    // Load chatbot script
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://chatling.ai/js/embed.js";
    script.id = "chtl-script";
    script.setAttribute("data-id", "6428888898");
    script.setAttribute("data-display", "fullscreen");
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
    <div className="h-screen flex flex-col bg-background overflow-hidden">
      {/* Simple Header */}
      <header className="flex-shrink-0 bg-black text-white shadow-lg" style={{ zIndex: 99999, position: 'relative' }}>
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
            <span className="hidden sm:block text-white/70 text-sm">Tire suas Dúvidas</span>
          </div>
          <ThemeToggle />
        </div>
      </header>
      
      {/* Full height chatbot */}
      <div 
        id="chtl-inline-bot" 
        className="flex-1 w-full"
        style={{ minHeight: 0 }}
      />
    </div>
  );
}
