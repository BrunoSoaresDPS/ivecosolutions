import { useState } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Calculator, Link2, GraduationCap, Globe, Target, ChevronRight, Cloud } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const tools = [
  { id: "qtool", path: "/qtool", icon: Calculator, labelKey: "qtool" as const },
  { id: "nexpro", path: "/nexpro-connect", icon: Link2, labelKey: "nexproConnect" as const },
  { id: "training", path: "/ss-training", icon: GraduationCap, labelKey: "ssTraining" as const },
  { id: "iveco-on", path: "/iveco-on", icon: Globe, labelKey: "ivecoOn" as const },
  { id: "mission", path: "/classificador-missao", icon: Target, labelKey: "missionClassifier" as const },
  { id: "onedrive", path: "/onedrive", icon: Cloud, labelKey: "oneDrive" as const },
];

export function ToolsSidebar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const { t } = useLanguage();

  return (
    <aside
      className={cn(
        "fixed left-0 top-1/2 -translate-y-1/2 z-40 transition-all duration-300 ease-in-out no-print",
        "bg-sidebar-background border-r border-sidebar-border shadow-lg rounded-r-xl",
        "hidden sm:block", // Hide on very small screens
        isExpanded ? "w-56" : "w-10 sm:w-12"
      )}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      {/* Expand indicator */}
      <div
        className={cn(
          "absolute -right-3 top-1/2 -translate-y-1/2 bg-sidebar-background rounded-full p-1 border border-sidebar-border shadow-md transition-transform duration-300",
          isExpanded && "rotate-180"
        )}
      >
        <ChevronRight className="h-3 w-3 text-sidebar-foreground" />
      </div>

      <div className="py-3 sm:py-4">
        {/* Header */}
        <div
          className={cn(
            "px-3 mb-2 sm:mb-3 overflow-hidden transition-all duration-300",
            isExpanded ? "opacity-100" : "opacity-0 h-0"
          )}
        >
          <h3 className="text-xs font-semibold text-sidebar-foreground/70 uppercase tracking-wider">
            {t.tools}
          </h3>
        </div>

        {/* Tools list */}
        <nav className="space-y-0.5 sm:space-y-1 px-1.5 sm:px-2">
          {tools.map((tool) => (
            <Link
              key={tool.id}
              to={tool.path}
              className={cn(
                "flex items-center gap-2 sm:gap-3 px-1.5 sm:px-2 py-2 sm:py-2.5 rounded-lg transition-all duration-200",
                "text-sidebar-foreground/80 hover:text-sidebar-foreground hover:bg-sidebar-accent",
                "group"
              )}
              title={!isExpanded ? t[tool.labelKey] : undefined}
            >
              <tool.icon className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 transition-transform group-hover:scale-110" />
              <span
                className={cn(
                  "text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-300",
                  isExpanded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2 absolute"
                )}
              >
                {t[tool.labelKey]}
              </span>
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  );
}
