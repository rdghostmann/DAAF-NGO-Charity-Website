"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

export function VolunteerTestimonials() {
  const testimonials = [
    {
      quote:
        "Volunteering with DAAF has been one of the most rewarding experiences of my life. The impact we make in the community is truly meaningful.",
      author: "Sarah Williams",
      role: "Elderly Care Volunteer",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      quote:
        "I've been volunteering at St. Barnabas Orphanage for two years, and it's changed my perspective on life. The children bring so much joy and purpose.",
      author: "Michael Okonkwo",
      role: "Orphanage Assistant",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      quote:
        "As a healthcare professional, volunteering at Balm of Gilead Hospital allows me to serve those who might not otherwise have access to quality care.",
      author: "Dr. Elizabeth Adeyemi",
      role: "Healthcare Volunteer",
      image: "/placeholder.svg?height=100&width=100",
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
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Volunteer Testimonials</h2>
          <p className="mx-auto max-w-3xl text-muted-foreground">
            Hear from those who have experienced the joy and fulfillment of volunteering with us.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardContent className="p-6 text-center">
                  <Quote className="mx-auto mb-4 h-10 w-10 text-primary opacity-50" />
                  <p className="mb-6 text-lg font-medium">"{testimonial.quote}"</p>
                  <div className="flex flex-col items-center">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.author}
                      className="mb-3 h-16 w-16 rounded-full object-cover"
                    />
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
