import Hero from "@/components/Hero";
import TechnicalServices from "@/components/TechnicalServices";
import Footer from "@/components/Footer";
import VideoBackground from "@/components/VideoBackground";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <VideoBackground />
      <div className="relative z-10">
        <Hero />
        <TechnicalServices />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
