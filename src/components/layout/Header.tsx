import { Search, Menu, Printer, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import ivecoLogo from "@/assets/iveco-logo-new.png";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";

interface HeaderProps {
  onSearch: (query: string) => void;
  searchQuery: string;
  onMenuToggle: () => void;
  activeTab: "home" | "material1" | "material2" | "telemetria" | "rental";
  onLogoClick?: () => void;
}

export function Header({ onSearch, searchQuery, onMenuToggle, activeTab, onLogoClick }: HeaderProps) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { t } = useLanguage();

  const handlePrint = () => {
    window.print();
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const getSubtitle = () => {
    switch (activeTab) {
      case "material1":
        return "IVECO SEU - Software de Eficiência Único";
      case "material2":
        return t.coveragePlans;
      case "telemetria":
        return t.telemetryTab;
      case "rental":
        return t.rentalTab;
      default:
        return t.solutions;
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black text-white shadow-lg no-print">
      <div className="flex items-center justify-between h-14 sm:h-16 px-2 sm:px-4 lg:px-6">
        <div className="flex items-center gap-2 sm:gap-4">
          {activeTab !== "home" && (
            <Button
              variant="ghost"
              size="icon"
              onClick={onMenuToggle}
              className="lg:hidden text-white hover:bg-white/10 h-8 w-8 sm:h-10 sm:w-10"
            >
              <Menu className="h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
          )}
          <div className="flex items-center gap-2 sm:gap-4">
            <button onClick={onLogoClick} className="hover:opacity-80 transition-opacity">
              <img src={ivecoLogo} alt="IVECO" className="h-4 sm:h-5 w-auto brightness-0 invert" />
            </button>
            <div className="hidden md:block">
              <p className="text-xs sm:text-sm text-white/70">
                {getSubtitle()}
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-1 sm:gap-2">
          {/* Language Switcher */}
          <LanguageSwitcher />

          {/* Search - Desktop */}
          <div className="hidden lg:flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/60" />
              <Input
                type="search"
                placeholder={t.searchPlaceholder}
                value={searchQuery}
                onChange={(e) => onSearch(e.target.value)}
                className="w-48 xl:w-64 pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:bg-white/20 focus:border-white/40"
              />
            </div>
          </div>

          {/* Search - Mobile/Tablet Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="lg:hidden text-white hover:bg-white/10 h-8 w-8 sm:h-10 sm:w-10"
          >
            <Search className="h-4 w-4 sm:h-5 sm:w-5" />
          </Button>

          {/* Theme Toggle */}
          <ThemeToggle />

          {/* Utility Buttons */}
          <Button
            variant="ghost"
            size="icon"
            onClick={scrollToTop}
            className="hidden sm:flex text-white hover:bg-white/10 h-8 w-8 sm:h-10 sm:w-10"
            title={t.backToTop}
          >
            <ArrowUp className="h-4 w-4 sm:h-5 sm:w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={handlePrint}
            className="hidden sm:flex text-white hover:bg-white/10 h-8 w-8 sm:h-10 sm:w-10"
            title={t.print}
          >
            <Printer className="h-4 w-4 sm:h-5 sm:w-5" />
          </Button>
        </div>
      </div>

      {/* Mobile Search */}
      {isSearchOpen && (
        <div className="lg:hidden px-2 sm:px-4 pb-3 sm:pb-4 animate-fade-in">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/60" />
            <Input
              type="search"
              placeholder={t.searchPlaceholder}
              value={searchQuery}
              onChange={(e) => onSearch(e.target.value)}
              className="w-full pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/50"
              autoFocus
            />
          </div>
        </div>
      )}
    </header>
  );
}
