import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Delhi",
    text: "Our Kashmir trip was absolutely magical! The team took care of every detail, from hotels to sightseeing. Highly recommend VRISHABDHVAJ VOYAGES!",
    rating: 5,
  },
  {
    name: "Rajesh Kumar",
    location: "Mumbai",
    text: "The Ladakh adventure was a dream come true. Professional service, great itinerary, and unforgettable memories. Will definitely book again!",
    rating: 5,
  },
  {
    name: "Anjali Mehta",
    location: "Bangalore",
    text: "Maldives honeymoon package exceeded our expectations. Beautiful resorts, smooth arrangements, and excellent customer support throughout.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-black relative overflow-hidden">

      {/* Soft Gold Glow Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(215,168,110,0.12),transparent_60%)]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-14">
          <h2 className="text-5xl font-extrabold tracking-wide text-white">
            Traveler <span className="text-[#D7A86E]">Stories</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto mt-3">
            Hear from those who explored the world with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="
                group relative p-7 rounded-2xl
                bg-white/5 backdrop-blur-xl
                border border-[#d7a86e40]
                shadow-[0_0_25px_rgba(215,168,110,0.15)]
                hover:shadow-[0_0_55px_rgba(215,168,110,0.45)]
                hover:border-[#D7A86E]
                transition-all duration-700
              "
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-[#D7A86E] fill-[#D7A86E] drop-shadow-[0_0_6px_rgba(215,168,110,0.7)]"
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-white/90 text-lg leading-relaxed italic mb-6">
                “{testimonial.text}”
              </p>

              {/* Name + City */}
              <div>
                <p className="text-[#D7A86E] font-semibold text-lg">
                  {testimonial.name}
                </p>
                <p className="text-white/60 text-sm">{testimonial.location}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
