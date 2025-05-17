"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "./ui/calendar"

export function EventsCalendar() {
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
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Events Calendar</h2>
          <p className="mx-auto max-w-3xl text-muted-foreground">
            View our upcoming events and plan your participation.
          </p>
        </motion.div>

        <div className="mx-auto max-w-3xl">
          <Card>
            <CardHeader>
              <CardTitle className="text-center">June 2025</CardTitle>
            </CardHeader>
            <CardContent>
              <Calendar mode="single" selected={new Date()} className="mx-auto" />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
