import { cn } from "@/lib/utils";

interface TabNavigationProps {
  activeTab: "home" | "material1" | "material2";
  onTabChange: (tab: "home" | "material1" | "material2") => void;
}

export function TabNavigation({ activeTab, onTabChange }: TabNavigationProps) {
  return (
    <div className="bg-card border-b border-border sticky top-14 sm:top-16 z-40 no-print">
      <div className="flex max-w-screen-2xl mx-auto">
        <button
          onClick={() => onTabChange("home")}
          className={cn(
            "flex-1 py-3 sm:py-4 px-2 sm:px-6 text-xs sm:text-sm font-medium transition-all duration-200 border-b-2",
            activeTab === "home"
              ? "text-primary border-primary bg-secondary/50"
              : "text-muted-foreground border-transparent hover:text-foreground hover:bg-muted/50"
          )}
        >
          Início
        </button>
        <button
          onClick={() => onTabChange("material1")}
          className={cn(
            "flex-1 py-3 sm:py-4 px-2 sm:px-6 text-xs sm:text-sm font-medium transition-all duration-200 border-b-2",
            activeTab === "material1"
              ? "text-primary border-primary bg-secondary/50"
              : "text-muted-foreground border-transparent hover:text-foreground hover:bg-muted/50"
          )}
        >
          IVECO SEU
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
          <span className="hidden sm:inline">Cobertura de Planos</span>
          <span className="sm:hidden">Planos</span>
        </button>
      </div>
    </div>
  );
}