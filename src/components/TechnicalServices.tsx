import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import lightLogo from "@/assets/light-logo.png";
import casaEVideoLogo from "@/assets/casa-e-video-logo.png";
import mc9090Equipment from "@/assets/mc9090-new.webp";
import zq521Equipment from "@/assets/zq521-new.webp";
import tc21Equipment from "@/assets/tc210k-new.webp";
import jeffersonPhoto from "@/assets/colaborador-jefferson.png";
import ianPhoto from "@/assets/colaborador-ian.png";
import carlosPhoto from "@/assets/colaborador-carlos.png";

const TechnicalServices = () => {
  const { ref: casesRef, isVisible: casesVisible } = useScrollAnimation();
  const { ref: teamRef, isVisible: teamVisible } = useScrollAnimation();

  const maintenanceCases = [
    {
      logo: lightLogo,
      equipment: ["ZQ521"],
      equipmentImages: [zq521Equipment],
    },
    {
      logo: casaEVideoLogo,
      equipment: ["MC9090", "TC210K"],
      equipmentImages: [mc9090Equipment, tc21Equipment],
    },
  ];

  const team = [
    { name: "Jefferson Rodrigues", photo: jeffersonPhoto },
    { name: "Carlos Silveira", photo: carlosPhoto },
    { name: "Ian Oliveira", photo: ianPhoto },
  ];

  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Cases de Manutenção */}
        <div
          ref={casesRef}
          className={`mb-12 sm:mb-16 lg:mb-20 transition-all duration-1000 ease-out ${
            casesVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-16 scale-95"
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
            {maintenanceCases.map((caseItem, index) => (
              <div
                key={index}
                className={`bg-card/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 md:p-8 border border-border/50 hover:border-primary/50 transition-all duration-700 ease-out hover:scale-105 ${
                  casesVisible ? 'opacity-100 translate-x-0' : `opacity-0 ${index === 0 ? '-translate-x-12' : 'translate-x-12'}`
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Logo do Cliente */}
                <div className="flex justify-center mb-4 sm:mb-6">
                  <img
                    src={caseItem.logo}
                    alt="Client Logo"
                    className="h-12 sm:h-14 md:h-16 lg:h-20 w-auto object-contain"
                  />
                </div>

                {/* Título do Case */}
                <div className="text-center mb-4 sm:mb-6">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-foreground mb-3">
                    Case manutenção
                  </h3>
                </div>

                {/* Equipamentos */}
                <div className="space-y-6">
                  {caseItem.equipment.map((equip, equipIndex) => (
                    <div key={equipIndex} className="flex flex-col items-center">
                      <p className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-4">
                        {equip}
                      </p>
                      <img
                        src={caseItem.equipmentImages[equipIndex]}
                        alt={equip}
                        className="w-full max-w-[200px] sm:max-w-[240px] md:max-w-[280px] h-auto object-contain transition-all duration-500 hover:drop-shadow-[0_0_25px_rgba(255,59,59,0.6)] hover:scale-105"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Equipe Técnica */}
        <div
          ref={teamRef}
          className={`transition-all duration-1000 ease-out ${
            teamVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-16 scale-95"
          }`}
        >
          <h2 className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-3 sm:mb-4 text-foreground px-4 transition-all duration-700 ${
            teamVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            Quem cuida da sua operação quando ela vem para Nimal
          </h2>

          {/* Fotos dos Colaboradores */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-4 md:gap-6 lg:gap-8 mt-8 sm:mt-10 md:mt-12">
            {team.map((member, index) => (
              <div 
                key={index} 
                className={`flex flex-col items-center transition-all duration-700 ease-out ${
                  teamVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${(index + 1) * 150}ms` }}
              >
                <div className="w-40 h-40 sm:w-44 sm:h-44 md:w-52 md:h-52 lg:w-56 lg:h-56 rounded-full overflow-hidden border-4 border-primary/30 hover:border-primary transition-all duration-500 hover:scale-110 hover:shadow-[0_0_30px_rgba(255,59,59,0.5)]">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl font-semibold text-foreground text-center px-2">
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
