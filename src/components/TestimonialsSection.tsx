import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "Homeowner, Oak Park",
    content:
      "PrecisionCraft completely transformed our dated kitchen into a stunning, functional space. Their attention to detail and craftsmanship exceeded all our expectations. The team was professional, punctual, and a pleasure to work with.",
    rating: 5,
    project: "Kitchen Renovation",
  },
  {
    id: 2,
    name: "Michael Thompson",
    role: "Property Developer",
    content:
      "I've worked with many contractors over the years, and PrecisionCraft stands out for their quality and reliability. They completed our multi-unit renovation on time and within budget. Highly recommend for any scale project.",
    rating: 5,
    project: "Multi-Unit Renovation",
  },
  {
    id: 3,
    name: "Emily & David Chen",
    role: "Homeowners, Lincoln Park",
    content:
      "From the initial consultation to the final walkthrough, the experience was seamless. Our custom built-ins and fireplace mantle are absolutely gorgeous. They truly understood our vision and brought it to life beautifully.",
    rating: 5,
    project: "Living Room Redesign",
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="relative overflow-hidden bg-background py-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container-section relative z-10">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-4 font-body text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Testimonials
          </p>
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
            What Our Clients Say
          </h2>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative mx-auto max-w-4xl">
          {/* Quote Icon */}
          <div className="absolute -top-8 left-0 text-primary/20 md:-left-12">
            <Quote className="h-24 w-24" />
          </div>

          {/* Testimonial Card */}
          <div className="relative rounded-2xl bg-card p-8 shadow-medium md:p-12">
            {/* Rating */}
            <div className="mb-6 flex justify-center gap-1">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star
                  key={i}
                  className="h-5 w-5 fill-primary text-primary"
                />
              ))}
            </div>

            {/* Content */}
            <blockquote className="mb-8 text-center font-body text-lg leading-relaxed text-card-foreground md:text-xl">
              "{testimonials[currentIndex].content}"
            </blockquote>

            {/* Author */}
            <div className="text-center">
              <p className="font-display text-lg font-semibold text-foreground">
                {testimonials[currentIndex].name}
              </p>
              <p className="font-body text-sm text-muted-foreground">
                {testimonials[currentIndex].role}
              </p>
              <p className="mt-1 font-body text-xs font-medium uppercase tracking-wider text-primary">
                {testimonials[currentIndex].project}
              </p>
            </div>

            {/* Navigation */}
            <div className="mt-8 flex items-center justify-center gap-4">
              <button
                onClick={prevTestimonial}
                className="rounded-full border border-border p-2 text-foreground transition-all hover:border-primary hover:text-primary"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              
              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === currentIndex
                        ? "w-6 bg-primary"
                        : "w-2 bg-border hover:bg-primary/50"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="rounded-full border border-border p-2 text-foreground transition-all hover:border-primary hover:text-primary"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
