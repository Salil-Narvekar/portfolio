import React, { useState } from 'react'
import { BsFillBookmarkCheckFill } from "react-icons/bs";
import { TbExternalLink } from "react-icons/tb";

const Certificate = ({ href, certificateFor, certificateNo }) => {

    const [isHovered, setIsHovered] = useState();

    return (
        <div
            className='bg-gradient-to-r from-amber-400 to-amber-200 h-full w-full 
            grid grid-rows-12 justify-items-center items-start 
            rounded-3xl border-l border-t border-4 border-amber-600 
            shadow-inner shadow-amber-500 cursor-pointer 
            hover:bg-gradient-to-t hover:from-amber-400 hover:to-amber-200 hover:scale-95 duration-700'
            onClick={() => window.open(href)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >

            <div className='row-span-3 grid justify-items-end items-start text-4xl md:text-4xl lg:text-6xl text-amber-600 w-full pr-1 md:pr-2 lg:pr-0'>
                <BsFillBookmarkCheckFill />
            </div>

            {
                isHovered ?

                    <div className='row-span-6 w-full h-full grid items-center font-semibold text-balance animate-zoomIn'>
                        <div className='grid justify-items-center'>
                            <div className='text-md md:text-lg lg:text-2xl'> View / Download Certificate PDF</div>
                            <TbExternalLink className='text-2xl md:text-3xl lg:text-4xl' />
                        </div>
                    </div>

                    :

                    <div className='row-span-6 grid grid-rows-2 justify-items-center items-center h-full w-full pl-2 pr-2 text-balance'>
                        <div className='font-serif font-bold text-lg md:text-2xl lg:text-3xl xl:text-4xl'>{"Certificate " + certificateNo}</div>
                        <div className='text-center font-sans font-semibold text-md md:text-xl lg:text-xl xl:text-2xl'>{certificateFor}</div>
                    </div>
            }

        </div>
    )
}

export default Certificate