import { Link } from "react-router-dom";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ArrowLeft, ExternalLink, Cloud, FolderOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";
import ivecoLogo from "@/assets/iveco-logo-new.png";

const ONEDRIVE_URL = "https://ivecogroup-my.sharepoint.com/personal/thiago_radieddine_ivecogroup_com/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fthiago%5Fradieddine%5Fivecogroup%5Fcom%2FDocuments%2FService%20Solutions%20Files&viewid=b832e580%2D462d%2D4c02%2D8bf1%2Defc75e95d8ca&FolderCTID=0x012000A774C570768EA4408986752FA838C59D&view=0";

export default function OneDrive() {
  const { t } = useLanguage();

  const handleOpenOneDrive = () => {
    window.open(ONEDRIVE_URL, "_blank", "noopener,noreferrer");
  };

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
      
      {/* Content */}
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="max-w-md w-full text-center space-y-6">
          <div className="mx-auto w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
            <Cloud className="h-10 w-10 text-primary" />
          </div>
          
          <div className="space-y-2">
            <h1 className="text-2xl font-bold text-foreground">{t.oneDrive}</h1>
            <p className="text-muted-foreground">{t.oneDriveDescription}</p>
          </div>
          
          <div className="bg-muted/50 rounded-lg p-4 text-left space-y-3">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <FolderOpen className="h-4 w-4" />
              <span>Service Solutions Files</span>
            </div>
            <p className="text-xs text-muted-foreground">
              {t.oneDriveSecurityNote}
            </p>
          </div>
          
          <Button 
            onClick={handleOpenOneDrive}
            size="lg"
            className="w-full gap-2"
          >
            <ExternalLink className="h-4 w-4" />
            {t.openOneDrive}
          </Button>
        </div>
      </div>
    </div>
  );
}
