import React, { useState } from 'react';
// import body from "./asset/body.jpg"
import { Link } from 'react-router-dom';
// import Navlinks from './navlinks';
// import Button from './button';

const Navbar = () => {
  const [open,setOpen] =useState(false)
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return (
    <>
    <nav className={`bg-gradient-to-r to-[#aa9c66] from-[#584D3C] z-50 backdrop-filter backdrop-blur-lg sticky top-0 w-screen h-16 md:h-20 duration-500 ${!open ? "":"h-screen "} z-2`} style={{zIndex:"50000"}} >
      <div className='flex items-center font-medium justify-around'>
        <div className=' md:w-auto  w-full'>
          <img src="logo192.png" alt="" className='h-9 -mb-4 lg:my-0 px-10  lg:pb-0 '/>

        </div>
        <div className='text-3xl px-4 mt-3 md:hidden'  onClick={()=>setOpen(!open)}>
        <ion-icon  name={`${open ? 'close' : 'menu'}`}></ion-icon>
        </div>
        <ul className='md:flex  hidden uppercase item-center gap-8 font-[poppins]'>
          <li>
            <Link onClick={()=>setOpen(open)} onClick={scrollToTop} to='/' className='py-7 px-3  text-black inline-block text-decoration-none' >Home</Link>
          </li>
          <li>
            <Link onClick={()=>setOpen(open)} onClick={scrollToTop} to='/events' className='py-7 px-3 text-black inline-block text-decoration-none'>EVENTS WE HOST</Link>
          </li>
          <li>
            <Link onClick={()=>setOpen(open)} onClick={()=>setOpen(open)} onClick={scrollToTop}  to='/about_us' className='py-7 px-3 text-black inline-block text-decoration-none'>ABOUT US</Link>
          </li>
          <li>
            <Link onClick={()=>setOpen(open)} onClick={()=>setOpen(open)} onClick={scrollToTop} to='/gallery' className='py-7 px-3 text-black inline-block text-decoration-none'>GALLERY</Link>
          </li>
          <li>
            <Link onClick={()=>setOpen(open)} onClick={()=>setOpen(open)} onClick={scrollToTop} to='/our_work' className='py-7 px-3 text-black inline-block text-decoration-none'>OUR WORK</Link>
          </li>
          
          
          {/* <Navlinks/> */}
        </ul>
        <div className='md:block -p-4 hidden'>
          {/* <Button/>
           */}
            <div className='bg-transparent h-10 w-28 flex  border-2 cursor-pointer  text-black'>
      <Link onClick={()=>setOpen(open)} to='/contact' onClick={()=>setOpen(open)} onClick={scrollToTop} className='h-full w-full pt-2 text-center text-black m-auto text-decoration-none '>CONTACT</Link>
    </div>
        </div>


        <ul className=  {`md:hidden z-50 bg-gradient-to-r to-[#aa9c66] from-[#584D3C] text-center text-2xl text-white absolute w-screen  bottom-0  pl-4 duration-500 ${open ? 'left-0 ':"left-[-100%]"} `} style={{height:"90vh"}}>
          <li>
            <Link to="/" className='py-7 px-3  text-white text-decoration-none inline-block' onClick={scrollToTop} onClick={()=>setOpen(!open)}>Home</Link>
          </li>
          <li>
            <Link to="/events" className='py-7 px-3 text-white inline-block text-decoration-none' onClick={scrollToTop} onClick={()=>setOpen(!open)}>EVENTS WE HOST</Link>
          </li>
          <li>
            <Link to="/about_us" className='py-7 px-3 text-white inline-block text-decoration-none' onClick={scrollToTop} onClick={()=>setOpen(!open)}>ABOUT US</Link>
          </li>
          <li>
            <Link to="/gallery" className='py-7 px-3 text-white inline-block text-decoration-none' onClick={scrollToTop} onClick={()=>setOpen(!open)}>GALLERY</Link>
          </li>
          <li>
            <Link to="/our_work" className='py-7 px-3 text-white inline-block text-decoration-none'onClick={scrollToTop} onClick={()=>setOpen(!open)}>OUR WORK</Link>
          </li>
          <li>
            <Link to="/contact" className='py-7 px-3 text-white inline-block text-decoration-none'onClick={scrollToTop} onClick={()=>setOpen(!open)}>CONTACT US</Link>
          </li>
          {/* <Navlinks/> */}
          <div className=''>
          {/* <Button/> */}
          {/* <div className='bg-transparent h-10 w-[100vw] flex   cursor-pointer  text-black items-center justify-center'>
            <div>
            <Link onClick={()=>setOpen(!open)} to='/contact' className='h-full w-full p-2 text-white  text-center m-auto text-decoration-none '>CONTACT</Link>
            </div>
      
    </div> */}
        </div>
        </ul>
        
        

      </div>

    </nav>
    </>
  );
};

export default Navbar;
