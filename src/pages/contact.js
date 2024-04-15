import React from "react";
import Contact_us from "../components/contact_us";

export default function Contact() {
  return (
    <>
      <div
        className="w-full h-screen bg-cover bg-center flex flex-col items-center justify-center text-center  font-mono bg-no-repeat"
        style={{ backgroundImage: 'url("contact.jpg")', height: "80vh", }}
      ></div>
      {/* contact things */}

      <Contact_us/>
    </>
  );
}
