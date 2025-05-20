import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ObjectivesSection } from "@/components/objectives-section"
import { ActivitiesSection } from "@/components/activities-section"
import { DonateSection } from "@/components/donate-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ContactSection } from "@/components/contact-section"
import { StatsSection } from "@/components/stats-section"
import { PhotoGallery } from "@/components/photo-gallery"
import { Suspense } from "react"
import { FeaturedGallerySection } from "@/components/FeaturedGallerySection/FeaturedGallerySection"


// Sample gallery data
const galleryData = [
  {
    id: "elder-care",
    title: "Elderly Care Ministry",
    description: "Supporting and caring for the elderly in our community with dignity and respect.",
    images: [
      {
        id: "elder-care-1",
        src: "/elderly-care-ministry-1-1.png",
        alt: "Elderly care support - 1",
      },
      {
        id: "elder-care-2",
        src: "/elderly-care-ministry-1.png",
        alt: "Elderly care support - 2",
      },
      {
        id: "elder-care-3",
        src: "/elderly-care-ministry-2.png",
        alt: "Elderly care support - 3",
      },
    ],
  },
  {
    id: "stbarnabas",
    title: "St. Barnabas Orphanage Home",
    description: "Providing a loving home and care for orphaned children in our community.",
    images: [
      {
        id: "stbarnabas-1",
        src: "/st-barnabas-orphanage-1.png",
        alt: "St. Barnabas Orphanage - 1",
      },
      {
        id: "stbarnabas-2",
        src: "/st-barnabas-orphanage-2.png",
        alt: "St. Barnabas Orphanage - 2",
      },
      {
        id: "stbarnabas-3",
        src: "/st-barnabas-orphanage-3.png",
        alt: "St. Barnabas Orphanage - 3",
      },
      {
        id: "stbarnabas-4",
        src: "/st-barnabas-orphanage-4.png",
        alt: "St. Barnabas Orphanage - 4",
      },
      {
        id: "stbarnabas-5",
        src: "/st-barnabas-orphanage-5.png",
        alt: "St. Barnabas Orphanage - 5",
      },
      {
        id: "stbarnabas-6",
        src: "/st-barnabas-orphanage-6.png",
        alt: "St. Barnabas Orphanage - 6",
      },
    ],
  },
  {
    id: "balm-hospital",
    title: "Balm of Gilead Hospital",
    description: "Providing quality healthcare services to those in need through our hospital.",
    images: [
      {
        id: "balm-1",
        src: "/health-care-services-1.png",
        alt: "Balm of Gilead Hospital - 1",
      },
      {
        id: "balm-2",
        src: "/health-care-services-2.png",
        alt: "Balm of Gilead Hospital - 2",
      },
      {
        id: "balm-3",
        src: "/health-care-services-3.png",
        alt: "Balm of Gilead Hospital - 3",
      },
      {
        id: "balm-4",
        src: "/health-care-services-4.png",
        alt: "Balm of Gilead Hospital - 4",
      },
      {
        id: "balm-5",
        src: "/health-care-5.png",
        alt: "Balm of Gilead Hospital - 5",
      },
      {
        id: "balm-6",
        src: "/health-care-services-6.png",
        alt: "Balm of Gilead Hospital - 6",
      },
      {
        id: "balm-7",
        src: "/health-care-7.png",
        alt: "Balm of Gilead Hospital - 7",
      },
      {
        id: "balm-8",
        src: "/health-care-8.png",
        alt: "Balm of Gilead Hospital - 8",
      },
      {
        id: "balm-9",
        src: "/health-care-9.png",
        alt: "Balm of Gilead Hospital - 9",
      },
    ],
  },
  {
    id: "ewulu-farm",
    title: "Food Security - Ewulu Integrated Farm",
    description: "Promoting sustainable agriculture and food security through our integrated farm.",
    images: [
      {
        id: "ewulu-1",
        src: "/food-security.png",
        alt: "Ewulu Integrated Farm - 1",
      },
    ],
  },
  {
    id: "correctional-center",
    title: "Correctional Center Ministry",
    description: "Providing spiritual and material support to those in correctional facilities.",
    images: [
      {
        id: "correctional-1",
        src: "/correctional-center-1.png",
        alt: "Correctional Center Ministry - 1",
      },
      {
        id: "correctional-2",
        src: "/correctional-center-2.png",
        alt: "Correctional Center Ministry - 2",
      },
      {
        id: "correctional-3",
        src: "/correctional-center-3.png",
        alt: "Correctional Center Ministry - 3",
      },
      {
        id: "correctional-4",
        src: "/health-care-5.png",
        alt: "Correctional Center Ministry - 4",
      },
    ],
  },
  {
    id: "scholarship-fund",
    title: "Education Scholarship Fund",
    description: "Supporting education for underprivileged children in our community.",
    images: [
      {
        id: "scholarship-1",
        src: "/st-barnabas-orphanage-6-1.png",
        alt: "Education Scholarship Fund - 1",
      },
      {
        id: "scholarship-2",
        src: "/st-barnabas-orphanage-5.png",
        alt: "Education Scholarship Fund - 2",
      },
    ],
  },
  {
    id: "hospitality-prison",
    title: "Hospitality and Prison Visitation",
    description: "Visiting and supporting individuals in hospitals and correctional centers, offering hope, care, and encouragement.",
    images: [
      {
        id: "hospitality-1",
        src: "/food-security.png",
        alt: "Hospitality and Prison Visitation - 1",
      },
      {
        id: "hospitality-2",
        src: "/food-security.png",
        alt: "Hospitality and Prison Visitation - 2",
      },
    ],
  },

]


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
