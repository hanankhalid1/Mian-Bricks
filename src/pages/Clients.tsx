import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ahmad Construction Co.",
    role: "Commercial Builder",
    content:
      "We've been using Mian Bricks for over 10 years. Their consistency in quality is unmatched. Every delivery meets our standards, allowing us to maintain our project timelines without any quality concerns.",
    rating: 5,
  },
  {
    name: "Rashid Developers",
    role: "Residential Developer",
    content:
      "Mian Bricks has been our trusted partner for multiple housing projects. Their customer service is excellent, and they always accommodate our bulk order requirements with competitive pricing.",
    rating: 5,
  },
  {
    name: "Punjab Engineering Works",
    role: "Industrial Contractor",
    content:
      "Their Awwal bricks have been essential for our kiln constructions. The heat resistance and durability are exactly as promised. Highly recommend for any industrial application.",
    rating: 5,
  },
  {
    name: "Green Valley Homes",
    role: "Housing Society",
    content:
      "We chose Mian Bricks for our entire housing project of 200+ homes. The quality was consistent across all deliveries, and their team was very professional throughout.",
    rating: 4,
  },
  {
    name: "FEDMIC Faisalabad",
    role: "Indutrial Hub",
    content:
      "For our carpet industry, we needed large quantities delivered on a tight schedule. Mian Bricks exceeded our expectations with timely deliveries and excellent brick quality.",
    rating: 5,
  },
  {
    name: "Kareem & Sons Builders",
    role: "General Contractor",
    content:
      "As a third-generation builder, I've worked with many suppliers. Mian Bricks stands out for their reliability and the strength of their products. Our structures stand stronger.",
    rating: 5,
  },
];

const clients = [
  "Punjab Housing Authority",
  "Faisalabad Development Authority",
  "Wapda City Canal Road Faisalabad",
  "Marhaba Group of Companies",
  "Sabir Autos",
  "Faisal Town Housing Society",
  "Al-Noor Builders",
  "Industrial Estates",
];

const Clients = () => {
  return (
    <>
      <Helmet>
        <title>
          Our Clients - Mian Bricks | Trusted by Leading Builders Across
          Pakistan
        </title>
        <meta
          name="description"
          content="See what our clients say about Mian Bricks. Trusted by major construction companies, housing authorities, and individual builders across Pakistan."
        />
      </Helmet>
      <Layout>
        {/* Hero */}
        <section className="py-20 bg-charcoal">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                Our Clients
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mt-2 mb-6">
                Trusted by Builders Across Pakistan
              </h1>
              <p className="text-xl text-clay">
                From small residential projects to large commercial
                developments, our bricks have helped build countless structures
                across the country.
              </p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-primary">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { number: "500+", label: "Happy Clients" },
                { number: "1,000+", label: "Projects Completed" },
                { number: "98%", label: "Repeat Customers" },
                { number: "4.9/5", label: "Average Rating" },
              ].map((stat, index) => (
                <div key={index}>
                  <div className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">
                    {stat.number}
                  </div>
                  <div className="text-primary-foreground/80 text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                What Our Clients Say
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Real feedback from real customers who have trusted Mian Bricks
                for their construction needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-card rounded-xl p-6 border border-border hover:shadow-elegant transition-shadow"
                >
                  <Quote className="w-10 h-10 text-primary/20 mb-4" />
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div>
                      <h4 className="font-semibold text-foreground">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < testimonial.rating
                              ? "text-accent fill-accent"
                              : "text-muted-foreground"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Client List */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Our Valued Partners
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We are proud to serve a diverse range of clients from government
                organizations to private developers.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {clients.map((client, index) => (
                <div
                  key={index}
                  className="bg-card rounded-xl p-6 text-center border border-border hover:border-primary transition-colors"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary">
                      {client.charAt(0)}
                    </span>
                  </div>
                  <p className="text-foreground font-medium text-sm">
                    {client}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Clients;
