import { AboutHero } from "@/components/about-hero"
import { AboutMission } from "@/components/about-mission"
import { TeamSection } from "@/components/team-section"
import { HistorySection } from "@/components/history-section"
import { PartnersSection } from "@/components/partners-section"
import { CallToAction } from "@/components/call-to-action"
import { ObjectivesSection } from "@/components/objectives-section"
import { CallToActionWithProfile } from "@/components/CallToActionWithProfile"

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <AboutMission />
      <ObjectivesSection />
      <CallToActionWithProfile />
      <HistorySection />
      <TeamSection />
      <PartnersSection />
      <CallToAction />
    </main>
  )
}
