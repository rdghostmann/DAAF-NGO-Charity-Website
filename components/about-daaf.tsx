"use client"

import { useEffect,useRef, useState } from "react"
import Image from "next/image"
import { motion, useScroll } from "framer-motion"
import { ChevronLeft, ChevronRight, Users, Lightbulb, Target } from "lucide-react"
import Link from "next/link"
import CountUp from "react-countup"

export default function AboutDaaf() {
  const containerRef = useRef(null)

  // variables for parallax effect
  const bgRef = useRef(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (bgRef.current) {
        // Adjust the divisor for more/less parallax effect
        setOffset(window.scrollY * 0.4);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const carouselRef = useRef<HTMLDivElement>(null)

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" })
    }
  }

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" })
    }
  }



  return (
    <div ref={containerRef} className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
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
            alt="Abstract background"
            fill
            className="object-cover opacity-20 bg-center bg-no-repeat"
            priority
          />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-slate-800 to-slate-500">
            Diocese of Asaba Agape Foundation
          </h1>
          <p className="mx-auto max-w-3xl text-muted-foreground">
            The Diocese of Asaba Agape Foundation is a humanitarian and sustainable development organization rooted in
            the Diocese of Asaba, Anglican Communion in Nigeria.
          </p>
        </motion.div>
      </section>


      {/* Our About DAAF Section */}
      <section className="py-24 bg-gradient-to-b from-white to-slate-50">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="order-2 md:order-1">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4">
                <Target className="h-8 w-8 text-slate-700 mr-3" />
                <h2 className="text-3xl font-bold text-slate-800">About DAAF</h2>
              </div>
              <p className="text-lg text-slate-600 mb-6">
                The Diocese of Asaba Agape Foundation is a humanitarian and sustainable development
                organization rooted in the Diocese of Asaba, Anglican Communion in Nigeria.
              </p>
              <p className="text-lg text-slate-600 mb-6">
                Over the years the Diocese has impacted on people’s lives particularly the vulnerable persons including the orphans in the society.
              </p>
              <p className="text-lg text-slate-600 mb-6">
                DAAF is intrinsically involved in serving,
                empowering and uplifting vulnerable persons gender notwithstanding, through holistic
                initiatives that promote health, economic empowerment and spiritual growth.
              </p>



              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <div className="h-1 w-12 bg-primary"></div>
                  <span className="text-sm font-medium">Est. 2008</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-1 w-12 bg-primary"></div>
                  <span className="text-sm font-medium">
                    <CountUp end={1000} duration={2} separator="," />+ Lives Impacted
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-1 w-12 bg-primary"></div>
                  <span className="text-sm font-medium">
                    <CountUp end={5} duration={2} />+ Active Programs
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
          <motion.div
            className="order-1 md:order-2 relative h-[500px] rounded-2xl overflow-hidden shadow-2xl"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Image
              src="/DAAF_Logo-2.png"
              alt="About DAAF"
              fill
              className="object-cover"
            />
          </motion.div>
        </motion.div>
      </section>
      {/* Our Vision Section */}
      <section className="py-24 px-4 bg-slate-50">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center"
        >
          <motion.div
            className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Image
              src="/our-vision.png"
              alt="Our vision illustration"
              fill
              className="object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-4">
              <Lightbulb className="h-8 w-8 text-slate-700 mr-3" />
              <h2 className="text-3xl font-bold text-slate-800">Our Vision</h2>
            </div>
            <p className="text-lg text-slate-600 mb-6">
              To be a leading catalyst for positive change, fostering hope, dignity and self-sufficiency among
              individuals and communities while reflecting the love and compassion of God through holistic development
              and service.
            </p>
          </motion.div>
        </motion.div>
      </section>
      {/* Our Mission Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-white to-slate-50">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="order-2 md:order-1">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4">
                <Target className="h-8 w-8 text-slate-700 mr-3" />
                <h2 className="text-3xl font-bold text-slate-800">Our Mission</h2>
              </div>
              <p className="text-lg text-slate-600 mb-6">
                "To serve and empower individuals, families, and communities in the Diocese of Asaba and beyond, through
                education, healthcare, food security, economic empowerment, social services and spiritual growth
                initiatives, while promoting values of compassion, justice, and inclusivity."
              </p>
            </motion.div>
          </div>
          <motion.div
            className="order-1 md:order-2 relative h-[400px] rounded-2xl overflow-hidden shadow-2xl"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Image
              src="/our-mission.png"
              alt="Our mission illustration"
              fill
              className="object-cover"
            />
          </motion.div>
        </motion.div>
      </section>



      {/* About Us Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-slate-50 to-white">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-6xl mx-auto"
        >
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-4">
              <Users className="h-8 w-8 text-slate-700 mr-3" />
              <h2 className="text-3xl font-bold text-slate-800">About Us</h2>
            </div>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-4">
              Over the years the Diocese has impacted on people's
              lives particularly the vulnerable persons including the orphans in the society.
            </p>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              DAAF is intrinsically involved in serving, empowering and uplifting vulnerable persons gender
              notwithstanding, through holistic initiatives that promote health, economic empowerment and spiritual
              growth.
            </p>
          </motion.div>

        </motion.div>
      </section>

      {/* Values Section with Parallax */}
      <section className="py-24 px-4 bg-slate-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-700 to-slate-900" />
          <Image
            src="/pexels-marte-nyhammer-1117968563-32161313.jpg"
            alt="Background texture"
            fill
            className="object-cover mix-blend-overlay"
          />
        </div>

        <motion.div
          className="max-w-6xl mx-auto relative z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-16"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our Core Values
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Faith",
                description: "We are guided by our Christian faith and the teachings of Christ in all our endeavors.",
              },
              {
                title: "Compassion",
                description: "We show genuine care and empathy for those in need, recognizing their dignity and worth.",
              },
              {
                title: "Integrity",
                description: "We act with honesty, transparency, and ethical responsibility in all our operations.",
              },
              {
                title: "Inclusivity",
                description: "We serve all people regardless of background, gender, or social status.",
              },
              {
                title: "Empowerment",
                description: "We equip individuals with skills and resources to become self-sufficient.",
              },
              {
                title: "Stewardship",
                description: "We responsibly manage all resources entrusted to us for maximum impact.",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-colors"
              >
                <h3 className="text-xl font-bold mb-3 text-white">{value.title}</h3>
                <p className="text-slate-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-4 bg-white">
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl font-bold text-center mb-16 text-slate-800"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Lives We've Touched
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                quote:
                  "The scholarship program from DAAF changed my life. I was able to complete my education and now I'm giving back to my community as a teacher.",
                name: "Grace Okonkwo",
                role: "Education Program Beneficiary",
              },
              {
                quote:
                  "The agricultural training I received helped me start my own farm. Now I can feed my family and even sell surplus produce at the local market.",
                name: "Emmanuel Nwachukwu",
                role: "Economic Empowerment Program Participant",
              },
              {
                quote:
                  "As an orphan, I found a new family through DAAF. The care and support I received gave me hope for a better future.",
                name: "Sarah Adebayo",
                role: "Orphan Care Program Beneficiary",
              },
              {
                quote:
                  "The medical outreach program brought healthcare to our remote village for the first time. Many lives were saved, including my mother's.",
                name: "John Okafor",
                role: "Healthcare Initiative Beneficiary",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-50 rounded-xl p-8 shadow-md"
              >
                <div className="flex flex-col h-full">
                  <div className="mb-6 text-5xl text-slate-300">"</div>
                  <p className="text-slate-700 italic mb-6 flex-grow">{testimonial.quote}</p>
                  <div>
                    <p className="font-bold text-slate-800">{testimonial.name}</p>
                    <p className="text-slate-500">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-4 bg-gradient-to-br from-slate-800 to-slate-900 text-white">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6">Join Our Mission of Love and Service</h2>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            Together, we can make a lasting difference in the lives of vulnerable individuals and communities. Your
            support through donations, volunteering, or partnerships helps us extend our reach and impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/donate">
              <motion.button
                className="bg-white text-slate-900 px-8 py-3 rounded-full text-lg font-medium hover:bg-slate-100 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Donate Now
              </motion.button>
            </Link>
            <Link href="/volunteer">
              <motion.button
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-white/10 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Volunteer With Us
              </motion.button>
            </Link>

          </div>
        </motion.div>
      </section>
    </div>
  )
}
