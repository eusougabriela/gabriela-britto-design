import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-sm' 
          : 'bg-transparent'
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div 
            className="font-semibold text-xl text-text-primary cursor-pointer"
            onClick={() => scrollToSection('home')}
          >
            Gabriela Britto
            <span className="block text-sm font-normal text-text-secondary">
              Designer
            </span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('sobre')}
              className="text-text-secondary hover:text-text-primary transition-colors duration-300"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="text-text-secondary hover:text-text-primary transition-colors duration-300"
            >
              Portfólio
            </button>
            <button
              onClick={() => scrollToSection('contato')}
              className="text-text-secondary hover:text-text-primary transition-colors duration-300"
            >
              Contato
            </button>
          </nav>

          {/* CTA Button */}
          <Button
            onClick={() => scrollToSection('portfolio')}
            className="hidden md:flex bg-primary hover:bg-primary-hover text-primary-foreground"
          >
            Ver Portfólio
          </Button>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => {
              // Toggle mobile menu (simplified for now)
              const nav = document.querySelector('.mobile-nav');
              nav?.classList.toggle('hidden');
            }}
          >
            ☰
          </Button>
        </div>

        {/* Mobile Navigation */}
        <nav className="mobile-nav hidden md:hidden pb-4">
          <div className="flex flex-col space-y-4">
            <button
              onClick={() => scrollToSection('sobre')}
              className="text-left text-text-secondary hover:text-text-primary transition-colors duration-300"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="text-left text-text-secondary hover:text-text-primary transition-colors duration-300"
            >
              Portfólio
            </button>
            <button
              onClick={() => scrollToSection('contato')}
              className="text-left text-text-secondary hover:text-text-primary transition-colors duration-300"
            >
              Contato
            </button>
            <Button
              onClick={() => scrollToSection('portfolio')}
              className="w-full bg-primary hover:bg-primary-hover text-primary-foreground mt-2"
            >
              Ver Portfólio
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;