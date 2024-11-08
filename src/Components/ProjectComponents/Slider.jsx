import React, { useState } from 'react'

const Slider = ({ pageCount, setCurrentpageProp }) => {

    const [currentpage, setCurrentpage] = useState(0)
    // console.log(page)

    return (
        <div className='flex space-x-2'>
            {
                Array.from({ length: pageCount }).map((_,index) => (
                    <div
                        key={index}
                        onClick={() => {
                            setCurrentpageProp(index);
                            setCurrentpage(index)
                        }}
                        className={
                            currentpage === index ?
                            'bg-purple-900 border-2 border-purple-400 h-4 w-4 md:h-5 md:w-5 lg:h-5 lg:w-5 xl:h-6 xl:w-6 rounded-full cursor-pointer'
                            :
                            'bg-purple-300 border-2 border-purple-400 hover:bg-purple-900 duration-300 h-4 w-4 md:h-5 md:w-5 lg:h-5 lg:w-5 xl:h-6 xl:w-6 rounded-full cursor-pointer'
                        }
                    />
                ))
            }
        </div>
    )
}

export default Slider