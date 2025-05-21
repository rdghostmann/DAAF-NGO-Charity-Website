import { DonateHero } from "@/components/donate-hero"
import { DonationForm } from "@/components/donation-form"
import { DonationImpact } from "@/components/donation-impact"
import { DonationFAQ } from "@/components/donation-faq"
import { DonationTestimonials } from "@/components/donation-testimonials"
import AccountDetail from "@/components/AcccountDetail"
import AccountDetail1 from "@/components/AccountDetail-1"

export default function DonatePage() {
  return (
    <main>
      <DonateHero />
      <DonationForm />
      <DonationImpact />
      <AccountDetail />
      <AccountDetail1 />
      <DonationTestimonials />
      <DonationFAQ />
    </main>
  )
}
