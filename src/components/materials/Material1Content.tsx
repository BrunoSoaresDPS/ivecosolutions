import { useState, useMemo } from "react";
import { Section } from "@/components/content/Section";
import { ContentCard } from "@/components/content/ContentCard";
import { HighlightBlock } from "@/components/content/HighlightBlock";
import { StepCard } from "@/components/content/StepCard";
import { FeatureList } from "@/components/content/FeatureList";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Gauge,
  Zap,
  TrendingUp,
  Truck,
  Users,
  Settings,
  Wifi,
  PiggyBank,
  Leaf,
  BadgePercent,
} from "lucide-react";

interface Material1ContentProps {
  searchQuery: string;
  onSectionVisible: (sectionId: string) => void;
}

export const material1Sections = [
  { id: "intro", title: "Introdução" },
  { id: "performance", title: "IVECO SEU Performance" },
  { id: "tecnologia", title: "Tecnologia Exclusiva" },
  { id: "publico", title: "Público-Alvo" },
  { id: "funcionamento", title: "Como Funciona" },
  { id: "ota", title: "Tecnologia OTA" },
  { id: "retorno", title: "Retorno do Investimento" },
  { id: "oferta", title: "Oferta Especial" },
];

export function Material1Content({ searchQuery, onSectionVisible }: Material1ContentProps) {
  const { t } = useLanguage();
  const [expandedSections, setExpandedSections] = useState<string[]>(["publico-accordion"]);

  const filteredContent = useMemo(() => {
    if (!searchQuery) return null;
    const query = searchQuery.toLowerCase();
    
    const matches: string[] = [];
    
    if ("performance personalização motor curva".includes(query)) {
      matches.push("performance");
    }
    if ("tecnologia exclusiva inovação".includes(query)) {
      matches.push("tecnologia");
    }
    if ("frotista autônomo transportadora operador".includes(query)) {
      matches.push("publico");
    }
    if ("funciona etapa dados análise".includes(query)) {
      matches.push("funcionamento");
    }
    if ("ota remoto atualização".includes(query)) {
      matches.push("ota");
    }
    if ("retorno economia investimento combustível".includes(query)) {
      matches.push("retorno");
    }
    if ("oferta desconto payback".includes(query)) {
      matches.push("oferta");
    }
    
    return matches.length > 0 ? matches : null;
  }, [searchQuery]);

  const isVisible = (sectionId: string) => {
    if (!filteredContent) return true;
    return filteredContent.includes(sectionId);
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Hero Section */}
      {isVisible("intro") && (
        <Section id="intro" title={t.m1IntroTitle}>
          <div className="iveco-card p-8 mb-6 iveco-gradient text-primary-foreground">
            <h3 className="text-2xl font-bold mb-4">{t.m1Title}</h3>
            <p className="text-lg mb-6 text-primary-foreground/90">
              {t.m1Description}
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-primary-foreground/10 rounded-lg p-4">
                <Gauge className="h-8 w-8 mb-2" />
                <h4 className="font-semibold mb-1">{t.realPersonalization}</h4>
                <p className="text-sm text-primary-foreground/80">
                  {t.realPersonalizationDesc}
                </p>
              </div>
              <div className="bg-primary-foreground/10 rounded-lg p-4">
                <Wifi className="h-8 w-8 mb-2" />
                <h4 className="font-semibold mb-1">{t.remoteUpdate}</h4>
                <p className="text-sm text-primary-foreground/80">
                  {t.remoteUpdateDesc}
                </p>
              </div>
              <div className="bg-primary-foreground/10 rounded-lg p-4">
                <TrendingUp className="h-8 w-8 mb-2" />
                <h4 className="font-semibold mb-1">{t.provenSavings}</h4>
                <p className="text-sm text-primary-foreground/80">
                  {t.provenSavingsDesc}
                </p>
              </div>
            </div>
          </div>

          <HighlightBlock type="attention">
            {t.m1AttentionNote}
          </HighlightBlock>
        </Section>
      )}

      {/* Performance Section */}
      {isVisible("performance") && (
        <Section id="performance" title={t.m1PerformanceTitle}>
          <ContentCard icon={<Gauge className="h-6 w-6" />}>
            <p className="mb-4">
              {t.m1PerformanceDesc}
            </p>
            <HighlightBlock type="recommendation" title={t.realSavings}>
              <strong>{t.m1PerformanceResult}</strong>
            </HighlightBlock>
          </ContentCard>
        </Section>
      )}

      {/* Tecnologia Exclusiva */}
      {isVisible("tecnologia") && (
        <Section id="tecnologia" title={t.m1TechTitle}>
          <ContentCard icon={<Zap className="h-6 w-6" />}>
            <p className="text-lg font-medium mb-4">
              {t.m1TechDesc}
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-6">
              <div className="bg-secondary rounded-lg p-4">
                <h4 className="font-semibold text-primary mb-2">{t.innovation}</h4>
                <p className="text-sm text-foreground/70">
                  {t.innovationDesc}
                </p>
              </div>
              <div className="bg-secondary rounded-lg p-4">
                <h4 className="font-semibold text-primary mb-2">{t.personalization}</h4>
                <p className="text-sm text-foreground/70">
                  {t.personalizationDesc}
                </p>
              </div>
            </div>
          </ContentCard>
        </Section>
      )}

      {/* Público-Alvo */}
      {isVisible("publico") && (
        <Section id="publico" title={t.m1AudienceTitle}>
          <p className="text-foreground/70 mb-6">
            {t.m1AudienceDesc}
          </p>

          <Accordion type="multiple" value={expandedSections} onValueChange={setExpandedSections}>
            <AccordionItem value="publico-accordion">
              <AccordionTrigger className="text-left">
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-primary" />
                  <span>{t.indicatedProfiles}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid gap-4 pt-4">
                  <ContentCard title={t.fleetOwners} icon={<Truck className="h-5 w-5" />}>
                    <p>{t.fleetOwnersDesc}</p>
                  </ContentCard>
                  <ContentCard title={t.logisticsOperators} icon={<Settings className="h-5 w-5" />}>
                    <p>{t.logisticsOperatorsDesc}</p>
                  </ContentCard>
                  <ContentCard title={t.businessMindedOwners} icon={<Users className="h-5 w-5" />}>
                    <p>{t.businessMindedOwnersDesc}</p>
                  </ContentCard>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </Section>
      )}

      {/* Como Funciona */}
      {isVisible("funcionamento") && (
        <Section id="funcionamento" title={t.m1HowItWorksTitle}>
          <p className="text-foreground/70 mb-6">
            {t.m1HowItWorksDesc}
          </p>

          <div className="space-y-4">
            <StepCard
              number={1}
              title={t.step1Title}
              description={t.step1Desc}
            />
            <StepCard
              number={2}
              title={t.step2Title}
              description={t.step2Desc}
            />
            <StepCard
              number={3}
              title={t.step3Title}
              description={t.step3Desc}
            />
            <StepCard
              number={4}
              title={t.step4Title}
              description={t.step4Desc}
            />
            <StepCard
              number={5}
              title={t.step5Title}
              description={t.step5Desc}
            />
          </div>

          <div className="mt-8 grid md:grid-cols-2 gap-4">
            <ContentCard title={t.technicalReports}>
              <p>{t.technicalReportsDesc}</p>
            </ContentCard>
            <ContentCard title={t.practicalGuidelines}>
              <p>{t.practicalGuidelinesDesc}</p>
            </ContentCard>
          </div>
        </Section>
      )}

      {/* Tecnologia OTA */}
      {isVisible("ota") && (
        <Section id="ota" title={t.m1OtaTitle}>
          <ContentCard icon={<Wifi className="h-6 w-6" />}>
            <HighlightBlock type="attention">
              {t.m1OtaAttention}
            </HighlightBlock>
            <p className="mt-4">
              {t.m1OtaDesc}
            </p>
            <HighlightBlock type="recommendation">
              {t.m1OtaRecommendation}
            </HighlightBlock>
          </ContentCard>
        </Section>
      )}

      {/* Retorno do Investimento */}
      {isVisible("retorno") && (
        <Section id="retorno" title={t.m1RoiTitle}>
          <div className="iveco-card p-6 bg-secondary mb-6">
            <div className="flex items-center gap-4 mb-4">
              <PiggyBank className="h-10 w-10 text-primary" />
              <div>
                <h3 className="text-xl font-bold text-primary">{t.roiLabel}</h3>
                <p className="text-lg text-primary">{t.roiTime}</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <ContentCard title={t.realSavings} icon={<TrendingUp className="h-5 w-5" />}>
              <FeatureList items={t.realSavingsItems} />
            </ContentCard>
            <ContentCard title={t.exclusiveAdvantages} icon={<Leaf className="h-5 w-5" />}>
              <FeatureList items={t.exclusiveAdvantagesItems} />
            </ContentCard>
          </div>
        </Section>
      )}

      {/* Oferta Especial */}
      {isVisible("oferta") && (
        <Section id="oferta" title={t.m1OfferTitle}>
          <ContentCard icon={<BadgePercent className="h-6 w-6" />}>
            <HighlightBlock type="rule" title={t.commercialCondition}>
              <p className="font-medium">{t.commercialConditionDesc}</p>
            </HighlightBlock>
            <div className="mt-6 p-4 bg-secondary rounded-lg">
              <h4 className="font-semibold text-primary mb-2">{t.paybackSimulator}</h4>
              <p className="text-sm text-foreground/70">
                {t.paybackSimulatorDesc}
              </p>
            </div>
          </ContentCard>

          <div className="mt-8 iveco-card p-8 iveco-gradient text-primary-foreground text-center">
            <h3 className="text-2xl font-bold mb-4">
              {t.m1FinalMessage}
            </h3>
            <p className="text-lg text-primary-foreground/90">
              {t.m1FinalDescription}
            </p>
          </div>
        </Section>
      )}

      {searchQuery && !filteredContent && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">
            {t.noResultsFound} "{searchQuery}"
          </p>
        </div>
      )}
    </div>
  );
}
