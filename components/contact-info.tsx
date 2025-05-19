"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export function ContactInfo() {
  const contactInfo = [
    {
      icon: <MapPin className="h-8 w-8 text-primary" />,
      title: "Our Address",
      details: ["Bishopscourt, 60 Dennis Osadebay Way,", "P.O. Box 216, Asaba, Delta State, Nigeria"],
    },
    {
      icon: <Phone className="h-8 w-8 text-primary" />,
      title: "Phone Numbers",
      details: [
        "Rt. Revd Kingsley Obuh: ",
        "Revd. Canon Prosper Okoh: ",
        "Lady Patience Ogbewe: ",
      ],
    },
    {
      icon: <Mail className="h-8 w-8 text-primary" />,
      title: "Email Address",
      details: ["DaafDoA@gmail.com", "info@daaf.org"],
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: "Office Hours",
      details: ["Monday - Friday: 8:00 AM - 5:00 PM", "Saturday: 9:00 AM - 1:00 PM", "Sunday: Closed"],
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
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Contact Information</h2>
          <p className="mx-auto max-w-3xl text-muted-foreground">Reach out to us through any of these channels.</p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className="mb-4 rounded-full bg-primary/10 p-3">{info.icon}</div>
                  <h3 className="mb-2 text-xl font-bold">{info.title}</h3>
                  <div className="space-y-1 text-muted-foreground">
                    {info.details.map((detail, i) => (
                      <p key={i}>{detail}</p>
                    ))}
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
