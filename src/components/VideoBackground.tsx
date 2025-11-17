import backgroundVideo from "@/assets/fundo_video.mp4";

const VideoBackground = () => {
  return (
    <div className="fixed inset-0 z-0 bg-black">
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-60"
      >
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      <div className="absolute inset-0 bg-black/20" />
    </div>
  );
};

export default VideoBackground;
