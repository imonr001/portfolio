import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import ResumePDF from "../assets/Ivan_Monroy_resume_.pdf";
import Logo1 from "../assets/logo1.png";
import {Link} from 'react-scroll'
function Navbar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const newTabClick = (url) => {
    window.open(url);
  };
  const openEmailClick = () => {
    window.open(
      "mailto:imonr001@ucr.edu.com?subject=Subject&body=Body%20goes%20here"
    );
  };

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-cyan-900 text-gray-300">
      <div>
        <h1 className="pt-10 " style={{ width: "90px" }}>
          {" "}
          <img src={Logo1} alt="Ivan" />
        </h1>
      </div>
      {/* {menu} */}
      <ul className="hidden md:flex">
        <li><Link to="home" spy={true} smooth={true} offset={50} duration={500}>
          Home </Link></li>
        <li><Link to="about" spy={true} smooth={true} offset={50} duration={500}>
          About </Link></li>
        <li><Link to="skills" spy={true} smooth={true} offset={50} duration={500}>
          Skills </Link></li>
        <li><Link to="projects" spy={true} smooth={true} offset={50} duration={500}>
          Projects </Link></li>
        <li><Link to="contact" spy={true} smooth={true} offset={50} duration={500}>
          Contact </Link></li>
      </ul>

      {/* hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-cyan-900 flex flex-col justify-center items-center"
        }
      >
        <li className=" py-6 text-4xl">
        <Link onClick={handleClick} to="home" spy={true} smooth={true} offset={50} duration={500}>
          Home </Link>
        </li>
        <li className=" py-6 text-4xl">
        <Link onClick={handleClick} to="about" spy={true} smooth={true} offset={50} duration={500}>
          About </Link>
        </li>
        <li className=" py-6 text-4xl">
        <Link onClick={handleClick} to="skills" spy={true} smooth={true} offset={50} duration={500}>
          Skills </Link>        </li>
        <li className=" py-6 text-4xl">
        <Link onClick={handleClick} to="projects" spy={true} smooth={true} offset={50} duration={500}>
          Projects </Link>
        </li>
        <li className=" py-6 text-4xl">
        <Link onClick={handleClick} to="contact" spy={true} smooth={true} offset={50} duration={500}>
          Contact </Link>        </li>
      </ul>

      {/* social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className=" w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-cyan-600 ">
            <a
              className=" flex justify-between items-center w-full text-gray-300"
              href={ResumePDF}
              download="Ivan_Monroy_Resume"
            >
              {" "}
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
          <li className=" w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600 ">
            <a
              className=" flex justify-between items-center w-full text-gray-300"
              href="/"
              onClick={() => {
                newTabClick(
                  "https://www.linkedin.com/in/ivan-monroy-25034a257/"
                );
              }}
            >
              {" "}
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className=" w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-600 ">
            <a
              className=" flex justify-between items-center w-full text-gray-300"
              href="/"
              onClick={() => {
                newTabClick("https://github.com/imonr001");
              }}
            >
              {" "}
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className=" w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-orange-500  ">
            <a
              className=" flex justify-between items-center w-full text-gray-300"
              href="/"
              onClick={openEmailClick}
            >
              {" "}
              Email <HiOutlineMail size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
