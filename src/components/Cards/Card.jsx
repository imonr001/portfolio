import React from "react";

function Card(props) {
  const newTabClick = (url) => {
    window.open(url);
  };

  return (
    <div className="p-10 mb-5  pb-32 flex  justify-between  ">
      <div className=" h-[400px] w-[400px]  max-h[500px] max-w-[500px] border-4 rounded-lg border-yellow-300  md:hover:scale-150 duration-500">
        <img className=" h-80 w-full" src={props.image} alt="thisIma" />
        <div className="flex  justify-center bg-gray-900 p-4 ">
          <button
            onClick={() => {
              newTabClick(props.live);
            }}
            className=" mx-10 border-4 rounded-sm bg-gray-300 text-gray-900 font-bold text-lg md:hover:scale-75 duration-500"
          >
            Demo
          </button>
          <button
            onClick={() => {
              newTabClick(props.github);
            }}
            className=" mx-10 border-4 rounded-sm bg-gray-300 text-gray-900 font-bold text-lg md:hover:scale-75 duration-500"
          >
            Github
          </button>
        </div>
        <div className="mt-10 flex mx-auto  justify-evenly  h-full max-h-28  text-center bg-gray-900 " >
          <p className="  flex-1 border-4 border-yellow-300 p-5   text-base text-center rounded-lg font-bold">{props.msg}</p>
        </div>
      </div>
  
    </div>
  );
}

export default Card;
