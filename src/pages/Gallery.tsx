import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Instagram } from "lucide-react";

import kashmir from "@/assets/kashmir.jpg";
import ladakh from "@/assets/ladakh.jpg";

import thailand from "@/assets/thailand.jpg";

import dubai from "@/assets/dubai.jpg";

import bali from "@/assets/bali.jpg";
import maldives from "@/assets/maldives.jpg";


const Gallery = () => {
  const galleryImages = [
    kashmir, ladakh, dubai, maldives, thailand, bali,
    kashmir, ladakh, dubai, maldives, thailand, bali,
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">

          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-extrabold tracking-tight mb-4 text-gray-900">
              Travel <span className="bg-gradient-to-r from-[#d4af37] to-[#b8860b] bg-clip-text text-transparent">Gallery</span>
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A glimpse into our curated journeys and unforgettable experiences.
            </p>

            <a
              href="https://www.instagram.com/vrishab_voyages"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-[#b8860b] hover:text-[#a47b07] transition-colors font-medium"
            >
              <Instagram className="w-5 h-5" />
              @vrishab_voyages
            </a>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
                onClick={() => window.open("https://www.instagram.com/vrishab_voyages", "_blank")}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <img
                  src={image}
                  alt="Travel destination"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <div className="text-center scale-95 group-hover:scale-100 transition-transform">
                    <Instagram className="w-12 h-12 text-white mb-2 drop-shadow-lg" />
                    <p className="text-white font-medium tracking-wide">View on Instagram</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <p className="text-gray-600 mb-4">Want to see more?</p>
            <a
              href="https://www.instagram.com/vrishab_voyages"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-white px-8 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg hover:scale-[1.02] transition-all"
            >
              Explore Instagram
            </a>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;
