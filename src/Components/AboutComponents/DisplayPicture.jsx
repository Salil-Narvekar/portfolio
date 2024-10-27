import React from 'react'
import { FaUser } from "react-icons/fa";
import profilePicture from '../../Images/profilePicture.png'

const DisplayPicture = () => {
    return (
        <div className='grid justify-center items-end content-end'>
            <img
                src={profilePicture}
                alt='Profile picture unavailable!!'
                loading="lazy"
                style={{height:'450px', width: '300px'}}
            />
        </div>
    )
}

export default DisplayPicture