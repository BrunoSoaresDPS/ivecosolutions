import { useState, useMemo } from "react";
import { Section } from "@/components/content/Section";
import { ContentCard } from "@/components/content/ContentCard";
import { HighlightBlock } from "@/components/content/HighlightBlock";
import { StepCard } from "@/components/content/StepCard";
import { FeatureList } from "@/components/content/FeatureList";
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
        <Section id="intro" title="Seu Jeito de Rodar, Seu S-Way Mais Inteligente">
          <div className="iveco-card p-8 mb-6 iveco-gradient text-primary-foreground">
            <h3 className="text-2xl font-bold mb-4">IVECO SEU – Software de Eficiência Único</h3>
            <p className="text-lg mb-6 text-primary-foreground/90">
              O Software de Eficiência Único (SEU) é um recurso exclusivo da IVECO que ajusta a 
              performance do S-Way com base na sua operação real.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-primary-foreground/10 rounded-lg p-4">
                <Gauge className="h-8 w-8 mb-2" />
                <h4 className="font-semibold mb-1">Personalização Real</h4>
                <p className="text-sm text-primary-foreground/80">
                  Curva de motor ajustada conforme características da sua operação
                </p>
              </div>
              <div className="bg-primary-foreground/10 rounded-lg p-4">
                <Wifi className="h-8 w-8 mb-2" />
                <h4 className="font-semibold mb-1">Atualização Remota (OTA)</h4>
                <p className="text-sm text-primary-foreground/80">
                  Agilidade para configurar, sem parada, sem burocracia
                </p>
              </div>
              <div className="bg-primary-foreground/10 rounded-lg p-4">
                <TrendingUp className="h-8 w-8 mb-2" />
                <h4 className="font-semibold mb-1">Economia Comprovada</h4>
                <p className="text-sm text-primary-foreground/80">
                  Melhor rendimento operacional com menor consumo de combustível por km
                </p>
              </div>
            </div>
          </div>

          <HighlightBlock type="attention">
            Tecnologia 100% desenvolvida pela IVECO. A telemetria IVECO ON analisa o uso do caminhão 
            e sugere a melhor calibração do motor para sua realidade, gerando mais rentabilidade para a frota.
          </HighlightBlock>
        </Section>
      )}

      {/* Performance Section */}
      {isVisible("performance") && (
        <Section id="performance" title="IVECO SEU Performance – IVECO Sob Medida">
          <ContentCard icon={<Gauge className="h-6 w-6" />}>
            <p className="mb-4">
              A eficiência que já nasce com o IVECO S-Way ganha ainda mais potencial ao transformar 
              os dados da sua operação em inteligência, personalizando a curva de motor de cada 
              caminhão por meio do diagnóstico realizado a partir do IVECO ON.
            </p>
            <HighlightBlock type="recommendation" title="O Resultado">
              <strong>Mais economia, mais performance, mais eficiência.</strong> O que já é bom, fica ainda melhor.
            </HighlightBlock>
          </ContentCard>
        </Section>
      )}

      {/* Tecnologia Exclusiva */}
      {isVisible("tecnologia") && (
        <Section id="tecnologia" title="Tecnologia Exclusiva da IVECO">
          <ContentCard icon={<Zap className="h-6 w-6" />}>
            <p className="text-lg font-medium mb-4">
              Nenhuma outra montadora oferece esse nível de personalização com atualização remota 
              e análise baseada em dados reais de operação.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-6">
              <div className="bg-secondary rounded-lg p-4">
                <h4 className="font-semibold text-primary mb-2">+ Inovação</h4>
                <p className="text-sm text-foreground/70">
                  Tecnologia de ponta aplicada à gestão de frota
                </p>
              </div>
              <div className="bg-secondary rounded-lg p-4">
                <h4 className="font-semibold text-primary mb-2">+ Personalização</h4>
                <p className="text-sm text-foreground/70">
                  S-Way como uma solução ainda mais estratégica para a sua frota
                </p>
              </div>
            </div>
          </ContentCard>
        </Section>
      )}

      {/* Público-Alvo */}
      {isVisible("publico") && (
        <Section id="publico" title="Quem é o SEU?">
          <p className="text-foreground/70 mb-6">
            O SEU é especialmente indicado para operações rodoviárias, especificidades de carga 
            e foco em custo operacional.
          </p>

          <Accordion type="multiple" value={expandedSections} onValueChange={setExpandedSections}>
            <AccordionItem value="publico-accordion">
              <AccordionTrigger className="text-left">
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-primary" />
                  <span>Perfis Indicados</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid gap-4 pt-4">
                  <ContentCard title="Frotistas e Transportadoras" icon={<Truck className="h-5 w-5" />}>
                    <p>Empresas que querem eficiência e previsibilidade nas operações.</p>
                  </ContentCard>
                  <ContentCard title="Operadores Logísticos" icon={<Settings className="h-5 w-5" />}>
                    <p>Foco em rentabilidade e otimização de custos operacionais.</p>
                  </ContentCard>
                  <ContentCard title="Autônomos que Pensam como Empresários" icon={<Users className="h-5 w-5" />}>
                    <p>Ideal para quem busca mais resultado sem complicação.</p>
                  </ContentCard>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </Section>
      )}

      {/* Como Funciona */}
      {isVisible("funcionamento") && (
        <Section id="funcionamento" title="Como Funciona?">
          <p className="text-foreground/70 mb-6">
            Conte com a consultoria do nosso time de especialistas para acompanhamento da 
            performance do seu caminhão.
          </p>

          <div className="space-y-4">
            <StepCard
              number={1}
              title="Coleta de Dados"
              description="Coleta de dados via IVECO ON por 30 dias de operação"
            />
            <StepCard
              number={2}
              title="Análise Especializada"
              description="Análise da IVECO sobre uso, carga, rota e topografia"
            />
            <StepCard
              number={3}
              title="Parametrização Personalizada"
              description="Parametrização personalizada do veículo conforme sua operação"
            />
            <StepCard
              number={4}
              title="Atualização Remota"
              description="Atualização remota via OTA, sem necessidade de parada"
            />
            <StepCard
              number={5}
              title="Resultado Direto"
              description="Mais economia e performance ajustada à operação"
            />
          </div>

          <div className="mt-8 grid md:grid-cols-2 gap-4">
            <ContentCard title="Relatórios Técnicos">
              <p>Entrega de relatórios técnicos com comparativos antes e depois do IVECO SEU.</p>
            </ContentCard>
            <ContentCard title="Orientações Práticas">
              <p>Orientações práticas de condução para evolução dos indicadores.</p>
            </ContentCard>
          </div>
        </Section>
      )}

      {/* Tecnologia OTA */}
      {isVisible("ota") && (
        <Section id="ota" title="Tecnologia OTA – Eficiência Sem Interrupção">
          <ContentCard icon={<Wifi className="h-6 w-6" />}>
            <HighlightBlock type="attention">
              O cliente não precisa parar o caminhão para se beneficiar do SEU.
            </HighlightBlock>
            <p className="mt-4">
              A atualização é feita remotamente por OTA (Over The Air), com segurança e agilidade. 
              Enquanto a operação roda, a tecnologia trabalha para otimizar.
            </p>
            <HighlightBlock type="recommendation">
              É o máximo de eficiência com o mínimo de intervenção.
            </HighlightBlock>
          </ContentCard>
        </Section>
      )}

      {/* Retorno do Investimento */}
      {isVisible("retorno") && (
        <Section id="retorno" title="Por que Apostar no IVECO SEU?">
          <div className="iveco-card p-6 bg-secondary mb-6">
            <div className="flex items-center gap-4 mb-4">
              <PiggyBank className="h-10 w-10 text-primary" />
              <div>
                <h3 className="text-xl font-bold text-primary">Retorno do Investimento</h3>
                <p className="text-lg text-primary">Em aproximadamente 3 meses</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <ContentCard title="Economia Real" icon={<TrendingUp className="h-5 w-5" />}>
              <FeatureList items={[
                "Economia real de combustível",
                "Aumento da vida útil do caminhão",
                "Menor desgaste e mais previsibilidade",
              ]} />
            </ContentCard>
            <ContentCard title="Vantagens Exclusivas" icon={<Leaf className="h-5 w-5" />}>
              <FeatureList items={[
                "Solução integrada à conectividade IVECO ON",
                "Sustentabilidade comprovada: menos consumo, menor impacto ambiental",
                "Caminhão personalizado, sem perder garantia e sem parar",
              ]} />
            </ContentCard>
          </div>
        </Section>
      )}

      {/* Oferta Especial */}
      {isVisible("oferta") && (
        <Section id="oferta" title="Oferta Especial">
          <ContentCard icon={<BadgePercent className="h-6 w-6" />}>
            <HighlightBlock type="rule" title="Condição Comercial">
              <p className="font-medium">20% da economia entregue, multiplicado pelo fator 18.</p>
            </HighlightBlock>
            <div className="mt-6 p-4 bg-secondary rounded-lg">
              <h4 className="font-semibold text-primary mb-2">Simulador Payback</h4>
              <p className="text-sm text-foreground/70">
                Utilize o simulador IVECO para calcular o retorno do investimento 
                baseado na sua operação específica.
              </p>
            </div>
          </ContentCard>

          <div className="mt-8 iveco-card p-8 iveco-gradient text-primary-foreground text-center">
            <h3 className="text-2xl font-bold mb-4">
              A gente entende o seu caminho e segue com você.
            </h3>
            <p className="text-lg text-primary-foreground/90">
              Descubra como o IVECO SEU pode elevar a performance do S-Way e gerar resultados reais.
            </p>
          </div>
        </Section>
      )}

      {searchQuery && !filteredContent && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">
            Nenhum resultado encontrado para "{searchQuery}"
          </p>
        </div>
      )}
    </div>
  );
}
