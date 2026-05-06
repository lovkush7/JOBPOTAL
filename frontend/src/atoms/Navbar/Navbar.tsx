import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-around  '>
      <div className='flex justify-start'>
          MYJOB
      </div>
      <div className=''>
         <ul className='flex  text-gray-400 cursor-pointer gap-3 '>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
         </ul>
      </div>
    </div>
  )
}

export default Navbar
