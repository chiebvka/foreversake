import './globals.css'
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import localFont from 'next/font/local';
import { Toaster } from "react-hot-toast";
import GoogleAnalytics from '@/components/GoogleAnalytics';
import CookieBanner from '@/components/CookieBanner';

const october = localFont({ src: '../public/fonts/hey_october.woff2', variable: "--heading-font" })

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Foreversake',
  description: 'Preserve, present & celebrate loved ones stories.',
  appleWebApp: {
    capable: true,
    title: 'Foreversake',
    statusBarStyle: "black-translucent",
  },
  icons: {
    icon: [
      { url: "/favicons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      {
        url: "/favicons/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/favicons/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
    ],
    shortcut: ["/favicons/favicon-32x32.png"],
    apple: [
      { url: "/favicons/apple-touch-icon.png" },
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  }
}

export const dynamic = "force-dynamic";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <GoogleAnalytics GA_MEASUREMENT_ID='G-BL5RW4QRP7' />
      <body className='h-full bg-background'>
        <main className={`${inter.className} ${october.variable} w-full h-full bg-background flex flex-col items-center`}>
          <Navbar />
            {children}
          <Footer />
            <CookieBanner />
        </main>
        <Toaster  position="bottom-right" />
      </body>
    </html>
  )
}
