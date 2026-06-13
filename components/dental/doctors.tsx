"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Award, GraduationCap, Linkedin } from "lucide-react"

const doctors = [
  {
    name: "Dr. Sarah Mitchell",
    title: "Lead Dentist & Founder",
    specialty: "Cosmetic Dentistry",
    education: "Harvard School of Dental Medicine",
    experience: "18+ years",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=400",
    bio: "Dr. Mitchell is passionate about creating beautiful smiles using the latest techniques in cosmetic dentistry.",
  },
  {
    name: "Dr. James Chen",
    title: "Oral Surgeon",
    specialty: "Dental Implants",
    education: "UCLA School of Dentistry",
    experience: "15+ years",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=400",
    bio: "Specializing in complex implant cases, Dr. Chen brings precision and expertise to every procedure.",
  },
  {
    name: "Dr. Emily Rodriguez",
    title: "Orthodontist",
    specialty: "Clear Aligners & Braces",
    education: "Columbia University",
    experience: "12+ years",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=400",
    bio: "Dr. Rodriguez helps patients of all ages achieve perfectly aligned smiles with personalized treatment plans.",
  },
  {
    name: "Dr. Michael Thompson",
    title: "Pediatric Dentist",
    specialty: "Children's Dentistry",
    education: "NYU College of Dentistry",
    experience: "10+ years",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=400",
    bio: "Known for his gentle approach, Dr. Thompson makes dental visits fun and stress-free for children.",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

export function Doctors() {
  return (
    <section id="doctors" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium uppercase tracking-wider text-primary">Meet The Team</span>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground text-balance">
            Experts You Can Trust
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Our team of highly qualified dental professionals is committed to providing you with exceptional care and personalized treatment.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {doctors.map((doctor) => (
            <motion.div key={doctor.name} variants={itemVariants}>
              <Card className="h-full border-0 shadow-sm hover:shadow-xl transition-all duration-300 bg-card group overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                      style={{ backgroundImage: `url(${doctor.image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-card">
                      <h3 className="text-lg font-semibold">{doctor.name}</h3>
                      <p className="text-sm text-card/80">{doctor.title}</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Award className="h-4 w-4 text-primary" />
                      <span>{doctor.specialty}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                      <GraduationCap className="h-4 w-4 text-primary" />
                      <span>{doctor.education}</span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{doctor.bio}</p>
                    <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
                      <span className="text-xs font-medium text-primary">{doctor.experience} Experience</span>
                      <button className="text-muted-foreground hover:text-primary transition-colors">
                        <Linkedin className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
