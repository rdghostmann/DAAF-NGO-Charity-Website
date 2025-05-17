"use client"

import { motion } from "framer-motion"

export function PartnersSection() {
  const partners = [
    { name: "Anglican Communion", logo: "/placeholder.svg?height=100&width=200" },
    { name: "Delta State Government", logo: "/placeholder.svg?height=100&width=200" },
    { name: "UNICEF", logo: "/placeholder.svg?height=100&width=200" },
    { name: "World Health Organization", logo: "/placeholder.svg?height=100&width=200" },
    { name: "Local NGO Partner", logo: "/placeholder.svg?height=100&width=200" },
    { name: "Corporate Sponsor", logo: "/placeholder.svg?height=100&width=200" },
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
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Our Partners</h2>
          <p className="mx-auto max-w-3xl text-muted-foreground">
            We collaborate with these organizations to maximize our impact and reach.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="flex items-center justify-center"
            >
              <img
                src={partner.logo || "/placeholder.svg"}
                alt={partner.name}
                className="max-h-16 w-auto grayscale transition-all duration-300 hover:grayscale-0"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
