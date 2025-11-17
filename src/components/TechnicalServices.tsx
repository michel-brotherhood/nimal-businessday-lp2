import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import lightLogo from "@/assets/light-logo.png";
import casaEVideoLogo from "@/assets/casa-e-video-logo.png";
import zq521Equipment from "@/assets/zq521-light.png";
import mc9090Equipment from "@/assets/mc9090-zebra.png";
import tc21Equipment from "@/assets/tc21-zebra.png";
import jeffersonPhoto from "@/assets/colaborador-jefferson.png";
import ianPhoto from "@/assets/colaborador-ian.png";
import carlosPhoto from "@/assets/colaborador-carlos.png";

const TechnicalServices = () => {
  const { ref: casesRef, isVisible: casesVisible } = useScrollAnimation();
  const { ref: teamRef, isVisible: teamVisible } = useScrollAnimation();

  const maintenanceCases = [
    {
      client: "LIGHT",
      logo: lightLogo,
      equipment: "ZQ521",
      equipmentImage: zq521Equipment,
    },
    {
      client: "CASA & VÍDEO",
      logo: casaEVideoLogo,
      equipment: "MC9090 e TC21",
      equipmentImage: mc9090Equipment,
    },
  ];

  const team = [
    { name: "Jefferson Rodrigues", photo: jeffersonPhoto },
    { name: "Carlos Silveira", photo: carlosPhoto },
    { name: "Ian Oliveira", photo: ianPhoto },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Cases de Manutenção */}
        <div
          ref={casesRef}
          className={`mb-16 transition-all duration-1000 ${
            casesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {maintenanceCases.map((caseItem, index) => (
              <div
                key={index}
                className="bg-card/50 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-border/50 hover:border-primary/50 transition-all duration-300"
              >
                {/* Logo do Cliente */}
                <div className="flex justify-center mb-6">
                  <img
                    src={caseItem.logo}
                    alt={`${caseItem.client} Logo`}
                    className="h-16 sm:h-20 w-auto object-contain"
                  />
                </div>

                {/* Título do Case */}
                <div className="text-center mb-6">
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">
                    Case manutenção
                  </h3>
                  <p className="text-xl sm:text-2xl font-bold text-primary">
                    {caseItem.client}
                  </p>
                  <p className="text-base sm:text-lg text-muted-foreground mt-2">
                    Equipamento {caseItem.equipment}
                  </p>
                </div>

                {/* Foto do Equipamento */}
                <div className="flex justify-center">
                  <div className="bg-background/30 rounded-lg p-4">
                    <img
                      src={caseItem.equipmentImage}
                      alt={`Equipamento ${caseItem.equipment}`}
                      className="w-full max-w-[280px] h-auto object-contain"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Equipe Técnica */}
        <div
          ref={teamRef}
          className={`transition-all duration-1000 ${
            teamVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-4 text-foreground">
            Quem cuida da sua operação quando ela vem para Nimal
          </h2>

          {/* Fotos dos Colaboradores */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 mt-12">
            {team.map((member, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden border-4 border-primary/30 hover:border-primary transition-all duration-300 hover:scale-105">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="mt-4 text-lg sm:text-xl font-semibold text-foreground">
                  {member.name}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default TechnicalServices;
