import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Maria Veena Joseph | Frontend Developer',
  description: 'Portfolio of Maria Veena Joseph, a passionate Frontend Developer specializing in creating beautiful and functional web experiences with modern technologies.',
  keywords: ['Frontend Developer', 'React', 'Next.js', 'TypeScript', 'Web Development'],
  authors: [{ name: 'Maria Veena Joseph' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.mariaveenajoseph.com',
    siteName: 'Maria Veena Joseph Portfolio',
    title: 'Maria Veena Joseph | Frontend Developer',
    description: 'Portfolio of Maria Veena Joseph, a passionate Frontend Developer specializing in creating beautiful and functional web experiences with modern technologies.',
    images: [
      {
        url: 'https://www.mariaveenajoseph.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Maria Veena Joseph Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Maria Veena Joseph | Frontend Developer',
    description: 'Portfolio of Maria Veena Joseph, a passionate Frontend Developer specializing in creating beautiful and functional web experiences with modern technologies.',
    images: ['https://www.mariaveenajoseph.com/og-image.jpg'],
    creator: '@mariaveenajoseph',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`antialiased ${inter.className}`}>
        {children}
        <Toaster />
      </body>
    </html>
  )
}

