import React from "react";
import myPic from "../assets/my_pic.jpeg";

function About() {
  return (
    <div name="about" className="w-full h-screen bg-gray-800 text-gray-300  ">
      <div className=" flex flex-col  justify-center items-center w-full h-full">
        <div className=" flex justify-center p-2 bg-gray-800 rounded ">
          <p className="text-4xl font-bold inline  border-b-4 border-yellow-300 ">
            About Me
          </p>
        </div>
        <div>
          <figure className=" flex text-sm md:text-lg justify-center bg-gray-800   overflow-hidden text-center shadow-xl  shadow-yellow-200 md:p-20">
            <img className="   rounded-3xl  p-4 object-scale-down  " src={myPic} alt="" />
            <div className="pt-6  text-center md:text-left space-y-4 ">
              <figcaption class="font-medium sm:text-right p-4 text-lg">
                <div class="text-gray-300 text-left ">Ivan Monroy</div>
                <div class="text-gray-300 text-left">
                  Software Engineer
                </div>
              </figcaption>
              <blockquote>
                <p className=" text-left p-3  md:text-xl  md:font-medium  md:text-center   text-base">
                  “Hello my name is Ivan and I am a software engineer.
                  I graduated from University of California, Riverside with a Bachlor's Degree in Computer Science.
                  I would like to be part of a team to help design and develop great products. Below are some of the projects I have worked on as well as the skills that I have developed.”
                </p>
              </blockquote>
            </div>
          </figure>
        </div>
      </div>
    </div>
  );
}

export default About;
