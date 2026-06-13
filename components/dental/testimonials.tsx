"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    name: "Jennifer Martinez",
    role: "Marketing Executive",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200",
    rating: 5,
    text: "I was terrified of dentists until I came to Radiant Dental. Dr. Mitchell and her team made me feel completely at ease. My smile has never looked better, and I actually look forward to my appointments now!",
    treatment: "Smile Makeover",
  },
  {
    id: 2,
    name: "Robert Williams",
    role: "Business Owner",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200",
    rating: 5,
    text: "After years of dealing with missing teeth, I finally got implants at Radiant Dental. The results are incredible - they look and feel exactly like my natural teeth. Dr. Chen is truly a master of his craft.",
    treatment: "Dental Implants",
  },
  {
    id: 3,
    name: "Amanda Foster",
    role: "Teacher",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200",
    rating: 5,
    text: "My whole family comes here, including my two kids. Dr. Thompson is amazing with children - my kids actually get excited about going to the dentist! The staff is always friendly and professional.",
    treatment: "Family Dentistry",
  },
  {
    id: 4,
    name: "David Kim",
    role: "Software Engineer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200",
    rating: 5,
    text: "The clear aligners Dr. Rodriguez recommended worked perfectly. In just 10 months, my teeth are perfectly straight. The virtual monitoring made the whole process so convenient.",
    treatment: "Clear Aligners",
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-24 bg-primary/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium uppercase tracking-wider text-primary">Patient Stories</span>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground text-balance">
            What Our Patients Say
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Real experiences from real patients who trusted us with their smiles.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="bg-card rounded-3xl p-8 md:p-12 shadow-lg border border-border relative"
            >
              <Quote className="absolute top-8 right-8 h-16 w-16 text-primary/10" />
              
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-shrink-0 text-center md:text-left">
                  <div 
                    className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-cover bg-center mx-auto md:mx-0 border-4 border-primary/20"
                    style={{ backgroundImage: `url(${testimonials[currentIndex].image})` }}
                  />
                  <div className="mt-4">
                    <h4 className="font-semibold text-foreground">{testimonials[currentIndex].name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonials[currentIndex].role}</p>
                    <span className="inline-block mt-2 text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {testimonials[currentIndex].treatment}
                    </span>
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-lg text-foreground leading-relaxed">
                    {`"${testimonials[currentIndex].text}"`}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex ? "bg-primary w-6" : "bg-border hover:bg-muted-foreground"
                  }`}
                />
              ))}
            </div>
            
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {[
            { value: "15,000+", label: "Happy Patients" },
            { value: "98%", label: "Satisfaction Rate" },
            { value: "25+", label: "Years Experience" },
            { value: "50,000+", label: "Procedures Done" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl md:text-4xl font-bold text-primary">{stat.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
