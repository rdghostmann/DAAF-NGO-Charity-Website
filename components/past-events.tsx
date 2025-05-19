"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function PastEvents() {
  const events = [
    {
      year: "2024",
      events: [
        {
          title: "Annual Charity Gala",
          date: "March 15, 2024",
          description: "A successful fundraising event that raised over ₦5 million for our programs.",
          image: "/st-barnabas-5.jpg",
        },
        {
          title: "Community Health Outreach",
          date: "February 8, 2024",
          description: "Provided free health screenings to over 500 community members.",
          image: "/community-outreach.png",
        },
      ],
    },
    {
      year: "2023",
      events: [
        {
          title: "Christmas Charity Drive",
          date: "December 20, 2023",
          description: "Distributed gifts and food to over 200 families in need.",
          image: "/christmas-charity-drive.png",
        },
        {
          title: "Volunteer Appreciation Day",
          date: "November 5, 2023",
          description: "Celebrated the dedication and service of our volunteers.",
          image: "/voluteer-appreciation-day.png",
        },
      ],
    },
  ]

  return (
    <section className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Past Events</h2>
          <p className="mx-auto max-w-3xl text-muted-foreground">
            A look back at some of our previous events and the impact they made.
          </p>
        </motion.div>

        <div className="mx-auto max-w-4xl">
          <Tabs defaultValue="2024">
            <TabsList className="mb-8 grid w-full grid-cols-2">
              <TabsTrigger value="2024">2024</TabsTrigger>
              <TabsTrigger value="2023">2023</TabsTrigger>
            </TabsList>
            {events.map((yearEvents) => (
              <TabsContent key={yearEvents.year} value={yearEvents.year}>
                <div className="grid gap-8 md:grid-cols-2">
                  {yearEvents.events.map((event, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Card>
                        <CardContent className="p-0">
                          <div className="aspect-video overflow-hidden">
                            <img
                              src={event.image || "/placeholder.svg"}
                              alt={event.title}
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <div className="p-6">
                            <h3 className="mb-1 text-xl font-bold">{event.title}</h3>
                            <p className="mb-2 text-sm text-primary">{event.date}</p>
                            <p className="text-muted-foreground">{event.description}</p>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  )
}
