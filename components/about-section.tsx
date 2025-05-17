"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function AboutSection() {
  return (
    <section id="about" className="bg-muted/30 py-24">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">About DAAF</h2>
            <p className="mx-auto max-w-3xl text-muted-foreground">
              The Diocese of Asaba Agape Foundation is a humanitarian and sustainable development organization rooted in
              the Diocese of Asaba, Anglican Communion in Nigeria.
            </p>
          </motion.div>

          <Tabs defaultValue="about" className="mx-auto max-w-4xl">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="about">About Us</TabsTrigger>
              <TabsTrigger value="vision">Our Vision</TabsTrigger>
              <TabsTrigger value="mission">Our Mission</TabsTrigger>
            </TabsList>
            <TabsContent value="about">
              <Card>
                <CardContent className="p-6 text-lg">
                  <p className="mb-4">
                    The Diocese of Asaba Agape Foundation is a humanitarian and sustainable development organization
                    rooted in the Diocese of Asaba, Anglican Communion in Nigeria. Over the years the Diocese has
                    impacted on people's lives particularly the vulnerable persons including the orphans in the society.
                  </p>
                  <p>
                    DAAF is intrinsically involved in serving, empowering and uplifting vulnerable persons gender
                    notwithstanding, through holistic initiatives that promote health, economic empowerment and
                    spiritual growth.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="vision">
              <Card>
                <CardContent className="p-6 text-lg">
                  <p>
                    To be a leading catalyst for positive change, fostering hope, dignity and self-sufficiency among
                    individuals and communities while reflecting the love and compassion of God through holistic
                    development and service.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="mission">
              <Card>
                <CardContent className="p-6 text-lg">
                  <p>
                    "To serve and empower individuals, families, and communities in the Diocese of Asaba and beyond,
                    through education, healthcare, food security, economic empowerment, social services and spiritual
                    growth initiatives, while promoting values of compassion, justice, and inclusivity."
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}
