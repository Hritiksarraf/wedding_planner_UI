import React, { useState } from 'react';
// import body from "./asset/body.jpg"
import { Link } from 'react-router-dom';
// import Navlinks from './navlinks';
// import Button from './button';

const Navbar = () => {
  const [open,setOpen] =useState(false)
  return (
    <>
    <nav className={`bg-[#FFFFFF30] bg-[url] backdrop-filter backdrop-blur-lg fixed top-0 w-screen md:h-20 duration-500 ${!open ? "":"h-screen bg-white"} z-2`} >
      <div className='flex items-center font-medium justify-around'>
        <div className='px-5 md:w-auto w-full'>
          <img src="logo192.png" alt="" className='h-9 my-4 '/>

        </div>
        <div className='text-3xl px-4 md:hidden'  onClick={()=>setOpen(!open)}>
        <ion-icon  name={`${open ? 'close' : 'menu'}`}></ion-icon>
        </div>
        <ul className='md:flex  hidden uppercase item-center gap-8 font-[poppins]'>
          <li>
            <Link onClick={()=>setOpen(open)} to='/' className='py-7 px-3 text-yellow-900 inline-block text-decoration-none'>Home</Link>
          </li>
          <li>
            <Link onClick={()=>setOpen(open)} to='/events' className='py-7 px-3 text-yellow-900 inline-block text-decoration-none'>EVENTS WE HOST</Link>
          </li>
          <li>
            <Link onClick={()=>setOpen(open)} to='/about_us' className='py-7 px-3 text-yellow-900 inline-block text-decoration-none'>ABOUT US</Link>
          </li>
          <li>
            <Link onClick={()=>setOpen(open)} to='/gallery' className='py-7 px-3 text-yellow-900 inline-block text-decoration-none'>GALLERY</Link>
          </li>
          <li>
            <Link onClick={()=>setOpen(open)} to='/our_work' className='py-7 px-3 text-yellow-900 inline-block text-decoration-none'>OUR WORK</Link>
          </li>
          
          
          {/* <Navlinks/> */}
        </ul>
        <div className='md:block hidden'>
          {/* <Button/>
           */}
            <div className='bg-black h-10 w-28 flex  rounded-full cursor-pointer hover:text-Blue-300 text-white'>
      <Link onClick={()=>setOpen(open)} to='/contact' className='h-full w-full pt-2 text-center m-auto text-decoration-none '>CONTACT</Link>
    </div>
        </div>


        <ul className=  {`md:hidden bg-white absolute w-screen  bottom-0  pl-4 duration-500 ${open ? 'left-0 ':"left-[-100%]"} `} style={{height:"90vh"}}>
          <li>
            <Link to="/" className='py-7 px-3 text-red-800 inline-block text-decoration-none inline-block' onClick={()=>setOpen(!open)}>Home</Link>
          </li>
          <li>
            <Link to="/events" className='py-7 px-3 text-red-800 inline-block text-decoration-none' onClick={()=>setOpen(!open)}>EVENTS WE HOST</Link>
          </li>
          <li>
            <Link to="/about_us" className='py-7 px-3 text-red-800 inline-block text-decoration-none' onClick={()=>setOpen(!open)}>ABOUT US</Link>
          </li>
          <li>
            <Link to="/gallery" className='py-7 px-3 text-red-800 inline-block text-decoration-none' onClick={()=>setOpen(!open)}>GALLERY</Link>
          </li>
          <li>
            <Link to="/our_work" className='py-7 px-3 text-red-800 inline-block text-decoration-none' onClick={()=>setOpen(!open)}>OUR WORK</Link>
          </li>
          {/* <Navlinks/> */}
          <div className=''>
          {/* <Button/> */}
          <div className='bg-black h-10 w-28 flex  rounded-full cursor-pointer hover:text-Blue-300 text-white'>
      <Link onClick={()=>setOpen(!open)} to='/contact' className='h-full w-full pt-2 text-center m-auto text-decoration-none '>CONTACT</Link>
    </div>
        </div>
        </ul>
        
        

      </div>

    </nav>
    </>
  );
};

export default Navbar;
