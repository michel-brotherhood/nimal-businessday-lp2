import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import lightLogo from "@/assets/light-logo-new.png";
import casaEVideoLogo from "@/assets/casa-e-video-logo.png";
import zq521Equipment from "@/assets/zq521-new.webp";
import mc9090Equipment from "@/assets/mc9090-new.webp";
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
          <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-12 text-foreground transition-all duration-700 ${
            casesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            Cases de <span className="text-primary">Manutenção</span>
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {maintenanceCases.map((caseItem, index) => (
              <div
                key={index}
                className={`group bg-card/80 backdrop-blur-sm rounded-xl ${index === 0 ? 'p-5 sm:p-6' : 'p-6 sm:p-8 md:p-10'} border-2 border-border/50 hover:border-primary/70 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 ${
                  casesVisible ? 'opacity-100 translate-x-0' : `opacity-0 ${index === 0 ? '-translate-x-12' : 'translate-x-12'}`
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Logo do Cliente */}
                <div className="flex justify-center mb-6">
                  <div className="bg-background/50 rounded-lg p-3 sm:p-4">
                    <img
                      src={caseItem.logo}
                      alt="Client Logo"
                      className={`w-auto object-contain ${index === 0 ? 'h-8 sm:h-9 md:h-10' : 'h-12 sm:h-14 md:h-16'}`}
                    />
                  </div>
                </div>

                {/* Equipamentos */}
                <div className={`${index === 0 ? 'space-y-5' : 'space-y-8'}`}>
                  {caseItem.equipment.map((equip, equipIndex) => (
                    <div key={equipIndex}>
                      <div className="flex flex-col items-center">
                        <span className={`inline-block bg-primary/10 text-primary px-4 py-2 rounded-full font-semibold tracking-wide ${index === 0 ? 'text-lg sm:text-xl mb-4' : 'text-xl sm:text-2xl mb-5'}`}>
                          {equip}
                        </span>
                        <div className="bg-background/30 rounded-lg p-4 sm:p-6">
                          <img
                            src={caseItem.equipmentImages[equipIndex]}
                            alt={equip}
                            className={`h-auto object-contain transform group-hover:scale-110 transition-transform duration-500 ${index === 0 ? 'w-full max-w-[200px] sm:max-w-[240px]' : 'w-full max-w-[200px] sm:max-w-[240px] md:max-w-[280px]'}`}
                          />
                        </div>
                      </div>
                      {equipIndex < caseItem.equipment.length - 1 && (
                        <div className="my-6 flex items-center justify-center">
                          <div className="h-0.5 w-full max-w-xs bg-gradient-to-r from-transparent via-border to-transparent"></div>
                        </div>
                      )}
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
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 lg:gap-10 mt-8 sm:mt-10 md:mt-12">
            {team.map((member, index) => (
              <div 
                key={index} 
                className={`flex flex-col items-center transition-all duration-700 ease-out ${
                  teamVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${(index + 1) * 150}ms` }}
              >
                <div className="relative group/member">
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl opacity-0 group-hover/member:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative w-40 h-40 sm:w-44 sm:h-44 md:w-52 md:h-52 lg:w-56 lg:h-56 rounded-full overflow-hidden border-4 border-border group-hover/member:border-primary transition-all duration-500 group-hover/member:scale-105">
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="mt-4 sm:mt-5 bg-card/50 backdrop-blur-sm rounded-lg px-4 py-2 border border-border/50">
                  <p className="text-base sm:text-lg md:text-xl font-semibold text-foreground text-center">
                    {member.name}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default TechnicalServices;
