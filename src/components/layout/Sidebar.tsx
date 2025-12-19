import { cn } from "@/lib/utils";
import { ChevronRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";

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
  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-foreground/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed lg:sticky top-16 left-0 h-[calc(100vh-4rem)] w-72 bg-sidebar z-40 transition-transform duration-300 overflow-y-auto no-print",
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        )}
      >
        <div className="p-4">
          <div className="flex items-center justify-between mb-4 lg:hidden">
            <h2 className="text-lg font-semibold text-sidebar-foreground">Navegação</h2>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="text-sidebar-foreground hover:bg-sidebar-accent"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          <h2 className="hidden lg:block text-sm font-semibold text-sidebar-foreground/70 uppercase tracking-wider mb-4">
            Sumário
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
