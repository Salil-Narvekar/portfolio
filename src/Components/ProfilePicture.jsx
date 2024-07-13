import React from 'react'
import displayPicture from '../ProfilePicture.png'
import { FaUser } from "react-icons/fa";

const ProfilePicture = () => {
    return (
        <img
            src={displayPicture}
            alt={<FaUser />}
            className='rounded-full shadow-inner shadow-violet-500 
            hover:shadow-violet-800 duration-700 pl-2 pr-10 pt-4' 
        />
    )
}

export default ProfilePicture