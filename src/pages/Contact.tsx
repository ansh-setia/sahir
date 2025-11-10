import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const { toast } = useToast();

  const handleWhatsApp = () => {
    const message = `Hi, I'd like to plan my next trip with VRISHABDHVAJ VOYAGES.\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nMessage: ${formData.message}`;
    const whatsappUrl = `https://wa.me/919419361837?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");

    toast({
      title: "Redirecting to WhatsApp...",
      description: "One of our travel specialists will get back to you shortly.",
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleWhatsApp();
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-6xl">
          
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 mb-4">
              Get in{" "}
              <span className="bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-transparent bg-clip-text">
                Touch
              </span>
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Tell us your travel dreams — we’ll handle the rest.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Info Section */}
            <div className="space-y-10">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#d4af3740] flex items-center justify-center">
                    <MapPin className="text-[#b8860b] w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Address</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Sidhra Bye-Pass Road<br/>Near Palm Riviera Apartments<br/>Jammu, J&K
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#d4af3740] flex items-center justify-center">
                    <Phone className="text-[#b8860b] w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone</h3>
                    <p className="text-gray-600">94193-61837</p>
                    <p className="text-gray-600">98583-39742</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#d4af3740] flex items-center justify-center">
                    <Mail className="text-[#b8860b] w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">mohitraina0089@gmail.com</p>
                  </div>
                </div>
              </div>

              {/* Map Box */}
              <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-lg h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3359.8!2d74.8723!3d32.6927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzLCsDQxJzMzLjciTiA3NMKwNTInMjAuMyJF!5e0!3m2!1sen!2sin!4v1234567890"
                  className="w-full h-full"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Form Section */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label>Name</Label>
                <Input
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value })}
                  className="border-gray-300"
                />
              </div>

              <div>
                <Label>Email</Label>
                <Input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value })}
                  className="border-gray-300"
                />
              </div>

              <div>
                <Label>Phone</Label>
                <Input
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value })}
                  className="border-gray-300"
                />
              </div>

              <div>
                <Label>Message</Label>
                <Textarea
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value })}
                  className="border-gray-300"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-white font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                Send Message via WhatsApp
              </Button>
            </form>

          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
