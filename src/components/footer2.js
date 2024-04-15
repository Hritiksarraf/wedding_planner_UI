import React from "react";
import { Link } from 'react-router-dom';
export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      };
  return (
    <footer className="bg-black/95">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div  className="mb-10 md:mb-0">
            <Link to="/" onClick={scrollToTop}  className="flex items-center mb-10 no-underline">
              <img
                src="logo192.png"
                className="h-[60px] w-[60px] mr-3"
                alt="Atlas Gym Logo"
                loading="lazy"
              /><span className="no-underline text-red-500 mt-8 text-2xl no-underline">Kashi Event & Caterers</span>
            </Link>
            <div  className="text-sm flex mt-4 justify-end sm:mt-0 text-gray-200 flex-col ">
              <p className="text-lg text-blue-400 font-medium h  lg:mt- w[screen] lg:pr-16 lg:w-[35vw]"><span className="text-red-600">Kashi Event & Caterers</span> offers cutting-edge, eco-friendly packaging solutions. Specializing in biodegradable, compostable, and recyclable products, we help brands align with environmental responsibility for a sustainable future.</p>
              
            </div>
          </div>
          <div  className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibol uppercase text-white">
                Quick Links
              </h2>
              <ul className="text-gray-400 text-left -mx-6 font-medium">
                <li className="mb-4 ">
                  <Link to="/" smooth onClick={scrollToTop} className="no-underline text-left hover:underline hover:text-blue-800">
                    HOME
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="/events" onClick={scrollToTop} smooth href="#" className="no-underline hover:underline hover:text-blue-800">
                    EVENTS
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="/about_us" onClick={scrollToTop} smooth href="#" className="no-underline hover:underline pt-4 hover:text-blue-800">
                    ABOUT US
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="gallery" onClick={scrollToTop} smooth href="#" className="no-underline hover:underline hover:text-blue-800">
                    GALLERY
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="/our_work" onClick={scrollToTop} smooth href="#" className="no-underline hover:underline hover:text-blue-800">
                    OUR WORK
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="/contact" onClick={scrollToTop} smooth href="#" className=" no-underline hover:underline hover:text-blue-800">
                    CONTACT US
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                Follow us
              </h2>
              <ul className="text-gray-400 -mx-6 font-medium">
                <li className="mb-4 flex ">
                
                  <a href="https://www.instagram.com/greenpack.innovations?igsh=MWQycHpob3hwMzZv" target="_blank" className="hover:underline text-2xl no-underline text-pink-500  flex items-center -mx-2 hover:text-red-600 ">
                    <div className="inline mr-2 pb-2">
                  <ion-icon name="logo-instagram" size="large" className="text-xl mx-2"></ion-icon>
                  </div>
                  <span className="mb-2 ">
                    Instagram
                    </span>
                  </a>
                </li>
                <li>
                  
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold  uppercase text-white">
                Contact us
              </h2>
              <ul className="text-gray-400 -mx-6 font-medium">
                <li className="mb-4">
                  <p  className="hover:underline text-green-400">
                  hritiksarraf@gmail.com
                  </p>
                </li>
                <li className="flex items-center justify-center ">
                <ion-icon name="logo-whatsapp" className=""></ion-icon>
                  <p  className="hover:underline mx-2">
                  
                  +91-7061652485
                  </p>
                </li>
                <li>
                  <p  className="hover:underline pt-2">
                 Koat bazar,Sitamarhi
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div  className="my-6 h-[2px] bg-gradient-to-r from-red-500 to-orange-600 sm:mx-auto lg:my-8" />
        {/* <div  className="sm:flex sm:items-center sm:justify-between">
          <span  className="text-sm text-gray-200 sm:text-center text-center m-auto ">
            Made with ❤️ by Hritik Sarraf
            
            
          </span>
        </div> */}
      </div>
    </footer>
  );
}
