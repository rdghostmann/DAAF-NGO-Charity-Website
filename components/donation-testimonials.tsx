"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

export function DonationTestimonials() {
  const testimonials = [
    {
      quote:
        "Thanks to the generous donations to DAAF, I received a scholarship that allowed me to continue my education. I'm now studying to become a doctor so I can give back to my community.",
      author: "Chioma Nwosu",
      role: "Scholarship Recipient",
    },
    {
      quote:
        "The medical care I received at Balm of Gilead Hospital saved my life. I'm grateful to the donors who make these services possible for people like me who couldn't otherwise afford them.",
      author: "Emmanuel Adebayo",
      role: "Patient",
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
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Stories of Impact</h2>
          <p className="mx-auto max-w-3xl text-muted-foreground">
            Hear from those whose lives have been transformed through your generosity.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <Quote className="mb-4 h-8 w-8 text-primary opacity-50" />
                  <p className="mb-6 text-lg font-medium">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
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
