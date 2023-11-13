import { Aleo } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import Image from 'next/image'

const aleo = Aleo({ subsets: ['latin'] })

export const metadata = {
  title: 'Your Misery - Official Website',
  description: 'yourmiseryismine.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={aleo.className}>
      <Navbar />
      {children}
      </body>
    </html>
  )
}
