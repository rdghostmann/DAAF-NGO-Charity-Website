"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CallToAction() {
  return (
    <section className="bg-primary py-16 text-white">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Join Us in Making a Difference</h2>
            <p className="mb-8 text-lg text-white/80">
              Your support can help us continue our mission of serving and empowering vulnerable individuals and
              communities.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" variant="secondary" className="h-12 px-8">
                <Link href="/donate">Donate Now</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-12 border-white px-8 text-blue-500 hover:bg-white"
              >
                <Link href="/volunteer">Become a Volunteer</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
