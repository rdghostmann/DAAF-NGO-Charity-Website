"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Users, Home, Stethoscope, Building, Lightbulb, Megaphone, Apple, Award } from "lucide-react"

export function ObjectivesSection() {
  const objectives = [
    {
      title: "Empower Vulnerable Individuals",
      icon: <Users className="h-10 w-10 text-primary" />,
    },
    {
      title: "Reduce Poverty",
      icon: <Home className="h-10 w-10 text-primary" />,
    },
    {
      title: "Provide Support & Resources",
      icon: <Heart className="h-10 w-10 text-primary" />,
    },
    {
      title: "Enhance Entrepreneurship",
      icon: <Lightbulb className="h-10 w-10 text-primary" />,
    },
    {
      title: "Provide Healthcare Services",
      icon: <Stethoscope className="h-10 w-10 text-primary" />,
    },
    {
      title: "Community Development",
      icon: <Building className="h-10 w-10 text-primary" />,
    },
    {
      title: "Leadership Development",
      icon: <Award className="h-10 w-10 text-primary" />,
    },
    {
      title: "Advocacy & Outreach",
      icon: <Megaphone className="h-10 w-10 text-primary" />,
    },
    {
      title: "Enhance Food Security",
      icon: <Apple className="h-10 w-10 text-primary" />,
    },
  ]

  return (
    <section id="objectives" className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Our Objectives</h2>
          <p className="mx-auto max-w-3xl text-muted-foreground">
            The Diocese of Asaba Agape Foundation (DAAF) is committed to these key objectives that guide our work and
            impact in the community.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {objectives.map((objective, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full overflow-hidden transition-all hover:shadow-lg">
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  {objective.icon}
                  <CardTitle className="text-xl">{objective.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Working to create lasting positive change through our focused initiatives.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
