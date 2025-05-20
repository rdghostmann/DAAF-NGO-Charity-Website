"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Heart, CreditCard, Landmark, Wallet } from "lucide-react"

export function DonateSection() {
  return (
    <section id="donate" className="bg-primary/5 py-24">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Make a Donation</h2>
          <p className="mx-auto max-w-3xl text-muted-foreground">
            Your generous contribution helps us continue our mission of serving and empowering vulnerable individuals
            and communities.
          </p>
        </motion.div>

        <div className="mx-auto max-w-3xl">
          <Card>
            <CardHeader>
              <CardTitle className="text-center text-2xl">Support Our Cause</CardTitle>
              <CardDescription className="text-center">
                Choose a donation method and amount to support our programs
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="one-time" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="one-time">One-time Donation</TabsTrigger>
                  <TabsTrigger value="monthly">Monthly Support</TabsTrigger>
                </TabsList>
                <TabsContent value="one-time" className="pt-6">
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <Label>Select Amount</Label>
                      <RadioGroup defaultValue="50" className="grid grid-cols-3 gap-4">
                        <Label
                          htmlFor="amount-1"
                          className="flex cursor-pointer flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-4 hover:bg-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-ring [&:has(:checked)]:border-primary"
                        >
                          <RadioGroupItem value="25" id="amount-1" className="sr-only" />
                          <span className="text-sm font-medium">₦5,000</span>
                        </Label>
                        <Label
                          htmlFor="amount-2"
                          className="flex cursor-pointer flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-4 hover:bg-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-ring [&:has(:checked)]:border-primary"
                        >
                          <RadioGroupItem value="50" id="amount-2" className="sr-only" />
                          <span className="text-sm font-medium">₦10,000</span>
                        </Label>
                        <Label
                          htmlFor="amount-3"
                          className="flex cursor-pointer flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-4 hover:bg-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-ring [&:has(:checked)]:border-primary"
                        >
                          <RadioGroupItem value="100" id="amount-3" className="sr-only" />
                          <span className="text-sm font-medium">₦20,000</span>
                        </Label>
                      </RadioGroup>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="custom-amount">Custom Amount</Label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">₦</span>
                        <Input id="custom-amount" type="number" placeholder="Enter amount" className="pl-8" />
                      </div>
                    </div>
                    
                  </div>
                </TabsContent>
                <TabsContent value="monthly" className="pt-6">
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <Label>Select Monthly Amount</Label>
                      <RadioGroup defaultValue="20" className="grid grid-cols-3 gap-4">
                        <Label
                          htmlFor="monthly-1"
                          className="flex cursor-pointer flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-4 hover:bg-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-ring [&:has(:checked)]:border-primary"
                        >
                          <RadioGroupItem value="10" id="monthly-1" className="sr-only" />
                          <span className="text-sm font-medium">₦2,000/mo</span>
                        </Label>
                        <Label
                          htmlFor="monthly-2"
                          className="flex cursor-pointer flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-4 hover:bg-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-ring [&:has(:checked)]:border-primary"
                        >
                          <RadioGroupItem value="20" id="monthly-2" className="sr-only" />
                          <span className="text-sm font-medium">₦5,000/mo</span>
                        </Label>
                        <Label
                          htmlFor="monthly-3"
                          className="flex cursor-pointer flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-4 hover:bg-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-ring [&:has(:checked)]:border-primary"
                        >
                          <RadioGroupItem value="50" id="monthly-3" className="sr-only" />
                          <span className="text-sm font-medium">₦10,000/mo</span>
                        </Label>
                      </RadioGroup>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="custom-monthly">Custom Monthly Amount</Label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">₦</span>
                        <Input id="custom-monthly" type="number" placeholder="Enter amount" className="pl-8" />
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
            <CardFooter>
              <Button className="w-full">
                <Heart className="mr-2 h-4 w-4" /> Donate Now
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  )
}
