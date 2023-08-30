import React from "react";
import myPic from "../assets/my_pic.jpeg";

function About() {
  return (
    <div name="about" className=" h-screen bg-gray-800  flex   flex-col items-center justify-center  ">
          <p className="text-4xl font-bold inline border-b-4 border-yellow-300  text-gray-300  ">
            About Me
          </p>
      <div className="bg-white p-4 rounded-lg shadow-2xl mx-4 sm:flex sm:gap-16 sm:p-0 mt-10 " >
  
        <div className="flex items-center gap-2 sm:flex   text-sm sm:text-3xl sm:text-center  " >
          <img className="w-12 h-12  object-cover object-top rounded-full sm:h-full sm:w-[500px] sm:rounded-none " src={myPic} alt="/" />
          {/* <span className=" sm:text-xl">Ivan Monroy <br />Software Engineer </span> */}
          <div className="flex flex-col  justify-around">
         < p>Ivan Monroy</p>
         <p >Software Engineer</p>
          </div>
          
        </div>
        <div className="m-2  sm:m-12   md:text-center  text-right px-4 lg:py-12 ">
          <p className=" italic font-thin md:text-xl sm:text-sm text-xs  lg:text-3xl ">       “Hello my name is Ivan and I am a software engineer. I graduated
                from University of California, Riverside with a Bachlor's Degree
                in Computer Science. I would like to be part of a team to help
                design and develop great products. Below are some of the
                projects I have worked on as well as the skills that I have
                developed.”</p>
        </div>
        {/* <div className="  flex justify-center  bg-gray-800 rounded ">
          <p className="text-4xl font-bold inline border-b-4 border-yellow-300 pt-4 ">
            About Me
          </p>
        </div>
        <div className=" h-[400px] w-[350px] p-3  shadow-lg shadow-yellow-200  rounded-xl bg-gray-900  mt-14 sm:h-[600px] sm:[600px]">
          <div className="  h-full  flex justify-start  items-start p-10  bg-gray-900  rounded-3xl sm:h-full sm:w-full ">
            <img className=" rounded-full h-[100px] sm:h-full   " src={myPic} alt="/" />
            <div className=" flex flex-col  items-center  text-sm p-1     ">
              <p className="p-1"  >Ivan Monroy</p>
              <p className="p-1" >Software Engineer</p>
              <p className=" text-xs  italic p-3 ">
                “Hello my name is Ivan and I am a software engineer. I graduated
                from University of California, Riverside with a Bachlor's Degree
                in Computer Science. I would like to be part of a team to help
                design and develop great products. Below are some of the
                projects I have worked on as well as the skills that I have
                developed.”
              </p>
            </div>
          </div>
        </div> */}
        <div>
          {/* <figure className=" flex flex-col sm:flex-row text-sm md:text-lg justify-center bg-gray-800   overflow-hidden text-center shadow-xl  shadow-yellow-200 md:p-20">
            <img className="   rounded-3xl object-scale-down  " src={myPic} alt="" />
            <div className="pt-6  text-center md:text-left space-y-4 ">
              <figcaption class="font-medium sm:text-right p-4 text-lg ">
                <div class="text-gray-300 text-left ">Ivan Monroy</div>
                <div class="text-gray-300 text-left">
                  Software Engineer
                </div>
              </figcaption>
              <blockquote className="flex flex-col" >
                <p className=" text-left p-3  md:text-xl  md:font-medium  md:text-center   text-base">
                  “Hello my name is Ivan and I am a software engineer.
                  I graduated from University of California, Riverside with a Bachlor's Degree in Computer Science.
                  I would like to be part of a team to help design and develop great products. Below are some of the projects I have worked on as well as the skills that I have developed.”
                </p>
              </blockquote>
            </div>
          </figure> */}
        </div>
      </div>
    </div>
  );
}

export default About;
