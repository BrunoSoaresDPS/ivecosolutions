import { cn } from "@/lib/utils";
import { Wifi } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface TabNavigationProps {
  activeTab: "home" | "material1" | "material2" | "telemetria";
  onTabChange: (tab: "home" | "material1" | "material2" | "telemetria") => void;
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
        <button
          onClick={() => onTabChange("telemetria")}
          className={cn(
            "flex-1 py-3 sm:py-4 px-2 sm:px-6 text-xs sm:text-sm font-medium transition-all duration-200 border-b-2 flex items-center justify-center gap-1",
            activeTab === "telemetria"
              ? "text-primary border-primary bg-secondary/50"
              : "text-muted-foreground border-transparent hover:text-foreground hover:bg-muted/50"
          )}
        >
          <Wifi className="h-3 w-3 sm:h-4 sm:w-4" />
          <span>{t.telemetryTab}</span>
        </button>
      </div>
    </div>
  );
}
