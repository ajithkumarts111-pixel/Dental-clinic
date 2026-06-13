"use client"

import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"

const footerLinks = {
  services: [
    { label: "General Dentistry", href: "#services" },
    { label: "Cosmetic Dentistry", href: "#services" },
    { label: "Dental Implants", href: "#services" },
    { label: "Orthodontics", href: "#services" },
    { label: "Pediatric Dentistry", href: "#services" },
    { label: "Emergency Care", href: "#services" },
  ],
  company: [
    { label: "About Us", href: "#" },
    { label: "Our Team", href: "#doctors" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Careers", href: "#" },
    { label: "Blog", href: "#" },
  ],
  support: [
    { label: "FAQ", href: "#faq" },
    { label: "Contact Us", href: "#contact" },
    { label: "Insurance", href: "#" },
    { label: "Payment Options", href: "#" },
    { label: "Privacy Policy", href: "#" },
  ],
}

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
]

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-foreground text-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
            {/* Brand */}
            <div className="lg:col-span-2">
              <Link href="/" className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
                  <span className="text-xl font-bold text-primary-foreground">R</span>
                </div>
                <span className="font-serif text-xl font-semibold tracking-tight">
                  Radiant Dental
                </span>
              </Link>
              <p className="mt-4 text-card/70 max-w-sm leading-relaxed">
                Creating beautiful, healthy smiles for over 25 years. Experience exceptional dental care in a modern, comfortable environment.
              </p>
              <div className="mt-6 flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-card/10 text-card hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-card/70 hover:text-card transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-card/70 hover:text-card transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-3">
                {footerLinks.support.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-card/70 hover:text-card transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-card/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-card/60">
            © {new Date().getFullYear()} Radiant Dental. All rights reserved.
          </p>
          <Button
            variant="ghost"
            size="icon"
            onClick={scrollToTop}
            className="rounded-full bg-card/10 hover:bg-primary hover:text-primary-foreground text-card"
          >
            <ArrowUp className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </footer>
  )
}
