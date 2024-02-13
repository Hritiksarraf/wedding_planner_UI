import React from 'react'
// import { Link } from 'react-router-dom'
import './our_work.css'

export default function Our_work() {
  return (
    <>
    <body className='ourwork'>
    <section>
        <div className="waves">
            <img src="stars.jpg"  alt="" className="stars"/>
            <img src="island.png" alt="" className="island"/>
            <div className="wave" id="wave1" style={{ backgroundImage: 'url("wave.png")'}}></div>
            <div className="wave" id="wave2" style={{ backgroundImage: 'url("wave.png")'}}></div>
            <div className="wave" id="wave3" style={{ backgroundImage: 'url("wave.png")'}}></div>
            <div className="wave" id="wave4" style={{ backgroundImage: 'url("wave.png")'}}></div>
            
        </div>
    </section>
</body>
    </>
  )
}
