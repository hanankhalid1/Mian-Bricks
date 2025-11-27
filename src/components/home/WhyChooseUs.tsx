import { Award, Clock, Shield, Users, Leaf, Truck } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "25+ Years Experience",
    description: "Decades of expertise in brick manufacturing with traditional methods perfected over generations.",
  },
  {
    icon: Shield,
    title: "Quality Guaranteed",
    description: "Every batch undergoes rigorous testing to ensure consistent strength and durability.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "Reliable logistics ensure your bricks arrive exactly when you need them.",
  },
  {
    icon: Users,
    title: "Customer Support",
    description: "Dedicated team available to assist with orders, queries, and technical guidance.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly",
    description: "Sustainable practices with minimal environmental impact in our manufacturing process.",
  },
  {
    icon: Truck,
    title: "Bulk Orders",
    description: "Competitive pricing and special discounts for large construction projects.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-charcoal">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Our Advantages
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mt-2 mb-4">
            Why Choose Mian Bricks?
          </h2>
          <p className="text-clay max-w-2xl mx-auto">
            We combine traditional craftsmanship with modern quality standards to deliver
            the best bricks for your construction needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-xl bg-background/5 border border-primary/20 hover:bg-background/10 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-primary-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-clay leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "25+", label: "Years Experience" },
            { number: "10M+", label: "Bricks Produced" },
            { number: "500+", label: "Happy Clients" },
            { number: "100%", label: "Quality Tested" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                {stat.number}
              </div>
              <div className="text-clay text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
