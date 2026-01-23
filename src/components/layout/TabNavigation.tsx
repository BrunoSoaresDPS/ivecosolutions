import { cn } from "@/lib/utils";
import { MessageCircle, Cloud } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

interface TabNavigationProps {
  activeTab: "home" | "material1" | "material2";
  onTabChange: (tab: "home" | "material1" | "material2") => void;
}

export function TabNavigation({ activeTab, onTabChange }: TabNavigationProps) {
  const { t } = useLanguage();

  return (
    <div className="bg-card border-b border-border sticky top-14 sm:top-16 z-40 no-print">
      <div className="flex max-w-screen-2xl mx-auto">
        <button
          onClick={() => onTabChange("material1")}
          className={cn(
            "flex-1 py-3 sm:py-4 px-2 sm:px-6 text-xs sm:text-sm font-medium transition-all duration-200 border-b-2",
            activeTab === "material1"
              ? "text-primary border-primary bg-secondary/50"
              : "text-muted-foreground border-transparent hover:text-foreground hover:bg-muted/50"
          )}
        >
          {t.ivecoSeu}
        </button>
        <button
          onClick={() => onTabChange("material2")}
          className={cn(
            "flex-1 py-3 sm:py-4 px-2 sm:px-6 text-xs sm:text-sm font-medium transition-all duration-200 border-b-2",
            activeTab === "material2"
              ? "text-primary border-primary bg-secondary/50"
              : "text-muted-foreground border-transparent hover:text-foreground hover:bg-muted/50"
          )}
        >
          <span className="hidden sm:inline">{t.coveragePlans}</span>
          <span className="sm:hidden">Planos</span>
        </button>
        <Link
          to="/onedrive"
          className="flex-1 py-3 sm:py-4 px-2 sm:px-6 text-xs sm:text-sm font-medium transition-all duration-200 border-b-2 text-muted-foreground border-transparent hover:text-foreground hover:bg-muted/50 flex items-center justify-center gap-1"
        >
          <Cloud className="h-3 w-3 sm:h-4 sm:w-4" />
          <span>{t.oneDrive}</span>
        </Link>
        <Link
          to="/tire-suas-duvidas"
          className="flex-1 py-3 sm:py-4 px-2 sm:px-6 text-xs sm:text-sm font-medium transition-all duration-200 border-b-2 text-muted-foreground border-transparent hover:text-foreground hover:bg-muted/50 flex items-center justify-center gap-1"
        >
          <MessageCircle className="h-3 w-3 sm:h-4 sm:w-4" />
          <span className="hidden sm:inline">{t.faq}</span>
          <span className="sm:hidden">Dúvidas</span>
        </Link>
      </div>
    </div>
  );
}
