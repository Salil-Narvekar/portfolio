import React, { useState } from 'react'

const NavContent = ({ navFor, navIcon }) => {

    const [isHovered, setIsHovered] = useState();

    return (
        <div
            className='grid justify-items-start items-center rounded-3xl cursor-pointer h-8 w-8 lg:h-12 lg:w-12 pl-1 duration-500 animate-fadeFromLeft'
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
                    <span className='grid grid-flow-col gap-2 items-center text-xs lg:text-lg text-black font-semibold pl-2 backdrop-blur-sm rounded-3xl'>
                        {navIcon}
                        {
                            isHovered &&
                            navFor
                        }
                    </span>
        </div>
    )
}

export default NavContent