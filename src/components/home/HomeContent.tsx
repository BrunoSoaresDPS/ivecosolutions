import { ArrowRight, Cpu, Shield, Truck, Gauge, Settings, FileCheck, MessageCircle, Wifi, Link2, Globe, Calculator, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import ivecoSeuHeader from "@/assets/iveco-seu-header.jpg";
import coberturaPlanosHeader from "@/assets/cobertura-planos-header.webp";
import telemetriaHeader from "@/assets/telemetria-header.jpg";

interface HomeContentProps {
  onNavigate: (tab: "material1" | "material2" | "telemetria") => void;
}

export function HomeContent({ onNavigate }: HomeContentProps) {
  const { t } = useLanguage();

  return (
    <div className="min-h-[calc(100vh-12rem)] flex flex-col">
      {/* Hero Section with Video Background */}
      <div className="relative text-white py-12 sm:py-16 md:py-24 px-4 md:px-8 overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/hero-background.mp4" type="video/mp4" />
        </video>
        
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50" />
        
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 drop-shadow-lg">
            {t.welcomeTitle}
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 max-w-3xl mx-auto px-2 drop-shadow-md mb-6">
            {t.heroDescription}
          </p>
          <Link to="/tire-suas-duvidas">
            <Button variant="outline" className="gap-2 bg-white/10 border-white/30 text-white hover:bg-white/20">
              <MessageCircle className="h-4 w-4" />
              {t.askQuestions}
            </Button>
          </Link>
        </div>
      </div>

      {/* Solutions Grid */}
      <div className="flex-1 bg-background py-6 sm:py-8 md:py-12 px-3 sm:px-4 md:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          
          {/* IVECO SEU Card */}
          <div className="bg-card border border-border rounded-lg sm:rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div 
              className="relative p-4 sm:p-6 border-b border-border bg-cover"
              style={{ backgroundImage: `url(${ivecoSeuHeader})`, backgroundPosition: 'center 70%' }}
            >
              <div className="absolute inset-0 bg-black/40" />
              <div className="relative z-10">
                <div className="flex items-center gap-2 sm:gap-3 mb-2">
                  <div className="p-2 sm:p-3 bg-primary rounded-lg">
                    <Cpu className="h-5 w-5 sm:h-6 sm:w-6 text-primary-foreground" />
                  </div>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white">{t.ivecoSeuTitle}</h2>
                </div>
                <p className="text-sm sm:text-base text-white/80">{t.ivecoSeuSubtitle}</p>
              </div>
            </div>
            
            <div className="p-4 sm:p-6">
              <p className="text-sm sm:text-base text-foreground mb-4 sm:mb-6">
                {t.ivecoSeuDescription}
              </p>
              
              <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                <div className="flex items-start gap-2 sm:gap-3">
                  <Gauge className="h-4 w-4 sm:h-5 sm:w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-xs sm:text-sm text-muted-foreground">
                    <strong className="text-foreground">{t.powerGain}</strong> - {t.powerGainDesc}
                  </span>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <Truck className="h-4 w-4 sm:h-5 sm:w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-xs sm:text-sm text-muted-foreground">
                    <strong className="text-foreground">{t.fuelSavings}</strong> - {t.fuelSavingsDesc}
                  </span>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <Settings className="h-4 w-4 sm:h-5 sm:w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-xs sm:text-sm text-muted-foreground">
                    <strong className="text-foreground">{t.otaUpdate}</strong> - {t.otaUpdateDesc}
                  </span>
                </div>
              </div>

              <Button 
                onClick={() => onNavigate("material1")}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-sm sm:text-base"
              >
                {t.viewDetails}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Cobertura de Planos Card */}
          <div className="bg-card border border-border rounded-lg sm:rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div 
              className="relative p-4 sm:p-6 border-b border-border"
              style={{ backgroundImage: `url(${coberturaPlanosHeader})`, backgroundPosition: 'center 40%', backgroundSize: '80%' }}
            >
              <div className="absolute inset-0 bg-black/40" />
              <div className="relative z-10">
                <div className="flex items-center gap-2 sm:gap-3 mb-2">
                  <div className="p-2 sm:p-3 bg-primary rounded-lg">
                    <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-primary-foreground" />
                  </div>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white">{t.coveragePlansTitle}</h2>
                </div>
                <p className="text-sm sm:text-base text-white/80">{t.coveragePlansSubtitle}</p>
              </div>
            </div>
            
            <div className="p-4 sm:p-6">
              <p className="text-sm sm:text-base text-foreground mb-4 sm:mb-6">
                {t.coveragePlansDescription}
              </p>
              
              <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                <div className="flex items-start gap-2 sm:gap-3">
                  <FileCheck className="h-4 w-4 sm:h-5 sm:w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-xs sm:text-sm text-muted-foreground">
                    <strong className="text-foreground">{t.planOptions}</strong> - {t.planOptionsDesc}
                  </span>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-xs sm:text-sm text-muted-foreground">
                    <strong className="text-foreground">{t.comprehensiveCoverage}</strong> - {t.comprehensiveCoverageDesc}
                  </span>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <Truck className="h-4 w-4 sm:h-5 sm:w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-xs sm:text-sm text-muted-foreground">
                    <strong className="text-foreground">{t.telemetryIncluded}</strong> - {t.telemetryIncludedDesc}
                  </span>
                </div>
              </div>

              <Button 
                onClick={() => onNavigate("material2")}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-sm sm:text-base"
              >
                {t.viewDetails}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Telemetria Card */}
          <div className="bg-card border border-border rounded-lg sm:rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div 
              className="relative p-4 sm:p-6 border-b border-border bg-cover"
              style={{ backgroundImage: `url(${telemetriaHeader})`, backgroundPosition: 'center 30%' }}
            >
              <div className="absolute inset-0 bg-black/40" />
              <div className="relative z-10">
                <div className="flex items-center gap-2 sm:gap-3 mb-2">
                  <div className="p-2 sm:p-3 bg-primary rounded-lg">
                    <Wifi className="h-5 w-5 sm:h-6 sm:w-6 text-primary-foreground" />
                  </div>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white">{t.telemetryCardTitle}</h2>
                </div>
                <p className="text-sm sm:text-base text-white/80">{t.telemetryCardSubtitle}</p>
              </div>
            </div>
            
            <div className="p-4 sm:p-6">
              <p className="text-sm sm:text-base text-foreground mb-4 sm:mb-6">
                {t.telemetryCardDescription}
              </p>
              
              <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                <div className="flex items-start gap-2 sm:gap-3">
                  <Link2 className="h-4 w-4 sm:h-5 sm:w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-xs sm:text-sm text-muted-foreground">
                    <strong className="text-foreground">{t.telemetryCardFeature1}</strong> - {t.telemetryCardFeature1Desc}
                  </span>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <Globe className="h-4 w-4 sm:h-5 sm:w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-xs sm:text-sm text-muted-foreground">
                    <strong className="text-foreground">{t.telemetryCardFeature2}</strong> - {t.telemetryCardFeature2Desc}
                  </span>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <Gauge className="h-4 w-4 sm:h-5 sm:w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-xs sm:text-sm text-muted-foreground">
                    <strong className="text-foreground">{t.telemetryCardFeature3}</strong> - {t.telemetryCardFeature3Desc}
                  </span>
                </div>
              </div>

              <Button 
                onClick={() => onNavigate("telemetria")}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-sm sm:text-base"
              >
                {t.viewDetails}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Tools & Resources Grid */}
        <div className="max-w-6xl mx-auto mt-6 sm:mt-8 md:mt-12">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6 text-center">
            {t.toolsResources}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            
            {/* QTool Card */}
            <Link to="/qtool" className="group">
              <div className="bg-card border border-border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 h-full">
                <div className="p-4 sm:p-5 bg-gradient-to-br from-primary/10 to-primary/5 border-b border-border">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary rounded-lg">
                      <Calculator className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground">{t.qtool}</h3>
                  </div>
                </div>
                <div className="p-4 sm:p-5">
                  <p className="text-sm text-muted-foreground mb-4">
                    {t.qtoolDescription}
                  </p>
                  <div className="flex items-center text-primary text-sm font-medium group-hover:translate-x-1 transition-transform">
                    {t.accessQtool}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </div>
            </Link>

            {/* NexPro Connect Card */}
            <Link to="/nexpro-connect" className="group">
              <div className="bg-card border border-border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 h-full">
                <div className="p-4 sm:p-5 bg-gradient-to-br from-primary/10 to-primary/5 border-b border-border">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary rounded-lg">
                      <Link2 className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground">{t.nexproConnect}</h3>
                  </div>
                </div>
                <div className="p-4 sm:p-5">
                  <p className="text-sm text-muted-foreground mb-4">
                    {t.nexproDescription}
                  </p>
                  <div className="flex items-center text-primary text-sm font-medium group-hover:translate-x-1 transition-transform">
                    {t.accessNexpro}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </div>
            </Link>

            {/* SS Training Card */}
            <Link to="/ss-training" className="group">
              <div className="bg-card border border-border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 h-full">
                <div className="p-4 sm:p-5 bg-gradient-to-br from-primary/10 to-primary/5 border-b border-border">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary rounded-lg">
                      <GraduationCap className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground">{t.ssTraining}</h3>
                  </div>
                </div>
                <div className="p-4 sm:p-5">
                  <p className="text-sm text-muted-foreground mb-4">
                    {t.ssTrainingDescription}
                  </p>
                  <div className="flex items-center text-primary text-sm font-medium group-hover:translate-x-1 transition-transform">
                    {t.accessTraining}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </div>
            </Link>

            {/* IVECO ON Card */}
            <Link to="/iveco-on" className="group">
              <div className="bg-card border border-border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 h-full">
                <div className="p-4 sm:p-5 bg-gradient-to-br from-primary/10 to-primary/5 border-b border-border">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary rounded-lg">
                      <Globe className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground">{t.ivecoOn}</h3>
                  </div>
                </div>
                <div className="p-4 sm:p-5">
                  <p className="text-sm text-muted-foreground mb-4">
                    {t.ivecoOnDescription}
                  </p>
                  <div className="flex items-center text-primary text-sm font-medium group-hover:translate-x-1 transition-transform">
                    {t.accessIvecoOn}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </div>
            </Link>

          </div>
        </div>

        {/* Quick Info */}
        <div className="max-w-6xl mx-auto mt-6 sm:mt-8 md:mt-12 text-center px-2">
          <p className="text-muted-foreground text-xs sm:text-sm mb-6">
            {t.selectSolution}
          </p>
          
          {/* FAQ/Chatbot Link */}
          <Link to="/tire-suas-duvidas">
            <Button variant="outline" className="gap-2">
              <MessageCircle className="h-4 w-4" />
              {t.askQuestions}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
