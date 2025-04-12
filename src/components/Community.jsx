import React from "react"
import icon1 from "../assets/community/Icon1.svg";
import icon2 from "../assets/community/Icon2.svg";
import icon3 from "../assets/community/Icon3.svg";

const Card = ({ icon , title , discription})=> {
    <div>
        <div>
            <div>

                <img src={icon} alt={title} />

                <span className=""></span>
            </div>

            <h2 className=" text-4xl text-[#4D4D4D] font-bold text-center ">{title} </h2>
        </div>

        <p className="text-[#717171] text-sm font-normal text-center">{discription}</p>

    </div>
}

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
      <>
      <div className=" text-center">

        <div>
            <h1 className=" text-[#4D4D4D] text-4xl">Manage your entire community</h1>
            <h1 className=" text-[#4D4D4D] text-4xl">in a single system</h1>
            <p className=" font-normal text-2xl">Who is Nextcent suitable for?</p>
        </div>
        <div className=" flex justify-between ">
            {cardData.map((card,index )=>{
                <Card key={index} {...card}/>
            })}

        </div>
      </div>
       
      </>
    );
}