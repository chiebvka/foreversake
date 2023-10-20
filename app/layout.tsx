import Footer from '@/components/Footer'
import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'

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
      <body>
        <main className={`${inter.className} w-full min-h-screen bg-background flex flex-col items-center`}>
          <Navbar />
            {children}
          <Footer />
        </main>

      </body>
    </html>
  )
}
