import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/public/HeroSection";
import FeaturesSection from "@/components/public/FeaturesSection";
import ProductsSection from "@/components/public/ProductsSection";
import CTASection from "@/components/public/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-cairo">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <ProductsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
