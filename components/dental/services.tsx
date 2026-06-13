"use client"

import { motion } from "framer-motion"
import { Sparkles, Heart, Stethoscope, Smile, Baby, Clock } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const services = [
  {
    icon: Sparkles,
    title: "Cosmetic Dentistry",
    description: "Transform your smile with veneers, whitening, and smile makeovers designed to enhance your natural beauty.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Heart,
    title: "Dental Implants",
    description: "Restore missing teeth with state-of-the-art implants that look, feel, and function like natural teeth.",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: Stethoscope,
    title: "General Dentistry",
    description: "Comprehensive exams, cleanings, and preventive care to maintain your oral health for years to come.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Smile,
    title: "Orthodontics",
    description: "Achieve perfectly aligned teeth with traditional braces or clear aligner therapy tailored to your needs.",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: Baby,
    title: "Pediatric Dentistry",
    description: "Gentle, compassionate care for children in a fun, welcoming environment they will love visiting.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Clock,
    title: "Emergency Care",
    description: "Same-day appointments available for dental emergencies. We are here when you need us most.",
    color: "bg-accent/10 text-accent",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

export function Services() {
  return (
    <section id="services" className="py-24 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium uppercase tracking-wider text-primary">Our Services</span>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground text-balance">
            Comprehensive Dental Solutions
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            From routine check-ups to advanced restorative procedures, we offer a full range of services to meet all your dental needs.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div key={service.title} variants={itemVariants}>
              <Card className="h-full border-0 shadow-sm hover:shadow-lg transition-shadow duration-300 bg-card group">
                <CardContent className="p-6">
                  <div className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl ${service.color} mb-5 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
