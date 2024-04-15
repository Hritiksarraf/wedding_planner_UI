import React from 'react'
import Photocard from './photocard'
import { Container} from "reactstrap"

export default function Facilites() {
  return (
    <>
    <div className='mt-28 mb-9 flex flex-col item-center justify-center'>
            <h1 className='text-center text-whit text-3xl mb-5' style={{fontFamily:"bold"}}>Host Your Wedding at the Best Wedding Venue in Bangalore</h1>
            {/* <h2 className='text-center text-2xl px-3  lg:w-2/3 m-auto' style={{fontFamily:"Garamond"}}>FROM GREEN AISLES TO GRANITE ALTERS, FLUID OPEN SPACES, LUSH GREEN LAWNS, HIDDEN NOOKS AND CORNERS FOR INTIMATE CONVERSATIONS TO SPILL OVER.</h2> */}
            <p className='text-center text-0.5xl px-8 lg:px-2 lg:w-1/2 m-auto my-4' style={{fontFamily:"Garamond"
}}>There are multiple spaces each uniquely beautiful and warm in their own ways 
suited for different celebrations of your event.  Plan each event in a different space as the entire property is given only to one guest and their party! We also have 28 rooms on the property that can accommodate nearly 100 people at once.</p>
            {/* <p  className='text-center text-1xl w-1/2 m-auto my-2'>Once someone's home, then a restaurant, sometimes a weekend getaway, and now a luxury space for events, corporate expeditions, and leisure retreats. It is one of the most understated, yet magical resorts for Marriage in Bangalore. We consider The Tamarind Tree a warm, family-run business and one of the best heritage hideaways in India.</p> */}
      </div>
      <Container className='flex flex-wrap item-center justify-center'>
      <Photocard img="venue1.jpeg" title="THE POND PAVILLION" />
      <Photocard img="venue2.jpeg" title="THE COLONIAL BANDSTAND" />
      <Photocard img="venue3.jpeg" title="ATHITHISHALA"  />
      <Photocard img="venue4.jpeg" title="RANGASTHALA"  />
      <Photocard img="venue5.jpeg" title="VILLA COURTYARD" />
      <Photocard img="venue6.webp" title="CENTURIES OLD STONE MANTAPA" />
      </Container>


      <div
        className="flex flex-col items-center justify-center mt-5"
        style={{
          backgroundImage: "url('bar4.jpg')",
          height: "50vh",
          backgroundSize: "cover",
        }}
      >
        <h1
          className="text-center text-white text-7xl my-4"
          style={{ fontFamily: "fantasy" }}
        >
          Living
        </h1>
        <h3
          className="text-4xl text-yellow-500"
          style={{ fontFamily: "fantasy" }}
        >
          LUXURY LIVING
        </h3>
      </div>
      <div className="mt-28 mb-9 flex flex-col item-center justify-center">
        <h2
          className="text-center text-whit text-2xl "
          style={{ fontFamily: "Garamond" }}
        >
          LUXURY LIVING AT A VENUE FOR OUTDOOR EVENTS
        </h2>

        <p
          className="text-center text-1xl lg:w-1/3 p-1 m-auto my-4 text-gray-700 "
          style={{ fontFamily: "Garamond" }}
        >
          Choose between our magical suites and the plush villa. The suites
          offer a luxury experience for our guests looking for a quiet, serene
          getaway. The water courtyard villa has four rooms open to sky bathing,
          centered around a beautiful koi pond. 
        </p>

        <div className="flex justify-center flex-wrap">
          <img
            className="p-3"
            style={{ height: "20rem" }}
            src="endpic1.jpg"
            alt=""
          />
          <img
            className="p-3"
            style={{ height: "20rem" }}
            src="endpic2.webp"
            alt=""
          />
        </div>
      </div>
      <div
        className="flex flex-col items-center justify-center mt-28"
        style={{
          backgroundImage: "url('bar4.jpeg')",
          height: "50vh",
          backgroundSize: "cover",
        }}
      >
        <h1
          className="text-center text-white text-7xl my-4"
          style={{ fontFamily: "Garamond" }}
        >
          Planning & Services
        </h1>
        <h3
          className=" text-4xl text-center p-1 text-yellow-500"
          style={{ fontFamily: "fantasy" }}
        >
          INTEGRATED SERVICES
        </h3>
      </div>
      <div className="mt-28 mb-9 flex flex-col item-center justify-center">
        <h2
          className="text-center text-whit text-4xl "
          style={{ fontFamily: "Garamond" }}
        >
          PLAN YOUR DREAM EVENT WITH US IN SITAMARHI{" "}
        </h2>
        
        <p
          className="text-center text-1xl lg:w-1/3 m-auto my-4 text-gray-700"
          style={{ fontFamily: "Garamond" }}
        >
          We, at The Tamarind Tree, endeavor to give our guests a seamless
          experience. Be it a wedding, or a corporate event, we are happy to
          extend the use of our planning and services team to guests. 
        </p>
      </div>
      <div className="">
        <div className="flex lg:w-2/3 flex-col lg:flex-row justify-center lg:mx-auto">
          <div className="flex flex-col justify-center items-center">
            <div className="my-4 mx-4">
              <img src="body.jpg" alt="" />
            </div>
            <div className="my-4 mx-4">
              <img src="grid21.jpg" alt="" />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="my-4 mx-4">
              <img src="grid12.jpg" alt="" />
            </div>
            <div className="my-4 mx-4" >
              <img src="body.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
