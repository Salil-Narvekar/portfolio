import React, { useState } from 'react'
import { BsFillBookmarkCheckFill } from "react-icons/bs";
import { TbExternalLink } from "react-icons/tb";

const Certificate = ({ href, certificateFor, certifiedBy }) => {

    const [isHovered, setIsHovered] = useState();

    return (
        <div
            className='bg-gradient-to-r from-amber-400 to-amber-200 h-full w-full 
            grid grid-rows-12 justify-items-center items-start 
            rounded-3xl border-l border-t border-4 border-amber-600 
            shadow-inner shadow-amber-500 cursor-pointer 
            hover:bg-gradient-to-r hover:from-amber-500 hover:to-amber-300 hover:scale-95 duration-700'
            onClick={() => window.open(href)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className='row-span-4 grid justify-items-end items-start text-4xl md:text-4xl lg:text-6xl text-amber-600 w-full pr-1 md:pr-2 lg:pr-0'>
                <BsFillBookmarkCheckFill />
            </div>

            <div className='row-span-6 grid justify-items-center items-center h-full w-full font-serif text-md md:text-xl lg:text-2xl pl-2 pr-2'>
                {certificateFor}<br/>
                {certifiedBy}
            </div>

            {
                isHovered &&

                <div className='row-span-2 w-full h-full grid justify-items-center font-semibold text-md md:text-lg lg:text-2xl'>
                    <div>
                        View Certificate
                        {/* <TbExternalLink className='text-4xl text-left' /> */}
                    </div>
                </div>
            }
        </div>
    )
}

export default Certificate