import { DonateHero } from "@/components/donate-hero"
import { DonationForm } from "@/components/donation-form"
import { DonationImpact } from "@/components/donation-impact"
import { DonationFAQ } from "@/components/donation-faq"
import { DonationTestimonials } from "@/components/donation-testimonials"

export default function DonatePage() {
  return (
    <main>
      <DonateHero />
      <DonationForm />
      <DonationImpact />
      <DonationTestimonials />
      <DonationFAQ />
    </main>
  )
}
