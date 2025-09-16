import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Mail, 
  Linkedin, 
  ExternalLink, 
  Send,
  MapPin,
  Phone
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Mensagem enviada!",
        description: "Obrigada pelo contato. Respondo em breve!",
      });
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "E-mail",
      value: "gabriela@exemplo.com",
      action: "mailto:gabriela@exemplo.com"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/gabrielabritto",
      action: "https://linkedin.com/in/gabrielabritto"
    },
    {
      icon: ExternalLink,
      label: "Behance",
      value: "behance.net/gabrielabritto",
      action: "https://behance.net/gabrielabritto"
    }
  ];

  return (
    <section id="contato" className="py-24 bg-surface-elevated">
      <div className="section-container">
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary">
            Vamos Conversar?
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Tem um projeto em mente? Quer saber mais sobre meu trabalho? 
            Entre em contato e vamos criar algo incrível juntos.
          </p>
          <div className="w-20 h-1 bg-gradient-primary rounded-full mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-text-primary">
                Entre em contato
              </h3>
              
              <p className="text-text-secondary leading-relaxed">
                Estou sempre aberta para discutir novos projetos, oportunidades criativas 
                ou parcerias interessantes. Vamos transformar sua ideia em realidade!
              </p>

              {/* Contact Methods */}
              <div className="space-y-4">
                {contactInfo.map((contact) => {
                  const IconComponent = contact.icon;
                  return (
                    <a
                      key={contact.label}
                      href={contact.action}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 card-hover group"
                    >
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                        <IconComponent className="w-5 h-5 text-primary group-hover:text-white" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-text-secondary">
                          {contact.label}
                        </div>
                        <div className="text-text-primary group-hover:text-primary transition-colors">
                          {contact.value}
                        </div>
                      </div>
                      <ExternalLink className="w-4 h-4 text-text-tertiary group-hover:text-primary ml-auto" />
                    </a>
                  );
                })}
              </div>

              {/* Additional Info */}
              <div className="bg-gradient-primary rounded-2xl p-6 text-white">
                <h4 className="text-lg font-semibold mb-2">
                  Pronta para novos desafios
                </h4>
                <p className="text-white/90 text-sm">
                  Disponível para projetos freelance, oportunidades de trabalho 
                  e colaborações criativas. Respondo em até 24h!
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome *</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Seu nome completo"
                    required
                    className="border-border focus:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">E-mail *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                    required
                    className="border-border focus:border-primary"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Assunto</Label>
                <Input
                  id="subject"
                  type="text"
                  placeholder="Sobre o que você gostaria de conversar?"
                  className="border-border focus:border-primary"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Mensagem *</Label>
                <Textarea
                  id="message"
                  placeholder="Conte-me mais sobre seu projeto ou ideia..."
                  required
                  rows={5}
                  className="border-border focus:border-primary resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                size="lg"
                className="w-full bg-primary hover:bg-primary-hover text-primary-foreground"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Enviar Mensagem
                  </>
                )}
              </Button>

              <p className="text-xs text-text-tertiary text-center">
                * Campos obrigatórios. Seus dados são tratados com total segurança.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;