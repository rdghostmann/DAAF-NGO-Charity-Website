"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

export function DonateHero() {
  const bgRef = useRef<HTMLDivElement>(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (bgRef.current) {
        setOffset(window.scrollY * 0.4) // Adjust 0.4 for more/less effect
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="relative bg-primary/10 py-24 md:py-32 overflow-hidden">
      <div
        ref={bgRef}
        className="absolute inset-0 z-0 will-change-transform"
        style={{
          transform: `translateY(${offset}px)`,
          transition: "transform 0.1s linear",
        }}
      >
        <Image
          src="/cause-5.jpg"
          alt="Donate background"
          fill
          className="object-cover opacity-20"
          priority
        />
      </div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Make a <span className="text-primary">Donation</span>
          </h1>
          <p className="mb-8 text-xl text-muted-foreground">
            Your generous contribution helps us continue our mission of serving and empowering vulnerable individuals
            and communities.
          </p>
        </motion.div>
      </div>
    </section>
  )
}