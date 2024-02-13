import React from 'react'

export default function Photocard(props) {
  return (
    <>
    <div className='m-4'>
        <img className=' ' style={{height:"20rem", width:'32rem'}} src={props.img} alt="" />
        <p className='my-3 text-gray-500'>{props.title}</p>
    </div>
    </>
  )
}