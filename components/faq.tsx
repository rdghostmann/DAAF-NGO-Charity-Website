"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQ() {
  const faqs = [
    {
      question: "What is the Diocese of Asaba Agape Foundation?",
      answer:
        "The Diocese of Asaba Agape Foundation (DAAF) is a humanitarian and sustainable development organization rooted in the Diocese of Asaba, Anglican Communion in Nigeria. We serve and empower vulnerable individuals and communities through various programs and initiatives.",
    },
    {
      question: "How can I get involved with DAAF?",
      answer:
        "There are several ways to get involved with DAAF: you can donate to support our programs, volunteer your time and skills, partner with us as an organization, or help spread awareness about our work. Visit our Volunteer page to learn more about specific opportunities.",
    },
    {
      question: "Where does DAAF operate?",
      answer:
        "DAAF primarily operates in Asaba and surrounding communities in Delta State, Nigeria. Our programs include the St. Barnabas Orphanage Home, Balm of Gilead Hospital, Ewulu Integrated Farm, and various community outreach initiatives.",
    },
    {
      question: "How is DAAF funded?",
      answer:
        "DAAF is funded through a combination of individual donations, corporate partnerships, grants, and support from the Diocese of Asaba. We strive to maintain transparency and accountability in all our financial operations.",
    },
    {
      question: "Can I visit your facilities?",
      answer:
        "Yes, we welcome visitors who are interested in learning more about our work. Please contact us in advance to schedule a visit to any of our facilities, including the orphanage, hospital, or farm.",
    },
  ]

  return (
    <section className="bg-primary/5 py-24">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Frequently Asked Questions</h2>
          <p className="mx-auto max-w-3xl text-muted-foreground">
            Find answers to common questions about DAAF and our work.
          </p>
        </motion.div>

        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <AccordionItem value={`item-${index}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
