import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";

const HeroSection = () => {
  const scrollToPortfolio = () => {
    const element = document.getElementById('portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-surface">
      <div className="section-container">
        <div className="text-center space-y-8 py-20">
          {/* Main heading */}
          <div className="space-y-4 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-text-primary leading-tight">
              Transformando ideias em
              <span className="gradient-text block">
                experiências visuais
              </span>
              <span className="text-text-primary">
                e digitais
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto">
              UX/UI Designer + Designer Gráfico
            </p>
          </div>

          {/* Description */}
          <div className="space-y-6 animate-slide-up">
            <p className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
              Mais de 8 anos transformando necessidades em soluções visuais estratégicas. 
              Especializada em experiência do usuário, interface digital e design gráfico.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                onClick={scrollToPortfolio}
                size="lg"
                className="bg-primary hover:bg-primary-hover text-primary-foreground px-8 py-6 text-lg group"
              >
                Ver Portfólio
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button
                onClick={scrollToContact}
                variant="outline"
                size="lg"
                className="px-8 py-6 text-lg border-2 hover:bg-primary hover:text-primary-foreground hover:border-primary"
              >
                <Download className="mr-2 w-5 h-5" />
                Baixar CV
              </Button>
            </div>
          </div>

          {/* Stats or highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 animate-slide-up">
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">8+</div>
              <div className="text-text-secondary">Anos de experiência</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">50+</div>
              <div className="text-text-secondary">Projetos realizados</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">100%</div>
              <div className="text-text-secondary">Foco no usuário</div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-text-tertiary rounded-full flex justify-center">
              <div className="w-1 h-3 bg-text-tertiary rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;