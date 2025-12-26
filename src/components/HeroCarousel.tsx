import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import heroKitchen from "@/assets/hero-kitchen.jpg";
import heroLiving from "@/assets/hero-living.jpg";
import heroBathroom from "@/assets/hero-bathroom.jpg";
import { Button } from "@/components/ui/button";

const slides = [
  {
    image: heroKitchen,
    title: "Exquisite Kitchen Renovations",
    subtitle: "Where culinary dreams come to life",
  },
  {
    image: heroLiving,
    title: "Custom Living Spaces",
    subtitle: "Craftsmanship that tells your story",
  },
  {
    image: heroBathroom,
    title: "Luxury Bathroom Retreats",
    subtitle: "Your personal sanctuary awaits",
  },
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsAnimating(false), 600);
  }, [isAnimating]);

  const prevSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsAnimating(false), 600);
  }, [isAnimating]);

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-700 ease-out ${
            index === currentSlide
              ? "opacity-100 scale-100"
              : "opacity-0 scale-105"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="h-full w-full object-cover"
          />
          <div className="image-overlay" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-4">
        <div className="container-section text-center">
          <p
            className={`mb-4 font-body text-sm font-medium uppercase tracking-[0.3em] text-primary-foreground/80 transition-all duration-500 ${
              isAnimating ? "translate-y-4 opacity-0" : "translate-y-0 opacity-100"
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            {slides[currentSlide].subtitle}
          </p>
          <h1
            className={`mb-8 font-display text-4xl font-bold text-primary-foreground sm:text-5xl md:text-6xl lg:text-7xl transition-all duration-500 ${
              isAnimating ? "translate-y-4 opacity-0" : "translate-y-0 opacity-100"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            {slides[currentSlide].title}
          </h1>
          <div
            className={`flex flex-col items-center justify-center gap-4 sm:flex-row transition-all duration-500 ${
              isAnimating ? "translate-y-4 opacity-0" : "translate-y-0 opacity-100"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            <Button variant="hero" size="xl">
              Get Free Quote
            </Button>
            <Button variant="heroOutline" size="xl">
              View Portfolio
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-background/10 p-3 text-primary-foreground backdrop-blur-sm transition-all hover:bg-background/20 sm:left-8"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-background/10 p-3 text-primary-foreground backdrop-blur-sm transition-all hover:bg-background/20 sm:right-8"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (!isAnimating) {
                setIsAnimating(true);
                setCurrentSlide(index);
                setTimeout(() => setIsAnimating(false), 600);
              }
            }}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "w-8 bg-primary"
                : "w-2 bg-primary-foreground/50 hover:bg-primary-foreground/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 z-20 hidden flex-col items-center text-primary-foreground/70 lg:flex">
        <span className="mb-2 text-xs font-medium uppercase tracking-widest">Scroll</span>
        <div className="h-12 w-px bg-primary-foreground/30" />
      </div>
    </section>
  );
};

export default HeroCarousel;
