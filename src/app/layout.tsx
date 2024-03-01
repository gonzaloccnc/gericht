import { cormorantUpRight, openSans } from '@/fonts/font'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Gericht',
  description: 'The key to fine dinning'
}

type ReadOnlyChild = Readonly<{ children: React.ReactNode }>

function RootLayout({ children }: ReadOnlyChild): React.ReactNode {
  return (
    <html lang='en' className={`${openSans.variable} ${cormorantUpRight.variable}`}>
      <body>{children}</body>
    </html>
  )
}

export default RootLayout
