import React from 'react'
import 'animate.css';

export default function card(props) {
  return (
    <>
    <div className='w-96 flex flex-col  h-96 m-5' data-aos="fade-up">
        <img src={props.img} className='border-8 border-[#584D3C] p-1' alt="" />
        <a className='text-[#584D3C] px-2 font-bold hover:text-red-800 text-decoration-none text-4xl my-2 lg:text-5xl text-center animate-pulse' style={{fontFamily:"poppins"
, fontSize:"1.5rem"}} href="#">{props.title}</a>
        <p className='text-center lg:text-lg  ' style={{fontFamily:"Garamond"
}}>Our most coveted banquet at The Tamarind Tree is the place you can relax in captivating surroundings and celebrate your Sangeeth ceremony. .</p>
    </div>
    </>
  )
}
