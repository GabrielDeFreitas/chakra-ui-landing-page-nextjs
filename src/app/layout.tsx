import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ChakraProvider } from '@chakra-ui/react'
import Navbar from '@/components/NavBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Landing Page - Chakra UI',
    template: '$s | Landing Page - Chakra UI'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ChakraProvider>
          <Navbar/>
          {children}
        </ChakraProvider>
      </body>
    </html>
  )
}
