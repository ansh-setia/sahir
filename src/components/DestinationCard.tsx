import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface DestinationCardProps {
  name: string;
  image: string;
  onViewItinerary: () => void;
}

const DestinationCard = ({ name, image, onViewItinerary }: DestinationCardProps) => {
  return (
    <Card className="group overflow-hidden relative rounded-2xl border border-[#d4af37]/30 backdrop-blur-xl bg-white/5 hover:border-[#d4af37]/80 transition-all duration-700 cursor-pointer shadow-[0_0_25px_rgba(212,175,55,0.15)] hover:shadow-[0_0_45px_rgba(212,175,55,0.30)]">

      {/* Image */}
      <div className="relative h-72 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-[1400ms] group-hover:scale-110"
        />

        {/* Luxury Fade */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Destination Name */}
        <h3 className="absolute bottom-6 left-6 text-3xl font-extrabold tracking-wide text-white drop-shadow-xl">
          {name}
        </h3>
      </div>

      {/* CTA Button */}
      <div className="p-5">
        <Button
          onClick={onViewItinerary}
          className="w-full py-3 rounded-xl font-semibold text-sm uppercase tracking-wide bg-gradient-to-r from-[#d4af37] to-[#f7e99f] text-black shadow-lg hover:shadow-gold-glow hover:scale-105 transition-all duration-500"
        >
          View Itinerary
        </Button>
      </div>

    </Card>
  );
};

export default DestinationCard;
