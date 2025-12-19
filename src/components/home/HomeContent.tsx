import { ArrowRight, Cpu, Shield, Truck, Gauge, Settings, FileCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HomeContentProps {
  onNavigate: (tab: "material1" | "material2") => void;
}

export function HomeContent({ onNavigate }: HomeContentProps) {
  return (
    <div className="min-h-[calc(100vh-12rem)] flex flex-col">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Soluções e Serviços IVECO
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Conheça nossas soluções exclusivas para maximizar a eficiência e proteger seu investimento
          </p>
        </div>
      </div>

      {/* Solutions Grid */}
      <div className="flex-1 bg-background py-12 px-4 md:px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          
          {/* IVECO SEU Card */}
          <div className="bg-card border border-border rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="bg-primary/10 p-6 border-b border-border">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-3 bg-primary rounded-lg">
                  <Cpu className="h-6 w-6 text-primary-foreground" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">IVECO SEU</h2>
              </div>
              <p className="text-muted-foreground">Software de Eficiência Único</p>
            </div>
            
            <div className="p-6">
              <p className="text-foreground mb-6">
                Tecnologia exclusiva IVECO que otimiza a performance do seu caminhão através de reprogramação inteligente da ECU, proporcionando economia de combustível e aumento de potência.
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3">
                  <Gauge className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">
                    <strong className="text-foreground">+30cv de potência</strong> - Ganho real de performance
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Truck className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">
                    <strong className="text-foreground">Até 3% de economia</strong> - Redução no consumo de combustível
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Settings className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">
                    <strong className="text-foreground">Atualização OTA</strong> - Via telemetria sem parar o veículo
                  </span>
                </div>
              </div>

              <Button 
                onClick={() => onNavigate("material1")}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Ver detalhes completos
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Cobertura de Planos Card */}
          <div className="bg-card border border-border rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="bg-accent/30 p-6 border-b border-border">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-3 bg-accent rounded-lg">
                  <Shield className="h-6 w-6 text-accent-foreground" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">Cobertura de Planos</h2>
              </div>
              <p className="text-muted-foreground">Planos de Serviços IVECO</p>
            </div>
            
            <div className="p-6">
              <p className="text-foreground mb-6">
                Proteja seu investimento com nossos planos de manutenção e cobertura. Opções flexíveis que garantem tranquilidade e previsibilidade de custos para sua operação.
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3">
                  <FileCheck className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">
                    <strong className="text-foreground">5 opções de planos</strong> - Do Básico ao Completo
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">
                    <strong className="text-foreground">Cobertura abrangente</strong> - Motor, câmbio, eixos e mais
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Truck className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">
                    <strong className="text-foreground">Telemetria incluída</strong> - IVECO ON e NEXPRO CONNECT
                  </span>
                </div>
              </div>

              <Button 
                onClick={() => onNavigate("material2")}
                variant="outline"
                className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground"
              >
                Ver detalhes completos
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Quick Info */}
        <div className="max-w-6xl mx-auto mt-12 text-center">
          <p className="text-muted-foreground text-sm">
            Selecione uma das soluções acima para ver o conteúdo completo e detalhado
          </p>
        </div>
      </div>
    </div>
  );
}
