import { Header } from "@/components/layout/Header";
import { TabNavigation } from "@/components/layout/TabNavigation";
import { Footer } from "@/components/layout/Footer";
import { Users, Target, TrendingUp, User } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
}

interface TeamLead {
  name: string;
  role: string;
  area: string;
  members: TeamMember[];
}

const SobreNos = () => {
  const headLeader = {
    name: "Daniel Moreira",
    role: "Head Service Solutions LATAM",
  };

  const directReports: TeamLead[] = [
    {
      name: "Leonardo J. Albarracin",
      role: "Gerente",
      area: "Commercial Brazil",
      members: [
        { name: "Lorrany Amorim", role: "Sales" },
        { name: "Nathan Oliveira", role: "Sales" },
        { name: "TBD", role: "Sales Assist" },
        { name: "Bruno L Gomez", role: "Data Analysis" },
        { name: "Lucas Soares", role: "Management & KPIs" },
        { name: "Caio João Silvano", role: "C. Renewal" },
        { name: "Weberton Menezes", role: "IVECO SEU" },
        { name: "Marcos Lopes", role: "IVECO SEU" },
        { name: "Samuel Rodrigues", role: "IVECO SEU" },
        { name: "Pablo Oliveira", role: "Rental Ops" },
        { name: "TBD", role: "Claims Analysis BR" },
      ],
    },
    {
      name: "Leia Mendonça",
      role: "Gerente",
      area: "Argentina",
      members: [
        { name: "A. Nicolas", role: "Sales" },
        { name: "V. Gelardini", role: "Sales" },
        { name: "TBD", role: "TCO Argentina" },
        { name: "TBD", role: "Risk Argentina" },
        { name: "TBD", role: "Claims Analysis" },
      ],
    },
    {
      name: "Thiago Radieddine",
      role: "Gerente",
      area: "Process & TCO LATAM",
      members: [
        { name: "Marina Alexandre", role: "Process Adm." },
        { name: "Aline Quadros", role: "Process Adm." },
        { name: "Vladmir Almeida", role: "Business Dev." },
        { name: "Taylor", role: "Projects" },
        { name: "Juliano Reis", role: "TCO Brazil" },
        { name: "Rafael Almeida", role: "Risk Brazil" },
        { name: "TBD", role: "Telematics" },
      ],
    },
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
        <section className="relative bg-gradient-to-br from-primary to-primary/80 text-white py-12 sm:py-20">
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center justify-center p-3 bg-white/10 rounded-full mb-6">
              <Users className="h-8 w-8 sm:h-10 sm:w-10" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Sobre Nós
            </h1>
            <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto">
              Conheça a equipe Service Solutions LATAM, dedicada a entregar as melhores soluções e serviços para maximizar a eficiência da sua frota IVECO.
            </p>
          </div>
        </section>

        {/* Organizational Chart */}
        <section className="py-12 sm:py-16 bg-muted/30">
          <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-10 text-center">
              Estrutura Organizacional
            </h2>
            
            {/* Head Leader */}
            <div className="flex flex-col items-center mb-8">
              <div className="bg-primary text-primary-foreground rounded-xl p-6 shadow-xl min-w-[280px] text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <User className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold">{headLeader.name}</h3>
                <p className="text-primary-foreground/80 text-sm mt-1">{headLeader.role}</p>
              </div>
              
              {/* Connector line */}
              <div className="w-0.5 h-8 bg-border" />
              <div className="w-full max-w-4xl h-0.5 bg-border" />
            </div>

            {/* Direct Reports Row */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-4">
              {directReports.map((lead, leadIndex) => (
                <div key={leadIndex} className="flex flex-col items-center">
                  {/* Connector from top */}
                  <div className="hidden lg:block w-0.5 h-8 bg-border" />
                  
                  {/* Lead Card */}
                  <div className="bg-card border-2 border-primary rounded-xl p-5 shadow-lg min-w-[260px] text-center mb-4">
                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <User className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground">{lead.name}</h3>
                    <p className="text-primary font-medium text-sm">{lead.role}</p>
                    <p className="text-muted-foreground text-xs mt-1 bg-muted px-3 py-1 rounded-full inline-block">
                      {lead.area}
                    </p>
                  </div>

                  {/* Connector to team */}
                  <div className="w-0.5 h-4 bg-border" />

                  {/* Team Members */}
                  <div className="w-full space-y-2">
                    {lead.members.map((member, memberIndex) => (
                      <div 
                        key={memberIndex} 
                        className="bg-card border border-border rounded-lg p-3 shadow-sm hover:shadow-md hover:border-primary/30 transition-all flex items-center gap-3"
                      >
                        <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center flex-shrink-0">
                          <User className="h-5 w-5 text-muted-foreground" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className={`font-medium text-sm truncate ${member.name === "TBD" ? "text-muted-foreground italic" : "text-foreground"}`}>
                            {member.name}
                          </p>
                          <p className="text-xs text-muted-foreground truncate">{member.role}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-12 sm:py-16 bg-card">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Nossa Missão</h3>
                <p className="text-muted-foreground">
                  Oferecer soluções integradas que maximizam a eficiência operacional e reduzem o custo total de propriedade dos veículos IVECO.
                </p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Nossa Visão</h3>
                <p className="text-muted-foreground">
                  Ser referência em soluções de serviços para frotas na América Latina, garantindo excelência e inovação contínua.
                </p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Nossos Valores</h3>
                <p className="text-muted-foreground">
                  Compromisso com o cliente, trabalho em equipe, integridade e busca constante pela excelência em tudo que fazemos.
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
