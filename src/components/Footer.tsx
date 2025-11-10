import { Link } from "react-router-dom";
import { Instagram, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8 border-t border-white/10">
      <div className="container mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-serif tracking-wide mb-4 text-[#D7A86E]">
              VRISHABDHVAJ VOYAGES
            </h3>
            <p className="text-sm text-white/70 leading-relaxed">
              We curate refined travel experiences filled with comfort, heritage, culture, and class.
              Travel in style. Travel with grace.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#D7A86E]">Explore</h4>
            <ul className="space-y-2 text-white/75">
              {["/", "/trips", "/gallery", "/blog", "/about", "/contact"].map((link, i) => (
                <li key={i}>
                  <Link
                    to={link}
                    className="hover:text-[#D7A86E] transition-colors"
                  >
                    {link === "/" ? "Home" : link.replace("/", "").charAt(0).toUpperCase() + link.slice(2)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#D7A86E]">Contact</h4>
            <ul className="space-y-4 text-white/75">
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-[#D7A86E] flex-shrink-0" />
                <span>Sidhra Bye-Pass Road, Near Palm Riviera Apartments, Jammu, J&K</span>
              </li>
              <li className="flex gap-3">
                <Phone className="w-5 h-5 text-[#D7A86E]" />
                <span>94193-61837, 98583-39742</span>
              </li>
              <li className="flex gap-3">
                <Mail className="w-5 h-5 text-[#D7A86E]" />
                <span>mohitraina0089@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#D7A86E]">Follow Us</h4>
            <a
              href="https://www.instagram.com/vrishab_voyages"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-white/75 hover:text-[#D7A86E] transition-colors"
            >
              <Instagram className="w-6 h-6" />
              @vrishab_voyages
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-6 text-center text-white/60 text-sm">
          © {new Date().getFullYear()} VRISHABDHVAJ VOYAGES — Crafted in Elegance.
        </div>

        {/* Developer Credit */}
        <div className="mt-2 text-center text-white/40 text-xs">
          Designed & Developed by{" "}
          <a
            href="https://portfolio-one-mauve-96.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#D7A86E] hover:text-white transition-colors"
          >
            Ansh Setia
          </a>{" "}
          • <a href="tel:9149151900" className="hover:text-white transition-colors">
            9149151900
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
