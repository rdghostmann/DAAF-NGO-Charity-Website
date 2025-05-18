"use client"

import { useState, useEffect, useCallback } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "The support I received from DAAF changed my life. They provided not just material help, but also the emotional support I needed during a difficult time.",
      author: "Mary Johnson",
      role: "Community Member",
    },
    {
      quote:
        "The healthcare services at Balm of Gilead Hospital are exceptional. The staff is caring and professional, and they truly embody the mission of DAAF.",
      author: "John Smith",
      role: "Patient",
    },
    {
      quote:
        "As a volunteer with DAAF, I've witnessed firsthand the incredible impact they have on the community. Their commitment to serving others is inspiring.",
      author: "Sarah Williams",
      role: "Volunteer",
    },
    {
      quote:
        "The entrepreneurship program helped me start my own business and become self-sufficient. I'm forever grateful for the skills and support I received.",
      author: "Michael Okonkwo",
      role: "Program Beneficiary",
    },
  ]

  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const next = useCallback(() => {
    setCurrent((current) => (current === testimonials.length - 1 ? 0 : current + 1))
  }, [testimonials.length])

  const prev = useCallback(() => {
    setCurrent((current) => (current === 0 ? testimonials.length - 1 : current - 1))
  }, [testimonials.length])

  useEffect(() => {
    if (!autoplay) return
    const interval = setInterval(next, 5000)
    return () => clearInterval(interval)
  }, [autoplay, next])

  return (
    <section className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Testimonials</h2>
          <p className="mx-auto max-w-3xl text-muted-foreground">
            Hear from those whose lives have been touched by our work.
          </p>
        </motion.div>

        <div className="mx-auto max-w-4xl">
          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${current * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <Card className="border-none bg-muted/50 shadow-none">
                      <CardContent className="p-6 text-center md:p-10">
                        <Quote className="mx-auto mb-4 h-10 w-10 text-primary opacity-50" />
                        <p className="mb-6 text-xl font-medium md:text-2xl">"{testimonial.quote}"</p>
                        <div>
                          <p className="font-semibold">{testimonial.author}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-background/80 backdrop-blur-sm"
              onClick={() => {
                prev()
                setAutoplay(false)
              }}
            >
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">Previous</span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-background/80 backdrop-blur-sm"
              onClick={() => {
                next()
                setAutoplay(false)
              }}
            >
              <ChevronRight className="h-5 w-5" />
              <span className="sr-only">Next</span>
            </Button>
          </div>
          <div className="mt-6 flex justify-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`h-2 w-2 rounded-full ${current === index ? "bg-primary" : "bg-muted-foreground/30"}`}
                onClick={() => {
                  setCurrent(index)
                  setAutoplay(false)
                }}
              >
                <span className="sr-only">Go to slide {index + 1}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
