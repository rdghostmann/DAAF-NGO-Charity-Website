"use client"
import { Splide, SplideSlide } from "@splidejs/react-splide"
import "@splidejs/splide/dist/css/splide.min.css"
import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const heroSlides = [
  {
    title: (
      <>
        <span className="">Diocese of</span> Asaba Agape Foundation
      </>
    ),
    subtitle: "TOUCHING LIVES",
    description:
      "Fostering hope, dignity and self-sufficiency through holistic initiatives that promote health, economic empowerment and spiritual growth.",
    button1: { label: "Donate Now", href: "#donate" },
    button2: { label: "Learn More", href: "#about" },
    bg: "/bg_church.jpg",
    textColor: "text-slate-900",
    subColor: "text-primary",
    descColor: "text-muted-foreground",
  },
  {
    title: "Touching Lives, Transforming Communities",
    description:
      "Join us in making a difference through faith-driven initiatives, compassion, and community empowerment across Nigeria.",
    button1: { label: "Donate Now", href: "/donate" },
    button2: { label: "Learn More", href: "/about" },
    bg: "/bg_7.jpg",
    textColor: "text-white",
    subColor: "",
    descColor: "text-white/90",
  },
  {
    title: "Empowering the Vulnerable",
    description:
      "We uplift the less privileged through education, healthcare, and sustainable development programs.",
    button1: { label: "Our Causes", href: "/causes" },
    button2: { label: "Volunteer", href: "/volunteer" },
    bg: "/bg_7.jpg",
    textColor: "text-white",
    subColor: "",
    descColor: "text-white/90",
  },
  {
    title: "Building Hope Together",
    description:
      "Together, we can create lasting impact and brighter futures for families and communities.",
    button1: { label: "Support Us", href: "/donate" },
    button2: { label: "Contact", href: "/contact" },
    bg: "/bg_7.jpg",
    textColor: "text-white",
    subColor: "",
    descColor: "text-white/90",
  },
]

export function HeroSection0() {
  return (
    <section className="relative min-h-[70vh]">
      <Splide
        options={{
          type: "fade",
          rewind: true,
          autoplay: true,
          interval: 6000,
          pauseOnHover: false,
          arrows: false,
          pagination: true,
          speed: 1200,
        }}
        className="h-full"
      >
        {heroSlides.map((slide, idx) => (
          <SplideSlide key={idx}>
            <div
              className="relative min-h-[70vh] flex items-center justify-center"
              style={{
                backgroundImage: `url('${slide.bg}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className={`absolute inset-0 ${slide.bg === "/bg_7.jpg" ? "bg-black/60" : "bg-white/70"}`} />
              <div className="relative z-10 container mx-auto px-4 py-24 flex flex-col items-center text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="mx-auto max-w-3xl"
                >
                  <h1
                    className={`mb-6 text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl ${slide.textColor || ""}`}
                  >
                    {slide.title}
                  </h1>
                  {slide.subtitle && (
                    <p className={`mb-2 text-xl font-medium ${slide.subColor || ""}`}>{slide.subtitle}</p>
                  )}
                  <p className={`mb-8 text-xl ${slide.descColor || ""}`}>{slide.description}</p>
                  <div className="flex flex-col justify-center gap-4 sm:flex-row">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      <Button asChild size="lg" className="h-12 px-8">
                        <Link href={slide.button1.href}>{slide.button1.label}</Link>
                      </Button>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      <Button asChild variant="outline" size="lg" className="h-12 px-8">
                        <Link href={slide.button2.href}>{slide.button2.label}</Link>
                      </Button>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </section>
  )
}

export default HeroSection0