"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

export function DonationImpact() {
  const impacts = [
    {
      amount: "₦5,000",
      description: "Provides meals for 10 children at St. Barnabas Orphanage for a day",
    },
    {
      amount: "₦10,000",
      description: "Supplies basic medical care for 5 elderly individuals for a week",
    },
    {
      amount: "₦20,000",
      description: "Funds educational materials for 8 students for a month",
    },
    {
      amount: "₦50,000",
      description: "Supports farming tools and seeds for sustainable agriculture initiatives",
    },
  ]

  return (
    <section className="bg-primary/5 py-24">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Your Donation's Impact</h2>
          <p className="mx-auto max-w-3xl text-muted-foreground">
            See how your contribution makes a real difference in the lives of those we serve.
          </p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {impacts.map((impact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-none shadow-lg">
                <CardContent className="flex h-full flex-col items-center justify-center p-6 text-center">
                  <div className="mb-4 text-3xl font-bold text-primary">{impact.amount}</div>
                  <p className="text-muted-foreground">{impact.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
