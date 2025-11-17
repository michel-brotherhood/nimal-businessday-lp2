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
import showcaseVideo from "@/assets/showcase-video.mp4";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Evolution = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();
  const { ref: nissanRef, isVisible: nissanVisible } = useScrollAnimation();
  const { ref: ambevRef, isVisible: ambevVisible } = useScrollAnimation();
  const { ref: videoRef, isVisible: videoVisible } = useScrollAnimation();

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
          <div className="bg-card/80 backdrop-blur-md border border-border rounded-xl p-6 sm:p-8 lg:p-10">
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-4 sm:mb-6">
              RFID ou Identificação por radiofrequência é um aparelho de identificação automática através de 
              sinais de rádio que recuperam e armazenam dados remotos através de etiquetas RFID.
            </p>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Esta etiqueta é um transponder, um pequeno objeto que é colocado em embalagens ou produtos, 
              que contém chips de silício e antenas que permitem captar os sinais de rádio enviados pela 
              base transmissora.
            </p>
          </div>
        </div>

        {/* Video Showcase */}
        <div 
          ref={videoRef}
          className={`max-w-5xl mx-auto mb-16 sm:mb-20 transition-all duration-1000 delay-300 ${
            videoVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <div className="bg-card/80 backdrop-blur-md border border-border rounded-xl overflow-hidden">
            <video 
              src={showcaseVideo}
              autoPlay 
              loop 
              muted 
              playsInline
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Cases Nissan */}
        <div 
          ref={nissanRef}
          className={`mb-16 sm:mb-20 transition-all duration-1000 delay-400 ${
            nissanVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="bg-card/80 backdrop-blur-md border border-border rounded-xl p-6 sm:p-8 lg:p-10">
            <div className="flex items-center justify-center mb-8">
              <img 
                src={nissanLogo} 
                alt="Nissan" 
                className="h-16 sm:h-20 md:h-24 w-auto object-contain"
              />
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Cases Nissan
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              <div className="bg-background/50 rounded-lg overflow-hidden border border-border">
                <img 
                  src={nissan1} 
                  alt="Case Nissan 1" 
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="bg-background/50 rounded-lg overflow-hidden border border-border">
                <img 
                  src={nissan2} 
                  alt="Case Nissan 2" 
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="bg-background/50 rounded-lg overflow-hidden border border-border">
                <img 
                  src={nissan3} 
                  alt="Case Nissan 3" 
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="bg-background/50 rounded-lg overflow-hidden border border-border">
                <img 
                  src={nissan4} 
                  alt="Case Nissan 4" 
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="bg-background/50 rounded-lg overflow-hidden border border-border">
                <img 
                  src={nissan5} 
                  alt="Case Nissan 5" 
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="bg-background/50 rounded-lg overflow-hidden border border-border">
                <img 
                  src={nissan6} 
                  alt="Case Nissan 6" 
                  className="w-full h-64 object-cover"
                />
              </div>
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
          <div className="bg-card/80 backdrop-blur-md border border-border rounded-xl p-6 sm:p-8 lg:p-10">
            <div className="flex items-center justify-center mb-8">
              <img 
                src={ambevLogo} 
                alt="Ambev" 
                className="h-16 sm:h-20 md:h-24 w-auto object-contain"
              />
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Cases Ambev
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="bg-background/50 rounded-lg overflow-hidden border border-border">
                <img 
                  src={ambev1} 
                  alt="Case Ambev 1" 
                  className="w-full h-80 object-cover"
                />
              </div>
              <div className="bg-background/50 rounded-lg overflow-hidden border border-border">
                <img 
                  src={ambev2} 
                  alt="Case Ambev 2" 
                  className="w-full h-80 object-cover"
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
