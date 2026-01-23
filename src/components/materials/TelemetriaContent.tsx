import { useEffect, useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Section } from "@/components/content/Section";
import { FeatureList } from "@/components/content/FeatureList";
import { HighlightBlock } from "@/components/content/HighlightBlock";
import { ContentCard } from "@/components/content/ContentCard";
import { 
  Wifi, 
  Globe, 
  BarChart3, 
  MapPin, 
  Gauge, 
  Fuel, 
  Users, 
  Shield,
  Smartphone,
  Activity,
  Clock,
  FileText,
  TrendingUp,
  Link2,
  Settings
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface TelemetriaContentProps {
  searchQuery: string;
  onSectionVisible: (sectionId: string) => void;
}

export function TelemetriaContent({ searchQuery, onSectionVisible }: TelemetriaContentProps) {
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

  const filterContent = (content: string) => {
    if (!searchQuery) return true;
    return content.toLowerCase().includes(searchQuery.toLowerCase());
  };

  const highlightText = (text: string) => {
    if (!searchQuery) return text;
    const regex = new RegExp(`(${searchQuery})`, "gi");
    return text.replace(regex, '<mark class="bg-yellow-200 dark:bg-yellow-800">$1</mark>');
  };

  const noResults = searchQuery && !filterContent(t.telemetryTab + t.nexproConnect + t.ivecoOn);

  if (noResults) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground text-lg">
          {t.noResultsFound} "<strong>{searchQuery}</strong>"
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-12">
      {/* Introdução */}
      <Section id="intro-telemetria" title={t.telemetryIntroTitle}>
        <HighlightBlock type="observation" title={t.telemetryIntroHighlightTitle}>
          <p dangerouslySetInnerHTML={{ __html: highlightText(t.telemetryIntroNote) }} />
        </HighlightBlock>

        <p className="text-muted-foreground mb-6" dangerouslySetInnerHTML={{ __html: highlightText(t.telemetryIntroDesc) }} />

        <div className="grid md:grid-cols-3 gap-4">
          <ContentCard title={t.telemetryFeature1} icon={<BarChart3 className="h-5 w-5" />}>
            <p>{t.telemetryFeature1Desc}</p>
          </ContentCard>
          <ContentCard title={t.telemetryFeature2} icon={<Fuel className="h-5 w-5" />}>
            <p>{t.telemetryFeature2Desc}</p>
          </ContentCard>
          <ContentCard title={t.telemetryFeature3} icon={<Shield className="h-5 w-5" />}>
            <p>{t.telemetryFeature3Desc}</p>
          </ContentCard>
        </div>
      </Section>

      {/* NexPro Connect */}
      <Section id="nexpro" title={t.nexproConnectTitle}>
        <HighlightBlock type="attention" title={t.nexproConnectHighlightTitle}>
          <p dangerouslySetInnerHTML={{ __html: highlightText(t.nexproConnectHighlight) }} />
        </HighlightBlock>

        <p className="text-muted-foreground mb-6" dangerouslySetInnerHTML={{ __html: highlightText(t.nexproConnectFullDesc) }} />

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <ContentCard title={t.nexproFeature1} icon={<MapPin className="h-5 w-5" />}>
            <p>{t.nexproFeature1Desc}</p>
          </ContentCard>
          <ContentCard title={t.nexproFeature2} icon={<Gauge className="h-5 w-5" />}>
            <p>{t.nexproFeature2Desc}</p>
          </ContentCard>
          <ContentCard title={t.nexproFeature3} icon={<Users className="h-5 w-5" />}>
            <p>{t.nexproFeature3Desc}</p>
          </ContentCard>
          <ContentCard title={t.nexproFeature4} icon={<FileText className="h-5 w-5" />}>
            <p>{t.nexproFeature4Desc}</p>
          </ContentCard>
        </div>

        <h4 className="font-semibold text-foreground mb-3">{t.nexproPackagesTitle}</h4>
        <FeatureList 
          items={[
            t.nexproPackage1,
            t.nexproPackage2,
            t.nexproPackage3,
            t.nexproPackage4,
            t.nexproPackage5,
            t.nexproPackage6
          ]}
        />

        <div className="mt-6 p-4 bg-secondary/50 rounded-lg">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h5 className="font-medium text-foreground">{t.nexproNumbers}</h5>
              <p className="text-sm text-muted-foreground">{t.nexproNumbersDesc}</p>
            </div>
            <Link to="/nexpro-connect">
              <Button className="gap-2">
                <Link2 className="h-4 w-4" />
                {t.accessNexpro}
              </Button>
            </Link>
          </div>
        </div>
      </Section>

      {/* IVECO ON */}
      <Section id="iveco-on" title={t.ivecoOnTitleFull}>
        <HighlightBlock type="attention" title={t.ivecoOnHighlightTitle}>
          <p dangerouslySetInnerHTML={{ __html: highlightText(t.ivecoOnHighlight) }} />
        </HighlightBlock>

        <p className="text-muted-foreground mb-6" dangerouslySetInnerHTML={{ __html: highlightText(t.ivecoOnFullDesc) }} />

        <h4 className="font-semibold text-foreground mb-3">{t.ivecoOnBasicTitle}</h4>
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <ContentCard title={t.ivecoOnFeature1} icon={<Activity className="h-5 w-5" />}>
            <p>{t.ivecoOnFeature1Desc}</p>
          </ContentCard>
          <ContentCard title={t.ivecoOnFeature2} icon={<TrendingUp className="h-5 w-5" />}>
            <p>{t.ivecoOnFeature2Desc}</p>
          </ContentCard>
          <ContentCard title={t.ivecoOnFeature3} icon={<Smartphone className="h-5 w-5" />}>
            <p>{t.ivecoOnFeature3Desc}</p>
          </ContentCard>
          <ContentCard title={t.ivecoOnFeature4} icon={<Clock className="h-5 w-5" />}>
            <p>{t.ivecoOnFeature4Desc}</p>
          </ContentCard>
        </div>

        <h4 className="font-semibold text-foreground mb-3">{t.ivecoOnPortalTitle}</h4>
        <FeatureList 
          items={[
            t.ivecoOnPortal1,
            t.ivecoOnPortal2,
            t.ivecoOnPortal3,
            t.ivecoOnPortal4,
            t.ivecoOnPortal5
          ]}
        />

        <div className="mt-6">
          <h4 className="font-semibold text-foreground mb-3">{t.ivecoOnAppTitle}</h4>
          <p className="text-muted-foreground mb-4" dangerouslySetInnerHTML={{ __html: highlightText(t.ivecoOnAppDesc) }} />
          
          <div className="p-4 bg-secondary/50 rounded-lg">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h5 className="font-medium text-foreground">{t.ivecoOnAccessTitle}</h5>
                <p className="text-sm text-muted-foreground">{t.ivecoOnAccessDesc}</p>
              </div>
              <Link to="/iveco-on">
                <Button className="gap-2">
                  <Globe className="h-4 w-4" />
                  {t.accessIvecoOn}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* Comparativo */}
      <Section id="comparativo" title={t.telemetryCompareTitle}>
        <p className="text-muted-foreground mb-6">{t.telemetryCompareDesc}</p>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-primary text-primary-foreground">
                <th className="p-3 text-left border border-border">{t.telemetryCompareFeature}</th>
                <th className="p-3 text-center border border-border">NexPro Connect</th>
                <th className="p-3 text-center border border-border">IVECO ON</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-card">
                <td className="p-3 border border-border">{t.compareRow1}</td>
                <td className="p-3 text-center border border-border">✓</td>
                <td className="p-3 text-center border border-border">✓</td>
              </tr>
              <tr className="bg-secondary/30">
                <td className="p-3 border border-border">{t.compareRow2}</td>
                <td className="p-3 text-center border border-border">✓</td>
                <td className="p-3 text-center border border-border">✓</td>
              </tr>
              <tr className="bg-card">
                <td className="p-3 border border-border">{t.compareRow3}</td>
                <td className="p-3 text-center border border-border">✓</td>
                <td className="p-3 text-center border border-border">✓</td>
              </tr>
              <tr className="bg-secondary/30">
                <td className="p-3 border border-border">{t.compareRow4}</td>
                <td className="p-3 text-center border border-border">✓</td>
                <td className="p-3 text-center border border-border">-</td>
              </tr>
              <tr className="bg-card">
                <td className="p-3 border border-border">{t.compareRow5}</td>
                <td className="p-3 text-center border border-border">-</td>
                <td className="p-3 text-center border border-border">✓</td>
              </tr>
              <tr className="bg-secondary/30">
                <td className="p-3 border border-border">{t.compareRow6}</td>
                <td className="p-3 text-center border border-border">✓</td>
                <td className="p-3 text-center border border-border">-</td>
              </tr>
              <tr className="bg-card">
                <td className="p-3 border border-border font-medium">{t.compareRow7}</td>
                <td className="p-3 text-center border border-border">{t.compareMultibrand}</td>
                <td className="p-3 text-center border border-border">{t.compareSway}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <HighlightBlock type="recommendation" title={t.telemetryCompareTipTitle}>
          <p dangerouslySetInnerHTML={{ __html: highlightText(t.telemetryCompareTip) }} />
        </HighlightBlock>
      </Section>
    </div>
  );
}
