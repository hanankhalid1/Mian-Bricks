import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import hero1 from "@/assets/hero1.jpg";
import hero2 from "@/assets/hero2.jpg";
import hero3 from "@/assets/hero4.jpg";
import hero4 from "@/assets/hero3.jpg";

const slides = [
  {
    image: hero1,
    title: "Building Dreams,",
    highlight: "One Brick at a Time",
    description:
      "Premium quality bricks manufactured with traditional craftsmanship and modern technology.",
    cta: "Explore Products",
    link: "/products",
  },
  {
    image: hero2,
    title: "Quality That",
    highlight: "Stands the Test of Time",
    description:
      "Over 25 years of excellence in brick manufacturing, trusted by thousands of builders.",
    cta: "Our Story",
    link: "/about",
  },
  {
    image: hero3,
    title: "From Our Kiln",
    highlight: "To Your Construction Site",
    description:
      "Reliable delivery and consistent quality for all your construction needs.",
    cta: "Contact Us",
    link: "/contact",
  },
  {
    image: hero4,
    title: "From Our Kiln",
    highlight: "To Your Construction Site",
    description:
      "Reliable delivery and consistent quality for all your construction needs.",
    cta: "Contact Us",
    link: "/contact",
  },
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="relative h-[90vh] min-h-[600px] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-hero-gradient" />
          </div>

          {/* Content */}
          <div className="relative h-full container mx-auto px-4 flex items-center">
            <div className="max-w-2xl text-primary-foreground">
              <h1
                className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 transition-all duration-700 ${
                  index === currentSlide
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: "200ms" }}
              >
                {slide.title}
                <br />
                <span className="text-accent">{slide.highlight}</span>
              </h1>
              <p
                className={`text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-lg transition-all duration-700 ${
                  index === currentSlide
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: "400ms" }}
              >
                {slide.description}
              </p>
              <div
                className={`flex gap-4 transition-all duration-700 ${
                  index === currentSlide
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: "600ms" }}
              >
                <Button asChild variant="hero" size="xl">
                  <Link to={slide.link}>{slide.cta}</Link>
                </Button>
                <Button asChild variant="heroOutline" size="xl">
                  <Link to="/contact">Get Quote</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-background/20 backdrop-blur-sm rounded-full flex items-center justify-center text-primary-foreground hover:bg-background/40 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-background/20 backdrop-blur-sm rounded-full flex items-center justify-center text-primary-foreground hover:bg-background/40 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide
                ? "bg-primary-foreground w-8"
                : "bg-primary-foreground/50 hover:bg-primary-foreground/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
