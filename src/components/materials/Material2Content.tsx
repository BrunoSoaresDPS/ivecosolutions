import { useState, useMemo } from "react";
import { Section } from "@/components/content/Section";
import { ContentCard } from "@/components/content/ContentCard";
import { HighlightBlock } from "@/components/content/HighlightBlock";
import { FeatureList } from "@/components/content/FeatureList";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Droplet,
  Filter,
  Wrench,
  Shield,
  Cog,
  Wifi,
  Car,
  XCircle,
  DollarSign,
} from "lucide-react";

interface Material2ContentProps {
  searchQuery: string;
  onSectionVisible: (sectionId: string) => void;
}

export const material2Sections = [
  { id: "intro2", title: "Introdução" },
  { id: "basico", title: "Plano Básico" },
  { id: "essencial", title: "Plano Essencial" },
  { id: "economy", title: "Plano Essencial Economy" },
  { id: "powertrain", title: "Plano Essencial Powertrain" },
  { id: "completo", title: "Plano Completo" },
  { id: "exclusoes", title: "Exclusões do Plano Completo" },
  { id: "telemetria", title: "Telemetria" },
];

export function Material2Content({ searchQuery, onSectionVisible }: Material2ContentProps) {
  const { t } = useLanguage();
  const [expandedSections, setExpandedSections] = useState<string[]>(["completo-cobertura"]);

  const filteredContent = useMemo(() => {
    if (!searchQuery) return null;
    const query = searchQuery.toLowerCase();
    
    const matches: string[] = [];
    
    if ("básico óleo filtro motor".includes(query)) {
      matches.push("basico");
    }
    if ("essencial revisão filtro combustível ar".includes(query)) {
      matches.push("essencial");
    }
    if ("economy seminovo pro".includes(query)) {
      matches.push("economy");
    }
    if ("powertrain motor transmissão diferencial cardan".includes(query)) {
      matches.push("powertrain");
    }
    if ("completo freio suspensão elétrico guincho socorro".includes(query)) {
      matches.push("completo");
    }
    if ("exclusão cabine pneu pintura".includes(query)) {
      matches.push("exclusoes");
    }
    if ("telemetria iveco on nexpro connect".includes(query)) {
      matches.push("telemetria");
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
      {isVisible("intro2") && (
        <Section id="intro2" title={t.m2IntroTitle}>
          <div className="iveco-card p-8 mb-6 iveco-gradient text-primary-foreground">
            <h3 className="text-2xl font-bold mb-4">{t.m2Title}</h3>
            <p className="text-lg text-primary-foreground/90 mb-6">
              {t.m2Description}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
              <div className="bg-primary-foreground/10 rounded-lg p-3 text-center">
                <span className="font-semibold">{t.basicPlan}</span>
              </div>
              <div className="bg-primary-foreground/10 rounded-lg p-3 text-center">
                <span className="font-semibold">{t.essentialPlan}</span>
              </div>
              <div className="bg-primary-foreground/10 rounded-lg p-3 text-center">
                <span className="font-semibold">{t.powertrainPlan}</span>
              </div>
              <div className="bg-primary-foreground/10 rounded-lg p-3 text-center">
                <span className="font-semibold">{t.economyPlan}</span>
              </div>
              <div className="bg-primary-foreground/10 rounded-lg p-3 text-center">
                <span className="font-semibold">{t.completePlan}</span>
              </div>
              <div className="bg-primary-foreground/10 rounded-lg p-3 text-center">
                <span className="font-semibold">{t.telemetryTitle}</span>
              </div>
            </div>
          </div>
        </Section>
      )}

      {/* Plano Básico */}
      {isVisible("basico") && (
        <Section id="basico" title={t.basicPlan}>
          <ContentCard icon={<Droplet className="h-6 w-6" />}>
            <p className="mb-4">
              {t.basicPlanDesc}
            </p>
            <HighlightBlock type="rule" title={t.basicPlanIncludes}>
              <FeatureList items={[
                t.engineOil,
                t.engineOilFilter,
              ]} />
            </HighlightBlock>
          </ContentCard>
        </Section>
      )}

      {/* Plano Essencial */}
      {isVisible("essencial") && (
        <Section id="essencial" title={t.essentialPlan}>
          <ContentCard icon={<Filter className="h-6 w-6" />} title={t.essentialPlanSubtitle}>
            <p className="mb-4">
              {t.essentialPlanDesc}
            </p>
            
            <HighlightBlock type="rule" title={t.essentialPlanCoverage}>
              <FeatureList items={t.essentialItems} />
            </HighlightBlock>
          </ContentCard>
        </Section>
      )}

      {/* Plano Essencial Economy */}
      {isVisible("economy") && (
        <Section id="economy" title={t.economyPlan}>
          <ContentCard icon={<DollarSign className="h-6 w-6" />} title={t.economyPlanSubtitle}>
            <p className="mb-4">
              {t.economyPlanDesc}
            </p>

            <HighlightBlock type="attention">
              {t.economyPlanNote}
            </HighlightBlock>
            
            <Accordion type="single" collapsible className="mt-4">
              <AccordionItem value="economy-cobertura">
                <AccordionTrigger>{t.viewFullCoverage}</AccordionTrigger>
                <AccordionContent>
                  <FeatureList items={t.essentialItems} />
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </ContentCard>
        </Section>
      )}

      {/* Plano Essencial Powertrain */}
      {isVisible("powertrain") && (
        <Section id="powertrain" title={t.powertrainPlan}>
          <ContentCard icon={<Cog className="h-6 w-6" />} title={t.powertrainPlanSubtitle}>
            <p className="mb-4">
              {t.powertrainPlanDesc}
            </p>

            <HighlightBlock type="recommendation" title={t.includesPowertrain}>
              <div className="grid grid-cols-2 gap-2 mt-2">
                <span className="bg-secondary px-3 py-1 rounded text-sm font-medium">{t.engine}</span>
                <span className="bg-secondary px-3 py-1 rounded text-sm font-medium">{t.transmission}</span>
                <span className="bg-secondary px-3 py-1 rounded text-sm font-medium">{t.differential}</span>
                <span className="bg-secondary px-3 py-1 rounded text-sm font-medium">{t.driveShaft}</span>
              </div>
            </HighlightBlock>

            <HighlightBlock type="observation">
              {t.powertrainNote}
            </HighlightBlock>
          </ContentCard>
        </Section>
      )}

      {/* Plano Completo */}
      {isVisible("completo") && (
        <Section id="completo" title={t.completePlan}>
          <ContentCard icon={<Shield className="h-6 w-6" />} title={t.completePlanSubtitle}>
            <p className="mb-4">
              {t.completePlanDesc}
            </p>

            <Accordion type="multiple" value={expandedSections} onValueChange={setExpandedSections}>
              <AccordionItem value="completo-cobertura">
                <AccordionTrigger>
                  <div className="flex items-center gap-2">
                    <Wrench className="h-4 w-4" />
                    <span>{t.systemsCoverage}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <FeatureList items={t.completeItems} />
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <HighlightBlock type="recommendation" title={t.additionalBenefits}>
              <FeatureList items={t.additionalBenefitsItems} />
            </HighlightBlock>

            <HighlightBlock type="attention">
              {t.completeAttention}
            </HighlightBlock>
          </ContentCard>
        </Section>
      )}

      {/* Exclusões */}
      {isVisible("exclusoes") && (
        <Section id="exclusoes" title={t.exclusionsTitle}>
          <ContentCard icon={<XCircle className="h-6 w-6" />} title={t.exclusionsSubtitle}>
            <p className="mb-4">
              {t.exclusionsDesc}
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-muted rounded-lg p-4">
                <h4 className="font-semibold mb-3 text-foreground">{t.cabinItems}</h4>
                <ul className="space-y-2 text-sm text-foreground/70">
                  {t.cabinItemsList.map((item, index) => (
                    <li key={index}>• {item}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-muted rounded-lg p-4">
                <h4 className="font-semibold mb-3 text-foreground">{t.externalItems}</h4>
                <ul className="space-y-2 text-sm text-foreground/70">
                  {t.externalItemsList.map((item, index) => (
                    <li key={index}>• {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </ContentCard>
        </Section>
      )}

      {/* Telemetria */}
      {isVisible("telemetria") && (
        <Section id="telemetria" title={t.telemetryTitle}>
          <div className="grid md:grid-cols-2 gap-6">
            <ContentCard icon={<Wifi className="h-6 w-6" />} title="IVECO ON">
              <p className="mb-4">
                {t.ivecoOnDesc}
              </p>
              
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2 font-semibold">{t.period}</th>
                      <th className="text-right py-2 font-semibold">{t.basic}</th>
                      <th className="text-right py-2 font-semibold">{t.performance}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-2">1 {t.year}</td>
                      <td className="text-right py-2">R$ 195,00</td>
                      <td className="text-right py-2">-</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2">2 {t.years}</td>
                      <td className="text-right py-2">R$ 190,00</td>
                      <td className="text-right py-2">-</td>
                    </tr>
                    <tr className="border-b bg-secondary/50">
                      <td className="py-2 font-medium">3 {t.years}</td>
                      <td className="text-right py-2 font-medium text-iveco-success">FREE</td>
                      <td className="text-right py-2">R$ 180,00</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2">4 {t.years}</td>
                      <td className="text-right py-2">R$ 175,00</td>
                      <td className="text-right py-2">-</td>
                    </tr>
                    <tr>
                      <td className="py-2">5 {t.years}</td>
                      <td className="text-right py-2">R$ 160,00</td>
                      <td className="text-right py-2">-</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </ContentCard>

            <ContentCard icon={<Car className="h-6 w-6" />} title="NEXPRO CONNECT">
              <p className="mb-4">
                {t.nexproConnectDesc}
              </p>
              
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2 font-semibold">{t.period}</th>
                      <th className="text-right py-2 font-semibold">{t.basic}</th>
                      <th className="text-right py-2 font-semibold">{t.performance}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-2">1 {t.year}</td>
                      <td className="text-right py-2">R$ 100,00</td>
                      <td className="text-right py-2">R$ 150,00</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2">2 {t.years}</td>
                      <td className="text-right py-2">R$ 90,00</td>
                      <td className="text-right py-2">R$ 140,00</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2">3 {t.years}</td>
                      <td className="text-right py-2">R$ 85,00</td>
                      <td className="text-right py-2">R$ 135,00</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2">4 {t.years}</td>
                      <td className="text-right py-2">R$ 80,00</td>
                      <td className="text-right py-2">R$ 130,00</td>
                    </tr>
                    <tr>
                      <td className="py-2">5 {t.years}</td>
                      <td className="text-right py-2">R$ 75,00</td>
                      <td className="text-right py-2">R$ 125,00</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </ContentCard>
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
