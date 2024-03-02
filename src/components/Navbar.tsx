
const Navbar: React.FC = () => {
  return (
    <nav className='px-20 py-8 flex items-center justify-between'>
      <h1 className='font-bold text-logo uppercase'>
        gerícht
      </h1>
      <ul className='flex gap-6'>
        <li>Home</li>
        <li>Pages</li>
        <li>Contact Us</li>
        <li>Blog</li>
        <li>Landing</li>
      </ul>

      <div className='text-base [&>*]:font-openSans flex'>
        <button>Login / Registration</button>
        <div className='w-[1px] border-l h-9 ml-8 mr-8' />
        <button>Book Table</button>
      </div>
    </nav>
  )
}

export { Navbar }

