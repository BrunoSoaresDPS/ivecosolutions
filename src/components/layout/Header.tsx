import { Search, Menu, Printer, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

interface HeaderProps {
  onSearch: (query: string) => void;
  searchQuery: string;
  onMenuToggle: () => void;
  activeTab: string;
}

export function Header({ onSearch, searchQuery, onMenuToggle, activeTab }: HeaderProps) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 iveco-gradient text-primary-foreground shadow-iveco-lg no-print">
      <div className="flex items-center justify-between h-16 px-4 lg:px-6">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={onMenuToggle}
            className="lg:hidden text-primary-foreground hover:bg-primary-foreground/10"
          >
            <Menu className="h-5 w-5" />
          </Button>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary-foreground rounded-md flex items-center justify-center">
              <span className="text-primary font-bold text-lg">IV</span>
            </div>
            <div>
              <h1 className="text-lg font-bold tracking-tight">IVECO – Soluções e Serviços</h1>
              <p className="text-xs text-primary-foreground/70 hidden sm:block">
                {activeTab === "material1" ? "IVECO SEU - Software de Eficiência Único" : "Cobertura de Planos de Serviços"}
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Search - Desktop */}
          <div className="hidden md:flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-primary-foreground/60" />
              <Input
                type="search"
                placeholder="Buscar no material..."
                value={searchQuery}
                onChange={(e) => onSearch(e.target.value)}
                className="w-64 pl-10 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:bg-primary-foreground/20"
              />
            </div>
          </div>

          {/* Search - Mobile Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="md:hidden text-primary-foreground hover:bg-primary-foreground/10"
          >
            <Search className="h-5 w-5" />
          </Button>

          {/* Utility Buttons */}
          <Button
            variant="ghost"
            size="icon"
            onClick={scrollToTop}
            className="text-primary-foreground hover:bg-primary-foreground/10"
            title="Voltar ao topo"
          >
            <ArrowUp className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={handlePrint}
            className="text-primary-foreground hover:bg-primary-foreground/10"
            title="Imprimir seção"
          >
            <Printer className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Mobile Search */}
      {isSearchOpen && (
        <div className="md:hidden px-4 pb-4 animate-fade-in">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-primary-foreground/60" />
            <Input
              type="search"
              placeholder="Buscar no material..."
              value={searchQuery}
              onChange={(e) => onSearch(e.target.value)}
              className="w-full pl-10 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
              autoFocus
            />
          </div>
        </div>
      )}
    </header>
  );
}
