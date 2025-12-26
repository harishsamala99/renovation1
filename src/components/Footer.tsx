import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="container-section py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <h3 className="mb-4 font-display text-2xl font-bold">
              PrecisionCraft
            </h3>
            <p className="mb-6 font-body text-sm leading-relaxed text-background/70">
              Transforming homes with exceptional craftsmanship since 1999. 
              Your trusted partner for quality carpentry, painting, and renovations.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="rounded-full bg-background/10 p-2 transition-colors hover:bg-primary hover:text-primary-foreground"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="rounded-full bg-background/10 p-2 transition-colors hover:bg-primary hover:text-primary-foreground"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="rounded-full bg-background/10 p-2 transition-colors hover:bg-primary hover:text-primary-foreground"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="mb-4 font-display text-lg font-semibold">Services</h4>
            <ul className="space-y-3 font-body text-sm text-background/70">
              <li><a href="#" className="transition-colors hover:text-primary">Custom Carpentry</a></li>
              <li><a href="#" className="transition-colors hover:text-primary">Interior Painting</a></li>
              <li><a href="#" className="transition-colors hover:text-primary">Exterior Painting</a></li>
              <li><a href="#" className="transition-colors hover:text-primary">Kitchen Renovations</a></li>
              <li><a href="#" className="transition-colors hover:text-primary">Bathroom Remodels</a></li>
              <li><a href="#" className="transition-colors hover:text-primary">Basement Finishing</a></li>
            </ul>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="mb-4 font-display text-lg font-semibold">Company</h4>
            <ul className="space-y-3 font-body text-sm text-background/70">
              <li><a href="#" className="transition-colors hover:text-primary">About Us</a></li>
              <li><a href="#" className="transition-colors hover:text-primary">Our Portfolio</a></li>
              <li><a href="#" className="transition-colors hover:text-primary">Testimonials</a></li>
              <li><a href="#" className="transition-colors hover:text-primary">Blog & Tips</a></li>
              <li><a href="#" className="transition-colors hover:text-primary">Careers</a></li>
              <li><a href="#" className="transition-colors hover:text-primary">Contact</a></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="mb-4 font-display text-lg font-semibold">Contact Us</h4>
            <ul className="space-y-4 font-body text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                <span className="text-background/70">
                  123 Craftsman Lane<br />
                  Chicago, IL 60614
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 flex-shrink-0 text-primary" />
                <a href="tel:5551234567" className="text-background/70 transition-colors hover:text-primary">
                  (555) 123-4567
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 flex-shrink-0 text-primary" />
                <a href="mailto:info@precisioncraft.com" className="text-background/70 transition-colors hover:text-primary">
                  info@precisioncraft.com
                </a>
              </li>
            </ul>

            {/* Business Hours */}
            <div className="mt-6">
              <h5 className="mb-2 font-body text-sm font-semibold">Business Hours</h5>
              <p className="font-body text-sm text-background/70">
                Mon - Fri: 7:00 AM - 6:00 PM<br />
                Sat: 8:00 AM - 4:00 PM<br />
                Sun: Closed
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container-section flex flex-col items-center justify-between gap-4 py-6 text-center md:flex-row md:text-left">
          <p className="font-body text-sm text-background/50">
            © {new Date().getFullYear()} PrecisionCraft Renovations. All rights reserved.
          </p>
          <div className="flex gap-6 font-body text-sm text-background/50">
            <a href="#" className="transition-colors hover:text-primary">Privacy Policy</a>
            <a href="#" className="transition-colors hover:text-primary">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
