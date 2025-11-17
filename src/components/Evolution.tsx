import { useState } from "react";
import modecLogo from "@/assets/modec-logo-white.png";
import sc9Equipment from "@/assets/sc9-zebra-bartec.webp";
import cocaColaAndinaLogo from "@/assets/coca-cola-andina-logo.webp";
import tc83Equipment from "@/assets/tc83-zebra.png";
import mundialLogo from "@/assets/mundial-logo.png";
import mc93Equipment from "@/assets/mc93-zebra.webp";
import dufryLogo from "@/assets/dufry-logo.png";
import mc33Equipment from "@/assets/mc33-zebra.webp";
import aguasDoRioLogo from "@/assets/aguas-do-rio-logo.webp";
import zq521Equipment from "@/assets/zq521-zebra.webp";
import vibraLogo from "@/assets/vibra-logo.png";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, X } from "lucide-react";

const Evolution = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [searchTerm, setSearchTerm] = useState("");

  const segments = [
    {
      name: "Indústria",
      cases: [
        {
          clientName: "MODEC",
          logo: modecLogo,
          equipment: "SC9 - Zebra e Bartec",
          equipmentImage: sc9Equipment,
        },
        {
          clientName: "Coca-Cola Andina",
          logo: cocaColaAndinaLogo,
          equipment: "TC83 - Zebra",
          equipmentImage: tc83Equipment,
        },
      ],
    },
    {
      name: "Varejo",
      cases: [
        {
          clientName: "Mundial",
          logo: mundialLogo,
          equipment: "MC93 - Zebra",
          equipmentImage: mc93Equipment,
        },
        {
          clientName: "Dufry",
          logo: dufryLogo,
          equipment: "MC33 - Zebra",
          equipmentImage: mc33Equipment,
        },
      ],
    },
    {
      name: "Field Service",
      cases: [
        {
          clientName: "Águas do Rio",
          logo: aguasDoRioLogo,
          equipment: "ZQ521 - Zebra",
          equipmentImage: zq521Equipment,
        },
        {
          clientName: "Vibra",
          logo: vibraLogo,
          equipment: "ZQ521 - Zebra",
          equipmentImage: zq521Equipment,
        },
      ],
    },
  ];

  const filteredSegments = segments
    .map((segment) => ({
      ...segment,
      cases: segment.cases.filter((caseItem) => {
        if (!searchTerm) return true;
        const searchLower = searchTerm.toLowerCase();
        return (
          caseItem.clientName.toLowerCase().includes(searchLower) ||
          caseItem.equipment.toLowerCase().includes(searchLower)
        );
      }),
    }))
    .filter((segment) => segment.cases.length > 0);

  console.log("Evolution: filteredSegments", filteredSegments);
  console.log("Evolution: searchTerm", searchTerm);

  return (
    <section className="py-8 sm:py-12 lg:py-16 px-4 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Busca */}
        <div className="mb-8">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              type="text"
              placeholder="Buscar por cliente ou equipamento..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-10 bg-card/50 backdrop-blur-sm border-border/50"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>

        {/* Resultados */}
        {filteredSegments.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              Nenhum resultado encontrado para "{searchTerm}"
            </p>
          </div>
        ) : (
          filteredSegments.map((segment) => (
            <div
              key={segment.name}
              ref={ref}
              className={`mb-16 transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 text-center">
                <span className="text-primary">{segment.name}</span>
              </h2>

              <div className="space-y-6">
                {segment.cases.map((caseItem, index) => (
                  <div
                    key={index}
                    className="bg-card/50 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-border/50"
                  >
                    <div className="flex flex-col lg:flex-row gap-8 items-center">
                      {/* Logo do Cliente */}
                      <div className="flex-shrink-0">
                        <img
                          src={caseItem.logo}
                          alt={`${caseItem.clientName} Logo`}
                          className={`w-auto object-contain ${
                            caseItem.clientName === "Águas do Rio" 
                              ? "h-24 sm:h-28" 
                              : "h-16 sm:h-20"
                          }`}
                        />
                      </div>

                      {/* Informações do Equipamento */}
                      <div className="flex-1 text-center lg:text-left">
                        <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
                          {caseItem.equipment}
                        </h3>
                      </div>

                      {/* Foto do Equipamento */}
                      <div className="flex-shrink-0">
                        <img
                          src={caseItem.equipmentImage}
                          alt={caseItem.equipment}
                          className="w-full max-w-[250px] h-auto object-contain rounded-lg"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default Evolution;
