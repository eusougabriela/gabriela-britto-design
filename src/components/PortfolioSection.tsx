import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, ArrowRight } from "lucide-react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState("todos");

  const projects = [
    {
      id: 1,
      title: "App Mobile de Finanças",
      category: "uxui",
      image: project1,
      description: "Design completo de aplicativo mobile para controle financeiro pessoal, com foco na experiência do usuário e interface intuitiva.",
      tags: ["UX Research", "UI Design", "Prototyping", "Mobile"],
      link: "#"
    },
    {
      id: 2,
      title: "E-commerce Platform",
      category: "uxui", 
      image: project2,
      description: "Redesign completo de plataforma e-commerce, melhorando a conversão e experiência de compra dos usuários.",
      tags: ["UX Design", "Web Design", "E-commerce", "Responsive"],
      link: "#"
    },
    {
      id: 3,
      title: "Identidade Visual Corporativa",
      category: "grafico",
      image: project3,
      description: "Desenvolvimento de identidade visual completa para startup de tecnologia, incluindo logo, papelaria e guidelines.",
      tags: ["Brand Identity", "Logo Design", "Visual Identity", "Guidelines"],
      link: "#"
    }
  ];

  const filters = [
    { id: "todos", label: "Todos os Projetos" },
    { id: "uxui", label: "UX/UI Design" },
    { id: "grafico", label: "Design Gráfico" }
  ];

  const filteredProjects = activeFilter === "todos" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-24 bg-background">
      <div className="section-container">
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary">
            Meu Portfólio
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Seleção de projetos que demonstram minha experiência em UX/UI Design e Design Gráfico
          </p>
          <div className="w-20 h-1 bg-gradient-primary rounded-full mx-auto"></div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              variant={activeFilter === filter.id ? "default" : "outline"}
              className={`px-6 py-3 transition-all duration-300 ${
                activeFilter === filter.id
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "hover:bg-primary hover:text-primary-foreground"
              }`}
            >
              {filter.label}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-md card-hover"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button
                    variant="secondary"
                    size="sm"
                    className="bg-white text-primary hover:bg-white/90"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Ver Projeto
                  </Button>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-text-primary group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="text-xs px-2 py-1 bg-surface-elevated text-text-secondary"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Project Link */}
                <div className="pt-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-primary hover:text-primary-hover p-0 h-auto font-medium group"
                  >
                    Ver case completo
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More Projects CTA */}
        <div className="text-center mt-16">
          <p className="text-text-secondary mb-6">
            Gostou do que viu? Vamos conversar sobre seu próximo projeto.
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary-hover text-primary-foreground px-8"
            onClick={() => {
              const element = document.getElementById('contato');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Iniciar um Projeto
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;