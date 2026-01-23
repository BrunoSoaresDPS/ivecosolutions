import { Link } from "react-router-dom";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";
import ivecoLogo from "@/assets/iveco-logo-new.png";

export default function OneDrive() {
  const { t } = useLanguage();

  return (
    <div className="h-screen flex flex-col bg-background overflow-hidden">
      {/* Simple Header */}
      <header className="flex-shrink-0 bg-black text-white shadow-lg z-50">
        <div className="flex items-center justify-between h-14 sm:h-16 px-2 sm:px-4 lg:px-6">
          <div className="flex items-center gap-2 sm:gap-4">
            <Link to="/">
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/10 h-8 w-8 sm:h-10 sm:w-10"
              >
                <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </Link>
            <Link to="/" className="hover:opacity-80 transition-opacity">
              <img src={ivecoLogo} alt="IVECO" className="h-4 sm:h-5 w-auto brightness-0 invert" />
            </Link>
            <span className="hidden sm:block text-white/70 text-sm">{t.oneDrive}</span>
          </div>
          <div className="flex items-center gap-2">
            <LanguageSwitcher />
            <ThemeToggle />
          </div>
        </div>
      </header>
      
      {/* Full height iframe */}
      <iframe
        src="https://ivecogroup-my.sharepoint.com/personal/thiago_radieddine_ivecogroup_com/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fthiago%5Fradieddine%5Fivecogroup%5Fcom%2FDocuments%2FService%20Solutions%20Files&viewid=b832e580%2D462d%2D4c02%2D8bf1%2Defc75e95d8ca&FolderCTID=0x012000A774C570768EA4408986752FA838C59D&view=0"
        className="flex-1 w-full border-0"
        style={{ minHeight: 0 }}
        title="One Drive"
        allow="clipboard-read; clipboard-write"
      />
    </div>
  );
}
