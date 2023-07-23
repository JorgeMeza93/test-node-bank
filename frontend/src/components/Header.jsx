import React from 'react'

const Header = () => {
  return (
    <header className='px-4 py-5 bg-white border-b'>
        <div className='md:flex md:justify-between md:items-center container mx-auto'>
            <a href='/' className="w-28 block bg-red-500">
                <img src='logo.png' className='block mx-auto w-full'/>
            </a>
            <input type='search' placeholder='Search' className='rounded-lg lg:w-80 p-2 border block h-14' />
            <div>
                <button className='text-white text-sm bg-sky-600 p-3 rounded-md uppercase font-bold'>Log Out</button>
            </div>
        </div>

    </header>
  )
}

export default Header