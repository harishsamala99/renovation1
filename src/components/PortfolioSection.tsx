import { useState } from "react";
import heroKitchen from "@/assets/hero-kitchen.jpg";
import heroLiving from "@/assets/hero-living.jpg";
import heroBathroom from "@/assets/hero-bathroom.jpg";
import carpentryImage from "@/assets/carpentry-service.jpg";
import paintingImage from "@/assets/painting-service.jpg";
import renovationImage from "@/assets/renovation-service.jpg";

const categories = ["All", "Kitchens", "Living Rooms", "Bathrooms", "Custom Work"];

const projects = [
  {
    id: 1,
    title: "Modern Craftsman Kitchen",
    category: "Kitchens",
    image: heroKitchen,
    description: "Complete kitchen renovation with custom cabinetry",
  },
  {
    id: 2,
    title: "Elegant Living Room",
    category: "Living Rooms",
    image: heroLiving,
    description: "Built-in shelving and fireplace redesign",
  },
  {
    id: 3,
    title: "Spa-Like Bathroom Retreat",
    category: "Bathrooms",
    image: heroBathroom,
    description: "Luxury bathroom with custom vanity and tilework",
  },
  {
    id: 4,
    title: "Handcrafted Furniture",
    category: "Custom Work",
    image: carpentryImage,
    description: "Bespoke wooden furniture and cabinetry",
  },
  {
    id: 5,
    title: "Interior Color Transformation",
    category: "Living Rooms",
    image: paintingImage,
    description: "Full interior repaint with designer colors",
  },
  {
    id: 6,
    title: "Open Concept Renovation",
    category: "Kitchens",
    image: renovationImage,
    description: "Complete floor plan restructuring",
  },
];

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section className="bg-secondary py-24">
      <div className="container-section">
        {/* Section Header */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-4 font-body text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Our Work
          </p>
          <h2 className="mb-6 font-display text-3xl font-bold text-secondary-foreground sm:text-4xl md:text-5xl">
            Featured Projects
          </h2>
          <p className="font-body text-lg text-muted-foreground">
            Explore our portfolio of completed renovations, each one a testament to our 
            commitment to quality and client satisfaction.
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-6 py-2 font-body text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-warm"
                  : "bg-background text-foreground hover:bg-primary/10"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-lg"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-foreground/0 transition-colors duration-300 group-hover:bg-foreground/60" />
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="mb-2 font-body text-xs font-semibold uppercase tracking-wider text-primary">
                  {project.category}
                </span>
                <h3 className="mb-2 font-display text-xl font-bold text-background">
                  {project.title}
                </h3>
                <p className="font-body text-sm text-background/80">
                  {project.description}
                </p>
              </div>

              {/* Corner Accent */}
              <div className="absolute bottom-0 right-0 h-16 w-16 translate-x-8 translate-y-8 bg-primary transition-transform duration-300 group-hover:translate-x-0 group-hover:translate-y-0" 
                style={{ clipPath: "polygon(100% 0, 0% 100%, 100% 100%)" }}
              />
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-12 text-center">
          <button className="inline-flex items-center gap-2 rounded-full border-2 border-primary bg-transparent px-8 py-3 font-body font-semibold text-primary transition-all hover:bg-primary hover:text-primary-foreground">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
