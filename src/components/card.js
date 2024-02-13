import React from 'react'

export default function card(props) {
  return (
    <>
    <div className='w-96 flex flex-col  h-96 m-5' data-aos="fade-up">
        <img src={props.img} className='' alt="" />
        <a className='text-gray-400 hover:text-red-800 text-decoration-none text-4xl text-center' style={{fontFamily:"Indie Flower"
, fontSize:"1.5rem"}} href="#">{props.title}</a>
        <p className='text-center text-0.5xl' style={{fontFamily:"Bad Script"
}}>Taking luxurious hospitality to the extremes of enchanting experience, our most coveted banquet at The Tamarind Tree is the place you can relax in captivating surroundings and celebrate your Sangeeth ceremony. Dance the evening away to the tunes of merriness.</p>
    </div>
    </>
  )
}
