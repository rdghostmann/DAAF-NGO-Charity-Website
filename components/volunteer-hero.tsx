"use client"

import { motion } from "framer-motion"

export function VolunteerHero() {
  return (
    <section className="relative bg-primary/10 py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Become a <span className="text-primary">Volunteer</span>
          </h1>
          <p className="mb-8 text-xl text-muted-foreground">
            Join our team of dedicated volunteers and help us make a difference in our community.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
