import { Pickaxe, Droplets, Factory, Flame, Package, Truck } from "lucide-react";

const steps = [
  {
    icon: Pickaxe,
    title: "Clay Extraction",
    description: "High-quality clay sourced from our own quarries",
  },
  {
    icon: Droplets,
    title: "Mixing & Molding",
    description: "Precise mixing with water and molding into shape",
  },
  {
    icon: Factory,
    title: "Air Drying",
    description: "Natural drying process to remove moisture",
  },
  {
    icon: Flame,
    title: "Kiln Firing",
    description: "Traditional firing at optimal temperatures",
  },
  {
    icon: Package,
    title: "Quality Check",
    description: "Rigorous testing for strength and durability",
  },
  {
    icon: Truck,
    title: "Delivery",
    description: "Safe packaging and timely delivery",
  },
];

const ManufacturingProcess = () => {
  return (
    <section className="py-20 bg-warm-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            How We Work
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Our Manufacturing Process
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From raw clay to finished bricks, every step is carefully monitored to ensure
            the highest quality standards.
          </p>
        </div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Icon */}
                <div className="w-20 h-20 bg-card rounded-full flex items-center justify-center shadow-elegant border-4 border-background relative z-10 group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                
                {/* Step Number */}
                <span className="absolute top-0 right-1/2 translate-x-12 -translate-y-2 w-6 h-6 bg-primary text-primary-foreground rounded-full text-xs font-bold flex items-center justify-center">
                  {index + 1}
                </span>

                {/* Content */}
                <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManufacturingProcess;
