"use client"

import { motion } from "framer-motion"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Heart } from "lucide-react"

export function DonationForm() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto w-full max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="shadow-lg rounded-2xl">
              <CardHeader>
                <CardTitle className="text-center text-2xl md:text-3xl">
                  Support Our Cause
                </CardTitle>
                <CardDescription className="text-center text-muted-foreground">
                  Choose a donation method and amount to support our programs
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="one-time" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="one-time">One-time Donation</TabsTrigger>
                    <TabsTrigger value="monthly">Monthly Support</TabsTrigger>
                  </TabsList>

                  {/* One-time Donation */}
                  <TabsContent value="one-time" className="pt-6">
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <Label>Select Amount</Label>
                        <RadioGroup defaultValue="50" className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                          {["₦5,000", "₦10,000", "₦20,000"].map((amount, index) => (
                            <Label
                              key={index}
                              htmlFor={`amount-${index}`}
                              className="flex cursor-pointer flex-col items-center justify-center rounded-md border-2 border-muted p-4 hover:bg-muted transition-all duration-200 [&:has(:checked)]:border-primary"
                            >
                              <RadioGroupItem
                                value={["5000", "10000", "20000"][index]}
                                id={`amount-${index}`}
                                className="sr-only"
                              />
                              <span className="text-sm font-medium">{amount}</span>
                            </Label>
                          ))}
                        </RadioGroup>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="custom-amount">Custom Amount</Label>
                        <div className="relative">
                          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">₦</span>
                          <Input
                            id="custom-amount"
                            type="number"
                            placeholder="Enter amount"
                            className="pl-8"
                          />
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  {/* Monthly Donation */}
                  <TabsContent value="monthly" className="pt-6">
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <Label>Select Monthly Amount</Label>
                        <RadioGroup defaultValue="2000" className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                          {["₦2,000/mo", "₦5,000/mo", "₦10,000/mo"].map((amount, index) => (
                            <Label
                              key={index}
                              htmlFor={`monthly-${index}`}
                              className="flex cursor-pointer flex-col items-center justify-center rounded-md border-2 border-muted p-4 hover:bg-muted transition-all duration-200 [&:has(:checked)]:border-primary"
                            >
                              <RadioGroupItem
                                value={["5000", "10000", "20000"][index]}
                                id={`monthly-${index}`}
                                className="sr-only"
                              />
                              <span className="text-sm font-medium">{amount}</span>
                            </Label>
                          ))}
                        </RadioGroup>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="custom-monthly">Custom Monthly Amount</Label>
                        <div className="relative">
                          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">₦</span>
                          <Input
                            id="custom-monthly"
                            type="number"
                            placeholder="Enter amount"
                            className="pl-8"
                          />
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
              <CardFooter>
                <Button className="w-full">
                  <Heart className="mr-2 h-4 w-4" />
                  Donate Now
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
