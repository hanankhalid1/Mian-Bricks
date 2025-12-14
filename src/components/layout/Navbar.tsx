import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import logo from "@/assets/logo.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
  { name: "About Us", path: "/about" },
  { name: "Clients", path: "/clients" },
  { name: "Contact Us", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className="hidden lg:block bg-primary text-primary-foreground py-2">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-6">
              <a
                href="tel:03006618358"
                className="flex items-center gap-2 hover:text-accent transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>+92 300 6618358</span>
              </a>
              <a
                href="mailto:mianbricksinfo@gmail.com"
                className="flex items-center gap-2 hover:text-accent transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>mianbricksinfo@gmail.com</span>
              </a>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Main Jhumra Road, Faisalabad</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={cn(
          "sticky top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-background/98 backdrop-blur-lg shadow-lg border-b border-border"
            : "bg-background shadow-sm border-b border-border"
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-14 h-14 rounded-full overflow-hidden">
                <img
                  src={logo} // use the imported logo
                  alt="Mian Bricks"
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="block">
                <h1 className="text-lg sm:text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  Mian Bricks
                </h1>
                <p className="text-[10px] sm:text-xs text-muted-foreground flex items-center gap-1">
                  {/* <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span> */}
                  Quality Since 1999
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center">
              <div className="flex items-center bg-muted/50 rounded-full px-2 py-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={cn(
                      "px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 relative",
                      location.pathname === link.path
                        ? "bg-primary text-primary-foreground shadow-md"
                        : "text-muted-foreground hover:text-foreground hover:bg-background/80"
                    )}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-3">
              <Button
                asChild
                size="lg"
                className="rounded-full shadow-lg hover:shadow-xl bg-gradient-to-r from-primary to-brick-dark hover:from-brick-dark hover:to-primary transition-all duration-300"
              >
                <Link to="/contact" className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  Get Free Quote
                </Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className={cn(
                "lg:hidden p-3 rounded-xl transition-all duration-300",
                isOpen
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-foreground hover:bg-primary hover:text-primary-foreground"
              )}
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          <div
            className={cn(
              "lg:hidden overflow-hidden transition-all duration-300 ease-in-out",
              isOpen ? "max-h-[500px] opacity-100 pb-6" : "max-h-0 opacity-0"
            )}
          >
            <div className="pt-4 border-t border-border">
              <div className="flex flex-col gap-2">
                {navLinks.map((link, index) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    style={{ animationDelay: `${index * 50}ms` }}
                    className={cn(
                      "px-4 py-3.5 rounded-xl text-sm font-medium transition-all duration-300 flex items-center gap-3",
                      isOpen && "animate-fade-in",
                      location.pathname === link.path
                        ? "bg-gradient-to-r from-primary to-brick-dark text-primary-foreground shadow-md"
                        : "text-foreground hover:bg-muted"
                    )}
                  >
                    <span
                      className={cn(
                        "w-2 h-2 rounded-full",
                        location.pathname === link.path
                          ? "bg-accent"
                          : "bg-muted-foreground/30"
                      )}
                    ></span>
                    {link.name}
                  </Link>
                ))}
              </div>

              {/* Mobile Contact Info */}
              <div className="mt-4 pt-4 border-t border-border space-y-3">
                <a
                  href="tel:03006618358"
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors px-4"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Phone className="w-4 h-4 text-primary" />
                  </div>
                  <span>+92 300 6618358</span>
                </a>
                <a
                  href="mailto:mianbricksinfo@gmail.com"
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors px-4"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Mail className="w-4 h-4 text-primary" />
                  </div>
                  <span>mianbricksinfo@gmail.com</span>
                </a>
              </div>

              <div className="px-4 pt-4">
                <Button
                  asChild
                  className="w-full rounded-xl h-12 bg-gradient-to-r from-primary to-brick-dark hover:from-brick-dark hover:to-primary shadow-lg"
                >
                  <Link
                    to="/contact"
                    className="flex items-center justify-center gap-2"
                  >
                    <Phone className="w-4 h-4" />
                    Get Free Quote
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
