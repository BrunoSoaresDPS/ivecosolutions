import { Header } from "@/components/layout/Header";
import { TabNavigation } from "@/components/layout/TabNavigation";
import { Footer } from "@/components/layout/Footer";
import { Users, Briefcase, Globe, Target, TrendingUp, Settings, BarChart3, Truck } from "lucide-react";
import teamStructureImage from "@/assets/team-structure.jpg";

const SobreNos = () => {
  const teamAreas = [
    {
      title: "Commercial Brazil",
      lead: "Leonardo J. Albarracin",
      members: [
        { name: "Lorrany Amorim", role: "Sales" },
        { name: "Nathan Oliveira", role: "Sales" },
        { name: "TBD", role: "Sales Assist" },
        { name: "Caio João Silvano", role: "C. Renewal" },
      ],
      icon: Briefcase,
    },
    {
      title: "Argentina",
      lead: "Leia Mendonça",
      members: [
        { name: "A. Nicolas", role: "Sales" },
        { name: "V. Gelardini", role: "Sales" },
      ],
      icon: Globe,
    },
    {
      title: "Process & TCO LATAM",
      lead: "Thiago Radieddine",
      members: [
        { name: "Marina Alexandre", role: "Process Adm." },
        { name: "Aline Quadros", role: "Process Adm." },
        { name: "Juliano Reis", role: "TCO Brazil" },
        { name: "TBD", role: "TCO Argentina" },
        { name: "Bruno L Gomez", role: "Data Analysis" },
        { name: "Lucas Soares", role: "Management & KPIs" },
      ],
      icon: BarChart3,
    },
    {
      title: "Business Development",
      lead: "",
      members: [
        { name: "Vladmir Almeida", role: "Business Dev." },
        { name: "Taylor", role: "Projects" },
        { name: "Rafael Almeida", role: "Risk Brazil" },
        { name: "TBD", role: "Risk Argentina" },
      ],
      icon: TrendingUp,
    },
    {
      title: "Operations",
      lead: "",
      members: [
        { name: "Weberton Menezes", role: "IVECO SEU" },
        { name: "Samuel Rodrigues", role: "IVECO SEU" },
        { name: "Marcos Lopes", role: "IVECO SEU" },
        { name: "Pablo Oliveira", role: "Rental Ops" },
        { name: "TBD", role: "Claims Analysis BR" },
        { name: "TBD", role: "Telematics" },
      ],
      icon: Settings,
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

        {/* Team Leadership */}
        <section className="py-12 sm:py-16 bg-card">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Liderança
              </h2>
              <div className="bg-primary/10 rounded-xl p-6 sm:p-8 max-w-md mx-auto">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck className="h-10 w-10 text-primary-foreground" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                  Daniel Moreira
                </h3>
                <p className="text-primary font-medium text-lg">
                  Head Service Solutions LATAM
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Structure Image */}
        <section className="py-12 sm:py-16 bg-background">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8 text-center">
              Estrutura Organizacional
            </h2>
            <div className="bg-card rounded-xl overflow-hidden shadow-lg border border-border">
              <img 
                src={teamStructureImage} 
                alt="Estrutura do Time Service Solutions LATAM" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </section>

        {/* Team Areas Grid */}
        <section className="py-12 sm:py-16 bg-muted/30">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8 text-center">
              Nossas Áreas
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {teamAreas.map((area, index) => (
                <div key={index} className="bg-card rounded-xl p-6 shadow-lg border border-border hover:shadow-xl transition-shadow">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <area.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground">{area.title}</h3>
                      {area.lead && (
                        <p className="text-sm text-primary font-medium">{area.lead}</p>
                      )}
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {area.members.map((member, memberIndex) => (
                      <li key={memberIndex} className="flex justify-between items-center text-sm py-1 border-b border-border/50 last:border-0">
                        <span className="text-foreground">{member.name}</span>
                        <span className="text-muted-foreground text-xs">{member.role}</span>
                      </li>
                    ))}
                  </ul>
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
