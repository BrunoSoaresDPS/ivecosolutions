import { useEffect, useRef } from "react";
import { Section } from "@/components/content/Section";
import { ContentCard } from "@/components/content/ContentCard";
import { FeatureList } from "@/components/content/FeatureList";
import { HighlightBlock } from "@/components/content/HighlightBlock";
import { useLanguage } from "@/contexts/LanguageContext";
import { Check, X, Phone, Mail, Clock, Truck, Shield, Wrench, MapPin, FileText, Users } from "lucide-react";
import rentalHeader from "@/assets/rental-header.jpg";

interface RentalContentProps {
  searchQuery: string;
  onSectionVisible: (sectionId: string) => void;
}

export function RentalContent({ searchQuery, onSectionVisible }: RentalContentProps) {
  const { t } = useLanguage();
  const sectionsRef = useRef<{ [key: string]: IntersectionObserverEntry }>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          sectionsRef.current[entry.target.id] = entry;
        });

        const visibleSections = Object.values(sectionsRef.current)
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visibleSections.length > 0) {
          onSectionVisible(visibleSections[0].target.id);
        }
      },
      { threshold: 0.3, rootMargin: "-100px 0px -50% 0px" }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [onSectionVisible]);

  const highlightText = (text: string) => {
    if (!searchQuery) return text;
    const regex = new RegExp(`(${searchQuery})`, "gi");
    return text.replace(regex, '<mark class="bg-yellow-200 dark:bg-yellow-800">$1</mark>');
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header Image */}
      <div className="relative rounded-xl overflow-hidden mb-8 h-48 sm:h-64">
        <img 
          src={rentalHeader} 
          alt="IVECO Rental" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">IVECO Rental</h1>
          <p className="text-white/90 text-sm sm:text-base">{t.rentalSubtitle}</p>
        </div>
      </div>

      {/* Intro Section */}
      <Section id="intro-rental" title={t.rentalIntroTitle}>
        <ContentCard>
          <p 
            className="text-lg mb-6"
            dangerouslySetInnerHTML={{ __html: highlightText(t.rentalIntroDesc) }}
          />
          <p 
            className="text-foreground/80 mb-6"
            dangerouslySetInnerHTML={{ __html: highlightText(t.rentalIntroDesc2) }}
          />
          
          <HighlightBlock type="recommendation" title={t.rentalAdvantagesTitle}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-3">
              {t.rentalAdvantagesList.map((advantage, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                  <span className="text-sm">{advantage}</span>
                </div>
              ))}
            </div>
          </HighlightBlock>
        </ContentCard>
      </Section>

      {/* Packages Section */}
      <Section id="pacotes-rental" title={t.rentalPackagesTitle}>
        <ContentCard>
          <p className="mb-6" dangerouslySetInnerHTML={{ __html: highlightText(t.rentalPackagesDesc) }} />
          
          {/* Comparison Table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  <th className="p-3 text-left font-semibold text-sm">{t.rentalService}</th>
                  <th className="p-3 text-center font-semibold text-sm">{t.rentalEssentialPlan}</th>
                  <th className="p-3 text-center font-semibold text-sm">{t.rentalPremiumPlan}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr className="bg-card hover:bg-muted/50">
                  <td className="p-3 text-sm flex items-center gap-2">
                    <Truck className="h-4 w-4 text-primary" />
                    {t.rentalVehicleRental}
                  </td>
                  <td className="p-3 text-center"><Check className="h-5 w-5 text-emerald-600 mx-auto" /></td>
                  <td className="p-3 text-center"><Check className="h-5 w-5 text-emerald-600 mx-auto" /></td>
                </tr>
                <tr className="bg-card hover:bg-muted/50">
                  <td className="p-3 text-sm flex items-center gap-2">
                    <Wrench className="h-4 w-4 text-primary" />
                    {t.rentalPreventiveMaintenance}
                  </td>
                  <td className="p-3 text-center"><Check className="h-5 w-5 text-emerald-600 mx-auto" /></td>
                  <td className="p-3 text-center"><Check className="h-5 w-5 text-emerald-600 mx-auto" /></td>
                </tr>
                <tr className="bg-card hover:bg-muted/50">
                  <td className="p-3 text-sm flex items-center gap-2">
                    <Phone className="h-4 w-4 text-primary" />
                    {t.rentalSupport0800}
                  </td>
                  <td className="p-3 text-center"><Check className="h-5 w-5 text-emerald-600 mx-auto" /></td>
                  <td className="p-3 text-center"><Check className="h-5 w-5 text-emerald-600 mx-auto" /></td>
                </tr>
                <tr className="bg-card hover:bg-muted/50">
                  <td className="p-3 text-sm flex items-center gap-2">
                    <Users className="h-4 w-4 text-primary" />
                    {t.rentalTraining}
                  </td>
                  <td className="p-3 text-center"><Check className="h-5 w-5 text-emerald-600 mx-auto" /></td>
                  <td className="p-3 text-center"><Check className="h-5 w-5 text-emerald-600 mx-auto" /></td>
                </tr>
                <tr className="bg-card hover:bg-muted/50">
                  <td className="p-3 text-sm flex items-center gap-2">
                    <FileText className="h-4 w-4 text-primary" />
                    {t.rentalFineManagement}
                  </td>
                  <td className="p-3 text-center"><Check className="h-5 w-5 text-emerald-600 mx-auto" /></td>
                  <td className="p-3 text-center"><Check className="h-5 w-5 text-emerald-600 mx-auto" /></td>
                </tr>
                <tr className="bg-card hover:bg-muted/50">
                  <td className="p-3 text-sm flex items-center gap-2">
                    <FileText className="h-4 w-4 text-primary" />
                    {t.rentalLicenseIPVA}
                  </td>
                  <td className="p-3 text-center"><Check className="h-5 w-5 text-emerald-600 mx-auto" /></td>
                  <td className="p-3 text-center"><Check className="h-5 w-5 text-emerald-600 mx-auto" /></td>
                </tr>
                <tr className="bg-card hover:bg-muted/50">
                  <td className="p-3 text-sm flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    {t.rentalTelemetry}
                  </td>
                  <td className="p-3 text-center"><Check className="h-5 w-5 text-emerald-600 mx-auto" /></td>
                  <td className="p-3 text-center"><Check className="h-5 w-5 text-emerald-600 mx-auto" /></td>
                </tr>
                <tr className="bg-card hover:bg-muted/50">
                  <td className="p-3 text-sm flex items-center gap-2">
                    <Wrench className="h-4 w-4 text-primary" />
                    {t.rentalCorrectiveMaintenance}
                  </td>
                  <td className="p-3 text-center"><X className="h-5 w-5 text-red-500 mx-auto" /></td>
                  <td className="p-3 text-center"><Check className="h-5 w-5 text-emerald-600 mx-auto" /></td>
                </tr>
                <tr className="bg-card hover:bg-muted/50">
                  <td className="p-3 text-sm flex items-center gap-2">
                    <Clock className="h-4 w-4 text-primary" />
                    {t.rentalRoadside24h}
                  </td>
                  <td className="p-3 text-center"><X className="h-5 w-5 text-red-500 mx-auto" /></td>
                  <td className="p-3 text-center"><Check className="h-5 w-5 text-emerald-600 mx-auto" /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </ContentCard>
      </Section>

      {/* Terms Section */}
      <Section id="termos-rental" title={t.rentalTermsTitle}>
        <div className="grid gap-4">
          <ContentCard title={t.rentalUsagePolicyTitle} icon={<Shield className="h-5 w-5" />}>
            <p dangerouslySetInnerHTML={{ __html: highlightText(t.rentalUsagePolicyDesc) }} />
          </ContentCard>
          
          <ContentCard title={t.rentalContractProcedureTitle} icon={<FileText className="h-5 w-5" />}>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-foreground mb-1">{t.rentalAdhesionProcess}</h4>
                <p className="text-sm text-foreground/80">{t.rentalAdhesionProcessDesc}</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">{t.rentalDeliveryTime}</h4>
                <p className="text-sm text-foreground/80">{t.rentalDeliveryTimeDesc}</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">{t.rentalInsurance}</h4>
                <p className="text-sm text-foreground/80">{t.rentalInsuranceDesc}</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">{t.rentalTires}</h4>
                <p className="text-sm text-foreground/80">{t.rentalTiresDesc}</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">{t.rentalPickupLocation}</h4>
                <p className="text-sm text-foreground/80">{t.rentalPickupLocationDesc}</p>
              </div>
            </div>
          </ContentCard>

          <HighlightBlock type="attention">
            {t.rentalProposalValidity}
          </HighlightBlock>
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contato-rental" title={t.rentalContactTitle}>
        <ContentCard>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-muted/50 rounded-lg p-4">
              <h4 className="font-bold text-foreground mb-2">Leonardo Campos</h4>
              <p className="text-sm text-muted-foreground mb-1">{t.rentalCommercialExecutive}</p>
              <div className="space-y-2 mt-3">
                <a href="mailto:leonardo.campos@ivecogroup.com" className="flex items-center gap-2 text-sm text-primary hover:underline">
                  <Mail className="h-4 w-4" />
                  leonardo.campos@ivecogroup.com
                </a>
                <a href="tel:+5531993330108" className="flex items-center gap-2 text-sm text-primary hover:underline">
                  <Phone className="h-4 w-4" />
                  +55 (31) 9 9333-0108
                </a>
              </div>
            </div>
            
            <div className="bg-muted/50 rounded-lg p-4">
              <h4 className="font-bold text-foreground mb-2">Weberton Oliveira</h4>
              <p className="text-sm text-muted-foreground mb-1">{t.rentalOperationalAnalyst}</p>
              <div className="space-y-2 mt-3">
                <a href="mailto:weberton.oliveira@ivecogroup.com" className="flex items-center gap-2 text-sm text-primary hover:underline">
                  <Mail className="h-4 w-4" />
                  weberton.oliveira@ivecogroup.com
                </a>
                <a href="tel:+5531994490003" className="flex items-center gap-2 text-sm text-primary hover:underline">
                  <Phone className="h-4 w-4" />
                  +55 (31) 9 9449-0003
                </a>
              </div>
            </div>
          </div>
          
          <div className="mt-6 bg-primary/10 rounded-lg p-4 text-center">
            <h4 className="font-bold text-foreground mb-2">{t.rentalCallCenter}</h4>
            <a href="tel:08007023443" className="text-2xl font-bold text-primary hover:underline flex items-center justify-center gap-2">
              <Phone className="h-6 w-6" />
              0800 702 3443
            </a>
          </div>
          
          <div className="mt-6 text-center">
            <p className="text-lg font-semibold text-primary">{t.rentalFinalMessage}</p>
          </div>
        </ContentCard>
      </Section>
    </div>
  );
}
