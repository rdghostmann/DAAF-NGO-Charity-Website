"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, User } from "lucide-react"
import Link from "next/link"

export function BlogGrid() {
  const posts = [
    {
      title: "Transforming Lives Through Healthcare Access",
      excerpt: "How our Balm of Gilead Hospital is making healthcare accessible to underserved communities.",
      date: "May 10, 2025",
      author: "Dr. Elizabeth Adeyemi",
      category: "Healthcare",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "The Impact of Education on Community Development",
      excerpt: "Exploring how our educational initiatives are empowering the next generation.",
      date: "May 5, 2025",
      author: "Prof. James Okafor",
      category: "Education",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Sustainable Farming Practices at Ewulu Farm",
      excerpt: "A look at how we're promoting food security through sustainable agricultural practices.",
      date: "April 28, 2025",
      author: "Engr. Samuel Nwachukwu",
      category: "Agriculture",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Supporting the Elderly in Our Community",
      excerpt: "Stories from our Elderly Care Ministry and the difference it's making in seniors' lives.",
      date: "April 20, 2025",
      author: "Mrs. Grace Okoro",
      category: "Elderly Care",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Volunteer Spotlight: Meet Our Dedicated Team",
      excerpt: "Highlighting the amazing volunteers who make our work possible.",
      date: "April 15, 2025",
      author: "Sarah Williams",
      category: "Volunteers",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Annual Charity Gala: A Night to Remember",
      excerpt: "Recap of our successful fundraising event and the impact it will have on our programs.",
      date: "April 8, 2025",
      author: "Michael Okonkwo",
      category: "Events",
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  return (
    <section className="py-24">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
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
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardHeader className="p-6 pb-4">
                  <div className="mb-2 flex items-center gap-2">
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      {post.category}
                    </span>
                  </div>
                  <CardTitle className="text-xl">{post.title}</CardTitle>
                  <CardDescription>{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button asChild variant="outline" className="w-full">
                    <Link href="#">Read More</Link>
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
