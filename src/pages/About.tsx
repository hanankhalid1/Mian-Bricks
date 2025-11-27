import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import { Award, Users, Target, Heart } from "lucide-react";

// Import image from assets
import heroImage from "@/assets/hero3.jpg";

const About = () => {
  return (
    <>
      <Helmet>
        <title>
          About Us - Mian Bricks | 25+ Years of Excellence in Brick
          Manufacturing
        </title>
        <meta
          name="description"
          content="Learn about Mian Bricks' journey of 25+ years in brick manufacturing. Our commitment to quality, tradition, and customer satisfaction."
        />
      </Helmet>

      <Layout>
        {/* Hero */}
        <section className="py-20 bg-charcoal">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                About Us
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mt-2 mb-6">
                Building Foundations Since 1985
              </h1>
              <p className="text-xl text-clay">
                Three generations of expertise in crafting quality bricks that
                have helped build countless homes, businesses, and dreams across
                Pakistan.
              </p>
            </div>
          </div>
        </section>

        {/* Story + Image */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* LEFT — Story Details */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Our Story
                </h2>

                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Mian Bricks was founded in 1999 by Mian Muhammad Khalid
                    Mehmood, a visionary entrepreneur who recognized the growing
                    need for quality construction materials in the region. What
                    started as a small kiln on the outskirts of Gujranwala has
                    grown into one of the most trusted names in brick
                    manufacturing.
                  </p>
                  <p>
                    Over the years, we have maintained our commitment to
                    traditional craftsmanship while embracing modern quality
                    control methods. Our bricks are made from carefully selected
                    clay, fired to perfection, and tested rigorously before
                    delivery.
                  </p>
                  <p>
                    Today, under the leadership of the third generation, Mian
                    Bricks continues to serve builders, contractors, and
                    homeowners with the same dedication to quality that has been
                    our hallmark from the beginning.
                  </p>
                </div>
              </div>

              {/* RIGHT — Image with Overlay + Established */}
              <div className="relative">
                <div
                  className="aspect-[4/3] rounded-2xl bg-cover bg-center relative overflow-hidden shadow-xl"
                  style={{
                    backgroundImage: `url(${heroImage})`, // Updated image import
                  }}
                >
                  {/* Red Transparent Overlay */}
                  <div className="absolute inset-0 bg-red-700/40"></div>

                  {/* Centered Established Box */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center px-8 py-5 bg-white/20 backdrop-blur-xl rounded-xl border border-white/40 shadow-2xl">
                      <div className="text-7xl font-extrabold text-white drop-shadow-xl">
                        2008
                      </div>
                      <p className="text-white font-semibold tracking-wide text-lg mt-1">
                        Established
                      </p>
                    </div>
                  </div>
                </div>

                {/* Decorative Box */}
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 rounded-xl -z-10" />
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Our Core Values
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do at Mian Bricks.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Award,
                  title: "Quality First",
                  description:
                    "We never compromise on the quality of our bricks.",
                },
                {
                  icon: Users,
                  title: "Customer Focus",
                  description:
                    "Our customers are at the heart of everything we do.",
                },
                {
                  icon: Target,
                  title: "Reliability",
                  description:
                    "We deliver what we promise, on time and in full.",
                },
                {
                  icon: Heart,
                  title: "Integrity",
                  description:
                    "Honesty and fairness define our business practices.",
                },
              ].map((value, index) => (
                <div
                  key={index}
                  className="bg-card rounded-xl p-6 text-center border border-border shadow-sm hover:shadow-lg transition"
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Our Journey
              </h2>
            </div>

            <div className="max-w-3xl mx-auto">
              {[
                {
                  year: "2008",
                  event: "Mian Bricks founded with first traditional kiln",
                },
                {
                  year: "2010",
                  event: "Expanded production capacity with more area",
                },
                {
                  year: "2015",
                  event:
                    "Introduced quality control inspection for brick testing",
                },
                { year: "2018", event: "Third generation takes leadership" },
                {
                  year: "2024",
                  event:
                    "Achieved 10 million bricks annual production milestone",
                },
              ].map((item, index) => (
                <div key={index} className="flex gap-6 mb-8 last:mb-0">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                      {item.year}
                    </div>
                    {index < 5 && (
                      <div className="w-0.5 h-full bg-border mt-2" />
                    )}
                  </div>
                  <div className="pt-4">
                    <p className="text-foreground">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default About;
