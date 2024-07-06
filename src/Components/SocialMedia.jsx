import React from 'react'

const SocialMedia = ({SocialMediaIcon, href}) => {
  return (
    <div className='rounded-3xl text-3xl h-fit'>
        <a href={href}>{SocialMediaIcon}</a>
    </div>
  )
}

export default SocialMedia