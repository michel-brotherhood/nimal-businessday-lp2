import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-accent text-sm font-semibold uppercase tracking-wider mb-4 block">
            Contato
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Entre em <span className="text-primary">Contato</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tem dúvidas sobre o evento? Nossa equipe está pronta para ajudar
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-card border border-border rounded-xl p-8 text-center hover:border-accent transition-colors">
            <div className="w-14 h-14 bg-accent/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Mail className="w-7 h-7 text-accent" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">E-mail</h3>
            <a
              href="mailto:contato@nimaltecnologia.com.br"
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              contato@nimaltecnologia.com.br
            </a>
          </div>

          <div className="bg-card border border-border rounded-xl p-8 text-center hover:border-accent transition-colors">
            <div className="w-14 h-14 bg-accent/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Phone className="w-7 h-7 text-accent" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Telefone</h3>
            <a
              href="tel:+5511999999999"
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              (11) 99999-9999
            </a>
          </div>

          <div className="bg-card border border-border rounded-xl p-8 text-center hover:border-accent transition-colors">
            <div className="w-14 h-14 bg-accent/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-7 h-7 text-accent" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Localização</h3>
            <p className="text-muted-foreground">A definir</p>
          </div>
        </div>

        <div className="bg-gradient-primary rounded-2xl p-12 text-center border border-primary/30">
          <h3 className="text-3xl font-bold text-primary-foreground mb-4">
            Acompanhe as Novidades
          </h3>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Fique atento às nossas redes sociais e site para mais informações sobre data,
            local e programação completa do evento
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="bg-background text-foreground hover:bg-background/90"
            >
              Visite nosso Site
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
