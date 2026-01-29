import { cn } from "@/lib/utils";
import { Wifi, Car } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface TabNavigationProps {
  activeTab: "home" | "material1" | "material2" | "telemetria" | "rental";
  onTabChange: (tab: "home" | "material1" | "material2" | "telemetria" | "rental") => void;
}

export function TabNavigation({ activeTab, onTabChange }: TabNavigationProps) {
  const { t } = useLanguage();

  return (
    <div className="bg-card border-b border-border sticky top-14 sm:top-16 z-40 no-print overflow-x-auto">
      <div className="flex min-w-max sm:min-w-0 max-w-screen-2xl mx-auto">
        <button
          onClick={() => onTabChange("material1")}
          className={cn(
            "flex-1 min-w-[80px] py-2.5 sm:py-3 md:py-4 px-2 sm:px-4 md:px-6 text-[10px] sm:text-xs md:text-sm font-medium transition-all duration-200 border-b-2",
            activeTab === "material1"
              ? "text-primary border-primary bg-secondary/50"
              : "text-muted-foreground border-transparent hover:text-foreground hover:bg-muted/50"
          )}
        >
          <span className="hidden xs:inline">{t.ivecoSeu}</span>
          <span className="xs:hidden">SEU</span>
        </button>
        <button
          onClick={() => onTabChange("material2")}
          className={cn(
            "flex-1 min-w-[80px] py-2.5 sm:py-3 md:py-4 px-2 sm:px-4 md:px-6 text-[10px] sm:text-xs md:text-sm font-medium transition-all duration-200 border-b-2",
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
            "flex-1 min-w-[80px] py-2.5 sm:py-3 md:py-4 px-2 sm:px-4 md:px-6 text-[10px] sm:text-xs md:text-sm font-medium transition-all duration-200 border-b-2 flex items-center justify-center gap-1",
            activeTab === "telemetria"
              ? "text-primary border-primary bg-secondary/50"
              : "text-muted-foreground border-transparent hover:text-foreground hover:bg-muted/50"
          )}
        >
          <Wifi className="h-3 w-3 sm:h-4 sm:w-4" />
          <span className="hidden xs:inline">{t.telemetryTab}</span>
          <span className="xs:hidden">Telem.</span>
        </button>
        <button
          onClick={() => onTabChange("rental")}
          className={cn(
            "flex-1 min-w-[80px] py-2.5 sm:py-3 md:py-4 px-2 sm:px-4 md:px-6 text-[10px] sm:text-xs md:text-sm font-medium transition-all duration-200 border-b-2 flex items-center justify-center gap-1",
            activeTab === "rental"
              ? "text-primary border-primary bg-secondary/50"
              : "text-muted-foreground border-transparent hover:text-foreground hover:bg-muted/50"
          )}
        >
          <Car className="h-3 w-3 sm:h-4 sm:w-4" />
          <span>{t.rentalTab}</span>
        </button>
      </div>
    </div>
  );
}