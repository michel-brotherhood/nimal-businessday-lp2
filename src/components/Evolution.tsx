import nissanLogo from "@/assets/nissan-logo.svg";
import ambevLogo from "@/assets/ambev-logo.png";
import nissan1 from "@/assets/nissan-1.jpeg";
import nissan2 from "@/assets/nissan-2.jpeg";
import nissan3 from "@/assets/nissan-3.jpeg";
import nissan4 from "@/assets/nissan-4.jpeg";
import nissan5 from "@/assets/nissan-5.jpeg";
import nissan6 from "@/assets/nissan-6.jpeg";
import ambev1 from "@/assets/ambev-1.jpeg";
import ambev2 from "@/assets/ambev-2.jpeg";
import ambev3 from "@/assets/ambev-3.jpeg";
import ambev4 from "@/assets/ambev-4.jpeg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Evolution = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();
  const { ref: nissanRef, isVisible: nissanVisible } = useScrollAnimation();
  const { ref: ambevRef, isVisible: ambevVisible } = useScrollAnimation();

  const [emblaRefNissan, emblaApiNissan] = useEmblaCarousel({ loop: true });
  const [emblaRefAmbev, emblaApiAmbev] = useEmblaCarousel({ loop: true });

  const scrollPrevNissan = useCallback(() => {
    if (emblaApiNissan) emblaApiNissan.scrollPrev();
  }, [emblaApiNissan]);

  const scrollNextNissan = useCallback(() => {
    if (emblaApiNissan) emblaApiNissan.scrollNext();
  }, [emblaApiNissan]);

  const scrollPrevAmbev = useCallback(() => {
    if (emblaApiAmbev) emblaApiAmbev.scrollPrev();
  }, [emblaApiAmbev]);

  const scrollNextAmbev = useCallback(() => {
    if (emblaApiAmbev) emblaApiAmbev.scrollNext();
  }, [emblaApiAmbev]);

  const nissanImages = [nissan1, nissan2, nissan3, nissan4, nissan5, nissan6];
  const ambevImages = [ambev1, ambev2, ambev3, ambev4];

  return (
    <section className="py-6 sm:py-10 lg:py-14 px-4 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-12 sm:mb-16 pb-4 transition-all duration-1000 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent px-4 leading-tight pb-2">
            IOT e RFID
          </h2>
        </div>

        {/* IOT and RFID Introduction */}
        <div 
          ref={contentRef}
          className={`max-w-5xl mx-auto mb-16 sm:mb-20 transition-all duration-1000 delay-200 ${
            contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="bg-white border border-border rounded-xl p-6 sm:p-8 lg:p-10">
            <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-foreground">O que é RFID?</h3>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6">
              RFID ou Identificação por radiofrequência é um aparelho de identificação automática através de 
              sinais de rádio que recuperam e armazenam dados remotos através de etiquetas RFID.
            </p>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8">
              Esta etiqueta é um transponder, um pequeno objeto que é colocado em embalagens ou produtos, 
              que contém chips de silício e antenas que permitem captar os sinais de rádio enviados pela 
              base transmissora.
            </p>
            
            <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-foreground">Internet das Coisas (IOT)</h3>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              A Internet das Coisas (IoT) revoluciona a forma como interagimos com dispositivos e sistemas, 
              permitindo a conexão inteligente entre objetos físicos e o mundo digital. Através de sensores, 
              conectividade e análise de dados em tempo real, a IoT possibilita automação, monitoramento 
              remoto e tomada de decisões baseadas em dados, transformando operações e aumentando a 
              eficiência em diversos setores industriais.
            </p>
          </div>
        </div>

        {/* Cases Nissan */}
        <div 
          ref={nissanRef}
          className={`mb-16 sm:mb-20 transition-all duration-1000 delay-400 ${
            nissanVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="bg-white border border-border rounded-xl p-6 sm:p-8 lg:p-10">
            <div className="flex items-center justify-center mb-8">
              <img 
                src={nissanLogo} 
                alt="Nissan" 
                className="h-16 sm:h-20 md:h-24 w-auto object-contain"
              />
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 text-foreground">
              Cases
            </h3>
            
            <div className="relative">
              <div className="overflow-hidden" ref={emblaRefNissan}>
                <div className="flex">
                  {nissanImages.map((image, index) => (
                    <div key={index} className="flex-[0_0_100%] min-w-0 pl-4">
                      <div className="bg-background/50 rounded-lg overflow-hidden border border-border">
                        <img 
                          src={image} 
                          alt={`Case Nissan ${index + 1}`} 
                          className="w-full h-96 object-cover"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <Button
                variant="outline"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm"
                onClick={scrollPrevNissan}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              
              <Button
                variant="outline"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm"
                onClick={scrollNextNissan}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Cases Ambev */}
        <div 
          ref={ambevRef}
          className={`mb-16 sm:mb-20 transition-all duration-1000 delay-500 ${
            ambevVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="bg-white border border-border rounded-xl p-6 sm:p-8 lg:p-10">
            <div className="flex items-center justify-center mb-8">
              <img 
                src={ambevLogo} 
                alt="Ambev" 
                className="h-16 sm:h-20 md:h-24 w-auto object-contain"
              />
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 text-foreground">
              Cases
            </h3>
            
            <div className="relative">
              <div className="overflow-hidden" ref={emblaRefAmbev}>
                <div className="flex">
                  {ambevImages.map((image, index) => (
                    <div key={index} className="flex-[0_0_100%] min-w-0 pl-4">
                      <div className="bg-background/50 rounded-lg overflow-hidden border border-border">
                        <img 
                          src={image} 
                          alt={`Case Ambev ${index + 1}`} 
                          className="w-full h-96 object-cover"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <Button
                variant="outline"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm"
                onClick={scrollPrevAmbev}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              
              <Button
                variant="outline"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm"
                onClick={scrollNextAmbev}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Evolution;
