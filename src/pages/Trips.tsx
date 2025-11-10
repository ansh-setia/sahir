import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DestinationCard from "@/components/DestinationCard";
import ItineraryModal from "@/components/ItineraryModal";
import kashmir from "@/assets/kashmir.jpg";
import ladakh from "@/assets/ladakh.jpg";
import chardham from "@/assets/chardham.webp";
import uttarakhand from "@/assets/uttarakhand.jpg";
import himachal from "@/assets/himachal.png";
import punjab from "@/assets/punjab.jpg";
import rajasthan from "@/assets/rajasthan.jpg";
import delhi from "@/assets/delhi.jpg";
import southindia from "@/assets/southindia.jpg";
import thailand from "@/assets/thailand.jpg";
import singapore from "@/assets/singapore.jpg";
import baku from "@/assets/baku.jpg";
import azerbaijan from "@/assets/azerbaijan.jpg";
import dubai from "@/assets/dubai.jpg";
import ooty from "@/assets/ooty.jpg";
import bali from "@/assets/bali.jpg";
import rameshwaram from "@/assets/rameshwaram.webp";
import vietnam from "@/assets/vietnam.jpg";
import mauritius from "@/assets/mauritius.jpg";
import malaysia from "@/assets/malaysia.jpg";
import maldives from "@/assets/maldives.jpg";
import kerala from "@/assets/kerala.jpeg";

const domesticDestinations = [
  { name: "Kashmir", image: kashmir },
  { name: "Ladakh", image: ladakh },
  { name: "Char Dham", image: chardham },
  { name: "Uttarakhand", image: uttarakhand },
  { name: "Himachal Pradesh", image: himachal },
  { name: "Punjab", image: punjab },
  { name: "Rajasthan", image: rajasthan },
  { name: "Delhi", image: delhi },
  { name: "Ooty", image: ooty },
  { name: "Rameshwaram", image: rameshwaram },
  { name: "Kerala", image: kerala },
];

const internationalDestinations = [
  { name: "Thailand", image: thailand },
  { name: "Singapore", image: singapore },
  { name: "Baku", image: baku },
  { name: "Azerbaijan", image: azerbaijan },
  { name: "Dubai", image: dubai },
  { name: "Bali", image: bali },
  { name: "Vietnam", image: vietnam },
  { name: "Mauritius", image: mauritius },
  { name: "Malaysia", image: malaysia },
  { name: "Maldives", image: maldives },
];

const Trips = () => {
  const [selectedDestination, setSelectedDestination] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewItinerary = (destination: string) => {
    setSelectedDestination(destination);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">

          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-light tracking-wide text-gray-900 mb-4">
              Our <span className="text-[#C7A86A] font-semibold">Destinations</span>
            </h1>

            <p className="text-gray-600 max-w-2xl mx-auto mb-3">
              Explore our curated experiences across India and around the world.
            </p>

            <p className="text-[#C7A86A] font-medium text-lg">
              ✈️ Trip Bookings Available PAN India
            </p>
          </div>

          {/* Domestic */}
          <div className="mb-20">
            <h2 className="text-3xl font-semibold text-gray-900 mb-8">
              Domestic <span className="text-[#C7A86A]">Destinations</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {domesticDestinations.map((destination) => (
                <DestinationCard
                  key={destination.name}
                  name={destination.name}
                  image={destination.image}
                  onViewItinerary={() => handleViewItinerary(destination.name)}
                />
              ))}
            </div>
          </div>

          {/* International */}
          <div>
            <h2 className="text-3xl font-semibold text-gray-900 mb-8">
              International <span className="text-[#C7A86A]">Destinations</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {internationalDestinations.map((destination) => (
                <DestinationCard
                  key={destination.name}
                  name={destination.name}
                  image={destination.image}
                  onViewItinerary={() => handleViewItinerary(destination.name)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {selectedDestination && (
        <ItineraryModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          destination={selectedDestination}
        />
      )}

      <Footer />
    </div>
  );
};

export default Trips;
