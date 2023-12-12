import Features from "@/components/Features";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Products from "@/components/Products";
import Services from "@/components/Services";

const HomePage = () => {
  return (
    <main>
      <Hero />
      <Features />
      <Services />
      <Pricing />
      <Products />
      <Gallery />
    </main>
  );
};

export default HomePage;
