import React from 'react';

export default function Middle() {
  return (
    <div>
      <div
        className='flex flex-col items-center justify-center mt-20'
        style={{ backgroundImage: "url('bar1.jpg')", height: '50vh', backgroundSize: 'cover' }}
      >
        <h1 className='text-center text-white text-7xl my-4' style={{fontFamily:"Garamond"}}>The Story</h1>
        <h3 className=' text-4xl text-yellow-500 text-center p-1' style={{fontFamily:"Garamond"}}>A TAILOR MADE AFFAIR</h3>
      </div>
      <div className='mt-24 mb-9 flex flex-col item-center justify-center'>
            <h1 className='text-center text-whit text-3xl mb-5' style={{fontFamily:"bold"}}>Events and Celebrations at our Luxury Outdoor Wedding Venue in Bangalore</h1>
            <h2 className='text-center text-2xl' style={{fontFamily:"Garamond"}}>THE TAMARIND TREE EXPERIENCE</h2>
            <p className='text-center text-1xl px-4 lg:w-1/2 m-auto my-4' style={{fontFamily:"Garamond"}}>Nestled in a five-acre garden of beautiful trees including the original tamarind tree after which it was named, a pond, a colonial Bandstand, elegant pavilions, and ample open spaces.</p>
            {/* <p  className='text-center text-1xl px-4 lg:w-1/2 m-auto my-2' style={{fontFamily:"Garamond"}}>Once someone's home, then a restaurant, sometimes a weekend getaway, and now a luxury space for events, corporate expeditions, and leisure retreats. It is one of the most understated, yet magical resorts for Marriage in </p> */}
      </div>
      <div className='mb-10 lg:mb-20'>
        <img  className='lg:w-2/3 lg:h-2/3 w-[89vw] m-auto'   src="fullpic.jpg" alt="" />
      </div>
      <div className='flex flex-col items-center justify-center'
        style={{ backgroundImage: "url('bar3.jpg')", height: '50vh', backgroundSize: 'cover' }}
      >
        <h1 className='text-center text-white text-7xl my-4'>Facilities</h1>
        <h3 className='text-white text-4xl text-center p-1'>35 YEARS OF HERITAGE</h3>
      </div>
    </div>
  );
}

