import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import HeroCarousel from "@/components/home/HeroCarousel";
import ManufacturingProcess from "@/components/home/ManufacturingProcess";
import ProductsPreview from "@/components/home/ProductsPreview";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import LocationMap from "@/components/home/LocationMap";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Mian Bricks - Premium Quality Brick Manufacturer in Pakistan</title>
        <meta name="description" content="Mian Bricks is a leading brick manufacturer with 25+ years of experience. High-quality clay bricks for residential, commercial & industrial construction." />
        <meta name="keywords" content="bricks, brick manufacturer, clay bricks, construction, Pakistan, Gujranwala" />
      </Helmet>
      <Layout>
        <HeroCarousel />
        <ManufacturingProcess />
        <ProductsPreview />
        <WhyChooseUs />
        <LocationMap />
        <CTASection />
      </Layout>
    </>
  );
};

export default Index;
