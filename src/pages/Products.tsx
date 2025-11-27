import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check, ArrowRight } from "lucide-react";

const products = [
  {
    name: "Standard (اول) Bricks",
    image: "/src/assets/p1.jpg",
    description:
      "Our flagship product - classic red clay bricks perfect for all general construction needs. Manufactured using traditional methods with consistent quality.",
    features: [
      "High compressive strength (75-100 kg/cm²)",
      "Uniform dimensions (9x4.5x3 inches)",
      "Low water absorption",
      "Cost-effective solution",
    ],
    price: "PKR 22",
    unit: "per piece",
    popular: true,
  },
  {
    name: "Normal (دوم) Bricks",
    image: "/src/assets/p2.jpg",
    description:
      "Good quality bricks suitable for exterior facades and general construction with a balanced finish and strength.",
    features: [
      "Weather-resistant finish",
      "Uniform color tone",
      "Minimal efflorescence",
      "Reliable for most construction work",
    ],
    price: "PKR 18",
    unit: "per piece",
    popular: false,
  },
  {
    name: "Basic (بارشی) Bricks",
    image: "/src/assets/p3.jpg",
    description:
      "Affordable yet reliable bricks commonly used for large-scale projects and boundary walls.",
    features: [
      "Budget-friendly option",
      "Decent strength & durability",
      "Uniform molding",
      "Best for mass construction",
    ],
    price: "PKR 16",
    unit: "per piece",
    popular: false,
  },
  {
    name: "Tile (ٹائل) Bricks",
    image: "/src/assets/p4.jpg",
    description:
      "Specialized heat-resistant bricks designed for furnaces, tandoors, chimneys, fireplaces, and industrial applications.",
    features: [
      "Withstands up to 1400°C",
      "Excellent insulation",
      "Low thermal conductivity",
      "Chemical resistant",
    ],
    price: "PKR 14",
    unit: "per piece",
    popular: false,
  },
];

const Products = () => {
  return (
    <>
      <Helmet>
        <title>
          Our Products - Mian Bricks | Quality Bricks for Every Construction
          Need
        </title>
        <meta
          name="description"
          content="Explore our range of premium bricks including standard, tile, normal, and basic bricks. Guaranteed quality for all types of construction projects."
        />
      </Helmet>

      <Layout>
        {/* Hero Section */}
        <section className="py-20 bg-charcoal">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                Our Products
              </span>

              <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mt-2 mb-6">
                Quality Bricks for Every Construction Need
              </h1>

              <p className="text-xl text-clay">
                From standard construction bricks to specialized heat-resistant
                options, we offer a complete range of products for all building
                requirements.
              </p>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <div
                  key={index}
                  className={`relative bg-card rounded-xl border ${
                    product.popular
                      ? "border-primary shadow-glow"
                      : "border-border"
                  } p-6 hover:shadow-elegant transition-all duration-300`}
                >
                  {/* Popular Badge */}
                  {product.popular && (
                    <span className="absolute -top-3 left-6 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                      Most Popular
                    </span>
                  )}

                  {/* PRODUCT IMAGE */}
                  <div className="aspect-[4/3] rounded-lg overflow-hidden mb-6">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Title */}
                  <h2 className="text-2xl font-bold text-foreground mb-3">
                    {product.name}
                  </h2>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm mb-6">
                    {product.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-3 mb-6">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm">
                        <Check className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Price + CTA */}
                  <div className="flex items-end justify-between pt-6 border-t border-border">
                    <div>
                      <span className="text-3xl font-bold text-primary">
                        {product.price}
                      </span>
                      <span className="text-muted-foreground text-sm ml-1">
                        {product.unit}
                      </span>
                    </div>

                    <Button asChild size="sm">
                      <Link to="/contact">Get Quote</Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  Need Custom Requirements?
                </h2>
                <p className="text-muted-foreground">
                  We offer customized brick solutions for special projects.
                  Reach out to discuss your construction needs.
                </p>
              </div>

              <Button asChild size="lg">
                <Link to="/contact">
                  Contact Us <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Products;
