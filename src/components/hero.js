
import React from 'react';

export default function Hero() {
  return (
    <div className='w-full h-screen bg-cover bg-center flex flex-col items-center justify-center text-center  font-mono bg-no-repeat' style={{ backgroundImage: 'url("hero.jpg")' ,height:"80vh"}}>
      {/* <h5 className='text-6xl text-green-800'>My Name Ifejnjess Hritk</h5> */}
      {/* <h3 className='text-2xl text-red-800'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt unde libero ullam odio ab cupiditate!</h3> */}
      <button className='border-2 border-purple-950 my-10 px-9 py-2 rounded-md shadow-md text-purple-950'>Contact Us</button>
    </div>
  );
}
