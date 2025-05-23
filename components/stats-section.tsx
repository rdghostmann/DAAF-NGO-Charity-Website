"use client"

import { motion } from "framer-motion"
import CountUp from "react-countup"

export function StatsSection() {
  const stats = [
    { value: 1000, suffix: "+", label: "Lives Impacted" },
    { value: 15, suffix: "+", label: "Years of Service" },
    { value: 5, suffix: "+", label: "Active Programs" },
    { value: 100, suffix: "+", label: "Volunteers" },
  ]

  return (
    <section className="bg-primary py-16 text-primary-foreground">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center justify-center text-center"
            >
              <div className="text-4xl font-bold md:text-5xl">
                <CountUp end={stat.value} duration={2} suffix={stat.suffix} />
              </div>
              <div className="mt-2 text-sm font-medium md:text-base">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}