import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

interface ItineraryModalProps {
  isOpen: boolean;
  onClose: () => void;
  destination: string;
}

const ItineraryModal = ({ isOpen, onClose, destination }: ItineraryModalProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    departureDate: "",
    days: 3,
    adults: 2,
    children: 0,
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await supabase.functions.invoke("send-inquiry", {
        body: { ...formData, destination },
      });

      toast({
        title: "Request Sent ✨",
        description: "Our travel concierge will contact you shortly.",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        departureDate: "",
        days: 3,
        adults: 2,
        children: 0,
        message: "",
      });

      onClose();
    } catch (error) {
      toast({
        title: "Failed to Send",
        description: "Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className="
          max-w-xl rounded-3xl
          bg-white/95 backdrop-blur-lg
          border border-[#d4af37]/35
          shadow-[0_8px_45px_rgba(212,175,55,0.23)]
          px-8 py-10
        "
      >
        <DialogHeader className="text-center mb-2">
          <DialogTitle className="text-3xl font-serif font-semibold tracking-wide text-[#C5A253]">
            Plan Your Trip to {destination}
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Text Inputs */}
          {[
            ["name", "Full Name", "text"],
            ["email", "Email Address", "email"],
            ["phone", "Phone Number", "tel"],
            ["departureDate", "Departure Date", "date"],
          ].map(([key, label, type]) => (
            <div key={key}>
              <Label className="text-[#7f6a3b] font-medium">{label}</Label>
              <Input
                type={type}
                required
                value={(formData as any)[key]}
                onChange={(e) => setFormData({ ...formData, [key]: e.target.value })}
                className="
                  bg-white border border-[#d4af37]/25 text-black rounded-xl
                  shadow-inner
                  focus:border-[#d4af37] focus:ring-[#d4af37]/40
                  transition-all
                "
              />
            </div>
          ))}

          {/* Number Inputs */}
          <div className="grid grid-cols-3 gap-4">
            {[
              ["days", "Days"],
              ["adults", "Adults"],
              ["children", "Children"],
            ].map(([key, label]) => (
              <div key={key}>
                <Label className="text-[#7f6a3b] font-medium">{label}</Label>
                <Input
                  type="number"
                  min="0"
                  value={(formData as any)[key]}
                  onChange={(e) => setFormData({ ...formData, [key]: parseInt(e.target.value) })}
                  className="
                    bg-white border border-[#d4af37]/25 text-black rounded-xl
                    shadow-inner
                    focus:border-[#d4af37] focus:ring-[#d4af37]/40
                  "
                />
              </div>
            ))}
          </div>

          {/* Preferences */}
          <div>
            <Label className="text-[#7f6a3b] font-medium">Preferences</Label>
            <Textarea
              placeholder="Hotel category, transport style, special requests..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={5}
              className="
                bg-white border border-[#d4af37]/25 text-black rounded-xl
                shadow-inner
                focus:border-[#d4af37] focus:ring-[#d4af37]/40
              "
            />
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isSubmitting}
            className="
              w-full py-4 text-lg font-semibold rounded-xl
              bg-gradient-to-r from-[#d4af37] to-[#f7e9b5]
              text-black
              shadow-[0_6px_35px_rgba(212,175,55,0.35)]
              hover:shadow-[0_8px_55px_rgba(212,175,55,0.55)]
              hover:scale-[1.03]
              transition-all
            "
          >
            {isSubmitting ? "Sending..." : "Send Request"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ItineraryModal;
