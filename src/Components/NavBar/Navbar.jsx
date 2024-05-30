import React from 'react'

function Navbar() {
  return (
    <div className='h-20 flex items-center justify-between w--full text-grey-800'>
        <div className='text-3xl pl-20 font-bold hover:translate-y-1 hover:scale-103 cursor-pointer'><span className='text-yellow-600'><strong>Jobs</strong></span>Finder</div>
        <div>
          <a href=''>
            <ul className='flex self-center gap-8 pl-20 text-xl font-bold'>
              <li className='hover:text-blue-500 hover:translate-y-1 hover:scale-102'>Jobs</li>
              <li className='hover:text-blue-500 hover:translate-y-1 hover:scale-102'>Companies</li>
              <li className='hover:text-blue-500 hover:translate-y-1 hover:scale-102'>About</li>
              <li className='hover:text-blue-500 hover:translate-y-1 hover:scale-102'>Contact</li>
            </ul>
          </a>
        </div>
        <div className='text-1xl pl-20'>
            <a href='./'>
            <button className='bg-blue-500 px-4 py-2 rounded-md text-white shadow-md hover:border hover:border-white hover:bg-blue-600'>Login</button>
            </a>
        </div>
    </div>
  )
}

export default Navbar