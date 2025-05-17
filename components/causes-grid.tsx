"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import Link from "next/link"

export function CausesGrid() {
  const causes = [
    {
      title: "Elderly Care Ministry",
      description: "Supporting and caring for the elderly in our community with dignity and respect.",
      image: "/placeholder.svg?height=400&width=600",
      raised: 15000,
      goal: 25000,
      progress: 60,
    },
    {
      title: "St. Barnabas Orphanage Home",
      description: "Providing a loving home and care for orphaned children in our community.",
      image: "/placeholder.svg?height=400&width=600",
      raised: 35000,
      goal: 50000,
      progress: 70,
    },
    {
      title: "Balm of Gilead Hospital",
      description: "Providing quality healthcare services to those in need through our hospital.",
      image: "/placeholder.svg?height=400&width=600",
      raised: 45000,
      goal: 100000,
      progress: 45,
    },
    {
      title: "Ewulu Integrated Farm",
      description: "Promoting sustainable agriculture and food security through our integrated farm.",
      image: "/placeholder.svg?height=400&width=600",
      raised: 20000,
      goal: 40000,
      progress: 50,
    },
    {
      title: "Correctional Center Ministry",
      description: "Providing spiritual and material support to those in correctional facilities.",
      image: "/placeholder.svg?height=400&width=600",
      raised: 8000,
      goal: 20000,
      progress: 40,
    },
    {
      title: "Education Scholarship Fund",
      description: "Supporting education for underprivileged children in our community.",
      image: "/placeholder.svg?height=400&width=600",
      raised: 12000,
      goal: 30000,
      progress: 40,
    },
  ]

  return (
    <section className="py-24">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {causes.map((cause, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={cause.image || "/placeholder.svg"}
                    alt={cause.title}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardHeader className="p-6 pb-4">
                  <CardTitle className="text-xl">{cause.title}</CardTitle>
                  <CardDescription>{cause.description}</CardDescription>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <div className="mb-2 flex justify-between text-sm">
                    <span>Raised: ₦{cause.raised.toLocaleString()}</span>
                    <span>Goal: ₦{cause.goal.toLocaleString()}</span>
                  </div>
                  <Progress value={cause.progress} className="h-2" />
                  <p className="mt-2 text-right text-sm font-medium">{cause.progress}% Complete</p>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button asChild className="w-full">
                    <Link href="/donate">Donate Now</Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
