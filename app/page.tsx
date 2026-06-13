import { Header } from "@/components/dental/header"
import { Hero } from "@/components/dental/hero"
import { Services } from "@/components/dental/services"
import { Doctors } from "@/components/dental/doctors"
import { Testimonials } from "@/components/dental/testimonials"
import { BookingForm } from "@/components/dental/booking-form"
import { FAQ } from "@/components/dental/faq"
import { Contact } from "@/components/dental/contact"
import { Footer } from "@/components/dental/footer"

export default function DentalClinicPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Doctors />
      <Testimonials />
      <BookingForm />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  )
}
