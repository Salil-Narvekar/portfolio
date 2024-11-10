import React from 'react'

const MarqueeCell = ({ index, cellTitle, cellLogo }) => {
    return (
        <>
            <div className='grid grid-rows-3 justify-center content-center'>
                <div className='grid justify-center content-center'>
                    {
                        cellLogo && Array(cellLogo) &&
                        <span className='flex gap-4 justify-center text-3xl md:text-5xl lg:text-5xl xl:text-5xl h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 xl:h-16 xl:w-16'>{cellLogo}</span>
                    }
                </div>
                <span className={`text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-slate-800 font-semibold drop-shadow-xl`}>{cellTitle}</span>
                <div className={`rounded-full drop-shadow-xl animate-pulse bg-gradient-to-l  ${index % 2 == 1 ? 'from-violet-300 to-violet-950' : 'from-teal-300/20 to-teal-950' } h-1 justify-items-center w-5/6`}></div>
            </div>
        </>
    )
}

export default MarqueeCell