import { cn } from "@/lib/utils";
import { ChevronRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

interface SidebarSection {
  id: string;
  title: string;
  subsections?: { id: string; title: string }[];
}

interface SidebarProps {
  sections: SidebarSection[];
  activeSection: string;
  onSectionClick: (sectionId: string) => void;
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ sections, activeSection, onSectionClick, isOpen, onClose }: SidebarProps) {
  const { t } = useLanguage();
  
  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar - positioned after ToolsSidebar */}
      <aside
        className={cn(
          "fixed lg:sticky top-[7.5rem] lg:top-[7.5rem] left-14 lg:left-0 h-[calc(100vh-7.5rem)] w-64 lg:w-72 bg-card border-r border-border transition-transform duration-300 overflow-y-auto no-print shadow-sm",
          isOpen ? "translate-x-0 z-50 top-0 left-0 h-screen w-72" : "-translate-x-full lg:translate-x-0 z-30"
        )}
      >
        <div className="p-4">
          <div className="flex items-center justify-between mb-4 lg:hidden">
            <h2 className="text-lg font-semibold text-foreground">{t.navigation}</h2>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="text-foreground hover:bg-muted"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          <h2 className="hidden lg:block text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
            {t.summary}
          </h2>

          <nav className="space-y-1">
            {sections.map((section) => (
              <div key={section.id}>
                <button
                  onClick={() => {
                    onSectionClick(section.id);
                    onClose();
                  }}
                  className={cn(
                    "sidebar-link w-full text-left flex items-center gap-2",
                    activeSection === section.id && "sidebar-link-active"
                  )}
                >
                  <ChevronRight className={cn(
                    "h-4 w-4 transition-transform",
                    activeSection === section.id && "rotate-90"
                  )} />
                  {section.title}
                </button>
                {section.subsections && (
                  <div className="ml-6 mt-1 space-y-1">
                    {section.subsections.map((sub) => (
                      <button
                        key={sub.id}
                        onClick={() => {
                          onSectionClick(sub.id);
                          onClose();
                        }}
                        className={cn(
                          "sidebar-link w-full text-left text-xs",
                          activeSection === sub.id && "sidebar-link-active"
                        )}
                      >
                        {sub.title}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      </aside>
    </>
  );
}
