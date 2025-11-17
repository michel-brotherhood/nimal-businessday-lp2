import nimalLogo from "@/assets/nimal-logo.png";
import zebraLogo from "@/assets/zebra-logo.svg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Hero = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="relative min-h-[70vh] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Content */}
      <div 
        ref={ref}
        className={`relative z-10 max-w-6xl mx-auto text-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {/* Business Day 2025 */}
        <div className="mb-4 sm:mb-6">
          <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-light text-primary text-center tracking-wider animate-pulse-slow drop-shadow-[0_0_15px_rgba(255,59,59,0.6)]">
            Business Day 2025
          </h2>
        </div>

        {/* Logos - Smaller */}
        <div className="flex items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 mb-8 sm:mb-12 lg:mb-16 flex-wrap">
          <img 
            src={nimalLogo} 
            alt="Nimal Tecnologia" 
            className="h-10 sm:h-12 md:h-14 lg:h-16 xl:h-20 object-contain"
          />
          <div className="w-px h-10 sm:h-12 md:h-14 bg-white/80 hidden sm:block" />
          <img 
            src={zebraLogo} 
            alt="Zebra" 
            className="h-8 sm:h-10 md:h-12 lg:h-14 xl:h-16 object-contain brightness-0 invert"
          />
        </div>

        {/* Main Title with Animation */}
        <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent leading-tight animate-pulse-slow transition-all duration-700 px-4 ${
          isVisible ? 'drop-shadow-[0_0_25px_rgba(255,59,59,0.8)] animate-glow' : ''
        }`}>
          Serviços técnicos
        </h1>
      </div>
    </section>
  );
};

export default Hero;
