import React from 'react'
import SocialMediaPanel from './SocialMediaPanel'

const TitleBar = () => {
    return (
        <div className='grid grid-cols-4'>

            <div className='col-span-3 grid justify-items-start items-center text-sm md:text-md lg:text-lg xl:text-xl font-semibold pl-2 w-full'>
                Portfolio WebApp
            </div>

            <div className='flex justify-end w-full'>
                <SocialMediaPanel />
            </div>
        </div>
    )
}

export default TitleBar