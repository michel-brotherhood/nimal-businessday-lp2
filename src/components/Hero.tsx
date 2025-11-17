import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-dark">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-2 h-2 bg-tech-glow rounded-full animate-pulse" />
          <div className="absolute top-40 right-20 w-2 h-2 bg-tech-glow rounded-full animate-pulse delay-300" />
          <div className="absolute bottom-40 left-1/4 w-2 h-2 bg-tech-glow rounded-full animate-pulse delay-700" />
          <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-tech-glow rounded-full animate-pulse delay-500" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Logos */}
        <div className="flex items-center justify-center gap-8 mb-12 flex-wrap">
          <div className="text-4xl font-bold text-foreground tracking-wider">
            nimal<span className="text-primary">tecnologia</span>
          </div>
          <div className="w-px h-12 bg-border hidden sm:block" />
          <div className="text-4xl font-bold text-primary tracking-wider">
            ZEBRA
          </div>
        </div>

        {/* Main Title */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent leading-tight">
          Business Day
        </h1>

        <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-8">
          Soluções Zebra para{" "}
          <span className="text-accent">Transformação Digital</span>
        </h2>

        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12">
          Descubra como as tecnologias Zebra podem{" "}
          <span className="text-accent font-semibold">revolucionar</span> seu negócio
          <br />
          com soluções de{" "}
          <span className="text-accent font-semibold">mobilidade</span> e{" "}
          <span className="text-accent font-semibold">captura de dados</span>
        </p>

        {/* Event Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-card border border-border rounded-xl p-6 backdrop-blur-sm hover:border-primary transition-colors">
            <div className="w-14 h-14 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">TBD</h3>
            <p className="text-muted-foreground">Data do evento</p>
          </div>

          <div className="bg-card border border-border rounded-xl p-6 backdrop-blur-sm hover:border-accent transition-colors">
            <div className="w-14 h-14 bg-accent/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Clock className="w-7 h-7 text-accent" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">TBD</h3>
            <p className="text-muted-foreground">Horário do evento</p>
          </div>

          <div className="bg-card border border-border rounded-xl p-6 backdrop-blur-sm hover:border-primary transition-colors">
            <div className="w-14 h-14 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">TBD</h3>
            <p className="text-muted-foreground">Local do evento</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
