import { Eye, Wifi, Activity, MapPin as Target } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Eye,
      title: "Visibilidade",
      description: "Visão completa de todas as operações",
    },
    {
      icon: Wifi,
      title: "Conectividade",
      description: "Tecnologia mobile avançada",
    },
    {
      icon: Activity,
      title: "Monitoramento",
      description: "Acompanhamento inteligente 24/7",
    },
    {
      icon: Target,
      title: "Rastreabilidade",
      description: "Controle total em tempo real",
    },
  ];

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-dark opacity-50" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-accent text-sm font-semibold uppercase tracking-wider mb-4 block">
            Sobre o Evento
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Tecnologia Zebra para seu{" "}
            <span className="text-primary">Negócio</span>
          </h2>
        </div>

        <div className="bg-card border border-border rounded-2xl p-8 md:p-12 mb-12 backdrop-blur-sm">
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            A <span className="text-primary font-semibold">Zebra Technologies</span> é
            líder global em soluções de{" "}
            <span className="text-accent font-semibold">mobilidade empresarial</span> e{" "}
            <span className="text-accent font-semibold">captura de dados</span>. Com
            dispositivos robustos e software inteligente, oferecemos soluções completas
            para <span className="text-primary font-semibold">rastreabilidade</span>,{" "}
            <span className="text-primary font-semibold">gestão de ativos</span> e{" "}
            <span className="text-primary font-semibold">otimização</span> de processos.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            No Business Day, você conhecerá as mais recentes inovações em coletores de
            dados, impressoras industriais, RFID, e muito mais.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-secondary border border-border rounded-xl p-6 text-center hover:border-primary transition-all group hover:scale-105"
            >
              <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/30 transition-colors">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
