import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import localFont from 'next/font/local';

const october = localFont({ src: '../public/fonts/hey_october.woff2', variable: "--heading-font" })

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Foreversake',
  description: 'Preserve, present & celebrate loved ones stories.',
}

export const dynamic = "force-dynamic";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='h-full bg-background'>
        <main className={`${inter.className} ${october.variable} w-full h-full bg-background flex flex-col items-center`}>
          <Navbar />
            {children}
          <Footer />
        </main>
      </body>
    </html>
  )
}
