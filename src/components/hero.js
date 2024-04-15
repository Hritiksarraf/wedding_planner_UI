import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Wedding.", "Anniversary.", "Birthday." ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }



  return (
    <div
      className={`w-full h-screen bg-cover  lg:bg-center flex flex-row t items-center justify-center text-center cover font-mono bg-no-repeat`}
      style={{
        backgroundImage:
          'url("https://www.studiomemorylane.com/wp-content/uploads/2019/06/Ethnic-Punjabi-wedding-couple-photography.jpg")',
        height: "78vh", 
      }}
    >
      <div className="lg:w-[50vw] lg:h-[50vh]">
        
      </div>
      <div className="flex-row lg:h-[30vh] h-[78vh] ">
        <div>
        <p className="text-[#dbbf96] font-[poppins]  text-5xl lg:text-7xl bg-[#a70707]   drop-shadow-[0_4.2px_4.2px_rgba(0,0,0,0.8)] outline-8 outline-zinc-700 ">Kashi Event & Caterers</p>
        
        </div>
        <div className="h-[40vh] lg:h-[0]"></div>
        <div className=" items-end justify-items-end h-[60vh]">
        <h1 className="text-white text-clip font-[poppins] bg-[#aa9c66] text-5xl inline-block ">{``} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Shadi", "Anniversary", "Birthday" ]'><span className="wrap">{text}</span></span></h1>
        <div className="lg:w-[50vw] lg:items-center lg:justify-center lg:flex p-1" >
        <p className="text-white lg:w-[30vw] text-center text-xl lg:text-2xl  ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi, libero.</p>
        </div>
        
        <Link to="/contact" className={`bg-gradient-to-r py-2 px-3 to-[#aa9c66]  from-[#584D3C]  text-decoration-none  text-white rounded-2xl  text-lg`}>Contact Us</Link>
        </div>
        
     
      </div>
    </div>
  );
}
