import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ObjectivesSection } from "@/components/objectives-section"
import { ActivitiesSection } from "@/components/activities-section"
import { DonateSection } from "@/components/donate-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ContactSection } from "@/components/contact-section"
import { StatsSection } from "@/components/stats-section"
import { FeaturedGallerySection } from "@/components/FeaturedGallerySection/FeaturedGallerySection"


export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <StatsSection />
      <ObjectivesSection />
      <ActivitiesSection />
      <FeaturedGallerySection />
      <TestimonialsSection />
      <DonateSection />
      <ContactSection />
    </main>
  )
}
