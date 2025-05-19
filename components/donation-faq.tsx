"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function DonationFAQ() {
  const faqs = [
    {
      question: "How is my donation used?",
      answer:
        "Your donation directly supports our programs including elderly care, orphanage support, healthcare services, education initiatives, and sustainable agriculture projects. We ensure that at least 85% of all donations go directly to program expenses.",
    },
    {
      question: "Is my donation tax-deductible?",
      answer:
        "Yes, the Diocese of Asaba Agape Foundation is a registered non-profit organization, and your donation may be tax-deductible according to Nigerian tax laws. Please consult with your tax advisor for specific information.",
    },
    {
      question: "Can I specify which program my donation supports?",
      answer:
        "You can designate your donation to support a specific program or initiative. Simply indicate your preference when making your donation, and we will honor your request.",
    },
    {
      question: "Do you accept non-monetary donations?",
      answer:
        "Yes, we accept in-kind donations such as food, clothing, medical supplies, educational materials, and other items that support our programs. Please contact us to discuss your specific donation.",
    },
    {
      question: "How can I set up a recurring donation?",
      answer:
        "You can set up a recurring donation by selecting the 'Monthly Support' option on our donation form. This allows you to provide consistent support to our programs with automatic monthly contributions.",
    },
  ]

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
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Frequently Asked Questions</h2>
          <p className="mx-auto max-w-3xl text-muted-foreground">
            Find answers to common questions about donating to DAAF.
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
