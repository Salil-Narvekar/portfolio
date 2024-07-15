import React, { useState } from 'react'
import { FaGithub } from "react-icons/fa";
import { TbExternalLink } from "react-icons/tb";

const ProjectPlate = ({ projectName, projectSubtitle, description, languagesUsed, Git_pages_link, Git_code_link }) => {

    const [isHovered, setIsHovered] = useState();

    return (
        <div
            className='bg-gradient-to-t from-neutral-50 to-neutral-100
            grid sm:grid-rows-11 h-full w-full
            rounded-xl border border-purple-300 
            cursor-pointer
            hover:scale-95 duration-700'
        >
            <div className='row-span-2 grid justify-items-center items-center rounded-xl'>
                <div className='text-center'>
                    <div className='text-md md:text-lg lg:text-xl font-bold text-purple-950'>{projectName}</div>
                    <div className='text-xs md:text-sm lg:text-sm font-medium text-slate-600'>{projectSubtitle}</div>
                </div>
            </div>

            <div className="row-span-7 h-full border border-black rounded-xl md:ml-15 md:mr-15 lg:ml-20 lg:mr-20"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {

                    isHovered ?

                        <div className='grid justify-items-center items-center font-semibold text-xs md:text-sm lg:text-lg xl:text-xl h-full'>
                            <div className='grid gap-1 justify-items-center'>
                                <div>Redirect to Live Project URL</div>
                                <div className='text-blue-800'>{Git_pages_link}</div>
                                <TbExternalLink className='text-2xl md:text-3xl lg:text-4xl' />
                            </div>
                        </div>

                        :

                        <div className='grid h-full w-full'>

                        </div>

                }
            </div>


            {/* Languages used section */}
            <div className='row-span-1 grid grid-cols-8 lg:grid-cols-8 justify-items-center items-center border border-black'>
                {
                    Array(languagesUsed).map((language) => (
                        language
                    ))
                }
            </div>


            {/* git Source code link section */}
            <div className='row-span-1 grid 
                    grid-cols-9 lg:grid-cols-3 xl:grid-cols-2 gap-2 
                    justify-items-center items-center 
                    bg-gradient-to-b from-violet-950 to-violet-900 text-slate-200 font-medium rounded-b-xl'
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