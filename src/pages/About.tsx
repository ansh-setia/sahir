import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Globe, Users } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-[#faf7f2] text-[#1a1a1a]">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 text-center container mx-auto px-6">
        <h1 className="text-6xl font-extrabold mb-4 text-[#1a1a1a]">
          About <span className="text-[#c9a552]">Us</span>
        </h1>
        <p className="text-[#6c6c6c] max-w-2xl mx-auto text-lg">
          Your trusted partner in creating unforgettable travel experiences.
        </p>
      </section>

      {/* Our Story */}
      <section className="container mx-auto px-6 max-w-4xl pb-20">
        <h2 className="text-3xl font-bold mb-6 text-[#1a1a1a]">Our Story</h2>
        <p className="text-[#6c6c6c] leading-relaxed text-lg mb-4">
          VRISHABDHVAJ VOYAGES was born from a passion for exploring the most
          beautiful destinations and sharing unforgettable experiences with travelers.
        </p>
        <p className="text-[#6c6c6c] leading-relaxed text-lg mb-4">
          Whether mountains, beaches, cultural escapes or luxury retreats —
          we design journeys that feel effortless, unique and deeply personal.
        </p>
      </section>

      {/* Why Choose Us */}
      <section className="container mx-auto px-6 pb-24">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#1a1a1a]">
          Why Choose Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-white border-none shadow-lg rounded-2xl text-center">
            <CardContent className="py-10">
              <Heart className="w-10 h-10 text-[#c9a552] mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Personalized Plans</h3>
              <p className="text-[#6c6c6c]">Every journey is crafted uniquely for you.</p>
            </CardContent>
          </Card>

          <Card className="bg-white border-none shadow-lg rounded-2xl text-center">
            <CardContent className="py-10">
              <Globe className="w-10 h-10 text-[#c9a552] mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Expert Guidance</h3>
              <p className="text-[#6c6c6c]">Handled by experienced travel professionals.</p>
            </CardContent>
          </Card>

          <Card className="bg-white border-none shadow-lg rounded-2xl text-center">
            <CardContent className="py-10">
              <Users className="w-10 h-10 text-[#c9a552] mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">24/7 Assistance</h3>
              <p className="text-[#6c6c6c]">Your support team is always a call away.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Founder */}
      <section className="container mx-auto px-6 max-w-4xl pb-32">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#1a1a1a]">
          Meet Our Founder
        </h2>

        <div className="bg-white shadow-lg rounded-3xl p-10 flex flex-col md:flex-row items-center gap-10">
          <div className="w-40 h-40 rounded-full bg-[#c9a552] text-white font-bold text-5xl flex items-center justify-center">
            MR
          </div>

          <div className="flex-1">
            <h3 className="text-2xl font-bold mb-1 text-[#1a1a1a]">Mohit Raina</h3>
            <p className="text-[#c9a552] font-medium mb-4">Founder & CEO</p>
            <p className="text-[#6c6c6c] text-lg leading-relaxed">
              Mohit’s vision is to make luxury travel accessible, seamless, and deeply meaningful.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
