import React, { useState } from 'react';
import { UncontrolledCollapse } from 'reactstrap';
import Carusal from '../components/carusal';
import { GalleryWithTab } from '../components/galleryWithTab';

export default function Gallery() {
  
  return (
    <>
    <Carusal/>
    <div className="text-yellow-900 bg-black text-center p-8">
          <p className="text-4xl lg:text-6xl hidden md:block whitespace-nowrap">
          Marriage memories collection!!
          </p>
          <p className="text-4xl lg:text-6xl  md:hidden whitespace-nowrap">
          Gallery!!
          </p>
        </div>
    <GalleryWithTab/>
    
    
    </>
  )
}
