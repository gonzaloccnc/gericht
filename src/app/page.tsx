import { About } from '@/sections/About'
import { Awards } from '@/sections/Awards'
import { Contact } from '@/sections/Contact'
import { Gallery } from '@/sections/Gallery'
import { Hero } from '@/sections/Hero'
import { Me } from '@/sections/Me'
import { Newsletter } from '@/sections/Newsletter'
import { Today } from '@/sections/Today'
import { Video } from '@/sections/Video'

export default function Home(): React.ReactNode {
  return (
    <>
      <Hero />
      <About />
      <Today />
      <Me />
      <Video />
      <Awards />
      <Gallery />
      <Contact />
      <Newsletter />
    </>
  )
}
