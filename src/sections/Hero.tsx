'use client'
import { Button } from "@/components/Button"
import { Slider } from "@/components/Slider"
import Image from "next/image"
import { useEffect, useState } from "react"

const images = [
  '/image1.png',
  '/image2.png',
  '/image3.png'
]

const Hero: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(prev => {
        if (prev === images.length) {
          return 0
        }

        return (prev + 1) % images.length
      })
    }, 5000)

    return () => { clearInterval(interval); }
  }, [])

  return (
    <section className='flex relative w-full h-[600px]'>
      <div className='flex gap-5 absolute rotate-[270deg] top-1/2 left-0 -translate-x-1/2 -translate-y-1/2'>
        <span>#Bar</span>
        <span>#Gericht</span>
      </div>

      <div className='ml-24 flex gap-[5%] h-[85%]'>
        <article className='w-1/2'>
          <h3>Chase The New Flavour</h3>
          <Image
            src='/icon.svg'
            className='aspect-square'
            height={5}
            width={20}
            alt=''
          />
          <h1 className='text-banner font-bold text-primary leading-[130%] mb-8'>
            The key To<br />Fine Dinning
          </h1>
          <p className='mb-8'>
            Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi
            facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus
          </p>
          <Button label='Explore Menu' />
        </article>
        <Slider image={images[currentImage]} label='foot one' />
      </div>
      <div className='absolute bottom-0 w-full flex items-end justify-center font-cormorant h-[15%]'>
        <div className='font-semibold flex gap-2 items-center'>
          {
            images.map((x, i) => (
              <span
                key={x}
                id={i.toString()}
                className={`${currentImage === i ? 'w-6 relative after:block after:absolute after:content-[""] after:w-4 after:h-[1px] after:bg-primary after:top-1/2 after:-translate-y-1/2 after:left-3' : ''}`}
              >
                {i + 1}
              </span>
            ))
          }
        </div>
        <div className='absolute -right-14 font-bold h-full flex flex-col items-center gap-6'>
          <span className='w-[1px] h-[61px] block bg-primary' />
          <span>SCROLL</span>
        </div>
      </div>
    </section >
  )
}

export { Hero }

