import { Header } from "@/components/layout/Header";
import { TabNavigation } from "@/components/layout/TabNavigation";
import { Footer } from "@/components/layout/Footer";
import { Users, Target, TrendingUp } from "lucide-react";

// Team photos imports
import danielMoreira from "@/assets/team/daniel-moreira.jpg";
import leonardoAlbarracin from "@/assets/team/leonardo-albarracin.jpg";
import leiaMendonca from "@/assets/team/leia-mendonca.jpg";
import thiagoRadieddine from "@/assets/team/thiago-radieddine.jpg";
import lorranyAmorim from "@/assets/team/lorrany-amorim.jpg";
import nathanOliveira from "@/assets/team/nathan-oliveira.jpg";
import aNicolas from "@/assets/team/a-nicolas.jpg";
import vGelardini from "@/assets/team/v-gelardini.jpg";
import marinaAlexandre from "@/assets/team/marina-alexandre.jpg";
import alineQuadros from "@/assets/team/aline-quadros.jpg";
import vladmirAlmeida from "@/assets/team/vladmir-almeida.jpg";
import taylor from "@/assets/team/taylor.jpg";
import tbdSalesAssist from "@/assets/team/tbd-sales-assist.jpg";
import brunoGomez from "@/assets/team/bruno-gomez.jpg";
import lucasSoares from "@/assets/team/lucas-soares.jpg";
import julianoReis from "@/assets/team/juliano-reis.jpg";
import tbdTcoArgentina from "@/assets/team/tbd-tco-argentina.jpg";
import tbdRiskArgentina from "@/assets/team/tbd-risk-argentina.jpg";
import rafaelAlmeida from "@/assets/team/rafael-almeida.jpg";
import caioSilvano from "@/assets/team/caio-silvano.jpg";
import webertonMenezes from "@/assets/team/weberton-menezes.jpg";
import pabloOliveira from "@/assets/team/pablo-oliveira.jpg";
import tbdClaims from "@/assets/team/tbd-claims.jpg";
import tbdTelematics from "@/assets/team/tbd-telematics.jpg";
import marcosLopes from "@/assets/team/marcos-lopes.jpg";

interface TeamMember {
  name: string;
  role: string;
  photo: string;
}

const TeamCard = ({ name, role, photo }: TeamMember) => (
  <div className="flex flex-col items-center">
    <img 
      src={photo} 
      alt={name} 
      className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-2 border-primary/20 mb-2"
    />
    <div className="bg-card border border-border rounded-lg p-2 sm:p-3 text-center min-w-[100px] sm:min-w-[120px] shadow-sm">
      <p className="font-semibold text-xs sm:text-sm text-foreground leading-tight">{name}</p>
      <p className="text-[10px] sm:text-xs text-muted-foreground mt-0.5">{role}</p>
    </div>
  </div>
);

const SobreNos = () => {
  // Row 1: Head
  const head: TeamMember = { name: "DANIEL MOREIRA", role: "Head Service Solutions LATAM", photo: danielMoreira };

  // Row 2: Direct Reports (3 columns)
  const directReports: TeamMember[] = [
    { name: "LEONARDO J. ALBARRACIN", role: "Commercial Brazil", photo: leonardoAlbarracin },
    { name: "LEIA MENDONÇA", role: "Argentina", photo: leiaMendonca },
    { name: "THIAGO RADIEDDINE", role: "Process & TCO LATAM", photo: thiagoRadieddine },
  ];

  // Row 3: Following the PDF structure exactly (8 columns)
  const row3: TeamMember[] = [
    { name: "LORRANY AMORIM", role: "Sales", photo: lorranyAmorim },
    { name: "NATHAN OLIVEIRA", role: "Sales", photo: nathanOliveira },
    { name: "A. NICOLAS", role: "Sales", photo: aNicolas },
    { name: "V. GELARDINI", role: "Sales", photo: vGelardini },
    { name: "MARINA ALEXANDRE", role: "Process Adm.", photo: marinaAlexandre },
    { name: "ALINE QUADROS", role: "Process Adm.", photo: alineQuadros },
    { name: "VLADMIR ALMEIDA", role: "Business Dev.", photo: vladmirAlmeida },
    { name: "TAYLOR", role: "Projects", photo: taylor },
  ];

  // Row 4: Following the PDF structure exactly (8 columns)
  const row4: TeamMember[] = [
    { name: "TBD", role: "Sales Assist", photo: tbdSalesAssist },
    { name: "BRUNO L GOMEZ", role: "Data Analysis", photo: brunoGomez },
    { name: "LUCAS SOARES", role: "Management & KPIs", photo: lucasSoares },
    { name: "JULIANO REIS", role: "TCO Brazil", photo: julianoReis },
    { name: "TBD", role: "TCO Argentina", photo: tbdTcoArgentina },
    { name: "TBD", role: "Risk Argentina", photo: tbdRiskArgentina },
    { name: "RAFAEL ALMEIDA", role: "Risk Brazil", photo: rafaelAlmeida },
    { name: "", role: "", photo: "" }, // Empty slot
  ];

  // Row 5: Following the PDF structure exactly
  const row5: TeamMember[] = [
    { name: "CAIO JOÃO SILVANO", role: "C. Renewal", photo: caioSilvano },
    { name: "WEBERTON MENEZES", role: "IVECO SEU", photo: webertonMenezes },
    { name: "PABLO OLIVEIRA", role: "Rental Ops", photo: pabloOliveira },
    { name: "TBD", role: "Claims Analysis BR", photo: tbdClaims },
    { name: "TBD", role: "Telematics", photo: tbdTelematics },
    { name: "", role: "", photo: "" },
    { name: "", role: "", photo: "" },
    { name: "", role: "", photo: "" },
  ];

  // Row 6: Last row
  const row6: TeamMember[] = [
    { name: "MARCOS LOPES", role: "IVECO SEU", photo: marcosLopes },
    { name: "SAMUEL RODRIGUES", role: "IVECO SEU", photo: webertonMenezes }, // Using placeholder
    { name: "", role: "", photo: "" },
    { name: "TBD", role: "Claims Analysis", photo: tbdClaims },
    { name: "", role: "", photo: "" },
    { name: "", role: "", photo: "" },
    { name: "", role: "", photo: "" },
    { name: "", role: "", photo: "" },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header 
        onSearch={() => {}} 
        searchQuery="" 
        onMenuToggle={() => {}} 
        activeTab="home" 
      />
      <TabNavigation activeTab="home" onTabChange={() => {}} />
      
      <main className="flex-1 pt-14 sm:pt-16">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary to-primary/80 text-white py-10 sm:py-16">
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center justify-center p-3 bg-white/10 rounded-full mb-4">
              <Users className="h-6 w-6 sm:h-8 sm:w-8" />
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
              Team Structure
            </h1>
            <p className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto">
              Service Solutions LATAM
            </p>
          </div>
        </section>

        {/* Organizational Chart - Matching PDF Structure */}
        <section className="py-8 sm:py-12 bg-muted/30 overflow-x-auto">
          <div className="min-w-[900px] max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Head - Daniel Moreira */}
            <div className="flex justify-center mb-6">
              <div className="flex flex-col items-center">
                <img 
                  src={head.photo} 
                  alt={head.name} 
                  className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover border-4 border-primary mb-3"
                />
                <div className="bg-primary text-primary-foreground rounded-lg px-6 py-3 text-center shadow-lg">
                  <p className="font-bold text-sm sm:text-base">{head.name}</p>
                  <p className="text-xs sm:text-sm opacity-90">{head.role}</p>
                </div>
              </div>
            </div>

            {/* Connector line */}
            <div className="flex justify-center mb-2">
              <div className="w-0.5 h-8 bg-border" />
            </div>
            <div className="flex justify-center mb-2">
              <div className="w-[60%] h-0.5 bg-border" />
            </div>

            {/* Row 2: Direct Reports */}
            <div className="flex justify-center gap-8 sm:gap-16 lg:gap-24 mb-6">
              {directReports.map((member, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="w-0.5 h-6 bg-border mb-2" />
                  <img 
                    src={member.photo} 
                    alt={member.name} 
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border-3 border-primary/60 mb-2"
                  />
                  <div className="bg-card border-2 border-primary rounded-lg px-4 py-2 text-center shadow-md">
                    <p className="font-bold text-xs sm:text-sm text-foreground">{member.name}</p>
                    <p className="text-[10px] sm:text-xs text-primary">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Row 3 */}
            <div className="grid grid-cols-8 gap-2 sm:gap-4 mb-4">
              {row3.map((member, index) => (
                <div key={index} className="flex justify-center">
                  {member.name && <TeamCard {...member} />}
                </div>
              ))}
            </div>

            {/* Row 4 */}
            <div className="grid grid-cols-8 gap-2 sm:gap-4 mb-4">
              {row4.map((member, index) => (
                <div key={index} className="flex justify-center">
                  {member.name && <TeamCard {...member} />}
                </div>
              ))}
            </div>

            {/* Row 5 */}
            <div className="grid grid-cols-8 gap-2 sm:gap-4 mb-4">
              {row5.map((member, index) => (
                <div key={index} className="flex justify-center">
                  {member.name && <TeamCard {...member} />}
                </div>
              ))}
            </div>

            {/* Row 6 */}
            <div className="grid grid-cols-8 gap-2 sm:gap-4">
              {row6.map((member, index) => (
                <div key={index} className="flex justify-center">
                  {member.name && <TeamCard {...member} />}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-10 sm:py-14 bg-card">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Target className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">Nossa Missão</h3>
                <p className="text-sm text-muted-foreground">
                  Oferecer soluções integradas que maximizam a eficiência operacional e reduzem o custo total de propriedade dos veículos IVECO.
                </p>
              </div>
              <div className="text-center p-4">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <TrendingUp className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">Nossa Visão</h3>
                <p className="text-sm text-muted-foreground">
                  Ser referência em soluções de serviços para frotas na América Latina, garantindo excelência e inovação contínua.
                </p>
              </div>
              <div className="text-center p-4">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">Nossos Valores</h3>
                <p className="text-sm text-muted-foreground">
                  Compromisso com o cliente, trabalho em equipe, integridade e busca constante pela excelência.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SobreNos;
