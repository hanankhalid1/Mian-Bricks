import { MapPin, Phone, Clock, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";

const LocationMap = () => {
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=Mian+Bricks+Company+Faisalabad`;

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Find Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Visit Our Brick Kiln
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Located on Main Jhumra Road Faisalabad, our facility is easily
            accessible and welcomes visitors for site tours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Map */}
          <div className="lg:col-span-2 rounded-xl overflow-hidden shadow-elegant border border-border relative aspect-[3/2]">
            <iframe
              src="https://maps.google.com/maps?width=600&height=400&hl=en&q=Mian%20Bricks%20Company%20%20Faisalabad&t=&z=14&ie=UTF8&iwloc=B&output=embed"
              title="Mian Bricks Location"
              loading="lazy"
              className="absolute top-0 left-0 w-full h-full"
              frameBorder={0}
              scrolling="no"
              marginHeight={0}
              marginWidth={0}
            ></iframe>
          </div>

          {/* Info Cards */}
          <div className="space-y-6">
            <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    Address
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Main Jhumra Road Gatti Railway Station,
                    <br />
                    Near Shaheen Power Loom, Faisalabad,
                    <br />
                    Pakistan
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    Contact
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Phone: +92 300 6618358
                    <br />
                    Email: mianbricksinfo@gmail.com
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    Working Hours
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Monday - Saturday
                    <br />
                    8:00 AM - 6:00 PM
                  </p>
                </div>
              </div>
            </div>

            <Button asChild className="w-full" size="lg">
              <a href={directionsUrl} target="_blank" rel="noopener noreferrer">
                <Navigation className="w-4 h-4 mr-2" />
                Get Directions
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;
