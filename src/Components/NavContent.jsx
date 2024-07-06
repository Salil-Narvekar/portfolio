import React, { useState } from 'react'

const NavContent = ({ navFor, navIcon }) => {

    const [isHovered, setIsHovered] = useState();

    return (
        <div
            className='grid justify-items-center items-center rounded-3xl cursor-pointer h-11 w-11 hover:bg-gradient-to-r from-transparent to-violet-500 hover:w-32 hover:ml-3 hover:scale-110 hover:justify-items-start hover:pl-4 hover:h-10 duration-500'
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {
                isHovered ?
                    <span className='text-md text-slate-600 font-semibold'> {navFor} </span>
                    :
                    <span className='text-lg text-black'> {navIcon} </span>
            }
        </div>
    )
}

export default NavContent