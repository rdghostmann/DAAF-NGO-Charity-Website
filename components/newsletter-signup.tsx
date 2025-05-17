"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function NewsletterSignup() {
  return (
    <section className="bg-primary/5 py-24">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Subscribe to Our Newsletter</CardTitle>
                <CardDescription>Stay updated with our latest news, stories, and upcoming events.</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="grid gap-4 sm:grid-cols-[1fr_auto]">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="sr-only">
                      Email
                    </Label>
                    <Input id="email" type="email" placeholder="Enter your email" />
                  </div>
                  <Button type="submit">Subscribe</Button>
                </form>
              </CardContent>
              <CardFooter className="text-center text-sm text-muted-foreground">
                We respect your privacy. Unsubscribe at any time.
              </CardFooter>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
