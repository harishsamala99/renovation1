import { Hammer, Paintbrush, Home, ArrowRight } from "lucide-react";
import carpentryImage from "@/assets/carpentry-service.jpg";
import paintingImage from "@/assets/painting-service.jpg";
import renovationImage from "@/assets/renovation-service.jpg";

const services = [
  {
    icon: Hammer,
    title: "Custom Carpentry",
    description:
      "From bespoke cabinetry to intricate millwork, our master craftsmen bring timeless woodworking traditions to your modern home.",
    image: carpentryImage,
    features: ["Custom Cabinetry", "Built-in Shelving", "Trim & Molding", "Furniture Restoration"],
  },
  {
    icon: Paintbrush,
    title: "Professional Painting",
    description:
      "Transform any space with our precision painting services. We use only premium paints and meticulous techniques for flawless results.",
    image: paintingImage,
    features: ["Interior Painting", "Exterior Painting", "Cabinet Refinishing", "Specialty Finishes"],
  },
  {
    icon: Home,
    title: "Full Renovations",
    description:
      "Complete home transformations executed with precision planning, quality materials, and expert project management from start to finish.",
    image: renovationImage,
    features: ["Kitchen Remodels", "Bathroom Renovations", "Basement Finishing", "Room Additions"],
  },
];

const ServicesSection = () => {
  return (
    <section className="bg-background py-24">
      <div className="container-section">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-4 font-body text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Our Expertise
          </p>
          <h2 className="mb-6 font-display text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
            Craftsmanship in Every Detail
          </h2>
          <p className="font-body text-lg text-muted-foreground">
            With over two decades of experience, we bring unparalleled skill and attention to every project, 
            transforming houses into homes that reflect your unique vision.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg bg-card shadow-soft transition-all duration-500 hover:-translate-y-2 hover:shadow-elevated"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 rounded-full bg-primary p-3 text-primary-foreground shadow-warm">
                  <service.icon className="h-6 w-6" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="mb-3 font-display text-xl font-semibold text-card-foreground">
                  {service.title}
                </h3>
                <p className="mb-4 font-body text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="mb-6 space-y-2">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 font-body text-sm text-foreground"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button className="group/btn inline-flex items-center gap-2 font-body text-sm font-semibold text-primary transition-colors hover:text-primary/80">
                  Learn More
                  <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
