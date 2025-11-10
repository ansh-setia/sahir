import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import heroVideo from "@/assets/21_20Dragon_20Tail_20Zipline__20Zip_Line__20Zip_20Line.mp4";
import { Plane, Calendar } from "lucide-react";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={heroVideo}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Soft Cinematic Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/35 to-black/80" />

      {/* Content */}
      <div className="relative text-center px-6 max-w-4xl animate-fade-in">
        <h1 className="font-serif text-white text-5xl md:text-7xl font-light tracking-wide mb-6 leading-tight">
          Travel in{" "}
          <span className="text-[#D7A86E] font-medium">Timeless Luxury</span>
        </h1>

        <p className="text-white/90 text-lg md:text-xl mb-10 leading-relaxed">
          Curated journeys to breathtaking destinations — wrapped in elegance,
          comfort, and unforgettable memories.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            onClick={() => navigate("/trips")}
            className="px-10 py-5 rounded-full text-black font-semibold text-lg
            bg-gradient-to-r from-[#d4af37] to-[#f6e8b1]
            shadow-[0_0_25px_rgba(215,168,110,0.45)]
            hover:shadow-[0_0_45px_rgba(215,168,110,0.7)]
            transition-all flex items-center gap-2"
          >
            <Plane className="w-5 h-5" />
            Explore Destinations
          </Button>

          <Button
            size="lg"
            onClick={() => navigate("/contact")}
            className="px-10 py-5 rounded-full text-white font-medium text-lg
            border border-white/40 bg-white/10 backdrop-blur-md
            hover:border-[#d4af37] hover:text-[#d4af37] hover:bg-white/20
            transition-all flex items-center gap-2"
          >
            <Calendar className="w-5 h-5" />
            Plan Your Journey
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="h-12 w-6 border-[2px] border-white/50 rounded-full flex justify-center p-1">
          <div className="w-1 h-3 bg-white/80 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
