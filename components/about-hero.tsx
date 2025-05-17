"use client"

import { motion } from "framer-motion"

export function AboutHero() {
  return (
    <section className="relative bg-primary/10 py-24 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center"
          >
            <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              About <span className="text-primary">DAAF</span>
            </h1>
            <p className="mb-6 text-xl text-muted-foreground">
              Learn about our mission, vision, and the impact we're making in communities across Nigeria.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <div className="h-1 w-12 bg-primary"></div>
                <span className="text-sm font-medium">Est. 2008</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-1 w-12 bg-primary"></div>
                <span className="text-sm font-medium">1000+ Lives Impacted</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-1 w-12 bg-primary"></div>
                <span className="text-sm font-medium">5+ Active Programs</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative aspect-video overflow-hidden rounded-lg md:aspect-auto md:h-full"
          >
            <img
              src="/placeholder.svg?height=600&width=800"
              alt="DAAF team members working in the community"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
