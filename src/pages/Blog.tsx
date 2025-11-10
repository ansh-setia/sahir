import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import kashmir from "@/assets/kashmir.jpg";
import ladakh from "@/assets/ladakh.jpg";

import thailand from "@/assets/thailand.jpg";


const blogPosts = [
  {
    title: "Top 5 Places to Visit in Ladakh",
    excerpt:
      "Discover the most breathtaking destinations in the land of high passes – Pangong Lake, Nubra Valley, Magnetic Hill & more.",
    image: ladakh,
    date: "October 15, 2024",
    category: "Travel Guide",
  },
  {
    title: "Kashmir: A Paradise on Earth",
    excerpt:
      "Stunning valleys, serene lakes, snowfall joy & unmatched hospitality. Here is how to plan your perfect Kashmir escape.",
    image: kashmir,
    date: "September 28, 2024",
    category: "Destination Guide",
  },
  {
    title: "Thailand Travel Tips: What You Need to Know",
    excerpt:
      "First time to Thailand? Here’s what to expect, hidden gems, street food must-trys & cultural etiquette.",
    image: thailand,
    date: "August 12, 2024",
    category: "Travel Tips",
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">

          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 mb-4">
              Travel Tips &{" "}
              <span className="bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-transparent bg-clip-text">
                Stories
              </span>
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Handpicked travel insights crafted by real explorers.
            </p>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogPosts.map((post, i) => (
              <Card
                key={i}
                className="rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-500 overflow-hidden bg-white"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={post.image}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    alt={post.title}
                  />
                  <span className="absolute top-4 left-4 bg-[#d4af37] text-white px-3 py-1 rounded-full text-xs font-semibold shadow-sm">
                    {post.category}
                  </span>
                </div>

                <CardHeader>
                  <p className="text-sm text-gray-500">{post.date}</p>
                  <h3 className="text-xl font-bold text-gray-900 leading-snug">
                    {post.title}
                  </h3>
                </CardHeader>

                <CardContent>
                  <p className="text-gray-600">{post.excerpt}</p>
                </CardContent>

                <CardFooter>
                  <Button
                    variant="outline"
                    className="w-full border-[#d4af37] text-[#b8860b] hover:bg-[#d4af37] hover:text-white transition-all"
                    onClick={() =>
                      window.open("https://www.instagram.com/vrishab_voyages", "_blank")
                    }
                  >
                    Read More on Instagram
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* Coming Soon Banner */}
          <div className="mt-20 bg-gray-50 border border-gray-200 rounded-2xl p-14 text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              More Travel Journals Coming Soon ✈️
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our writers are exploring new destinations. Stay connected with us on
              Instagram for upcoming stories & travel moments.
            </p>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
