import type { Metadata, Viewport } from 'next'
import { DM_Sans, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const dmSans = DM_Sans({ 
  subsets: ["latin"],
  variable: '--font-sans'
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-serif'
});

export const metadata: Metadata = {
  title: 'Radiant Dental | Premium Dental Care',
  description: 'Experience exceptional dental care at Radiant Dental. Our team of expert dentists provides comprehensive services including cosmetic dentistry, implants, and family dental care.',
  keywords: ['dental clinic', 'dentist', 'dental care', 'cosmetic dentistry', 'dental implants', 'family dentistry'],
}

export const viewport: Viewport = {
  themeColor: '#0d7377',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${playfair.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
