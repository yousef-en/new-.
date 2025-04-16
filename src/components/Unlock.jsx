import React from "react";
import unlockPhoto from "../assets/unlock-img.svg";


export const Unlock =()=>{

    return (
      <>
        <div className=" px-[3rem]">
          <div className=" flex items-center justify-between gap-7">
            <div className=" w-[44%]">
              <img className=" w-full" src={unlockPhoto} alt="" />
            </div>

            <div className=" w-[45%]">
              <h1 className=" text-4xl font-semibold text-[#4D4D4D] ">
                The unseen of spending three years at Pixelgrade
              </h1>
              <p className=" text-sm font-normal text-[#4D4D4D] mt-5 leading-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                provident, odio ullam, non deleniti enim et sapiente sed sit
                praesentium fugiat iusto, officiis quidem obcaecati eveniet.
                Iste possimus optio alias?
              </p>
              <div className=" flex justify-items-start mt-6 ">
                <button className=" text-white bg-[#3bb63f] py-3 px-6 rounded-md ">learn More</button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
} 