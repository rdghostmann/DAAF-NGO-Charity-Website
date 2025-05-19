"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function ContactMap() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Our Location</h2>
          <p className="mx-auto max-w-3xl text-muted-foreground">Visit us at our headquarters in Asaba, Delta State.</p>
        </motion.div>

        <div className="mx-auto max-w-4xl">
          <Card>
            <CardHeader>
              <CardTitle>Diocese of Asaba Agape Foundation</CardTitle>
            </CardHeader>
            <CardContent className="aspect-video overflow-hidden rounded-md">
              <div className="h-full w-full bg-muted">
                <iframe
                  className="w-full h-full border-none"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.163614373583!2d6.735936314753759!3d6.210893995498464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1042f0b2e2b7c0d1%3A0x8a6d2e5e1e5e5e5e!2s60%20Dennis%20Osadebay%20Way%2C%20Asaba%2C%20Delta%20State%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1716040000000!5m2!1sen!2sng"
                  allowFullScreen={true}
                  loading="lazy"
                  title="DAAF Main Office - 60 Dennis Osadebay Way, Asaba"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
