import React from 'react'
import Card from "./card.js" 
import {Container} from "reactstrap"

export default function CardStak() {
  return (
    <>
    <div className='flex flex-wrap  flex-center item-center justify-center '>
        <Card title="WEDDINGS & CELEBRATIONS" img="wedding.jpeg"/>
        <Card title="CORPORATE EVENTS" img="corporate.jpeg" />
        <Card title="HERITAGE GETAWAYS" img="haritage1.jpeg"/>
        <Card title="CULTURAL FESTS & SCREENINGS" img=  'fest1.jpeg' />
        <Card title="PICTURE-PERFECT  LOCATION" img="pictureperfect.jpeg" />
        <Card title="ART EXHIBITIONS & TRADE SHOWS" img="artex.webp" />
    </div>
    </>
  )
}
