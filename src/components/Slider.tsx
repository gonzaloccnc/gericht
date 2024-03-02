interface SliderProps {
  image: string
  label: string
}

const Slider: React.FC<SliderProps> = ({ image, label }) => {
  return (
    <div className='relative'>
      <figure className='flex justify-center items-center h-full'>
        <img
          src={image}
          alt={label}
          className='w-[94%] h-[94%] relative z-50 object-cover'
        />
      </figure>
      <div className='w-1/2 aspect-square bg-primary absolute bottom-0 left-0' />
      <div className='w-1/2 aspect-square bg-primary absolute top-0 right-0' />
    </div>
  )
}

export { Slider }

