import { useState, useMemo } from "react";
import { Section } from "@/components/content/Section";
import { ContentCard } from "@/components/content/ContentCard";
import { HighlightBlock } from "@/components/content/HighlightBlock";
import { FeatureList } from "@/components/content/FeatureList";
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
        <Section id="intro2" title="Cobertura de Serviços – Instrutivo">
          <div className="iveco-card p-8 mb-6 iveco-gradient text-primary-foreground">
            <h3 className="text-2xl font-bold mb-4">O jeito mais simples de cuidar do seu Iveco</h3>
            <p className="text-lg text-primary-foreground/90 mb-6">
              Ao cuidar do seu caminhão na rede autorizada, você garante mão de obra especializada, 
              produtos genuínos, baixo custo e rapidez na manutenção do seu Iveco.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
              <div className="bg-primary-foreground/10 rounded-lg p-3 text-center">
                <span className="font-semibold">Plano Básico</span>
              </div>
              <div className="bg-primary-foreground/10 rounded-lg p-3 text-center">
                <span className="font-semibold">Plano Essencial</span>
              </div>
              <div className="bg-primary-foreground/10 rounded-lg p-3 text-center">
                <span className="font-semibold">Essencial Powertrain</span>
              </div>
              <div className="bg-primary-foreground/10 rounded-lg p-3 text-center">
                <span className="font-semibold">Essencial Economy</span>
              </div>
              <div className="bg-primary-foreground/10 rounded-lg p-3 text-center">
                <span className="font-semibold">Plano Completo</span>
              </div>
              <div className="bg-primary-foreground/10 rounded-lg p-3 text-center">
                <span className="font-semibold">Telemetria</span>
              </div>
            </div>
          </div>
        </Section>
      )}

      {/* Plano Básico */}
      {isVisible("basico") && (
        <Section id="basico" title="Plano Básico">
          <ContentCard icon={<Droplet className="h-6 w-6" />}>
            <p className="mb-4">
              O filtro e o óleo do motor são itens de manutenção obrigatórios e fundamentais 
              para o bom funcionamento do seu veículo. Além de lubrificar as peças móveis, 
              evitando seu desgaste, o óleo tem função imprescindível no arrefecimento de 
              componentes que são expostos a elevadas temperaturas.
            </p>
            <HighlightBlock type="rule" title="O Plano Básico Contempla">
              <FeatureList items={[
                "Óleo do motor",
                "Filtro de óleo do motor",
              ]} />
            </HighlightBlock>
          </ContentCard>
        </Section>
      )}

      {/* Plano Essencial */}
      {isVisible("essencial") && (
        <Section id="essencial" title="Plano Essencial">
          <ContentCard icon={<Filter className="h-6 w-6" />} title="Para você, todas as revisões em dia">
            <p className="mb-4">
              Com parcelas de valores fixos, o plano Essencial garante a correta manutenção 
              do seu veículo, para que a performance do seu veículo seja muito maior.
            </p>
            
            <HighlightBlock type="rule" title="Cobertura do Plano Essencial">
              <FeatureList items={[
                "Filtro e pré-filtro de combustível",
                "Filtro de ar e anti-pólen",
                "Filtro de óleo do motor",
                "Filtro de ureia",
                "Filtro de óleo da direção hidráulica (sob avaliação da necessidade de troca)",
                "Filtro APU",
                "Correias e tensores",
                "Regulagem de válvulas",
                "Juntas do Respiro",
                "Lubrificantes (óleo do motor, do diferencial, da direção hidráulica, dos cubos de roda e da transmissão, além de líquido de arrefecimento)",
              ]} />
            </HighlightBlock>
          </ContentCard>
        </Section>
      )}

      {/* Plano Essencial Economy */}
      {isVisible("economy") && (
        <Section id="economy" title="Plano Essencial Economy">
          <ContentCard icon={<DollarSign className="h-6 w-6" />} title="A solução para o seu veículo seminovo">
            <p className="mb-4">
              Focado em veículos que já não possuem mais garantia, o Plano Essencial Economy 
              possui a mesma cobertura do Plano Essencial, porém com peças PRO, garantindo 
              um plano mais em conta para o cliente com peças certificadas que garantem 
              confiança na condução do seu veículo.
            </p>

            <HighlightBlock type="attention">
              Este plano utiliza peças da linha PRO – certificadas e com garantia de qualidade, 
              porém com custo mais acessível.
            </HighlightBlock>
            
            <Accordion type="single" collapsible className="mt-4">
              <AccordionItem value="economy-cobertura">
                <AccordionTrigger>Ver lista completa de cobertura</AccordionTrigger>
                <AccordionContent>
                  <FeatureList items={[
                    "Filtro e pré-filtro de combustível",
                    "Filtro de ar e anti-pólen",
                    "Filtro de óleo do motor",
                    "Filtro de ureia",
                    "Filtro de óleo da direção hidráulica (sob avaliação da necessidade de troca)",
                    "Filtro APU",
                    "Correias e tensores",
                    "Regulagem de válvulas",
                    "Juntas do Respiro",
                    "Lubrificantes (óleo do motor, do diferencial, da direção hidráulica, dos cubos de roda e da transmissão, além de líquido de arrefecimento)",
                  ]} />
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </ContentCard>
        </Section>
      )}

      {/* Plano Essencial Powertrain */}
      {isVisible("powertrain") && (
        <Section id="powertrain" title="Plano Essencial Powertrain">
          <ContentCard icon={<Cog className="h-6 w-6" />} title="A cobertura dos itens mais críticos">
            <p className="mb-4">
              Além de toda a cobertura do Plano Essencial, o Plano Essencial Powertrain 
              cobre manutenções corretivas de todo o trem de força do veículo (motor, 
              transmissão, diferencial e eixo cardan), além de sistema de telemetria 
              indicada pela Iveco para o seu veículo!
            </p>

            <HighlightBlock type="recommendation" title="Inclui Trem de Força Completo">
              <div className="grid grid-cols-2 gap-2 mt-2">
                <span className="bg-secondary px-3 py-1 rounded text-sm font-medium">Motor</span>
                <span className="bg-secondary px-3 py-1 rounded text-sm font-medium">Transmissão</span>
                <span className="bg-secondary px-3 py-1 rounded text-sm font-medium">Diferencial</span>
                <span className="bg-secondary px-3 py-1 rounded text-sm font-medium">Eixo Cardan</span>
              </div>
            </HighlightBlock>

            <HighlightBlock type="observation">
              Este plano também inclui sistema de telemetria indicada pela Iveco para o seu veículo.
            </HighlightBlock>
          </ContentCard>
        </Section>
      )}

      {/* Plano Completo */}
      {isVisible("completo") && (
        <Section id="completo" title="Plano Completo">
          <ContentCard icon={<Shield className="h-6 w-6" />} title="A maior cobertura para o seu veículo">
            <p className="mb-4">
              O Plano Completo cobre toda a manutenção preventiva do veículo (assim como o 
              Plano Essencial), além de contemplar manutenções e reparos para diversos sistemas.
            </p>

            <Accordion type="multiple" value={expandedSections} onValueChange={setExpandedSections}>
              <AccordionItem value="completo-cobertura">
                <AccordionTrigger>
                  <div className="flex items-center gap-2">
                    <Wrench className="h-4 w-4" />
                    <span>Cobertura de Sistemas</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <FeatureList items={[
                    "Conjuntos trem de força (motor, transmissão, diferencial e eixo cardan)",
                    "Sistemas de freios",
                    "Sistema de suspensão e feixes de molas",
                    "Sistema de direção",
                    "Sistemas pneumáticos",
                    "Sistemas elétricos",
                  ]} />
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <HighlightBlock type="recommendation" title="Benefícios Adicionais">
              <FeatureList items={[
                "Substituição de itens de desgaste",
                "Socorro mecânico 24h",
                "Guincho 24h",
                "Telemetria indicada para o seu veículo",
              ]} />
            </HighlightBlock>

            <HighlightBlock type="attention">
              O socorro mecânico e guincho não se aplicam em casos de constatação de mal uso 
              do caminhão, como insistência operacional ou batidas/impactos ao veículo.
            </HighlightBlock>
          </ContentCard>
        </Section>
      )}

      {/* Exclusões */}
      {isVisible("exclusoes") && (
        <Section id="exclusoes" title="Exclusões do Plano Completo">
          <ContentCard icon={<XCircle className="h-6 w-6" />} title="Itens não contemplados">
            <p className="mb-4">
              O plano não contempla itens periféricos ou da cabine como:
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-muted rounded-lg p-4">
                <h4 className="font-semibold mb-3 text-foreground">Itens de Cabine</h4>
                <ul className="space-y-2 text-sm text-foreground/70">
                  <li>• Molduras e gaveteiros</li>
                  <li>• Cortinas</li>
                  <li>• Geladeiras e trilhos</li>
                  <li>• Bancos e cama</li>
                  <li>• Viseiras e outros itens internos</li>
                </ul>
              </div>
              <div className="bg-muted rounded-lg p-4">
                <h4 className="font-semibold mb-3 text-foreground">Itens Externos e Outros</h4>
                <ul className="space-y-2 text-sm text-foreground/70">
                  <li>• Retrovisores, faróis e para-choques</li>
                  <li>• Pneus</li>
                  <li>• Alinhamento e balanceamento</li>
                  <li>• Pintura e funilaria</li>
                  <li>• Para-brisas</li>
                  <li>• Manutenções do interclima</li>
                </ul>
              </div>
            </div>
          </ContentCard>
        </Section>
      )}

      {/* Telemetria */}
      {isVisible("telemetria") && (
        <Section id="telemetria" title="Telemetria">
          <div className="grid md:grid-cols-2 gap-6">
            <ContentCard icon={<Wifi className="h-6 w-6" />} title="IVECO ON">
              <p className="mb-4">
                Solução de conectividade exclusiva para o S-WAY, permitindo que os usuários 
                acessem serviços como telemetria, atualizações de software e diagnósticos.
              </p>
              
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2 font-semibold">Período</th>
                      <th className="text-right py-2 font-semibold">Básico</th>
                      <th className="text-right py-2 font-semibold">Performance</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-2">1 ano</td>
                      <td className="text-right py-2">R$ 195,00</td>
                      <td className="text-right py-2">-</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2">2 anos</td>
                      <td className="text-right py-2">R$ 190,00</td>
                      <td className="text-right py-2">-</td>
                    </tr>
                    <tr className="border-b bg-secondary/50">
                      <td className="py-2 font-medium">3 anos</td>
                      <td className="text-right py-2 font-medium text-iveco-success">FREE</td>
                      <td className="text-right py-2">R$ 180,00</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2">4 anos</td>
                      <td className="text-right py-2">R$ 175,00</td>
                      <td className="text-right py-2">-</td>
                    </tr>
                    <tr>
                      <td className="py-2">5 anos</td>
                      <td className="text-right py-2">R$ 160,00</td>
                      <td className="text-right py-2">-</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </ContentCard>

            <ContentCard icon={<Car className="h-6 w-6" />} title="NEXPRO CONNECT">
              <p className="mb-4">
                Plataforma de conectividade para veículos multimarcas, que permite que os 
                proprietários monitorem e gerenciem todos seus veículos em uma única plataforma.
              </p>
              
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2 font-semibold">Período</th>
                      <th className="text-right py-2 font-semibold">Básico</th>
                      <th className="text-right py-2 font-semibold">Performance</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-2">1 ano</td>
                      <td className="text-right py-2">R$ 100,00</td>
                      <td className="text-right py-2">R$ 150,00</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2">2 anos</td>
                      <td className="text-right py-2">R$ 90,00</td>
                      <td className="text-right py-2">R$ 140,00</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2">3 anos</td>
                      <td className="text-right py-2">R$ 85,00</td>
                      <td className="text-right py-2">R$ 135,00</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2">4 anos</td>
                      <td className="text-right py-2">R$ 80,00</td>
                      <td className="text-right py-2">R$ 130,00</td>
                    </tr>
                    <tr>
                      <td className="py-2">5 anos</td>
                      <td className="text-right py-2">R$ 75,00</td>
                      <td className="text-right py-2">R$ 125,00</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <HighlightBlock type="observation">
                Verificar disponibilidade de módulo no Portal DSH.
              </HighlightBlock>
            </ContentCard>
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
