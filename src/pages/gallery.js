import React, { useState } from 'react';
import './gallery.css'
import { UncontrolledCollapse } from 'reactstrap';

export default function Gallery() {
  let data =[
    {
      id: 1 ,
      imgSrc : 'venue1.jpeg',
    },
    {
      id: 2 ,
      imgSrc : 'grid12.jpg',
    },
    {
      id: 3 ,
      imgSrc : 'grid12.jpg',
    },
    {
      id: 4 ,
      imgSrc : 'venue4.jpeg',
    },
    {
      id: 5 ,
      imgSrc : 'venue5.jpeg',
    },
    {
      id: 6 ,
      imgSrc : 'grid12.jpg',
    },
    {
      id: 7,
      imgSrc : 'grid11.jpg',
    },
    {
      id: 8 ,
      imgSrc : 'venue2.jpeg',
    },
    {
      id: 9 ,
      imgSrc : 'venue1.jpeg',
    },
    {
      id: 10 ,
      imgSrc : 'grid12.jpg',
    },
    {
      id: 11 ,
      imgSrc : 'grid12.jpg',
    },
    {
      id: 12 ,
      imgSrc : 'venue4.jpeg',
    },
    {
      id: 13 ,
      imgSrc : 'venue5.jpeg',
    },
    {
      id: 14 ,
      imgSrc : 'grid12.jpg',
    },
    {
      id: 15 ,
      imgSrc : 'grid11.jpg',
    },
    {
      id: 16 ,
      imgSrc : 'venue2.jpeg',
    },
    
  ]
  const [model , setModel] = useState(false);
  const [tempimgsrc , setTempImgSrc] = useState('');
  const getImg =(imgSrc)=>{
    setTempImgSrc(imgSrc)
    setModel(true)
  }
  return (
    <>
    <div className='w-full h-screen bg-cover bg-center flex flex-col items-center justify-center text-center  font-mono bg-no-repeat' style={{ backgroundImage: 'url("hero.jpg")' ,height:"80vh"}}>
      
    </div>
    <div className={model ? "model open" : "model"}>
      <img src={tempimgsrc} alt="" />
      <i class="fa-solid fa-xmark cl" onClick={()=>{setModel(false)}}></i>


    </div>
      <div className='gallery pt-5 bg-black'>
        {
          data.map((item,index)=>{
            return(
              <div className='pics py-2' key={index} onClick={()=> getImg(item.imgSrc)}>
                <img src={item.imgSrc} alt="" className='w-screen' />
              </div>
            )
          })
        }
      </div>
    </>
  )
}
