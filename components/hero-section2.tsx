"use client"
// import { Splide, SplideSlide } from '@splidejs/react-splide';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import "@splidejs/splide/dist/css/splide.min.css"
import { motion } from "framer-motion"
import Link from "next/link"

const heroSlides = [
  {
    title: "Touching Lives, Transforming Communities",
    description: "Join us in making a difference through faith-driven initiatives, compassion, and community empowerment across Nigeria.",
    button1: { label: "Donate Now", href: "/donate" },
    button2: { label: "Learn More", href: "/about" },
    bg: "/bg_7.jpg",
  },
  {
    title: "Empowering the Vulnerable",
    description: "We uplift the less privileged through education, healthcare, and sustainable development programs.",
    button1: { label: "Our Causes", href: "/causes" },
    button2: { label: "Volunteer", href: "/volunteer" },
    bg: "/bg_7.jpg",
  },
  {
    title: "Faith in Action",
    description: "Our mission is rooted in faith, love, and service to humanity. Be part of our journey.",
    button1: { label: "Get Involved", href: "/volunteer" },
    button2: { label: "Our Story", href: "/about" },
    bg: "/bg_7.jpg",
  },
  {
    title: "Building Hope Together",
    description: "Together, we can create lasting impact and brighter futures for families and communities.",
    button1: { label: "Support Us", href: "/donate" },
    button2: { label: "Contact", href: "/contact" },
    bg: "/bg_7.jpg",
  },
]

export function HeroSection2() {
  return (
    <section className="relative min-h-[70vh]">
      <Splide
        options={{
          type: "fade",
          rewind: true,
          autoplay: true,
          interval: 5000,
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
              <div className="absolute inset-0 bg-black/60" />
              <div className="relative z-10 container mx-auto px-4 py-24 flex flex-col items-center text-center text-white">
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg"
                >
                  {slide.title}
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="max-w-2xl mx-auto mb-8 text-lg sm:text-xl text-white/90"
                >
                  {slide.description}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                  <Link href={slide.button1.href}>
                    <button className="bg-primary text-white px-8 py-3 rounded-lg font-semibold shadow hover:bg-primary/90 transition">
                      {slide.button1.label}
                    </button>
                  </Link>
                  <Link href={slide.button2.href}>
                    <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold shadow hover:bg-slate-100 transition">
                      {slide.button2.label}
                    </button>
                  </Link>
                </motion.div>
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </section>
  )
}

export default HeroSection2