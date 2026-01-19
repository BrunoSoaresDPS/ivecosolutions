import { Header } from "@/components/layout/Header";
import { TabNavigation } from "@/components/layout/TabNavigation";
import { Footer } from "@/components/layout/Footer";
import { Users, Target, TrendingUp, User } from "lucide-react";

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
import tbdRiskArgentina from "@/assets/team/tbd-risk-argentina.jpg";
import rafaelAlmeida from "@/assets/team/rafael-almeida.jpg";
import caioSilvano from "@/assets/team/caio-silvano.jpg";
import webertonMenezes from "@/assets/team/weberton-menezes.jpg";
import pabloOliveira from "@/assets/team/pablo-oliveira.jpg";
import tbdTelematics from "@/assets/team/tbd-telematics.jpg";
import marcosLopes from "@/assets/team/marcos-lopes.jpg";

interface TeamMember {
  name: string;
  role: string;
  photo: string;
  isTbd?: boolean;
}

const TeamCard = ({ name, role, photo, isTbd }: TeamMember) => (
  <div className="flex flex-col items-center">
    {isTbd ? (
      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-muted flex items-center justify-center border-2 border-border mb-1">
        <User className="w-6 h-6 text-muted-foreground" />
      </div>
    ) : (
      <img 
        src={photo} 
        alt={name} 
        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover border-2 border-primary/30 mb-1"
      />
    )}
    <div className="bg-card border border-border rounded px-2 py-1 text-center min-w-[80px] sm:min-w-[100px] shadow-sm">
      <p className="font-semibold text-[10px] sm:text-xs text-foreground leading-tight uppercase">{name}</p>
      <p className="text-[8px] sm:text-[10px] text-muted-foreground">{role}</p>
    </div>
  </div>
);

const ManagerCard = ({ name, role, photo }: TeamMember) => (
  <div className="flex flex-col items-center">
    <img 
      src={photo} 
      alt={name} 
      className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover border-2 border-primary mb-1"
    />
    <div className="bg-[#c5d4e8] border border-primary/30 rounded px-3 py-1.5 text-center min-w-[100px] sm:min-w-[120px] shadow-sm">
      <p className="font-bold text-[10px] sm:text-xs text-foreground uppercase">{name}</p>
      <p className="text-[8px] sm:text-[10px] text-muted-foreground">{role}</p>
    </div>
  </div>
);

const SobreNos = () => {
  // Head
  const head = { name: "DANIEL MOREIRA", role: "Head Service Solutions LATAM", photo: danielMoreira };

  // 4 Direct Reports
  const managers = [
    { name: "LEONARDO CAMPOS", role: "Commercial Brazil", photo: leonardoAlbarracin },
    { name: "J. ALBARRACIN", role: "Commercial Argentina", photo: aNicolas },
    { name: "LEIA MENDONÇA", role: "Process & TCO LATAM", photo: leiaMendonca },
    { name: "THIAGO RADIEDDINE", role: "Business Performance & Risk LATAM", photo: thiagoRadieddine },
  ];

  // Team under Leonardo Campos - 2 columns
  const leonardoTeamCol1: TeamMember[] = [
    { name: "LORRANY AMORIM", role: "Sales", photo: lorranyAmorim },
    { name: "TBD", role: "Sales Assist", photo: "", isTbd: true },
    { name: "JOÃO SILVANO", role: "C. Renewal", photo: caioSilvano },
    { name: "MARCOS LOPES", role: "IVECO SEU", photo: marcosLopes },
  ];
  const leonardoTeamCol2: TeamMember[] = [
    { name: "NATHAN OLIVEIRA", role: "Sales", photo: nathanOliveira },
    { name: "BRUNO SOARES", role: "Data Analysis", photo: brunoGomez },
    { name: "CAIO MENEZES", role: "IVECO SEU", photo: caioSilvano },
  ];

  // Team under J. Albarracin
  const albarracinTeam: TeamMember[] = [
    { name: "A. NICOLAS", role: "Sales", photo: aNicolas },
    { name: "V. GELARDINI", role: "Sales", photo: vGelardini },
    { name: "L GOMEZ", role: "C. Management & KPIs", photo: lucasSoares },
  ];

  // Team under Leia Mendonça - 2 columns
  const leiaTeamCol1: TeamMember[] = [
    { name: "MARINA FERNANDES", role: "Process Adm.", photo: marinaAlexandre },
    { name: "LUCAS MOREIRA", role: "TCO Brazil", photo: lucasSoares },
    { name: "WEBERTON OLIVEIRA", role: "Rental Ops", photo: webertonMenezes },
    { name: "SAMUEL RODRIGUES", role: "Claims Analysis", photo: webertonMenezes },
  ];
  const leiaTeamCol2: TeamMember[] = [
    { name: "ALINE ALEXANDRE", role: "Process Adm.", photo: alineQuadros },
    { name: "JULIANO REIS", role: "TCO Argentina", photo: julianoReis },
    { name: "PABLO PEREIRA", role: "Claims Analysis BR e ARG", photo: pabloOliveira },
  ];

  // Team under Thiago Radieddine - 2 columns
  const thiagoTeamCol1: TeamMember[] = [
    { name: "VLADMIR QUADROS", role: "Business Dev.", photo: vladmirAlmeida },
    { name: "Briza Diez", role: "Risk Argentina", photo: tbdRiskArgentina },
    { name: "TBD", role: "Telematics", photo: "", isTbd: true },
  ];
  const thiagoTeamCol2: TeamMember[] = [
    { name: "TAYLOR ALMEIDA", role: "Projects", photo: taylor },
    { name: "RAFAEL ALMEIDA", role: "Risk Brazil", photo: rafaelAlmeida },
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
        <section className="relative bg-gradient-to-br from-primary to-primary/80 text-white py-8 sm:py-12">
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-2xl sm:text-3xl font-bold mb-2">Team Structure</h1>
            <p className="text-base sm:text-lg text-white/90">Service Solutions LATAM</p>
          </div>
        </section>

        {/* Organizational Chart */}
        <section className="py-8 sm:py-12 bg-white overflow-x-auto">
          <div className="min-w-[1100px] max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Head - Daniel Moreira */}
            <div className="flex justify-center mb-4">
              <div className="flex flex-col items-center">
                <img 
                  src={head.photo} 
                  alt={head.name} 
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-3 border-primary mb-2"
                />
                <div className="bg-primary text-primary-foreground rounded-lg px-4 py-2 text-center shadow-lg">
                  <p className="font-bold text-xs sm:text-sm uppercase">{head.name}</p>
                  <p className="text-[10px] sm:text-xs opacity-90">{head.role}</p>
                </div>
              </div>
            </div>

            {/* Horizontal connector */}
            <div className="flex justify-center">
              <div className="w-0.5 h-6 bg-primary/50" />
            </div>
            <div className="flex justify-center">
              <div className="w-[85%] h-0.5 bg-primary/50" />
            </div>

            {/* 4 Managers with their teams */}
            <div className="grid grid-cols-4 gap-4 mt-2">
              
              {/* Column 1: Leonardo Campos */}
              <div className="flex flex-col items-center">
                <div className="w-0.5 h-4 bg-primary/50" />
                <ManagerCard {...managers[0]} />
                <div className="w-0.5 h-4 bg-primary/30 mt-2" />
                <div className="flex gap-3 mt-2">
                  {/* Sub-column 1 */}
                  <div className="flex flex-col items-center gap-3">
                    {leonardoTeamCol1.map((member, i) => (
                      <TeamCard key={i} {...member} />
                    ))}
                  </div>
                  {/* Sub-column 2 */}
                  <div className="flex flex-col items-center gap-3">
                    {leonardoTeamCol2.map((member, i) => (
                      <TeamCard key={i} {...member} />
                    ))}
                  </div>
                </div>
              </div>

              {/* Column 2: J. Albarracin */}
              <div className="flex flex-col items-center">
                <div className="w-0.5 h-4 bg-primary/50" />
                <ManagerCard {...managers[1]} />
                <div className="w-0.5 h-4 bg-primary/30 mt-2" />
                <div className="flex flex-col items-center gap-3 mt-2">
                  {albarracinTeam.map((member, i) => (
                    <TeamCard key={i} {...member} />
                  ))}
                </div>
              </div>

              {/* Column 3: Leia Mendonça */}
              <div className="flex flex-col items-center">
                <div className="w-0.5 h-4 bg-primary/50" />
                <ManagerCard {...managers[2]} />
                <div className="w-0.5 h-4 bg-primary/30 mt-2" />
                <div className="flex gap-3 mt-2">
                  {/* Sub-column 1 */}
                  <div className="flex flex-col items-center gap-3">
                    {leiaTeamCol1.map((member, i) => (
                      <TeamCard key={i} {...member} />
                    ))}
                  </div>
                  {/* Sub-column 2 */}
                  <div className="flex flex-col items-center gap-3">
                    {leiaTeamCol2.map((member, i) => (
                      <TeamCard key={i} {...member} />
                    ))}
                  </div>
                </div>
              </div>

              {/* Column 4: Thiago Radieddine */}
              <div className="flex flex-col items-center">
                <div className="w-0.5 h-4 bg-primary/50" />
                <ManagerCard {...managers[3]} />
                <div className="w-0.5 h-4 bg-primary/30 mt-2" />
                <div className="flex gap-3 mt-2">
                  {/* Sub-column 1 */}
                  <div className="flex flex-col items-center gap-3">
                    {thiagoTeamCol1.map((member, i) => (
                      <TeamCard key={i} {...member} />
                    ))}
                  </div>
                  {/* Sub-column 2 */}
                  <div className="flex flex-col items-center gap-3">
                    {thiagoTeamCol2.map((member, i) => (
                      <TeamCard key={i} {...member} />
                    ))}
                  </div>
                </div>
              </div>

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
