import React from "react";
import icon1 from "../assets/community/Icon1.svg";
import icon2 from "../assets/community/Icon2.svg";
import icon3 from "../assets/community/Icon3.svg";

const Card = ({ icon, title, description }) => (

  <div className=" py-5 px-6 rounded-lg w-[300px]">
    <div>
      <div className=" relative text-center">
        <img className=" inline-block" src={icon} alt={title} />

        <span className="-z-10 absolute top-0 right-25 w-[50px] h-[49px] bg-[#cae9cc] "></span>
      </div>

      <h2 className=" text-[2rem] text-[#4D4D4D] font-bold text-center leading-9 ">
        {title}
      </h2>
    </div>

    <p className="text-[#717171] text-sm font-normal text-center my-2">
      {description}
    </p>
  </div>
);

export const Community = ()=>{
    const cardData = [
        {
          icon: icon1,
          title: "Membership Organisations",
          description: "Our membership management software provides full automation of membership renewals and payments",
        },
        {
          icon: icon2,
          title: "National Associations",
          description: "Our membership management software provides full automation of membership renewals and payments",
        },
        {
          icon: icon3,
          title: "Clubs And Groups",
          description: "Our membership management software provides full automation of membership renewals and payments",
        },
      ];

    return (
      <div className=" text-center">
        <div>
          <h1 className=" text-[#4D4D4D] text-4xl font-bold mt-3">
            Manage your entire community
          </h1>
          <h1 className=" text-[#4D4D4D] text-4xl font-bold">in a single system</h1>
          <p className=" text-[#b0aeae] font-normal text-base my-3">
            Who is Nextcent suitable for?
          </p>
        </div>
        <div className=" flex justify-between ">
          {cardData.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
      </div>
    );
}