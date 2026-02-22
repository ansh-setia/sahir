import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Star, Send } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { z } from "zod";

const feedbackSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  location: z.string().trim().max(100).optional(),
  message: z.string().trim().min(10, "Feedback must be at least 10 characters").max(500),
  rating: z.number().min(1).max(5),
});

const FeedbackSection = () => {
  const queryClient = useQueryClient();
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(5);
  const [hoveredStar, setHoveredStar] = useState(0);

  const { data: feedbacks = [] } = useQuery({
    queryKey: ["customer_feedback"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("customer_feedback")
        .select("*")
        .order("created_at", { ascending: false });
      if (error) throw error;
      return data;
    },
  });

  const submitMutation = useMutation({
    mutationFn: async () => {
      const validated = feedbackSchema.parse({ name, location: location || undefined, message, rating });
      const { error } = await supabase.from("customer_feedback").insert({
        name: validated.name,
        location: validated.location || null,
        message: validated.message,
        rating: validated.rating,
      });
      if (error) throw error;
    },
    onSuccess: () => {
      toast.success("Thank you for your feedback!");
      setName("");
      setLocation("");
      setMessage("");
      setRating(5);
      queryClient.invalidateQueries({ queryKey: ["customer_feedback"] });
    },
    onError: (error) => {
      if (error instanceof z.ZodError) {
        toast.error(error.errors[0].message);
      } else {
        toast.error("Failed to submit feedback. Please try again.");
      }
    },
  });

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            What Our <span className="text-accent">Travelers Say</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real experiences from real travelers who explored the world with us
          </p>
        </div>

        {/* Feedback Display */}
        {feedbacks.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {feedbacks.map((fb) => (
              <Card key={fb.id} className="bg-card border-border hover:shadow-elegant transition-shadow">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(fb.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-card-foreground mb-4 italic">"{fb.message}"</p>
                  <div>
                    <p className="font-semibold text-card-foreground">{fb.name}</p>
                    {fb.location && (
                      <p className="text-sm text-muted-foreground">{fb.location}</p>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Feedback Form */}
        <div className="max-w-xl mx-auto">
          <Card className="border-border">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-foreground mb-4 text-center">
                Share Your Experience
              </h3>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  submitMutation.mutate();
                }}
                className="space-y-4"
              >
                <Input
                  placeholder="Your Name *"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  maxLength={100}
                />
                <Input
                  placeholder="Your City (optional)"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  maxLength={100}
                />
                <Textarea
                  placeholder="Tell us about your experience... *"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  maxLength={500}
                />
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Your Rating</p>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setRating(star)}
                        onMouseEnter={() => setHoveredStar(star)}
                        onMouseLeave={() => setHoveredStar(0)}
                        className="focus:outline-none"
                      >
                        <Star
                          className={`w-7 h-7 transition-colors ${
                            star <= (hoveredStar || rating)
                              ? "fill-accent text-accent"
                              : "text-muted-foreground"
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>
                <Button
                  type="submit"
                  disabled={submitMutation.isPending}
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold"
                >
                  <Send className="w-4 h-4 mr-2" />
                  {submitMutation.isPending ? "Submitting..." : "Submit Feedback"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FeedbackSection;
