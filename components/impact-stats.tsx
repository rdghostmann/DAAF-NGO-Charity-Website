"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Home, Heart, BookOpen } from "lucide-react"

export function ImpactStats() {
  const stats = [
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      value: "1,000+",
      label: "Lives Impacted",
    },
    {
      icon: <Home className="h-10 w-10 text-primary" />,
      value: "50+",
      label: "Orphans Supported",
    },
    {
      icon: <Heart className="h-10 w-10 text-primary" />,
      value: "5,000+",
      label: "Medical Treatments",
    },
    {
      icon: <BookOpen className="h-10 w-10 text-primary" />,
      value: "200+",
      label: "Educational Scholarships",
    },
  ]

  return (
    <section className="bg-primary/5 py-24">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Our Impact</h2>
          <p className="mx-auto max-w-3xl text-muted-foreground">
            Through your generous support, we've been able to make a significant difference in our communities.
          </p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="border-none bg-white shadow-lg">
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className="mb-4 rounded-full bg-primary/10 p-3">{stat.icon}</div>
                  <h3 className="mb-2 text-4xl font-bold text-primary">{stat.value}</h3>
                  <p className="text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
