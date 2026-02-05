import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Search, Users, Globe, Building2, Mail, User } from "lucide-react";
import { cn } from "@/lib/utils";

// Import team photos
import danielMoreira from "@/assets/team/daniel-moreira.jpg";
import leonardoCampos from "@/assets/team/leonardo-campos.jpg";
import lorranyAmorim from "@/assets/team/lorrany-amorim.jpg";
import nathanOliveira from "@/assets/team/nathan-oliveira.jpg";
import brunoSoares from "@/assets/team/bruno-soares.jpg";
import joaoSilvano from "@/assets/team/joao-silvano.jpg";
import caioMenezes from "@/assets/team/caio-menezes.jpg";
import marcosLopes from "@/assets/team/marcos-lopes.jpg";
import lucasMoreira from "@/assets/team/lucas-moreira.jpg";
import marinaFernandes from "@/assets/team/marina-fernandes.jpg";
import alineAlexandre from "@/assets/team/aline-alexandre.jpg";
import webertonOliveira from "@/assets/team/weberton-oliveira.jpg";
import samuelRodrigues from "@/assets/team/samuel-rodrigues.jpg";
import pabloPereira from "@/assets/team/pablo-pereira.jpg";
import rafaelAlmeida from "@/assets/team/rafael-almeida.jpg";
import jAlbarracin from "@/assets/team/j-albarracin.jpg";
import aNicolas from "@/assets/team/a-nicolas.jpg";
import vGelardini from "@/assets/team/v-gelardini.jpg";
import lGomez from "@/assets/team/l-gomez.jpg";
import julianoReis from "@/assets/team/juliano-reis.jpg";
import brizaDiez from "@/assets/team/briza-diez.jpg";
import leiaMendonca from "@/assets/team/leia-mendonca.jpg";
import thiagoRadieddine from "@/assets/team/thiago-radieddine.jpg";
import vladmirQuadros from "@/assets/team/vladmir-quadros.jpg";
import taylorAlmeida from "@/assets/team/taylor-almeida.jpg";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  area: string;
  country: "Brasil" | "Argentina" | "LATAM";
  photo?: string;
  bio?: string;
  email?: string;
  level: number;
  parentId?: string;
}

const teamMembers: TeamMember[] = [
  // Leadership
  {
    id: "daniel-moreira",
    name: "Daniel Moreira",
    role: "Head Service Solutions LATAM",
    area: "Liderança",
    country: "LATAM",
    photo: danielMoreira,
    bio: "Líder da área de Service Solutions para América Latina, responsável pela estratégia e gestão de todas as operações regionais.",
    level: 0,
  },
  
  // Brazil - Commercial
  {
    id: "leonardo-campos",
    name: "Leonardo Campos",
    role: "Commercial Brazil",
    area: "Comercial",
    country: "Brasil",
    photo: leonardoCampos,
    bio: "Responsável pela área comercial no Brasil.",
    level: 1,
    parentId: "daniel-moreira",
  },
  {
    id: "lorrany-amorim",
    name: "Lorrany Amorim",
    role: "Sales",
    area: "Comercial",
    country: "Brasil",
    photo: lorranyAmorim,
    bio: "Especialista em vendas da área comercial Brasil.",
    level: 2,
    parentId: "leonardo-campos",
  },
  {
    id: "nathan-oliveira",
    name: "Nathan Oliveira",
    role: "Sales",
    area: "Comercial",
    country: "Brasil",
    photo: nathanOliveira,
    bio: "Especialista em vendas da área comercial Brasil.",
    level: 2,
    parentId: "leonardo-campos",
  },
  {
    id: "tbd-sales-assist",
    name: "TBD",
    role: "Sales Assist",
    area: "Comercial",
    country: "Brasil",
    level: 2,
    parentId: "leonardo-campos",
  },
  
  // Brazil - Data & Analysis
  {
    id: "bruno-soares",
    name: "Bruno Soares",
    role: "Data Analysis",
    area: "Dados e Análises",
    country: "Brasil",
    photo: brunoSoares,
    bio: "Analista de dados responsável por insights estratégicos.",
    level: 2,
    parentId: "leonardo-campos",
  },
  
  // Brazil - Contracts
  {
    id: "joao-silvano",
    name: "João Silvano",
    role: "Contract Renewal",
    area: "Contratos",
    country: "Brasil",
    photo: joaoSilvano,
    bio: "Responsável pela renovação de contratos.",
    level: 2,
    parentId: "leonardo-campos",
  },
  
  // Brazil - Products
  {
    id: "caio-menezes",
    name: "Caio Menezes",
    role: "IVECO SEU",
    area: "Produtos e Serviços",
    country: "Brasil",
    photo: caioMenezes,
    bio: "Especialista em soluções IVECO SEU.",
    level: 2,
    parentId: "leonardo-campos",
  },
  {
    id: "marcos-lopes",
    name: "Marcos Lopes",
    role: "IVECO SEU",
    area: "Produtos e Serviços",
    country: "Brasil",
    photo: marcosLopes,
    bio: "Especialista em soluções IVECO SEU.",
    level: 2,
    parentId: "leonardo-campos",
  },
  
  // Argentina - Commercial
  {
    id: "j-albarracin",
    name: "J. Albarracin",
    role: "Commercial Argentina",
    area: "Comercial",
    country: "Argentina",
    photo: jAlbarracin,
    bio: "Responsável pela área comercial na Argentina.",
    level: 1,
    parentId: "daniel-moreira",
  },
  {
    id: "a-nicolas",
    name: "A. Nicolas",
    role: "Sales",
    area: "Comercial",
    country: "Argentina",
    photo: aNicolas,
    bio: "Especialista em vendas da área comercial Argentina.",
    level: 2,
    parentId: "j-albarracin",
  },
  {
    id: "v-gelardini",
    name: "V. Gelardini",
    role: "Sales",
    area: "Comercial",
    country: "Argentina",
    photo: vGelardini,
    bio: "Especialista em vendas da área comercial Argentina.",
    level: 2,
    parentId: "j-albarracin",
  },
  {
    id: "l-gomez",
    name: "L. Gomez",
    role: "Contract Management & KPIs",
    area: "Contratos e KPIs",
    country: "Argentina",
    photo: lGomez,
    bio: "Responsável pela gestão de contratos e KPIs LATAM.",
    level: 2,
    parentId: "j-albarracin",
  },
  
  // LATAM - Process & TCO
  {
    id: "leia-mendonca",
    name: "Leia Mendonça",
    role: "Process & TCO LATAM",
    area: "Processos e TCO",
    country: "LATAM",
    photo: leiaMendonca,
    bio: "Líder de processos e TCO para América Latina.",
    level: 1,
    parentId: "daniel-moreira",
  },
  {
    id: "marina-fernandes",
    name: "Marina Fernandes",
    role: "Process Adm.",
    area: "Processos e TCO",
    country: "Brasil",
    photo: marinaFernandes,
    bio: "Administradora de processos.",
    level: 2,
    parentId: "leia-mendonca",
  },
  {
    id: "aline-alexandre",
    name: "Aline Alexandre",
    role: "Process Adm.",
    area: "Processos e TCO",
    country: "Brasil",
    photo: alineAlexandre,
    bio: "Administradora de processos.",
    level: 2,
    parentId: "leia-mendonca",
  },
  {
    id: "lucas-moreira",
    name: "Lucas Moreira",
    role: "TCO Brazil",
    area: "Processos e TCO",
    country: "Brasil",
    photo: lucasMoreira,
    bio: "Responsável pelo TCO Brasil.",
    level: 2,
    parentId: "leia-mendonca",
  },
  {
    id: "juliano-reis",
    name: "Juliano Reis",
    role: "TCO Argentina",
    area: "Processos e TCO",
    country: "Argentina",
    photo: julianoReis,
    bio: "Responsável pelo TCO Argentina.",
    level: 2,
    parentId: "leia-mendonca",
  },
  {
    id: "weberton-oliveira",
    name: "Weberton Oliveira",
    role: "Rental Ops",
    area: "Operações",
    country: "Brasil",
    photo: webertonOliveira,
    bio: "Responsável pelas operações de Rental.",
    level: 2,
    parentId: "leia-mendonca",
  },
  {
    id: "samuel-rodrigues",
    name: "Samuel Rodrigues",
    role: "Claims Analysis",
    area: "Claims",
    country: "Brasil",
    photo: samuelRodrigues,
    bio: "Analista de claims.",
    level: 2,
    parentId: "leia-mendonca",
  },
  {
    id: "pablo-pereira",
    name: "Pablo Pereira",
    role: "Claims Analysis BR e ARG",
    area: "Claims",
    country: "LATAM",
    photo: pabloPereira,
    bio: "Analista de claims para Brasil e Argentina.",
    level: 2,
    parentId: "leia-mendonca",
  },
  
  // LATAM - Performance & Risk
  {
    id: "thiago-radieddine",
    name: "Thiago Radieddine",
    role: "Business Performance & Risk LATAM",
    area: "Performance e Riscos",
    country: "LATAM",
    photo: thiagoRadieddine,
    bio: "Líder de performance de negócios e riscos para América Latina.",
    level: 1,
    parentId: "daniel-moreira",
  },
  {
    id: "vladmir-quadros",
    name: "Vladmir Quadros",
    role: "Business Development",
    area: "Performance e Riscos",
    country: "LATAM",
    photo: vladmirQuadros,
    bio: "Responsável pelo desenvolvimento de negócios.",
    level: 2,
    parentId: "thiago-radieddine",
  },
  {
    id: "taylor-almeida",
    name: "Taylor Almeida",
    role: "Projects",
    area: "Performance e Riscos",
    country: "LATAM",
    photo: taylorAlmeida,
    bio: "Responsável pela gestão de projetos.",
    level: 2,
    parentId: "thiago-radieddine",
  },
  {
    id: "briza-diez",
    name: "Briza Diez",
    role: "Risk Argentina",
    area: "Performance e Riscos",
    country: "Argentina",
    photo: brizaDiez,
    bio: "Analista de riscos Argentina.",
    level: 2,
    parentId: "thiago-radieddine",
  },
  {
    id: "rafael-almeida",
    name: "Rafael Almeida",
    role: "Risk Brazil",
    area: "Performance e Riscos",
    country: "Brasil",
    photo: rafaelAlmeida,
    bio: "Analista de riscos Brasil.",
    level: 2,
    parentId: "thiago-radieddine",
  },
  {
    id: "tbd-telematics",
    name: "TBD",
    role: "Telematics",
    area: "Telematics",
    country: "LATAM",
    level: 2,
    parentId: "thiago-radieddine",
  },
];

const areas = [...new Set(teamMembers.map((m) => m.area))];
const countries: ("Brasil" | "Argentina" | "LATAM")[] = ["Brasil", "Argentina", "LATAM"];

function MemberCard({ member, onClick }: { member: TeamMember; onClick: () => void }) {
  const initials = member.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);

  return (
    <Card
      className={cn(
        "group cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-border/50",
        member.level === 0 && "bg-primary/5 border-primary/30",
        member.level === 1 && "bg-secondary/30"
      )}
      onClick={onClick}
    >
      <CardContent className="p-4 flex flex-col items-center text-center">
        <Avatar className={cn(
          "mb-3 ring-2 ring-offset-2 ring-offset-background transition-all group-hover:ring-primary",
          member.level === 0 ? "h-20 w-20 ring-primary" : "h-16 w-16 ring-border"
        )}>
          {member.photo ? (
            <AvatarImage src={member.photo} alt={member.name} className="object-cover" />
          ) : null}
          <AvatarFallback className="bg-muted text-muted-foreground">
            {member.name === "TBD" ? <User className="h-6 w-6" /> : initials}
          </AvatarFallback>
        </Avatar>
        
        <h3 className={cn(
          "font-semibold text-foreground",
          member.level === 0 ? "text-lg" : "text-sm"
        )}>
          {member.name}
        </h3>
        
        <p className="text-xs text-muted-foreground mt-1">{member.role}</p>
        
        <div className="flex gap-1 mt-2 flex-wrap justify-center">
          <Badge variant="outline" className="text-[10px] px-1.5 py-0">
            {member.country === "Brasil" ? "🇧🇷" : member.country === "Argentina" ? "🇦🇷" : "🌎"} {member.country}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
}

function OrgChartSection({ 
  title, 
  members, 
  icon: Icon,
  onMemberClick 
}: { 
  title: string; 
  members: TeamMember[];
  icon: React.ElementType;
  onMemberClick: (member: TeamMember) => void;
}) {
  if (members.length === 0) return null;
  
  return (
    <div className="mb-8">
      <div className="flex items-center gap-2 mb-4">
        <Icon className="h-5 w-5 text-primary" />
        <h3 className="text-lg font-semibold text-foreground">{title}</h3>
        <Badge variant="secondary" className="ml-auto">{members.length}</Badge>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
        {members.map((member) => (
          <MemberCard 
            key={member.id} 
            member={member} 
            onClick={() => onMemberClick(member)} 
          />
        ))}
      </div>
    </div>
  );
}

export default function QuemSomos() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [selectedArea, setSelectedArea] = useState<string | null>(null);
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [headerSearchQuery, setHeaderSearchQuery] = useState("");

  const filteredMembers = useMemo(() => {
    return teamMembers.filter((member) => {
      const matchesSearch = 
        member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.area.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCountry = !selectedCountry || member.country === selectedCountry;
      const matchesArea = !selectedArea || member.area === selectedArea;
      return matchesSearch && matchesCountry && matchesArea;
    });
  }, [searchTerm, selectedCountry, selectedArea]);

  const leader = filteredMembers.find((m) => m.level === 0);
  const brazilMembers = filteredMembers.filter((m) => m.country === "Brasil" && m.level > 0);
  const argentinaMembers = filteredMembers.filter((m) => m.country === "Argentina" && m.level > 0);
  const latamMembers = filteredMembers.filter((m) => m.country === "LATAM" && m.level > 0);

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCountry(null);
    setSelectedArea(null);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header 
        onSearch={setHeaderSearchQuery}
        searchQuery={headerSearchQuery}
        onMenuToggle={() => {}}
        activeTab="home"
        onLogoClick={() => navigate("/")}
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Quem Somos
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl">
              Conheça a estrutura e os profissionais que fazem parte da Service Solutions LATAM, 
              atuando de forma estratégica para gerar valor aos nossos clientes e parceiros.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-14 sm:top-16 z-30 bg-card/95 backdrop-blur border-b border-border py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 items-center">
            {/* Search */}
            <div className="relative flex-1 min-w-[200px] max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Buscar por nome, cargo ou área..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-9"
              />
            </div>

            {/* Country Filter */}
            <div className="flex gap-1">
              {countries.map((country) => (
                <Button
                  key={country}
                  variant={selectedCountry === country ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCountry(selectedCountry === country ? null : country)}
                  className="text-xs"
                >
                  {country === "Brasil" ? "🇧🇷" : country === "Argentina" ? "🇦🇷" : "🌎"} {country}
                </Button>
              ))}
            </div>

            {/* Area Filter */}
            <select
              value={selectedArea || ""}
              onChange={(e) => setSelectedArea(e.target.value || null)}
              className="h-9 px-3 text-sm rounded-md border border-input bg-background"
            >
              <option value="">Todas as áreas</option>
              {areas.map((area) => (
                <option key={area} value={area}>{area}</option>
              ))}
            </select>

            {/* Clear Filters */}
            {(searchTerm || selectedCountry || selectedArea) && (
              <Button variant="ghost" size="sm" onClick={clearFilters}>
                Limpar filtros
              </Button>
            )}
          </div>
        </div>
      </section>

      {/* Org Chart */}
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <Card>
              <CardContent className="p-4 flex items-center gap-3">
                <Users className="h-8 w-8 text-primary" />
                <div>
                  <p className="text-2xl font-bold text-foreground">{filteredMembers.length}</p>
                  <p className="text-xs text-muted-foreground">Colaboradores</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 flex items-center gap-3">
                <Globe className="h-8 w-8 text-primary" />
                <div>
                  <p className="text-2xl font-bold text-foreground">3</p>
                  <p className="text-xs text-muted-foreground">Regiões</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 flex items-center gap-3">
                <Building2 className="h-8 w-8 text-primary" />
                <div>
                  <p className="text-2xl font-bold text-foreground">{areas.length}</p>
                  <p className="text-xs text-muted-foreground">Áreas</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 flex items-center gap-3">
                <div className="text-2xl">🇧🇷🇦🇷</div>
                <div>
                  <p className="text-2xl font-bold text-foreground">LATAM</p>
                  <p className="text-xs text-muted-foreground">Cobertura</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Leadership */}
          {leader && (
            <div className="mb-8">
              <div className="flex justify-center mb-6">
                <div className="w-full max-w-xs">
                  <MemberCard member={leader} onClick={() => setSelectedMember(leader)} />
                </div>
              </div>
              {/* Connection line */}
              <div className="flex justify-center">
                <div className="w-px h-8 bg-border" />
              </div>
              <div className="flex justify-center">
                <div className="w-3/4 h-px bg-border" />
              </div>
            </div>
          )}

          {/* Brazil Section */}
          {brazilMembers.length > 0 && (
            <div className="mb-8 p-6 rounded-lg bg-gradient-to-r from-green-500/5 to-yellow-500/5 border border-green-500/20">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">🇧🇷</span>
                <h2 className="text-xl font-bold text-foreground">Brasil</h2>
                <Badge className="ml-auto">{brazilMembers.length} membros</Badge>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
                {brazilMembers.map((member) => (
                  <MemberCard 
                    key={member.id} 
                    member={member} 
                    onClick={() => setSelectedMember(member)} 
                  />
                ))}
              </div>
            </div>
          )}

          {/* Argentina Section */}
          {argentinaMembers.length > 0 && (
            <div className="mb-8 p-6 rounded-lg bg-gradient-to-r from-blue-500/5 to-white/5 border border-blue-500/20">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">🇦🇷</span>
                <h2 className="text-xl font-bold text-foreground">Argentina</h2>
                <Badge className="ml-auto">{argentinaMembers.length} membros</Badge>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
                {argentinaMembers.map((member) => (
                  <MemberCard 
                    key={member.id} 
                    member={member} 
                    onClick={() => setSelectedMember(member)} 
                  />
                ))}
              </div>
            </div>
          )}

          {/* LATAM Section */}
          {latamMembers.length > 0 && (
            <div className="mb-8 p-6 rounded-lg bg-gradient-to-r from-primary/5 to-secondary/5 border border-primary/20">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">🌎</span>
                <h2 className="text-xl font-bold text-foreground">LATAM</h2>
                <Badge className="ml-auto">{latamMembers.length} membros</Badge>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
                {latamMembers.map((member) => (
                  <MemberCard 
                    key={member.id} 
                    member={member} 
                    onClick={() => setSelectedMember(member)} 
                  />
                ))}
              </div>
            </div>
          )}

          {/* No Results */}
          {filteredMembers.length === 0 && (
            <div className="text-center py-12">
              <Users className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">Nenhum colaborador encontrado com os filtros selecionados.</p>
              <Button variant="outline" onClick={clearFilters} className="mt-4">
                Limpar filtros
              </Button>
            </div>
          )}
        </div>
      </main>

      {/* Member Detail Modal */}
      <Dialog open={!!selectedMember} onOpenChange={() => setSelectedMember(null)}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Perfil do Colaborador</DialogTitle>
          </DialogHeader>
          {selectedMember && (
            <div className="flex flex-col items-center text-center">
              <Avatar className="h-24 w-24 mb-4 ring-4 ring-primary/20">
                {selectedMember.photo ? (
                  <AvatarImage src={selectedMember.photo} alt={selectedMember.name} className="object-cover" />
                ) : null}
                <AvatarFallback className="bg-muted text-muted-foreground text-2xl">
                  {selectedMember.name === "TBD" ? <User className="h-10 w-10" /> : selectedMember.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                </AvatarFallback>
              </Avatar>
              
              <h2 className="text-xl font-bold text-foreground">{selectedMember.name}</h2>
              <p className="text-muted-foreground">{selectedMember.role}</p>
              
              <div className="flex gap-2 mt-3">
                <Badge>{selectedMember.area}</Badge>
                <Badge variant="outline">
                  {selectedMember.country === "Brasil" ? "🇧🇷" : selectedMember.country === "Argentina" ? "🇦🇷" : "🌎"} {selectedMember.country}
                </Badge>
              </div>
              
              {selectedMember.bio && (
                <p className="text-sm text-muted-foreground mt-4 p-4 bg-muted/50 rounded-lg">
                  {selectedMember.bio}
                </p>
              )}
              
              <div className="mt-4 w-full p-4 bg-muted/30 rounded-lg">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  <span>Contato corporativo: em breve</span>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
}
