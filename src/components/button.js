import React, { useState } from 'react';
import { Link } from 'react-router-dom'
export default function Button() {
  const [open,setOpen] =useState(false)
  return (
    <div className='bg-black h-10 w-28 flex  rounded-full cursor-pointer hover:text-Blue-300 text-white'>
      <Link onClick={()=>setOpen(open)} to='/contact' className='h-full w-full pt-2 text-center m-auto text-decoration-none '>CONTACT</Link>
    </div>
  )
}
