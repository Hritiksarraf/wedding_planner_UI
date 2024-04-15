import React from 'react'
import Hero from '../components/hero'
import Videoplayer from "../components/videoplayer.js"
import CardStak from '../components/cardStak.js';
import Middle from '../components/middle.js';
import Facilites from '../components/facilites.js';
import Contact_us from '../components/contact_us.js';
import Testimonial from '../components/testimonial.js';

export default function Home() {
  return (
    <div className='bg-[#cec8c0'>
    <Hero/>
    <Videoplayer/>
    <CardStak/>
    <Middle/>
    <Facilites/>
    {/* <Testimonial/> */}
    <Contact_us/>
    </div>
  )
}
