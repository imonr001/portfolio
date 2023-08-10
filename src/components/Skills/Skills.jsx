import React from "react";
import SkillsImage from "../Skills/SkillsImage";
import CSS from "../../assets/css.png";
import JAVASCRIPT from "../../assets/javascript.png";
import GITHUB from "../../assets/github.png";
import REACT from "../../assets/react.png";
import NODEJS from "../../assets/node.png";
import HTML from "../../assets/html.png";
function Skills() {
  return (
    <div name="skills" className=" w-full h-screen bg-cyan-900 text-gray-300">
      <div className=" max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="  md:text-center  sm:text-left">
          <p className="text-4xl font-bold inline border-b-4 border-yellow-300 ">
            Skills
          </p>
          <p className=" py-4 ">
            These are the technologies that I've worked with
          </p>
        </div>
        <div className="w-full  grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8">
          <SkillsImage skill={HTML} name="HTML" />
          <SkillsImage skill={CSS} name="CSS" />
          <SkillsImage skill={JAVASCRIPT} name="JAVASCRIPT" />
          <SkillsImage skill={GITHUB} name="GITHUB" />
          <SkillsImage skill={REACT} name="REACT" />
          <SkillsImage skill={NODEJS} name="NODEJS" />
        </div>
      </div>
    </div>
  );
}

export default Skills;
