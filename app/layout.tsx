import { Metadata } from 'next'
import { Footer } from './components/footer'
import { Header } from './components/header'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Main',
  description: 'Main page',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
        <Header />
        <main className='container py-4 px-6'>
          {children}
        </main>
        <Footer />
      </body>
      
    </html>
  )
}
