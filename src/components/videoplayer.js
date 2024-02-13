import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from "reactstrap"

export default function Videoplayer() {
  return (
    <>
    <Container>
      <h1 className='text-center text-5xl font-mono mt-28 mb-9 whitespace-no-wrap' style={{fontFamily:  'Shadows Into Light',}}>Best Heritage Wedding Venue in Sitamarhi</h1>
      <div class="ratio ratio-21x9">
          <iframe src="https://www.youtube.com/embed/34Tpyu7oogs?si=7fpy43deQISY6DEJ" title="YouTube video" allowfullscreen="true"></iframe>
        </div>
        <div className='text-center text-9xl'><h3 className='text-center text-1xl pb-20 pt-10  border-b border-gray-500' style={{fontFamily:  'Caveat',}} >HOME TO THE FINEST COLLECTION OF ART, ANTIQUES,
AND ECLECTIC STORIES OF INDIA'S GLORIOUS PAST.</h3></div>
      
    </Container>
  </>
  )
}
