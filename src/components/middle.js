import React from 'react';

export default function Middle() {
  return (
    <div>
      <div
        className='flex flex-col items-center justify-center mt-20'
        style={{ backgroundImage: "url('bar1.jpg')", height: '50vh', backgroundSize: 'cover' }}
      >
        <h1 className='text-center text-white text-7xl my-4' style={{fontFamily:"fantasy"}}>The Story</h1>
        <h3 className=' text-4xl text-yellow-500' style={{fontFamily:"fantasy"}}>A TAILOR MADE AFFAIR</h3>
      </div>
      <div className='mt-24 mb-9 flex flex-col item-center justify-center'>
            <h1 className='text-center text-whit text-3xl mb-5' style={{fontFamily:"cursive"}}>Events and Celebrations at our Luxury Outdoor Wedding Venue in Bangalore</h1>
            <h2 className='text-center text-2xl' style={{fontFamily:"fantasy"}}>THE TAMARIND TREE EXPERIENCE</h2>
            <p className='text-center text-1xl px-4 lg:w-1/2 m-auto my-4' style={{fontFamily:"Bad Script"}}>Nestled in a five-acre garden of beautiful trees including the original tamarind tree after which it was named, a pond, a colonial Bandstand, elegant pavilions, and ample open spaces, The Tamarind Tree is a place like none other.</p>
            <p  className='text-center text-1xl px-4 lg:w-1/2 m-auto my-2' style={{fontFamily:"Bad Script"}}>Once someone's home, then a restaurant, sometimes a weekend getaway, and now a luxury space for events, corporate expeditions, and leisure retreats. It is one of the most understated, yet magical resorts for Marriage in Bangalore. We consider The Tamarind Tree a warm, family-run business and one of the best heritage hideaways in India.</p>
      </div>
      <div className='mb-20'>
        <img  className='w-2/3 h-2/3 m-auto'   src="fullpic.jpg" alt="" />
      </div>
      <div className='flex flex-col items-center justify-center'
        style={{ backgroundImage: "url('bar3.jpg')", height: '50vh', backgroundSize: 'cover' }}
      >
        <h1 className='text-center text-white text-7xl my-4'>Facilities</h1>
        <h3 className='text-white text-4xl'>35 YEARS OF HERITAGE</h3>
      </div>
    </div>
  );
}

