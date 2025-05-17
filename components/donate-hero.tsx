"use client"

import { motion } from "framer-motion"

export function DonateHero() {
  return (
    <section className="relative bg-primary/10 py-24 md:py-32">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Make a <span className="text-primary">Donation</span>
          </h1>
          <p className="mb-8 text-xl text-muted-foreground">
            Your generous contribution helps us continue our mission of serving and empowering vulnerable individuals
            and communities.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
