import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ToolsSidebar } from "@/components/layout/ToolsSidebar";
import { Card, CardContent } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ChevronDown, Users, Briefcase, TrendingUp, Shield, BarChart3, Settings, Wrench, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";

// Team member images
import danielMoreira from "@/assets/team/daniel-moreira.jpg";
import jAlbarracin from "@/assets/team/j-albarracin.jpg";
import leonardoCampos from "@/assets/team/leonardo-campos.jpg";
import aNicolas from "@/assets/team/a-nicolas.jpg";
import vGelardini from "@/assets/team/v-gelardini.jpg";
import lorranyAmorim from "@/assets/team/lorrany-amorim.jpg";
import nathanOliveira from "@/assets/team/nathan-oliveira.jpg";
import tbdSalesAssist from "@/assets/team/tbd-sales-assist.jpg";
import leiaMendonca from "@/assets/team/leia-mendonca.jpg";
import lucasMoreira from "@/assets/team/lucas-moreira.jpg";
import julianoReis from "@/assets/team/juliano-reis.jpg";
import marinaFernandes from "@/assets/team/marina-fernandes.jpg";
import alineAlexandre from "@/assets/team/aline-alexandre.jpg";
import thiagoRadieddine from "@/assets/team/thiago-radieddine.jpg";
import rafaelAlmeida from "@/assets/team/rafael-almeida.jpg";
import brizaDiez from "@/assets/team/briza-diez.jpg";
import samuelRodrigues from "@/assets/team/samuel-rodrigues.jpg";
import pabloPereira from "@/assets/team/pablo-pereira.jpg";
import brunoSoares from "@/assets/team/bruno-soares.jpg";
import joaoSilvano from "@/assets/team/joao-silvano.jpg";
import lGomez from "@/assets/team/l-gomez.jpg";
import webertonOliveira from "@/assets/team/weberton-oliveira.jpg";
import vladmirQuadros from "@/assets/team/vladmir-quadros.jpg";
import taylorAlmeida from "@/assets/team/taylor-almeida.jpg";
import caioMenezes from "@/assets/team/caio-menezes.jpg";
import marcosLopes from "@/assets/team/marcos-lopes.jpg";
import tbdTelematics from "@/assets/team/tbd-telematics.jpg";
import teamStructure from "@/assets/team-structure.jpg";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio?: string;
}

interface Department {
  id: string;
  name: string;
  icon: React.ReactNode;
  color: string;
  members: TeamMember[];
}

const leader: TeamMember = {
  name: "Daniel Moreira",
  role: "Head Service Solutions LATAM",
  image: danielMoreira,
  bio: "Líder da área de Service Solutions para América Latina, responsável por toda estratégia de serviços e soluções da IVECO na região."
};

const departments: Department[] = [
  {
    id: "comercial",
    name: "Área Comercial",
    icon: <Briefcase className="h-5 w-5" />,
    color: "bg-blue-500",
    members: [
      { name: "J. Albarracin", role: "Commercial Argentina", image: jAlbarracin },
      { name: "Leonardo Campos", role: "Commercial Brazil", image: leonardoCampos },
      { name: "A. Nicolas", role: "Sales", image: aNicolas },
      { name: "V. Gelardini", role: "Sales", image: vGelardini },
      { name: "Lorrany Amorim", role: "Sales", image: lorranyAmorim },
      { name: "Nathan Oliveira", role: "Sales", image: nathanOliveira },
      { name: "TBD", role: "Sales Assist", image: tbdSalesAssist },
    ]
  },
  {
    id: "processos-tco",
    name: "Processos e TCO",
    icon: <TrendingUp className="h-5 w-5" />,
    color: "bg-emerald-500",
    members: [
      { name: "Leia Mendonça", role: "Process & TCO LATAM", image: leiaMendonca },
      { name: "Lucas Moreira", role: "TCO Brazil", image: lucasMoreira },
      { name: "Juliano Reis", role: "TCO Argentina", image: julianoReis },
      { name: "Marina Fernandes", role: "Process Adm.", image: marinaFernandes },
      { name: "Aline Alexandre", role: "Process Adm.", image: alineAlexandre },
    ]
  },
  {
    id: "performance-riscos",
    name: "Performance e Riscos",
    icon: <Shield className="h-5 w-5" />,
    color: "bg-amber-500",
    members: [
      { name: "Thiago Radieddine", role: "Business Performance & Risk LATAM", image: thiagoRadieddine },
      { name: "Rafael Almeida", role: "Risk Brazil", image: rafaelAlmeida },
      { name: "Briza Diez", role: "Risk Argentina", image: brizaDiez },
    ]
  },
  {
    id: "claims-dados",
    name: "Claims e Dados",
    icon: <BarChart3 className="h-5 w-5" />,
    color: "bg-purple-500",
    members: [
      { name: "Samuel Rodrigues", role: "Claims Analysis", image: samuelRodrigues },
      { name: "Pablo Pereira", role: "Claims Analysis BR e ARG", image: pabloPereira },
      { name: "Bruno Soares", role: "Data Analysis", image: brunoSoares },
    ]
  },
  {
    id: "gestao-renovacao",
    name: "Gestão, Renovação e KPIs",
    icon: <Settings className="h-5 w-5" />,
    color: "bg-cyan-500",
    members: [
      { name: "João Silvano", role: "Contract Renewal", image: joaoSilvano },
      { name: "L. Gomez", role: "Contract Management & KPIs", image: lGomez },
    ]
  },
  {
    id: "operacoes-projetos",
    name: "Operações e Projetos",
    icon: <Wrench className="h-5 w-5" />,
    color: "bg-rose-500",
    members: [
      { name: "Weberton Oliveira", role: "Rental Operations", image: webertonOliveira },
      { name: "Vladmir Quadros", role: "Business Development", image: vladmirQuadros },
      { name: "Taylor Almeida", role: "Projects", image: taylorAlmeida },
    ]
  },
  {
    id: "outras-areas",
    name: "Outras Áreas",
    icon: <Users className="h-5 w-5" />,
    color: "bg-slate-500",
    members: [
      { name: "Caio Menezes", role: "IVECO SEU", image: caioMenezes },
      { name: "Marcos Lopes", role: "IVECO SEU", image: marcosLopes },
      { name: "TBD", role: "Telematics", image: tbdTelematics },
    ]
  },
];

function TeamMemberCard({ member, isLeader = false }: { member: TeamMember; isLeader?: boolean }) {
  const [showBio, setShowBio] = useState(false);

  return (
    <Card 
      className={cn(
        "group relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer",
        isLeader ? "border-primary/50 bg-gradient-to-br from-primary/5 to-primary/10" : ""
      )}
      onClick={() => member.bio && setShowBio(!showBio)}
    >
      <CardContent className={cn("flex flex-col items-center text-center", isLeader ? "p-6 sm:p-8" : "p-4")}>
        <Avatar className={cn(
          "ring-2 ring-offset-2 ring-offset-background transition-all duration-300 group-hover:ring-primary",
          isLeader ? "h-28 w-28 sm:h-36 sm:w-36 ring-primary" : "h-16 w-16 sm:h-20 sm:w-20 ring-muted"
        )}>
          <AvatarImage src={member.image} alt={member.name} className="object-cover" />
          <AvatarFallback className="text-lg">
            <User className="h-8 w-8 text-muted-foreground" />
          </AvatarFallback>
        </Avatar>
        <h3 className={cn(
          "font-semibold text-foreground mt-3",
          isLeader ? "text-xl sm:text-2xl" : "text-sm sm:text-base"
        )}>
          {member.name}
        </h3>
        <p className={cn(
          "text-muted-foreground",
          isLeader ? "text-sm sm:text-base mt-1" : "text-xs sm:text-sm mt-0.5"
        )}>
          {member.role}
        </p>
        {member.bio && showBio && (
          <p className="text-xs text-muted-foreground mt-3 pt-3 border-t animate-fade-in">
            {member.bio}
          </p>
        )}
      </CardContent>
    </Card>
  );
}

function DepartmentSection({ department, defaultOpen = false }: { department: Department; defaultOpen?: boolean }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-full">
      <CollapsibleTrigger className="w-full">
        <div className={cn(
          "flex items-center justify-between p-4 rounded-lg transition-all duration-200",
          "bg-card hover:bg-muted/50 border",
          isOpen && "bg-muted/50 border-primary/30"
        )}>
          <div className="flex items-center gap-3">
            <div className={cn("p-2 rounded-lg text-white", department.color)}>
              {department.icon}
            </div>
            <div className="text-left">
              <h3 className="font-semibold text-foreground">{department.name}</h3>
              <p className="text-sm text-muted-foreground">{department.members.length} membros</p>
            </div>
          </div>
          <ChevronDown className={cn(
            "h-5 w-5 text-muted-foreground transition-transform duration-200",
            isOpen && "rotate-180"
          )} />
        </div>
      </CollapsibleTrigger>
      <CollapsibleContent className="pt-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4">
          {department.members.map((member, index) => (
            <TeamMemberCard key={index} member={member} />
          ))}
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}

export default function QuemSomos() {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header 
        onSearch={() => {}}
        searchQuery=""
        onMenuToggle={() => {}}
        activeTab="home"
        onLogoClick={handleLogoClick}
      />
      
      <ToolsSidebar />
      
      <main className="flex-1 pt-14 sm:pt-16">
        {/* Hero Banner */}
        <section className="relative bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground overflow-hidden">
          <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-5" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
            <div className="text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
                Quem Somos
              </h1>
              <p className="text-lg sm:text-xl max-w-3xl mx-auto text-primary-foreground/90">
                Conheça a estrutura e os profissionais que fazem parte da Service Solutions LATAM, 
                atuando de forma estratégica para gerar valor aos nossos clientes e parceiros.
              </p>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" />
        </section>

        {/* Leadership Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">Liderança</h2>
            <p className="text-muted-foreground">Head da área Service Solutions LATAM</p>
          </div>
          <div className="flex justify-center">
            <div className="w-full max-w-sm">
              <TeamMemberCard member={leader} isLeader />
            </div>
          </div>
        </section>

        {/* Org Chart Connector */}
        <div className="flex justify-center">
          <div className="w-0.5 h-12 bg-gradient-to-b from-primary/50 to-primary/20" />
        </div>

        {/* Departments Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">Estrutura Organizacional</h2>
            <p className="text-muted-foreground">Clique nas áreas para expandir e conhecer os membros do time</p>
          </div>
          <div className="space-y-4">
            {departments.map((dept, index) => (
              <DepartmentSection 
                key={dept.id} 
                department={dept} 
                defaultOpen={index === 0}
              />
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-muted/30 border-y">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <p className="text-3xl sm:text-4xl font-bold text-primary">
                  {departments.reduce((acc, dept) => acc + dept.members.length, 1)}+
                </p>
                <p className="text-sm sm:text-base text-muted-foreground mt-1">Profissionais</p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-bold text-primary">{departments.length}</p>
                <p className="text-sm sm:text-base text-muted-foreground mt-1">Áreas Estratégicas</p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-bold text-primary">2</p>
                <p className="text-sm sm:text-base text-muted-foreground mt-1">Países</p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-bold text-primary">100%</p>
                <p className="text-sm sm:text-base text-muted-foreground mt-1">Comprometimento</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
