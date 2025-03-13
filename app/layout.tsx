import type { ReactNode } from "react"
import "./globals.css"
// import localFont from 'next/font/local'
import { Poppins } from 'next/font/google'

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
  children: ReactNode
}) {
  return (
    <html lang="en" className={poppins.className}>
      <body className="antialiased">{children}</body>
    </html>
  )
}



export const metadata = {
      generator: 'v0.dev'
    };
