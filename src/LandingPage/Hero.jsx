import React from "react";

export default function Hero(){
    return(
        <>
            <div className="heroh flex flex-row">
                <div className="borderr flex basis-7/12 items-center px-20 text-6xl bg-[#FDFD96]">Showcase your skills to the world</div>
                <div className="basis-5/12 bg-[#BAFCA2]">
                    <img src="assets/hero.jpeg" className="w-full h-full object-contain"/>
                </div>
            </div>
        </>
    )
}