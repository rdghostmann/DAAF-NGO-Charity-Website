import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ObjectivesSection } from "@/components/objectives-section"
import { ActivitiesSection } from "@/components/activities-section"
import { DonateSection } from "@/components/donate-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ContactSection } from "@/components/contact-section"
import { StatsSection } from "@/components/stats-section"
import { FeaturedGallerySection } from "@/components/FeaturedGallerySection/FeaturedGallerySection"
import HeroSection2 from "@/components/hero-section2"
import HeroSection0 from "@/components/hero-section0"


export default function Home() {
  return (
    <main>
      {/* <HeroSection /> */}
      <HeroSection0 />
      <StatsSection />
      {/* <HeroSection2 /> */}
      <AboutSection />
      <ObjectivesSection />
      <ActivitiesSection />
      <FeaturedGallerySection />
      <TestimonialsSection />
      <DonateSection />
      <ContactSection />
    </main>
  )
}
