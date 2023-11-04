import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(){
    return(
        <>
            <div class="navh borderb flex flex-row">
                <div class="borderr flex basis-5/6 items-center justify-between bg-[#FFB2EF] px-20">
                    <div class="text-3xl">ExhibitHQ</div>
                    <div class="flex flex-row gap-20">
                        <div class="">HOME</div>
                        <div class="">ABOUT</div>
                        <div class="">GITHUB</div>
                    </div>
                </div>
                <div class="flex basis-1/6 items-center justify-center bg-[#C4A1FF]">JOIN</div>
            </div>
        </>
    )
}