import { Smartphone, Printer, Radio, Barcode, Package, Building } from "lucide-react";

const Solutions = () => {
  const solutions = [
    {
      icon: Smartphone,
      title: "Computadores Mobile",
      description: "Dispositivos robustos para operações em campo",
    },
    {
      icon: Barcode,
      title: "Scanners e Leitores",
      description: "Captura de dados precisa e eficiente",
    },
    {
      icon: Printer,
      title: "Impressoras Industriais",
      description: "Etiquetas e códigos de barras de alta qualidade",
    },
    {
      icon: Radio,
      title: "Tecnologia RFID",
      description: "Identificação e rastreamento sem contato",
    },
    {
      icon: Package,
      title: "Gestão de Ativos",
      description: "Controle total do seu inventário",
    },
    {
      icon: Building,
      title: "Soluções Enterprise",
      description: "Software e analytics para tomada de decisão",
    },
  ];

  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-accent text-sm font-semibold uppercase tracking-wider mb-4 block">
            Soluções
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Portfólio <span className="text-primary">Zebra</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Conheça as principais linhas de produtos e soluções que serão apresentadas
            no evento
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-6 hover:border-accent transition-all group hover:scale-105"
            >
              <div className="w-14 h-14 bg-accent/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/30 transition-colors">
                <solution.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {solution.title}
              </h3>
              <p className="text-muted-foreground">{solution.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
