import { TrendingUp, Shield, Zap, Users } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Aumento de Produtividade",
      description:
        "Melhore a eficiência operacional com automação e tecnologia mobile de ponta",
    },
    {
      icon: Shield,
      title: "Maior Precisão",
      description:
        "Reduza erros e aumente a acurácia com captura de dados automatizada",
    },
    {
      icon: Zap,
      title: "Decisões em Tempo Real",
      description:
        "Acesse dados instantâneos para tomada de decisões estratégicas",
    },
    {
      icon: Users,
      title: "Networking",
      description:
        "Conecte-se com especialistas e outros profissionais do setor",
    },
  ];

  return (
    <section id="benefits" className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/30" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-accent text-sm font-semibold uppercase tracking-wider mb-4 block">
            Por que Participar
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Benefícios do <span className="text-primary">Business Day</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-8 hover:border-primary transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-colors">
                  <benefit.icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-primary rounded-2xl p-12 border border-primary/30">
            <h3 className="text-3xl font-bold text-primary-foreground mb-4">
              Demonstrações ao Vivo
            </h3>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Experimente as soluções Zebra em ação com demonstrações práticas e
              interativas dos produtos mais inovadores do mercado
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
