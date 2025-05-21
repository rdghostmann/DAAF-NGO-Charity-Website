"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Lightbulb, Target } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="bg-muted/30 py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-6xl">
          {/* Our About DAAF Section */}
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
                    <h2 className="text-3xl font-bold text-slate-800">About DAAF</h2>
                  </div>
                  <p className="text-lg text-slate-600 mb-6">
                    Discover how our faith-driven initiatives are transforming lives, uplifting the vulnerable, and building stronger communities throughout Nigeria.
                  </p>
                  <p className="text-lg text-slate-600 mb-6">
                    Join us as we work together to create a more inclusive, caring, and empowered society—one life, one family, and one community at a time.              </p>

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
                  src="/our-vision.png "
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
        </div>
      </div>
    </section>
  )
}
