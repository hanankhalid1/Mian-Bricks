import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='30' height='15' fill='%23fff'/%3E%3Crect y='15' x='30' width='30' height='15' fill='%23fff'/%3E%3Crect y='30' width='30' height='15' fill='%23fff'/%3E%3Crect y='45' x='30' width='30' height='15' fill='%23fff'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Start Your Construction Project?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Get in touch with us today for a free quote and consultation. 
            We're here to help you build something great.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="heroOutline" size="xl">
              <Link to="/contact">
                Request Quote <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button asChild size="xl" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <a href="tel:03006618358">
                <Phone className="w-5 h-5 mr-2" />
                Call Us Now
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
