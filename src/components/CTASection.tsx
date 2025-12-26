import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="relative overflow-hidden bg-accent py-24">
      {/* Decorative Elements */}
      <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />

      <div className="container-section relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 font-body text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Ready to Transform Your Space?
          </p>
          <h2 className="mb-6 font-display text-3xl font-bold text-accent-foreground sm:text-4xl md:text-5xl">
            Let's Bring Your Vision to Life
          </h2>
          <p className="mb-10 font-body text-lg text-accent-foreground/80">
            Schedule your free consultation today and discover how our expert team can 
            transform your home into the space you've always dreamed of.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button variant="hero" size="xl" className="group">
              Get Your Free Quote
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="xl" className="gap-2">
              <Phone className="h-5 w-5" />
              (555) 123-4567
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 border-t border-border/30 pt-8">
            <div className="flex items-center gap-2 text-accent-foreground/70">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-body text-sm">Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2 text-accent-foreground/70">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-body text-sm">Free Estimates</span>
            </div>
            <div className="flex items-center gap-2 text-accent-foreground/70">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-body text-sm">5-Year Warranty</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
