import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// Import images from assets
import p1 from "@/assets/p1.jpg";
import p2 from "@/assets/p2.jpg";
import p3 from "@/assets/p3.jpg";
import p4 from "@/assets/p4.jpg";

const products = [
  {
    name: "Standard (اول) Bricks",
    image: p1,
    description:
      "Our flagship red clay bricks perfect for all general construction needs. Manufactured traditionally with consistent quality.",
    features: [
      "High compressive strength (75-100 kg/cm²)",
      "Uniform size (9 x 4.5 x 3 inches)",
      "Low water absorption",
      "Cost-effective & durable",
    ],
    price: "PKR 22",
  },
  {
    name: "Normal (دوم) Bricks",
    image: p2,
    description:
      "A good-quality brick suitable for exterior and interior construction with balanced durability and cost.",
    features: [
      "Weather resistant",
      "Even color tone",
      "Minimal salt residue",
      "Best for residential projects",
    ],
    price: "PKR 18",
  },
  {
    name: "Basic (بارشی) Bricks",
    image: p3,
    description:
      "A budget-friendly brick used for large-scale construction projects while maintaining decent strength.",
    features: [
      "Affordable pricing",
      "Reliable for mass use",
      "Consistent quality",
      "Best for boundary walls",
    ],
    price: "PKR 16",
  },
  {
    name: "Tile (ٹائل) Bricks",
    image: p4,
    description:
      "Specialized bricks engineered to handle extreme heat—best for tandoors, chimneys, furnaces, and fireplaces.",
    features: [
      "Heat resistant up to 1400°C",
      "Low thermal conductivity",
      "Excellent insulation",
      "Industrial grade durability",
    ],
    price: "PKR 14",
  },
];

const ProductsPreview = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Our Collection
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              Premium Quality Products
            </h2>

            <p className="text-muted-foreground max-w-xl">
              Explore our range of high-quality bricks designed to meet all
              construction needs.
            </p>
          </div>

          <Button asChild variant="outline" className="mt-4 md:mt-0">
            <Link to="/products">
              View All Products <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="group bg-card rounded-xl border border-border p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              {/* Product Image */}
              <div className="aspect-auto rounded-lg mb-6 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Product Title */}
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {product.name}
              </h3>

              {/* Description */}
              <p className="text-sm text-muted-foreground mb-4">
                {product.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {product.features.map((feature, i) => (
                  <li
                    key={i}
                    className="text-sm text-muted-foreground flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Price + Link */}
              <div className="flex justify-between items-center pt-4 border-t border-border">
                <span className="text-primary font-semibold">
                  {product.price}
                </span>

                <Link
                  to="/products"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsPreview;
