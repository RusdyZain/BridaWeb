import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeatureSection from "@/components/FeatureSection";
import TeamSection from "@/components/TeamSection";
import ArticleSection from "@/components/ArticleSection";
import Footer from "@/components/Footer";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <FeatureSection />
      <ArticleSection />
      <TeamSection />
      <Testimonial />
      <Footer />
    </>
  );
}
