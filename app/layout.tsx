import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import "./globals.css"

// const gilSans = localFont({
//   src: [
//     {
//       path: 'font/GIL-sans.woff2',
//       weight: '400',
//       style: 'normal',
//     },
//   ]
// });
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}



import './globals.css'

export const metadata = {
      generator: 'v0.dev'
    };
