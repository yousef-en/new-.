import React from "react"
import icon1 from "../assets/clients/icon1.svg";
import icon2 from "../assets/clients/icon2.svg";
import icon3 from "../assets/clients/icon3.svg";
import icon4 from "../assets/clients/icon4.svg";
import icon5 from "../assets/clients/icon5.svg";
import icon6 from "../assets/clients/icon6.svg";


export const Clients = ()=>{

    return (
      <>
        <div className=" flex flex-col my-10 px-36 text-center">
          <h1 className=" text-[#4D4D4D] leading-10 my-2 text-4xl font-semibold ">
            Our Clients
          </h1>
          <p className=" text-[#717171b6] text-base font-normal">
            We have been working with some Fortune 200+ clients
          </p>

          <div className=" flex justify-between items-center mt-5 ">
            <img src={icon1} alt="clients logo" />
            <img src={icon2} alt="clients logo" />
            <img src={icon3} alt="clients logo" />
            <img src={icon4} alt="clients logo" />
            <img src={icon5} alt="clients logo" />
            <img src={icon6} alt="clients logo" />
          </div>
        </div>
      </>
    );
}