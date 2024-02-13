import React from "react";

export default function Contact() {
  return (
    <>
      <div
        className="w-full h-screen bg-cover bg-center flex flex-col items-center justify-center text-center  font-mono bg-no-repeat"
        style={{ backgroundImage: 'url("contact.jpg")', height: "80vh", marginTop:"8vh" }}
      ></div>
      {/* contact things */}

      <div className="flex flex-col items-center lg:h-96 justify-center h-screen  bg-black">
        <div className="text-yellow-900 pb-12">
          <p className="text-4xl lg:text-6xl whitespace-nowrap">
            Get in touch with us!
          </p>
        </div>
        <div className="flex flex-col lg:flex-row  items-center justify-center  text-white">
          <div className="flex flex-col items-center border-yellow-900 lg:border-r h-48 p-5">
            <i class="fa-solid mb-2 mb-4 text-yellow-900 fa-2xl fa-phone-volume"></i>
            <p className="text-yellow-900">Phone no:-</p>
            <p>+91 7061652485</p>
            <p>+91 7061652485</p>
          </div>
          <div className="flex border-yellow-900  flex-col items-center whitespace-nowrap lg:border-r h-48 w-80 p-5">
            <i class="fa-solid text-yellow-900 mb-4 fa-2xl fa-location-dot"></i>
            <p className="text-yellow-900">Location</p>
            <p>Ward no-16, Koat bazar,</p>
            <p>Behind khemka hospital,sitamarhi</p>
          </div>
          <div className="flex flex-col items-center  h-48 p-5">
            <i class="fa-regular mb-4 text-yellow-900 fa-2xl fa-clock"></i>
            <p className="text-yellow-900 ">Time</p>
            <p>MON-SUN : 24 Hour</p>
          </div>
        </div>
      </div>
      <div className="bg-black" style={{ height: "80vh" }}>
        <form
          action="https://formspree.io/f/mwkgegbg"
          method="post"
          className="flex flex-col items-center justify-center "
        >
          <h1
            className="text-white lg:mt-8 "
            style={{ fontFamily: "Roboto Condensed" }}
          >
            If you have any question{" "}
          </h1>
          <h1
            className="text-white text-center  my-4"
            style={{ fontFamily: "Roboto Condensed" }}
          >
            Please do not hesitate to send us a message
          </h1>

          <input
            className="w-4/5 lg:w-1/3 bg-zinc-700 text-white   h-12 p-2 my-2 "
            type="text"
            name="name"
            id="name"
            placeholder="Your name"
            required
          />
          <input
            className="w-4/5 lg:w-1/3 bg-zinc-700 text-white   h-12 p-2 my-2 "
            type="text"
            id="email"
            name="email"
            placeholder="Email"
          />
          <input
            className="w-4/5 lg:w-1/3 bg-zinc-700 text-white   h-12 p-2 my-2 "
            type="text"
            id="phone"
            name="phone"
            placeholder="Your Phone No"
            required
          />
          <textarea
            className="w-4/5 lg:w-1/3 bg-zinc-700 text-white   h-48 p-2 my-2 "
            name="message"
            id="message"
            placeholder="How can we help you"
          ></textarea>
          <button className="w-40 h-12 my-2  bg-yellow-900" type="submit">
            MESSAGE
          </button>
        </form>
      </div>
    </>
  );
}
