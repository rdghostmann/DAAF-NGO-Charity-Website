import { ContactHero } from "@/components/contact-hero"
import { ContactForm } from "@/components/contact-form"
import { ContactInfo } from "@/components/contact-info"
import { ContactMap } from "@/components/contact-map"
import { FAQ } from "@/components/faq"

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <ContactInfo />
      <ContactForm />
      <ContactMap />
      <FAQ />
    </main>
  )
}
