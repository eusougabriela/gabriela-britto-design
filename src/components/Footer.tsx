import { Linkedin, ExternalLink, Mail, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/in/gabrielabritto",
      description: "Conecte-se comigo"
    },
    {
      name: "Behance",
      icon: ExternalLink,
      url: "https://behance.net/gabrielabritto", 
      description: "Veja meu portfólio completo"
    },
    {
      name: "E-mail",
      icon: Mail,
      url: "mailto:gabriela@exemplo.com",
      description: "Entre em contato"
    }
  ];

  return (
    <footer className="bg-text-primary text-white py-16">
      <div className="section-container">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          {/* Brand & Description */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">Gabriela Britto</h3>
              <p className="text-white/70">UX/UI Designer & Designer Gráfico</p>
            </div>
            
            <p className="text-white/80 leading-relaxed">
              Transformando ideias em experiências visuais e digitais há mais de 8 anos. 
              Especializada em criar soluções que conectam pessoas e marcas.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Navegação</h4>
            <nav className="space-y-3">
              {[
                { label: "Sobre", id: "sobre" },
                { label: "Portfólio", id: "portfolio" },
                { label: "Contato", id: "contato" }
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => {
                    const element = document.getElementById(link.id);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="block text-white/70 hover:text-white transition-colors duration-300"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Social Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Vamos nos conectar</h4>
            <div className="space-y-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-white/70 hover:text-white transition-colors duration-300 group"
                  >
                    <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-primary transition-colors">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-medium">{social.name}</div>
                      <div className="text-sm text-white/60">{social.description}</div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-white/70 text-sm">
            © {currentYear} Gabriela Britto — Designer. Todos os direitos reservados.
          </div>

          {/* Back to top */}
          <Button
            onClick={scrollToTop}
            variant="ghost"
            size="sm"
            className="text-white/70 hover:text-white hover:bg-white/10"
          >
            <ArrowUp className="w-4 h-4 mr-2" />
            Voltar ao topo
          </Button>
        </div>

        {/* Additional Footer Note */}
        <div className="text-center mt-8 pt-8 border-t border-white/20">
          <p className="text-white/60 text-sm">
            Feito com 💜 e muito café • Disponível para novos projetos
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;