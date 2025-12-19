import { cn } from "@/lib/utils";

interface TabNavigationProps {
  activeTab: "material1" | "material2";
  onTabChange: (tab: "material1" | "material2") => void;
}

export function TabNavigation({ activeTab, onTabChange }: TabNavigationProps) {
  return (
    <div className="bg-card border-b border-border sticky top-16 z-30 no-print">
      <div className="flex">
        <button
          onClick={() => onTabChange("material1")}
          className={cn(
            "flex-1 py-4 px-6 text-sm font-medium transition-all duration-200 border-b-2",
            activeTab === "material1"
              ? "text-primary border-primary bg-secondary/50"
              : "text-muted-foreground border-transparent hover:text-foreground hover:bg-muted/50"
          )}
        >
          <span className="hidden sm:inline">Material 1 – </span>IVECO SEU
        </button>
        <button
          onClick={() => onTabChange("material2")}
          className={cn(
            "flex-1 py-4 px-6 text-sm font-medium transition-all duration-200 border-b-2",
            activeTab === "material2"
              ? "text-primary border-primary bg-secondary/50"
              : "text-muted-foreground border-transparent hover:text-foreground hover:bg-muted/50"
          )}
        >
          <span className="hidden sm:inline">Material 2 – </span>Cobertura de Planos
        </button>
      </div>
    </div>
  );
}
