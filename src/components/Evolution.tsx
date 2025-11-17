import modecLogo from "@/assets/modec-logo.png";
import sc9Equipment from "@/assets/sc9-zebra-bartec.webp";
import cocaColaAndinaLogo from "@/assets/coca-cola-andina-logo.webp";
import tc83Equipment from "@/assets/tc83-zebra.png";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Evolution = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-6 sm:py-10 lg:py-14 px-4 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Segmento: Indústria */}
        <div 
          ref={ref}
          className={`mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 text-center">
            <span className="text-primary">Indústria</span>
          </h2>

          {/* Case: MODEC */}
          <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-border/50 mb-6">
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              {/* Logo do Cliente */}
              <div className="flex-shrink-0">
                <img 
                  src={modecLogo} 
                  alt="MODEC Logo" 
                  className="h-16 sm:h-20 w-auto object-contain"
                />
              </div>

              {/* Informações do Equipamento */}
              <div className="flex-1 text-center lg:text-left">
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
                  SC9 - Zebra e Bartec
                </h3>
              </div>

              {/* Foto do Equipamento */}
              <div className="flex-shrink-0">
                <img 
                  src={sc9Equipment} 
                  alt="SC9 - Zebra e Bartec" 
                  className="w-full max-w-[300px] h-auto object-contain rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Case: Coca-Cola Andina */}
          <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-border/50">
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              {/* Logo do Cliente */}
              <div className="flex-shrink-0">
                <img 
                  src={cocaColaAndinaLogo} 
                  alt="Coca-Cola Andina Logo" 
                  className="h-16 sm:h-20 w-auto object-contain"
                />
              </div>

              {/* Informações do Equipamento */}
              <div className="flex-1 text-center lg:text-left">
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
                  TC83 - Zebra
                </h3>
              </div>

              {/* Foto do Equipamento */}
              <div className="flex-shrink-0">
                <img 
                  src={tc83Equipment} 
                  alt="TC83 - Zebra" 
                  className="w-full max-w-[300px] h-auto object-contain rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Evolution;
