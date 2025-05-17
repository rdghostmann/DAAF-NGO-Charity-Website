"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function ContactMap() {
  return (
    <section className="py-24">
      <div className="container px-4 md:px-6">
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
            <CardContent className="p-0">
              <div className="aspect-video w-full overflow-hidden">
                <div className="h-full w-full bg-muted">
                  {/* This would be a map component in a real implementation */}
                  <div className="flex h-full w-full items-center justify-center bg-[url('/placeholder.svg?height=600&width=1200')] bg-cover bg-center">
                    <p className="text-center text-muted-foreground">Interactive map would be displayed here</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
