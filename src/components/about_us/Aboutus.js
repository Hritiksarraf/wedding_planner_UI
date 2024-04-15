import React from "react";

export default function Aboutus() {
  return (
    <>
      <div className="bg-[#cec8c0]">
        {/* <div
          className=" bg-cover  h-[75vh]  items-center justify-center text-center cover font-mono bg-no-repeat"
          style={{
            backgroundImage:
              'url("https://www.studiomemorylane.com/wp-content/uploads/2019/06/Ethnic-Punjabi-wedding-couple-photography.jpg")',
          }}
        ></div> */}
        <div className="grid grid-row-2 lg:grid-cols-2">
          <div className="lg:w-[50vw] m-0 order-2 lg:order-1 p-10 lg:p-24">
            <h1 className="font-['Caveat']  text-[#280c0c] ">
              WE ARE PASSIONATE ABOUT UNLEASHING ONLY THE BEST WEDDINGS, WITH
              YEARS OF EXPERIENCE AND A PORTFOLIO OF COUNTLESS WORKS.
            </h1>
            <p>
              Turning dreams into reality, DreamDay is your trusted partner in
              creating magical weddings. With a passion for excellence,
              creativity, and attention to detail, we bring your vision to life.
            </p>
            <p>
              From breathtaking venues to exquisite details, our expert team
              ensures your wedding day is reflection of your love story.
              Experience the joy of a stress-free journey, filled with
              personalized touches that make your wedding celebration truly
              one-of-a-kind.
            </p>
          </div>
          <div className="">
            <img src="wedding.jpeg" className="w-[90vw]  border-8 order-1 shadow-lg shadow-black lg:order-2  border-white m-4" alt="" />
          </div>
        </div>
        <div className=" lg:flex flex-row bg-[#ab9d8b] py-14 items-center justify-center gap-32">
          <div className="">
            <p className="font-['Caveat']  text-9xl text-center"> 250+</p>
            <p className="font-['Bad_Script'] text-center text-2xl">
              wedding Couples
            </p>
          </div>
          <div className="">
            <p className="font-['Caveat'] text-9xl text-center">20+</p>
            <p className="font-['Bad_Script'] text-center text-2xl">
              expert member
            </p>
          </div>
          <div>
            <p className="font-['Caveat'] text-9xl text-center">100%</p>
            <p className="font-['Bad_Script'] text-center text-2xl">
              Satisfaction Rate
            </p>
          </div>
        </div>
        <div className="pt-14">
          <div>
            <p className="font-['Bad_Script'] text-center text-2xl">
              WHY CHOOSE
            </p>
            <p className="font-['Caveat'] -mt-10 text-7xl lg:text-9xl text-center">
              Dreamy day
            </p>
          </div>
          <div className="lg:flex flex-row mt-20">
            <div className="flex flex-col items-center justify-center">
              <i class="fa-solid fa-champagne-glasses text-9xl text-center"></i>
              <p className="font-['Caveat'] mt-4 text-center text-4xl">
                CREATIVE CONCEPT
              </p>
              <p className="font-['Bad_Script'] text-center text-xs w-2/3">
                Our wedding organizers bring your dream wedding concept to life
                from thematic decorations to innovative layouts.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <i class="fa-solid text-9xl text-center fa-face-smile"></i>
              <p className="font-['Caveat'] mt-4 text-center text-4xl">
                PERFECT ATTIRE
              </p>
              <p className="font-['Bad_Script'] text-center text-xs w-2/3">
                Our wedding organizers work closely with our renowned designers
                to ensure that your own wedding attire is the star of the
                occasion.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <i class="fa-solid fa-plate-wheat text-9xl text-center"></i>
              <p className="font-['Caveat'] mt-4 text-center text-4xl">
                DELICIOUS FOOD
              </p>
              <p className="font-['Bad_Script'] text-center text-xs w-2/3">
                Our wedding organizers prioritize partnering with top-notch
                caterers to ensure that your wedding feast is a symphony of
                flavors.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="pt-16 bg-[#ab9d8b]">
            <p className="font-['Bad_Script'] bg-[#ab9d8b] text-center m-0 text-4xl lg:text-6xl">
              Our Expert Team
            </p>
          </div>
          <div className="flex flex-col lg:flex-row bg-[#ab9d8b] items-center m-0  pb-20 justify-center gap-10">
            <div>
              <div className="border-8 shadow-lg shadow-black  border-white m-4">
                <img src="wedding.jpeg" className="" alt="" />
              </div>
              <p className="font-['Bad_Script'] text-center text-1xl">
                Founder and cheif planner
              </p>
              <p className="font-['Caveat']  text-5xl text-center">
                Vivek Kumar
              </p>
            </div>
            <div>
              <div className="border-8 shadow-lg shadow-black border-white m-4">
                <img src="wedding.jpeg" className="" alt="" />
              </div>
              <p className="font-['Bad_Script'] text-center text-1xl">
                Founder and cheif planner
              </p>
              <p className="font-['Caveat']  text-5xl text-center">
                Vivek Kumar
              </p>
            </div>
            <div>
              <div className="border-8 shadow-lg shadow-black border-white m-4">
                <img src="wedding.jpeg" className="" alt="" />
              </div>
              <p className="font-['Bad_Script'] text-center text-1xl">
                Founder and cheif planner
              </p>
              <p className="font-['Caveat']  text-5xl text-center">
                Vivek Kumar
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
