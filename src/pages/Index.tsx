import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import {
  Star,
  Users,
  Award,
  HeartHandshake,
  TrendingUp,
  Shield,
} from "lucide-react";

// Destination Images
import kashmir from "@/assets/kashmir.jpg";
import maldives from "@/assets/maldives.jpg";
import dubai from "@/assets/dubai.jpg";
import bali from "@/assets/bali.jpg";

const Index = () => {
  const navigate = useNavigate();

  const featuredDestinations = [
    { name: "Kashmir", image: kashmir, description: "Paradise on Earth" },
    { name: "Maldives", image: maldives, description: "Tropical Paradise" },
    { name: "Dubai", image: dubai, description: "City of Gold" },
    { name: "Bali", image: bali, description: "Island of Gods" },
  ];

  const stats = [
    { icon: Users, value: "5000+", label: "Happy Travelers" },
    { icon: Award, value: "20+", label: "Destinations" },
    { icon: Star, value: "4.9", label: "Rating Score" },
    { icon: TrendingUp, value: "95%", label: "Satisfaction" },
  ];

  const features = [
    {
      icon: Shield,
      title: "Safe & Verified",
      description: "We ensure complete safety and verified stays.",
    },
    {
      icon: HeartHandshake,
      title: "Personalized Experience",
      description: "Custom trips crafted exactly to your preferences.",
    },
    {
      icon: Award,
      title: "Best Price Guaranteed",
      description: "Premium services at affordable pricing.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />

      {/* Stats */}
      <section className="py-16 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((item, i) => (
            <Card
              key={i}
              className="shadow-md hover:shadow-xl transition-all duration-300 backdrop-blur-sm"
            >
              <CardContent className="p-6 text-center">
                <item.icon className="w-8 h-8 text-accent mx-auto mb-3" />
                <div className="text-3xl font-semibold">{item.value}</div>
                <p className="text-muted-foreground text-sm">{item.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Destinations */}
      <section className="py-20">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold">
            Popular <span className="text-accent">Destinations</span>
          </h2>
          <p className="text-muted-foreground">
            Choose from top-rated travel experiences
          </p>
        </div>

        <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredDestinations.map((d, i) => (
            <div
              key={i}
              className="group rounded-xl overflow-hidden cursor-pointer shadow-md hover:shadow-lg transition-all"
              onClick={() => navigate("/trips")}
            >
              <div className="relative aspect-[3/4]">
                <img
                  src={d.image}
                  alt={d.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 px-4 text-white">
                  <h3 className="text-xl font-semibold">{d.name}</h3>
                  <p className="text-sm opacity-80">{d.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button
            onClick={() => navigate("/trips")}
            className="px-10 py-6 text-lg font-semibold"
          >
            Explore All Trips
          </Button>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-secondary/10">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold">
            Why <span className="text-accent">Choose Us</span>
          </h2>
          <p className="text-muted-foreground">We deliver trust & quality</p>
        </div>

        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl">
          {features.map((f, i) => (
            <Card
              key={i}
              className="shadow-md hover:shadow-xl text-center transition-all"
            >
              <CardContent className="p-8">
                <f.icon className="w-12 h-12 text-accent mx-auto mb-5" />
                <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
                <p className="text-muted-foreground">{f.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Testimonials />

      {/* CTA */}
      <section className="py-24 text-center bg-gradient-to-r from-primary to-accent text-white">
        <h2 className="text-4xl font-bold mb-4">
          Ready to Plan Your Next Journey?
        </h2>
        <p className="text-lg opacity-90 mb-8">
          Let’s create your perfect travel story together.
        </p>
        <Button
          onClick={() => navigate("/contact")}
          variant="secondary"
          className="text-lg px-10 py-6 font-semibold"
        >
          Contact Us
        </Button>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
