import React, { useState } from 'react'

const ContactForm = () => {

    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')

    return (
        <div className='grid grid-rows-3 lg:grid-cols-4 gap-2 justify-items-center'>
            <input
                className="lg:col-span-1 rounded text-slate-700 text-md font-medium h-full w-full pl-2 py-1 lg:py-3"
                type="email"
                id="email"
                name="email"
                placeholder='Your Email'
                onChange={(e) => setEmail(e.target.value)}
            />

            <input
                className="lg:col-span-2 rounded text-slate-700 text-md font-medium h-full w-full pl-2 py-1 lg:py-3"
                type="subject"
                id="subject"
                name="subject"
                placeholder='Enter subject'
                onChange={(e) => setSubject(e.target.value)}
            />

            <div className="lg:col-span-1 grid justify-items-center items-center w-full h-full bg-gradient-to-r from-indigo-950 to-cyan-700 text-slate-300 text-sm transition duration-500 ease-in-out hover:scale-95 hover:bg-gradient-to-l hover:text-white cursor-pointer rounded-lg font-semibold text-lg">
                <a href={"https://mail.google.com/mail/?view=cm&fs=1&to=narvekarsalil1106@gmail.com&su="+email + ' - ' +subject}> Let's Connect </a>
            </div>
        </div>
    )
}

export default ContactForm