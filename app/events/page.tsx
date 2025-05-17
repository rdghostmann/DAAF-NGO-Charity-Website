import { EventsHero } from "@/components/events-hero"
import { EventsCalendar } from "@/components/events-calendar"
import { UpcomingEvents } from "@/components/upcoming-events"
import { PastEvents } from "@/components/past-events"
import { CallToAction } from "@/components/call-to-action"

export default function EventsPage() {
  return (
    <main>
      <EventsHero />
      <UpcomingEvents />
      <EventsCalendar />
      <PastEvents />
      <CallToAction />
    </main>
  )
}
