import React from "react";

function Card(props) {
  const newTabClick = (url) => {
    window.open(url);
  };

  return (
    <div className="  p-10  mb-5  sm:pb-32    ">
      <div className="    h-20 w-84  sm:h-[400px] sm:w-[400px]  max-h[500px] max-w-[500px]  sm:border-4  sm:rounded-lg border-yellow-300  md:hover:scale-150 duration-500 ">
        <img className="  sm:h-80 sm:w-full" src={props.image} alt="thisIma" />
        <div className=" flex  p-4  justify-center  bg-gray-900  sm:p-4   ">
          <button
            onClick={() => {
              newTabClick(props.live);
            }}
            className="  mx-10 border-4 rounded-sm bg-gray-300 text-gray-900 font-bold  text-sm sm:text-lg md:hover:scale-75 duration-500"
          >
            Demo
          </button>
          <button
            onClick={() => {
              newTabClick(props.github);
            }}
            className=" mx-10 border-4 rounded-sm bg-gray-300 text-gray-900 font-bold text-sm sm:text-lg md:hover:scale-75 duration-500"
          >
            Github
          </button>
        </div>
        <div className="sm:mt-10 flex mx-auto  justify-evenly  h-full  max-h-28  text-center bg-gray-900 " >
          <p className="  invisible sm:visible   flex-1 sm:border-4 sm:border-yellow-300 sm:p-5   text-base text-center rounded-lg font-bold">{props.msg}</p>
        </div>
      </div>
  
    </div>
  );
}

export default Card;
