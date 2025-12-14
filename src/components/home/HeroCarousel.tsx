import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

// Import Images
import hero1 from "@/assets/hero1.png";
import hero2 from "@/assets/hero2.png";
import hero3 from "@/assets/hero3.png";
import hero4 from "@/assets/hero4.png";
import hero5 from "@/assets/hero5.png";
import hero6 from "@/assets/hero6.png";
import hero7 from "@/assets/hero7.png";
import hero8 from "@/assets/hero8.png";

const slides = [
  {
    image: hero1,
    text: "Premium Quality Bricks",
    subtext: "Crafted with precision for lasting structures",
    link: "/products",
  },
  {
    image: hero2,
    text: "25 Years of Trusted Manufacturing",
    subtext: "Building relationships that stand the test of time",
    link: "/about",
  },
  {
    image: hero3,
    text: "From Kiln to Your Construction Site",
    subtext: "Direct delivery ensuring quality at every step",
    link: "/contact",
  },
  {
    image: hero4,
    text: "Strength You Can Trust",
    subtext: "Engineered for durability and safety",
    link: "/products",
  },
  {
    image: hero5,
    text: "Modern Brick Manufacturing",
    subtext: "Technology-driven production excellence",
    link: "/about",
  },
  {
    image: hero6,
    text: "Reliable Supply Chain",
    subtext: "On-time delivery every time",
    link: "/contact",
  },
  {
    image: hero7,
    text: "Built for Every Project",
    subtext: "Residential to commercial solutions",
    link: "/products",
  },
  {
    image: hero8,
    text: "Quality That Builds Futures",
    subtext: "Trusted by builders nationwide",
    link: "/about",
  },
];

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsAnimating(false), 700);
  }, [isAnimating]);

  const prevSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsAnimating(false), 700);
  }, [isAnimating]);

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="relative h-[90vh] min-h-[600px] w-full overflow-hidden bg-black">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-700 ease-in-out ${
            index === current ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
        >
          {/* Background Image with Ken Burns effect */}
          <div
            className={`absolute inset-0 bg-cover bg-center transition-transform duration-[8000ms] ease-out ${
              index === current ? "scale-110" : "scale-100"
            }`}
            style={{ backgroundImage: `url(${slide.image})` }}
          />

          {/* Elegant dark gradient for readability - no orange */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

          {/* Content */}
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-8 md:px-16">
              <div className="max-w-2xl">
                {/* Main heading - prominent and bold */}
                <h1
                  className={`text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6 drop-shadow-lg transition-all duration-700 delay-200 ${
                    index === current
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-6"
                  }`}
                >
                  {slide.text}
                </h1>

                {/* Subtext - light and subtle */}
                <p
                  className={`text-base md:text-lg text-white/60 mb-8 font-light transition-all duration-700 delay-300 ${
                    index === current
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-6"
                  }`}
                >
                  {slide.subtext}
                </p>

                {/* Minimal CTA Button */}
                <Link
                  to={slide.link}
                  className={`inline-flex items-center gap-2 text-white text-sm font-medium tracking-wide uppercase border-b-2 border-white/50 pb-1 hover:border-white hover:gap-3 transition-all duration-300 delay-400 ${
                    index === current
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-6"
                  }`}
                >
                  Learn More
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows - Minimal */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 text-white/50 hover:text-white transition-colors duration-300"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-8 h-8" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-white/50 hover:text-white transition-colors duration-300"
        aria-label="Next slide"
      >
        <ChevronRight className="w-8 h-8" />
      </button>

      {/* Progress Dots - Modern pill style */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => !isAnimating && setCurrent(index)}
            className="group relative p-2"
            aria-label={`Go to slide ${index + 1}`}
          >
            <div
              className={`h-1 rounded-full transition-all duration-500 ${
                index === current
                  ? "w-10 bg-white"
                  : "w-3 bg-white/40 group-hover:bg-white/60"
              }`}
            />
          </button>
        ))}
      </div>

      {/* Slide counter */}
      {/* <div className="absolute bottom-10 right-10 text-white/60 font-medium tracking-wider hidden md:block">
        <span className="text-white text-2xl">
          {String(current + 1).padStart(2, "0")}
        </span>
        <span className="mx-2">/</span>
        <span>{String(slides.length).padStart(2, "0")}</span>
      </div> */}
    </section>
  );
};

export default HeroCarousel;
