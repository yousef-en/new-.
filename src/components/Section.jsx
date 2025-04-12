import React from "react"
import poster from "../assets/hero/hero-poster.svg"

export const Section=()=>{


    return(
        <div className=" py-[6rem] px-[6rem] flex justify-between bg-white">
            <div>
                <h1 className=" text-[4rem] font-semibold text-gray-600 leading-20">Lessons and insights</h1>
                <h1 className=" text-[4rem] font-semibold text-[rgba(76 ,175 ,79)] leading-20">from 8 years</h1>
                <p className=" font-normal text-gray-800 leading-20">Where to grow your business as a photographer: site or social media?</p>
                <button className=" rounded-md text-white bg-green-500 px-8 py-3">Register</button>
            </div>
            <div>
                <img src={poster} alt="logo" />
            </div>

        </div>
    )
}