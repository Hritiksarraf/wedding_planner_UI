import React from "react";
import Accordion from "./accordion";
import { Container } from "reactstrap";

export default function Endcomponent() {
  return (
    <>
      

      <div className="m-auto h-2/3 w-screen flex flex-col justify-center p-3 items-center bg-gray-300 ">
        <div className="h-16 w-screen flex items-center justify-center ">
        <a className=" text-black mx-3" href="#"><i class="fa-brands fa-instagram fa-2xl "></i></a>
          <a className=" text-black mx-3" href="#"><i class="fa-brands fa-facebook fa-2xl"></i></a>
          <a className=" text-black mx-3" href="#"><i class="fa-brands fa-youtube fa-2xl"></i></a>
          <a className=" text-black mx-3" href="#"><i class="fa-solid fa-envelope fa-2xl"></i></a>
        </div>
      <iframe className=" lg:w-1/2 w-4/5 h-96 md:h-[30rem] mb-10" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=880&amp;height=444&amp;hl=en&amp;q=Bhawsinka%20House,%20Laxmi%20Dalmia%20Road,%20Coat%20Bazaar%20Road,%20near%20Raghu%20Leela%20Regort,%20Koat%20Bazar,%20Sitamarhi,%20Bihar%20843301%20Sitamarhi%20+(welcome)&amp;t=&amp;z=18&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>  <script type='text/javascript' src='https://embedmaps.com/google-maps-authorization/script.js?id=fb5310535e855f23041e76f80d220879cda6a205'></script>
      </div>
      <div className="w-screen h-48 bg-zinc-950 flex itmes-center justify-center text-gray-400 flex-col text-center">
          <p>The Tamarind Tree, Koat Bazar, Sitamarhi, Bihar, India </p>
          <p> +91 7061652485 | hritiksarraf@gmail.com</p>

      </div>

      {/* <Container> */}
        {/* <Accordion /> */}
      {/* </Container> */}
    </>
  );
}
