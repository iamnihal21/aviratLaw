import React from 'react'
import type { Metadata, Viewport } from 'next'
import { Header } from '@/app/(frontend)/components/header'
import { Footer } from '@/app/(frontend)/components/footer'
import { Analytics } from '@vercel/analytics/react'
import { Inter, Playfair_Display } from 'next/font/google'

import './styles/globals.css'

// import './globals.css'

// const inter = Inter({
//   subsets: ['latin'],
//   variable: '--font-inter',
// })

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: 'Avirat Law College',
  description:
    'virat Law College — shaping the next generation of legal professionals with rigorous academics, distinguished faculty, and a legacy of justice',
  generator: 'v0.app',
  icons: {
    icon: '/favicon.ico',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f1419' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <Header />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  )
}
