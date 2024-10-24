import React from 'react'
import SocialMediaIcon from './SocialMediaIcon'
import Resume from './Resume';
import { RiInstagramFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

const SocialMediaPanel = () => {

    const socials = {
        'https://mail.google.com/mail/?view=cm&fs=1&to=narvekarsalil1106@gmail.com': <BiLogoGmail />,
        'https://www.linkedin.com/in/salil-narvekar/': <FaLinkedin />,
        'https://github.com/Salil-Narvekar': <FaGithub />,
        'https://www.instagram.com/salil.11._/': <RiInstagramFill />,
    }

    return (
        <div>
            <div className='flex flex-cols-7 gap-1 lg:gap-4 animate-fadeFromTop'>
                
                <div className='col-span-3'>
                    <Resume />
                </div>

                {
                    Object.entries(socials).map(([key_href, value_icon], index) => (
                        <SocialMediaIcon
                            key={index}
                            href={key_href}
                            icon={value_icon}
                        />
                    ))
                }

            </div>
        </div>
    )
}

export default SocialMediaPanel