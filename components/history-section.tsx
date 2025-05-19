"use client"

import { motion } from "framer-motion"
import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
} from "@/components/ui/timeline"

export function HistorySection() {
  const milestones = [
    {
      year: "2008",
      title: "Foundation Established",
      description: "The Diocese of Asaba Agape Foundation was officially established to serve the community.",
    },
    {
      year: "2010",
      title: "St. Barnabas Orphanage Home",
      description: "Opened our first orphanage home to provide care for vulnerable children.",
    },
    {
      year: "2013",
      title: "Balm of Gilead Hospital",
      description: "Established our healthcare facility to provide medical services to the community.",
    },
    {
      year: "2015",
      title: "Food Security - Ewulu Integrated Farm",
      description: "Launched our sustainable agriculture initiative to promote food security.",
    },
    {
      year: "2020",
      title: "Expanded Community Outreach",
      description: "Significantly expanded our programs to reach more communities in need.",
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
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Our History</h2>
          <p className="mx-auto max-w-3xl text-muted-foreground">
            Tracing our journey of service, compassion, and impact through the years.
          </p>
        </motion.div>

        <div className="mx-auto max-w-4xl">
          <Timeline>
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <TimelineItem>
                  {index !== milestones.length - 1 && <TimelineConnector />}
                  <TimelineHeader>
                    <TimelineIcon className="bg-primary" />
                    <div className="flex flex-col gap-1">
                      <h3 className="text-xl font-bold">{milestone.year}</h3>
                      <p className="text-lg font-medium">{milestone.title}</p>
                    </div>
                  </TimelineHeader>
                  <TimelineBody className="pt-2">
                    <p className="text-muted-foreground">{milestone.description}</p>
                  </TimelineBody>
                </TimelineItem>
              </motion.div>
            ))}
          </Timeline>
        </div>
      </div>
    </section>
  )
}
