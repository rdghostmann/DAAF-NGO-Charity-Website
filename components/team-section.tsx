"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Facebook, Twitter, Linkedin } from "lucide-react"

export function TeamSection() {
  const team = [
    {
      name: "Rt. Revd Kingsley Obuh",
      role: "Chairman",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Leading the Diocese of Asaba with vision and compassion.",
    },
    {
      name: "Revd. Canon Prosper Okoh",
      role: "Executive Director",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Overseeing the daily operations and strategic direction of DAAF.",
    },
    {
      name: "Lady Patience Ogbewe",
      role: "Program Director",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Coordinating our various programs and initiatives with dedication.",
    },
    {
      name: "Revd Canon Nnaoma Ijezie",
      role: "Community Outreach",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Building relationships with communities and partners.",
    },
  ]

  return (
    <section className="bg-muted/30 py-24">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Our Leadership Team</h2>
          <p className="mx-auto max-w-3xl text-muted-foreground">
            Meet the dedicated individuals who guide our organization with vision, compassion, and expertise.
          </p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="mb-1 text-xl font-bold">{member.name}</h3>
                  <p className="mb-3 text-sm font-medium text-primary">{member.role}</p>
                  <p className="mb-4 text-sm text-muted-foreground">{member.bio}</p>
                  <div className="flex justify-center gap-4">
                    <a href="#" className="text-muted-foreground hover:text-primary">
                      <Facebook className="h-5 w-5" />
                      <span className="sr-only">Facebook</span>
                    </a>
                    <a href="#" className="text-muted-foreground hover:text-primary">
                      <Twitter className="h-5 w-5" />
                      <span className="sr-only">Twitter</span>
                    </a>
                    <a href="#" className="text-muted-foreground hover:text-primary">
                      <Linkedin className="h-5 w-5" />
                      <span className="sr-only">LinkedIn</span>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
