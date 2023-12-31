import React from "react";
import Card from "./Cards/Card";
import scribble from "../assets/scribble.png";
import ubank from '../assets/ubank.png';

function Projects() {
  return (
    <div name="projects" className="w-full h-screen text-gray-300 bg-[#0a192f] p-28 overflow-hidden ">
      <div className="max-w-[1000px] mx-auto p-4 flex  justify-center w-full h-full   ">
        <div className=" sm:p-8 mr-72 md:mr-auto  pb-8 md:text-center sm:text-left pl-14   ">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-yellow-300 ">
            Projects
          </p>
          <div className="justify-normal  justify-items-start w-full grid grid-cols-1 sm:grid-cols-3  sm:gap-96 gap-32   ">
            <Card
              live={"https://ubank-e8qwy8qg5-ivans-projects-443c966c.vercel.app/"}
              image={ubank}
              github={"https://github.com/imonr001/ubank"}
              msg={"Bank website created using Next.js for frontend and Supabase for the backend "} />
            <Card
              live={"https://imonr001.github.io/notes/"}
              github={"https://github.com/imonr001/notes"}
              image={scribble}
              msg={"Note taking website created using Node.js, React, and Supabase for the backend"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
