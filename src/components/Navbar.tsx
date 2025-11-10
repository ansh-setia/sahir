import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Trips", path: "/trips" },
    // { name: "Gallery", path: "/gallery" },
    { name: "Blog", path: "/blog" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500
        ${isScrolled
          ? "bg-white/90 backdrop-blur-xl border-b border-[#e7d8c3] shadow-[0_8px_30px_rgba(0,0,0,0.18)]"
          : "bg-white/60 backdrop-blur-md"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-24">

          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={new URL("/logo.png", import.meta.url).href}
              alt="VRISHABDHVAJ VOYAGES"
              className="h-10 w-auto object-contain transition-all duration-300"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`tracking-wide uppercase text-sm font-medium relative group 
                ${isActive(link.path)
                  ? "text-[#C7A86A]"
                  : "text-[#555] hover:text-[#C7A86A]"
                } transition`}
              >
                {link.name}
                <span
                  className={`absolute -bottom-1 left-0 h-[2px] bg-[#C7A86A] transition-all duration-300 
                  ${isActive(link.path) ? "w-full" : "w-0 group-hover:w-full"}`}
                />
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-[#444]">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-6 space-y-4 border-t border-[#e7d8c3] bg-white/95 backdrop-blur-xl">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block tracking-wide text-base 
                  ${isActive(link.path) ? "text-[#C7A86A]" : "text-[#555] hover:text-[#C7A86A]"}
                `}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
