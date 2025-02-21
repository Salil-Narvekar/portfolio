import React from 'react'
import profilePicture from '../../Images/profilePicture.png'

const DisplayPicture = () => {
    return (
        <div className='grid justify-center items-end content-end' data-aos-offset="80" data-aos-mirror="true" data-aos='fade-up'>
            <img
                src={profilePicture}
                alt='Profile picture unavailable!!'
                loading="lazy"
                style={{height:'450px', width: '450px'}}
            />
        </div>
    )
}

export default DisplayPicture