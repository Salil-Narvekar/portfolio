import React from 'react'

const SocialMediaIcon = ({ icon, href }) => {
    return (
        <div className='rounded-3xl text-lg md:text-xl lg:text-2xl xl:text-3xl hover:scale-105 hover:translate-y-1 duration-500 cursor-pointer'>
            <a href={href}>{icon}</a>
        </div>
    )
}

export default SocialMediaIcon