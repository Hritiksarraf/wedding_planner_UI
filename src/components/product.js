import React from 'react'

export default function Product(props) {
  return (
    <>
        <div className='p-4 lg:p-10 bg-black bg-gradient-to- to-[#bf72f2] from-[#0c0339] '>
        <div className='  rounded-3xl m border-4 shadow-md z-10  shadow-[#dfcaab] border-[#584D3C] bg-black' >
            <div className='grid lg:grid-cols-2 items-center justify-items-center '>
                <div className='order-2 pb-10 lg:pb-0 lg:order-1 flex text-white flex-col justify-center items-center'>
                    <p className=" text-center p-2 lg:text-7xl text-5xl animate-pulse font-['poppins']">{props.heading}</p>
                    <p className='text-center mb-4 text-lg  px-3 lg:w-2/3 font-["Garamond"]'> {props.description}</p>

                    <div className='flex justify-between width-screen'>
                        <div className='px-8 '>
                        <button className={`bg-gradient-to-r  to-[#aa9c66] from-[#584D3C] py-2 px-6  text-black rounded-2xl  text-lg`}>Contact</button>
                        </div>
                        <div className='px-8'>
                        <button className={`bg-gradient-to-r py-2 px-3 to-[#aa9c66] from-[#584D3C]  text-black rounded-2xl  text-[1.1rem]`}>View More</button>
                        </div>
                    </div>
                    
                </div>

                <div class="relative rounded-md ">
  <img src={props.img} class="lg:w-[50vw] rounded-3xl h-auto" alt="Background Image"/>
  <div class="absolute rounded-3xl inset-0 bg-gradient-to-t lg:bg-gradient-to-l from-black to-transparent"></div>
</div>
            </div> 
        </div>
        </div>
    </>
  )
}
