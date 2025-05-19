"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Heart, Users, Home, BookOpen, Stethoscope } from "lucide-react"
import Link from "next/link"

export function ActivitiesSection() {
  const activities = [
    {
      id: "elderly",
      title: "Elderly Care Ministry",
      description: "Supporting and caring for the elderly in our community with dignity and respect.",
      icon: <Users className="h-6 w-6" />,
      image: "/elderly-care-ministry-2.png",
    },
    {
      id: "correctional",
      title: "Correctional Center & Hospital Ministries",
      description: "Providing spiritual and material support to those in correctional facilities and hospitals.",
      icon: <Heart className="h-6 w-6" />,
      image: "/correctional-center-1.png",
    },
    {
      id: "orphanage",
      title: "St. Barnabas Orphanage Home",
      description: "Providing a loving home and care for orphaned children in our community.",
      icon: <Home className="h-6 w-6" />,
      image: "/st-barnabas-orphanage-3.png",
    },
    {
      id: "farm",
      title: "Food Security - Ewulu Integrated Farm",
      description: "Promoting sustainable agriculture and food security through our integrated farm.",
      icon: <BookOpen className="h-6 w-6" />,
      image: "/food-security.jpg",
    },
    {
      id: "healthcare",
      title: "Health Care Services – Balm of Gilead Hospital",
      description: "Providing quality healthcare services to those in need through our hospital.",
      icon: <Stethoscope className="h-6 w-6" />,
      image: "/health-care-services-1.jpg",
    },
  ]

  return (
    <section id="activities" className="bg-muted/30 py-24">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Our Activities</h2>
          <p className="mx-auto max-w-3xl text-muted-foreground">
            Explore the various programs and initiatives through which we serve and empower our community.
          </p>
        </motion.div>

        <Tabs defaultValue="elderly" className="mx-auto max-w-4xl">
          <TabsList className="mb-8 grid w-full grid-cols-2 gap-2 md:grid-cols-5">
            {activities.map((activity) => (
              <TabsTrigger key={activity.id} value={activity.id} className="text-xs md:text-sm">
                {/* {activity.title.split(" ")[1]} */}
                {activity.title.split(" ").slice(0, 2).join(" ")}
              </TabsTrigger>
            ))}
          </TabsList>
          {activities.map((activity) => (
            <TabsContent key={activity.id} value={activity.id}>
              <Card>
                <div className="grid md:grid-cols-2">
                  <div className="overflow-hidden">
                    <motion.img
                      initial={{ scale: 1.1 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5 }}
                      src={activity.image}
                      alt={activity.title}
                      className="h-full w-full object-cover"
                      fetchPriority="auto"
                    />
                  </div>
                  <div className="flex flex-col">
                    <CardHeader>
                      <div className="mb-2 flex items-center gap-2">
                        <div className="rounded-full bg-primary/10 p-2 text-primary">{activity.icon}</div>
                      </div>
                      <CardTitle>{activity.title}</CardTitle>
                      <CardDescription className="text-base">{activity.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <p className="text-muted-foreground">
                        Through this program, we aim to make a lasting positive impact on the lives of those we serve,
                        embodying our mission of compassion and service.
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Button asChild>
                        <Link href="#donate">Support This Program</Link>
                      </Button>
                    </CardFooter>
                  </div>
                </div>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
