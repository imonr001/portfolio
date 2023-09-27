import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

import resumePDF from '../assets/Resume_Ivan_Monroy.pdf'

function Home() {
  return (
    <div name="home" className="w-full h-screen bg-cyan-900">
      {/* container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className=" text-yellow-200">Hi, my name is </p>
        <h1 className=" text-4xl sm:text-7xl font-bold text-white ">
          Ivan Monroy
        </h1>
        <h2 className=" text-4xl sm:text-7xl font-bold text-zinc-300 ">
          I'm a Full-stack Software Engineer
        </h2>
        <p className="text-gray-200 py-4 max-w-[700px]   text-justify">
          I enjoy building full-stack web applications using react and tailwind
        </p>
        <div>
          <a href={resumePDF} download="Ivan_Monroy_Resume">
          <button className="  text-black font-medium group border-2 px-6 py-3 my-2 flex items-center hover: bg-yellow-200 hover:border-yellow-500" >Resume
             {/* <a href={resume} download="Resume_Ivan_Monroy">Resume</a> */}
            <span className=" group-hover:rotate-90 duration-300">
              <HiOutlineArrowNarrowRight className="ml-3" />
            </span>
           
          </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
