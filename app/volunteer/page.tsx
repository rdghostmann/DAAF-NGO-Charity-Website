import { VolunteerHero } from "@/components/volunteer-hero"
import { VolunteerOpportunities } from "@/components/volunteer-opportunities"
import { VolunteerForm } from "@/components/volunteer-form"
import { VolunteerTestimonials } from "@/components/volunteer-testimonials"
import { CallToAction } from "@/components/call-to-action"

export default function VolunteerPage() {
  return (
    <main>
      <VolunteerHero />
      <VolunteerOpportunities />
      <VolunteerForm />
      <CallToAction />
      <VolunteerTestimonials />
    </main>
  )
}
