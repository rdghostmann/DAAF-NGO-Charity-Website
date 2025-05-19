"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin } from "lucide-react"
import Link from "next/link"

export function UpcomingEvents() {
  const events = [
    {
      title: "Annual Charity Gala",
      date: "June 15, 2025",
      time: "6:00 PM - 10:00 PM",
      location: "Grand Hotel, Asaba",
      description: "Join us for an evening of celebration and fundraising to support our various programs.",
      image: "/annual-charity-gala.png",
    },
    {
      title: "Community Health Outreach",
      date: "July 8, 2025",
      time: "9:00 AM - 4:00 PM",
      location: "St. Barnabas Community Center",
      description: "Free health screenings and consultations for community members.",
      image: "/community-health-outreach.png",
    },
    {
      title: "Volunteer Orientation",
      date: "July 20, 2025",
      time: "10:00 AM - 12:00 PM",
      location: "DAAF Headquarters, Asaba",
      description: "Learn about volunteer opportunities and how you can get involved with our work.",
      image: "/voluteer-orientation.png",
    },
  ]

  return (
    <section className="py-24">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Upcoming Events</h2>
          <p className="mx-auto max-w-3xl text-muted-foreground">
            Mark your calendar and join us at these upcoming events to support our cause.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardHeader className="p-6 pb-4">
                  <CardTitle className="text-xl">{event.title}</CardTitle>
                  <CardDescription>{event.description}</CardDescription>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span className="text-sm">{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-primary" />
                      <span className="text-sm">{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span className="text-sm">{event.location}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button asChild className="w-full">
                    <Link href="#">Register Now</Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
