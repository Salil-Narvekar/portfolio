import React, { useState } from 'react'
import { FaGithub } from "react-icons/fa";
import { TbExternalLink } from "react-icons/tb";

const ProjectPlate = ({ projectName, projectSubtitle, description, languagesUsed, Git_pages_link, Git_code_link }) => {

    const [isHovered, setIsHovered] = useState();

    return (
        <div
            className='bg-gradient-to-r from-violet-400 to-indigo-200
            grid sm:grid-rows-8 gap-1 h-96 w-full
            rounded-3xl border-l border-t border-2 border-violet-600 
            shadow-inner shadow-violet-500 cursor-pointer 
            hover:bg-gradient-to-t hover:from-violet-400 hover:to-indigo-200 hover:scale-95 duration-700'
        >

            {/* git main project section */}
            <div
                className='row-span-7 h-full w-full pl-2 pr-2'
                onClick={() => window.open(Git_pages_link)}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {
                    isHovered ?

                        <div className='grid justify-items-center items-center h-full font-semibold text-xs md:text-sm lg:text-xl xl:text-2xl'>
                            <div className='grid gap-1 justify-items-center'>
                                <div>Redirect to Live Project URL</div>
                                <div className='text-blue-800'>{Git_pages_link}</div>
                                <TbExternalLink className='text-2xl md:text-3xl lg:text-4xl' />
                            </div>
                        </div>

                        :

                        <div className='grid grid-rows-12 h-full justify-items-center items-start'>

                            <div className='row-span-3 grid justify-items-center items-center h-full w-full rounded-3xl pt-2 pb-2'>
                                <div className='text-md md:text-lg lg:text-2xl font-bold'>{projectName}</div>
                                <hr className='border border-slate-800 w-5/6' />
                                <div className='text-xs md:text-sm lg:text-md font-medium'>{projectSubtitle}</div>
                            </div>

                            <div className='row-span-7 grid justify-items-center items-center h-full w-full rounded-3xl'>
                                {description}
                            </div>

                            <div className='row-span-2 grid grid-cols-6 justify-items-end items-center font-medium h-full w-full rounded-3xl pl-2 pr-2'>
                                {
                                    Array(languagesUsed).map((language) => (

                                        <div className='col-span-5 w-full grid grid-cols-7 lg:grid-cols-12 gap-2 justify-items-start items-center text-lg md:text-xl lg:text-2xl'>
                                            {language}
                                        </div>
                                    ))
                                }
                                <div className='col-span-1 text-md w-full'>
                                    {/* Skill Name */}
                                </div>
                            </div>
                        </div>
                }

            </div>


            {/* git Source code link section */}
            <div
                className='row-span-1 grid 
                    grid-cols-9 lg:grid-cols-3 xl:grid-cols-2 gap-2 
                    justify-items-center items-center 
                    bg-violet-950 text-slate-200 font-medium items-center h-full w-full rounded-3xl'
                onClick={() => window.open(Git_code_link)}
            >
                <div className='text-lg md:text-xl lg:text-2xl grid justify-items-end w-full'>
                    <FaGithub />
                </div>
                <span className='col-span-8 lg:col-span-2 xl:col-span-1 w-full text-left text-xs md:text-sm lg:text-md'> Click to View Project's Git Source Code.</span>
            </div>

        </div>
    )
}

export default ProjectPlate