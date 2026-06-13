"use client"

import { motion } from "framer-motion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "What should I expect during my first visit?",
    answer: "Your first visit will include a comprehensive oral examination, digital X-rays, and a thorough cleaning. Our dentist will discuss your dental history, address any concerns, and create a personalized treatment plan tailored to your needs. The appointment typically lasts about 60-90 minutes.",
  },
  {
    question: "Do you accept dental insurance?",
    answer: "Yes, we accept most major dental insurance plans. Our administrative team will help verify your coverage and file claims on your behalf. For patients without insurance, we offer flexible payment plans and membership programs to make quality dental care accessible to everyone.",
  },
  {
    question: "How often should I visit the dentist?",
    answer: "We recommend visiting the dentist every six months for routine checkups and professional cleanings. However, patients with certain conditions like gum disease may need more frequent visits. During your appointment, we will recommend a personalized schedule based on your oral health needs.",
  },
  {
    question: "What is the teeth whitening process like?",
    answer: "We offer both in-office and take-home whitening options. In-office whitening takes about an hour and provides immediate results of up to 8 shades lighter. Take-home kits include custom-fitted trays and professional-grade gel for gradual whitening over 1-2 weeks.",
  },
  {
    question: "Are dental implants right for me?",
    answer: "Dental implants are an excellent solution for replacing missing teeth for most adults with healthy gums and adequate bone density. During a consultation, our oral surgeon will evaluate your oral health, review your medical history, and determine if implants are the best option for you.",
  },
  {
    question: "How do I handle a dental emergency?",
    answer: "For dental emergencies during office hours, call us immediately and we will fit you in the same day. For after-hours emergencies, our answering service will connect you with an on-call dentist. Common emergencies include severe toothaches, knocked-out teeth, broken teeth, or lost fillings.",
  },
  {
    question: "What COVID-19 safety measures do you have in place?",
    answer: "Patient safety is our top priority. We follow all CDC and ADA guidelines including enhanced sanitization protocols, HEPA air filtration, mandatory staff vaccination, health screenings, reduced waiting room capacity, and hospital-grade sterilization of all equipment between patients.",
  },
  {
    question: "Do you offer sedation dentistry?",
    answer: "Yes, we offer multiple sedation options for patients with dental anxiety or those undergoing extensive procedures. Options include nitrous oxide (laughing gas), oral sedation, and IV sedation. Our team will discuss which option is best suited for your comfort level and treatment needs.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="py-24 bg-secondary/30">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-medium uppercase tracking-wider text-primary">FAQ</span>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground text-balance">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our services, procedures, and policies.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-2xl border border-border px-6 shadow-sm"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground">
            {"Still have questions? "}
            <a href="#contact" className="text-primary font-medium hover:underline">
              Contact our team
            </a>
            {" and we will be happy to help."}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
