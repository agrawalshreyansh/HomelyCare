import Header from "@/app/(landing)/components/layout/Header";
import Footer from "@/app/(landing)/components/layout/Footer";
import HeroSection from "@/app/(landing)/components/sections/HeroSection";
import ServicesSection from "@/app/(landing)/components/sections/ServicesSection";
import HowItWorksSection from "@/app/(landing)/components/sections/HowItWorksSection";
import FeaturesSection from "@/app/(landing)/components/sections/FeaturesSection";
import TestimonialsSection from "@/app/(landing)/components/sections/TestimonialsSection";

export default function Home() {
  return (
    <div className="relative flex min-h-screen w-full flex-col group/design-root overflow-x-hidden bg-background-light dark:bg-background-dark">
      <div className="layout-container flex h-full grow flex-col">
        <Header />
        
        <main className="flex-1">
          <HeroSection />
          
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
            <ServicesSection />
            <HowItWorksSection />
            <FeaturesSection />
          </div>
          
          <TestimonialsSection />
        </main>
        
        <Footer />
      </div>
    </div>
  );
}
