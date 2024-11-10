import React, { useState } from 'react'

const ImagePlate = ({ index, src, onClick, title }) => {
    const [hover, setHover] = useState(false)

    return (
        <div
            className={`relative content-center brightness-75 hover:brightness-100 rounded-lg transition-all duration-300 ${onClick ? 'cursor-pointer' : 'cursor-move'}`}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onClick={onClick}
            data-aos-offset="100" data-aos-mirror="true" data-aos-delay={`${index}50`} data-aos={index % 2 == 1 ? 'slide-left' : 'slide-right'} 
        >
            {
                !hover &&
                <div className="absolute inset-0 flex items-center justify-center z-40 duration-500 transition-all"  data-aos-delay='200' data-aos='fade-up'>
                    <span className='text-slate-950 text-lg md:text-lg lg:text-xl xl:text-3xl font-extrabold text-center backdrop-blur-sm bg-gradient-to-t from-slate-50/20 to-transparent font-serif border-b-4 border-slate-950 rounded-lg w-11/12 pr-2 pl-2'>{title}</span>
                </div>
            }

            <img src={src} alt="Image unavailable !!" />
        </div>
    )
}

export default ImagePlate