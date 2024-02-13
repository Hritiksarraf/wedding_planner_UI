import React from 'react'
import Hero from '../components/hero'
import Videoplayer from "../components/videoplayer.js"
import CardStak from '../components/cardStak.js';
import Middle from '../components/middle.js';
import Facilites from '../components/facilites.js';

export default function Home() {
  return (
    <>
    <Hero/>
    <Videoplayer/>
    <CardStak/>
    <Middle/>
    <Facilites/>
    </>
  )
}
