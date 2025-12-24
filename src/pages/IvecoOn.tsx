import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { ThemeToggle } from "@/components/ThemeToggle";
import ivecoLogo from "@/assets/iveco-logo-new.png";
import ivecoLogoWhite from "@/assets/iveco-logo-white-new.png";

export default function IvecoOn() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Simple Header */}
      <header className="bg-card border-b border-border px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link 
            to="/" 
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="text-sm">Voltar</span>
          </Link>
          <div className="h-6 w-px bg-border" />
          <div className="flex items-center gap-2">
            <img 
              src={ivecoLogo} 
              alt="IVECO" 
              className="h-6 dark:hidden"
            />
            <img 
              src={ivecoLogoWhite} 
              alt="IVECO" 
              className="h-6 hidden dark:block"
            />
            <span className="font-semibold text-foreground">IVECO ON</span>
          </div>
        </div>
        <ThemeToggle />
      </header>

      {/* Iframe Content */}
      <div className="flex-1">
        <iframe
          src="https://www.iveco-on.com/"
          title="IVECO ON"
          className="w-full h-full border-0"
          style={{ minHeight: 'calc(100vh - 57px)' }}
          allow="fullscreen"
        />
      </div>
    </div>
  );
}
