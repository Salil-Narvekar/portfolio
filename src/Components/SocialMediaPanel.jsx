import React from 'react'
import SocialMediaIcon from './SocialMediaIcon'
import Resume from './Resume';
import { RiInstagramFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

const SocialMediaPanel = () => {
    return (
        <div>
            <div className='flex flex-cols-7 gap-1 lg:gap-4'>
                <div className='col-span-3'>
                    <Resume resumeUrl={'https://www.google.com'}/>
                </div>
                <SocialMediaIcon href='https://mail.google.com/mail/?view=cm&fs=1&to=narvekarsalil1106@gmail.com' icon={<BiLogoGmail />} />
                <SocialMediaIcon href='https://www.linkedin.com/in/salil-narvekar-2a7a06280/' icon={<FaLinkedin />} />
                <SocialMediaIcon href='https://github.com/Salil-Narvekar' icon={<FaGithub />} />
                <SocialMediaIcon href='https://www.instagram.com/salil.11._/' icon={<RiInstagramFill />} />
            </div>
        </div>
    )
}

export default SocialMediaPanel