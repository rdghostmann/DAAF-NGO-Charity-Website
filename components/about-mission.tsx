"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Target, Heart, Users } from "lucide-react"

export function AboutMission() {
  const items = [
    {
      icon: <Target className="h-10 w-10 text-primary" />,
      title: "Our Mission",
      description:
        "To serve and empower individuals, families, and communities in the Diocese of Asaba and beyond, through education, healthcare, food security, economic empowerment, social services and spiritual growth initiatives, while promoting values of compassion, justice, and inclusivity.",
    },
    {
      icon: <Heart className="h-10 w-10 text-primary" />,
      title: "Our Vision",
      description:
        "To be a leading catalyst for positive change, fostering hope, dignity and self-sufficiency among individuals and communities while reflecting the love and compassion of God through holistic development and service.",
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Our Values",
      description:
        "Compassion, Integrity, Respect, Excellence, and Stewardship guide our work. We believe in the dignity of every person and are committed to sustainable, community-led development.",
    },
  ]

  return (
    <section className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-3">
            {items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full border-none shadow-lg">
                  <CardContent className="flex h-full flex-col p-6">
                    <div className="mb-4 rounded-full bg-primary/10 p-3 text-primary">{item.icon}</div>
                    <h3 className="mb-2 text-2xl font-bold">{item.title}</h3>
                    <p className="flex-1 text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
