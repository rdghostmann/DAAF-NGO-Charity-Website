import { CausesHero } from "@/components/causes-hero"
import { CausesGrid } from "@/components/causes-grid"
import { ImpactStats } from "@/components/impact-stats"
import { CallToAction } from "@/components/call-to-action"

export default function CausesPage() {
  return (
    <main>
      <CausesHero />
      <CausesGrid />
      <ImpactStats />
      <CallToAction />
    </main>
  )
}
