import { Badge } from "@/components/ui/badge";
import { 
  Figma, 
  Palette, 
  Monitor, 
  Smartphone, 
  Users, 
  TrendingUp,
  Code,
  Database,
  Search
} from "lucide-react";
import gabrielaPhoto from "@/assets/gabriela-photo.jpg";

const AboutSection = () => {
  const skills = [
    "UX Research & Strategy",
    "UI Design & Prototyping", 
    "Design Systems",
    "User Testing & Analytics",
    "Brand Identity",
    "Marketing & Communication",
    "Project Management"
  ];

  const tools = [
    { name: "Figma", icon: Figma },
    { name: "Adobe Creative Suite", icon: Palette },
    { name: "Sketch", icon: Monitor },
    { name: "InVision", icon: Smartphone },
    { name: "Miro", icon: Users },
    { name: "Google Analytics", icon: TrendingUp },
    { name: "HTML/CSS", icon: Code },
    { name: "SQL", icon: Database },
    { name: "Hotjar", icon: Search }
  ];

  return (
    <section id="sobre" className="py-24 bg-surface-elevated">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Photo */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={gabrielaPhoto}
                  alt="Gabriela Britto - UX/UI Designer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-primary rounded-2xl opacity-20 blur-xl"></div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 space-y-8">
            <div className="space-y-6">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
                  Sobre Mim
                </h2>
                <div className="w-20 h-1 bg-gradient-primary rounded-full"></div>
              </div>

              <div className="space-y-4 text-text-secondary leading-relaxed">
                <p className="text-lg">
                  Olá, sou <strong className="text-text-primary">Gabriela Britto</strong>. 
                  Formada em Design Gráfico, com mais de 8 anos de experiência em comunicação, 
                  marketing, agências de publicidade e comércio exterior.
                </p>
                
                <p>
                  Transformo necessidades em soluções visuais estratégicas e de impacto. 
                  Atualmente, estou em transição para a área de tecnologia e produto, 
                  unindo minha bagagem em design à paixão por inovação.
                </p>
                
                <p>
                  Concluí pós-graduação em <strong className="text-text-primary">Gestão de Produto</strong> e 
                  curso <strong className="text-text-primary">Análise e Desenvolvimento de Sistemas</strong>.
                </p>
              </div>
            </div>

            {/* Skills */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-text-primary">
                Habilidades & Experiências
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="px-4 py-2 text-sm bg-white hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-text-primary">
                Ferramentas & Tecnologias
              </h3>
              <div className="grid grid-cols-3 gap-4">
                {tools.map((tool) => {
                  const IconComponent = tool.icon;
                  return (
                    <div
                      key={tool.name}
                      className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 card-hover"
                    >
                      <IconComponent className="w-6 h-6 text-primary mb-2" />
                      <span className="text-sm text-text-secondary text-center">
                        {tool.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;