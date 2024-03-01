import { Cormorant_Upright, Open_Sans } from 'next/font/google'

export const openSans = Open_Sans({
  style: 'normal',
  variable: '--font-open-sans',
  weight: ['300', '400', '500', '700'],
  subsets: ['latin']
})

export const cormorantUpRight = Cormorant_Upright({
  style: 'normal',
  variable: '--font-cormorant',
  weight: ['500', '600', '700'],
  subsets: ['latin', 'latin-ext']
})
