"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Users, BookOpen, Stethoscope, TractorIcon as Farm, Calendar } from "lucide-react"

export function VolunteerOpportunities() {
  const opportunities = [
    {
      title: "Elderly Care Support",
      description: "Assist with our elderly care program by providing companionship and support to seniors.",
      icon: <Heart className="h-10 w-10 text-primary" />,
      commitment: "4-6 hours per week",
    },
    {
      title: "Orphanage Assistant",
      description: "Help care for children at St. Barnabas Orphanage Home through tutoring and activities.",
      icon: <Users className="h-10 w-10 text-primary" />,
      commitment: "6-8 hours per week",
    },
    {
      title: "Education Mentor",
      description: "Mentor and tutor students in our educational programs to help them succeed academically.",
      icon: <BookOpen className="h-10 w-10 text-primary" />,
      commitment: "2-4 hours per week",
    },
    {
      title: "Healthcare Assistant",
      description: "Support our healthcare initiatives by assisting medical staff at Balm of Gilead Hospital.",
      icon: <Stethoscope className="h-10 w-10 text-primary" />,
      commitment: "8-10 hours per week",
    },
    {
      title: "Farm Volunteer",
      description: "Help with agricultural activities at our Ewulu Integrated Farm to promote food security.",
      icon: <Farm className="h-10 w-10 text-primary" />,
      commitment: "4-8 hours per week",
    },
    {
      title: "Event Coordinator",
      description: "Assist with planning and organizing fundraising and community events.",
      icon: <Calendar className="h-10 w-10 text-primary" />,
      commitment: "Variable, project-based",
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
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Volunteer Opportunities</h2>
          <p className="mx-auto max-w-3xl text-muted-foreground">
            Explore the various ways you can contribute your time and talents to our mission.
          </p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {opportunities.map((opportunity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <div className="mb-4 rounded-full bg-primary/10 p-3 text-primary">{opportunity.icon}</div>
                  <CardTitle>{opportunity.title}</CardTitle>
                  <CardDescription>Time Commitment: {opportunity.commitment}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{opportunity.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
