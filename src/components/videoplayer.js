import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from "reactstrap"

export default function Videoplayer() {
  return (
    <>
    <Container>
      <h1 className='text-center t lg:text-5xl font-mono mt-8 mb-9 whitespace-no-wrap' style={{fontFamily:  'Lora',}}>Best Heritage Wedding Venue in Sitamarhi</h1>
      <div class="ratio ratio-4x3 lg:h-[60vh] w-screen " >
          <iframe src="https://www.youtube.com/embed/34Tpyu7oogs?si=7fpy43deQISY6DEJ" title="YouTube video" allowfullscreen="true"></iframe>
        </div>
        <div  className='text-center  text-3xl lg:text-9xl'><h3 className='text-center  text-[18px] lg:text-3xl pb-10 lg:pb-20 pt-10 font-extrabold  border-b border-gray-500' style={{fontFamily:  'Caveat',}} >HOME TO THE FINEST COLLECTION OF ART, ANTIQUES,
AND ECLECTIC STORIES OF INDIA'S GLORIOUS PAST.</h3></div>
      
    </Container>
  </>
  )
}
