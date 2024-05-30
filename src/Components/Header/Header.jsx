import React from 'react'

function Header() {
  return (
    <div className='mt-20 flex flex-col gap-5 items-center justify-center text-zinc-600'>
        <h1 className='text-5xl font-bold hover:translate-y-2 hover:scale-103'>Your ideal job awaits, start the search</h1>
        <p className='text-xl text-yellow-600'>Get latest job opening that best suits you!</p>
    </div>
  )
}

export default Header